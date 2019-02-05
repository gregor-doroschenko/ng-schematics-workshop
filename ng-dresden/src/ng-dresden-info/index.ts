import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngDresdenInfo(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('Ng Dresden Info: ' + JSON.stringify(_options));
    tree.create('ng-dresden-info.txt', 'Welcome to Angular Meetup Dresden!\n');
    return tree;
  };
}
