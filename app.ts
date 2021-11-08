let fullName: string = "Rachel Parker";
console.log("Name: " + fullName.toUpperCase());
console.log("Career: Software Development Trainee");
console.log("Description: I don't like talking about myself very much.", '\n');

let interests: Array<string> = ["Video Games", "Drawing", "Writing"];

function displayInterests () {
    for (let i = 0; i < interests.length; i++) {
        console.log('* ' + interests[i]);       
    }
    console.log('\n');
}

console.log("My Interests:");
displayInterests();

function displayPosition (company: string, jobTitle: string, jobDesc: string) {
    console.log(`* ${jobTitle} at ${company} - ${jobDesc}`);
}

console.log("My Previous Experience:");
displayPosition("Auburn University Aviary", "Student Intern", "Took care of zebra finches and recorded lab data.");
displayPosition("Auburn University Special Collections and Archives", "Student Worker", "Digitized collection records.");
displayPosition("Edgewood Elementary School", "Substitute Teacher", "Filled in around the school where needed.");
console.log('\n');
    
function displaySkill (skill: string, cool: boolean) {
    if (cool === true) {
        console.log(`* BAM: ${skill}`);
    } else {
        console.log('* ' + skill);
    }
}

console.log("My Skills:");

displaySkill("Japanese", true);
displaySkill("Drawing", false);
displaySkill("Writing", true);
displaySkill("Cat Wrangling", true);