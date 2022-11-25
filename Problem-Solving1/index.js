
        // লুডু খেখায় কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি।

        function getRandomNumbers (min, max){
            return Math.floor(Math.random() * (max - min + 1 )) + min;
        }

        console.log(getRandomNumbers(1, 255))

        // try again to creating a function that can be return me a random integer

        function getRandomInt(min, max){
            return Math.floor(Math.random() * (max - min + 1 )) + min;
        }

        console.log(getRandomInt(1, 255));


        // কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি?

        const student = ["Fayzar", "Titir","Abul", "Sathi", "Lucky", "Nipa", "Imran", "Kalam"];

        console.log(student.sort());

        // কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের রোল নাম্বার ক্রম অনুযায়ী সাজাতে পারি  ? 

        const studentsRoll = [1, 5, 3,7,6,2,4,8,10,9];

         console.log(studentsRoll.sort(function(a, b){
            return a - b;
         }))
         
         console.log(studentsRoll.sort(function(a, b){
            return b - a;
         }))


        //  কোন একটা সাল  Leap Year কিনা তা বের করতে পারি কিভাবে ?

     
         function isLeapYear(year){
            if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
                console.log(`${year} is a leap year!`)
            }
            else{
                console.log(`${year} is not a leap year!`)
            }

         }

         isLeapYear(2088);


        //  কোন sentence এ কতোগুলো vowel আছে তা নির্নয় করা যায় কিভাবে ?

         const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O","U", "U"];

                function countVowels (sentence){
                    let count = 0;
                    const letters = Array.from(sentence);

                    letters.forEach(function(value){
                        if(vowels.includes(value)){
                            count++;
                        }
                    });
                    return count;
                } 
         
                console.log(countVowels(prompt("Enter Your Sentence : ")));



        // কোন Array থেকে duplicates নাম্বার গুলোকে কি ভাবে বের করে আনতে পারি ?

        const numbers = [1, 3, 5, 5, 6, 7, 6, 8, 8, 9, 4];

        const duplicates = numbers.filter(function(value, index, array){
            return array.indexOf(value) !== index;
        });

        console.log(duplicates);