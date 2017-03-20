import xhr from 'xhr'

export default {
  baseUrl: '/res',
  getStory () {
    return new Promise((resolve, reject) => {
      xhr.get(`${this.baseUrl}/story`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(JSON.parse(res.body))
      })
    })
  }
}
