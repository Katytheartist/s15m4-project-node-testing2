exports.seed = function(knex){
    return knex('joy').truncate()
    .then(function (){
        return knex('joy').insert([
            {joy_action: 'Go for a walk outside', joy_feeling: 'Feel rejuvenated by nature!'},
            {joy_action: 'Practice 4-7-8 breathing', joy_feeling: 'Calm nervous system and relieve stress'},
            {joy_action: 'Cook a meal for a homeless person', joy_feeling: 'Takes focus off of oneself and helps others'},
            {joy_action: 'Smile', joy_feeling: 'Releases happy hormones in the brain'}
        ])
    })
}
