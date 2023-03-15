exports.getHomePage = (req, res, next) => {
    res.status(200).render('home', {
        title: 'Home',
        homeActive: true
    })
}