import React from 'react';
import { render} from 'react-dom';
import UnitViewer from '../../src';


const basic_xml = `<?xml version="1.0" encoding="UTF-8" ?>
                        <testsuites>
                            <testsuite name="suite with no properties">
                                <testcase name="passing">
                                    <passed></passed>
                                </testcase>
                                <testcase name="failing">
                                    <failure></failure>
                                </testcase>
                                <testcase name="error">
                                    <error></error>
                                </testcase>
                                <testcase name="skipped">
                                    <skipped></skipped>
                                </testcase>
                            </testsuite>
                        </testsuites>
                        `

const App = () => (
    <UnitViewer xml={basic_xml}/>
);


render(<App />, document.getElementById("root"));