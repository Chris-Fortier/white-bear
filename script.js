// opens sign up form when Sign Up is clicked
$("#sign-up-button").click(function () {
   $("#sign-up-form").toggleClass("d-none");
   $("#sign-up-button").toggleClass("d-none");
});

// brings down success banner when save is clicked
$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

// brings down error banner when back to answer is clicked
$("#back-to-answer").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

// makes the checkbox show the delete button
$("#show-delete").click(function () {
   // $("#delete-button").toggleClass("d-none");
   $("#delete-button").toggleClass("visible invisible");
});

// // makes the checkbox show the delete button
// $("#bubba").click(function () {
//    console.log("bubba");
// });

$("#answerField").keyup(function () {
   // disables the Next button unless there are between 1 and 240 characters in the field
   stringLength = $("#answerField").val().length;
   $("#counter").text(stringLength + "/240");

   if (stringLength == 0 || stringLength > 240) {
      $("#next-button").addClass("disabled");
      $("#counter").addClass("text-danger");
   } else {
      $("#next-button").removeClass("disabled");
      $("#counter").removeClass("text-danger");
   }
});

function generateID() {
   // _id: concatenating the milliseconds of the current datetime with a random number between 000 and 999.
   var dateCode = Date.now(); // js number representing the date and time
   dateStr = String(dateCode);
   var dateMS = dateStr.slice(dateStr.length - 3);
   var rando = Math.floor(Math.random() * 1000);
   var randoStr = String(rando);
   // If the number of milliseconds or your random numbers is less that 3 characters long, be sure you pad it with 0s to the left, enuring each is 3 characters long.
   if (rando < 10) {
      randoStr = "0" + randoStr;
   }
   if (rando < 100) {
      randoStr = "0" + randoStr;
   }
   return dateMS + randoStr;
}

function getCreatedDate() {
   // createdOn: a new number based on the JavaScript Date object of today's date and time.
   var theDate = new Date(Date.now());
   var finalDate = "";
   finalDate += String(theDate.getFullYear()).slice(-2);
   finalDate += ("00" + String(theDate.getMonth() + 1)).slice(-2);
   finalDate += ("00" + String(theDate.getDate())).slice(-2);
   finalDate += ("00" + String(theDate.getHours())).slice(-2);
   finalDate += ("00" + String(theDate.getMinutes())).slice(-2);
   finalDate += ("00" + String(theDate.getSeconds())).slice(-2);

   return finalDate;
}

