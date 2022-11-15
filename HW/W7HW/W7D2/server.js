const express = require('express');
const app = express();
const fs = require('fs')
const port = 3000


app.engine('stan', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)
        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
            .replace('#content#', '<div>' + options.content + '</div>')
        return callback(null, rendered)
    })
})


app.set('views', './views')

app.set('view engine', 'stan')



app.get('/a', (req, res) => {
    res.render('template1',
        {
            title: 'Forest Gump',
            message: "SDDD",
            message: 'My mom always said life was like a box of chocolates. You never know what you\'re gonna get.',
            content: 'lead actor: Tom Hanks'

        })
})

app.get('/b', (req, res) => {
    res.render('template1',
        {
            title: 'Interstellar',
            message: 'We\'re all astronauts, really, aren\'t we; interstellar astronauts, travelling so far into the blackness we can never return.',
            content: 'lead actor: Matthew McChonaughey'
        })
})

app.get('/c', (req, res) => {
    res.render('template1',
        {
            title: 'The Dark Knight Rises',
            message: 'No One Cared Who I Was Until I Put On The Mask.',
            content: 'lead actor: Christian Bale'
        })
})

app.get('/d', (req, res) => {
    res.render('template1',
        {
            title: 'The Matrix',
            message: 'I know kung-fu',
            content: 'lead actor: Keanu Reeves'
        })
})

app.get('/e', (req, res) => {
    res.render('template1',
        {
            title: 'Fight Club',
            message: 'I don\'t want to die without any scars.',
            content: 'lead actor: Edward Norton & Brad Pitt'
        })
})

app.get('/f', (req, res) => {
    res.render('template2',
        {
            title: 'Denver',
            message: 'Nuggets',
            content: 'Nikola Jokic'
        })
})

app.get('/g', (req, res) => {
    res.render('template2',
        {
            title: 'Los Angeles',
            message: 'Lakers',
            content: 'Lebron James'
        })
})

app.get('/h', (req, res) => {
    res.render('template2',
        {
            title: 'Golden State',
            message: 'Warriors',
            content: 'Steph Curry'
        })
})
app.get('/i', (req, res) => {
    res.render('template2',
        {
            title: 'Brooklyn',
            message: 'Nets',
            content: 'Kevin Durant'
        })
})
app.get('/j', (req, res) => {
    res.render('template2',
        {
            title: 'Dallas',
            message: 'Mavericks',
            content: 'Luka Doncic'
        })
})


app.listen(port, () => {
    console.log('listening on port', port)
});

