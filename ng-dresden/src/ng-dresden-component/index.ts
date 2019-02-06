import { strings } from '@angular-devkit/core';
import {
  apply,
  branchAndMerge,
  chain, mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngDresdenComponent(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {

    const templateSource = apply(url('./files'), [
      template({
        ...strings,
        ...options
      }),
      move(options.path || '')
    ]);

    const rule = chain([
      branchAndMerge(chain([
        mergeWith(templateSource)
      ]))
    ]);

    return rule(tree, context);
  };
}
