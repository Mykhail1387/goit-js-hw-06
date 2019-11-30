'use strict';

import users from './users.js';

//===================================task-01.js===========:

const getUserNames = users => users.map(({ name }) => name);

console.log(getUserNames(users));

//===================================task-02.js===========:

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));

// ===================================task-03.js===========:

const getUsersWithGender = (users, genderSex) => users
    .filter(({ gender }) => gender === genderSex)
    .map(({ name }) => name);

console.log(getUsersWithGender(users, 'male'));

// ===================================task-04.js===========:

const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);

console.log(getInactiveUsers(users));

// ===================================task-05.js===========:

const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// ===================================task-06.js===========:

const getUsersWithAge = (users, min, max) => users.filter(({ age }) => age >= min && age <= max);

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// ===================================task-07.js===========:

const calculateTotalBalance = users => users.reduce((accumulator, { balance }) => accumulator + balance, 0);

console.log(calculateTotalBalance(users));

// ===================================task-08.js===========:

const getUsersWithFriend = (users, friendName) => users
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// ===================================task-09.js===========:

const getNamesSortedByFriendsCount = users => users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name);

console.log(getNamesSortedByFriendsCount(users));

// ===================================task-10.js===========:

const getSortedUniqueSkills = users => {
    const resolt = users
        .reduce((acc, skil) => {
            const allSkills = acc.concat(...skil.skills)
            return allSkills;
        }, [])

        .filter((item, index, skills) => skills.indexOf(item) === index)

        .sort()
    return resolt;
};

console.log(getSortedUniqueSkills(users));