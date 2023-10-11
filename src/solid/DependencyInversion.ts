interface IDatabase {
  save(data: string): void;
}

class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved in MySQL`);
  }
}

class MongoDbDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved in MongoDB`);
  }
}

class HighLevelModule {
  constructor(private database: IDatabase) {}

  execute(data: string) {
    this.database.save(data);
  }
}

const mysql: MySqlDatabase = new MySqlDatabase();
const mongo: MongoDbDatabase = new MongoDbDatabase();

const userModule: HighLevelModule = new HighLevelModule(mysql);
userModule.execute("Omid");

const postModule: HighLevelModule = new HighLevelModule(mongo);
postModule.execute("Hello world!");
