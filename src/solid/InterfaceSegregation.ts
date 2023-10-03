type Document = string;

interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

class MultifunctionMachine implements Printer, Scanner, FaxMachine {
  print(document: string): void {
    console.log("Machine is printing.", document);
  }

  scan(document: string): void {
    console.log("Machine is scanning.", document);
  }

  fax(document: string): void {
    console.log("Machine is sending a document.", document);
  }
}

class ScannerMachine implements Scanner {
  scan(document: string): void {
    console.log("Scanner is scanning.", document);
  }
}

const multifunctionMachine = new MultifunctionMachine();
const scannerMachine = new ScannerMachine();

multifunctionMachine.print("document");
multifunctionMachine.scan("document");
multifunctionMachine.fax("document");

scannerMachine.scan("document");
