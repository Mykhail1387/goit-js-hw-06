'use strict';

import users from './users.js';

//===================================task-01.js===========:

const getUserNames = users => {
    return users.map(user => user.name)
};

console.log(getUserNames(users));

//===================================task-02.js===========:


const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color)
};

console.log(getUsersWithEyeColor(users, 'blue'));

//===================================task-03.js===========:

const getUsersWithGender = (users, gender) => {
    const namesUsersByGender = users.filter(user => user.gender === gender);
    return namesUsersByGender.map(user => user.name);
};

console.log(getUsersWithGender(users, 'male'));

//===================================task-04.js===========:

const getInactiveUsers = users => {
    return users.filter(user => !user.isActive)
};

console.log(getInactiveUsers(users));

//===================================task-05.js===========:

const getUserWithEmail = (users, email) => {
    return users.filter(user => user.email === email)
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

//===================================task-06.js===========:

const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user.age >= min && user.age <= max)
};
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

//===================================task-07.js===========:

const calculateTotalBalance = users => {
    const initialValue = 0;
    return users.reduce((accumulator, currentValue) => accumulator + currentValue.balance, initialValue)
};

console.log(calculateTotalBalance(users));

//===================================task-08.js===========:

const getUsersWithFriend = (users, friendName) => {
    const usersFriends = users.filter(user => user.friends.includes(friendName));
    return usersFriends.map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

//===================================task-09.js===========:

const getNamesSortedByFriendsCount = users => {
    const sortByNumberFriends = users.sort((a, b) => a.friends.length - b.friends.length);
    return sortByNumberFriends.map(user => user.name)
};

console.log(getNamesSortedByFriendsCount(users));

//===================================task-10.js===========:

const getSortedUniqueSkills = users => {
    const resolt = users
        .reduce((acc, skil) => {
            acc.push(...skil.skills)
            return acc;
        }, [])

        .filter((item, index, skills) => skills.indexOf(item) === index)

        .sort()
    return resolt;
};

console.log(getSortedUniqueSkills(users));