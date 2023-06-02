import { createContext, useState, useEffect } from "react";

export const WordsContext = createContext();

export const WordsContextProvider = ({ children }) => {
  const [words, setWords] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function loadData() {
    setIsLoading(true);
    try {
      fetch("http://itgirlschool.justmakeit.ru/api/words")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("попробуйте еще раз");
          }
        })
        .then((data) => {
          setIsLoading(false);
          setWords(data);
        });
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  async function addWord(newWord) {
    console.log("post");
    try {
      const data = await fetch("/api/words/add", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });

      const json = await data.json();

      console.log(json);
      //   setWords([...words, json]);
      //   loadData();
      //   console.log(words);
    } catch (err) {
      return "Что-то пошло не так";
    }
  }

  async function updateWord(id, word) {
    console.log("update");
    try {
      const data = await fetch(`/api/words/${id}/update`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(word),
      });

      const json = await data.json();

      console.log(json);
      //setWords([...words, json]);
      loadData();
      console.log(words);
    } catch (err) {
      return "Не получилось редактировать слово";
    }
  }

  async function deleteWord(id, word) {
    console.log("delete");
    try {
      const data = await fetch(`/api/words/${id}/delete`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(word),
      });

      const json = await data.json();

      console.log(json);
      //setWords([...words, json]);
      //loadData();
      //console.log(words);
    } catch (err) {
      return "Не удалось удалить слово";
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  {
    isLoading && <div>Loading...</div>;
  }
  {
    error && <div>{`Ошибка: ${error.message}`}</div>;
  }

  const values = { words, addWord, updateWord, deleteWord };

  return (
    <WordsContext.Provider value={values}>{children}</WordsContext.Provider>
  );
};
