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
      fetch("/api/words/add", {
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
          setWords(data);
        });
    } catch (error) {
      setIsLoading(false);
      setError(error);
      return "Не получилось добавить слово";
    }

    loadData();

  }

  async function updateWord(id, newWord) {
    console.log("update");

    // const index = words.findIndex((item) => item.id === word.id);
    // words[index] = word;
    // setWords([...words]);

    try {
      fetch(`/api/words/${id}/update`, {
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
          setWords(data);
        });
    } catch (error) {
      setIsLoading(false);
      setError(error);
      return "Не получилось редактировать слово";
    }
    loadData();


  }

  async function deleteWord(id, newWord) {
    // const index = words.findIndex((item) => item.id === word.id);
    // words.splice([index], 1);
    // setWords([...words]);

    console.log("delete");

    try {
      fetch(`/api/words/${id}/delete`, {
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
          setWords(data);
        });
    } catch (error) {
      setIsLoading(false);
      setError(error);
      return "Не удалось удалить слово";
    }
    loadData();


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
