function shout(string) {
    return string.toUpperCase();
    // todo
  }
  function whisper(string){
    return string.toLowerCase();
  }
  function logShout(string){
    console.log(string.toUpperCase());
  }
  function logWhisper(string){
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate (sayHi) {
    const cantUnswer = "I can't hear you!";
    const yesUnswer = "YES INDEED!";
    const lovUnswer = "I would love to!";
    if (sayHi.toLowerCase(sayHi) === sayHi) {
      return cantUnswer;
    }
    else if (sayHi.toUpperCase(sayHi) === sayHi) {
      return yesUnswer;
    }
    else if ("Let's have dinner together!" === sayHi) {
      return lovUnswer
    }
  }