var commonPasswords = [
   "x002tp00",
   "x4ww5qdr",
   "x72jhhu3z",
   "xaccess2",
   "xakep1234",
   "xboxlive",
   "xcalibur",
   "xcountry",
   "xenocide",
   "xenogear",
   "xenophobia",
   "xenophobic",
   "xenophon",
   "xexeylhf",
   "xianzong",
   "xiaoping",
   "xiaoyua123",
   "xinjiang",
   "xohzi3g4",
   "xpressmusic",
   "xsvnd4b2",
   "xsw21qaz",
   "xsw23edc",
   "xthtgfirf",
   "xtutdfhf",
   "xuanzang",
   "xuanzong",
   "xufrgemw",
   "xxx12345",
   "xxxp455w0rd5",
   "xxxxxxx1",
   "xyh28af4",
   "xylophone",
   "xzsawq21",
   "y'knowwhati'msayin",
   "y'understand",
   "yachting",
   "yaglasph",
   "yakovlev",
   "yakushova",
   "yamagata",
   "yamaha12",
   "yamahar1",
   "yamahar6",
   "yamakasi",
   "yamamoto",
   "yamanashi",
   "yamashita",
   "yammering",
   "yangzhou",
   "yankeemp",
   "yankees0",
   "yankees1",
   "yankees2",
   "yankees3",
   "yankees4",
   "yankees7",
   "yankees9",
   "yankovic",
   "yanochka",
   "yanshi1982",
   "yanukovych",
   "yarborough",
   "yarbrough",
   "yardbird",
   "yardbirds",
   "yardstick",
   "yarmouth",
   "yaroslav",
   "yaroslavl",
   "yasacrac",
   "yasuhiro",
   "ybrbnbyf",
   "ybrbnf_25",
   "ybrbnjcbr",
   "ybrjkftd",
   "ybrjkftdbx",
   "ybrjkftdyf",
   "ycwvrxxh",
   "yeahbaby",
   "yeahrigh",
   "yeahright",
   "year2000",
   "year2005",
   "yearbook",
   "yearbooks",
   "yearning",
   "yearnings",
   "yekaterinburg",
   "yelburton",
   "yelena03",
   "yellow12",
   "yellow22",
   "yellowhead",
   "yellowish",
   "yellowknife",
   "yellowstone",
   "yelverton",
   "yemenite",
   "yengeese",
   "yeomanry",
   "yes90125",
   "yeshivas",
   "yessenia",
   "yesterda",
   "yesterday",
   "yesterdays",
   "yfcnfcmz",
   "yfcntymrf",
   "yfcnz123",
   "yfcnzvjz",
   "yfcnzyfcnz",
   "yfdbufnjh",
   "yfeiybrb",
   "yfgjktjy",
   "yfhrjnbrb",
   "yfltymrf",
   "yfnfitymrf",
   "yfxfkmybr",
   "ygfxbkgt",
   "yggdrasi",
   "yielding",
   "yildirim",
   "yingling",
   "yingyang",
   "yitzchak",
   "yjdbrjdf",
   "yjdjcnbf",
   "yjdsqgfhjkm",
   "yjdsqujl",
   "yjdujhjl",
   "yjhbkmcr",
   "ym3cautj",
   "yogibear",
   "yogyakarta",
   "yohannan",
   "yokohama",
   "yokosuka",
   "yokozuna",
   "yorkshir",
   "yorkshire",
   "yorktown",
   "yorkville",
   "yosemite",
   "yoshihiro",
   "youandme",
   "youlanda",
   "youngblood",
   "youngest",
   "youngman",
   "youngone",
   "youngster",
   "youngsters",
   "youngstown",
   "yourmama",
   "yourmom1",
   "yourname",
   "yourself",
   "yourselves",
   "yousuck1",
   "youthful",
   "yoyodyne",
   "ypsilanti",
   "yqlgr667",
   "yqmbevgk",
   "yr8wdxcq",
   "ytdxz2ca",
   "ytngfhjkz",
   "ytnhjufnm",
   "ytrhjvfyn",
   "ytyfdbcnm",
   "yudhoyono",
   "yugoslav",
   "yugoslavia",
   "yugoslavian",
   "yuitre12",
   "yujyd360",
   "yuletide",
   "yushchenko",
   "yvelines",
   "yvtte545",
   "yxkck878",
   "yy5rbfsc",
   "yyyyyyy1",
   "yzerman1",
   "z1234567",
   "z123456789",
   "z123456z",
   "z1x2c3v4",
   "z1x2c3v4b5",
   "z1x2c3v4b5n6m7",
   "z1z2z3z4",
   "z3cn2erv",
   "zacatecas",
   "zacharia",
   "zachariah",
   "zacharias",
   "zachary1",
   "zaharova",
   "zakamatak",
   "zalewski",
   "zalgiris",
   "zamarripa",
   "zambales",
   "zamboanga",
   "zambrano",
   "zamindar",
   "zamoyski",
   "zanesville",
   "zantopia",
   "zanzibar",
   "zapatista",
   "zaphod42",
   "zaporizhia",
   "zapruder",
   "zaq!2wsx",
   "zaq11qaz",
   "zaq12345",
   "zaq123wsx",
   "zaq12qaz",
   "zaq12wsx",
   "zaq1xsw2",
   "zaq1xsw2cde3",
   "zaqwsx123",
   "zaqwsxcde",
   "zaqwsxcderfv",
   "zaqxsw123",
   "zaqxswcde",
   "zaragoza",
   "zaratustra",
   "zarzuela",
   "zasranec",
   "zatunica",
   "zawahiri",
   "zaxscdvf",
   "zbigniew",
   "zcfvfzkexifz",
   "zcxfcnkbdf",
   "zcxfcnkbdfz",
   "zealander",
   "zealanders",
   "zebra123",
   "zechariah",
   "zeebrugge",
   "zeitgeist",
   "zeitschrift",
   "zeljeznicar",
   "zemanova",
   "zendejas",
   "zenit2011",
   "zeppelin",
   "zeringue",
   "zerocool",
   "zesyrmvu",
   "zhaozong",
   "zhejiang",
   "zhengzhou",
   "zhjckfdf",
   "zhongguo",
   "zhongshan",
   "zhongshu",
   "zhongzong",
   "zhytomyr",
   "zidane10",
   "ziegfeld",
   "zielinski",
   "zigazaga",
   "ziggy123",
   "zildjian",
   "zillions",
   "zimbabwe",
   "zimbabwean",
   "zimmerma",
   "zimmerman",
   "zimmermann",
   "zinedine",
   "zinfandel",
   "zinoviev",
   "zionists",
   "zipdrive",
   "zippy123",
   "zirconia",
   "zirconium",
   "zjses9evpa",
   "zldej102",
   "zoidberg",
   "zolushka",
   "zombie13",
   "zookeeper",
   "zoological",
   "zoologist",
   "zooplankton",
   "zootsuit",
   "zoroaster",
   "zoroastrian",
   "zoroastrianism",
   "zoroastrians",
   "zorro123",
   "zpflhjn1",
   "zqjphsyf6ctifgu",
   "zrjdktdf",
   "zse45rdx",
   "zse4xdr5",
   "zsecyus56",
   "zucchero",
   "zucchini",
   "zuckerberg",
   "zuckerman",
   "zukowski",
   "zulfikar",
   "zulfiqar",
   "zvonareva",
   "zweibrucken",
   "zx123456",
   "zx123456789",
   "zxasqw12",
   "zxc12345",
   "zxc123456",
   "zxc123zxc",
   "zxcasd123",
   "zxcasdqw",
   "zxcasdqwe",
   "zxcasdqwe123",
   "zxcqweasd",
   "zxcv1234",
   "zxcv4321",
   "zxcvasdf",
   "zxcvb123",
   "zxcvb1234",
   "zxcvb12345",
   "zxcvbasdfg",
   "zxcvbn12",
   "zxcvbn123",
   "zxcvbn123456",
   "zxcvbnm.",
   "zxcvbnm1",
   "zxcvbnm12",
   "zxcvbnm123",
   "zxcvbnm123456789",
   "zxcvbnma",
   "zxcvbnmm",
   "zxcvbnmz",
   "zxcvfdsa",
   "zxcvvcxz",
   "zz123456",
   "zz8807zpl",
   "zzxxccvv",
   "zzzxxxccc",
   "zzzzxxxx",
   "zzzzzzz1",
];

