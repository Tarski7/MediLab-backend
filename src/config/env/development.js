export const devConfig = {
    port: 3000,
    database: 'medilab',
    secret: 'AXHK#DG<XESVJJ',
    google: {
        clientId: '545175086648-97bj9tfq3mpb1rovhpp2g239sqffm1qe.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:3000/api/auth/google/callback'
    },
    github: {
        clientId: 'Iv1.cbd4f3158f2bbc1b',
        clientSecret: '7b7f1bb8e80da48032e8cf3fa766940f8a0c0209',
        callbackURL: 'http://localhost:3000/api/auth/github/callback'
    },
}