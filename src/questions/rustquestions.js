let rustProgrammingQuestions = [
    {
      category: "Rust Programming",
      question: "What keyword declares a constant in Rust?",
      answer: "const",
      hint: "Used for immutable values.",
      blank: "xxxxx",
      review: "https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html",
    },
    {
      category: "Rust Programming",
      question: "What does the 'let' keyword do in Rust?",
      answer: "Declares a variable",
      hint: "Introduces variables.",
      blank: "xxxxxxxx x xxxxxxxx",
      review: "https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html",
    },
    {
      category: "Rust Programming",
      question: "What macro is used to print output in Rust?",
      answer: "println!",
      hint: "Used for console output.",
      blank: "xxxxxxxx",
      review: "https://doc.rust-lang.org/std/macro.println.html",
    },
    {
      category: "Rust Programming",
      question: "What is the Rust package manager called?",
      answer: "Cargo",
      hint: "Manages dependencies.",
      blank: "xxxxx",
      review: "https://doc.rust-lang.org/cargo/",
    },
    {
      category: "Rust Programming",
      question: "What file contains dependencies for a Rust project?",
      answer: "Cargo.toml",
      hint: "A TOML file.",
      blank: "xxxxxxxxxxx",
      review: "https://doc.rust-lang.org/cargo/reference/manifest.html",
    },
    {
      category: "Rust Programming",
      question: "What type does the 'i32' keyword represent?",
      answer: "32-bit integer",
      hint: "Signed integer.",
      blank: "xx-xxx xxxxxxxx",
      review: "https://doc.rust-lang.org/std/primitive.i32.html",
    },
    {
      category: "Rust Programming",
      question: "What is the default integer type in Rust?",
      answer: "i32",
      hint: "32-bit signed.",
      blank: "xxx",
      review: "https://doc.rust-lang.org/std/primitive.i32.html",
    },
    {
      category: "Rust Programming",
      question: "What Rust feature ensures memory safety without garbage collection?",
      answer: "Ownership",
      hint: "Core concept of Rust.",
      blank: "xxxxxxxx",
      review: "https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html",
    },
    {
      category: "Rust Programming",
      question: "What keyword makes a variable mutable in Rust?",
      answer: "mut",
      hint: "Changes immutability.",
      blank: "xxx",
      review: "https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html",
    },
    {
      category: "Rust Programming",
      question: "What keyword is used to create a function in Rust?",
      answer: "fn",
      hint: "Defines functions.",
      blank: "xx",
      review: "https://doc.rust-lang.org/book/ch03-03-how-functions-work.html",
    },
    {
      category: "Rust Programming",
      question: "What keyword creates a new scope block in Rust?",
      answer: "{}",
      hint: "Common in many languages.",
      blank: "xx",
      review: "https://doc.rust-lang.org/book/",
    },
    {
      category: "Rust Programming",
      question: "What does the 'match' keyword do?",
      answer: "Pattern matching",
      hint: "Handles different cases.",
      blank: "xxxxxxx xxxxxxxx",
      review: "https://doc.rust-lang.org/book/ch06-02-match.html",
    },
    {
      category: "Rust Programming",
      question: "What macro is used for unit testing?",
      answer: "#[test]",
      hint: "Marks test functions.",
      blank: "xxxxxxx",
      review: "https://doc.rust-lang.org/book/ch11-01-writing-tests.html",
    },
    {
      category: "Rust Programming",
      question: "What is the Rust standard tool for formatting code?",
      answer: "rustfmt",
      hint: "Rust formatter.",
      blank: "xxxxxxx",
      review: "https://github.com/rust-lang/rustfmt",
    },
    {
      category: "Rust Programming",
      question: "What keyword is used to import modules in Rust?",
      answer: "use",
      hint: "Brings modules into scope.",
      blank: "xxx",
      review: "https://doc.rust-lang.org/book/ch07-02-defining-modules-to-control-scope-and-privacy.html",
    },
    {
      category: "Rust Programming",
      question: "What keyword defines a structure in Rust?",
      answer: "struct",
      hint: "Defines custom data types.",
      blank: "xxxxxx",
      review: "https://doc.rust-lang.org/book/ch05-01-defining-structs.html",
    },
    {
      category: "Rust Programming",
      question: "What keyword is used to create an enumeration in Rust?",
      answer: "enum",
      hint: "Represents multiple choices.",
      blank: "xxxx",
      review: "https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html",
    },
    {
      category: "Rust Programming",
      question: "What is the purpose of 'unwrap()' in Rust?",
      answer: "Gets value",
      hint: "Handles Option and Result types.",
      blank: "xxxx xxxxxx",
      review: "https://doc.rust-lang.org/std/result/enum.Result.html",
    },
    {
      category: "Rust Programming",
      question: "What function is the entry point of a Rust program?",
      answer: "main",
      hint: "Every program starts here.",
      blank: "xxxx",
      review: "https://doc.rust-lang.org/book/ch03-03-how-functions-work.html",
    },
    {
      category: "Rust Programming",
      question: "What command runs a Rust program?",
      answer: "cargo run",
      hint: "Combines build and execution.",
      blank: "xxxxx xxx",
      review: "https://doc.rust-lang.org/cargo/commands/cargo-run.html",
    },
    {
      category: "Rust Programming",
      question: "What Rust type represents the absence of a value?",
      answer: "Option",
      hint: "Some or None.",
      blank: "xxxxxx",
      review: "https://doc.rust-lang.org/std/option/",
    },
    {
      category: "Rust Programming",
      question: "What keyword returns a value from a function?",
      answer: "return",
      hint: "Ends the function.",
      blank: "xxxxxx",
      review: "https://doc.rust-lang.org/book/ch03-03-how-functions-work.html",
    },
    {
      category: "Rust Programming",
      question: "What keyword defines an implementation block?",
      answer: "impl",
      hint: "Defines methods for structs.",
      blank: "xxxx",
      review: "https://doc.rust-lang.org/book/ch05-03-method-syntax.html",
    },
    {
      category: "Rust Programming",
      question: "What feature ensures data race safety in Rust?",
      answer: "Borrow checker",
      hint: "Part of the compiler.",
      blank: "xxxxxx xxxxxxx",
      review: "https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html",
    },
    {
      category: "Rust Programming",
      question: "What is the purpose of 'Result' in Rust?",
      answer: "Error handling",
      hint: "Handles success and errors.",
      blank: "xxxxx xxxxxxxxx",
      review: "https://doc.rust-lang.org/std/result/",
    },
    {
      category: "Rust Programming",
      question: "What library provides asynchronous programming support?",
      answer: "tokio",
      hint: "Popular async runtime.",
      blank: "xxxxx",
      review: "https://tokio.rs/",
    },
    {
      category: "Rust Programming",
      question: "What command adds a dependency to a Rust project?",
      answer: "cargo add",
      hint: "Updates Cargo.toml.",
      blank: "xxxxx xxx",
      review: "https://doc.rust-lang.org/cargo/commands/cargo-add.html",
    },
    {
      category: "Rust Programming",
      question: "What function allocates memory on the heap?",
      answer: "Box::new",
      hint: "Smart pointer.",
      blank: "xxxxxxx",
      review: "https://doc.rust-lang.org/std/boxed/struct.Box.html",
    },
    {
      category: "Rust Programming",
      question: "What is the purpose of the 'derive' attribute?",
      answer: "Auto-generate code",
      hint: "Common with traits.",
      blank: "xxxx-xxxxxxxx xxxxx",
      review: "https://doc.rust-lang.org/book/ch05-02-example-structs.html",
    },
    {
      category: "Rust Programming",
      question: "What does the 'match' keyword do?",
      answer: "Pattern matching",
      hint: "Selects execution paths.",
      blank: "xxxxxxx xxxxxxxx",
      review: "https://doc.rust-lang.org/book/ch06-02-match.html",
    },
    {
      category: "Rust Programming",
      question: "What feature replaces null pointers in Rust?",
      answer: "Option",
      hint: "Represents Some or None.",
      blank: "xxxxxx",
      review: "https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html",
    },
    {
      category: "Rust Programming",
      question: "What does the '?' operator do in Rust?",
      answer: "Error propagation",
      hint: "Simplifies Result handling.",
      blank: "xxxxx xxxxxxxxxxxx",
      review: "https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html",
    },
    {
      category: "Rust Programming",
      question: "What function stops execution in Rust?",
      answer: "panic!",
      hint: "For unrecoverable errors.",
      blank: "xxxxx",
      review: "https://doc.rust-lang.org/std/macro.panic.html",
    },
    {
      category: "Rust Programming",
      question: "What keyword defines a trait?",
      answer: "trait",
      hint: "Defines shared behavior.",
      blank: "xxxxx",
      review: "https://doc.rust-lang.org/book/ch10-02-traits.html",
    },
    {
      category: "Rust Programming",
      question: "What keyword ensures exclusive access to data?",
      answer: "Mutex",
      hint: "Used for thread safety.",
      blank: "xxxxx",
      review: "https://doc.rust-lang.org/std/sync/struct.Mutex.html",
    },
    {
      category: "Rust Programming",
      question: "What Rust feature avoids dangling references?",
      answer: "Lifetimes",
      hint: "Specifies variable scopes.",
      blank: "xxxxxxxxx",
      review: "https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html",
    },
  ];
  
  module.exports = {
    category: "Rust Programming",
    fetchQuestion: async () => {
      const randomIndex = Math.floor(Math.random() * rustProgrammingQuestions.length);
      return rustProgrammingQuestions[randomIndex];
    },
    getAllQuestions: async () => {
      return rustProgrammingQuestions;
    },
  };
  