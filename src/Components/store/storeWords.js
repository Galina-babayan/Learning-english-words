import { makeAutoObservable, runInAction } from "mobx";

export default class Words {
  words = [];
  isLoaded = false;
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadData() {
    if (this.isLoaded || this.isLoading) {
      return;
    }
    this.isLoading(true);

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
          this.isLoading = false;
          this.isLoaded = true;
          this.words = data;
        });
    } catch (error) {
      this.isLoading = false;
      this.isLoaded = false;
      this.error = error;
    }
  }

  async addWord(newWord) {
    this.isLoading = true;
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
        .then(() => {
          this.isLoading = false;
          this.words.push(newWord);
        });
    } catch (error) {
      this.isLoading = false;
      this.error = error;
      return "Не получилось добавить слово";
    }
    // loadData();
  }

  async updateWord(id, newWord) {
    this.isLoading = true;
    try {
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
        this.words.map((word) =>
          word.id === id ? { ...word, ...newWord } : word
        );
      } else {
        throw new Error("попробуйте еще раз");
      }
    } catch (error) {
      this.error = error;
    } finally {
      this.isLoading = false;
    }
  }

  async deleteWord(id, word) {
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
      //   const index = data.findIndex(item => item.id === word.id);
      //   this.words.splice(index, 1);

      console.log(json);
      //setWords([...words, json]);
      //loadData();
      //console.log(words);
    } catch (err) {
      return "Не удалось удалить слово";
    }
  }

  //   loadData = () => {
  //     this.isLoading(true);
  //     try {
  //       fetch("http://itgirlschool.justmakeit.ru/api/words")
  //         .then((response) => {
  //           if (response.ok) {
  //             return response.json();
  //           } else {
  //             throw new Error("попробуйте еще раз");
  //           }
  //         })
  //         .then((data) => {
  //           setIsLoading(false);
  //           setWords(data);
  //         });
  //     } catch (error) {
  //       setIsLoading(false);
  //       setError(error);
  //     }
  //   };

  //   loadData = async () => {
  //     // если данные уже были загружены или их уже кто-то загружает
  //     // то ничего не делаем
  //     if (this.isLoaded || this.isLoading) {
  //       return;
  //     }

  //     // пока все синхронно
  //     // поэтому runInAction не нужены
  //     this.isLoading = true;

  //     // загрузка с сервера (тут должен быть fetch)
  //     // асинхронно
  //     const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
  //     const data = await response.json();

  //     // так как код выше выполнялся асинхронно
  //     // то теперь меняя данные в MobX
  //     // надо явно указать на эти изменения
  //     // с помощью функции runInAction
  // runInAction(() => {
  //   this.words = data;
  //   this.isLoading = false;
  //   this.isLoaded = true;
  // });
  //   };
}