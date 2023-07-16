describe('Домашнее задание к лекции 5 «Классы»', () => {

  describe('Задача №1', () => {
    let printItem;

    beforeEach(function(){
      printItem = new PrintEditionItem('Типовой школьный журнал', 2019, 102);
    });

    it('создание печатного издания', () => {
      expect(printItem).toBeDefined();
      expect(printItem.name).toEqual('Типовой школьный журнал');
      expect(printItem.releaseDate).toEqual(2019);
      expect(printItem.pagesCount).toEqual(102);
      expect(printItem.state).toEqual(100);
      expect(printItem.type).toEqual(null);
    });

    it('починка почти целого печатного издания (ограничение сеттером state)', () => {
      printItem.state = 90;
      printItem.fix();
      expect(printItem.state).toEqual(100);
    });

    it('починка печатного издания', () => {
      printItem.state = 50;
      printItem.fix();
      expect(printItem.state).toEqual(75);
    });

    it('геттер для свойства state', () => {
      printItem.state = 10;
      const spy = spyOnProperty(printItem, 'state', 'get').and.returnValue(10);
      expect(printItem.state).toBe(10);
      expect(spy).toHaveBeenCalled();
    });
    
    it('сеттер для свойства state', () => {
      const spy = spyOnProperty(printItem, 'state', 'set');
      printItem.state = 10;
      expect(spy).toHaveBeenCalled();
    });

    it('создание объекта Magazine', () => {
      printItem = new Magazine('Forbes', 2020, 180);
      expect(printItem.type).toEqual("magazine");
    });
    
    it('создание объекта Book', () => {
      printItem = new Book('А. Сапковский', 'Меч Предназначения', 1992, 384);
      expect(printItem.author).toEqual('А. Сапковский');
      expect(printItem.name).toEqual('Меч Предназначения');
      expect(printItem.releaseDate).toEqual(1992);
      expect(printItem.pagesCount).toEqual(384);
      expect(printItem.type).toEqual('book');
    });

    it('создание объекта NovelBook', () => {
      printItem = new NovelBook('А. Сапковский', 'Меч Предназначения', 1992, 384);
      expect(printItem.author).toEqual('А. Сапковский');
      expect(printItem.type).toEqual('novel');
    });
    
    it('создание объекта FantasticBook', () => {
      printItem = new FantasticBook('Джон Толкин', 'Властелин колец', 1954, 2093);
      expect(printItem.author).toEqual('Джон Толкин');
      expect(printItem.type).toEqual('fantastic');
    });
    
    it('создание объекта DetectiveBook', () => {
      printItem = new DetectiveBook('Агата Кристи', 'Десять негритят', 2019, 256);
      expect(printItem.author).toEqual('Агата Кристи');
      expect(printItem.type).toEqual('detective');
    });
  });

  describe('Задача №2', () => {
    let library, printItem;
  
    beforeEach(function(){
      library = new Library('Библиотека имени Ленина');
      printItem = new PrintEditionItem('Типовой школьный журнал', 2019, 102);
    });

    it('создание библиотеки', () => {
      expect(library).toBeDefined();
      expect(library.name).toEqual('Библиотека имени Ленина');
      expect(library.books).toEqual(jasmine.any(Array));
    });
    
    it('добавление книги', () => {
      library.addBook(printItem);
      expect(library.books[0].name).toEqual('Типовой школьный журнал');
      expect(library.books.length).toEqual(1);
    });
    
    it('поиск книги', () => {
      const printItemAdditional = new PrintEditionItem('Блокнот для заметок', 2021, 100);
      library.addBook(printItemAdditional);
      library.addBook(printItem);
      const firstBook = library.findBookBy("releaseDate", 2019);
      expect(firstBook.name).toEqual('Типовой школьный журнал');
      const secondBook = library.findBookBy("releaseDate", 2154);
      expect(secondBook).toEqual(null);
    });
    
    it('выдача книги', () => {
      library.addBook(printItem);
      const firstBook = library.giveBookByName('Типовой школьный журнал');
      expect(firstBook.name).toEqual('Типовой школьный журнал');
      expect(library.books.length).toEqual(0);
      const secondBook = library.giveBookByName('Судовой журнал');
      expect(secondBook).toEqual(null);
    });
  })
});

  describe('Задача №2, пункт 5: собственный тестовый сценарий', () => {

    let myLittleBookshelf, fearAndLoathing, timeParadox, jojoPartX, theUndead, necro, shounenJampu;

    beforeEach(function(){
    fearAndLoathing = new Book("Пирожков Н.В.", "Страх и ненависть в Шумиловском", 1984, 303);
    timeParadox = new FantasticBook("Д. Альварес", "Воспоминания о минувшем будущем", 2078, 410);
    jojoPartX = new DetectiveBook("Дз. Хигасиката", "Кто подставил ДжоДжо и его кролика", 1999, 112);
    theUndead = new NovelBook("Долматов А.С.", "Смерть при жизни и жизнь после смерти: краткая автобиография", 2024, 228);
    necro = new Book("Г. Лавкрафт", "Некрономикон", 1919, 661);
    shounenJampu = new Magazine("Скачки юношества: еженедельник", 1968, 137);

    myLittleBookshelf = new Library("Список чтения для цитирования в части C");
  });

   it('Создаём собственную библиотеку', () => {
      expect(myLittleBookshelf).toBeDefined();
      expect(myLittleBookshelf.name).toEqual('Список чтения для цитирования в части C');
      expect(myLittleBookshelf.books).toEqual(jasmine.any(Array));
  })

    it('Добавляем несколько печатных изданий разных типов', () => {
    myLittleBookshelf.addBook(fearAndLoathing);
    myLittleBookshelf.addBook(timeParadox);
    myLittleBookshelf.addBook(jojoPartX);
    myLittleBookshelf.addBook(theUndead);
    myLittleBookshelf.addBook(necro);
    myLittleBookshelf.addBook(shounenJampu);

    expect(myLittleBookshelf.books.length).toEqual(6);
    expect(myLittleBookshelf.books[0].name).toEqual('Страх и ненависть в Шумиловском');
    expect(myLittleBookshelf.books[2].name).toEqual('Кто подставил ДжоДжо и его кролика');
    expect(myLittleBookshelf.books[5].name).toEqual('Скачки юношества: еженедельник');
  })

    it('Ищем книгу по одному из параметров', () => {
    myLittleBookshelf.addBook(fearAndLoathing);
    myLittleBookshelf.addBook(timeParadox);
    myLittleBookshelf.addBook(jojoPartX);
    myLittleBookshelf.addBook(theUndead);
    myLittleBookshelf.addBook(necro);
    myLittleBookshelf.addBook(shounenJampu);

    const book2found = myLittleBookshelf.findBookBy("releaseDate", 1919);
    expect(book2found.name).toEqual('Некрономикон');
    const bookNotFound = myLittleBookshelf.findBookBy("pageCount", 5928);
    expect(bookNotFound).toEqual(null);
  })

    it('Выдаём книгу по названию', () => {
    myLittleBookshelf.addBook(fearAndLoathing);
    myLittleBookshelf.addBook(timeParadox);
    myLittleBookshelf.addBook(jojoPartX);
    myLittleBookshelf.addBook(theUndead);
    myLittleBookshelf.addBook(necro);
    myLittleBookshelf.addBook(shounenJampu);

      const bookToGive = myLittleBookshelf.giveBookByName('Воспоминания о минувшем будущем');
      expect(bookToGive.name).toEqual('Воспоминания о минувшем будущем');
      expect(myLittleBookshelf.books.length).toEqual(5);
      const iDontGiveAbook = myLittleBookshelf.
      giveBookByName('Как влиять на завоевание и людить дружбой на оказание (а ещё долго не Камчатка)');
      expect(iDontGiveAbook).toEqual(null);
  })

  it('Повреждаем и восстановливаем книгу (а иначе библиотекарь сдалет из нашей шкуры новое платье синего цвета)', () => {

    myLittleBookshelf.addBook(theUndead);
    theUndead.state = 6;
    expect(theUndead.state).toEqual(6);
    theUndead.fix();
    expect(theUndead.state).toEqual(9);
  });

  it('Затем улыбаемся и машем', () => {
    myLittleBookshelf.addBook(theUndead);
    expect(myLittleBookshelf.books.length).toEqual(1);
    const book2found = myLittleBookshelf.findBookBy("name", "Смерть при жизни и жизнь после смерти: краткая автобиография");
    expect(book2found.name).toEqual('Смерть при жизни и жизнь после смерти: краткая автобиография');
  })
})
