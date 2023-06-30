import csv
import cherrypy
import json
import dataprocessor
p = dataprocessor.DataProcessor()
class NamesDataControl(object):
    @cherrypy.expose
    @cherrypy.tools.json_out()
    @cherrypy.tools.json_in()
    def default(self, param=None):
        results = []
        with open('data/take-home-task-data.csv', 'r', newline='') as csvfile:
            next(csvfile)
            namesreader = csv.reader(csvfile, delimiter=',', quotechar='"', escapechar='\\')
            for row in namesreader:
                # Get list of names
                names = p.splitNames(row[0])
                for name in names:
                    person = dict(p.categoriseName(name))
                    results.append(person)
        return results

cherrypy.config.update({
    'server.socket_host': '0.0.0.0',
    'tools.response_headers.on': True,
    'tools.response_headers.headers': [('Content-Type', 'application/json'), ('Access-Control-Allow-Origin', '*')],
})
cherrypy.quickstart(NamesDataControl())