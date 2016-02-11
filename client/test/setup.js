import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import chaiSpies from 'chai-spies';
import ignoreStyles from 'ignore-styles';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

chai.use(chaiSpies);
chai.use(chaiImmutable);
