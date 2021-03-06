'use strict';

const rules = {
    'array-bracket-spacing'       : [ 2, 'always' ],
    'arrow-parens'                : [ 2, 'as-needed' ],
    'arrow-spacing'               : 2,
    'brace-style'                 : 2,
    'callback-return'             : 2,
    'camelcase'                   : [ 2, { 'properties' : 'always' } ],
    'comma-dangle'                : 2,
    'comma-spacing'               : 2,
    'comma-style'                 : 2,
    'computed-property-spacing'   : 2,
    'consistent-this'             : [ 2, 'self' ],
    'curly'                       : [ 2,  'multi-line', 'consistent' ],
    'eol-last'                    : 2,
    'global-require'              : 2,
    'handle-callback-err'         : 2,
    'indent'                      : [ 2, 4, { 'SwitchCase' : 1 } ],
    'key-spacing'                 : [ 2, { 'align' : 'colon', 'beforeColon' : true, 'afterColon' : true } ],
    'keyword-spacing'             : 2,
    'linebreak-style'             : 2,
    'lines-around-comment'        : 2,
    'no-array-constructor'        : 2,
    'no-class-assign'             : 2,
    'no-confusing-arrow'          : 2,
    'no-const-assign'             : 2,
    'no-constant-condition'       : 2,
    'no-dupe-class-members'       : 2,
    'no-lonely-if'                : 2,
    'no-mixed-spaces-and-tabs'    : 2,
    'no-multiple-empty-lines'     : [ 2, { 'max' : 2 } ],
    'no-negated-condition'        : 2,
    'no-path-concat'              : 2,
    'no-restricted-modules'       : [ 2, 'assert', 'os' ],
    'no-shadow'                   : 2,
    'no-spaced-func'              : 2,
    'no-this-before-super'        : 2,
    'no-trailing-spaces'          : 2,
    'no-unneeded-ternary'         : 2,
    'no-unused-vars'              : 2,
    'no-use-before-define'        : 2,
    'no-var'                      : 2,
    'object-curly-spacing'        : [ 2, 'always' ],
    'object-shorthand'            : 2,
    'padded-blocks'               : [ 2, 'never' ],
    'prefer-arrow-callback'       : 2,
    'prefer-const'                : 1,
    'prefer-reflect'              : 2,
    'prefer-spread'               : 2,
    'prefer-template'             : 2,
    'quotes'                      : [ 2, 'single', 'avoid-escape' ],
    'require-yield'               : 2,
    'semi-spacing'                : 2,
    'semi'                        : 2,
    'sort-vars'                   : 2,
    'space-before-blocks'         : 2,
    'space-before-function-paren' : 2,
    'space-in-parens'             : 2,
    'space-infix-ops'             : 2,
    'space-unary-ops'             : 2,
    'spaced-comment'              : [ 2, 'always', { 'markers' : [ '!' ] } ]
};

module.exports = rules;
