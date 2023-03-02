const PouchDB = require('pouchdb');
const uuid = require('uuid')

const projectsDb = new PouchDB ('database/projects')

class ProjectsService {
    async getProjects() {

        let projects = []

        await projectsDb.allDocs({include_docs: true}, (err, docs) => {
            docs.rows.forEach(item => {
                projects.push(item.doc)
            })
        })

        return projects

    }

    async getOneProject (id) {

        let project

        await projectsDb.get(id, (err, doc) => {
            project = doc
        })

        return project
    }

    async sendProject (project) {

        project._id = uuid.v4()

        await projectsDb.put(project)

        return project

    }

    async deleteProject () {

    }
}

module.exports = new ProjectsService();