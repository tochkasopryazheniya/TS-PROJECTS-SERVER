const PouchDB = require('pouchdb');
const uuid = require('uuid')

const projectsDb = new PouchDB ('database/projects')
const projectsService = require('../services/projects-service')

class ProjectsController {

    async getProjects(req, res, next) {
        try{
            const projects = await projectsService.getProjects();

            res.json(projects);
        }catch (e) {
            console.log(e)
        }
    }

    async getOneProject(req, res, next) {
        try{
            const {id} = req.params;
            const project = await projectsService.getOneProject(id)

            res.json(project)
        }catch (e) {
            console.log(e)
        }
    }

    async sendProject(req, res, next) {
        try {

            const project = await projectsService.sendProject(req.body)

            res.json(project)


        }catch (e) {
            console.log(e)
        }
    }

}

module.exports = new ProjectsController();