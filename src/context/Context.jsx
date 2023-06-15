import { createContext, useState, useEffect } from "react";

export const WordsContext = createContext();

export const WordsContextProvider = ({ children }) => {
  const [words, setWords] = useState([]);

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
    console.log("addWord");
    try {
      fetch("api/words/add", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("попробуйте еще раз");
          }
        })
        .then((data) => {
          setIsLoading(false);
          setWords((prevWords) => [...prevWords, data]);
        });
    } catch (error) {
      setIsLoading(false);
      setError(error);
      return "Не получилось добавить слово";
    }
    loadData();
  }

  async function updateWord(id, newWord) {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newWord),
        }
      );

      if (response.ok) {
        setIsLoading(false);
        setWords((prevWords) =>
          prevWords.map((word) =>
            word.id === id ? { ...word, ...newWord } : word
          )
        );
      } else {
        throw new Error("попробуйте еще раз");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
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

  const values = { words, addWord, updateWord, deleteWord, loadData };

  return (
    <WordsContext.Provider value={values}>{children}</WordsContext.Provider>
  );
};