$("#new-user-button").click(function () {
   // check if email is gtg

   var emailInput = $("#new-email-input").val();
   var atPos = emailInput.indexOf("@");
   var emailError = ""; // initialize this to no error
   var emailLength = emailInput.length;
   var emailLocalpart = emailInput.slice(0, atPos);
   let emailPattern = /^[a-z0-9+]+@[a-z0-9+]+\.[a-z]{2,}/i; // set the regex pattern for valid emails

   // find how many unique characters are in the local part of the email
   uniqueCharacters = "";
   for (let i in emailLocalpart) {
      console.log();
      if (uniqueCharacters.indexOf(emailLocalpart[i]) == -1) {
         uniqueCharacters = uniqueCharacters + emailLocalpart[i];
      }
   }

   if (emailLength == 0) {
      emailError = "Please enter your email.";
   } else if (emailPattern.test(emailInput) == false) {
      // email must follow the following pattern:
      // Starting with at least one alphanumeric character
      // An @ character
      // At least one alphanumeric character
      // A . character
      // Ending with at least 2 alphabetical characters
      emailError = "Please enter a valid email address.";
   }
   // else if (atPos == -1) {
   //    emailError = "This isn't a real email. You don't have an @.";
   // }
   // In the local-part of the email address, let's ensure the user has entered at least 3 unique characters
   else if (uniqueCharacters.length < 3) {
      emailError =
         "This isn't a real email. You need at least 3 unique characters.";
   }

   if (emailError != "") {
      // if there is an error, show it and display it
      console.log(emailError);
      $("#new-email-error").text(emailError); // place the error message
      $("#new-email-error").removeClass("d-none is-valid"); // show the error message
      $("#new-email-input").addClass("is-invalid"); // Style the email input to highlight the error
   } else {
      // email is fine
      $("#new-email-error").addClass("d-none is-valid"); // hide the error message
      $("#new-email-input").removeClass("is-invalid"); // remove the error style from input
   }

   // end email checking

   // check if password is gtg

   var passwordInput = $("#new-password-input").val();
   var passwordLength = passwordInput.length;
   var passwordError = ""; // initialize this to no error

   if (passwordLength == 0) {
      // password is empty
      passwordError = "Please enter your password.";
   } else if (passwordLength < 9) {
      // password is too short
      passwordError = "Your password must be at least 9 characters";
   }
   // The password cannot contain the local-part of the email address the user entered.
   // find the local part of the email address
   else if (passwordInput.indexOf(emailLocalpart) > -1) {
      passwordError = "Your email address cannot be used in your password.";
   } // The password cannot be one from the list of common passwords.
   else if (
      commonPasswords.some(function (curVal) {
         return curVal == passwordInput;
      })
   ) {
      passwordError =
         "This password is too common. You need to be more creative.";
   }

   if (passwordError != "") {
      // if there is an error, show it and display it
      console.log(passwordError);
      $("#new-password-error").text(passwordError); // place the error message
      $("#new-password-error").removeClass("d-none is-valid"); // show the error message
      $("#new-password-input").addClass("is-invalid"); // Style the email input to highlight the error
   } else {
      // password is fine
      $("#new-password-error").addClass("d-none is-valid"); // hide the error message
      $("#new-password-input").removeClass("is-invalid"); // remove the error style from input
   }

   // end password checking

   // check if successful and if so go to next page
   if (emailError == "" && passwordError == "") {
      // go to the next page if user entered data into the form correctly
      console.log("submit successful!");

      // "encrypt" the password decoder ring style
      var encryptedPassword = "";
      for (let i in passwordInput) {
         let plaintextLetter = passwordInput[i];
         if (
            passwordInput.charCodeAt(i) >= 65 &&
            passwordInput.charCodeAt(i) <= 122
         ) {
            // if the character is a letter
            if (plaintextLetter == "z") {
               // wrap around lowercase
               encryptedLetter = "a";
            } else if (plaintextLetter == "Z") {
               // wrap around uppercase
               encryptedLetter = "A";
            } else {
               // increase the char code by 1
               encryptedLetter = String.fromCharCode(
                  passwordInput.charCodeAt(i) + 1
               );
            }
         } else {
            encryptedLetter = plaintextLetter; // do not change the character
         }
         encryptedPassword = encryptedPassword + encryptedLetter;
      }

      var newUserSubmission = {
         _id: generateID(),
         email: emailInput,
         password: encryptedPassword,
         createdOn: getCreatedDate(),
      };

      console.log(newUserSubmission);

      // take the user to the next page
      // window.location.replace("create-answer.html");
   }
});

