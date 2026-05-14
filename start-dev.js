#!/usr/bin/env node
process.chdir('/Users/macbookpro/Documents/IMN Data/imn-website');
const port = process.env.PORT || 3002;
process.argv = ['node', 'next', 'dev', '-p', String(port)];
require('next/dist/bin/next');
