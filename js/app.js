let moneyEarned
let totalDaysWorked

// Alert variables for tool upgrades
let alerted = false
let alerted1 = false
let alerted2 = false
let alerted3 = false
let alerted4 = false

const tools = {
    teeth: {
        item: "Teeth",
        cost: 0,
        earningsPerDay: 1,
        owned: true
    },
    rustyScissors: {
        item: "Rusty Scissors",
        cost: 5,
        earningsPerDay: 5,
        owned: false
    },
    oldTimeyMower: {
        item: "Old-Timey Push Lawnmower",
        cost: 25,
        earningsPerDay: 50,
        owned: false
    },
    fancyBatteryMower: {
        item: "Fancy Battery-Powered Lawnmower",
        cost: 250,
        earningsPerDay: 100,
        owned: false
    },
    starvingStudents: {
        item: "Team of Starving Students",
        cost: 500,
        earningsPerDay: 250,
        owned: false
    }
}

const start = () => {
    moneyEarned = 0
    totalDaysWorked = 0
    alert('Congratulation on opening your own Landscaping business!')
    alert(`As work and save up money, you\'ll be able to buy upgraded tools, but you start just being able to cut grass with your teeth, earning $${tools.teeth.earningsPerDay}/day.`)
    wantToKeepWorking()
}

// const dailyEarningsAlert = () => {
//     if (tools.starvingStudents.owned == true) {
//         alert(`You earn $${tools.starvingStudents.earningsPerDay}/day while using ${tools.starvingStudents.item}`)
//     } else if (tools.fancyBatteryMower.owned == true) {
//         alert(`You earn $${tools.fancyBatteryMower.earningsPerDay}/day while using ${tools.fancyBatteryMower.item}`)
//     } else if (tools.oldTimeyMower.owned == true) {
//         alert(`You earn $${tools.oldTimeyMower.earningsPerDay}/day while using ${tools.oldTimeyMower.item}`)
//     } else if (tools.rustyScissors.owned == true) {
//         alert(`You earn $${tools.rustyScissors.earningsPerDay}/day while using ${tools.rustyScissors.item}`)
//     } else if (tools.teeth.owned == true) {
//         alert(`You earn $${tools.teeth.earningsPerDay}/day while using ${tools.teeth.item}`)
//     }
//     wantToKeepWorking()
// }

const daysWorkedAddition = () => {
    totalDaysWorked++
}

const buyTools = () => {
    if (moneyEarned >= 5 && alerted == false){
        alert('Congratulations!! You\'ve earned enough money to buy Rusty Scissors, which would give you the ability to earn $5/day.')
        buyScissors()
    } else if (moneyEarned >= 25 && alerted2 == false) {
        alert('Congratulations!! You\'ve earned enough money to buy an Old Timey Push Lawnmower, which would give you the ability to earn $50/day.')
        buyOldTimey()
    } else if (moneyEarned >= 250 && alerted3 == false){
        alert('Congratulations!! You\'ve earned enough money to buy a Fancy Battery-Powered Lawnmower, which would give you the ability to earn $100/day.')
        buyFancyBatteryMower()
    } else if (moneyEarned >= 500 && alerted4 == false){
        alert('Congratulations!! You\'ve earned enough money to hire a team of Starving Students, which would give you the ability to earn $250/day.')
        hireStarvingStudents()
    }
}

const wantToKeepWorking = () => {
    buyTools()
    let workingQuestion =  prompt('Do you want to work today?', 'yes/no')
    if (workingQuestion.toLowerCase() == 'yes'){ 
        addDailyEarnings()
        wantToKeepWorking()
    } else {
        alert('Enjoy your Day off!!')
        wantToKeepWorking()
    }
  }

const addDailyEarnings = () => {
    daysWorkedAddition()
    if (tools.starvingStudents.owned == true) {
        moneyEarned += tools.starvingStudents.earningsPerDay
    } else if (tools.fancyBatteryMower.owned == true) {
        moneyEarned += tools.fancyBatteryMower.earningsPerDay
    } else if (tools.oldTimeyMower.owned == true) {
        moneyEarned += tools.oldTimeyMower.earningsPerDay
    } else if (tools.rustyScissors.owned == true) {
        moneyEarned += tools.rustyScissors.earningsPerDay
    } else if (tools.teeth.owned == true) {
        moneyEarned++
    }
    console.log(totalDaysWorked)
    console.log(moneyEarned)
    wantToKeepWorking()
}

// THIS NEEDS TO BE RETOOLED 
// const updateUser = () => {
//     if (totalDaysWorked % 5 === 0){
//         alert(`You've worked ${totalDaysWorked} days and you currently have $${moneyEarned} in the bank. Nice!`)
//         wantToKeepWorking()
//     }
// }

    function buyScissors() {
    let buyScissorsQ = prompt('Would you like to spend $5 to buy the Rusty Scissors and start making more money per day?!', 'yes/no')
        if (buyScissorsQ == 'yes'){
            moneyEarned -= 5
            alerted = true
            tools.rustyScissors.owned = true
            alert('Yay! You now own Rusty Scissors and can stop cutting grass with your teeth!')
            wantToKeepWorking()
        } else {
            wantToKeepWorking()
        }
    }

    function buyOldTimey () {
    let buyOldTimeyQ = prompt('Would you like to spend $25 to buy the Old Timey Push Lawnmower and start making more money per day?!', 'yes/no')
        if (buyOldTimeyQ == 'yes'){ 
            moneyEarned -= 25
            alerted2 = true
            tools.oldTimeyMower.owned = true
            alert('Yay! You now own an Old Timey Push Lawnmower and can stop cutting grass with Rusty Scissors!')
            wantToKeepWorking()
        } else {
            wantToKeepWorking()
        }
    }

    function buyFancyBatteryMower () {
        buyFancyBatteryMowerQ = prompt('Would you like to spend $50 to buy the Fancy Battery-Powered Lawnmower and start making more money per day?!', 'yes/no')
        if (buyFancyBatteryMowerQ == 'yes'){ 
            moneyEarned -= 250
            alerted3 = true
            tools.fancyBatteryMower.owned = true
            alert('Yay! You now own a Fancy Battery-Powered Lawnmower and can stop cutting grass with the Old-Timey Push Mower!')
            wantToKeepWorking()
        } else {
            wantToKeepWorking()
        }
    }

    function hireStarvingStudents () {
        hireStarvingStudentsQ = prompt('Would you like to spend $250 to hire a Team of Starving Students and start making more money per day?!', 'yes/no')
        if (hireStarvingStudentsQ == 'yes'){ 
            moneyEarned -= 500
            alerted4 = true
            tools.starvingStudents.owned = true
            alert('Yay! You now have a team of Starving Students and can stop cutting grass with the Fancy Battery-Powered Lawnmower!')
            wantToKeepWorking()
        } else {
            wantToKeepWorking()
        }
    }

    start()

// TO END THE GAME
function youWin () {
    if (tools.starvingStudents.owned == true && moneyEarned >= 1000) {
        alert('You\'ve managed to hire a team of Starving Students and bank a total of $1000...Congratulations, you have won the game!!')
        alert('Time to play again!!')
        start()
    } 
}