$("#login-button").click(function () {
   // check if email is gtg

   var emailInput = $("#existing-email-input").val();

   var emailError = ""; // initialize this to no error

   var emailLength = emailInput.length;

   if (emailLength == 0) {
      emailError = "Please enter your email.";
   }

   if (emailError != "") {
      // if there is an error, show it and display it
      console.log(emailError);
      $("#existing-email-error").text(emailError); // place the error message
      $("#existing-email-error").removeClass("d-none"); // show the error message
      $("#existing-email-input").addClass("text-danger border-danger"); // Style the email input to highlight the error
   } else {
      // password is fine
      $("#existing-email-error").addClass("d-none"); // hide the error message
      $("#existing-email-input").removeClass("text-danger border-danger"); // remove the error style from input
   }

   // end email checking

   // check if password is gtg

   var passwordInput = $("#existing-password-input").val();

   var passwordLength = passwordInput.length;

   var passwordError = ""; // initialize this to no error

   if (passwordLength == 0) {
      // password is empty
      passwordError = "Please enter your password.";
   }

   if (passwordError != "") {
      // if there is an error, show it and display it
      console.log(passwordError);
      $("#existing-password-error").text(passwordError); // place the error message
      $("#existing-password-error").removeClass("d-none"); // show the error message
      $("#existing-password-input").addClass("text-danger border-danger"); // Style the email input to highlight the error
   } else {
      // password is fine
      $("#existing-password-error").addClass("d-none"); // hide the error message
      $("#existing-password-input").removeClass("text-danger border-danger"); // remove the error style from input
   }

   // end password checking

   // check if successful and if so go to next page
   if (emailError == "" && passwordError == "") {
      // go to the next page if user entered data into the form correctly
      console.log("submit successful!");

      // take the user to the next page
      window.location.replace("create-answer.html");
   }
});

$("#save-imagery").click(function () {
   console.log("save imagery clicked");

   var submission = {
      _id: generateID(),
      // imagery: $("#imagery-content").val(),
      // answer: $("#answer-content").text(), // contains messy whitespace due to it grabbing raw html text
      imagery: encodeURIComponent(
         "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG."
      ),
      answer: encodeURIComponent(
         "The syntax for making a comment in HTML is <!-- Mike's comment here -->"
      ),
      levelNum: 1,
      successfulAttemptsNum: 0,
      createdOn: getCreatedDate(),
      lastAttemptedOn: getCreatedDate(), // same as createdOn
   };

   console.log(submission);
});

$("#search-button").click(function () {
   let searchFor = $("#search-for").val(); // grab the user input value
   searchFor = searchFor.replace(/\W/g, " "); // Replace all non-alphabetical characters with spaces.
   searchFor = searchFor.replace(/\s{2,}/g, " "); // All whitespace with 2 or more spaces should be converted to single spaces.
   searchFor = searchFor.replace(/^\s+|\s+$/gi, ""); // Trim space at the beginning and end of the search string.
   searchFor = searchFor.toLowerCase(); // Lowercase all characters.

   console.log(searchFor);
});
