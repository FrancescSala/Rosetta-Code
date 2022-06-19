function discordianDate(date) {
    const gregDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // days in the month: January .. December
    const discWeekDays = ['Sweetmorn', 'Boomtime', 'Pungenday', 'Prickle-Prickle', 'Setting Orange'];
    const discSeasons = ['Chaos', 'Discord', 'Confusion', 'Bureaucracy','The AfterMath'];
    
    // calculation of the discordian year
    let y = date.getFullYear();
    let discYear = y - 2022 + 3188;
    
    // calculation of the discordian season
    let m = date.getMonth();
    let dayYear = 0;
    for (let i = 0; i < m; i++) dayYear += gregDaysInMonth[i];
    dayYear += date.getDate();
    let discSeasonIndex = Math.floor(dayYear/74);
    let discSeason = discSeasons[discSeasonIndex];
    
    // calculation of the discordian day of the season
    let discDayInSeason = dayYear - discSeasonIndex * 73;
    // Enlgish ordinals have different suffix
    let lastDigit = discDayInSeason % 10;
    let suffix = 'th';
    if (discDayInSeason === 1) suffix = 'st';
    else if (lastDigit === 2) suffix = 'nd';
    else if (lastDigit === 3 && discDayInSeason > 20) suffix = 'rd';
    
    // calculation of day in the week. 
    // 1st of January is always Sweetmorn.
    // We do not need to worry about leap-years
    let discWeekDay = discWeekDays[(dayYear- 1) % 5];
    
    // calculation if there is anything to celebrate
    let discCelebrate = '';
    if (discSeason === 'Chaos' && discDayInSeason === 5) discCelebrate = '. Celebrate Mungday!';
    else if (discSeason === 'Chaos' && discDayInSeason === 50) discCelebrate = '. Celebrate Chaoflux!';
    else if (discSeason === 'Discord' && discDayInSeason === 5) discCelebrate = '. Celebrate Mojoday!';
    else if (discSeason === 'Discord' && discDayInSeason === 50) discCelebrate = '. Celebrate Discoflux!';
    else if (discSeason === 'Confusion' && discDayInSeason === 5) discCelebrate = '. Celebrate Syaday!';
    else if (discSeason === 'Confusion' && discDayInSeason === 50) discCelebrate = '. Celebrate Confuflux!';
    else if (discSeason === 'Bureaucracy' && discDayInSeason === 5) discCelebrate = '. Celebrate Zaraday!';
    else if (discSeason === 'Bureaucracy' && discDayInSeason === 50) discCelebrate = '. Celebrate Bureflux!';
    else if (discSeason === 'Aftermath' && discDayInSeason === 5) discCelebrate = '. Celebrate Maladay!';
    else if (discSeason === 'Aftermath' && discDayInSeason === 50) discCelebrate = '. Celebrate Afflux!';
    if (m === 1 && date.getDate() === 29) discCelebrate = ". Celebrate St. Tib's Day!";
    
    //output
    return `${discWeekDay}, the ${discDayInSeason}${suffix} day of ${discSeason} in the YOLD ${discYear}${discCelebrate}`;
}

console.log(discordianDate(new Date(2010, 6, 22))); // should return "Pungenday, the 57th day of Confusion in the YOLD 3176".
console.log(discordianDate(new Date(2012, 1, 28))); // should return "Prickle-Prickle, the 59th day of Chaos in the YOLD 3178".
console.log(discordianDate(new Date(2012, 1, 29))); //  should return "Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib\'s Day!".
console.log(discordianDate(new Date(2012, 2, 1))); //  should return "Setting Orange, the 60th day of Chaos in the YOLD 3178".
console.log(discordianDate(new Date(2010, 0, 5))); //  should return "Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!".
console.log(discordianDate(new Date(2011, 4, 3))); //  should return "Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!".
console.log(discordianDate(new Date(2015, 9, 19))); //  should return "Boomtime, the 73rd day of Bureaucracy in the YOLD 3181".



