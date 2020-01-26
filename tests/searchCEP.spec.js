import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
import { search } from '../src/search'
import { API_URL } from '../src/config'

chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

describe('ViaCEP Wrapper', () => {

    let fetchedStub
    let promise

    beforeEach( () => {
        fetchedStub = sinon.stub(global, 'fetch')
        promise = fetchedStub.returnsPromise()
    })

    afterEach( () => {
        fetchedStub.restore()
    })

    describe('smoke tests', () => {

        it('should exist the search method', () => {
            expect(search).to.exist;
        })

    })

    describe('Generic Search', () => {

        it('should call fetch function', () => {
            search()
            expect(fetchedStub).to.have.been.colleOne
        })

        it('should receive the correct url to fetch', () => {

            context('passing one type', ()  => {

                let cep = '09181710'
                let type = 'json'

                search(cep)

                expect(fetchedStub).to.have.been.calledWith(`${API_URL}/${cep}/${type}`)

            })

        })

        it('should return the JSON Data from the Prommise', () => {
            
            promise.resolves({ body: 'json' })

            let cep = '09181710'

            const result = search(cep)

            expect(result.resolveValue).to.be.eql({ body: 'json' })

        })

    })

})
