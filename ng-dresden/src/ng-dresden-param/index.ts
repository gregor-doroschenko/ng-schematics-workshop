import { apply, chain, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngDresdenParam(options: any): Rule {
  return chain([
    (_tree: Tree, context: SchematicContext) => {
      context.logger.info('Ng Dresden Param: ' + JSON.stringify(options));
    },

    mergeWith(apply(url('./files'), [
      template({
        number: options.number,
        title: options.title
      })
    ]))
  ]);
}
