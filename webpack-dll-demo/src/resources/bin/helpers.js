/* tslint:disable */
/* eslint-disable */
/**
 * Copyright: Copyright (c) 2016 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 * INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
import {_geo} from './geotoolkit.adv.module.js';
import {geotoolkit3d} from './geotoolkit3d.adv.module.js';

export let Helpers = (function (_geo) {
        // Returned object
        var helpers = {};

        var randNumOld;

        var patterns = {
            pattern: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKg' +
            'AAAAF5JREFUWEftlDEOACAIA/n/p1USNYisdDoTHexQqQdmZmMtP77tWrvuxpVJvOvUb9Uqw1zwE7sk8vTlZfyHB8mDYCC2nyRyGNgD77Q9c4A5AAMwAAMwAAMwA' +
            'AMwAAMTIjn2iP6kzQIAAAAASUVORK5CYII=',
            chert: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAArCAYAAADMr156AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpw' +
            'YAAAAB3RJTUUH3QYUEws07m+gbgAAAWBJREFUaN7tWkmOwzAMk4xe+6T+/yl9BucyBbokqS2RRoyKQE5NCEbWnpoVaMCC3B+87cSCMfMAG5EMi3jFpuaWEPH4zf8' +
            'v5ss9c48ao+feD80XwikgaAR0GBAiA797he/dDKFbKrjxdg2jTYxRdfKLhtLLg99EO/n01Lxs7kKh8OPIJJQVk96u5kYyZLh+H3CGS2FEcyPWel9wQvUjj4i01y4' +
            'QrOLGt9AYnSQ9EMMgeplMM3ZmAqb7qnjT3JcJlQDiPIHTE548URYKhTmA6bbYmKWZucVeJSFu8jG+ayhmgpGukqLZE2KQmGZV3BFeMzPveWD5EbsHbaJbZj4IjXo' +
            'CGIZQt8bqalClcQJ3oVD40fzBWucz+wIV7yE3Y53P7gmc/PJdmhnr/J4GLOLuvY0dEuGxuc6PNFCjXSh7iz3K6z3cqk2zkjv9T5mRFptphLtwpKZphtAbbmZ2FZb' +
            'DtOY/E/yf/j6LFtEAAAAASUVORK5CYII=',
            lime: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAvCAYAAACv3uebAAAAlElEQVR42u3YsRHAIAgAQPZfmmyQFMQI5r2zpXgFwYj7lVFf' +
            'XWKU4qX9uPeczKk3DhIkSOV4CnOhcEshKQQJEqSmSF6vhWNJHnZjl8SFBEnH/WpN8sJpAyBB+jqewjzkjzs7plG3tIQE6SdICrM/bj0SJEjDkBRm37d740KCBAmS' +
            'scRYopmEBAmSwmws0SdBgjQJ6QIsZSYFfMD7UAAAAABJRU5ErkJggg==',
            volc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAvCAYAAACv3uebAAAB80lEQVR42u1a207FMAzz/3/x9mSEhM4DsMZ227GDYglpOutI' +
            'L4nrJgUajcYbg19/V+922eOm/28bY9Fu9P333ym2VybA7TdSezQ6jsF7dUI4aFcNTvn2qs9c4ZHOjKuGKAxs5J3qYiDsk0IVvzZOwvQuXnEXqlo0pmTrrNIqwlY9' +
            'aRT6CZEz8QYaoaMSOUP+S8Kf4uRakzdyz9Gz410s7K3cSBiEdCQlVngAkEsGddfiJIFjsIh/IiafLHaJRcJUXQksIEyF4xKZsmSBq9BAGDaJrUQjVTzohCSr1XU6' +
            'P+z4eZ48joMm70HkPFWSpHwaC7WVh0z3TJf2IyX5t882/KcNpdFoNBqNRqPRaLS0d1IWaQ7n6WOaKW7+SHW4k5geSJWT/owNtZIDtZ2Sl04KjtVvbnsnFwToCcTX' +
            '8ydQlLmrZ7W9Wpl1B1Z5JaCllpUSmhR+6SWEpFqScGPEK9hUWkLAGVxEuneQ+2NkAm+0vVXqJJcVlB3LLSvfUWaK2iRJcoVTiLyiq7xL7wDEE6kMPBWfV1d70tqe' +
            'KkVSZ5BuurlCS/VAZSdKyklJWWrpTrazrHwHgc+En6171G8dT1tJuA63OcJVOve4xhP+qjgEYajP3N6bun2runFC9C5X7uAe+R7ATPrBduHw/cwk7cx2NBoX+AAE' +
            'nyHixhle3AAAAABJRU5ErkJggg==',
            shale: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAALMw9IgAAAEAdFJOU//////////////////////////////////////////////////////////////////////////////' +
            '////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////' +
            '////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////' +
            '//////////////wBT9wclAAAACXBIWXMAABJ0AAASdAHeZh94AAAAKElEQVQoU2P4jwagAgxIEE0ElxYEoIoA3D6YADqfHEOhNBygCfz/DwBLeOsVtZdJsgAAAAB' +
            'JRU5ErkJggg==',
            salt: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAvCAYAAACv3uebAAAAdElEQVR42u3UMQoAMQgEQP//aa1TRUFIkTkQrkgILM5GnF82' +
            '/rfPvXhnfCfNdWzS4I6QcMMNN9xwww03gxtuQtJJOgk33IxNwg033HATkk7SSTYJN9xwww033HATEm644YYbbrgJSScZnYSbkHSSTsLts5AKobPNhwiVDxwAAAAA' +
            'SUVORK5CYII=',
            sand: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAvCAYAAACv3uebAAACcklEQVR42sWa204EMQxD+/8/bV4QSMC0jn06rLQSK2Z6SZzE' +
            'cbvW90efX/czff7pnWQcd/zdfDLerRewBgta4eStUZ+ePY0rdx7HK7dR4m6mQfvOkL9+TI1CbHiVc95C1eMiU6u74eTkBw2RQhojdtYJXTo88/Pv0+ImG1MQjjoA' +
            'xHJO4kmB4bOGGxZoZE3RQid1AuK3isBrfMdBX1upWqpQGdkhWze5ScqhEvqhJjL0x3ca2xRCU/IqKBIsI0032ZRcDYqGU1Rurzljohf6qhuEtWXfj5AVRBEIo1CV' +
            'zW12H+fVekcJeKuYaDDOEe0OeppEq8LDDb9TuJ/HpH3q52S+QyVaBQ5o89H2Pcr7SYNLVp2GrUfznl5IJ2yrU0sxpih8RFIL5zQ8pyghmtsKNVQrMknOFMGr888E' +
            '/afw2ulG1CLdQtL0jlPnVqcLtCebyoeE2I59K8wJ08UKCpuTMRGyS8NzwsOQ7jykBaP3BMIz4VRO5797nm58jwiklEKX3xBqpMrQG1c1rAL8U4m+1XBXfU/anSdI' +
            'IZEdrY9MiMjFg5KE0k6/pvKlrD2RSHbcrgGAVnAelyqSTgi9YXiEUN66odHkGSJ0k9ActSSTwW7dRBGUApAqTAtw057Q0aBdB6HiIa7YFTBvxnXYehz6yTEPeW+o' +
            'VQWSglFRF5pdk31fopS2x+BKkhsttpNyC3VYoF3pb2+i0Vd4CCdQyLQ6ZPfUwZUziIti6RhR+JNl00EXoUzS6uaIG9GEbIKkW6rjhHpY6SNNhikjptj05DY/ztne' +
            'NBK18bb8j6F7VekD2h1qLFELIqWMG9eNJ12Eg9Kv/38AnFPLX5tg7cYAAAAASUVORK5CYII=',
            siltstone: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUEx' +
            'URQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALMw9IgAAAEAdFJOU//////////////////////////////////////////////////////////////////////////' +
            '////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////' +
            '////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////' +
            '//////////////////wBT9wclAAAACXBIWXMAABJ0AAASdAHeZh94AAAAO0lEQVQoU32NUQoAMAhCu/+lnX4YK9kMoh5mBaDUrHumaoNwNJDVtQjBvHpnWMORAVS' +
            'C/mew91+GRuAAQHXjHZWtvucAAAAASUVORK5CYII=',
            dolomite: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExU' +
            'RQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALMw9IgAAAEAdFJOU///////////////////////////////////////////////////////////////////////////' +
            '////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////' +
            '////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////' +
            '/////////////////wBT9wclAAAACXBIWXMAABJ0AAASdAHeZh94AAAAMElEQVQoU2P4jwRAHLwCYDamAAZAyEEAdgEkPpECyHwsAhgAKgEBQB5+AYb///8DAC0K' +
            '0S9zJ3wFAAAAAElFTkSuQmCC',
            basement: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExU' +
            'RQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
            'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALMw9IgAAAEAdFJOU///////////////////////////////////////////////////////////////////////////' +
            '////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////' +
            '////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////' +
            '/////////////////wBT9wclAAAACXBIWXMAABJ0AAASdAHeZh94AAAAO0lEQVQoU5XKSRIAIAgDQf7/6cimjN5McUi6MMkPiXVJDkp1SNeR3Y7gufIN9oCvC2IQ' +
            'sgOqDnTDR0Rax1DzDThqq54AAAAASUVORK5CYII='
        };


        var symbols = {
            mute: 'data:image/png;base64,R0lGODlhEwATAPcAAAAAAAAAMwAAZgAAmQAAzAAA/wArAAArMwArZgArmQArzAAr/wBVAABVMwBVZgBVmQBVzABV/wCAAACA' +
            'MwCAZgCAmQCAzACA/wCqAACqMwCqZgCqmQCqzACq/wDVAADVMwDVZgDVmQDVzADV/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMrADMrMzMr' +
            'ZjMrmTMrzDMr/zNVADNVMzNVZjNVmTNVzDNV/zOAADOAMzOAZjOAmTOAzDOA/zOqADOqMzOqZjOqmTOqzDOq/zPVADPVMzPVZjPVmTPVzDPV/zP/ADP/MzP/ZjP/' +
            'mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YrAGYrM2YrZmYrmWYrzGYr/2ZVAGZVM2ZVZmZVmWZVzGZV/2aAAGaAM2aAZmaAmWaAzGaA/2aqAGaqM2aqZmaqmWaq' +
            'zGaq/2bVAGbVM2bVZmbVmWbVzGbV/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5krAJkrM5krZpkrmZkrzJkr/5lVAJlVM5lVZplVmZlVzJlV' +
            '/5mAAJmAM5mAZpmAmZmAzJmA/5mqAJmqM5mqZpmqmZmqzJmq/5nVAJnVM5nVZpnVmZnVzJnV/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wr' +
            'AMwrM8wrZswrmcwrzMwr/8xVAMxVM8xVZsxVmcxVzMxV/8yAAMyAM8yAZsyAmcyAzMyA/8yqAMyqM8yqZsyqmcyqzMyq/8zVAMzVM8zVZszVmczVzMzV/8z/AMz/' +
            'M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8rAP8rM/8rZv8rmf8rzP8r//9VAP9VM/9VZv9Vmf9VzP9V//+AAP+AM/+AZv+Amf+AzP+A//+qAP+qM/+q' +
            'Zv+qmf+qzP+q///VAP/VM//VZv/Vmf/VzP/V////AP//M///Zv//mf//zP///wAAAAAAAAAAAAAAACH5BAEAAPwALAAAAAATABMAAAj/AKWlEiit4LSCCBNKQ5Xq' +
            '1TRUD8ENO6gQIcOGqVDVckfvVUWLGKXZchetXjZUH6W9epURFrFl0TqCa2cLobl24FDB6tWLWLR9MV/R20cPnDRw+/a1Q8UIZrRlMJdlA/dTGdKYOWGFgroMKL2B' +
            '4IYmLSrtT1OoT5+elNYL6L6aC21tegp1n7KT5/QlJWq00NmoJV+Z+0kMXNdoOW2Foks4GzGiHqkq/QNrUs+0Um2dg4sKXC9wf1Kl+mPrpV2PKDM+XFjIEMtULtUO' +
            'nI1N9LTQrjOW7siwtmhXDQthZDnN1jBYEBuqnMYyN8vX2VJNA85cNMtCXAxl31Ko0J/u4LkbBNqiPSAAOw==',
            error: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmU' +
            'gSW1hZ2VSZWFkeXHJZTwAAAC4SURBVDhPrZMxDoMwEAT9Ev5BQ0kXUVLS8Ka8I8/IG1KkS5cuBZKLbDhLax3HmSSCYiTb0s6tEQ4Awh42w5cQTsLWgKJgDp6vVQV' +
            'B1iWJK5DADN7jmJB1SVIS5LCWeC1WAjv9WwtPgDgMLnIV22Ih4PRX30OIcUpw730LK8Cz6zIU6DPbIgs4/dG2IBToM9tCC3Bvmp/QLZKA0291DQ0b2HPdgoJF0Aa' +
            '8PVscJki/7p+k97HrKYvgA2txkj9Lg4E+AAAAAElFTkSuQmCC',
            warning: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZc' +
            'wAADsIAAA7CARUoSoAAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAidJREFUOE+tlF9IU1Ecx4UgCHrttZfsRfKp1yDoKV8iMggCwYeQo' +
            'CChQA2TetDAIiTCIpAEM2KVRPmnFWPEqqFkC2l/3ObNuc1Nm5a79+7eu53t6+936w6dV5HYw+fl/M753O8593dODYCaalAVCQexFbk6Du8lmolR4isxQ0wQLcQ+u' +
            'x1sEdHEWsIXeHEVmeA4svEpyCkfMiEngiNtoJpE1FfKNolowgEiEfM8RCkfRyHrRX7VSYyh8OcjinoECe8Ay1b4gxtllaJh6cMdWjAH49crGMsOuNoOmeiLj6El7' +
            'kOo3xDzPGCZy1ZEhYOEKIk15DNvSfIcRnqoLNLi96DFepCbv4WiEcZk30mWlbdYTkSDTX5HK4raLIylZ9DTg2YKKxELclIH1GgrCr9HEX5znUVXrFQbRe3Rdz0Qy' +
            'jT01AD0ZD84hSVS565BjVyGMnuBPvQE8+67LLptJ2rhvyJUn3kW2kKvuQ0rhRq+CCXUDCVwns7vKaITN1nUbieqn+xrQMmQ/p7FzxvgFFYiJdgEOXAO8o8zlPozp' +
            'h81sujYFhEPUMGTnBqEyHrMs+AUlkj2nyXJaeRXXiL9fZglIWLPdqKjVMwtzTgg5E+UqrOcQo1col5yUmO+Zokgjm/bR/9SneCmjIx3QV78AhSTgFiAkvJCet/Nk' +
            'mXi1I6dbRVp4n6il++Yu7MO7q4jLPAT/dz9u7prlZNoIV9g24u649b+922q2nu0DgqfrZw1e2AzAAAAAElFTkSuQmCC'
        };

        helpers.defaults = {
            zoomInScale: 5 / 4,
            zoomOutScale: 4 / 5
        };
        // ==========================================================================
        // TODO: replace "titleColor" with "getTitleStyle" in all tutorials and demos
        helpers.titleColor = function () {
            return {
                'style': new geotoolkit.attributes.TextStyle({
                    'color': '#757575', 'font': '18px Roboto'
                }), 'color': '#757575'
            };
        };
        helpers.getTitleStyle = function () {
            return {
                'color': '#757575', 'font': '18px Roboto'
            };
        };
        // ==========================================================================

        helpers.axisColor = function () {
            return {
                'style': new geotoolkit.attributes.TextStyle({
                    'color': '#757575', 'font': '12px Roboto', 'baseline': 'middle', 'alignment': 'center'
                }), 'color': '#757575'
            };
        };

        helpers.axisMajorTickColor = function () {
            return {
                'style': new geotoolkit.attributes.LineStyle({
                    'color': '#757575', 'width': 1
                }), 'color': '#757575'
            };
        };

        helpers.axisMinorTickColor = function () {
            return {
                'style': new geotoolkit.attributes.LineStyle({
                    'color': '#e0e0e0', 'width': 1
                }), 'color': '#e0e0e0'
            };
        };

        helpers.axisEdgeTickColor = function () {
            return {
                'style': new geotoolkit.attributes.LineStyle({
                    'color': '#757575', 'width': 1
                }), 'color': '#757575'
            };
        };
        helpers.randomSeed = 6;
        /**
         * Used for tutorials to create a reproducible random value set.
         * @param {number} min value of random
         * @param {number} max value of random
         * @returns {number}
         */
        helpers.seededRandom = function (min, max) {
            max = max || 1;
            min = min || 0;

            Helpers.randomSeed = (Helpers.randomSeed * 9301 + 49297) % 233280;
            var rnd = Helpers.randomSeed / 233280;

            return min + rnd * (max - min);
        };

        helpers.getColor = function (colorName, alpha) {
            var color = colorName.toLowerCase();
            if (alpha !== undefined) {
                color = helpers.getColor(colorName);
                return geotoolkit.util.ColorUtil.parseColor(color)
                    .setAlpha(alpha);
            }
            switch (color) {
                case 'gray':
                    return '#bdbdbd';

                case 'grey':
                    return '#bdbdbd';

                case 'lightgray':
                    return '#eeeeee';

                case 'lightgrey':
                    return '#eeeeee';

                case 'orange':
                    return '#ef6c00';

                case 'darkorange':
                    return '#e65100';

                case 'lightorange':
                    return '#ffe0b2';

                case 'green':
                    return '#7cb342';

                case 'darkgreen':
                    return '#33691e';

                case 'lightgreen':
                    return '#dcedc8';

                case 'blue':
                    return '#2196f3';

                case 'lightblue':
                    return '#bbdefb';

                case 'darkblue':
                    return '#1565c0';

                case 'yellow':
                    return '#fdd835';

                case 'darkyellow':
                    return '#fbc02d';

                case 'lightyellow':
                    return '#fff9c4';

                case 'darkgray':
                    return '#757575';

                case 'darkgrey':
                    return '#757575';

                case 'black':
                    return '#212121';

                case 'red':
                    return '#e64a19';

                case 'darkred':
                    return '#bf360c';

                case 'lightred':
                    return '#ff7043';

                case 'indigo':
                    return '#4b0082';

                case 'violet':
                    return '#ee82ee';

                default:
                    return colorName;
            }
        };

        // ======================================================================================================================================
        // TODO: replace "generateAxis" with preferred "AxisFactory::create" (or "AnnotatedNode.createAxis" at least) in all tutorials and
        // demos:
        helpers.generateAxis = function (tickPosition, orientation) {
            var axis = new geotoolkit.axis.Axis();
            axis.setTickPosition(tickPosition);
            var labelPosition;
            // DEBUG:var DEBUG_TITLE = "AXIS_";
            var autoLabelRotationAngle = 0;
            var titleAnchorType;
            if (tickPosition === geotoolkit.axis.TickInfo.TickPosition.Bottom) { // NORTH axis:
                labelPosition = geotoolkit.axis.TickInfo.LabelPosition.Bottom;
                titleAnchorType = geotoolkit.util.AnchorType.TopCenter;

                // DEBUG:DEBUG_TITLE += "NORTH";
            } else if (tickPosition === geotoolkit.axis.TickInfo.TickPosition.Top) { // SOUTH axis:
                labelPosition = geotoolkit.axis.TickInfo.LabelPosition.Top;
                titleAnchorType = geotoolkit.util.AnchorType.BottomCenter;

                // DEBUG:DEBUG_TITLE += "SOUTH";
            } else if (tickPosition === geotoolkit.axis.TickInfo.TickPosition.Left) { // EAST axis:
                labelPosition = geotoolkit.axis.TickInfo.LabelPosition.Left;
                titleAnchorType = geotoolkit.util.AnchorType.RightCenter;
                autoLabelRotationAngle = Math.PI / 2;

                // DEBUG:DEBUG_TITLE += "EAST";
            } else if (tickPosition === geotoolkit.axis.TickInfo.TickPosition.Right) { // WEST axis:
                labelPosition = geotoolkit.axis.TickInfo.LabelPosition.Right;
                titleAnchorType = geotoolkit.util.AnchorType.LeftCenter;
                autoLabelRotationAngle = -Math.PI / 2;

                // DEBUG:DEBUG_TITLE += "WEST";
            } else {
                labelPosition = geotoolkit.axis.TickInfo.LabelPosition.Center;
                titleAnchorType = geotoolkit.util.AnchorType.Center;

                // DEBUG:DEBUG_TITLE += "CENTER";
            }
            axis.setLabelPosition(labelPosition);
            if (autoLabelRotationAngle !== 0) {
                axis.setAutoLabelRotationAngle(autoLabelRotationAngle);
                axis.setAutoLabelRotation(true);
            }
            axis.setTitleAnchor(titleAnchorType);
            /* !DEBUG!*>
             axis.setTitle({
             'title': DEBUG_TITLE,
             'visible': true,
             'textstyle': new geotoolkit.attributes.TextStyle(),
             //'alignment': titleAnchorType
             });/*!DEBUG!*/

            axis.setOrientation(orientation);
            axis.setBaseLineStyle(this.axisMajorTickColor()['style']);

            var tickGenerator = axis.getTickGenerator();
            this.setAxisTickGeneratorStyle(tickGenerator);
            return axis;
        };
        // ======================================================================================================================================

        helpers.generateAxisTickGenerator = function (className) {
            var tickGenerator = geotoolkit.instantiateClass(className);
            this.setAxisTickGeneratorStyle(tickGenerator);
            return tickGenerator;
        };

        helpers.setAxisTickGeneratorStyle = function (tickGenerator) {
            tickGenerator.setLabelStyle('MAJOR', Helpers.axisColor()['style']);
            tickGenerator.setLabelStyle('MINOR', null);
            tickGenerator.setLabelStyle('EDGE', Helpers.axisColor()['style']);
            tickGenerator.setTickStyle('MAJOR', Helpers.axisMajorTickColor()['style']);
            tickGenerator.setTickStyle('MINOR', Helpers.axisMinorTickColor()['style']);
            tickGenerator.setTickStyle('EDGE', Helpers.axisEdgeTickColor()['style']);
        };

        helpers.gridMajorLineColor = function () {
            return {
                'style': new geotoolkit.attributes.LineStyle({
                    'color': '#c4c4c4', 'width': 1
                }), 'color': '#c4c4c4'
            };
        };
        helpers.gridMinorLineColor = function () {
            return {
                'style': new geotoolkit.attributes.LineStyle({
                    'color': '#eeeeee', 'width': 1
                }), 'color': '#eeeeee'
            };
        };
        helpers.gridEdgeLineColor = function () {
            return {
                'style': new geotoolkit.attributes.LineStyle({
                    'color': '#c4c4c4', 'width': 1
                }), 'color': '#c4c4c4'
            };
        };

        helpers.borderLineStyle = function () {
            return {
                'style': new geotoolkit.attributes.LineStyle({
                    'color': 'transparent', 'width': 0
                }), 'color': 'transparent'
            };
        };

        helpers.defaultFillStyle = function () {
            return {
                'style': new geotoolkit.attributes.FillStyle('#ef6c00'), 'color': '#ef6c00'
            };
        };

        helpers.getColorProvider = function (min, max) {
            return new geotoolkit.util.DiscreteGradientColorProvider({'bins': 255}).setScale(
                geotoolkit.util.ColorProvider.KnownScales.Orange, min, max);
        };

        helpers.generateGridTickGenerator = function (className) {
            var tickGenerator = geotoolkit.instantiateClass(className);
            this.setGridTickGeneratorStyle(tickGenerator);
            return tickGenerator;
        };

        helpers.setGridTickGeneratorStyle = function (tickGenerator) {
            tickGenerator.setLabelStyle('MAJOR', null);
            tickGenerator.setLabelStyle('MINOR', null);
            tickGenerator.setLabelStyle('EDGE', null);
            tickGenerator.setTickStyle('MAJOR', Helpers.gridMajorLineColor()['style']);
            tickGenerator.setTickStyle('MINOR', Helpers.gridMinorLineColor()['style']);
            tickGenerator.setTickStyle('EDGE', null);
        };

        helpers.getScrollbarJSON = function (isResizable) {
            var defaultHandlePainter = function (symbol, bbox, context) {
                context.setFillStyle(symbol.getFillStyle());
                context.setLineStyle(symbol.getLineStyle());

                context.drawEllipse(bbox.getLeft(), bbox.getTop(), bbox.getWidth(), bbox.getHeight());

                context.stroke();
                context.fillPath();
            };

            // small hack to have the scroll caret inside clipping models
            var caretScrollOptions = {
                'size': 4, 'caret': null
            };

            var DEFAULT_SCROLLBAR_COLOR = '#bdbdbd';

            var handle = function () {
                return new geotoolkit.scene.shapes.Symbol({
                    'painter': defaultHandlePainter,
                    'visible': true,
                    'autohide': false,
                    'linestyle': new geotoolkit.attributes.LineStyle(DEFAULT_SCROLLBAR_COLOR).setPixelSnapMode({'x': true, 'y': true}),
                    'fillstyle': new geotoolkit.attributes.FillStyle(DEFAULT_SCROLLBAR_COLOR),
                    'width': 6,
                    'height': 6,
                    'alignment': geotoolkit.util.AnchorType.Center,
                    'ax': 0,
                    'ay': 0,
                    'sizeIsInDeviceSpace': true
                });
            };

            return {
                'minhandle': handle(),
                'maxhandle': handle(),
                'realtimeresize': isResizable,
                'resizable': isResizable,
                'minscrollbutton': caretScrollOptions,
                'maxscrollbutton': caretScrollOptions,
                'scrollbar': {
                    'visible': true,
                    'linestyle': new geotoolkit.attributes.LineStyle(DEFAULT_SCROLLBAR_COLOR).setPixelSnapMode({'x': true, 'y': true}),
                    'fillstyle': new geotoolkit.attributes.FillStyle(DEFAULT_SCROLLBAR_COLOR)
                }
            };
        };

        var depthData = {
            'indexUnit': 'ft',
            'curveNames': ['CALI', 'DLT', 'GR', 'RILD', 'RHOB', 'RILM', 'RLL8', 'SP'],
            'curveUnits': ['INS', 'US/FT', 'API', 'OHMM', 'G/CC', 'OHMM', 'OHMM', 'MV'],
            'curveData': [[9.388, 9.242, 9.165, 9.148, 9.212, 9.29, 9.68, 9.808, 9.725, 9.614, 9.307, 9.39, 9.554, 9.651, 9.535, 9.516,
                9.522, 9.528, 9.557, 9.59, 9.578, 9.62, 9.584, 9.533, 9.528, 9.531, 9.447, 9.427, 9.42, 9.374, 9.31, 9.358, 9.424, 9.435,
                9.436, 9.432, 9.427, 9.423, 9.418, 9.414, 9.474, 9.545, 9.549, 9.544, 9.467, 9.455, 9.454, 9.508, 9.568, 9.509, 9.52, 9.542,
                9.565, 9.557, 9.546, 9.541, 9.537, 9.532, 9.536, 9.541, 9.627, 9.643, 9.65, 9.668, 9.687, 9.654, 9.673, 9.7, 9.748, 9.531,
                9.507, 9.584, 9.668, 9.657, 9.636, 9.624, 9.613, 9.603, 9.719, 9.644, 9.551, 9.619, 9.701, 9.552, 9.381, 9.366, 9.365,
                9.349, 9.333, 9.312, 9.291, 9.406, 9.4, 9.384, 9.421, 9.413, 9.4, 9.354, 9.356, 9.4, 9.446, 9.518, 9.64, 9.674, 9.703,
                9.684, 9.663, 9.668, 9.674, 9.68, 9.685, 9.49, 9.615, 9.757, 9.776, 9.789, 9.791, 9.792, 9.831, 9.872, 9.842, 9.809, 9.806,
                9.804, 9.802, 9.782, 9.761, 9.634, 9.752, 9.879, 9.896, 9.908, 9.85, 9.789, 9.765, 9.835, 9.834, 9.831, 9.828, 9.837, 9.845,
                9.86, 9.875, 9.89, 9.905, 9.996, 10.089, 10.012, 9.933, 9.996, 9.848, 9.682, 9.732, 9.782, 9.816, 9.85, 9.884, 9.917, 9.629,
                9.341, 9.252, 9.242, 9.235, 9.61, 9.981, 10.064, 10.144, 10.036, 9.929, 9.989, 10.048, 9.966, 9.913, 9.86, 9.883, 9.97,
                9.957, 9.943, 9.926, 9.774, 9.721, 9.665, 9.47, 9.441, 9.415, 9.501, 9.729, 9.951, 9.979, 10.007, 10.035, 10.065, 10.149,
                10.22, 9.954, 9.695, 9.604, 9.523, 9.659, 9.686, 9.663, 9.645, 9.758, 9.865, 9.86, 9.844, 9.627, 9.431, 9.561, 9.684, 9.685,
                9.691, 9.78, 9.791, 9.802, 9.827, 9.836, 9.632, 9.567, 9.501, 9.454, 9.662, 9.8, 9.919, 9.808, 9.843, 9.802, 9.756, 9.648,
                9.675, 9.689, 9.546, 9.446, 9.81, 9.992, 10.123, 9.724, 9.604, 9.912, 10.322, 10.147, 9.974, 9.838, 9.996, 10.172, 10.512,
                10.696, 10.432, 10.167, 9.92, 9.844, 9.856, 9.86, 9.796, 9.818, 9.853, 9.988, 10.142, 10.228, 9.759, 9.382, 9.736, 10.061,
                10.169, 10.239, 10.03, 9.878, 9.517, 9.214, 9.446, 10.364, 10.403, 10.399, 10.104, 9.841, 9.812, 9.782, 9.739, 9.602, 9.548,
                9.97, 10.01, 10.288, 10.293, 10.221, 9.752, 9.779, 9.788, 9.694, 9.62, 9.693, 9.93, 10.404, 10.872, 11.152, 10.521, 9.892,
                9.398, 9.629, 9.654, 9.669, 9.633, 9.597, 9.583, 9.681, 9.779, 9.877, 9.975, 10.048, 9.993, 9.931, 9.836, 9.741, 9.671,
                9.726, 9.632, 8.929, 8.757, 8.737, 8.745, 8.752, 8.753, 8.751, 8.736, 8.727, 8.767, 8.804, 8.835, 8.867, 8.976, 9.066, 9.2,
                9.434, 9.264, 8.932, 8.643, 8.553, 8.55, 8.547, 8.556, 8.615, 8.645, 8.577, 8.567, 8.557, 8.543, 8.514, 8.486, 8.473, 8.5,
                8.477, 8.456, 8.442, 8.425, 8.394, 8.381, 8.37, 8.37, 8.38, 8.39, 8.39, 8.355, 8.32, 8.305, 8.357, 8.382, 8.335, 8.367,
                8.395, 8.408, 8.421, 8.434, 8.435, 8.397, 8.379, 8.422, 8.455, 8.46, 8.465, 8.469, 8.474, 8.479, 8.484, 8.489, 8.493, 8.492,
                8.473, 8.431, 8.351, 8.373, 8.401, 8.437, 8.443, 8.455, 8.465, 8.418, 8.388, 8.412, 8.445, 8.467, 8.459, 8.452, 8.445,
                8.446, 8.471, 8.496, 8.491, 8.417, 8.366, 8.315, 8.304, 8.459, 8.778, 8.968, 8.829, 8.705, 8.623, 8.646, 8.653, 8.62, 8.588,
                8.559, 8.548, 8.583, 8.592, 8.542, 8.512, 8.532, 8.522, 8.437, 8.395, 8.451, 8.487, 8.491, 8.527, 8.561, 8.59, 8.61, 8.609,
                8.608, 8.609, 8.603, 8.575, 8.528, 8.513, 8.568, 8.586, 8.588, 8.72, 8.852, 8.984, 9.013, 8.821, 8.697, 8.715, 8.757, 8.848,
                8.884, 8.807, 8.731, 8.673, 8.651, 8.629, 8.593, 8.53, 8.5, 8.525, 8.547, 8.552, 8.55, 8.508, 8.478, 8.564, 8.646, 8.608,
                8.57, 8.636, 8.704, 8.714, 8.685, 8.653, 8.783, 8.66, 8.561, 8.535, 8.524, 8.513, 8.514, 8.519, 8.525, 8.533, 8.544, 8.536,
                8.511, 8.52, 8.512, 8.478, 8.471, 8.433, 8.415, 8.443, 8.486, 8.529, 8.539, 8.474, 8.523, 8.569, 8.602, 8.635, 8.666, 8.664,
                8.662, 8.669, 8.676, 8.622, 8.567, 8.513, 8.542, 8.54, 8.554, 8.574, 8.593, 8.619, 8.647, 8.64, 8.63, 8.626, 8.601, 8.563,
                8.525, 8.549, 8.586, 8.579, 8.572, 8.557, 8.539, 8.533, 8.524, 8.494, 8.429, 8.395, 8.383, 8.445, 8.483, 8.504, 8.43, 8.464,
                8.434, 8.406, 8.458, 8.475, 8.491, 8.446, 8.455, 8.47, 8.443, 8.4, 8.354, 8.389, 8.446, 8.425, 8.373, 8.386, 8.445, 8.466,
                8.457, 8.509, 8.531, 8.485, 8.461, 8.46, 8.458, 8.442, 8.404, 8.41, 8.481, 8.505, 8.518, 8.514, 8.556, 8.578, 8.501, 8.442,
                8.524, 8.626, 8.6, 8.574, 8.581, 8.588, 8.606, 8.624, 8.656, 8.603, 8.538, 8.549, 8.577, 8.531, 8.46, 8.407, 8.402, 8.414,
                8.414, 8.405, 8.511, 8.705, 8.795, 8.787, 8.817, 8.894, 8.933, 8.916, 8.899, 8.839, 8.738, 8.741, 8.702, 8.668, 8.647,
                8.638, 8.669, 8.616, 8.572, 8.653, 8.772, 8.703, 8.635, 8.595, 8.558, 8.591, 8.599, 8.602, 8.605, 8.651, 8.642, 8.614,
                8.591, 8.57, 8.55, 8.566, 8.604, 8.621, 8.545, 8.406, 8.414, 8.498, 8.557, 8.627, 8.575, 8.511, 8.512, 8.504, 8.476, 8.456,
                8.461, 8.475, 8.511, 8.484, 8.465, 8.497, 8.536, 8.549, 8.589, 8.622, 8.729, 8.816, 8.607, 8.437, 8.591, 8.725, 8.761,
                8.837, 9.007, 9.109, 9.17, 9.157, 9.061, 8.955, 8.887, 8.784, 8.896, 8.904, 8.87, 8.908, 8.917, 8.914, 9.007, 8.905, 8.747,
                8.642, 8.598, 8.561, 8.524, 8.553, 8.469, 8.497, 8.516, 8.491, 8.469, 8.457, 8.436, 8.353, 8.291, 8.413, 8.479, 8.47, 8.464,
                8.463, 8.455, 8.45, 8.435, 8.41, 8.385, 8.412, 8.459, 8.466, 8.462, 8.459, 8.398, 8.331, 8.314, 8.303, 8.405, 8.495, 8.489,
                8.484, 8.457, 8.353, 8.314, 8.411, 8.437, 8.462, 8.455, 8.402, 8.349, 8.331, 8.425, 8.478, 8.456, 8.48, 8.526, 8.53, 8.518,
                8.422, 8.475, 8.511, 8.538, 8.449, 8.512, 8.576, 8.504, 8.6, 8.582, 8.559, 8.516, 8.494, 8.545, 8.567, 8.523, 8.505, 8.527,
                8.553, 8.579, 8.598, 8.613, 8.623, 8.628, 8.631, 8.628, 8.622, 8.61, 8.603, 8.601, 8.576, 8.531, 8.542, 8.561, 8.598, 8.632,
                8.615, 8.604, 8.598, 8.592, 8.577, 8.552, 8.53, 8.511, 8.491, 8.464, 8.438, 8.417, 8.402, 8.396, 8.394, 8.395, 8.395, 8.396,
                8.396, 8.397, 8.398, 8.398, 8.399, 8.399, 8.399, 8.401, 8.405, 8.409, 8.428, 8.463, 8.485, 8.494, 8.502, 8.531, 8.58, 8.605,
                8.647, 8.732, 8.798, 8.843, 8.866, 8.867, 8.844, 8.795, 8.756, 8.728, 8.728, 8.761, 8.693, 8.617, 8.651, 8.664, 8.668,
                8.689, 8.69, 8.702, 8.755, 8.845, 8.801, 8.642, 8.581, 8.551, 8.558, 8.596, 8.669, 8.763, 8.883, 8.901, 8.832, 8.801, 8.742,
                8.69, 8.702, 8.734, 8.767, 8.791, 8.805, 8.819, 8.833, 8.902, 8.982, 8.991, 9.053, 9.181, 9.174, 9.198, 9.325, 9.354, 9.467,
                9.402, 9.166, 9.018, 8.983, 8.955, 8.981, 9.114, 9.248, 9.249, 9.21, 9.107, 9.017, 9.118, 9.16, 9.179, 9.27, 9.343, 9.391,
                9.347, 9.24, 9.219, 9.166, 9.134, 9.153, 9.113, 9.072, 8.991, 8.963, 9.092, 9.127, 9.028, 9.091, 9.296, 9.268, 9.11, 8.976,
                8.863, 8.782, 8.754, 8.803, 8.808, 8.749, 8.659, 8.522, 8.616, 9.058, 9.305, 9.286, 9.394, 9.541, 9.41, 9.056, 8.69, 8.497,
                8.586, 8.638, 8.603, 8.62, 8.784, 8.912, 8.823, 8.777, 8.73, 8.623, 8.606, 8.59, 8.578, 8.565, 8.53, 8.459, 8.388, 8.396,
                8.613, 8.958, 9.125, 9.033, 9.009, 8.901, 8.649, 8.645, 9.072, 9.356, 9.467, 9.519, 9.345, 9.352, 9.337, 9.283, 8.998,
                8.655, 8.953, 9.251, 9.426, 9.412, 9.456, 9.473, 9.544, 9.685, 9.59, 9.606, 9.732, 9.672, 9.471, 9, 8.681, 8.64, 8.573,
                8.549, 8.587, 8.58, 8.637, 8.732, 8.643, 8.57, 8.572, 8.893, 9.414, 9.058, 8.759, 8.711, 8.938, 9.174, 9.41, 9.564, 9.551,
                9.596, 9.661, 9.508, 9.364, 9.291, 9.332, 9.374, 9.358, 9.264, 9.273, 9.283, 9.293, 9.262, 9.105, 8.863, 8.652, 8.571,
                8.615, 8.631, 8.584, 8.542, 8.513, 8.502, 8.532, 8.565, 8.602, 8.638, 8.675, 8.712, 8.748, 8.775, 8.777, 8.778, 8.799,
                8.856, 8.883, 8.911, 8.929, 8.936, 8.968, 9.101, 9.277, 8.935, 8.67, 8.666, 8.661, 8.649, 8.62, 8.586, 8.559, 8.574, 8.589,
                8.603, 8.599, 8.544, 8.506, 8.513, 8.513, 8.514, 8.52, 8.543, 8.553, 8.526, 8.506, 8.507, 8.495, 8.483, 8.471, 8.459, 8.466,
                8.529, 8.568, 8.542, 8.516, 8.501, 8.517, 8.532, 8.542, 8.537, 8.533, 8.517, 8.475, 8.448, 8.433, 8.456, 8.482, 8.518,
                8.538, 8.505, 8.485, 8.54, 8.595, 8.662, 8.764, 8.992, 9.379, 9.059, 8.974, 8.829, 8.784, 8.992, 8.946, 8.927, 8.998, 9.043,
                9.002, 8.992, 9.067, 9.067, 9.068, 9.059, 9.013, 8.973, 8.953, 9, 9.049, 9.11, 9.165, 9.202, 9.235, 9.252, 9.24, 9.227,
                9.217, 9.218, 9.208, 9.174, 9.2, 9.195, 9.103, 9.146, 9.127, 8.892, 8.804, 8.925, 9.018, 8.981, 8.875, 8.78, 8.908, 9.021,
                9.074, 9.112, 9.089, 9.016, 8.836, 9.085, 9.269, 9.231, 9.452, 9.561, 9.234, 9.144, 8.985, 8.931, 9.039, 9.107, 9.051, 9.24,
                9.429, 9.528, 9.288, 9.456, 9.533, 9.18, 8.95, 9.322, 9.551, 9.09, 8.792, 9.136, 8.788, 9.103, 9.352, 9.381, 9.384, 9.102,
                8.58, 8.695, 8.647, 8.599, 8.551, 8.54, 8.602, 8.661, 8.691, 8.72, 8.713, 8.673, 8.664, 8.722, 8.761, 8.78, 8.797, 8.814,
                8.832, 8.837, 8.839, 8.841, 8.882, 8.893, 8.899, 8.94, 8.968, 8.453, 8.404, 8.338, 8.105, 7.925, 8.042, 8.141, 8.167, 8.199,
                8.25, 8.23, 8.095, 8.067, 8.05, 8.063, 8.092, 8.127, 8.169, 8.245, 8.357, 8.403, 8.398, 8.366, 8.315, 8.276, 8.279, 8.299,
                8.403, 8.409, 8.373, 8.338, 8.304, 8.356, 8.422, 8.411, 8.466, 8.526, 8.508, 8.49, 8.54, 8.586, 8.584, 8.575, 8.535, 8.581,
                8.609, 8.571, 8.569, 8.645, 8.664, 8.661, 8.638, 8.659, 8.648, 8.564, 8.58, 8.749, 8.826, 8.91, 9.07, 8.961, 8.668, 8.579,
                8.604, 8.677, 8.769, 8.791, 8.747, 8.69, 8.677, 8.68, 8.72, 8.772, 8.746, 8.736, 8.743, 8.619, 8.443, 8.358, 8.364, 8.387,
                8.407, 8.401, 8.291, 8.227, 8.257, 8.311, 8.328, 8.36, 8.41, 8.489, 8.59, 8.694, 8.727, 8.716, 8.704, 8.693, 8.706, 8.732,
                8.757, 8.744, 8.706, 8.724, 8.786, 8.848, 8.881, 8.891, 8.816, 8.67, 8.705, 8.76, 8.662, 8.6, 8.597, 8.595, 8.593, 8.578,
                8.549, 8.546, 8.571, 8.575, 8.557, 8.539, 8.521, 8.505, 8.491, 8.477, 8.469, 8.47, 8.47, 8.466, 8.469, 8.482, 8.482, 8.463,
                8.453, 8.457, 8.461, 8.464, 8.472, 8.486, 8.499, 8.506, 8.514, 8.521, 8.528, 8.536, 8.55, 8.579, 8.601, 8.61, 8.611, 8.597,
                8.582, 8.566, 8.549, 8.534, 8.518, 8.504, 8.499, 8.473, 8.418, 8.456, 8.494, 8.506, 8.444, 8.409, 8.388, 8.42, 8.45, 8.459,
                8.38, 8.334, 8.422, 8.481, 8.43, 8.462, 8.483, 8.446, 8.419, 8.439, 8.416, 8.459, 8.412, 8.378, 8.418, 8.368, 8.343, 8.489,
                8.513, 8.54, 8.596, 8.64, 8.63, 8.627, 8.692, 8.742, 8.542, 8.51, 8.735, 8.67, 8.616, 8.855, 8.706, 8.76, 8.814, 8.867,
                8.826, 8.784, 8.743, 8.703, 8.676, 8.653, 8.63, 8.607, 8.754, 8.907, 8.945, 8.855, 8.866, 8.885, 8.77, 8.646, 8.615, 8.469,
                8.311, 8.212, 8.216, 8.233, 8.339, 8.456, 8.476, 8.505, 8.537, 8.602, 8.671, 8.643, 8.705, 8.786, 8.831, 8.929, 8.723,
                8.585, 8.633, 8.716, 8.487, 8.352, 8.388, 8.458, 8.45, 8.419, 8.436, 8.469, 8.464, 8.447, 8.44, 8.437, 8.44, 8.445, 8.441,
                8.438, 8.437, 8.45, 8.468, 8.488, 8.523, 8.463, 8.357, 8.392, 8.495, 8.495, 8.442, 8.414, 8.49, 8.682, 8.637, 8.546, 8.553,
                8.579, 8.658, 8.654, 8.575, 8.53, 8.507, 8.492, 8.495, 8.507, 8.519, 8.532, 8.547, 8.563, 8.572, 8.573, 8.573, 8.572, 8.571,
                8.569, 8.565, 8.561, 8.557, 8.554, 8.55, 8.544, 8.537, 8.53, 8.523, 8.516, 8.51, 8.504, 8.498, 8.487, 8.471, 8.455, 8.435,
                8.411, 8.387, 8.305, 8.222, 8.257, 8.247, 8.169, 8.066, 7.925, 7.889, 8.029, 8.122, 8.135, 8.175, 8.265, 8.293, 8.19, 8.058,
                7.949, 7.889, 7.892, 8.032, 8.172, 8.254, 8.199, 8.139, 8.126, 8.268, 8.366, 8.391, 8.536, 8.634, 8.583, 8.515, 8.528,
                8.541, 8.551, 8.553, 8.555, 8.557, 8.559, 8.561, 8.563, 8.565, 8.567, 8.569, 8.571, 8.573, 8.575, 8.577, 8.578, 8.579,
                8.573, 8.521, 8.476, 8.48, 8.484, 8.488, 8.491, 8.485, 8.48, 8.475, 8.469, 8.464, 8.459, 8.453, 8.448, 8.441, 8.433, 8.427,
                8.481, 8.47, 8.458, 8.445, 8.406, 8.369, 8.445, 8.428, 8.411, 8.395, 8.378, 8.368, 8.358, 8.348, 8.338, 8.354, 8.371, 8.346,
                8.32, 8.324, 8.377, 8.434, 8.428, 8.417, 8.406, 8.41, 8.462, 8.518, 8.877, 8.922, 8.925, 8.928, 8.931, 8.928, 8.924, 8.92,
                8.865, 8.8, 8.73, 8.691, 8.521, 8.487, 8.487, 8.488, 8.488, 8.477, 8.463, 8.45, 8.411, 8.405, 8.378, 8.342, 8.306, 8.356,
                8.329, 8.268, 8.294, 8.348, 8.417, 8.491, 8.525, 8.544, 8.562, 8.575, 8.586, 8.588, 8.585, 8.582, 8.552, 8.51, 8.547, 8.564,
                8.551, 8.523, 8.487, 8.47, 8.463, 8.493, 8.485, 8.44, 8.422, 8.419, 8.448, 8.498, 8.547, 8.548, 8.604, 8.655, 8.654, 8.654,
                8.71, 8.81, 8.821, 8.905, 8.929, 8.795, 8.662, 8.594, 8.585, 8.577, 8.564, 8.548, 8.586, 8.634, 8.636, 8.638, 8.64, 8.638,
                8.629, 8.622, 8.618, 8.613, 8.609, 8.606, 8.602, 8.598, 8.594, 8.595, 8.603, 8.605, 8.599, 8.594, 8.623, 8.661, 8.625,
                8.592, 8.565, 8.534, 8.496, 8.455, 8.425, 8.429, 8.433, 8.435, 8.431, 8.427, 8.424, 8.419, 8.412, 8.405, 8.398, 8.391,
                8.385, 8.377, 8.366, 8.355, 8.344, 8.331, 8.313, 8.294, 8.273, 8.221, 8.151, 8.259, 8.367, 8.439, 8.388, 8.376, 8.364,
                8.359, 8.388, 8.412, 8.413, 8.414, 8.405, 8.393, 8.368, 8.345, 8.335, 8.323, 8.316, 8.366, 8.425, 8.562, 8.658, 8.425,
                8.433, 8.441, 8.45, 8.457, 8.456, 8.455, 8.454, 8.452, 8.437, 8.422, 8.407, 8.395, 8.439, 8.437, 8.435, 8.433, 8.431, 8.42,
                8.409, 8.398, 8.382, 8.365, 8.344, 8.321, 8.375, 8.431, 8.428, 8.422, 8.416, 8.41, 8.405, 8.401, 8.389, 8.376, 8.414, 8.457,
                8.467, 8.474, 8.472, 8.469, 8.466, 8.445, 8.42, 8.448, 8.483, 8.519, 8.52, 8.515, 8.487, 8.454, 8.421, 8.39, 8.361, 8.331,
                8.302, 8.343, 8.401, 8.383, 8.401, 8.436, 8.46, 8.481, 8.439, 8.419, 8.446, 8.485, 8.496, 8.496, 8.496, 8.497, 8.497, 8.495,
                8.492, 8.489, 8.486, 8.483, 8.481, 8.478, 8.475, 8.472, 8.468, 8.465, 8.462, 8.459, 8.456, 8.453, 8.449, 8.446, 8.443,
                8.438, 8.431, 8.424, 8.417, 8.4, 8.375, 8.361, 8.354, 8.347, 8.34, 8.37, 8.429, 8.453, 8.449, 8.446, 8.442, 8.438, 8.355,
                8.288, 8.305, 8.4, 8.498, 8.523, 8.538, 8.542, 8.546, 8.55, 8.557, 8.567, 8.577, 8.586, 8.596, 8.575, 8.515, 8.481, 8.479,
                8.441, 8.387, 8.383, 8.379, 8.375, 8.349, 8.318, 8.337, 8.294, 8.179, 8.114, 8.169, 8.344, 8.353, 8.357, 8.351, 8.35, 8.361,
                8.355, 8.318, 8.294, 8.27, 8.269, 8.321, 8.331, 8.239, 8.146, 8.101, 8.182, 8.252, 8.294, 8.336, 8.366, 8.359, 8.352, 8.344,
                8.334, 8.296, 8.192, 8.198, 8.204, 8.21, 8.216, 8.223, 8.229, 8.229, 8.198, 8.173, 8.176, 8.179, 8.182, 8.185, 8.188, 8.191,
                8.194, 8.198, 8.199, 8.2, 8.198, 8.168, 8.111, 7.784, 7.509, 7.808, 8.107, 8.387, 8.393, 8.4, 8.405, 8.392, 8.378, 8.316,
                8.243, 8.176, 8.366, 8.414, 8.414, 8.413, 8.413, 8.386, 8.359, 8.336, 8.315, 8.288, 8.222, 8.156, 8.306, 8.357, 8.4, 8.264,
                8.238, 8.222, 8.206, 8.182, 8.157, 8.113, 8.067, 8.02, 8.157, 8.229, 8.29, 8.283, 8.266, 8.272, 8.291, 8.311, 8.268, 8.348,
                8.278, 8.174, 8.26, 8.385, 8.284, 8.369, 8.511, 8.484, 8.416, 8.411, 8.422, 8.419, 8.413, 8.408, 8.402, 8.469, 8.558, 8.474,
                8.431, 8.424, 8.417, 8.411, 8.405, 8.399, 8.393, 8.398, 8.407, 8.405, 8.398, 8.391, 8.328, 8.238, 8.256, 8.182, 8.171,
                8.233, 8.213, 8.234, 8.304, 8.348, 8.377, 8.382, 8.372, 8.363, 8.353, 8.344, 8.336, 8.328, 8.321, 8.313, 8.306, 8.298,
                8.291, 8.283, 8.276, 8.202, 8.05, 7.876, 7.86, 7.988, 8.115, 8.277, 8.379, 8.387, 8.395, 8.403, 8.406, 8.403, 8.395, 8.382,
                8.369, 8.369, 8.386, 8.402, 8.407, 8.396, 8.385, 8.35, 8.282, 8.292, 8.367, 8.37, 8.373, 8.377, 8.375, 8.366, 8.356, 8.342,
                8.319, 8.303, 8.298, 8.293, 8.287, 8.277, 8.256, 8.235, 8.22, 8.221, 8.222, 8.221, 8.212, 8.202, 8.189, 8.195, 8.245, 8.29,
                8.319, 8.298, 8.257, 8.228, 8.237, 8.26, 8.326, 8.374, 8.357, 8.347, 8.36, 8.363, 8.331, 8.319, 8.38, 8.377, 8.374, 8.374,
                8.384, 8.394, 8.4, 8.386, 8.372, 8.358, 8.345, 8.331, 8.316, 8.29, 8.272, 8.31, 8.342, 8.317, 8.291, 8.262, 8.204, 8.157,
                8.265, 8.271, 8.277, 8.279, 8.211, 8.182, 8.15, 8.04, 7.93, 7.825, 8.039, 7.909, 7.779, 7.898, 8.018, 8.137, 8.191, 8.164,
                8.135, 8.106, 8.079, 8.052, 8.027, 8.002, 8.005, 8.01, 7.948, 7.881, 7.96, 8.05, 8.139, 8.222, 8.305, 8.309, 8.305, 8.298,
                8.291, 8.283, 8.25, 8.171, 8.105, 8.181, 8.239, 8.198, 8.268, 8.316, 8.277, 8.229, 8.152, 8.09, 8.069, 8.092, 8.215, 8.293,
                8.291, 8.289, 8.288, 8.286, 8.233, 8.193, 8.232, 8.242, 8.224, 8.251, 8.261, 8.24, 8.282, 8.358, 8.44, 8.531, 8.655, 8.792,
                8.771, 8.697, 8.752, 8.842, 8.853, 8.848, 8.859, 8.874, 8.876, 8.877, 8.877, 8.878, 8.886, 8.895, 8.904, 8.902, 8.901, 8.9,
                8.899, 8.898, 8.897, 8.897, 8.902, 8.906, 8.911, 8.915, 8.915, 8.916, 8.915, 8.911, 8.906, 8.902, 8.822, 8.642, 8.6, 8.717,
                8.804, 8.861, 8.871, 8.841, 8.869, 8.936, 8.941, 8.909, 8.89, 8.877, 8.865, 8.852, 8.811, 8.76, 8.795, 8.85, 8.863, 8.868,
                8.873, 8.878, 8.877, 8.877, 8.876, 8.874, 8.871, 8.869, 8.866, 8.795, 8.854, 8.912, 8.92, 8.927, 8.934, 8.903, 8.871, 8.794,
                8.717, 8.739, 8.76, 8.782, 8.803, 8.7, 8.761, 8.821, 8.843, 8.865, 8.887, 8.889, 8.892, 9.012, 9.007, 9.001, 8.986, 9.027,
                9.03, 9.033, 9.036, 9.039, 9.042, 9.02, 8.999, 8.97, 8.94, 8.927, 8.914, 8.912, 8.91, 8.908, 8.901, 8.893, 8.886, 8.904,
                8.921, 8.939, 8.96, 8.98, 8.894, 8.767, 8.887, 9.007, 9.013, 9.018, 9.023, 8.727, 8.838, 8.948, 9.059, 9.051, 9.042, 9.033,
                9.025, 9.023, 9.021, 9.019, 9.022, 9.024, 9.027, 9.029, 9.038, 9.047, 9.055, 9.059, 9.063, 9.066, 9.07, 9.066, 9.063, 9.06,
                9.049, 9.037, 9.008, 8.979, 8.981, 8.984, 8.987, 8.989, 8.975, 8.96, 8.946, 8.932, 8.938, 8.945, 8.9, 8.853, 8.719, 8.568,
                8.419, 8.723, 9.069, 9.066, 9.064, 9.061, 9.059, 9.056, 8.997, 9.035, 9.074, 9.032, 8.991, 8.932, 8.821, 8.711, 8.857,
                9.002, 8.967, 8.932, 8.853, 8.929, 8.878, 8.827, 8.893, 8.959, 8.833, 8.913, 8.993, 8.976, 8.959, 8.864, 8.795, 8.724,
                8.502, 8.281, 8.436, 8.588, 8.457, 8.119, 7.782, 7.661, 7.541, 7.506, 7.467, 7.368, 7.267, 6.832],
            [89.015999, 88.656998, 88.391998, 86.741997, 85.092003, 84.596001, 84.098999, 84.575996, 85.052002, 86.406998, 87.762001,
                87.091003, 87.473, 87.024002, 86.574997, 87.086998, 86.810997, 87.037003, 86.533997, 87.064003, 87.595001, 87.57,
                87.396004, 87.222, 87.100998, 87.170998, 86.262001, 86.362999, 86.462997, 86.198997, 86.197998, 86.196999, 86.721001,
                86.324997, 86.372002, 86.908997, 86.226997, 85.544998, 85.149002, 85.584, 86.018997, 85.766998, 86.471001, 86.181999,
                86.134003, 86.502998, 86.191002, 86.475998, 86.762001, 86.629997, 86.497002, 86.759003, 86.864998, 86.583, 86.302002,
                86.109001, 86.956001, 86.68, 86.905998, 86.808998, 86.712997, 87.379997, 87.211998, 87.042999, 87.005997, 86.657997,
                86.310997, 86.476997, 86.643997, 87.214996, 87.058998, 87.320999, 87.583, 87.336998, 87.091003, 87.121002, 87.152,
                87.181999, 86.931, 86.679001, 86.450996, 86.257004, 86.287003, 86.316002, 86.075996, 85.512001, 85.630997, 85.008003,
                85.509003, 85.579002, 85.357002, 85.135002, 85.670998, 85.509003, 85.347, 85.943001, 85.320999, 85.833, 85.497002,
                86.057999, 85.864998, 85.672997, 85.982002, 86.011002, 86.040001, 86.648003, 86.695, 86.741997, 87.146004, 86.942001,
                86.738998, 86.468002, 86.197998, 85.890999, 85.584999, 85.875999, 86.167999, 87.061996, 87.372002, 87.739998, 88.030998,
                88.321999, 88.327003, 88.331001, 88.782997, 88.667999, 88.553001, 88.681999, 88.286003, 88.082001, 87.877998, 87.672997,
                87.622002, 87.363998, 87.105003, 87.236, 87.365997, 87.245003, 87.541, 87.593002, 87.646004, 87.852997, 88.060997,
                87.723999, 87.555, 87.387001, 87.218002, 87.485001, 87.751999, 88.013, 88.275002, 88.177002, 88.210999, 88.245003,
                88.398003, 89.663002, 91.393997, 93.125999, 88.608002, 89.371002, 89.285004, 89.821999, 88.499001, 87.177002, 87.503998,
                87.831001, 88.903999, 89.977997, 89.223999, 89.622002, 90.021004, 90.222, 90.262001, 90.303001, 90.061996, 89.882004,
                89.700996, 89.561996, 89.422997, 89.378998, 89.335999, 89.275002, 89.212997, 89.152, 88.762001, 88.372002, 88.764999,
                89.156998, 89.501999, 89.153999, 89.474998, 89.795998, 90.169998, 90.543999, 89.908997, 89.275002, 88.600998, 87.926003,
                87.251999, 88.205002, 88.633003, 87.927002, 87.221001, 86.120003, 85.019997, 84.524002, 84.027, 83.833, 84.620003,
                84.093002, 85.057999, 84.161003, 84.755997, 85.948997, 85.433998, 86.183998, 86.558998, 86.932999, 87.212997, 87.492996,
                87.788002, 87.625, 87.462997, 88.570999, 89.209, 89.846001, 91.741997, 91.376999, 91.012001, 91.570999, 90.602997,
                88.963997, 87.470001, 86.978996, 88.015999, 89.053001, 87.989998, 88.905998, 88.749001, 89.303001, 89.857002, 88.350998,
                87.632004, 88.18, 88.309998, 88.440002, 87.935997, 88.777, 89.616997, 90.629997, 91.643997, 90.100998, 88.912003,
                87.722, 88.413002, 88.542999, 88.672997, 89.889, 89.098999, 88.411003, 87.723, 88.485001, 89.248001, 89.759003,
                90.271004, 91.892998, 90.195, 89.560997, 88.014, 86.467003, 87.397003, 86.010002, 86.802002, 87.594002, 86.099998,
                87.947998, 87.219002, 86.489998, 87.848, 87.273003, 87.879997, 88.487999, 89.095001, 88.162003, 88.542999, 88.924004,
                89.148003, 89.766998, 89.109001, 88.452003, 86.324997, 85.964996, 85.606003, 87.142998, 88.226997, 90.528999, 91.411003,
                92.292999, 90.996002, 89.699997, 86.869003, 87.571999, 88.274002, 88.976997, 87.973, 87.612999, 87.803001, 86.189003,
                87.721001, 89.253998, 88.977997, 89.525002, 91.205002, 91.724998, 92.245003, 92.764999, 91.785004, 88.191002, 83.517998,
                78.845001, 71.003998, 66.001999, 64.844002, 63.685001, 64.525002, 65.364998, 68.442001, 70.708, 72.974998, 80.669998,
                84.683998, 88.697998, 88.896004, 89.094002, 89.292, 89.661003, 90.029999, 87.582001, 77.268997, 67.195999, 57.945999,
                51.727001, 53.807999, 55.889, 61.055, 61.692001, 62.328999, 61.551998, 60.125, 58.698002, 57.360001, 56.785999,
                55.006001, 56.532001, 55.259998, 53.987, 53.257999, 53.352001, 53.446999, 53.050999, 52.584, 52.396, 52.208, 52.02,
                52.227001, 52.435001, 52.553001, 52.671001, 52.789001, 52.870998, 52.952999, 53.053001, 53.153, 53.099998, 53.046001,
                52.993, 52.700001, 52.405998, 52.007, 51.608002, 51.209, 51.356998, 51.505001, 51.813999, 52.814999, 53.816002,
                54.818001, 56.236, 57.654999, 56.782001, 55.91, 55.096001, 55.362999, 55.631001, 55.848, 56.066002, 56.284, 56.414001,
                56.543999, 56.185001, 54.846001, 53.507999, 52.169998, 51.834, 50.412998, 48.991001, 52.140999, 52.673, 53.205002,
                53.736, 54.122002, 54.507999, 56.702999, 58.897999, 64.776001, 70.653, 77.568001, 84.484001, 86.595001, 87.023003,
                86.497002, 85.970001, 85.706001, 85.216003, 84.725998, 83.959999, 82.873001, 77.775002, 72.677002, 84.026001, 83.848999,
                83.672997, 83.497002, 83.397003, 83.297997, 83.197998, 83.098999, 83.289001, 83.477997, 83.68, 83.880997, 84.070999,
                84.260002, 83.613998, 83.249001, 82.883003, 83.281998, 83.681, 84.001999, 84.322998, 84.25, 84.057999, 83.100998,
                83.767998, 83.218002, 82.667999, 81.139, 79.610001, 78.462997, 79.416, 80.370003, 82.742996, 82.593002, 82.443001,
                82.292999, 82.141998, 82.749001, 82.819, 82.889999, 82.721001, 82.911003, 83.100998, 83.261002, 83.420998, 83.306,
                83.191002, 83.536003, 83.880997, 84.487999, 85.096001, 85.703003, 85.010002, 84.317001, 80.304001, 72.172997, 78.021004,
                75.716003, 74.831001, 73.374001, 71.917, 70.535004, 69.152, 67.769997, 69.028, 70.287003, 69.377998, 74.795998, 73.708,
                71.749001, 69.790001, 69.436996, 69.084, 69.679001, 70.614998, 71.551003, 72.886002, 73.809998, 74.734001, 75.657997,
                76.582001, 76.539001, 76.496002, 77.519997, 78.795998, 80.072998, 78.639, 74.746002, 70.852997, 66.959999, 64.32,
                65.757004, 67.194, 67.001999, 66.809998, 69.137001, 71.463997, 73.718002, 72.574997, 71.431, 70.288002, 69.940002,
                67.169998, 64.399002, 67.029999, 69.661003, 70.012001, 70.362999, 70.134003, 69.463997, 68.280998, 67.098, 66.022003,
                65.746002, 66.227997, 66.709999, 66.554001, 66.397003, 66.611, 67.086998, 67.564003, 66.774002, 66.390999, 66.008003,
                64.405998, 64.714996, 65.025002, 66.712997, 68.401001, 69.073997, 69.747002, 68.885002, 68.023003, 67.162003, 66.300003,
                64.997002, 63.695, 64.027, 64.773003, 65.517998, 67.355003, 67.987, 68.619003, 69.417, 71.157997, 71.449997, 71.741997,
                71.370003, 70.498001, 69.625, 70.112999, 71.413002, 72.415001, 73.416, 73.086998, 72.758003, 72.208, 70.963997,
                71.178001, 71.392998, 72.274002, 70.797997, 69.322998, 72.628998, 73.249001, 73.869003, 74.596001, 75.321999, 74.987,
                74.652, 74.292, 74.893997, 75.496002, 75.996002, 76.497002, 77.616997, 78.064003, 78.511002, 79.453003, 80.214996,
                80.727997, 81.240997, 80.796997, 81.750999, 80.663002, 80.990997, 81.318001, 80.755997, 81.220001, 79.630997, 78.978996,
                78.327003, 78.690002, 79.053001, 78.049004, 77.264, 76.478996, 75.694, 77.184998, 78.677002, 80.751999, 81.072998,
                80.427002, 79.625999, 78.824997, 79.32, 79.815002, 81.836998, 83.859001, 82.962997, 82.067001, 76.012001, 73.861,
                71.710999, 73.375999, 75.040001, 74.059998, 72.148003, 70.524002, 68.899002, 67.917999, 67.654999, 67.390999, 53.312,
                62.236, 71.160004, 68.531998, 65.904999, 74.045998, 75.655998, 77.266998, 76.214996, 75.163002, 82.779999, 83.936996,
                83.559998, 83.182999, 80.638, 72.517998, 79.717003, 70.832001, 82.376999, 81.252998, 74.959999, 64.983002, 55.007,
                81.153, 83.658997, 83.102997, 82.546997, 83.237999, 82.497002, 81.754997, 83.210999, 83.675003, 83.68, 83.684998,
                80.877998, 74.547997, 71.167999, 67.788002, 66.891998, 65.995003, 67.086998, 68.178001, 68.415001, 67.136002, 66.310997,
                65.486, 66.538002, 67.591003, 68.643997, 69.695999, 69.002998, 67.234001, 68.176003, 69.119003, 69.470001, 69.820999,
                69.330002, 70.116997, 70.903999, 72.777, 72.508003, 72.237999, 71.807999, 72.160004, 72.511002, 71.054001, 69.597,
                68.730003, 67.863998, 69.863998, 71.862999, 83.122002, 77.193001, 71.264, 70.917, 70.181999, 69.447998, 70.112,
                70.776001, 71.440002, 70.728996, 70.017998, 71.146004, 72.274002, 75.162003, 74.848, 74.532997, 74.218002, 73.704002,
                73.190002, 73.619003, 74.047997, 75.194, 76.339996, 75.861, 75.694, 75.526001, 76.612, 77.650002, 78.688004, 78.348,
                78.007004, 76.435997, 74.864998, 75.186996, 76.195999, 77.204002, 76.786003, 76.641998, 76.498001, 77.810997, 79.124001,
                75.487, 71.850998, 80.232002, 80.495003, 80.757004, 77.425003, 71.639, 65.852997, 74.139, 75.921997, 77.705002, 79.487,
                79.069, 79.589996, 80.110001, 80.630997, 79.018997, 66.527, 70.707001, 74.886002, 66.896004, 64.518997, 63.193001,
                65.258003, 58.426998, 51.597, 60.903999, 70.211998, 69.960999, 70.414001, 69.064003, 66.644997, 64.225998, 62.959999,
                61.694, 63.699001, 66.278, 68.857002, 69.973, 71.088997, 69.625, 68.162003, 65.737, 65.772003, 65.807999, 68.696999,
                69.526001, 70.356003, 69.513, 68.670998, 69.213997, 69.757004, 73.661003, 76.013, 78.364998, 80.036003, 81.707001,
                82.817001, 82.966003, 83.114998, 82.587997, 81.823997, 81.058998, 80.639999, 79.995003, 79.528999, 79.241997, 78.955002,
                79.825996, 81.114998, 81.292999, 81.973, 81.871002, 81.769997, 82.389999, 83.010002, 82.615997, 81.838997, 81.582001,
                81.323997, 81.323997, 80.583, 80.891998, 80.724998, 81.254997, 81.786003, 81.555, 81.323997, 81.092003, 80.208,
                79.216003, 78.223999, 78.996002, 79.767998, 80.540001, 81.028999, 81.517998, 81.625, 81.732002, 82.668999, 83.606003,
                83.293999, 84.124001, 84.953003, 84.378998, 85.209, 86.038002, 85.714996, 85.392998, 85.846001, 84.872002, 83.898003,
                84.296997, 84.696999, 86.123001, 87.550003, 87.120003, 87.643997, 87.035004, 86.425003, 86.514, 86.602997, 86.727997,
                86.852997, 86.684998, 86.516998, 86.241997, 85.967003, 86.647003, 86.121002, 86.455002, 86.789001, 86.297997, 86.608002,
                86.917999, 87.042999, 87.167999, 87.477997, 86.952003, 87.286003, 85.959999, 86.568001, 87.177002, 85.827003, 86.339996,
                84.775002, 83.209, 82.719002, 82.228996, 83.193001, 84.155998, 85.120003, 71.995003, 87.652, 87.007004, 86.362,
                84.002998, 81.644997, 81.633003, 81.621002, 83.447998, 85.276001, 84.642998, 85.197998, 85.753998, 84.858002, 84.403999,
                76.963997, 81.049004, 85.133003, 85.407997, 84.954002, 84.5, 84.023003, 83.544998, 84.338997, 85.133003, 86.601997,
                88.070999, 87.785004, 87.498001, 86.304001, 86.214996, 86.125, 87.397003, 88.668999, 89.413002, 90.157997, 90.902,
                90.192001, 89.481003, 88.282997, 87.084999, 85.887001, 85.021004, 84.155998, 85.410004, 86.664001, 86.209999, 86.502998,
                86.794998, 87.403999, 88.013, 87.667, 87.320999, 86.974998, 87.584, 88.193001, 89.327003, 92.002998, 94.678001,
                97.233002, 96.862999, 96.492996, 95.084, 93.675003, 92.152, 90.629997, 100.198997, 104.044998, 99.801003, 94.314003,
                88.827003, 85.424004, 82.019997, 83.053001, 84.085999, 85.459999, 86.833, 85.734001, 86.469002, 87.203003, 86.880997,
                86.558998, 85.986, 85.412003, 85.633003, 85.853996, 87.322998, 87.873001, 86.995003, 86.117996, 85.055, 83.991997,
                82.929001, 84.870003, 86.810997, 84.333, 81.855003, 66.796997, 62.085999, 57.375, 59.131001, 60.886002, 73.460999,
                75.873001, 78.285004, 80.470001, 81.186996, 81.903999, 82.620003, 83.313004, 84.004997, 84.697998, 85.361, 86.024002,
                86.848, 87.671997, 87.911003, 87.044998, 86.179001, 84.781998, 83.385002, 74.453003, 78.221001, 81.987999, 81.803001,
                81.617996, 81.199997, 80.782997, 80.686996, 80.472, 79.899002, 79.325996, 74.980003, 69.653999, 59.551998, 49.450001,
                70.000999, 72.843002, 75.684998, 77.767998, 79.851997, 82.497002, 85.141998, 92.545998, 99.948997, 93.453003, 86.958,
                82.139, 77.320999, 79.077003, 79.399002, 79.722, 78.886002, 78.050003, 76.844002, 75.638, 74.431999, 73.225998, 73.388,
                73.549004, 73.788002, 74.027, 74.265999, 74.982002, 75.698997, 77.393997, 77.926003, 78.457001, 81.383003, 82.922997,
                84.463997, 84.5, 85.126999, 85.753998, 84.082001, 84.797997, 84.136002, 83.473, 83.992996, 84.512001, 85.205002,
                85.088997, 84.973999, 84.859001, 85.181, 84.453003, 84.190002, 83.928001, 83.749001, 84.632004, 85.038002, 85.617996,
                86.196999, 84.549004, 86.233002, 85.833, 85.432999, 85.857002, 86.280998, 85.887001, 86.926003, 86.980003, 87.033997,
                87.224998, 87.249001, 86.569, 86.281998, 85.542, 84.802002, 84.539001, 82.807999, 83.822998, 84.837997, 85.852997,
                84.970001, 85.758003, 85.447998, 86.439003, 87.43, 87.400002, 87.371002, 86.708, 86.045998, 86.834, 87.622002,
                88.410004, 88.875999, 89.473, 90.07, 89.246002, 88.422997, 88.817001, 87.670998, 88.016998, 88.363998, 90.023003,
                88.459, 89.473999, 89.552002, 89.629997, 89.450996, 88.681, 87.911003, 88.364998, 89.630997, 90.896004, 89.637001,
                88.376999, 89.129997, 79.203003, 69.275002, 88.210999, 87.267998, 86.324997, 82.850998, 80.922997, 78.995003, 73.890999,
                68.787003, 65.791, 69.301003, 72.810997, 76.692001, 80.571999, 82.554001, 82.308998, 82.065002, 82.028999, 82.757004,
                83.486, 84.704002, 84.589996, 84.476997, 85.635002, 86.209, 86.859001, 87.510002, 87.582001, 88.454002, 88.656998,
                88.860001, 87.917, 84.037003, 75.643997, 70.010002, 64.375, 66.246002, 68.115997, 69.987, 72.554001, 73.448997,
                74.345001, 73.026001, 71.707001, 68.351997, 67.553001, 66.752998, 67.487, 68.222, 68.710999, 68.079002, 69.908997,
                71.739998, 73.570999, 74.644997, 74.413002, 74.18, 74.764999, 77.093002, 78.310997, 79.528999, 74.586998, 78.681999,
                77.924004, 77.166, 76.795998, 77.404999, 78.240997, 79.075996, 79.954002, 80.831001, 81.571999, 82.311996, 83.148003,
                83.984001, 84.384003, 84.783997, 84.623001, 84.461998, 84.565002, 84.668999, 84.772003, 85.716003, 86.103996, 86.491997,
                86.202003, 85.911003, 85.621002, 84.403, 84.481003, 84.558998, 83.771004, 84.285004, 83.688004, 84.117996, 83.563004,
                83.008003, 83.127998, 83.247002, 84.309998, 85.372002, 85.647003, 86.684998, 87.097, 87.509003, 88.536003, 89.563004,
                88.935997, 88.309998, 84.299004, 78.801003, 73.302002, 67.804001, 63.243999, 62.803001, 62.361, 59.365002, 58.094002,
                56.823002, 57.665001, 58.507, 58.776001, 59.043999, 61.932999, 66.594002, 71.254997, 76.872002, 82.487999, 85.806,
                87.012001, 86.778999, 86.545998, 87.066002, 87.584999, 87.405998, 88.612, 88.894997, 89.177002, 89.459999, 88.641998,
                87.824997, 88.839996, 87.718002, 88.367996, 89.018997, 87.616997, 86.213997, 84.512001, 82.808998, 81.106003, 80.556999,
                80.874001, 81.190002, 79.780998, 77.412003, 75.042999, 72.041, 69.039001, 68.514, 69.369003, 70.224998, 71.080002,
                73.318001, 75.556, 76.732002, 77.907997, 78.373001, 78.044998, 77.717003, 77.355003, 76.992996, 76.630997, 76.834,
                77.037003, 77.013, 76.988998, 76.893997, 76.797997, 76.703003, 77.097, 77.490997, 78.147003, 78.299004, 78.452003,
                78.603996, 78.755997, 78.377998, 78, 77.622002, 77.777, 77.932999, 77.681999, 77.890999, 78.099998, 78.200996,
                78.303001, 78.136002, 77.969002, 77.801003, 77.969002, 78.136002, 78.303001, 78.578003, 78.851997, 79.126999, 79.490997,
                79.855003, 79.753998, 79.652, 79.396004, 79.139, 79.741997, 80.345001, 80.818001, 81.292, 81.765999, 82.087997,
                82.410004, 82.547997, 82.684998, 82.362999, 82.041, 83.031998, 83.927002, 84.822998, 85.718002, 85.569, 85.419998,
                83.689003, 81.957001, 82.906998, 83.856003, 89.825996, 92.202003, 94.578003, 91.711998, 88.847, 87.839996, 86.833,
                85.825996, 86.140999, 86.455002, 86.769997, 85.862999, 84.955002, 84.339996, 83.724998, 83.188004, 84.727997, 86.268997,
                88.089996, 89.911003, 90.167999, 90.424004, 89.003998, 88.789001, 85.325996, 81.862999, 69.970001, 65.397003, 60.823002,
                60.432999, 60.042999, 59.653, 64.370003, 70.112999, 75.857002, 79.527, 83.196999, 86.866997, 88.067001, 89.267998,
                90.008003, 88.741997, 87.476997, 64.083, 84.396004, 78.573997, 72.752998, 65.343002, 57.932999, 49.776001, 49.084,
                49.215, 49.346001, 48.868, 49.388, 49.907001, 50.630001, 51.352001, 51.907001, 52.463001, 58.063, 89.592003, 56.917,
                63.479, 70.042, 78.438004, 86.833, 82.231003, 77.628998, 73.028, 70.403999, 67.780998, 65.156998, 67.891998, 76.318001,
                84.744003, 91.419998, 93.707001, 95.995003, 94.919998, 93.845001, 91.289001, 80.719002, 86.445999, 92.172997, 91.575996,
                91.290001, 91.002998, 90.334, 89.820999, 89.306999, 88.793999, 88.978996, 89.164001, 90.071999, 90.644997, 91.219002,
                90.18, 88.508003, 86.835999, 85.163002, 83.490997, 83.269997, 83.049004, 83.611, 83.001999, 82.285004, 81.568001,
                81.959, 82.348999, 82.738998, 84.184998, 84.016998, 85.169998, 86.321999, 85.592003, 84.862999, 80.609001, 70.667,
                67.286003, 63.903999, 64.954002, 66.003998, 67.054001, 66.586998, 66.120003, 67.837997, 68.169998, 68.867996, 69.565002,
                68.441002, 67.316002, 66.730003, 66.143997, 65.360001, 64.577003, 64.277, 62.686001, 61.096001, 60.903, 59.653, 58.403,
                60.804001, 67.008003, 73.211998, 83.338997, 89.704002, 90.097, 89.648003, 89.198997, 89.495003, 89.195999, 88.896004,
                88.584, 88.540001, 88.497002, 88.980003, 89.461998, 89.341003, 89.220001, 89.098999, 88.977997, 89.421997, 89.864998,
                90.308998, 90.752998, 90.547997, 90.344002, 90.139, 90.515999, 90.891998, 91.268997, 90.611, 89.954002, 82.580002,
                73.225998, 63.872002, 60.127998, 56.383999, 52.639999, 53.172001, 53.703999, 54.236, 57.661999, 58.265999, 58.870998,
                59.474998, 58.875999, 58.277, 58.334999, 57.926998, 58.056999, 58.188, 58.318001, 59.855, 60.470001, 61.084, 61.285999,
                59.768002, 58.249001, 56.730999, 55.926998, 56.290001, 56.653, 56.293999, 55.935001, 54.859001, 57.688, 60.516998,
                65.246002, 70.441002, 75.637001, 87.519997, 95.436996, 96.356003, 97.274002, 97.094002, 96.913002, 94.277, 91.640999,
                94.203003, 96.764, 95.360001, 93.955002, 87.017998, 80.082001, 78.916, 77.750999, 79.683998, 81.617996, 78.809998,
                76.001999, 66.383003, 60.111, 61.764999, 63.417999, 64.681999, 65.755997, 66.831001, 75.654999, 82.599998, 89.545998,
                97.617996, 99.898003, 99.794998, 99.693001, 98.556, 97.497002, 96.439003, 96.274002, 96.109001, 95.944, 96.302002,
                95.398003, 94.495003, 89.446999, 84.398003, 82.677002, 80.956001, 81.689003, 82.422997, 80.950996, 73.973, 67.152,
                64.952003, 67.299004, 69.644997, 77.049004, 84.453003, 91.106003, 94.901001, 95.264, 95.626999, 97.086998, 98.547997,
                100.008003, 97.574997, 95.141998, 92.793999, 90.445, 89.441002, 87.899002, 87.467003, 87.036003, 87.392998, 87.75,
                87.773003, 88.283997, 88.504997, 88.725998, 88.947998, 88.695999, 88.444, 88.443001, 88.442001, 88.403999, 88.510002,
                88.615997, 88.560997, 88.505997, 88.397003, 88.289001, 88.434998, 88.582001, 88.933998, 89.285004, 90.251999, 91.218002,
                91.82, 92.421997, 91.285004, 88.696999, 86.109001, 83.815002, 81.519997, 79.225998, 78.617996, 78.613998, 78.610001,
                76.859001, 75.108002, 80.753998, 81.626999, 82.5, 83.373001, 84.345001, 85.317001, 86.125999, 86.934998, 85.546997,
                84.757004, 83.967003, 82.616997, 74.274002, 65.931, 73.884003, 81.837997, 81.219002, 80.600998, 79.983002, 79.760002,
                79.538002, 79.822998, 80.109001, 80.572998, 81.036003, 80.509003, 80.458, 80.291, 80.124001, 78.328003, 76.532997,
                80.487, 80.683998, 80.879997, 82.514999, 84.150002, 85.785004, 83.195, 80.606003, 78.016998, 80.690002, 83.362999,
                86.037003, 87.141998, 88.248001, 86.140999, 82.352997, 78.566002, 77.185997, 79.092003, 80.999001, 82.905998, 79.811996,
                77.688004, 75.563004, 73.439003, 78.335999, 76.376999, 77.744003, 79.111, 80.477997, 81.845001, 81.800003, 81.755997,
                80.917999, 79.723, 78.375999, 77.029999, 77.058998, 77.088997, 77.119003, 73.528, 64.387001, 81.599998, 83.992996,
                86.386002, 88.092003, 88.811996, 89.530998, 89.988998, 90.445999, 90.903999, 92.684998, 93.901001, 93.110001, 92.319,
                91.527, 86.675003, 80.109001, 75.764999, 71.420998, 69.996002, 71.985001, 73.973, 75.960999, 77.949997, 78.436996,
                78.924004, 79.411003, 80.485001, 81.557999, 82.630997, 84.186996, 85.742996, 87.297997, 87.902, 88.504997, 89.108002,
                89.732002, 90.355003, 90.977997, 93.351997, 94.699997, 96.046997, 97.393997, 98.741997, 100.088997, 100.878998,
                101.668999, 101.413002, 101.156998, 99.874001, 95.541, 93.088997, 90.637001, 86.492996, 82.348999, 69.870003, 62.978001,
                62.596001, 62.213001, 62.710999, 64.075996, 65.441002, 66.806, 70.345001, 73.884003, 77.422997, 81.897003, 83.277,
                84.656998, 82.646004, 75.694, 72.878998, 70.063004, 73.000999, 75.939003, 78.876999, 72.280998, 82.337997, 92.394997,
                91.281998, 90.992996, 90.704002, 90.93, 91.155998, 92.825996, 94.873001, 96.920998, 97.627998, 98.335999, 99.042999,
                97.172997, 93.032997, 82.676003, 75.478996, 72.989998, 70.500999, 74.028999, 77.556999, 78.677002, 76.985001, 75.293999,
                72.389, 69.484001, 70.163002, 70.842003, 75.360001, 79.878998, 82.928001, 82.616997, 82.305, 71.384003, 63.401001,
                64.490997, 59.452999, 54.416, 66.776001, 68.805, 70.834999, 62.080002, 64.264999, 66.449997, 74.306999, 82.165001,
                84.959, 85.555, 86.151001, 85.241997, 84.333, 70.941002, 64.855003, 58.768002, 56.02, 55.923, 55.827, 54.941002,
                54.594002, 54.247002, 57.016998, 59.786999, 65.674004, 71.561996, 74.177002, 76.792, 75.285004, 73.778999, 72.273003,
                70.308998, 68.345001, 66.380997, 70.262001, 74.141998, 76.799004, 79.455002, 78.936996, 78.417999, 77.899002, 76.369003,
                74.838997, 73.308998, 74.066002, 74.823997, 76.411003, 77.998001, 79.150002, 80.302002, 82.761002, 85.220001, 86.448997,
                87.678001, 86.266998, 84.211998, 82.156998, 80.913002, 83.749001, 86.584, 88.275002, 89.966003, 91.656998, 86.865997,
                81.234001, 75.601997, 70.012001, 64.420998, 63.404999, 64.016998, 64.628998, 65.240997, 65.317001, 65.393997, 63.875999,
                62.806, 61.736, 60.146, 64.665001, 69.184998, 77.088997, 84.994003, 89.860001, 94.724998, 98.723999, 97.779999,
                96.834999, 93.078003, 89.321999, 87.971001, 91.742996, 95.515999, 99.289001, 84.634003, 81.301003, 75.824997, 70.348,
                68.652, 78.823997, 83.337997, 87.850998, 90.667999, 88.999001, 87.330002, 85.661003, 86.172997, 86.685997, 85.710999,
                84.736, 84.968002, 85.199997, 86.267998, 87.334999, 87.142998, 86.950996, 86.806999, 86.662003, 86.517998, 86.516998,
                86.031998, 85.546997, 86.023003, 85.982002, 85.941002, 85.901001, 85.583, 85.264999, 85.150002, 85.036003, 85.058998,
                85.082001, 85.355003, 85.628998, 84.766998, 84.292999, 83.818001, 83.343002, 77.848999, 81.400002, 84.950996, 84.777,
                84.602997, 84.429001, 84.254997, 84.594002, 84.931999, 84.309998, 83.689003, 82.487, 81.286003, 81.362999, 81.439003,
                80.346001, 79.251999, 79.944, 80.635002, 83.144997, 85.655998, 88.166, 87.263, 86.360001, 85.625, 84.889999, 84.251999,
                83.613998, 82.975998, 80.890999, 78.806, 77.809998, 76.815002, 75.819, 76.080002, 76.569, 77.056999, 75.324997,
                73.732002, 72.139, 70.545998, 71.367996, 72.190002, 72.505997, 72.820999, 73.536003, 74.250999, 74.587997, 74.926003,
                75.263, 75.679001, 75.619003, 75.557999, 75.498001, 75.877998, 75.933998, 75.990997, 76.046997, 76.102997, 76.160004,
                77.004997, 77.600998, 78.196999, 78.792999, 80.774002, 82.754997, 83.528999, 81.403, 79.277, 83.192001, 87.108002,
                91.023003, 95.565002, 100.107002, 100.860001, 101.612, 105.080002, 108.547997, 104.167, 99.787003, 93.238998, 86.691002,
                84.077003, 84.512001, 84.947998, 84.446999, 83.945999, 83.444, 82.732002, 82.019997, 81.307999, 80.257004, 79.207001,
                76.610001, 74.014, 69.996002, 65.978996, 61.43, 62.868999, 64.307999, 65.978996, 66.887001, 67.793999, 71.304001,
                71.889999, 72.474998, 72.820999, 73.167, 72.230003, 71.292999, 70.516998, 69.740997, 68.904999, 67.920998, 66.935997,
                66.242996, 66.763, 67.281998, 65.589996, 63.896999, 62.205002, 60.513, 64.117996, 67.723999, 62.901001, 64.262001,
                65.623001, 65.928001, 66.232002, 66.685997, 67.139999, 65.658997, 64.639, 63.618, 64.036003, 63.636002, 63.236,
                63.499001, 63.761002, 64.024002, 65.086998, 65.111, 65.135002, 64.782997, 64.43, 65.128998, 65.828003, 66.568001,
                65.893997, 65.219002, 64.025002, 62.831001, 63.73, 64.627998, 65.527, 66.425003, 65.124001, 63.821999, 62.951,
                65.087997, 67.225998, 68.867996, 70.510002, 69.070999, 67.632004, 66.061996, 64.491997, 65.643997, 66.796997, 69.245003,
                71.693001, 69.508003, 67.321999, 65.137001, 67.914001, 70.690002, 63.477001, 62.737, 63.318001, 63.900002, 64.481003,
                64.098999, 64.074997, 63.877998, 63.681, 62.666, 61.651001, 60.57, 59.490002, 60.223999, 60.959, 61.215, 61.472,
                62.148998, 62.826, 63.502998, 64.863998, 64.733002, 64.601997, 64.470001, 67.921997, 75.595001, 83.267998, 90.924004,
                86.182999, 81.441002, 74.197998, 66.955002, 62.523998, 58.094002, 43.474998, 55.860001, 53.327999, 53.860001, 54.390999,
                54.355999, 54.32, 54.284, 53.821999, 53.361, 52.898998, 54.422001, 55.944, 60.183998, 64.424004, 68.778, 73.130997,
                77.485001, 81.837997, 81.043999, 80.25, 79.407997, 78.566002, 77.886002, 76.225998, 75.133003, 74.040001, 73.473,
                72.905998, 72.523003, 72.140999, 71.25, 70.358002, 69.466003, 73.598999, 76.896004, 80.192001, 84.958, 88.099998,
                88.445999, 88.792999, 89.151001, 88.829002, 88.507004, 88.608002, 88.709999, 88.68, 88.650002, 88.017998, 87.592003,
                87.166, 86.739998, 86.906998, 86.172997, 85.438004, 83.879997, 82.320999, 80.445999, 79.610001, 78.774002, 76.313004,
                73.852997, 72.873001, 71.893997, 71.416, 71.374001, 71.333, 71.010002, 70.688004, 70.091003, 69.492996, 68.287003,
                67.081001, 67.373001, 67.666, 68.287003, 68.907997, 69.242996, 68.204002, 65.317001, 62.43, 59.542999, 58.216999,
                61.200001, 64.182999, 67.165001, 73.055, 83.723, 85.718002, 87.712997, 88.990997, 88.513, 88.036003, 89.504997, 98.68,
                96.254997, 93.830002, 84.810997, 76.460999, 79.584999, 82.709, 82.403999, 82.099998, 82.278999, 82.458, 82.810997,
                83.164001, 78.820999, 74.478996, 78.439003, 82.399002, 79.018997, 64.227997, 74.258003, 84.288002, 83.953003, 85.028999,
                83.726997, 82.329002, 80.931, 80.835999, 80.739998, 82.150002, 82.509003, 82.866997, 81.911003, 71.445999, 82.234001,
                78.943001, 75.652, 74.587997, 73.525002, 74.390999, 75.258003, 77.301003, 79.344002, 82.963997, 83.693001, 84.421997,
                82.115997, 69.661003, 57.205002, 73.310997, 72.778999, 72.248001, 73.143997, 73.657997, 73.478996],
            [132.179001, 135.354004, 138.278, 137.011993, 134.904007, 130.740997, 128.375, 125.490997, 126.494003, 128.289001, 127.763,
                129.242996, 131.188995, 130.373993, 131.934006, 127.078003, 125.568001, 125.714996, 126.010002, 128.826004, 132.091995,
                134.923004, 134.912994, 135.910995, 136.113998, 136.138, 138.192001, 140.225006, 140.110001, 139.653, 138.139008,
                136.451004, 134.397995, 133.481003, 134.468002, 135.723007, 135.026001, 134.031006, 134.311005, 132.636993, 131.223999,
                133.960007, 137.285995, 139.639999, 140.798004, 138.548004, 138.369003, 137.171005, 135.783997, 136.882004, 136.910995,
                136.753998, 138.112, 139.667999, 139.035995, 142.283005, 141.845001, 140.878998, 137.983994, 136.087997, 134.339996,
                136.188004, 134.375, 134.106995, 134.072006, 134.007996, 133.938995, 132.979996, 131.923004, 134.466995, 135.828003,
                137.022995, 135.416, 133.518005, 130.115005, 128.781006, 127.665001, 130.404007, 130.587006, 130.492004, 135.309006,
                134.865005, 133.899002, 134.888, 136.050995, 132.873993, 134.358994, 133.337006, 132.070999, 133.940002, 136.063995,
                136.824005, 137.477997, 137.462997, 137.397003, 134.143005, 132.501007, 131.216995, 131.238998, 131.352005, 130.621002,
                129.835007, 131.134003, 132.567993, 134.447998, 132.826004, 130.988007, 133.319, 135.895996, 138.130005, 140.341995,
                138.617004, 138.901001, 137.151993, 135.292999, 133.917007, 134.602997, 135.386993, 137.802994, 135.949997, 133.906006,
                137.688004, 135.867004, 135.612, 135.427994, 133.643997, 131.800003, 133.817001, 135.966995, 138.029007, 140.087006,
                135.136993, 133.169006, 130.188995, 127.179001, 128.151993, 129.227005, 130.302002, 129.664001, 136.360992, 139.009995,
                141.576004, 140.110992, 138.574997, 137.688004, 136.813004, 134.860001, 132.893997, 134.119003, 135.378998, 132.679001,
                132.901993, 133.147995, 133.485992, 135.139008, 134.608002, 134.070999, 135.912003, 134.190994, 132.477997, 134.371994,
                132.511002, 130.673996, 132.518005, 134.378006, 138.496002, 139.139999, 139.804001, 142.048996, 136.675995, 134.102997,
                136.335007, 136.003006, 137.740005, 136.987, 136.313004, 139.539001, 139.854004, 141.882996, 142.653, 143.300995,
                139.444, 138.399002, 137.354996, 136.362, 137.085007, 137.737, 136.242004, 134.744995, 133.227005, 131.082001,
                129.242004, 131.485001, 133.643005, 133.720001, 133.882004, 135.916, 135.233994, 133.098999, 131.167999, 133.472,
                135.891998, 140.184998, 136.056, 134.643005, 133.380997, 134.658997, 132.451004, 129.776993, 127.188004, 126.168999,
                128.074005, 129.811996, 129.048004, 130.263, 131.332001, 130.345001, 130.600006, 130.306, 132.593002, 132.085999,
                131.675995, 132.671005, 134.744995, 133.039993, 131.537003, 132.565994, 133.468994, 133.016998, 134.891006, 136.292999,
                132.171997, 128.464996, 129.238998, 128.716003, 128.600998, 132.617004, 133.921997, 135.001999, 133.727005, 132.429001,
                130.987, 130.173004, 129.595993, 130.985001, 129.352997, 128.927002, 126.519997, 124.112999, 122.155998, 123.899002,
                123.265999, 128.662994, 134.059998, 138.248001, 132.718994, 131.843002, 131.276993, 133.242996, 135.285004, 136.981995,
                132.171005, 134.921005, 137.878006, 141.240997, 136.199997, 135.785995, 135.067001, 132.733994, 134.296005, 132.052002,
                132.867004, 133.332993, 131.367004, 128.835999, 123.496002, 125.524002, 127.022003, 125.851997, 129.718002, 130.026001,
                132.860001, 131.395004, 129.931, 128.391006, 126.741997, 126.796997, 124.738998, 126.039001, 127.339996, 129.065002,
                133.457001, 137.718994, 136.296005, 136.403, 135.718994, 131.235992, 130.296005, 127.884003, 125.730003, 125.622002,
                128.257996, 127.857002, 130.882996, 133.858002, 136.177994, 136.501007, 136.511002, 135.539001, 137.429001, 137.630005,
                138.026993, 139.397995, 140.341003, 139.654007, 141.233994, 141.285004, 132.436005, 116.098999, 100.175003, 86.272003,
                73.820999, 68.049004, 63.664001, 67.129997, 78.077003, 89.900002, 96.441002, 103.066002, 110.080002, 117.092003,
                122.730003, 122.603996, 122.068001, 118.517998, 119.019997, 116.857002, 102.443001, 82.891998, 60.636002, 32.737,
                28.702, 34.516998, 42.875, 58.834999, 65.166, 69.642998, 67.299004, 65.526001, 61.403, 57.057999, 53.287998, 54.779999,
                53.897999, 45.037998, 39.335999, 35.209, 32.241001, 31.186001, 31.778, 31.650999, 29.525, 29.277, 29.58, 31.329, 31.931,
                33.818001, 34.444, 33.333, 32.668999, 31.718, 31.167999, 31.360001, 32.612999, 34.048, 35.66, 35.949001, 36.014999,
                35.376999, 34.990002, 35.513, 36.025002, 35.388, 35.183998, 37.719002, 43.997002, 48.373001, 52.026001, 53.973,
                50.914001, 48.737999, 48.487, 46.868, 42.912998, 43.743999, 44.224998, 43.701, 44.063999, 45.412998, 42.491001,
                39.450001, 36.075001, 32.380001, 28.540001, 27.094999, 26.969, 27.302, 27.055, 27.948, 28.243, 28.327, 32.014, 36.639,
                44.023998, 52.215, 69.656998, 101.258003, 108.700996, 114.691002, 116.933998, 118.969002, 122.223999, 125.674004,
                122.086998, 118.824997, 117.338997, 118.261002, 118.642998, 118.134003, 118.186996, 117.249001, 115.278999, 111.628998,
                111.315002, 114.638, 116.463997, 115.553001, 116.296997, 116.571999, 118.190002, 123.43, 124.532997, 124.674004,
                123.306, 123.327003, 122.847, 121.498001, 121.120003, 121.771004, 121.752998, 120.300003, 120.038002, 121.132004,
                119.741997, 118.912003, 118.042, 114.636002, 110.728996, 109.129997, 113.342003, 115.378998, 116.362, 114.051003,
                110.214996, 109.806999, 113.444, 114.808998, 115.502998, 113.758003, 113.403999, 115.700996, 117.417999, 118.811996,
                115.752998, 115.453003, 115.153999, 116.977997, 118.837997, 119.992996, 121.456001, 121.232002, 120.556, 120.794998,
                119.634003, 119.874001, 116.427002, 111.452003, 106.311996, 106.018997, 105.212997, 102.532997, 99.856003, 94.750999,
                95.136002, 102.612999, 109.410004, 114.563004, 114.392998, 108.072998, 100.065002, 88.946999, 83.546997, 91.835999,
                100.133003, 106.725998, 107.57, 110.928001, 114.686996, 120.563004, 121.163002, 122.122002, 123.022003, 120.904999,
                124.528999, 123.749001, 122.806, 125.264999, 108.093002, 95.161003, 83.391998, 71.634003, 74.394997, 81.333, 82.098999,
                88.494003, 98.510002, 107.776001, 116.595001, 118.157997, 114.433998, 109.193001, 105.054001, 103.440002, 100.984001,
                97.925003, 96.463997, 97.078003, 99.419998, 100.146004, 93.852997, 87.851997, 80.82, 68.809998, 66.919998, 76.768997,
                85.530998, 85.612, 85.750999, 86.724998, 83.323997, 83.490997, 80.639, 76.264, 72.776001, 67.235001, 58.659, 60.248001,
                63.923, 66.459, 68.671997, 72.350998, 76.580002, 72.518997, 58.652, 54.222, 57.667, 61.042999, 64.370003, 67.661003,
                70.912003, 74.148003, 74.950996, 74.643997, 77.734001, 81.144997, 84.046997, 84.477997, 85.844002, 89.045998, 89.303001,
                91.463997, 101.655998, 106.207001, 110.217003, 109.053001, 110.318001, 102.160004, 98.140999, 94.121002, 98.425003,
                103.125999, 100.853996, 103.002998, 103.939003, 105.255997, 106.739998, 109.977997, 110.792999, 110.529999, 110.266998,
                112.342003, 115.668999, 118.801003, 121.807999, 125.494003, 126.444, 125.461998, 125.797997, 126.200996, 128.018005,
                131.707001, 134.141006, 134.921997, 134.264999, 131.350998, 131.723007, 132.095001, 132.466995, 132.406006, 129.996994,
                128.070999, 130.460999, 132.602005, 129.612, 126.619003, 121.424004, 116.542999, 121.583, 127.308998, 132.774994,
                139.847, 137.113007, 135.800003, 135.384003, 132.619003, 131.634995, 131.686005, 131.927994, 134.302002, 132.653,
                127.611, 119.786003, 109.671997, 99.567001, 98.139999, 104.716003, 108.892998, 109.021004, 102.722, 96.473, 90.228996,
                86.738998, 89.892998, 90.763, 91.138, 94.611, 98.582001, 104.530998, 102.166, 108.150002, 114.353996, 128.195999,
                127.999001, 127.813004, 132.720001, 137.257996, 137.166, 135.449005, 134.248993, 134.804993, 133.576004, 133.755005,
                135.119003, 136.947998, 136.845993, 139.763, 142.794006, 144.220001, 143.837997, 145.223999, 144.858002, 142.330002,
                140.516006, 140.720993, 141.645996, 139.518997, 138.175995, 137.266998, 134.276001, 129.445999, 103.467003, 76.182999,
                72.833, 70.231003, 71.837997, 73.778, 76, 70.384003, 64.796997, 59.275002, 58.431999, 66.310997, 71.497002, 76.518997,
                77.568001, 74.101997, 71.172997, 70.741997, 71.917, 70.658997, 67.941002, 73.838997, 79.774002, 84.306999, 91.369003,
                90.278999, 93.440002, 97.538002, 92.182999, 86.167999, 80.705002, 75.905998, 79.628998, 82.893997, 83.378998, 84.262001,
                86.652, 88.094002, 87.066002, 84.981003, 83.978996, 87.824997, 92.625, 94.450996, 91.888, 95.150002, 103.109001,
                112.066002, 114.793999, 113.944, 113.293999, 113.614998, 111.950996, 109.697998, 111.046997, 112.968002, 114.888,
                114.875999, 113.901001, 113.396004, 118.981003, 121.791, 117.361, 113.030998, 109.098, 108.017998, 114.414001,
                121.330002, 124.958, 121.616997, 120.852997, 123.446999, 126.236, 126.839996, 125.628998, 125.116997, 124.314003,
                122.713997, 122.178001, 119.967003, 115.422997, 111.141998, 111.378998, 115.452003, 119.709999, 122.566002, 123.998001,
                124.928001, 126.583, 130.078995, 125.389, 112.472, 102.003998, 93.819, 85.630997, 77.443001, 69.255997, 68.265999,
                73.364998, 76.420998, 75.913002, 74.547997, 74.480003, 73.768997, 73.589996, 74.538002, 72.082001, 66.279999, 60.792,
                58.383999, 61.018002, 65.931999, 72.905998, 80.402, 86.334, 84.587997, 77.670998, 73.595001, 69.654999, 71.021004,
                77.850998, 85.240997, 93.209999, 92.025002, 84.752998, 81.146004, 86.513, 99.417, 110.240997, 120.597, 130.451996,
                135.953003, 136.753998, 135.867004, 134.417999, 133.401001, 131.352005, 129.016006, 127.789001, 129.044998, 129.069,
                129.401001, 130.748001, 129.716003, 128.207001, 126.155998, 126.206001, 128.289001, 129.959, 130.25, 128.949005,
                129.382996, 131.772003, 133.257004, 133.759003, 134.520996, 134.981003, 135.492004, 135.535995, 133.936005, 133.835999,
                135.535995, 135.455994, 134.363007, 134.653, 132.860992, 129.871994, 128.544006, 130.352997, 134.697006, 136.100006,
                136.654999, 136.891006, 135.561005, 134.787003, 134.716995, 135.727005, 138.770996, 140.044006, 137.966003, 136.028,
                134.977005, 134.309006, 132.949005, 132.716003, 133.962006, 134.876007, 135.348007, 134.970001, 133.585007, 132.218002,
                130.647995, 129.690002, 130.470993, 132.445007, 134.356003, 134.671997, 134.487, 136.636993, 138.960007, 141.201004,
                142.016006, 141.214996, 139.537994, 137.130005, 134.246994, 129.998993, 126.174004, 125.004997, 124.753998, 124.085999,
                123.231003, 122.564003, 121.975998, 122.388, 121.364998, 120.124001, 121.702003, 121.514999, 118.689003, 115.811996,
                113.675003, 115.542, 121.619003, 128.345993, 134.067993, 136.727997, 136.207001, 130.770004, 126.349998, 122.908997,
                122.148003, 127.085999, 132.591003, 137.156006, 138.796997, 141.117004, 143.098007, 143.222, 143.016006, 141.899994,
                142.013, 141.121994, 139.779999, 140.399994, 140.432007, 139.490997, 137.912003, 135.266006, 132.080994, 129.593994,
                129.003006, 127.587997, 126.957001, 125.017998, 123.101997, 124.112, 124.617996, 125.403999, 126.859001, 125.952003,
                125.389999, 125.457001, 124.560997, 121.885002, 121.299004, 124.466003, 127.634003, 131.281006, 135.796997, 141.401993,
                144.457993, 139.136002, 135.619003, 135.427994, 135.007996, 134.158997, 134.182007, 134.455994, 134.235992, 137.464005,
                139.554993, 141.029999, 143.813004, 150.865005, 153.699997, 151.345993, 151.380997, 152.438995, 153.477005, 151.367996,
                143.059998, 136.154999, 131.891006, 126.849998, 123.151001, 123.612, 120.526001, 117.439003, 117.646004, 123.699997,
                127.797997, 130.042999, 128.416, 126.788002, 126.121002, 127.487999, 127.457001, 126.872002, 130.598999, 131.735992,
                131.335999, 129.792999, 126.601997, 125.242996, 123.781998, 124.440002, 129.929993, 132.440994, 130.125, 128.755005,
                128.162003, 121.338997, 107.332001, 93.415001, 79.693001, 72.728996, 81.350998, 94.504997, 112.635002, 116.382004,
                117.125, 119.186996, 123.681999, 125.538002, 125.355003, 125.765999, 124.778, 122.307999, 124.547997, 126.880997,
                127.945, 125.295998, 122.650002, 123.714996, 131.505005, 132.845993, 135.141998, 139.695999, 141.705002, 139.063004,
                137.214996, 134.147003, 135.705002, 135.878006, 135.026993, 132.117004, 129.893005, 124.968002, 120.005997, 115.657997,
                115.144997, 119.931999, 125.247002, 129.076996, 125.139, 121.954002, 117.611, 111.061996, 107.367996, 108.389999,
                120.570999, 126.527, 133.634995, 142.160004, 145.389008, 147.335007, 143.964996, 140.537994, 136.932007, 133.248993,
                130.914001, 133.272003, 134.681, 134.848999, 139.227005, 141.464996, 142.770004, 141.199997, 140.462006, 142.309006,
                143.113998, 141.753998, 143.906006, 146.029007, 146.337006, 141.852997, 139.994995, 139.539001, 139.046005, 137.731995,
                135.162003, 136.020996, 137.410995, 140.149002, 141.190994, 141.334, 141.005997, 139.384995, 138.960999, 138.983994,
                139.317993, 140.139999, 139.302994, 139.985001, 140.639008, 141.199005, 140.837006, 137.806, 136.712006, 134.108994,
                132.044998, 134.552002, 136.959, 138.988998, 139.393005, 134.996002, 135.565994, 136.136002, 136.535004, 136.757996,
                138.817001, 139.535004, 135.112, 131.074997, 127.722, 126.337997, 124.834, 123.723999, 125.988998, 127.537003, 128.5,
                127.661003, 129.360001, 130.324997, 128.876007, 130.218994, 131.255997, 131.218994, 131.802002, 131.227997, 131.518997,
                132.076004, 130.509003, 129.014008, 125.469002, 122.795998, 123.976997, 125.438004, 129.503006, 133.451996, 136.858994,
                139.621994, 139.709, 140.867996, 139.628998, 138.281998, 135.330002, 128.175003, 125.921997, 124.351997, 124.736,
                119.186996, 118.596001, 119.976997, 127.833, 132.770004, 134.391998, 130.233002, 126.166, 121.194, 115.598999, 109.417,
                97.738998, 88.393997, 91.213997, 101.014999, 111.900002, 118.584, 120.003998, 119.998001, 118.68, 117.276001,
                116.191002, 120.480003, 126.454002, 130.153, 127.935997, 124.362999, 120.625999, 122.813004, 127.195, 127.314003,
                130.201996, 132.016998, 133.606995, 126.851997, 110.055, 68.791, 54.382999, 39.317001, 23.382, 21.93, 23.444, 27.884001,
                32.384998, 36.890999, 43.943001, 50.125999, 45.105, 39.827999, 42.557999, 53.491001, 67.282997, 80.793999, 87.085999,
                96.740997, 104.448997, 108.806999, 108.237, 104.786003, 104.764999, 106.613998, 108.577003, 111.466003, 113.377998,
                114.938004, 114.932999, 114.614998, 116.906998, 117.634003, 115.529999, 117.612, 119.847, 119.080002, 118.310997,
                117.817001, 120.205002, 121.946999, 121.049004, 126.370003, 126.026001, 126.477997, 129.384003, 131.464996, 131.128006,
                130.744995, 134.791, 138.746002, 142.548004, 143.128006, 140.009003, 138.695999, 138.779007, 137.145996, 135.787994,
                135.751007, 134.514008, 132.535004, 134.296997, 137.742996, 139.078003, 136.052002, 133.246002, 131.867004, 130.817993,
                131.699005, 133.238007, 130.695007, 130.302994, 131.248993, 128.720993, 125.386002, 125.149002, 114.991997, 97.944,
                86.927002, 79.021004, 76.490997, 72.210999, 63.050999, 51.536999, 39.556, 38.144001, 42.335999, 49.918999, 59.833,
                69.679001, 80.439003, 91.876999, 103.357002, 114.871002, 120.866997, 123.242996, 121.443001, 119.413002, 117.865997,
                118.091003, 120.318001, 121.070999, 122.107002, 124.242996, 124.313004, 127.012001, 131.800995, 131.679993, 131.276001,
                133.444, 134.261993, 134.014008, 130.278, 122.966003, 116.578003, 111.115997, 110.704002, 114.403999, 116.755997,
                115.279999, 109.459, 96.318001, 79.202003, 73.356003, 74.365997, 76.832001, 81.181999, 86.388, 90.961998, 93.044998,
                94.542999, 96.973, 101.634003, 103.661003, 102.565002, 101.468002, 99.839996, 97.772003, 97.5, 97.027, 94.269997,
                93.877998, 94.561996, 96.171997, 96.641998, 98.039001, 96.931999, 95.676003, 94.092003, 93.319, 93.598, 92.045998,
                90.440002, 89.738998, 90.861, 91.231003, 94.392998, 95.939003, 97.010002, 96.839996, 97.220001, 98.053001, 98.211998,
                96.959, 98.165001, 98.400002, 97.258003, 96.538002, 96.421997, 98.158997, 97.767998, 98.103996, 100.355003, 97.707001,
                98.761002, 99.176003, 99.366997, 98.379997, 98.014, 100.672997, 100.014, 99.559998, 100.250999, 99.592003, 99.249001,
                101.023003, 100.334, 99.855003, 101.249001, 102.348, 103.945999, 110.843002, 114.741997, 118.338997, 117.935997,
                121.555, 125.929001, 131.085007, 152.263, 163.011002, 154.313004, 149.595001, 135.149002, 126.656998, 118.185997,
                114.07, 109.950996, 113.609001, 117.949997, 116.188004, 114.890999, 113.607002, 112.232002, 116.253998, 120.484001,
                127.771004, 130.615997, 133.207001, 138.382996, 140.695007, 142.774994, 146.610001, 143.598007, 139.927994, 113.814003,
                85.280998, 54.783001, 40.992001, 42.747002, 46.287998, 57.639999, 78.002998, 99.609001, 109.411003, 112.357002,
                115.391998, 116.207001, 117.031998, 117.952003, 118.847, 117.934998, 118.455002, 113.982002, 105.049004, 94.651001,
                84.065002, 75.288002, 64.564003, 53.157001, 48.713001, 49.700001, 51.722, 50.431999, 48.043999, 51.389, 54.601002,
                52.998001, 52.053001, 51.931999, 55.162998, 60.444, 66.009003, 73.219002, 100.402, 119.394997, 130.675995, 126.251999,
                115.914001, 106.689003, 99.988998, 90.656998, 71.931999, 79.422997, 99.525002, 111.751999, 120.806, 126.448997, 127.709,
                127.526001, 127.523003, 126.227997, 123.989998, 126.042, 128.912994, 130.220001, 129.363998, 126.888, 125.732002,
                125.608002, 122.602997, 123.366997, 127.377998, 129.787994, 129.723999, 129.261993, 130.449997, 125.665001, 118.792999,
                113.723, 111.635002, 114.339996, 116.455002, 117.940002, 115.922997, 112.392998, 113.112999, 115.639, 117.844002,
                119.655998, 122.667, 123.682999, 123.639, 128.195007, 131.783005, 134.737, 131.319, 117.538002, 104.204002, 89.172997,
                75.861, 69.361, 60.991001, 53.999001, 55.173, 56.744999, 58.924, 63.896999, 70.250999, 78.450996, 84.950996, 86.136002,
                75.907997, 66.278999, 63.477001, 59.167, 52.382, 48.641998, 47.216, 47.652, 50.094002, 55.514999, 68.662003, 81.055,
                94.487, 112.865997, 126.470001, 125.459, 124.724998, 124.894997, 123.892998, 120.399002, 122.518997, 125.037003,
                127.639999, 125.379997, 126.533997, 127.175003, 126.167, 127.892998, 128.539993, 125.602997, 130.406998, 130.406998,
                130.785995, 133.212006, 134.848999, 135.401001, 129.164993, 126.089996, 126.429001, 124.692001, 122.822998, 119.251999,
                108.282997, 75.348999, 62.055, 46.893002, 43.494999, 40.432999, 42.108002, 43.091, 44.191002, 47.366001, 48.441002,
                49.266998, 43.095001, 42.036999, 43.935001, 45.848999, 49.282001, 49.612999, 49.945, 52.672001, 54.931, 54.674999,
                54.380001, 55.174, 52.09, 48.876999, 44.68, 41.187, 41.741001, 42.519001, 43.624001, 42.669998, 41.561001, 46.348,
                51.655998, 58.789001, 67.623001, 76.611, 101.602997, 116.732002, 120.348, 122.611, 121.704002, 121.774002, 122.069,
                119.879997, 120.290001, 118.431999, 116.997002, 115.744003, 111.487999, 101.364998, 97.086998, 94.374001, 96.195,
                97.438004, 92.874001, 86.911003, 77.983002, 74.704002, 75.195, 75.901001, 76.5, 75.469002, 80.942001, 93.261002,
                105.653, 114.350998, 121.915001, 125.114998, 123.670998, 122.360001, 122.851997, 122.151001, 120.720001, 121.675003,
                119.943001, 119.640999, 117.139999, 116.239998, 109.098999, 103.072998, 99.710999, 97.712997, 97.414001, 98.719002,
                101.119003, 98.396004, 92.433998, 83.222, 73.879997, 78.723, 95.385002, 114.254997, 127.082001, 130.279007, 129.625,
                131.860992, 131.509995, 130.160004, 130.841995, 131.494003, 128.940002, 122.767998, 118.337997, 115.371002, 111.740997,
                108.722, 106.279999, 104.983002, 103.639, 102.996002, 103.222, 103.352997, 104.515999, 105.466003, 106.848999, 108.986,
                111.211998, 113.537003, 111.866997, 108.783997, 110.18, 111.316002, 112.110001, 112.903, 112.986, 112.065002,
                112.112999, 113.598999, 114.151001, 113.255997, 113.759003, 116.533997, 117.087997, 114.528, 113.124001, 113.263,
                116.213997, 114.320999, 105.361, 100.685997, 94.748001, 88.181, 87.211998, 89.442001, 92.373001, 96.107002, 97.940002,
                99.605003, 101.844002, 104.355003, 103.816002, 103.898003, 105.445999, 104.656998, 100.160004, 99.443001, 99.648003,
                99.330002, 97.819, 97.287003, 94.098, 90.924004, 88.108002, 86.869003, 87.581001, 88.499001, 89.959, 90.014999,
                89.571999, 86.790001, 85.052002, 88.143997, 90.964996, 92.734001, 96.619003, 97.001999, 97.225998, 96.389, 96.028999,
                99.152, 102.498001, 108.094002, 115.768997, 109.765999, 103.769997, 98.719002, 104.251999, 109.697998, 113.700996,
                114.739998, 117.858002, 117.413002, 118.274002, 108.295998, 101.152, 104.503998, 107.859001, 110.844002, 92.362,
                83.932999, 75.507004, 78.956001, 82.408997, 85.093002, 87.773003, 91.204002, 91.350998, 91.407997, 91.692001, 92.783997,
                88.753998, 86.262001, 84.858002, 83.514999, 82.196999, 83.223999, 84.442001, 82.907997, 86.692001, 91.040001, 97.519997,
                99.971001, 101.904999, 108.008003, 111.706001, 112.334, 119.886002, 124.686996, 126.921997, 125.035004, 123.521004,
                117.117996, 113.146004, 109.719002, 106.259003, 97.486, 87.517998, 77.539001, 80.227997, 86.095001, 90.099998, 90.93,
                91.015999, 92.734001, 91.644997, 89.556, 93.219002, 98.738998, 104.253998, 104.718002, 107.558998, 109.429001,
                110.766998, 112.637001, 112.323997, 114.002998, 116.901001, 119.796997, 123.408997, 127.335999, 131.145996, 133.850006,
                136.050003, 135.442993, 136.039993, 138.003998, 134.414001, 130.931, 128.897003, 124.806999, 122.153999, 115.064003,
                104.339996, 89.570999, 78.116997, 70.512001, 66.166, 64.047997, 62.951, 64.736, 68.100998, 72.657997, 82.026001, 94.431,
                106.848, 111.447998, 109.508003, 106.599998, 105.610001, 102.052002, 93.888, 87.301003, 91.362999, 100.612, 106.120003,
                110.551003, 113.852997, 117.600998, 117.750999, 113.364998, 112.083, 114.541, 117.158997, 120.625999, 124.404999,
                127.231003, 129.917999, 130.507996, 128.507004, 124.304001, 114.725998, 101.914001, 89.089996, 84.847, 91.300003,
                93.621002, 95.899002, 95.165001, 88.616997, 82.879997, 81.179001, 79.985001, 82.377998, 89.828003, 97.331001,
                104.960999, 113.519997, 114.827003, 96.147003, 81.296997, 75.885002, 72.040001, 72.122002, 75.144997, 61.620998, 49.555,
                42.544998, 49.231998, 59.243999, 80.658997, 100.024002, 113.007004, 120.869003, 113.977997, 113.795998, 111.691002,
                101.247002, 85.439003, 67.892998, 48.625, 50.865002, 53.108002, 53.723, 49.240002, 56.223, 65.642998, 74.897003, 83.333,
                93.236, 111.671997, 127.018997, 122.694, 118.511002, 115.349998, 111.516998, 102.544998, 94.473, 94.724998, 99.521004,
                104.204002, 107.749001, 110.859001, 109.125999, 111.914001, 112.070999, 112.903999, 113.832001, 116.244003, 110.425003,
                108.377998, 109.399002, 110.916, 112.391998, 111.556999, 121.073997, 128.218994, 129.647995, 131.076004, 133.447006,
                123.329002, 116.330002, 108.714996, 115.767998, 123.303001, 130.931, 139.348999, 145.759003, 152.044006, 147.479996,
                134.927002, 121.829002, 108.719002, 78.500999, 68.514999, 67.246002, 66.676003, 72.245003, 76.528999, 80.549004,
                76.397003, 70.931999, 65.438004, 59.948002, 71.149002, 78.220001, 84.028999, 115.940002, 135.322006, 151.171997,
                164.003998, 176.194, 188.371994, 171.632996, 156.289001, 150.412994, 146.024994, 141.520004, 135.179001, 131.677002,
                129.716003, 127.924004, 118.553001, 89.872002, 92.779999, 108.427002, 119.511002, 128.927002, 127.886002, 122.843002,
                118.538002, 117.448997, 117.566002, 117.182999, 112.628998, 106.706001, 107.947998, 112.478996, 112.918999, 111.333,
                109.649002, 109.316002, 110.289001, 111.569, 110.435997, 109.43, 108.205002, 106.322998, 105.722, 105.927002,
                107.481003, 108.297997, 108.026001, 109.906998, 113.129997, 114.438004, 114.876999, 113.387001, 111.514, 110.705002,
                109.094002, 106.820999, 104.551003, 104.089996, 105.217003, 105.121002, 103.903999, 102.685997, 104.253998, 106.382004,
                106.348, 107.175003, 107.240997, 105.538002, 103.308998, 100.528, 97.777, 97.003998, 98.582001, 97.166, 95.182999,
                97.594002, 100.438004, 103.179001, 107.696999, 110.303001, 106.720001, 104.875, 105.616997, 106.417, 105.601997,
                103.336998, 103.125999, 101.731003, 97.780998, 94.809998, 95.283997, 95.029999, 95.172997, 99.028, 99.459999, 92.380997,
                87.168999, 82.691002, 78.874001, 78.602997, 83.046997, 84.832001, 81.830002, 82.779999, 83.422997, 83.269997, 83.594002,
                85.231003, 87.056999, 89.441002, 90.808998, 89.042999, 87.899002, 88.792, 90.387001, 93.011002, 90.500999, 89.399002,
                93.978996, 99.449997, 103.862, 109.737999, 120.734001, 125.503998, 128.070007, 121.339996, 122.283997, 120.996002,
                122.100998, 137.339005, 153.403, 164.134003, 173.817993, 176.139008, 177.106995, 168.539001, 167.972, 165.929993, 166,
                160.923996, 161.574005, 161.832001, 157.294006, 152.279007, 150.824997, 149.192001, 144.796005, 145.393005, 142.563995,
                144.781998, 129.813995, 114.629997, 88.844002, 57.120998, 43.648998, 30.191, 28.033001, 28.011999, 28.684999, 29.365,
                30.363001, 29.392, 27.157, 27.924, 28.809999, 27.856001, 26.806999, 29.01, 31.417999, 33.299, 33.705002, 33.994999,
                36.756001, 39.755001, 42.75, 46.716999, 50.780998, 57.008999, 52.974998, 48.544998, 51.535999, 54.585999, 58.296001,
                54.030998, 52.063, 50.723999, 53.695999, 56.325001, 57.758999, 57.198002, 49.459, 45.326, 48.469002, 51.358002,
                53.617001, 55.999001, 58.365002, 59.589001, 60.381001, 61.750999, 62.743, 62.263, 63.651001, 67.891998, 70.549004,
                69.012001, 63.894001, 61.027, 59.793999, 65.293999, 70.533997, 73.342003, 71.197998, 66.764999, 62.327, 67.892998,
                73.017998, 76.960999, 81.763, 80.514999, 77.968002, 76.803001, 75.848, 91.967003, 98.205002, 103.582001, 95.684998,
                72.559998, 49.743, 39.605, 39.193001, 35.685001, 34.945999, 34.785999, 38.019001, 39.784, 40.696999, 41.165001,
                40.422001, 40.666, 40.376999, 39.824001, 38.868999, 38.133999, 38.464001, 39.924999, 41.535, 42.893002, 42.827,
                41.778999, 43.09, 46.627998, 48.334999, 56.134998, 73.944, 94.638, 119.210999, 146.205002, 149.054993, 135.882996,
                121.153999, 106.425003, 91.709, 91.719002, 87.690002, 81.132004, 74.485001, 63.695, 62.112, 62.164001, 60.676998,
                59.021, 60.294998, 56.223, 52.007999, 67.414001, 73.128998, 78.857002, 87.503998, 96.150002, 104.611, 113.071999,
                121.512001, 124.719002, 123.483002, 115.526001, 113.364998, 111.670998, 108.219002, 104.775002, 103.122002, 96.123001,
                93.750999, 91.369003, 86.279999, 84.406998, 80.876999, 80.108002, 84.862999, 89.635002, 98.945999, 102.892998,
                106.829002, 107.974998, 114.408997, 114.641998, 114.876999, 115.870003, 113.438004, 111.039001, 116.822998, 119.981003,
                120.262001, 117.610001, 113.168999, 110.049004, 106.945999, 108.252998, 109.552002, 108.677002, 107.802002, 107.126999,
                106.098999, 104.657997, 103.989998, 103.297997, 96.375999, 98.014, 99.637001, 97.293999, 94.962997, 96.061996,
                97.139999, 92.786003, 96.461998, 93.824997, 93.041, 92.252998, 90.752998, 90.736, 89.079002, 87.436996, 89.384003,
                87.341003, 85.297997, 83.247002, 79.077003, 74.841003, 54.165001, 61.939999, 69.730003, 81.486, 93.235001, 103.343002,
                113.426003, 116.744003, 113.212997, 113.137001, 112.023003, 110.901001, 107.842003, 106.333, 103.926003, 101.893997,
                103.492996, 103.005997, 103.028999, 103.037003, 99.566002, 98.250999, 100.560997, 99.610001, 101.864998, 102.725998,
                103.584, 103.463997, 106.792999, 106.875999, 106.947998, 104.128998, 103.171997, 104.810997, 106.431999, 103.017998,
                102.223, 100.778999, 99.360001, 104.072998, 108.064003, 109.944, 111.814003, 110.924004, 99.608002, 75.085999,
                74.904999],
            [3.833, 3.886, 3.94, 4.035, 4.084, 4.133, 4.179, 4.21, 4.11, 4.095, 4.08, 4.076, 4.073, 4.002, 3.933, 3.861, 3.791, 3.756,
                3.812, 3.847, 3.883, 3.883, 3.883, 3.868, 3.895, 3.921, 3.947, 3.987, 4.028, 4.065, 4.08, 4.125, 4.171, 4.183, 4.194,
                4.241, 4.28, 4.311, 4.343, 4.457, 4.498, 4.539, 4.548, 4.552, 4.556, 4.548, 4.481, 4.408, 4.375, 4.343, 4.311, 4.272,
                4.233, 4.217, 4.202, 4.187, 4.214, 4.241, 4.249, 4.256, 4.249, 4.28, 4.311, 4.327, 4.315, 4.304, 4.264, 4.264, 4.264,
                4.233, 4.187, 4.16, 4.133, 4.118, 4.103, 4.084, 4.065, 4.058, 4.05, 4.043, 4.047, 4.05, 4.118, 4.16, 4.202, 4.245,
                4.288, 4.375, 4.416, 4.457, 4.489, 4.506, 4.523, 4.539, 4.556, 4.573, 4.569, 4.564, 4.548, 4.531, 4.514, 4.498, 4.481,
                4.416, 4.375, 4.335, 4.319, 4.304, 4.272, 4.272, 4.268, 4.264, 4.256, 4.284, 4.311, 4.327, 4.323, 4.319, 4.28, 4.225,
                4.175, 4.125, 4.02, 3.987, 3.954, 3.94, 3.893, 3.847, 3.875, 3.875, 3.875, 3.889, 3.904, 3.918, 3.951, 3.983, 4.024,
                4.065, 4.133, 4.14, 4.148, 4.159, 4.171, 4.155, 4.14, 4.163, 4.14, 4.121, 4.102, 4.08, 4.054, 4.028, 3.991, 3.98, 3.969,
                3.98, 3.991, 4.005, 4.02, 4.07, 4.12, 4.171, 4.335, 4.464, 4.497, 4.431, 4.339, 4.248, 4.129, 4.013, 3.853, 3.762,
                3.674, 3.567, 3.574, 3.58, 3.638, 3.696, 3.755, 3.839, 3.925, 4.012, 4.117, 4.224, 4.303, 4.382, 4.427, 4.472, 4.431,
                4.303, 4.178, 4.053, 3.932, 3.864, 3.797, 3.707, 3.673, 3.64, 3.606, 3.66, 3.714, 3.825, 3.939, 4.057, 4.251, 4.455,
                4.567, 4.682, 4.822, 4.966, 5.161, 5.228, 5.237, 5.247, 5.189, 5.132, 5.067, 5.002, 4.92, 4.888, 4.857, 4.742, 4.622,
                4.463, 4.326, 4.193, 4.143, 4.094, 3.953, 3.867, 3.839, 3.776, 3.734, 3.697, 3.66, 3.734, 3.811, 3.881, 3.917, 3.953,
                3.924, 3.957, 3.99, 4.067, 4.147, 4.177, 4.208, 4.216, 4.223, 4.231, 4.216, 4.239, 4.258, 4.278, 4.223, 4.101, 4.041,
                3.982, 3.935, 3.888, 3.796, 3.707, 3.649, 3.593, 3.508, 3.495, 3.482, 3.412, 3.44, 3.467, 3.495, 3.556, 3.619, 3.755,
                3.782, 3.81, 3.895, 3.899, 3.902, 3.982, 4.019, 3.997, 3.993, 3.989, 4.026, 4.086, 4.146, 4.215, 4.239, 4.262, 4.27,
                4.278, 4.274, 4.27, 4.274, 4.278, 4.274, 4.27, 4.341, 4.377, 4.413, 4.462, 4.487, 4.429, 4.373, 4.27, 4.176, 4.055,
                3.985, 3.916, 3.782, 3.666, 3.553, 3.277, 3.223, 3.194, 3.203, 3.211, 3.521, 4.184, 4.759, 5.412, 6.303, 7.342, 8.937,
                10.524, 11.751, 10.949, 10.201, 9.028, 7.99, 6.948, 6.043, 5.574, 5.141, 4.596, 4.349, 4.294, 4.635, 5.004, 5.402,
                6.785, 8.521, 10.259, 13.943, 18.1, 19.372999, 20.736, 21.871, 20.547001, 20.099001, 21.792, 23.627001, 27.444, 31.878,
                36.555, 41.917999, 47.497002, 52.212002, 57.394001, 63.324001, 69.865997, 78.441002, 93.574997, 96.723, 92.382004,
                91.790001, 91.203003, 93.581001, 96.019997, 99.616997, 102.212997, 104.877998, 110.823997, 120.821999, 131.722,
                140.087006, 148.983002, 159.173996, 171.317001, 186.772003, 201.389999, 179.378006, 158.018997, 139.203003, 110.433998,
                97.283997, 83.831001, 71.709999, 62.938999, 59.563999, 56.369999, 49.112999, 46.952, 44.884998, 43.424999, 42.013,
                41.324001, 40.646999, 41.438999, 42.247002, 51.049999, 61.688999, 79.641998, 86.587997, 94.139999, 123.792999,
                131.292999, 119.657997, 109.054001, 96.069, 79.211998, 68.007004, 41.179001, 15.21, 11.803, 9.159, 6.702, 5.435, 4.917,
                4.449, 3.855, 3.805, 3.871, 3.938, 4.006, 4.183, 4.368, 4.494, 4.624, 4.675, 4.724, 4.774, 4.824, 4.855, 4.886, 4.881,
                4.875, 4.87, 4.865, 4.859, 4.842, 4.824, 4.789, 4.754, 4.722, 4.69, 4.658, 4.636, 4.613, 4.591, 4.593, 4.596, 4.599,
                4.725, 4.854, 4.987, 5.25, 5.352, 5.457, 5.548, 5.522, 5.497, 5.284, 5.079, 5.001, 4.923, 4.856, 4.789, 4.772, 4.754,
                4.735, 4.715, 4.696, 4.676, 4.676, 4.676, 4.587, 4.499, 4.491, 4.483, 4.57, 4.659, 4.855, 5.058, 5.27, 5.972, 6.767,
                7.432, 8.162, 9.031, 9.352, 9.684, 9.791, 9.9, 9.955, 10.01, 10.065, 10.066, 10.066, 10.084, 10.103, 10.177, 10.347,
                10.253, 10.159, 10.066, 9.727, 9.399, 9.082, 8.73, 8.392, 8.224, 8.06, 7.987, 7.915, 8.342, 8.791, 9.342, 9.927, 10.766,
                11.18, 11.61, 12.498, 13.04, 12.084, 11.198, 10.894, 10.599, 10.312, 10.135, 9.96, 10.259, 10.567, 10.933, 11.313,
                11.524, 11.738, 11.849, 12.317, 12.803, 13.655, 14.565, 15.463, 16.417, 17.065001, 17.738001, 18.438, 19.556999, 19.382,
                19.599001, 19.819, 20.299999, 20.792999, 21.298, 22.261999, 22.679001, 22.806999, 22.936001, 23.107, 23.280001, 23.649,
                24.024, 24.653999, 25.183001, 25.724001, 26.205, 25.922001, 25.639999, 25.176001, 22.221001, 20.839001, 19.542, 17.455,
                15.591, 13.761, 13.036, 12.349, 11.817, 10.861, 10.714, 10.568, 10.405, 10.245, 10.143, 10.042, 9.897, 9.753, 9.594,
                9.438, 9.387, 9.354, 9.287, 9.002, 8.726, 8.397, 8.328, 8.261, 8.164, 8.068, 7.98, 7.893, 7.687, 7.486, 7.357, 7.23,
                7.043, 6.861, 6.683, 6.496, 6.314, 6.183, 6.054, 5.89, 5.823, 5.756, 5.69, 5.722, 5.755, 5.798, 5.841, 5.907, 5.973,
                6.101, 6.232, 6.396, 6.402, 6.409, 6.281, 6.225, 6.146, 6.068, 5.991, 5.733, 5.661, 5.589, 5.655, 5.722, 5.789, 6.198,
                6.635, 6.945, 7.269, 7.608, 7.963, 8.446, 8.959, 9.914, 10.211, 10.1, 9.99, 10.122, 10.225, 10.33, 10.322, 10.313,
                9.699, 9.12, 8.569, 8.05, 7.529, 7.041, 6.518, 6.035, 5.77, 5.516, 5.357, 5.265, 5.174, 5.218, 5.262, 5.238, 5.215,
                5.192, 5.169, 5.141, 5.113, 5.085, 4.957, 4.975, 4.994, 4.986, 4.977, 4.969, 5.043, 5.118, 5.357, 5.607, 5.869, 6.143,
                7.549, 8.539, 9.519, 10.611, 12.615, 13.343, 14.114, 15.138, 15.563, 15.114, 14.705, 14.952, 14.94, 14.927, 13.974,
                13.57, 13.177, 12.704, 12.6, 12.498, 12.272, 11.874, 11.521, 11.178, 10.905, 10.638, 10.74, 10.761, 10.782, 10.651,
                10.575, 10.5, 10.51, 10.521, 10.467, 10.448, 10.43, 10.319, 10.266, 10.005, 9.951, 9.898, 9.525, 9.166, 8.994, 8.824,
                8.539, 8.408, 8.279, 7.996, 7.867, 7.74, 7.628, 7.579, 7.531, 7.396, 7.145, 6.862, 6.789, 6.717, 6.705, 6.694, 6.682,
                6.587, 6.492, 6.531, 6.598, 6.667, 6.655, 6.643, 6.44, 6.242, 6.119, 5.998, 5.922, 5.848, 5.903, 5.97, 6.038, 6.084,
                6.096, 6.12, 6.077, 6.062, 6.048, 6.033, 5.871, 5.681, 5.767, 5.952, 6.142, 6.76, 7.92, 9.192, 10.419, 11.811, 12.973,
                14.761, 15.714, 16.729, 16.735001, 16.177999, 15.639, 16.197001, 16.775, 18.295, 18.330999, 17.969, 17.615, 17.267,
                16.778999, 16.306, 15.845, 15.544, 15.248, 14.633, 14.042, 13.417, 12.983, 12.865, 12.749, 12.385, 11.829, 10.537,
                9.938, 9.372, 8.838, 7.945, 7.142, 6.365, 5.98, 5.618, 5.355, 5.213, 5.31, 5.409, 5.51, 5.573, 5.636, 5.7, 5.765, 5.776,
                5.757, 5.737, 5.691, 5.645, 5.538, 5.432, 5.349, 5.267, 5.22, 5.174, 5.178, 5.182, 5.186, 5.233, 5.28, 5.327, 5.375,
                5.442, 5.51, 5.578, 5.596, 5.614, 5.615, 5.616, 5.616, 5.596, 5.576, 5.477, 5.379, 5.272, 5.168, 5.081, 4.995, 4.91,
                4.805, 4.701, 4.608, 4.517, 4.501, 4.485, 4.486, 4.484, 4.482, 4.479, 4.403, 4.328, 4.266, 4.204, 4.159, 4.114, 4.089,
                4.064, 4.087, 4.111, 4.153, 4.196, 4.216, 4.236, 4.268, 4.285, 4.294, 4.302, 4.248, 4.206, 4.165, 4.083, 4.057, 4.032,
                3.989, 3.98, 3.971, 3.962, 3.959, 3.956, 4.015, 4.075, 4.133, 4.191, 4.287, 4.319, 4.311, 4.277, 4.244, 4.239, 4.233,
                4.226, 4.324, 4.393, 4.464, 4.677, 4.845, 5.02, 5.201, 5.272, 5.046, 4.885, 4.78, 4.627, 4.595, 4.563, 4.599, 4.631,
                4.662, 4.691, 4.591, 4.523, 4.456, 4.39, 4.273, 4.209, 4.145, 4.068, 3.991, 3.881, 3.774, 3.721, 3.679, 3.637, 3.606,
                3.601, 3.615, 3.691, 3.81, 3.932, 4.298, 4.469, 4.647, 4.831, 5.147, 5.196, 5.246, 5.297, 5.208, 5.12, 5.025, 4.931,
                4.889, 4.95, 5.011, 5.069, 5.128, 5.206, 5.305, 5.406, 5.55, 5.699, 5.758, 5.819, 5.812, 5.666, 5.525, 5.517, 5.624,
                5.662, 5.701, 5.693, 5.684, 5.657, 5.675, 5.694, 5.685, 5.676, 5.557, 5.468, 5.38, 5.275, 5.171, 5.052, 5.035, 5.019,
                5.054, 5.089, 5.197, 5.29, 5.385, 5.788, 6.221, 7.258, 8.468, 10.035, 11.087, 11.938, 12.01, 11.95, 11.717, 11.164,
                10.637, 9.338, 8.006, 6.914, 6.105, 5.623, 5.294, 4.885, 4.749, 4.617, 4.461, 4.351, 4.356, 4.361, 4.486, 4.614, 4.798,
                4.989, 5.319, 5.671, 5.896, 6.131, 6.471, 6.57, 6.682, 6.795, 7.312, 7.868, 8.534, 9.257, 10.345, 10.765, 11.203,
                11.956, 12.759, 12.647, 12.536, 12.358, 12.183, 11.903, 11.647, 11.397, 10.675, 10.332, 9.999, 9.538, 9.41, 9.284,
                9.221, 9.626, 10.111, 10.62, 11.397, 11.895, 12.13, 12.37, 12.653, 12.847, 12.736, 12.082, 11.354, 10.497, 10.065,
                9.651, 8.686, 7.818, 6.979, 6.656, 6.348, 6.1, 5.691, 5.559, 5.563, 5.605, 5.648, 5.709, 5.771, 5.789, 5.807, 5.783,
                5.76, 5.752, 5.745, 5.721, 5.697, 5.632, 5.568, 5.515, 5.462, 5.439, 5.416, 5.364, 5.312, 5.218, 5.167, 5.117, 5.007,
                4.945, 4.918, 4.892, 4.911, 4.904, 4.878, 4.853, 4.854, 4.855, 4.861, 4.866, 4.877, 4.869, 4.861, 4.854, 4.802, 4.777,
                4.752, 4.727, 4.702, 4.655, 4.61, 4.552, 4.504, 4.5, 4.497, 4.486, 4.474, 4.452, 4.439, 4.426, 4.413, 4.366, 4.319,
                4.273, 4.227, 4.174, 4.122, 4.011, 3.958, 3.906, 3.855, 3.827, 3.801, 3.788, 3.775, 3.769, 3.763, 3.778, 3.849, 3.921,
                4.23, 4.483, 4.751, 5.578, 6.335, 6.972, 7.188, 7.411, 7.791, 8.161, 7.597, 7.073, 6.646, 6.244, 5.462, 5.29, 5.123,
                4.926, 4.736, 4.541, 4.354, 4.206, 4.18, 4.154, 4.132, 4.187, 4.394, 4.7, 5.027, 6.676, 7.422, 8.251, 12.977, 20.186001,
                24.761, 30.374001, 43.094002, 52.479, 49.536999, 46.759998, 41.355999, 37.279999, 33.605, 28.540001, 25.635, 23.025,
                18.676001, 16.362, 14.336, 11.629, 10.265, 9.339, 8.497, 7.682, 7.372, 7.074, 6.783, 6.637, 6.542, 6.448, 6.338, 6.229,
                6.225, 6.221, 6.177, 6.038, 5.903, 5.754, 5.609, 5.475, 5.343, 5.215, 5.109, 5.005, 4.903, 4.797, 4.694, 4.58, 4.469,
                4.429, 4.39, 4.377, 4.364, 4.351, 4.338, 4.311, 4.284, 4.317, 4.351, 4.372, 4.393, 4.37, 4.326, 4.282, 4.238, 4.177,
                4.117, 3.877, 3.804, 3.734, 3.664, 3.559, 3.511, 3.464, 3.621, 3.778, 4.143, 4.662, 5.901, 7.187, 8.251, 9.474, 11.358,
                13.616, 18.552, 23.872999, 26.275, 27.218, 24.808001, 22.612, 18.409, 12.983, 8.941, 6.751, 5.681, 4.987, 4.533, 4.12,
                3.801, 3.494, 3.437, 3.382, 3.349, 3.316, 3.305, 3.293, 3.303, 3.313, 3.286, 3.258, 3.231, 3.347, 3.448, 3.487, 3.54,
                3.577, 3.613, 3.623, 3.943, 4.209, 4.492, 5.007, 5.581, 6.418, 6.901, 7.421, 8.195, 8.51, 8.837, 9.219, 8.518, 7.907,
                7.34, 6.671, 6.52, 6.372, 6.187, 6.168, 6.15, 6.131, 6.165, 6.199, 6.303, 6.408, 6.42, 6.432, 6.373, 6.292, 6.257,
                6.223, 6.155, 6.093, 6.032, 5.966, 5.966, 5.966, 5.988, 6.005, 6.021, 6.032, 6.044, 6.055, 6.049, 6.044, 6.026, 6.007,
                5.989, 5.984, 5.978, 6, 5.956, 5.902, 5.848, 5.773, 5.731, 5.689, 5.576, 5.535, 5.494, 5.404, 5.316, 5.086, 4.957,
                4.903, 4.849, 4.778, 4.709, 4.64, 4.597, 4.555, 4.287, 4.268, 4.248, 4.252, 4.256, 4.268, 4.28, 4.312, 4.316, 4.32,
                4.253, 4.187, 4.141, 4.096, 4.003, 3.912, 3.777, 3.692, 3.608, 3.568, 3.529, 3.555, 3.591, 3.628, 3.645, 3.662, 3.658,
                3.655, 3.608, 3.562, 3.517, 3.504, 3.51, 3.517, 3.595, 3.676, 4.29, 4.911, 5.621, 7.036, 8.629, 11.041, 12.171, 13.418,
                15.094, 12.934, 10.821, 7.05, 6.136, 5.34, 4.038, 3.626, 3.256, 2.998, 2.905, 3.057, 3.217, 3.385, 4.379, 4.935, 5.562,
                8.169, 10.234, 12.82, 19.482, 29.605, 52.650002, 83.389, 111.309998, 82.783997, 62.709999, 48.563999, 40.48, 33.432999,
                27.259001, 22.225, 15.873, 11.676, 9.38, 8.293, 7.733, 7.427, 7.366, 7.305, 6.913, 6.399, 5.923, 5.295, 4.852, 4.446,
                3.902, 3.642, 3.399, 3.14, 3.118, 3.095, 3.135, 3.176, 3.215, 3.254, 3.295, 3.381, 3.381, 3.381, 3.35, 3.365, 3.381,
                3.447, 3.514, 3.616, 3.721, 3.871, 4.027, 4.189, 4.359, 4.547, 4.744, 4.859, 4.976, 4.963, 4.949, 4.949, 4.949, 4.949,
                4.977, 5.097, 5.221, 5.605, 6.018, 6.461, 8.161, 9.791, 13.336, 18.365999, 24.830999, 27.829, 30.959999, 30.254999,
                29.565001, 28.943001, 28.334999, 29.16, 30.01, 30.885, 32.935001, 34.073002, 35.25, 37.382, 37.759998, 38.141998,
                33.407001, 28.462999, 16.358999, 13.166, 10.596, 8.847, 7.088, 5.678, 4.57, 4.168, 3.801, 3.454, 3.203, 3.168, 3.173,
                3.179, 3.184, 3.149, 3.114, 3.08, 3.043, 3.007, 2.983, 2.96, 2.936, 2.913, 2.862, 2.811, 2.761, 2.751, 2.741, 2.748,
                2.755, 3.012, 3.293, 3.643, 4.576, 5.454, 6.501, 7.799, 11.224, 14.138, 17.808001, 22.865999, 28.042999, 26.292,
                24.650999, 23.681999, 22.750999, 21.857, 20.997999, 20.114, 19.268, 18.457001, 17.952999, 17.462999, 17.159, 16.860001,
                17.631001, 18.436001, 19.278999, 20.787001, 22.413, 24.166, 27.736, 30.403999, 29.848, 26.097, 22.816999, 18.229,
                10.595, 7.729, 5.638, 4.27, 3.271, 2.942, 2.647, 2.521, 2.401, 2.234, 2.214, 2.313, 2.418, 2.576, 2.744, 3.008, 3.298,
                3.566, 3.855, 4.474, 5.192, 5.992, 6.916, 7.609, 8.372, 9.556, 10.514, 11.654, 10.077, 7.89, 6.409, 5.313, 4.34, 3.922,
                3.545, 3.293, 3.059, 2.949, 2.954, 3.005, 3.058, 3.146, 3.237, 3.358, 3.439, 3.561, 3.687, 3.896, 4.117, 4.35, 4.686,
                5.047, 5.437, 5.857, 6.2, 5.813, 5.307, 4.845, 4.448, 4.083, 3.479, 3.244, 3.025, 2.908, 2.795, 2.759, 2.723, 2.761,
                2.799, 2.866, 2.911, 2.957, 2.913, 2.948, 2.984, 3.027, 3.072, 3.075, 3.077, 3.018, 2.96, 2.917, 2.874, 2.9, 2.927,
                2.919, 2.91, 2.915, 2.921, 2.926, 2.918, 2.909, 2.909, 2.885, 2.861, 2.806, 2.752, 2.724, 2.697, 2.686, 2.686, 2.805,
                2.93, 3.06, 3.239, 3.429, 3.63, 3.863, 4.112, 4.474, 4.667, 4.573, 4.481, 4.287, 4.102, 3.924, 3.755, 3.592, 3.52,
                3.449, 3.439, 3.429, 3.492, 3.557, 3.68, 3.808, 3.941, 4.111, 4.288, 4.403, 4.521, 4.63, 4.742, 4.781, 4.82, 4.824,
                4.827, 4.792, 4.756, 4.79, 4.816, 4.842, 4.851, 4.636, 4.432, 4.371, 4.311, 4.116, 4.101, 4.085, 3.959, 3.837, 3.739,
                3.644, 3.59, 3.616, 3.642, 3.651, 3.66, 3.668, 3.861, 4.003, 4.15, 4.302, 4.655, 5.029, 5.216, 5.159, 5.102, 5.124,
                5.148, 4.915, 4.799, 4.685, 4.574, 4.548, 4.598, 4.649, 4.7, 4.839, 5.029, 5.006, 4.982, 4.511, 4.152, 3.946, 3.75,
                3.564, 3.121, 2.992, 2.868, 2.748, 2.671, 2.596, 2.525, 2.545, 2.566, 2.719, 2.881, 3.252, 3.671, 3.919, 4.185, 4.468,
                5.118, 5.538, 5.798, 5.527, 5.269, 5.022, 4.497, 4.166, 3.86, 3.679, 3.507, 3.343, 3.106, 2.999, 2.895, 2.746, 2.605,
                2.471, 2.405, 2.341, 2.278, 2.19, 2.105, 2.036, 1.969, 1.941, 1.912, 1.933, 1.976, 2.039, 2.105, 2.173, 2.564, 3.138,
                3.424, 3.737, 4.941, 5.723, 6.629, 8.589, 13.206, 14.291, 14.527, 11.607, 9.763, 8.767, 7.873, 6.186, 5.876, 5.58,
                5.328, 5.284, 5.24, 5.139, 5.041, 4.555, 4.228, 3.924, 3.622, 3.343, 3.097, 2.869, 2.728, 2.593, 2.538, 2.485, 2.475,
                2.466, 2.489, 2.511, 2.69, 2.882, 3.156, 3.457, 3.938, 4.22, 4.522, 4.846, 5.145, 5.463, 5.801, 6.359, 6.62, 6.774,
                6.93, 7.555, 7.851, 8.159, 8.387, 8.621, 9.192, 9.874, 10.608, 11.395, 14.024, 15.359, 16.820999, 19.664, 17.129, 14.88,
                12.926, 10.833, 9.24, 7.881, 6.456, 5.288, 4.806, 4.548, 5.12, 5.763, 6.486, 7.81, 9.404, 12.999, 20.062, 27.124001,
                34.196999, 28.35, 24.004, 20.323999, 13.218, 9.476, 8.748, 8.076, 7.407, 7.299, 7.193, 7.108, 7.023, 6.895, 6.77, 6.514,
                6.267, 6.002, 5.748, 5.49, 5.475, 5.46, 5.624, 5.645, 5.665, 5.381, 5.088, 4.81, 4.594, 4.269, 4.04, 3.998, 3.957,
                3.916, 3.885, 3.854, 3.823, 3.831, 3.895, 3.96, 4.063, 4.169, 4.558, 4.983, 6.012, 7.239, 8.204, 9.297, 12.686, 14.297,
                16.112, 20.202, 23.882999, 25.566, 22.499001, 19.799999, 16.025999, 10.577, 8.6, 6.993, 5.078, 4.347, 3.722, 3.195,
                2.99, 2.799, 2.693, 2.605, 2.787, 2.982, 3.19, 3.48, 3.796, 4.142, 4.711, 4.834, 4.816, 4.707, 4.6, 4.158, 3.967, 3.786,
                3.511, 3.368, 3.232, 3.301, 3.372, 3.409, 3.447, 3.424, 3.401, 3.378, 3.348, 3.317, 3.332, 3.348, 3.379, 3.41, 3.442,
                3.478, 3.514, 3.551, 3.584, 3.617, 3.651, 3.661, 3.671, 3.668, 3.665, 3.696, 3.728, 3.761, 3.785, 3.81, 3.798, 3.786,
                3.775, 3.751, 3.727, 3.757, 3.787, 3.817, 3.846, 3.929, 4.014, 4.102, 4.173, 4.245, 4.319, 4.375, 4.432, 4.489, 4.547,
                4.252, 3.976, 3.84, 3.708, 3.664, 3.62, 3.614, 3.607, 3.826, 3.962, 4.103, 4.249, 4.54, 4.851, 5.089, 5.339, 5.683,
                6.05, 6.441, 6.977, 7.559, 7.804, 8.057, 8.318, 8.71, 8.937, 9.104, 8.861, 8.626, 8.396, 8.078, 7.772, 7.383, 7.288,
                7.195, 7.077, 7.078, 7.078, 7.026, 6.975, 6.873, 6.773, 6.558, 6.351, 5.846, 5.661, 5.482, 5.323, 5.131, 4.946, 4.767,
                4.491, 4.23, 3.809, 3.706, 3.605, 3.521, 3.508, 3.495, 3.567, 3.636, 3.706, 3.778, 3.866, 3.956, 4.082, 4.098, 4.113,
                4.129, 4.206, 4.284, 4.528, 4.733, 4.947, 5.325, 5.732, 7.071, 8.178, 9.108, 10.144, 12.149, 15.663, 22.843, 32.467999,
                43.189999, 52.016998, 53.133999, 54.275002, 47.723999, 44.139, 40.823002, 40.083, 40.983002, 41.903, 43.320999,
                44.102001, 44.897999, 45.708, 46.307999, 43.066002, 40.050999, 36.603001, 35.185001, 33.823002, 30.014, 27.129,
                26.198999, 25.301001, 25.073, 25.238001, 25.403, 25.312, 25.221001, 25.273001, 26.587999, 27.971001, 29.672001, 30.534,
                31.421, 31.308001, 31.195, 30.072001, 28.75, 27.486, 25.304001, 23.924999, 22.622, 21.232, 19.927, 19.139, 19.176001,
                19.212999, 19.056, 18.9, 17.988001, 18.139, 18.292, 18.91, 19.549, 20.322001, 20.855, 19.974001, 19.129999, 18.104,
                17.548, 17.438, 17.327999, 16.621, 15.943, 15.293, 14.367, 14.223, 14.081, 13.826, 14.953, 16.172001, 18.569, 21.320999,
                25.825001, 31.278999, 37.675999, 45.382, 60.830002, 70.109001, 63.948002, 58.328999, 57.058998, 55.817001, 57.813999,
                59.882, 61.116001, 62.374001, 61.980999, 61.589001, 60.582001, 59.591, 55.882999, 53.277, 52.213001, 40.911999,
                32.056999, 25.561001, 20.381001, 14.102, 8.237, 7.639, 7.083, 6.778, 6.485, 6.957, 7.692, 8.505, 10.113, 12.026, 18.889,
                25.886, 35.473999, 61.431, 74.343002, 89.968002, 101.615997, 107.008003, 97.780998, 89.348999, 61.762001, 42.692001,
                25.679001, 17.507, 11.108, 8.396, 6.393, 5.82, 5.299, 4.932, 4.856, 4.78, 5.099, 5.44, 5.802, 6.189, 7.28, 7.589, 7.911,
                8.269, 8.644, 8.822, 7.42, 6.755, 6.15, 5.501, 4.921, 3.997, 3.683, 3.393, 3.235, 3.083, 3.027, 2.972, 2.96, 2.947,
                2.935, 2.968, 3.001, 3.114, 3.202, 3.292, 3.384, 3.52, 3.662, 3.809, 4.154, 4.371, 4.598, 4.887, 5.121, 5.702, 6.044,
                6.407, 7.199, 7.499, 7.811, 8.353, 8.75, 8.965, 9.185, 9.473, 9.769, 10.199, 10.468, 10.745, 11.183, 11.639, 12.489,
                13.475, 14.273, 14.49, 13.792, 11.823, 10.172, 8.373, 6.93, 5.907, 4.722, 3.917, 3.601, 3.494, 3.39, 3.239, 3.259,
                3.319, 3.38, 3.442, 3.613, 3.709, 3.808, 3.931, 4.013, 4.018, 4.023, 3.944, 3.867, 3.802, 3.738, 3.698, 3.659, 3.621,
                3.589, 3.558, 3.58, 3.635, 3.69, 3.76, 3.831, 3.962, 3.997, 4.032, 4.034, 4.039, 4.045, 4.099, 4.259, 4.425, 4.609,
                4.802, 5.003, 5.221, 5.42, 5.762, 5.639, 5.462, 5.291, 4.982, 4.813, 4.599, 4.652, 4.662, 4.673, 4.692, 4.669, 4.68,
                4.69, 4.701, 4.72, 4.732, 4.751, 4.771],
            [2.585, 2.551, 2.512, 2.572, 2.548, 2.502, 2.557, 2.609, 2.658, 2.667, 2.675, 2.641, 2.588, 2.572, 2.592, 2.617, 2.668,
                2.657, 2.65, 2.656, 2.663, 2.62, 2.627, 2.621, 2.63, 2.629, 2.625, 2.643, 2.66, 2.637, 2.623, 2.614, 2.655, 2.674,
                2.649, 2.617, 2.636, 2.641, 2.643, 2.66, 2.673, 2.642, 2.651, 2.666, 2.663, 2.664, 2.659, 2.653, 2.667, 2.643, 2.593,
                2.603, 2.608, 2.612, 2.655, 2.644, 2.659, 2.679, 2.669, 2.655, 2.642, 2.639, 2.648, 2.655, 2.634, 2.656, 2.642, 2.646,
                2.642, 2.636, 2.649, 2.618, 2.603, 2.589, 2.58, 2.643, 2.628, 2.669, 2.658, 2.642, 2.675, 2.679, 2.618, 2.618, 2.595,
                2.613, 2.603, 2.59, 2.595, 2.67, 2.647, 2.649, 2.653, 2.611, 2.64, 2.673, 2.637, 2.643, 2.655, 2.645, 2.633, 2.652,
                2.644, 2.636, 2.622, 2.652, 2.651, 2.648, 2.669, 2.671, 2.692, 2.65, 2.644, 2.621, 2.637, 2.655, 2.671, 2.662, 2.666,
                2.672, 2.664, 2.655, 2.651, 2.656, 2.638, 2.62, 2.62, 2.607, 2.625, 2.614, 2.61, 2.598, 2.651, 2.644, 2.663, 2.652,
                2.64, 2.628, 2.602, 2.626, 2.629, 2.667, 2.636, 2.639, 2.643, 2.633, 2.64, 2.633, 2.66, 2.673, 2.64, 2.663, 2.685,
                2.671, 2.668, 2.653, 2.661, 2.669, 2.602, 2.597, 2.581, 2.501, 2.545, 2.589, 2.609, 2.628, 2.648, 2.642, 2.636, 2.656,
                2.667, 2.668, 2.683, 2.656, 2.643, 2.63, 2.613, 2.602, 2.591, 2.618, 2.638, 2.649, 2.659, 2.633, 2.609, 2.615, 2.62,
                2.549, 2.583, 2.617, 2.636, 2.579, 2.594, 2.566, 2.579, 2.586, 2.592, 2.582, 2.595, 2.584, 2.575, 2.592, 2.599, 2.581,
                2.623, 2.665, 2.705, 2.698, 2.692, 2.675, 2.658, 2.641, 2.696, 2.678, 2.66, 2.644, 2.66, 2.676, 2.694, 2.666, 2.641,
                2.649, 2.618, 2.59, 2.6, 2.609, 2.614, 2.596, 2.599, 2.601, 2.581, 2.565, 2.616, 2.659, 2.611, 2.564, 2.53, 2.634,
                2.616, 2.594, 2.538, 2.621, 2.691, 2.641, 2.594, 2.58, 2.583, 2.582, 2.555, 2.568, 2.558, 2.558, 2.503, 2.517, 2.511,
                2.521, 2.51, 2.502, 2.508, 2.511, 2.498, 2.511, 2.504, 2.485, 2.525, 2.58, 2.546, 2.538, 2.483, 2.462, 2.458, 2.424,
                2.431, 2.43, 2.369, 2.33, 2.303, 2.388, 2.568, 2.497, 2.486, 2.477, 2.476, 2.446, 2.435, 2.378, 2.335, 2.38, 2.416,
                2.416, 2.508, 2.481, 2.462, 2.487, 2.502, 2.447, 2.331, 2.299, 2.305, 2.281, 2.392, 2.474, 2.423, 2.472, 2.502, 2.533,
                2.559, 2.548, 2.577, 2.568, 2.543, 2.542, 2.491, 2.448, 2.449, 2.488, 2.509, 2.544, 2.532, 2.599, 2.643, 2.68, 2.688,
                2.679, 2.679, 2.67, 2.658, 2.643, 2.625, 2.625, 2.579, 2.59, 2.594, 2.595, 2.557, 2.546, 2.5, 2.468, 2.495, 2.55, 2.687,
                2.703, 2.703, 2.716, 2.693, 2.674, 2.668, 2.659, 2.676, 2.68, 2.678, 2.686, 2.683, 2.688, 2.675, 2.666, 2.67, 2.689,
                2.695, 2.703, 2.716, 2.721, 2.701, 2.693, 2.688, 2.697, 2.703, 2.71, 2.706, 2.664, 2.658, 2.654, 2.654, 2.647, 2.648,
                2.642, 2.655, 2.67, 2.682, 2.679, 2.702, 2.712, 2.697, 2.682, 2.668, 2.654, 2.643, 2.661, 2.666, 2.685, 2.684, 2.687,
                2.667, 2.657, 2.668, 2.657, 2.636, 2.629, 2.658, 2.672, 2.688, 2.713, 2.728, 2.721, 2.728, 2.73, 2.711, 2.694, 2.683,
                2.685, 2.682, 2.683, 2.684, 2.677, 2.695, 2.681, 2.634, 2.6, 2.615, 2.622, 2.626, 2.659, 2.642, 2.625, 2.619, 2.636,
                2.649, 2.646, 2.642, 2.658, 2.668, 2.659, 2.62, 2.621, 2.63, 2.65, 2.652, 2.666, 2.649, 2.633, 2.613, 2.61, 2.611,
                2.622, 2.627, 2.62, 2.616, 2.611, 2.602, 2.599, 2.614, 2.614, 2.596, 2.605, 2.601, 2.587, 2.608, 2.627, 2.65, 2.679,
                2.702, 2.693, 2.647, 2.636, 2.674, 2.651, 2.627, 2.612, 2.632, 2.648, 2.634, 2.621, 2.609, 2.616, 2.623, 2.64, 2.635,
                2.629, 2.624, 2.638, 2.639, 2.639, 2.639, 2.601, 2.595, 2.603, 2.596, 2.611, 2.64, 2.637, 2.633, 2.64, 2.641, 2.637,
                2.643, 2.653, 2.656, 2.658, 2.66, 2.652, 2.636, 2.639, 2.634, 2.627, 2.632, 2.672, 2.687, 2.697, 2.668, 2.653, 2.635,
                2.617, 2.631, 2.645, 2.666, 2.666, 2.642, 2.672, 2.689, 2.705, 2.694, 2.705, 2.69, 2.684, 2.677, 2.676, 2.681, 2.646,
                2.608, 2.586, 2.564, 2.559, 2.583, 2.607, 2.605, 2.59, 2.586, 2.592, 2.591, 2.609, 2.625, 2.63, 2.624, 2.619, 2.623,
                2.625, 2.606, 2.591, 2.627, 2.612, 2.596, 2.555, 2.579, 2.589, 2.587, 2.64, 2.635, 2.617, 2.599, 2.602, 2.601, 2.595,
                2.6, 2.609, 2.618, 2.632, 2.643, 2.634, 2.61, 2.603, 2.614, 2.621, 2.625, 2.625, 2.618, 2.626, 2.622, 2.618, 2.617,
                2.619, 2.637, 2.651, 2.628, 2.613, 2.647, 2.633, 2.588, 2.634, 2.68, 2.677, 2.673, 2.691, 2.693, 2.692, 2.679, 2.696,
                2.683, 2.66, 2.663, 2.659, 2.646, 2.633, 2.644, 2.672, 2.68, 2.676, 2.674, 2.666, 2.666, 2.669, 2.663, 2.67, 2.684,
                2.664, 2.653, 2.67, 2.679, 2.666, 2.664, 2.61, 2.6, 2.646, 2.69, 2.663, 2.636, 2.635, 2.618, 2.622, 2.615, 2.635, 2.666,
                2.662, 2.651, 2.671, 2.629, 2.622, 2.638, 2.655, 2.684, 2.685, 2.664, 2.632, 2.626, 2.638, 2.635, 2.652, 2.692, 2.695,
                2.639, 2.605, 2.65, 2.657, 2.665, 2.674, 2.675, 2.685, 2.66, 2.626, 2.647, 2.665, 2.654, 2.642, 2.668, 2.657, 2.664,
                2.642, 2.605, 2.621, 2.638, 2.657, 2.649, 2.648, 2.674, 2.688, 2.674, 2.648, 2.651, 2.655, 2.682, 2.683, 2.685, 2.68,
                2.662, 2.603, 2.608, 2.592, 2.599, 2.616, 2.571, 2.519, 2.612, 2.611, 2.618, 2.623, 2.599, 2.605, 2.617, 2.607, 2.611,
                2.609, 2.591, 2.589, 2.598, 2.599, 2.605, 2.624, 2.631, 2.651, 2.643, 2.606, 2.596, 2.6, 2.593, 2.585, 2.591, 2.602,
                2.611, 2.584, 2.586, 2.589, 2.607, 2.626, 2.633, 2.644, 2.622, 2.608, 2.62, 2.625, 2.622, 2.626, 2.623, 2.618, 2.619,
                2.63, 2.634, 2.618, 2.611, 2.609, 2.63, 2.634, 2.623, 2.616, 2.637, 2.63, 2.637, 2.647, 2.621, 2.632, 2.588, 2.655,
                2.598, 2.629, 2.648, 2.615, 2.605, 2.585, 2.626, 2.641, 2.608, 2.622, 2.668, 2.667, 2.682, 2.672, 2.629, 2.624, 2.627,
                2.618, 2.597, 2.593, 2.591, 2.594, 2.629, 2.655, 2.636, 2.622, 2.614, 2.608, 2.633, 2.628, 2.611, 2.606, 2.611, 2.61,
                2.591, 2.597, 2.611, 2.609, 2.616, 2.618, 2.61, 2.597, 2.581, 2.581, 2.576, 2.583, 2.587, 2.561, 2.605, 2.663, 2.665,
                2.667, 2.66, 2.646, 2.626, 2.594, 2.581, 2.583, 2.603, 2.647, 2.655, 2.619, 2.603, 2.619, 2.623, 2.623, 2.627, 2.621,
                2.634, 2.662, 2.66, 2.649, 2.653, 2.656, 2.667, 2.675, 2.695, 2.692, 2.659, 2.641, 2.635, 2.639, 2.63, 2.637, 2.639,
                2.635, 2.64, 2.654, 2.67, 2.669, 2.656, 2.65, 2.643, 2.648, 2.646, 2.654, 2.682, 2.681, 2.668, 2.664, 2.644, 2.612,
                2.612, 2.658, 2.677, 2.651, 2.634, 2.642, 2.643, 2.65, 2.676, 2.683, 2.669, 2.671, 2.669, 2.645, 2.625, 2.613, 2.615,
                2.617, 2.631, 2.647, 2.63, 2.626, 2.637, 2.636, 2.619, 2.616, 2.61, 2.597, 2.601, 2.62, 2.654, 2.65, 2.649, 2.659,
                2.672, 2.671, 2.666, 2.667, 2.664, 2.649, 2.649, 2.654, 2.64, 2.637, 2.643, 2.641, 2.647, 2.647, 2.642, 2.647, 2.641,
                2.633, 2.638, 2.64, 2.633, 2.624, 2.663, 2.672, 2.678, 2.719, 2.713, 2.727, 2.727, 2.689, 2.692, 2.677, 2.635, 2.603,
                2.584, 2.556, 2.547, 2.596, 2.627, 2.627, 2.64, 2.679, 2.694, 2.655, 2.633, 2.639, 2.63, 2.626, 2.647, 2.633, 2.636,
                2.653, 2.638, 2.629, 2.639, 2.638, 2.597, 2.589, 2.638, 2.664, 2.651, 2.632, 2.646, 2.683, 2.633, 2.608, 2.601, 2.594,
                2.583, 2.562, 2.565, 2.548, 2.551, 2.573, 2.604, 2.564, 2.55, 2.534, 2.542, 2.538, 2.513, 2.505, 2.522, 2.516, 2.476,
                2.464, 2.486, 2.51, 2.519, 2.508, 2.517, 2.518, 2.502, 2.493, 2.444, 2.339, 2.275, 2.21, 2.187, 2.246, 2.323, 2.435,
                2.555, 2.64, 2.615, 2.582, 2.536, 2.512, 2.542, 2.545, 2.499, 2.537, 2.576, 2.614, 2.631, 2.612, 2.621, 2.645, 2.659,
                2.656, 2.649, 2.622, 2.59, 2.519, 2.489, 2.527, 2.513, 2.537, 2.631, 2.671, 2.684, 2.689, 2.676, 2.674, 2.682, 2.658,
                2.639, 2.636, 2.651, 2.632, 2.617, 2.589, 2.625, 2.654, 2.658, 2.651, 2.643, 2.642, 2.654, 2.625, 2.602, 2.658, 2.698,
                2.674, 2.661, 2.66, 2.694, 2.714, 2.694, 2.682, 2.684, 2.672, 2.668, 2.677, 2.661, 2.658, 2.649, 2.642, 2.604, 2.542,
                2.476, 2.4, 2.324, 2.218, 2.109, 2.242, 2.453, 2.694, 2.698, 2.689, 2.641, 2.653, 2.665, 2.668, 2.662, 2.687, 2.694,
                2.667, 2.677, 2.671, 2.676, 2.701, 2.696, 2.703, 2.69, 2.675, 2.66, 2.668, 2.67, 2.677, 2.661, 2.645, 2.625, 2.606,
                2.642, 2.672, 2.671, 2.678, 2.688, 2.636, 2.65, 2.657, 2.652, 2.653, 2.644, 2.639, 2.578, 2.535, 2.536, 2.471, 2.44,
                2.531, 2.595, 2.577, 2.608, 2.645, 2.637, 2.649, 2.638, 2.626, 2.609, 2.598, 2.607, 2.601, 2.588, 2.593, 2.596, 2.592,
                2.598, 2.595, 2.6, 2.602, 2.636, 2.589, 2.557, 2.594, 2.625, 2.629, 2.606, 2.603, 2.597, 2.579, 2.567, 2.56, 2.556,
                2.489, 2.51, 2.531, 2.545, 2.538, 2.571, 2.594, 2.581, 2.6, 2.591, 2.588, 2.607, 2.623, 2.622, 2.553, 2.572, 2.568,
                2.58, 2.577, 2.513, 2.503, 2.496, 2.541, 2.504, 2.501, 2.566, 2.52, 2.49, 2.519, 2.597, 2.681, 2.671, 2.613, 2.661,
                2.684, 2.685, 2.658, 2.604, 2.593, 2.6, 2.605, 2.612, 2.628, 2.631, 2.626, 2.643, 2.637, 2.642, 2.631, 2.617, 2.645,
                2.585, 2.544, 2.562, 2.582, 2.594, 2.608, 2.541, 2.518, 2.547, 2.518, 2.489, 2.466, 2.456, 2.445, 2.476, 2.506, 2.532,
                2.555, 2.561, 2.55, 2.563, 2.59, 2.602, 2.626, 2.641, 2.631, 2.627, 2.632, 2.628, 2.638, 2.656, 2.662, 2.65, 2.648,
                2.634, 2.616, 2.622, 2.614, 2.643, 2.676, 2.669, 2.667, 2.664, 2.647, 2.653, 2.641, 2.631, 2.644, 2.656, 2.654, 2.648,
                2.638, 2.646, 2.638, 2.612, 2.62, 2.626, 2.637, 2.642, 2.643, 2.649, 2.659, 2.683, 2.646, 2.612, 2.591, 2.557, 2.556,
                2.57, 2.63, 2.6, 2.582, 2.563, 2.606, 2.621, 2.627, 2.618, 2.616, 2.618, 2.602, 2.601, 2.597, 2.609, 2.631, 2.626,
                2.656, 2.688, 2.71, 2.696, 2.678, 2.668, 2.681, 2.683, 2.678, 2.656, 2.66, 2.666, 2.66, 2.661, 2.645, 2.633, 2.623,
                2.607, 2.57, 2.56, 2.582, 2.593, 2.596, 2.58, 2.573, 2.587, 2.55, 2.518, 2.506, 2.503, 2.495, 2.483, 2.51, 2.572, 2.608,
                2.59, 2.571, 2.553, 2.55, 2.581, 2.611, 2.635, 2.645, 2.66, 2.666, 2.655, 2.647, 2.626, 2.604, 2.593, 2.591, 2.574,
                2.565, 2.574, 2.588, 2.613, 2.618, 2.632, 2.642, 2.636, 2.623, 2.618, 2.609, 2.606, 2.62, 2.631, 2.625, 2.626, 2.625,
                2.604, 2.589, 2.579, 2.582, 2.59, 2.607, 2.626, 2.646, 2.647, 2.621, 2.61, 2.617, 2.618, 2.625, 2.635, 2.594, 2.607,
                2.616, 2.614, 2.624, 2.623, 2.606, 2.591, 2.588, 2.594, 2.575, 2.592, 2.61, 2.627, 2.637, 2.621, 2.612, 2.613, 2.6,
                2.618, 2.634, 2.63, 2.632, 2.615, 2.626, 2.634, 2.616, 2.628, 2.638, 2.622, 2.616, 2.628, 2.611, 2.592, 2.589, 2.577,
                2.537, 2.436, 2.514, 2.589, 2.6, 2.611, 2.597, 2.615, 2.621, 2.628, 2.66, 2.643, 2.675, 2.69, 2.684, 2.695, 2.695, 2.64,
                2.582, 2.564, 2.559, 2.556, 2.57, 2.563, 2.572, 2.584, 2.569, 2.593, 2.587, 2.59, 2.594, 2.59, 2.61, 2.632, 2.633,
                2.631, 2.664, 2.645, 2.642, 2.644, 2.606, 2.582, 2.565, 2.588, 2.62, 2.657, 2.636, 2.655, 2.697, 2.703, 2.702, 2.706,
                2.711, 2.708, 2.72, 2.739, 2.76, 2.765, 2.772, 2.729, 2.703, 2.705, 2.68, 2.651, 2.63, 2.611, 2.533, 2.532, 2.567,
                2.595, 2.623, 2.615, 2.615, 2.63, 2.612, 2.52, 2.488, 2.51, 2.529, 2.546, 2.526, 2.491, 2.493, 2.516, 2.547, 2.556,
                2.552, 2.579, 2.587, 2.581, 2.589, 2.596, 2.592, 2.582, 2.574, 2.563, 2.544, 2.545, 2.554, 2.552, 2.557, 2.562, 2.566,
                2.581, 2.601, 2.601, 2.574, 2.554, 2.541, 2.528, 2.506, 2.5, 2.526, 2.525, 2.499, 2.483, 2.457, 2.4, 2.422, 2.523,
                2.561, 2.576, 2.54, 2.504, 2.504, 2.508, 2.518, 2.52, 2.541, 2.552, 2.544, 2.55, 2.583, 2.615, 2.637, 2.638, 2.636,
                2.633, 2.626, 2.632, 2.623, 2.595, 2.585, 2.617, 2.639, 2.641, 2.577, 2.506, 2.524, 2.542, 2.587, 2.565, 2.553, 2.568,
                2.557, 2.564, 2.567, 2.558, 2.577, 2.561, 2.574, 2.586, 2.593, 2.584, 2.597, 2.608, 2.598, 2.586, 2.575, 2.59, 2.584,
                2.573, 2.581, 2.589, 2.592, 2.599, 2.643, 2.666, 2.688, 2.709, 2.695, 2.699, 2.68, 2.688, 2.692, 2.687, 2.715, 2.703,
                2.692, 2.707, 2.701, 2.718, 2.702, 2.705, 2.707, 2.695, 2.699, 2.691, 2.704, 2.685, 2.7, 2.718, 2.745, 2.721, 2.725,
                2.716, 2.729, 2.727, 2.724, 2.685, 2.685, 2.689, 2.677, 2.615, 2.496, 2.485, 2.492, 2.493, 2.509, 2.529, 2.557, 2.551,
                2.539, 2.557, 2.574, 2.534, 2.614, 2.645, 2.658, 2.648, 2.637, 2.655, 2.681, 2.697, 2.699, 2.677, 2.648, 2.619, 2.601,
                2.563, 2.511, 2.49, 2.481, 2.485, 2.495, 2.489, 2.487, 2.481, 2.485, 2.487, 2.487, 2.504, 2.499, 2.507, 2.528, 2.541,
                2.571, 2.595, 2.604, 2.622, 2.649, 2.657, 2.659, 2.665, 2.674, 2.683, 2.673, 2.659, 2.626, 2.576, 2.566, 2.553, 2.536,
                2.521, 2.495, 2.47, 2.457, 2.452, 2.481, 2.533, 2.552, 2.566, 2.594, 2.606, 2.604, 2.62, 2.632, 2.619, 2.603, 2.604,
                2.612, 2.6, 2.586, 2.589, 2.606, 2.614, 2.613, 2.601, 2.587, 2.589, 2.617, 2.621, 2.596, 2.58, 2.582, 2.596, 2.61,
                2.596, 2.583, 2.583, 2.593, 2.591, 2.598, 2.593, 2.612, 2.619, 2.627, 2.634, 2.631, 2.612, 2.604, 2.613, 2.613, 2.595,
                2.587, 2.586, 2.586, 2.608, 2.615, 2.594, 2.596, 2.638, 2.66, 2.623, 2.603, 2.61, 2.608, 2.574, 2.552, 2.588, 2.605,
                2.621, 2.634, 2.637, 2.599, 2.602, 2.601, 2.586, 2.578, 2.602, 2.612, 2.598, 2.602, 2.606, 2.614, 2.602, 2.618, 2.628,
                2.564, 2.508, 2.537, 2.562, 2.554, 2.562, 2.572, 2.594, 2.569, 2.608, 2.6, 2.647, 2.622, 2.598, 2.604, 2.582, 2.559,
                2.594, 2.592, 2.598, 2.588, 2.578, 2.574, 2.57, 2.606, 2.597, 2.598, 2.584, 2.592, 2.602, 2.616, 2.631, 2.634, 2.645,
                2.603, 2.592, 2.614, 2.601, 2.584, 2.567, 2.584, 2.561, 2.531, 2.551, 2.565, 2.577, 2.534, 2.545, 2.55, 2.552, 2.555,
                2.575, 2.59, 2.61, 2.663, 2.661, 2.642, 2.623, 2.625, 2.618, 2.606, 2.627, 2.622, 2.606, 2.591, 2.596, 2.609, 2.607,
                2.599, 2.591, 2.617, 2.621, 2.624, 2.625, 2.582, 2.564, 2.553, 2.536, 2.515, 2.504, 2.505, 2.511, 2.518, 2.516, 2.511,
                2.522, 2.548, 2.541, 2.554, 2.565, 2.559, 2.583, 2.631, 2.641, 2.641, 2.65, 2.655, 2.66, 2.66, 2.665, 2.657, 2.635,
                2.632, 2.63, 2.616, 2.632, 2.641, 2.621, 2.62, 2.599, 2.581, 2.601, 2.595, 2.562, 2.53, 2.507, 2.512, 2.536, 2.557,
                2.561, 2.548, 2.535, 2.52, 2.522, 2.523, 2.49, 2.474, 2.489, 2.504, 2.558, 2.653, 2.692, 2.702, 2.668, 2.659, 2.676,
                2.659, 2.651, 2.655, 2.65, 2.629, 2.605, 2.571, 2.543, 2.512, 2.47, 2.5, 2.633, 2.643, 2.648, 2.627, 2.607, 2.587,
                2.582, 2.597, 2.618, 2.653, 2.681, 2.668, 2.624, 2.629, 2.634, 2.64, 2.661, 2.666, 2.635, 2.691, 2.741, 2.758, 2.749,
                2.744, 2.725, 2.725, 2.721, 2.705, 2.699, 2.672, 2.659, 2.63, 2.611, 2.654, 2.676, 2.686, 2.679, 2.684, 2.686, 2.669,
                2.654, 2.659, 2.664, 2.669, 2.654, 2.64, 2.632, 2.628, 2.649, 2.652, 2.665, 2.643, 2.622, 2.62, 2.64, 2.62, 2.6, 2.596,
                2.57, 2.545, 2.638, 2.631, 2.622, 2.613, 2.626, 2.593, 2.576, 2.552, 2.568, 2.545, 2.527, 2.509, 2.56, 2.617, 2.605,
                2.586, 2.613, 2.629, 2.641, 2.65, 2.658, 2.683, 2.674, 2.678, 2.685, 2.673, 2.667, 2.67, 2.599, 2.573, 2.56, 2.516,
                2.465, 2.424, 2.46, 2.514, 2.508, 2.485, 2.518, 2.566, 2.555, 2.526, 2.563, 2.651, 2.683, 2.692, 2.657, 2.571, 2.586,
                2.607, 2.627, 2.644, 2.621, 2.61, 2.601, 2.587, 2.605, 2.609, 2.598, 2.609, 2.608, 2.605, 2.608, 2.596, 2.594, 2.601,
                2.613, 2.61, 2.614, 2.615, 2.607, 2.607, 2.612, 2.609, 2.614, 2.622, 2.624, 2.614, 2.595, 2.615, 2.628, 2.612, 2.595,
                2.603, 2.626, 2.626, 2.616, 2.61, 2.621, 2.624, 2.61, 2.602, 2.614, 2.645, 2.655, 2.651, 2.653, 2.631, 2.61, 2.625,
                2.627, 2.613, 2.617, 2.615, 2.595, 2.599, 2.598, 2.607, 2.606, 2.605, 2.591, 2.589, 2.603, 2.605, 2.595, 2.609, 2.642,
                2.636, 2.634, 2.624, 2.622, 2.625, 2.62, 2.629, 2.639, 2.642, 2.626, 2.614, 2.61, 2.619, 2.623, 2.628, 2.665, 2.681,
                2.664, 2.618, 2.621, 2.622, 2.619, 2.62, 2.602, 2.592, 2.601, 2.611, 2.622, 2.634, 2.655, 2.634, 2.63, 2.624, 2.608,
                2.589, 2.577, 2.569, 2.588, 2.6, 2.541, 2.491, 2.484, 2.411, 2.342, 2.296, 2.263, 2.331, 2.398, 2.475, 2.644, 2.617,
                2.591, 2.576, 2.583, 2.591, 2.603, 2.598, 2.594, 2.625, 2.616, 2.599, 2.581, 2.595, 2.609, 2.593, 2.577, 2.558, 2.558,
                2.475, 2.441, 2.418, 2.416, 2.41, 2.404, 2.426, 2.403, 2.419, 2.438, 2.451, 2.469, 2.486, 2.524, 2.552, 2.575, 2.562,
                2.595, 2.631, 2.703, 2.69, 2.7, 2.707, 2.636, 2.629, 2.62, 2.598, 2.679, 2.666, 2.673, 2.671, 2.664, 2.643, 2.634,
                2.625, 2.625, 2.636, 2.631, 2.622, 2.623, 2.639, 2.635, 2.629, 2.629, 2.638, 2.631, 2.623, 2.627, 2.626, 2.637, 2.657,
                2.658, 2.648, 2.663, 2.67, 2.669, 2.682, 2.667, 2.664, 2.667, 2.658, 2.68, 2.641, 2.642, 2.649, 2.625, 2.607, 2.59,
                2.599, 2.608, 2.601, 2.613, 2.601, 2.607, 2.556, 2.564, 2.571, 2.571, 2.584, 2.594, 2.596, 2.615, 2.614, 2.624, 2.642,
                2.628, 2.621, 2.613, 2.598, 2.591, 2.585, 2.589, 2.574, 2.54, 2.544, 2.567, 2.597, 2.641, 2.639, 2.624, 2.637, 2.659,
                2.669, 2.685, 2.702, 2.685, 2.687, 2.697, 2.715, 2.724, 2.73, 2.755, 2.747, 2.754, 2.761, 2.767, 2.758, 2.759, 2.741,
                2.723, 2.698, 2.647, 2.656, 2.619, 2.599, 2.626, 2.625, 2.625, 2.637, 2.61, 2.62, 2.63, 2.618, 2.649, 2.628, 2.607,
                2.613, 2.62, 2.634, 2.608, 2.6, 2.593, 2.575, 2.561, 2.57, 2.579, 2.598, 2.584, 2.59, 2.58, 2.576, 2.572, 2.59, 2.578,
                2.574, 2.561, 2.581, 2.595, 2.576, 2.556, 2.604, 2.602, 2.608, 2.614, 2.597, 2.626, 2.655, 2.651, 2.656, 2.64, 2.623,
                2.607, 2.633, 2.632, 2.631, 2.647, 2.634, 2.621, 2.64, 2.642, 2.643, 2.659, 2.676, 2.662, 2.649, 2.666, 2.655, 2.644,
                2.691, 2.712, 2.734, 2.687, 2.656, 2.648, 2.649, 2.65, 2.573, 2.585, 2.562, 2.538, 2.558, 2.577, 2.601, 2.592, 2.568,
                2.586, 2.604, 2.589, 2.612, 2.634, 2.669, 2.629, 2.611, 2.594, 2.605, 2.583, 2.568, 2.576, 2.583, 2.574, 2.603, 2.615,
                2.626, 2.606, 2.622, 2.613, 2.622, 2.632, 2.61, 2.618, 2.627, 2.603, 2.575, 2.651, 2.628, 2.613, 2.599, 2.645, 2.639,
                2.652, 2.641, 2.63, 2.647, 2.604, 2.617, 2.585, 2.606, 2.627, 2.588, 2.618, 2.648, 2.623, 2.63, 2.627, 2.591, 2.608,
                2.549, 2.517, 2.486, 2.471, 2.394, 2.335, 2.315, 2.294, 2.28, 2.249],
            [4.021, 4.088, 4.156, 4.179, 4.175, 4.171, 4.367, 4.59, 4.727, 4.552, 4.383, 4.141, 4.118, 4.061, 4.006, 4.035, 4.065,
                4.043, 4.021, 4.043, 4.065, 4.058, 4.088, 4.084, 4.08, 4.118, 4.156, 4.233, 4.249, 4.264, 4.311, 4.327, 4.343, 4.383,
                4.387, 4.391, 4.391, 4.391, 4.514, 4.559, 4.604, 4.649, 4.744, 4.832, 4.788, 4.744, 4.632, 4.548, 4.465, 4.436, 4.408,
                4.375, 4.359, 4.355, 4.351, 4.424, 4.424, 4.408, 4.391, 4.408, 4.408, 4.408, 4.416, 4.404, 4.392, 4.367, 4.367, 4.355,
                4.343, 4.335, 4.327, 4.288, 4.249, 4.249, 4.249, 4.241, 4.241, 4.241, 4.288, 4.288, 4.288, 4.264, 4.249, 4.284, 4.319,
                4.357, 4.394, 4.432, 4.514, 4.59, 4.615, 4.626, 4.638, 4.649, 4.649, 4.666, 4.658, 4.649, 4.632, 4.624, 4.619, 4.615,
                4.615, 4.585, 4.556, 4.539, 4.523, 4.457, 4.436, 4.416, 4.424, 4.416, 4.408, 4.367, 4.396, 4.424, 4.465, 4.481, 4.424,
                4.375, 4.319, 4.272, 4.229, 4.186, 4.125, 4.058, 4.017, 3.976, 3.969, 3.962, 3.976, 4.006, 4.035, 4.054, 4.072, 4.114,
                4.156, 4.233, 4.24, 4.248, 4.248, 4.248, 4.209, 4.202, 4.233, 4.236, 4.24, 4.236, 4.233, 4.214, 4.196, 4.178, 4.178,
                4.178, 4.132, 4.114, 4.095, 4.072, 4.08, 4.148, 4.217, 4.327, 4.44, 4.64, 4.709, 4.7, 4.543, 4.391, 4.17, 4.072, 3.976,
                3.903, 3.825, 3.708, 3.667, 3.67, 3.674, 3.745, 3.818, 3.928, 4.042, 4.147, 4.255, 4.342, 4.393, 4.445, 4.497, 4.513,
                4.555, 4.303, 4.209, 4.117, 3.961, 3.946, 3.932, 3.867, 3.811, 3.776, 3.811, 3.821, 3.832, 4.042, 4.212, 4.39, 4.491,
                4.594, 4.699, 4.929, 5.058, 5.189, 5.257, 5.295, 5.295, 5.295, 5.295, 5.218, 5.18, 5.17, 5.104, 5.044, 4.984, 4.938,
                4.893, 4.813, 4.682, 4.554, 4.402, 4.255, 4.079, 4.012, 3.946, 3.95, 3.953, 3.982, 3.99, 4.012, 3.997, 4.027, 4.056,
                4.027, 4.004, 4.038, 4.071, 4.094, 4.116, 4.139, 4.223, 4.255, 4.286, 4.31, 4.262, 4.286, 4.333, 4.27, 4.302, 4.365,
                4.2, 4.049, 3.986, 3.924, 3.877, 3.831, 3.803, 3.775, 3.72, 3.673, 3.599, 3.583, 3.566, 3.632, 3.7, 3.755, 3.81, 3.881,
                3.956, 4.034, 4.019, 4.004, 4.033, 4.063, 4.086, 4.139, 4.116, 4.161, 4.131, 4.146, 4.116, 4.2, 4.254, 4.285, 4.349,
                4.353, 4.357, 4.365, 4.373, 4.353, 4.333, 4.361, 4.389, 4.438, 4.458, 4.479, 4.52, 4.442, 4.365, 4.301, 4.231, 4.165,
                4.1, 4.007, 3.916, 3.706, 3.559, 3.418, 3.307, 3.274, 3.241, 3.319, 3.533, 3.761, 4.68, 5.417, 6.269, 7.498, 8.97,
                10.838, 11.348, 11.881, 10.39, 9.349, 8.411, 6.797, 6.189, 5.635, 4.955, 4.785, 4.621, 4.463, 4.803, 5.437, 6.155,
                8.397, 10.507, 12.137, 14.02, 16.150999, 17.542999, 18.881001, 19.445, 20.025, 20.472, 20.927999, 22.073999, 24.511,
                29.837, 32.828999, 36.120998, 47.41, 52.549, 58.243999, 69.994003, 84.112999, 97.792999, 106.223999, 112.245003,
                110.404999, 108.596001, 105.450996, 105.259003, 105.067001, 107.806, 109.706001, 111.639, 117.968002, 122.723,
                127.669998, 144.931, 157.138, 170.373001, 180.526993, 191.287003, 203.621994, 211.636002, 201.766006, 188.158997,
                175.470993, 142.964996, 116.481003, 86.333, 77.749001, 69.123001, 64.344002, 60.115002, 56.164001, 53.104, 50.209999,
                48.799999, 47.43, 45.636002, 43.827999, 48.534, 53.745998, 66.884003, 84.932999, 95.709999, 107.852997, 127.722,
                130.091995, 132.505005, 108.855003, 95.891998, 72.258003, 59.963001, 49.759998, 29.204, 17.139999, 12.403, 6.604, 5.031,
                4.514, 4.356, 4.202, 4.141, 4.198, 4.257, 4.348, 4.441, 4.535, 4.632, 4.744, 4.793, 4.841, 4.895, 4.918, 4.94, 4.958,
                4.977, 4.949, 4.922, 4.891, 4.859, 4.882, 4.904, 4.922, 4.941, 4.945, 4.95, 4.904, 4.846, 4.789, 4.789, 4.789, 4.806,
                4.918, 5.033, 5.208, 5.39, 5.578, 5.84, 5.857, 5.873, 5.619, 5.609, 5.599, 5.432, 5.27, 5.033, 5.001, 4.969, 4.946,
                4.923, 4.901, 4.878, 4.869, 4.883, 4.896, 4.825, 4.798, 4.772, 4.694, 4.642, 4.642, 4.843, 5.052, 5.427, 5.831, 6.369,
                6.956, 7.612, 8.329, 9.403, 10.327, 10.873, 10.685, 10.5, 10.404, 10.309, 10.233, 10.471, 10.715, 11.014, 11.106,
                11.198, 11.219, 11.127, 11.035, 10.52, 9.775, 9.518, 9.267, 8.958, 8.658, 8.446, 8.24, 8.135, 8.107, 8.742, 9.222,
                10.299, 11.354, 12.132, 12.963, 13.45, 14.085, 14.269, 12.756, 11.876, 11.427, 10.995, 10.561, 10.581, 10.602, 10.92,
                11.248, 11.468, 11.693, 12.021, 12.291, 12.384, 12.592, 13.319, 14.088, 15.676, 16.339001, 17.031, 18.031, 18.709,
                19.846001, 20.478001, 20.33, 20.183001, 21.058001, 22.031, 23.048, 24.538, 24.972, 25.414, 25.464001, 25.514, 24.733999,
                24.532, 24.332001, 24.379999, 25.204, 27.381001, 29.912001, 30.638, 29.615999, 28.629, 25.502001, 22.509001, 20.952999,
                19.504999, 16.563999, 15.001, 14.132, 13.314, 12.486, 12.17, 12.105, 11.908, 11.229, 10.667, 10.6, 10.532, 10.098,
                10.044, 10.232, 9.918, 9.919, 9.92, 9.976, 9.959, 9.707, 9.461, 9.087, 8.777, 8.57, 8.369, 8.339, 8.31, 8.197, 8.085,
                7.801, 7.528, 7.138, 7.002, 6.869, 6.708, 6.55, 6.396, 6.177, 6.077, 6.011, 5.946, 5.87, 5.796, 5.818, 5.84, 5.9, 5.96,
                6.105, 6.106, 6.22, 6.49, 6.617, 6.746, 6.86, 6.565, 6.505, 6.446, 6.306, 6.227, 6.204, 6.24, 6.043, 5.852, 5.799,
                5.951, 6.43, 7.037, 7.729, 8.259, 8.745, 8.974, 9.26, 9.652, 10.061, 10.672, 11.032, 11.095, 11.069, 11.042, 11.016,
                10.582, 10.399, 10.22, 9.393, 8.664, 8.17, 7.592, 7.139, 6.713, 6.284, 5.904, 5.608, 5.487, 5.482, 5.478, 5.478, 5.479,
                5.43, 5.42, 5.411, 5.416, 5.422, 5.408, 5.393, 5.354, 5.326, 5.317, 5.327, 5.338, 5.284, 5.232, 5.185, 5.653, 6.093,
                6.566, 7.077, 8.028, 9.106, 10.378, 11.421, 12.992, 13.869, 14.806, 15.476, 16.174999, 18.032, 16.632999, 15.655,
                15.175, 14.846, 14.793, 14.485, 14.183, 13.876, 13.827, 13.651, 13.478, 12.593, 12.297, 12.109, 11.923, 11.515, 11.37,
                11.227, 11.294, 11.536, 11.783, 12.028, 11.447, 11.178, 10.916, 10.74, 10.842, 11.024, 11.107, 10.909, 10.714, 10.521,
                10.504, 10.219, 9.942, 9.309, 8.972, 8.763, 8.559, 8.568, 8.576, 8.421, 8.203, 7.989, 7.731, 7.653, 7.576, 7.664, 7.044,
                6.98, 6.917, 6.933, 7.128, 7.11, 7.091, 6.876, 6.824, 6.889, 6.955, 6.632, 6.554, 6.477, 6.313, 6.154, 5.979, 6.035,
                6.091, 6.217, 6.345, 6.487, 6.632, 6.808, 6.636, 6.469, 6.387, 6.307, 6.103, 6.005, 6.062, 6.537, 7.049, 7.983, 9.04,
                10.302, 11.196, 12.317, 13.264, 14.813, 15.541, 16.302999, 17.077, 16.492001, 16.316, 17.202999, 18.139, 19.125, 20.701,
                22.003, 20.862, 19.778999, 18.687, 17.653999, 16.497999, 16.111, 16.174999, 16.076, 15.977, 14.767, 14.053, 13.401,
                13.206, 13.014, 11.769, 11.127, 10.521, 9.236, 8.078, 7.451, 6.873, 6.012, 5.796, 5.587, 5.548, 5.508, 5.499, 5.552,
                5.639, 5.728, 5.836, 5.946, 6.024, 6.081, 5.885, 5.864, 5.822, 5.625, 5.554, 5.484, 5.465, 5.445, 5.437, 5.428, 5.442,
                5.457, 5.471, 5.568, 5.667, 5.658, 5.65, 5.639, 5.629, 5.735, 5.92, 5.954, 5.988, 5.989, 5.991, 5.893, 5.797, 5.672,
                5.62, 5.54, 5.46, 5.298, 5.141, 5.068, 4.995, 4.932, 4.87, 4.789, 4.769, 4.748, 4.74, 4.767, 4.759, 4.683, 4.607, 4.515,
                4.449, 4.418, 4.386, 4.34, 4.317, 4.362, 4.407, 4.438, 4.468, 4.499, 4.52, 4.542, 4.544, 4.511, 4.504, 4.475, 4.445,
                4.416, 4.344, 4.273, 4.235, 4.198, 4.17, 4.158, 4.146, 4.151, 4.156, 4.165, 4.174, 4.261, 4.348, 4.441, 4.537, 4.712,
                4.895, 4.596, 4.315, 4.302, 4.296, 4.29, 4.324, 4.648, 4.832, 5.024, 5.322, 5.325, 5.308, 5.295, 5.283, 5.132, 4.932,
                4.853, 4.833, 4.812, 4.772, 4.804, 4.837, 4.976, 5.006, 4.961, 4.917, 4.623, 4.329, 4.221, 4.242, 4.263, 4.313, 4.205,
                4.1, 3.998, 3.82, 3.79, 3.76, 3.749, 3.785, 3.889, 3.996, 4.384, 4.669, 4.74, 4.811, 4.939, 5.213, 5.322, 5.354, 5.298,
                5.271, 5.243, 5.17, 5.089, 5.081, 5.073, 5.219, 5.432, 5.653, 5.934, 6.007, 6.081, 5.898, 5.894, 5.891, 5.949, 6.019,
                6.054, 5.807, 5.788, 5.768, 6.021, 6.192, 6.082, 5.941, 5.994, 6.047, 6.044, 6.04, 6.011, 6.041, 6.071, 5.991, 5.913,
                5.77, 5.632, 5.562, 5.493, 5.496, 5.59, 5.686, 5.995, 6.32, 6.844, 7.289, 7.764, 8.778, 9.923, 11.395, 13.257, 16.122,
                14.604, 12.707, 11.593, 10.577, 8.741, 7.947, 7.081, 6.344, 5.717, 5.563, 5.413, 5.239, 5.071, 4.909, 4.76, 4.65, 4.585,
                4.758, 4.939, 5.438, 5.686, 5.946, 6.217, 6.446, 6.684, 6.825, 6.854, 6.926, 6.999, 7.664, 8.252, 8.885, 11.068, 11.808,
                12.596, 13.394, 13.622, 13.187, 13, 12.794, 12.977, 13.162, 13.662, 13.657, 13.651, 12.253, 11.568, 10.922, 10.512,
                10.118, 9.777, 10.214, 10.67, 11.115, 11.579, 12.073, 12.588, 13.411, 13.896, 13.977, 14.058, 14.013, 13.415, 12.446,
                11.318, 10.272, 9.741, 8.855, 7.069, 6.785, 6.512, 6.212, 6.152, 6.093, 5.978, 5.866, 5.805, 5.883, 5.963, 5.987, 6.012,
                5.998, 5.983, 5.975, 5.946, 5.938, 5.931, 5.878, 5.826, 5.84, 5.854, 5.846, 5.753, 5.697, 5.642, 5.523, 5.469, 5.416,
                5.378, 5.32, 5.263, 5.216, 5.199, 5.209, 5.22, 5.183, 5.243, 5.249, 5.254, 5.251, 5.247, 5.144, 5.164, 5.214, 5.158,
                5.107, 5.057, 5.021, 5.032, 5.024, 5.015, 4.925, 4.868, 4.811, 4.708, 4.666, 4.646, 4.626, 4.661, 4.696, 4.706, 4.664,
                4.622, 4.539, 4.458, 4.41, 4.363, 4.336, 4.309, 4.24, 4.186, 4.134, 4.074, 4.069, 4.081, 4.093, 4.072, 4.065, 4.059,
                4.083, 4.209, 4.34, 4.698, 5.086, 6.229, 6.663, 7.127, 8.229, 8.876, 8.653, 8.243, 7.852, 7.06, 6.683, 6.131, 5.782,
                5.453, 5.267, 5.087, 4.9, 4.72, 4.652, 4.585, 4.381, 4.342, 4.303, 4.277, 4.25, 4.8, 5.406, 6.088, 7.922, 9.9, 12.37,
                15.658, 23.603001, 37.327999, 50.393002, 54.251999, 48.508999, 45.703999, 43.061001, 43.869999, 45.860001, 42.382,
                36.058998, 29.084999, 24.382999, 21.128, 14.312, 13.021, 11.847, 10.285, 9.576, 8.641, 7.769, 7.49, 7.22, 7.052, 6.925,
                6.94, 6.942, 6.943, 6.945, 6.833, 6.625, 6.388, 6.181, 5.959, 5.745, 5.636, 5.53, 5.303, 5.217, 5.132, 5.022, 4.977,
                4.933, 4.783, 4.717, 4.651, 4.587, 4.488, 4.515, 4.545, 4.575, 4.636, 4.612, 4.592, 4.571, 4.615, 4.651, 4.66, 4.67,
                4.628, 4.587, 4.466, 4.349, 4.234, 4.116, 4.002, 3.951, 3.902, 3.776, 3.735, 3.83, 3.927, 4.346, 4.81, 6.168, 7.141,
                8.266, 11.159, 12.788, 14.655, 20.041, 25.041, 29.445999, 31.879999, 31.827999, 28.351999, 18.445, 15.735, 13.423,
                8.861, 6.046, 4.986, 4.689, 4.41, 4.194, 3.988, 3.713, 3.657, 3.601, 3.569, 3.537, 3.545, 3.568, 3.592, 3.647, 3.654,
                3.615, 3.599, 3.583, 3.844, 3.895, 3.924, 3.954, 3.986, 4.189, 4.451, 4.765, 5.1, 6.129, 6.738, 7.407, 8.565, 9.476,
                10.18, 10.562, 9.511, 8.805, 8.151, 7.721, 7.313, 6.845, 6.502, 6.472, 6.443, 6.526, 6.575, 6.623, 6.74, 6.859, 6.878,
                6.897, 6.884, 6.872, 6.784, 6.655, 6.528, 6.432, 6.339, 6.212, 6.218, 6.223, 6.241, 6.258, 6.304, 6.351, 6.422, 6.481,
                6.469, 6.457, 6.34, 6.317, 6.294, 6.294, 6.294, 6.306, 6.259, 6.185, 6.112, 6.078, 6.056, 6.034, 5.968, 5.838, 5.763,
                5.753, 5.742, 5.607, 5.505, 5.404, 5.306, 5.077, 4.985, 4.894, 4.827, 4.761, 4.712, 4.663, 4.615, 4.564, 4.481, 4.399,
                4.304, 4.323, 4.343, 4.465, 4.515, 4.565, 4.667, 4.344, 4.195, 4.051, 3.999, 3.897, 3.865, 3.833, 3.764, 3.695, 3.716,
                3.736, 3.806, 3.876, 3.963, 3.992, 4.007, 4.022, 3.934, 3.855, 3.827, 3.764, 3.744, 3.758, 3.772, 4.282, 4.861, 5.519,
                6.549, 7.77, 13.442, 16.731001, 18.735001, 20.979, 11.776, 9.349, 7.422, 6.307, 5.36, 4.61, 3.964, 3.486, 3.185, 3.093,
                3.099, 3.406, 3.743, 4.113, 4.953, 5.964, 8.907, 11.544, 14.962, 20.969, 29.388, 58.255001, 92.947998, 87.476997,
                86.998001, 78.485001, 71.067001, 63.41, 51.796001, 46.002998, 40.856998, 25.655001, 13.828, 10.788, 8.541, 7.833, 7.119,
                7.537, 8.233, 8.862, 9.11, 8.068, 6.294, 5.189, 4.63, 4.131, 3.625, 3.393, 3.325, 3.337, 3.349, 3.362, 3.405, 3.45,
                3.494, 3.54, 3.592, 3.646, 3.686, 3.669, 3.652, 3.606, 3.534, 3.527, 3.673, 3.825, 4.079, 4.35, 4.502, 4.66, 4.823,
                5.022, 5.23, 5.436, 5.431, 5.426, 5.278, 5.211, 5.288, 5.135, 5.116, 5.097, 5.787, 6.546, 7.404, 9.421, 12.346, 14.568,
                19.695999, 25.621, 33.636002, 40.574001, 38.962002, 37.415001, 33.687, 31.466999, 30.919001, 30.381001, 36.782001,
                42.143002, 43.921001, 45.773998, 51.487, 53.806, 54.699001, 54.394001, 48.616001, 43.213001, 26.101999, 12.619, 10.231,
                8.295, 5.103, 4.737, 4.396, 3.794, 3.584, 3.36, 3.341, 3.323, 3.322, 3.292, 3.261, 3.246, 3.231, 3.216, 3.201, 3.154,
                3.123, 3.092, 3.062, 3.045, 3.005, 3.005, 3.005, 3.005, 2.96, 2.955, 3.177, 3.416, 3.822, 4.275, 6.514, 7.643, 9.119,
                10.879, 17.775, 20.143, 22.825001, 27.990999, 25.482, 24.357, 23.283001, 23.024, 22.938, 22.851999, 22.767, 22.267,
                21.459999, 20.532, 20.046, 19.570999, 18.382, 19.139999, 19.91, 20.712, 22.746, 24.167, 25.677, 27.941999, 30.740999,
                31.024, 28.348, 21.67, 17.030001, 13.961, 9.162, 5.276, 4.378, 3.632, 3.147, 2.782, 2.637, 2.5, 2.488, 2.477, 2.449,
                2.545, 2.755, 2.981, 3.226, 3.504, 3.806, 4.074, 4.36, 4.891, 5.486, 6.332, 7.308, 8.814, 10.929, 12.942, 14.45, 13.826,
                11.609, 9.5, 5.878, 4.396, 3.78, 3.293, 3.239, 3.185, 3.209, 3.256, 3.334, 3.356, 3.377, 3.402, 3.458, 3.597, 3.742,
                3.94, 4.094, 4.259, 4.43, 4.884, 5.383, 5.793, 6.235, 7.039, 7.506, 6.279, 5.717, 5.205, 4.166, 3.697, 3.482, 3.28,
                3.092, 3.008, 2.972, 2.936, 2.92, 2.99, 3.071, 3.154, 3.194, 3.235, 3.17, 3.141, 3.193, 3.187, 3.181, 3.175, 3.14,
                3.105, 3.085, 3.065, 3.085, 3.104, 3.098, 3.092, 3.089, 3.086, 3.086, 3.086, 3.086, 3.051, 3.068, 3.059, 3.051, 2.992,
                2.935, 2.876, 2.818, 2.813, 2.936, 3.066, 3.248, 3.442, 3.718, 4.016, 4.224, 4.442, 4.667, 4.771, 4.823, 4.718, 4.493,
                4.278, 4.101, 3.931, 3.803, 3.679, 3.578, 3.657, 3.759, 3.864, 3.913, 3.964, 4.015, 4.242, 4.4, 4.527, 4.657, 4.73,
                4.804, 4.974, 5.037, 5.06, 5.083, 5.05, 5.017, 5.044, 5.068, 5.093, 5.117, 5.097, 5.055, 5.013, 4.912, 4.691, 4.294,
                4.239, 4.309, 4.413, 4.336, 4.26, 3.907, 3.65, 3.609, 3.69, 3.772, 4.044, 4.145, 4.249, 4.391, 4.435, 4.48, 5.057,
                5.353, 5.697, 5.976, 5.791, 5.535, 5.291, 5.128, 4.97, 4.507, 4.409, 4.478, 4.548, 4.644, 4.743, 5.085, 5.189, 5.179,
                5.14, 5, 4.775, 4.395, 3.857, 3.643, 3.441, 3.28, 3.132, 3.052, 2.974, 2.763, 2.619, 2.581, 2.576, 2.638, 2.701, 2.986,
                3.3, 3.865, 4.907, 5.489, 5.853, 5.95, 5.777, 5.609, 5.273, 4.958, 4.67, 4.399, 3.982, 3.826, 3.677, 3.533, 3.24, 3.099,
                2.965, 2.871, 2.78, 2.711, 2.645, 2.608, 2.572, 2.456, 2.379, 2.304, 2.232, 2.195, 2.159, 2.15, 2.166, 2.222, 2.293,
                2.467, 2.672, 2.895, 3.384, 3.855, 4.806, 7.025, 10.268, 12.661, 14.531, 16.224001, 16.889999, 14.904, 10.983, 8.568,
                6.647, 6.209, 5.8, 5.261, 5.62, 5.895, 6.183, 6.581, 5.942, 5.365, 4.589, 3.639, 3.431, 3.234, 3.049, 2.982, 2.952,
                2.922, 2.853, 2.785, 2.731, 2.679, 2.683, 2.723, 2.763, 3.339, 3.867, 4.128, 4.406, 4.874, 5.079, 5.293, 5.511, 5.893,
                6.301, 6.548, 6.806, 7.543, 7.948, 8.374, 8.767, 8.946, 8.765, 8.91, 9.059, 9.58, 10.131, 11.778, 13.543, 15.573,
                18.542999, 22.08, 28.452999, 26.096001, 23.933001, 16.235001, 11.767, 7.513, 6.361, 5.386, 4.85, 4.424, 5.269, 6.275,
                8.021, 10.253, 13.118, 16.707001, 21.278, 33.327, 51.912998, 38.681999, 28.875999, 22.905001, 13.84, 10.877, 8.788,
                8.016, 7.489, 7.517, 8.076, 8.472, 8.838, 7.7, 7.24, 6.808, 6.198, 5.991, 5.791, 5.706, 5.813, 5.888, 5.964, 6.086,
                6.211, 6.234, 5.803, 5.426, 5.074, 4.727, 4.404, 4.13, 4.04, 4.104, 4.168, 4.437, 4.512, 4.389, 4.27, 4.173, 4.078,
                4.123, 4.924, 5.88, 6.732, 7.706, 9.469, 12.295, 14.218, 15.702, 17.341999, 20.464001, 20.882999, 22.559999, 24.194,
                25.756001, 21.509001, 18.533001, 12.689, 9.666, 5.84, 4.343, 3.464, 3.057, 2.92, 2.856, 2.84, 2.872, 3.086, 3.315,
                3.575, 3.855, 4.226, 4.633, 5.478, 6.173, 5.652, 5.175, 4.729, 4.196, 4, 3.814, 3.582, 3.466, 3.508, 3.55, 3.623, 3.633,
                3.643, 3.603, 3.563, 3.524, 3.524, 3.525, 3.561, 3.597, 3.639, 3.682, 3.725, 3.711, 3.737, 3.762, 3.788, 3.809, 3.83,
                3.879, 3.865, 3.851, 3.873, 3.894, 3.901, 3.905, 3.909, 3.938, 3.967, 4.004, 4.041, 4.022, 4.004, 4.011, 4.012, 4.012,
                4.012, 4.064, 4.139, 4.216, 4.295, 4.401, 4.511, 4.623, 4.779, 4.841, 4.903, 4.77, 4.343, 3.969, 3.893, 3.819, 3.735,
                3.801, 3.868, 4.021, 4.111, 4.304, 4.507, 4.737, 4.978, 5.478, 5.907, 6.208, 6.694, 7.1, 7.531, 7.857, 8.196, 9.409,
                9.619, 9.744, 9.834, 9.567, 9.196, 8.84, 8.529, 8.228, 7.946, 7.673, 7.582, 7.492, 7.493, 7.493, 7.431, 7.37, 7.285,
                7.201, 7.117, 6.924, 6.699, 6.281, 5.944, 5.625, 5.274, 5.14, 5.01, 5.019, 4.901, 4.659, 4.429, 4.165, 3.916, 3.613,
                3.609, 3.606, 3.732, 3.861, 4.073, 4.119, 4.165, 4.254, 4.346, 4.346, 4.347, 4.444, 4.544, 4.758, 5.01, 5.198, 5.394,
                5.887, 6.425, 7.336, 8.376, 9.294, 10.313, 14.685, 17.784, 21.537001, 33.07, 42.556999, 46.320999, 48.151001, 48.334999,
                45.619999, 43.056999, 41.581001, 40.155998, 38.214001, 38.148998, 40.096001, 42.141998, 49.835999, 52.330002, 54.949001,
                60.141998, 53.171001, 37.765999, 35.25, 32.902, 30.179001, 28.669001, 27.559, 26.493, 26.301001, 26.695999, 26.6,
                26.504, 26.048, 25.599001, 26.832001, 28.124001, 29.697001, 31.357, 33.081001, 32.422001, 28.245001, 26.486, 25.066,
                25.393999, 25.584, 24.212999, 22.915001, 22.292999, 21.688999, 20.658001, 19.676001, 19.177999, 19.285999, 19.393999,
                19.719999, 19.868999, 19.365999, 20.003, 20.66, 21.065001, 21.476999, 22.368, 19.959, 18.819, 17.743999, 17.198999,
                17.073999, 17.028999, 16.983, 17.396999, 16.662001, 15.958, 14.799, 13.624, 15.5, 16.686001, 17.962999, 20.287001,
                22.910999, 30.26, 39.091, 50.5, 57.771999, 66.092003, 69.346001, 67.650002, 65.996002, 67.480003, 69.443001, 71.463997,
                72.936996, 69.855003, 66.903, 66.356003, 65.815002, 66.925003, 68.054001, 68.567001, 63.997002, 59.733002, 56.009998,
                43.363998, 32.004002, 16.986, 12.216, 7.652, 6.158, 5.7, 6.239, 7.152, 7.678, 8.242, 10.928, 14.648, 23.605, 34.662998,
                50.902, 60.978001, 73.047997, 75.656998, 94.569, 113.088997, 116.803001, 120.639, 85.496002, 49.93, 21.917999, 16.354,
                10.746, 8.258, 6.512, 6, 5.528, 5.26, 5.372, 5.485, 5.602, 5.906, 6.227, 6.565, 7.273, 8.057, 8.501, 8.848, 9.209,
                9.585, 8.913, 8.288, 6.793, 5.506, 4.931, 4.415, 3.86, 3.673, 3.495, 3.325, 3.256, 3.188, 3.156, 3.125, 3.134, 3.143,
                3.18, 3.217, 3.255, 3.359, 3.486, 3.617, 3.834, 4.063, 4.25, 4.445, 4.649, 5.113, 5.623, 6.445, 6.884, 7.352, 7.852,
                8.369, 8.919, 9.272, 9.533, 9.801, 10.246, 10.71, 11.196, 11.406, 11.491, 11.577, 12.17, 12.792, 13.608, 14.476, 15.964,
                17.966, 15.165, 12.991, 9.691, 7.556, 5.585, 5.029, 4.527, 3.717, 3.453, 3.412, 3.372, 3.427, 3.482, 3.538, 3.627,
                3.718, 3.81, 3.936, 4.066, 4.111, 4.157, 4.104, 4.052, 3.987, 3.924, 3.861, 3.8, 3.766, 3.759, 3.787, 3.815, 3.809,
                3.909, 4.011, 4.094, 4.178, 4.296, 4.352, 4.265, 4.254, 4.243, 4.251, 4.259, 4.564, 4.892, 5.18, 5.486, 5.928, 6.039,
                6.152, 5.611, 5.413, 5.222, 4.824, 4.532, 4.812, 5.11, 5.507, 5.934, 6.227, 6.533, 6.842, 6.922, 7.003, 7.085, 7.168,
                7.181, 7.158, 7.168, 7.177],
            [6.702, 6.343, 6.002, 6.331, 6.478, 6.629, 5.958, 6.52, 7.135, 8.295, 7.375, 6.556, 5.871, 5.258, 5.465, 5.68, 6.002, 6.058,
                6.114, 5.975, 5.839, 5.92, 6.002, 6.058, 6.002, 5.948, 6.058, 6.182, 6.308, 6.25, 6.378, 6.508, 6.593, 6.678, 6.472,
                6.52, 6.568, 6.366, 6.437, 6.508, 6.58, 7.174, 7.395, 7.623, 7.321, 7.031, 6.771, 6.52, 6.331, 6.279, 6.227, 6.256,
                6.285, 6.103, 6.125, 6.148, 6.171, 6.193, 6.25, 6.165, 6.08, 6.114, 6.216, 6.165, 6.114, 6.205, 6.103, 6.003, 6.064,
                6.125, 6.228, 6.075, 5.926, 5.953, 5.981, 6.069, 6.159, 6.297, 6.047, 6.014, 5.981, 6.069, 6.125, 6.182, 6.081, 6.171,
                6.262, 6.402, 6.367, 6.332, 6.533, 6.636, 6.74, 6.715, 6.654, 6.593, 6.593, 6.593, 6.648, 6.703, 6.63, 6.557, 6.599,
                6.642, 6.605, 6.569, 6.493, 6.418, 6.343, 6.234, 6.126, 6.075, 6.025, 6.228, 6.234, 6.239, 6.251, 6.426, 6.557, 6.39,
                6.228, 5.948, 5.97, 6.058, 5.986, 5.915, 5.899, 5.882, 5.926, 5.91, 5.893, 5.829, 5.765, 5.98, 6.025, 6.069, 6.041,
                6.013, 6.125, 6.199, 6.273, 6.199, 6.125, 6.063, 6.002, 6.058, 6.114, 6.273, 6.215, 6.159, 6.063, 5.969, 5.936, 5.893,
                5.849, 5.86, 5.911, 5.962, 6.013, 6.002, 6.002, 6.002, 6.342, 6.702, 7.069, 7.456, 7.907, 7.476, 7.068, 6.471, 6.013,
                5.648, 5.566, 5.569, 5.573, 5.576, 5.566, 5.454, 5.586, 5.721, 5.892, 5.979, 6.012, 5.924, 5.838, 5.979, 6.124, 6.376,
                6.639, 6.901, 7.172, 6.901, 6.639, 5.946, 5.679, 5.668, 5.658, 5.555, 5.57, 5.586, 5.394, 5.596, 5.805, 6.306, 6.663,
                6.768, 6.875, 7.278, 7.705, 7.891, 8.082, 8.247, 8.037, 7.934, 7.978, 8.022, 7.662, 7.467, 7.324, 7.184, 7.047, 6.912,
                6.818, 6.724, 6.712, 6.7, 6.663, 6.626, 6.387, 5.902, 5.694, 5.493, 5.493, 5.704, 5.923, 6.457, 6.033, 5.961, 5.89,
                5.967, 6.066, 5.874, 5.688, 5.585, 5.72, 5.826, 5.725, 5.626, 5.912, 6.088, 5.842, 5.605, 5.473, 5.256, 5.463, 5.651,
                5.847, 5.564, 5.294, 5.01, 5.052, 5.094, 5.169, 5.141, 5.038, 5.001, 5.015, 5.029, 4.955, 4.883, 5.044, 5.211, 5.382,
                5.569, 5.761, 5.906, 6.054, 6.189, 5.857, 5.543, 5.543, 5.543, 5.543, 5.666, 5.793, 5.987, 6.065, 6.143, 6.2, 6.246,
                6.113, 5.984, 5.857, 5.911, 5.965, 6.031, 6.098, 6.177, 6.257, 6.338, 6.121, 6.076, 6.031, 6.2, 6.373, 5.814, 5.676,
                5.542, 5.537, 5.532, 5.578, 5.624, 5.666, 5.074, 5, 4.927, 4.968, 5.01, 5.121, 5.236, 6.385, 8.344, 10.905, 14.251,
                22.313, 29.448, 27.160999, 25.052, 22.334, 19.910999, 15.424, 12.812, 10.642, 9.915, 9.238, 10.034, 9.213, 8.458, 7.961,
                7.617, 9.298, 11.349, 50.088001, 103.690002, 214.654999, 104.169998, 50.553001, 31.41, 27.066999, 35.919998, 39.959999,
                44.453999, 51.164001, 58.886002, 68.461998, 53.325001, 69.862, 91.528, 132.177994, 141.218002, 136.876999, 132.667999,
                144.373001, 156.244995, 164.949005, 174.139008, 186.391998, 167.860001, 152.007004, 143.328003, 150.528, 158.089996,
                166.031006, 175.764999, 186.070999, 197.343002, 187.104996, 180.686996, 211.429001, 247.401993, 285.535004, 311.579987,
                340.002014, 328.34201, 297.602997, 269.740997, 229.470001, 198.102005, 139.723007, 102.047997, 74.531998, 70.794998,
                75.917, 81.407997, 94.649002, 86.181999, 78.473, 72.512001, 75.227997, 64.349998, 58.917999, 78.334, 104.149002,
                139.108994, 185.804993, 210.925995, 192.235001, 175.201004, 164.895996, 148.772003, 140.020004, 134.968994, 129.623001,
                109.060997, 68.637001, 45.310001, 28.830999, 18.346001, 8.557, 5.743, 5.759, 5.775, 5.882, 5.991, 6.181, 6.047, 6.532,
                6.629, 6.727, 6.653, 6.58, 6.733, 6.89, 6.985, 7.082, 7.031, 7.109, 7.115, 7.122, 7.096, 7.052, 7.009, 6.967, 6.74,
                6.84, 6.941, 7.044, 7.109, 7.122, 7.135, 6.84, 6.784, 6.728, 6.865, 7.006, 6.667, 6.588, 6.509, 7.437, 8.497, 10.478,
                8.389, 7.801, 7.255, 7.809, 7.954, 8.101, 7.709, 7.336, 7.349, 7.424, 7.5, 7.329, 7.163, 7.137, 7.111, 7.119, 7.128,
                7.137, 7.02, 6.917, 6.817, 6.717, 6.333, 7.404, 7.696, 7.999, 10.714, 12.241, 13.986, 14.643, 13.706, 17.056999,
                18.325001, 20.274, 17.502001, 15.109, 13.067, 12.458, 13.557, 14.753, 16.055, 17.375, 18.632, 17.375, 16.202999, 15.11,
                15.152, 15.194, 13.633, 12.459, 12.62, 11.619, 11.728, 11.87, 12.014, 10.761, 10.213, 9.693, 12.064, 15.015, 25.826,
                44.421001, 30.200001, 20.532, 23.375, 26.611, 18.027, 15.085, 13.387, 14.786, 16.330999, 18.271999, 18.274, 18.059,
                17.846001, 18.347, 18.399, 18.452, 19.323, 18.122, 17.958, 17.795, 25.611, 29.454, 33.873001, 38.669998, 32.240002,
                26.879, 29.201, 31.606001, 30.301001, 31.353001, 32.441002, 34.476002, 38.077, 42.054001, 47.312, 38.872002, 36.924999,
                35.075001, 33.321999, 31.162001, 29.142, 27.684999, 34.049, 41.875999, 56.41, 51.037998, 46.178001, 38.252998, 31.687,
                24.410999, 24.013, 23.621, 20.393, 17.381001, 15.712, 15.258, 14.575, 15.46, 16.489, 17.586, 14.263, 12.87, 13.014,
                13.159, 11.896, 12.828, 13.834, 15.506, 13.411, 12.508, 13.003, 12.466, 12.24, 12.018, 12.176, 11.366, 10.61, 10.399,
                10.77, 11.093, 10.538, 10.01, 9.793, 9.58, 9.261, 8.952, 9.069, 8.671, 8.29, 7.933, 7.591, 7.564, 7.678, 7.75, 7.644,
                7.54, 7.681, 7.977, 8.285, 8.877, 9.511, 8.821, 8.182, 8.783, 9.428, 11.066, 10.179, 9.363, 8.684, 8.159, 8.071, 8.704,
                9.386, 10.122, 9.138, 8.251, 7.449, 8.514, 9.732, 11.124, 14.026, 17.684, 20.264, 17.548, 15.196, 13.159, 18.157,
                20.577, 23.319, 20.886, 21.277, 19.023001, 17.007, 15.373, 16.038, 16.733, 13.746, 12.633, 11.609, 10.285, 9.495, 8.766,
                7.499, 7.702, 7.911, 7.854, 7.914, 7.958, 8.003, 7.701, 7.41, 7.356, 7.303, 7.399, 7.495, 7.441, 7.388, 7.135, 7.296,
                7.493, 7.697, 7.964, 8.24, 7.763, 7.313, 7.234, 9.351, 12.086, 15.155, 19.003, 22.632, 24.632999, 22.596001, 20.726999,
                20.094, 24.827999, 30.679001, 35.185001, 40.354, 27.584, 18.855, 19.545, 20.261, 21.353001, 22.504, 20.643999, 18.799,
                19.631001, 20.5, 17.535999, 15.795, 16.181, 16.666, 17.165001, 15.098, 14.662, 14.238, 16.200001, 17.487, 18.875999,
                17.002001, 15.315, 14.026, 13.707, 13.396, 13.206, 14.586, 17.598, 14.46, 13.561, 12.718, 15.485, 14.037, 12.724,
                11.007, 10.323, 11.134, 11.384, 11.639, 11.24, 11.233, 11.227, 9.605, 9.607, 9.609, 10.266, 10.774, 9.883, 9.065, 8.597,
                8.744, 9.605, 10.55, 11.57, 9.989, 8.624, 8.947, 9.624, 10.351, 9.39, 8.381, 8.532, 8.686, 7.951, 8.214, 8.485, 8.315,
                9.538, 10.941, 12.381, 10.776, 9.379, 8.401, 8.529, 8.744, 8.965, 7.858, 8.085, 8.319, 11.848, 14.188, 25.749001,
                46.733002, 51.617001, 33.761002, 26.489, 20.783001, 24.573999, 24.872, 25.174999, 26.223, 25.006001, 23.844999,
                29.572001, 36.674, 51.924999, 42.901001, 40.757, 38.719002, 29.009001, 22.479, 20.882, 25.719, 27.455, 29.309999,
                32.553001, 27.389999, 23.047001, 18.865, 15.442, 17.504999, 19.841999, 17.954, 16.245001, 13.175, 11.51, 10.056, 8.418,
                7.609, 7.597, 7.585, 7.413, 7.245, 7.588, 7.682, 7.777, 7.974, 8.175, 8.607, 8.849, 8.12, 7.951, 7.786, 7.992, 8.082,
                7.484, 7.457, 7.431, 7.605, 7.783, 7.886, 7.989, 7.964, 7.914, 7.864, 7.895, 7.667, 7.634, 7.6, 7.945, 8.181, 8.123,
                8.651, 9.094, 8.482, 8.139, 7.811, 7.713, 7.785, 7.858, 7.466, 7.331, 7.199, 6.776, 6.611, 6.451, 6.513, 6.478, 6.443,
                6.515, 6.541, 6.8, 7.03, 7.268, 6.847, 6.451, 5.92, 5.969, 6.019, 6.077, 6.146, 6.215, 6.199, 6.183, 6.347, 6.424,
                6.502, 6.611, 6.625, 6.638, 6.436, 6.545, 6.656, 6.576, 6.496, 6.418, 6.273, 6.132, 6.15, 6.169, 6.201, 6.233, 6.265,
                6.357, 6.538, 6.698, 6.693, 6.688, 7.484, 9.148, 9.795, 8.568, 7.496, 6.557, 6.647, 6.613, 6.579, 7.435, 8.403, 9.497,
                11.44, 9.249, 8.063, 7.89, 7.721, 7.418, 7.126, 7.17, 7.213, 7.27, 7.328, 7.338, 7.348, 7.466, 7.586, 8.036, 8.496,
                7.611, 6.819, 5.783, 5.577, 5.955, 6.36, 6.995, 7.694, 6.524, 5.77, 5.325, 5.39, 5.457, 5.664, 5.71, 6.251, 6.843,
                7.491, 9.364, 8.475, 7.67, 7.195, 7.361, 7.418, 7.476, 7.25, 7.247, 7.244, 6.972, 6.711, 6.544, 6.45, 6.358, 8.635,
                9.331, 10.083, 11.061, 11.19, 10.911, 10.561, 10.222, 11.461, 12.851, 15.143, 12.815, 10.845, 10.635, 13.293, 14.501,
                12.826, 12.539, 12.259, 11.887, 11.527, 10.723, 9.975, 9.359, 8.935, 8.53, 8.332, 8.139, 7.85, 7.961, 8.074, 8.335,
                8.604, 9.063, 9.185, 11.116, 13.453, 17.065001, 16.950001, 21.108999, 32.953999, 68.553001, 142.610992, 82.023003,
                47.174999, 20.292999, 16.841, 13.977, 11.638, 11.408, 11.184, 10.32, 9.522, 8.867, 8.256, 7.663, 7.417, 7.178, 6.897,
                6.725, 6.752, 6.78, 7.779, 8.925, 9.453, 9.536, 9.62, 10.571, 11.323, 11.496, 11.67, 11.36, 11.302, 11.245, 17.466999,
                20.674999, 24.472, 32.271999, 29.554001, 27.063999, 21.84, 20.041, 18.389999, 19.552, 19.848, 20.148001, 29.608,
                36.740002, 30.719999, 25.687, 22.101, 19.014999, 17.709999, 18.113001, 18.525999, 19.389, 20.291, 21.413, 22.021,
                21.160999, 21.584999, 22.016001, 22.48, 22.865, 21.487, 20.191, 17.700001, 17.037001, 16.399, 14.584, 13.054, 11.684,
                10.555, 9.535, 8.821, 8.16, 8.742, 9.14, 9.555, 9.066, 8.937, 8.81, 8.903, 8.997, 8.791, 8.974, 9.162, 8.983, 9.104,
                9.227, 8.889, 8.563, 8.505, 8.659, 8.816, 8.739, 8.663, 8.588, 8.443, 8.299, 8.003, 7.975, 7.948, 7.935, 7.922, 7.78,
                7.854, 7.928, 7.843, 7.759, 8.083, 8.181, 8.281, 8.391, 7.784, 7.887, 7.99, 8.463, 8.085, 7.83, 7.584, 7.698, 7.813,
                8.139, 8.126, 8.112, 7.609, 7.472, 7.337, 6.997, 6.96, 7.053, 7.146, 7.362, 7.276, 7.191, 7.179, 7.167, 6.711, 6.688,
                6.665, 6.642, 6.692, 6.894, 6.845, 6.797, 6.316, 6.531, 6.84, 6.698, 6.559, 6.684, 6.432, 6.899, 7.4, 7.938, 9.387,
                7.87, 11.165, 15.84, 29.724001, 23.900999, 19.219, 15.454, 12.373, 9.907, 9.855, 10.359, 10.888, 8.832, 8.432, 8.049,
                7.684, 7.45, 7.196, 6.95, 6.876, 6.766, 6.823, 6.882, 6.672, 6.655, 6.638, 9.348, 29.796, 61.062, 125.138, 315.164001,
                231.031006, 169.356995, 160.436005, 151.983994, 108.513, 77.474998, 55.316002, 99.761002, 179.917007, 117.125999,
                76.248001, 37.779999, 32.022999, 27.143999, 20.757999, 17.132, 14.139, 14.26, 14.381, 16.271, 12.743, 11.436, 10.262,
                9.485, 9.281, 9.657, 10.048, 10.467, 10.451, 9.748, 9.278, 8.978, 8.89, 8.802, 8.37, 7.959, 7.646, 7.598, 7.551, 7.162,
                7.171, 7.179, 7.024, 7, 6.824, 6.652, 6.617, 6.576, 6.535, 6.561, 6.897, 7.25, 7.538, 7.012, 6.522, 6.602, 6.683, 6.709,
                6.735, 7.225, 7.43, 7.106, 6.796, 6.5, 6.142, 6.121, 6.1, 6.102, 5.981, 5.862, 5.726, 5.817, 5.91, 7.906, 10.77, 17.847,
                29.573, 31.431, 27.312, 23.733, 68.723, 198.996994, 147.216995, 103.829002, 73.228996, 51.646999, 34.537998, 22.798,
                15.048, 11.001, 8.043, 7.204, 7.259, 7.314, 6.779, 6.283, 6.024, 5.776, 5.559, 5.349, 5.277, 5.206, 5.029, 5.003, 5.312,
                5.64, 6.37, 5.597, 4.918, 5.473, 5.8, 6.148, 6.488, 6.566, 6.645, 6.719, 7.113, 7.153, 8.455, 9.994, 14.043, 22.898001,
                20.907, 19.089001, 15.339, 13.826, 12.463, 11.58, 10.759, 10.257, 9.778, 9.627, 9.478, 9.707, 9.888, 10.016, 9.834,
                9.655, 9.78, 9.726, 9.709, 9.691, 10.184, 9.826, 9.48, 9.342, 9.206, 9.155, 9.072, 8.989, 9.156, 9.241, 9.326, 9.343,
                9.19, 9.182, 9.174, 9.344, 9.518, 9.518, 9.518, 9.483, 9.449, 9.414, 9.277, 9.311, 9.346, 9.329, 8.894, 8.796, 8.7,
                8.34, 8.355, 8.371, 8.542, 8.448, 8.356, 8.032, 7.721, 7.483, 7.253, 7.004, 6.962, 6.919, 6.877, 6.928, 6.979, 7.044,
                6.899, 6.757, 6.617, 6.485, 6.355, 6.234, 6.115, 6.655, 7.275, 7.954, 9.215, 6.415, 6.065, 5.734, 5.558, 6.356, 6.982,
                7.177, 6.736, 6.322, 6.218, 6.316, 6.416, 6.62, 6.608, 6.7, 6.793, 6.387, 6.006, 5.642, 5.663, 5.725, 5.616, 5.509,
                5.616, 5.726, 8.472, 15.162, 27.136999, 477.268005, 419.635986, 319.257996, 242.889999, 184.789993, 36.966999, 13.469,
                11.435, 9.709, 8.258, 8.319, 7.729, 7.181, 7.005, 6.834, 6.897, 7.356, 7.659, 12.843, 21.534, 68.861, 322.234009,
                752.377014, 796.549988, 843.317017, 855.851013, 742.179016, 643.604004, 508.145996, 401.196991, 324.726013, 272.921997,
                229.382004, 157.621002, 73.471001, 50.888, 35.247002, 24.413, 15.904, 10.361, 10.116, 12.885, 16.410999, 25.007999,
                32.414001, 42.013, 24.195, 13.934, 6.388, 5.87, 6.023, 6.192, 5.995, 5.806, 5.822, 5.838, 5.627, 5.424, 5.515, 5.607,
                5.7, 5.806, 5.844, 5.882, 5.828, 5.717, 5.607, 5.287, 5.789, 6.339, 6.942, 7.625, 8.147, 7.667, 7.889, 8.118, 8.238,
                8.618, 9.016, 9.58, 8.95, 8.392, 8.763, 9.15, 8.763, 8.392, 8.147, 9.344, 10.716, 81.373001, 183.487, 168.427994,
                154.604996, 159.651001, 164.863007, 123.259003, 91.988998, 77.874001, 65.925003, 59.466, 53.639999, 63.757999,
                73.455002, 84.626999, 118.698997, 129.886002, 142.128006, 180.505005, 178.177994, 177.503006, 188.427994, 200.024994,
                135.160995, 63.745998, 30.065001, 12.005, 7.278, 5.988, 6.104, 6.223, 5.987, 5.759, 5.581, 5.409, 5.213, 5.127, 5.043,
                4.842, 4.811, 4.78, 4.727, 4.692, 4.657, 4.601, 4.546, 4.588, 4.63, 4.661, 4.692, 4.724, 4.784, 4.705, 4.628, 4.645,
                6.142, 10.674, 18.549, 92.387001, 99.802002, 107.810997, 88.379997, 87.885002, 74.879997, 64.927002, 56.297001,
                51.250999, 46.658001, 47.695, 48.756001, 50.203999, 49.695999, 49.193001, 51.786999, 42.296001, 38.719002, 36.703999,
                34.223999, 31.912001, 40.790001, 52.137001, 71.523003, 64.874001, 62.297001, 59.823002, 64.147003, 68.785004, 77.225998,
                56.245998, 40.965, 29.836, 26.815001, 12.849, 5.837, 4.777, 4.776, 4.776, 4.776, 4.569, 4.371, 4.216, 4.066, 3.921,
                3.849, 4.463, 5.175, 6.299, 7.669, 10.405, 8.065, 6.251, 8.497, 11.551, 18.871, 30.829, 33.827, 37.116001, 36.369999,
                32.748001, 32.088001, 21.43, 14.313, 7.382, 5.866, 5.675, 5.753, 5.832, 5.908, 5.984, 5.874, 5.82, 5.766, 5.883, 5.521,
                5.182, 6.727, 7.878, 8.417, 7.819, 7.264, 7.014, 8.623, 10.6, 13.031, 20.368999, 28.671, 23.162001, 12.73, 6.997, 5.908,
                5.637, 5.378, 5.146, 4.968, 5.06, 5.154, 5.069, 4.556, 4.331, 4.117, 4.406, 4.716, 4.897, 5.085, 5.207, 5.25, 5.293,
                5.074, 4.863, 4.653, 4.614, 4.576, 4.605, 4.635, 4.638, 4.642, 4.587, 4.532, 4.577, 4.624, 4.692, 4.735, 4.778, 4.673,
                4.725, 4.777, 4.625, 4.479, 4.321, 4.168, 4.141, 4.114, 4.522, 4.971, 5.55, 6.197, 7.459, 7.853, 7.61, 7.526, 7.443,
                7.361, 7.373, 6.959, 6.569, 6.201, 5.971, 5.75, 5.44, 5.287, 5.138, 5.757, 5.929, 6.105, 6.264, 6.426, 6.593, 6.86,
                7.138, 7.427, 7.655, 7.89, 8.184, 8.289, 7.974, 7.671, 7.635, 7.6, 7.676, 7.753, 7.788, 7.823, 7.793, 7.764, 7.678,
                7.812, 7.949, 7.398, 6.886, 4.629, 5.872, 7.45, 10.294, 7.393, 6.44, 5.61, 5.353, 5.107, 5.298, 6.586, 8.189, 12.156,
                9.701, 7.742, 6.178, 8.906, 10.488, 12.238, 11.265, 10.37, 8.377, 7.927, 7.501, 7.269, 7.156, 7.044, 7.525, 8.039,
                8.278, 8.524, 8.973, 8.696, 8.428, 7.547, 7.511, 7.476, 6.483, 5.621, 4.861, 4.582, 4.616, 4.675, 4.735, 4.796, 4.551,
                4.318, 4.131, 4.402, 4.691, 5, 6.401, 8.196, 11.336, 15.68, 14.067, 12.62, 9.577, 8.544, 7.623, 7.552, 7.366, 7.185,
                6.259, 5.841, 5.452, 5.14, 4.845, 4.636, 4.435, 4.394, 4.353, 4.227, 4.104, 3.948, 3.871, 3.795, 3.721, 3.521, 3.491,
                3.462, 3.468, 3.474, 3.535, 3.597, 3.794, 4.001, 4.5, 4.906, 7.71, 11.832, 18.157, 33.057999, 36.372002, 39.285999,
                33.598, 31.299, 29.157, 24.436001, 20.695, 17.527, 14.844, 10.134, 6.919, 7.768, 7.832, 7.896, 12.502, 19.469,
                16.316999, 13.676, 9.531, 6.642, 4.629, 4.453, 4.679, 4.917, 5.272, 5.409, 4.839, 4.329, 4.096, 3.876, 3.858, 3.84,
                3.86, 4.497, 5.237, 8.247, 12.986, 20.447001, 16.143, 12.745, 9.566, 9.408, 10.63, 12.012, 15.059, 17.539, 17.25,
                16.965, 16.35, 15.758, 15.498, 15.241, 17.365, 18.247, 22.375999, 27.440001, 49.779999, 31.372999, 56.917, 103.261002,
                202.384003, 168.992996, 83.939003, 41.692001, 19.945, 9.542, 9.881, 10.636, 10.028, 9.455, 8.238, 15.422, 30.320999,
                59.617001, 117.218002, 109.514, 181.925003, 302.216003, 278.734985, 257.078003, 155.238007, 93.740997, 56.605999,
                20.364, 10.466, 11.893, 13.515, 12.743, 12.015, 15.344, 19.596001, 20.9, 14.416, 8.888, 8.167, 8.319, 8.474, 8.631,
                9.121, 8.98, 8.841, 9.675, 8.874, 8.139, 7.991, 7.846, 7.393, 6.966, 6.564, 5.847, 5.82, 5.793, 7.171, 8.067, 9.075,
                8.293, 7.578, 6.938, 6.446, 5.989, 5.668, 10.969, 17.792, 25.537001, 36.653999, 41.310001, 38.029999, 36.344002,
                34.733002, 33.193001, 38.740002, 37.896, 65.195, 105.749001, 91.873001, 79.818001, 34.826, 15.196, 10.804, 7.681, 6.07,
                5.894, 6.071, 6.252, 6.463, 6.451, 6.439, 6.15, 6.817, 7.46, 7.054, 6.669, 11.12, 19.343, 33.647999, 25.771999, 12.294,
                5.864, 5.409, 6.819, 7.293, 7.799, 7.114, 6.489, 6.478, 6.808, 6.419, 6.052, 5.748, 5.531, 5.639, 5.749, 5.665, 5.582,
                5.878, 5.916, 5.954, 5.932, 5.998, 5.922, 5.988, 6.054, 6.116, 6.178, 6.156, 6.219, 6.282, 6.207, 6.134, 6.294, 6.311,
                6.329, 6.542, 6.524, 6.507, 6.424, 6.341, 6.33, 6.4, 6.472, 6.598, 6.727, 6.556, 6.389, 6.764, 7.162, 7.582, 7.723,
                7.867, 7.583, 8.336, 9.165, 6.93, 6.391, 5.894, 6.099, 6.31, 6.487, 6.668, 7.034, 7.419, 7.488, 7.557, 8.455, 9.459,
                10.332, 10.7, 11.081, 10.362, 9.689, 12.957, 15.893, 16.950001, 18.077, 17.813999, 16.475, 15.236, 14.419, 13.645,
                13.185, 12.74, 12.31, 12.064, 11.544, 11.47, 11.396, 11.22, 11.046, 10.875, 10.706, 10.609, 10.727, 10.846, 10.522,
                10.208, 9.967, 9.732, 9.159, 8.172, 7.372, 7.06, 6.762, 8.218, 10.85, 8.481, 6.864, 5.556, 5.435, 5.629, 5.83, 6.439,
                7.468, 8.66, 10.258, 9.401, 8.615, 9.173, 9.023, 8.876, 9.192, 9.52, 10.043, 10.344, 10.383, 10.655, 10.934, 9.721,
                12.169, 18.811001, 29.077999, 44.949001, 156.240005, 141.223007, 130.735992, 131.473999, 132.216995, 104.294998,
                86.619003, 81.675003, 77.012001, 72.486, 70.844002, 69.239998, 68.489998, 64.936996, 61.569, 81.753998, 101.221001,
                109.774002, 111.008003, 105.836998, 90.105003, 76.710999, 54.230999, 38.339001, 40.075001, 45.757, 52.244999, 67.363998,
                39.873001, 37.182999, 45.995998, 56.896999, 48.797001, 41.849998, 31.875999, 38.006001, 45.313999, 56.007, 60.625999,
                57.484001, 52.145, 47.303001, 39.426998, 34.728001, 33.723999, 34.040001, 31.656, 29.438999, 33.553001, 38.242001,
                30.216999, 23.875999, 26.4, 29.191, 31.511999, 34.016998, 38.986, 31.291, 25.114, 29.48, 34.604, 49.833, 38.162998,
                28.691, 23.979, 20.041, 23.830999, 26.372999, 29.186001, 30.312, 31.481001, 41.424999, 21.868999, 17.583, 14.137,
                28.834999, 52.562, 95.811996, 82.857002, 96.462997, 112.302002, 128.710007, 103.776001, 83.672997, 90.413002, 95.209999,
                100.262001, 89.950996, 87.029999, 94.472, 102.550003, 119.722, 95.293999, 87.723, 80.752998, 79.730003, 85.525002,
                90.058998, 99.121002, 78.896004, 67.721001, 70.271004, 68.867996, 47.916, 33.338001, 16.375999, 8.044, 6.93, 12.405,
                22.492001, 40.780998, 38.241001, 49.404999, 63.827, 112.996002, 200.042007, 249.559998, 209.539993, 194.317001,
                180.199997, 214.302002, 254.858002, 340.381989, 404.031006, 244.391006, 115.903, 54.966999, 36.618999, 24.396,
                17.903999, 12.005, 8.05, 9.521, 9.942, 10.383, 9.709, 9.078, 10.502, 10.542, 11.328, 12.173, 13.058, 14.372, 14.97,
                16.476999, 18.202999, 19.962, 15.596, 13.213, 11.195, 6.647, 5.768, 5.742, 5.716, 5.53, 5.4, 5.326, 5.254, 5.139, 5.027,
                4.927, 5.028, 5.132, 5.325, 5.618, 5.629, 5.64, 6.242, 6.909, 7.309, 7.732, 8.263, 8.472, 8.686, 9.683, 11.88, 14.608,
                16.931, 16.219999, 15.539, 16.642, 18.629999, 17.490999, 16.421, 20.261, 22.68, 23.236, 23.806, 22.438, 21.148001,
                20.636999, 20.139, 19.459999, 24.976, 32.055, 53.577, 67.449997, 36.056999, 26.169001, 18.993, 16.311001, 7.765, 6.117,
                5.695, 5.922, 6.002, 5.938, 5.875, 5.91, 6.135, 6.004, 6.395, 6.823, 6.819, 6.815, 6.919, 6.924, 7.12, 7.322, 7.49,
                6.976, 6.946, 6.916, 7.024, 7.059, 7.094, 6.427, 7.361, 8.431, 7.293, 6.309, 7.519, 8.126, 8.781, 8.722, 8.695, 8.811,
                7.581, 7.099, 7.287, 7.55, 7.857, 8.176, 10.662, 13.904, 13.882, 13.071, 12.15, 12.475, 11.073, 9.828, 8.409, 7.439,
                7.239, 8.284, 10.882, 13.403, 14.3, 14.019, 13.695, 14.035, 14.131, 14.228, 14.262, 14.269],
            [-23.257757, -22.968143, -22.678526, -22.096573, -22.132607, -22.169998, -21.692064, -21.214809, -20.197752, -19.993799,
                -20.98502, -21.267157, -21.497627, -21.238604, -20.978222, -21.016972, -21.055723, -21.619999, -21.593485, -21.568331,
                -21.543177, -21.282795, -21.023092, -20.762028, -20.447937, -20.133167, -19.819077, -19.186815, -19.224209, -19.26228,
                -19.110672, -19.12291, -19.356779, -19.720499, -20.084219, -21.189653, -21.716537, -22.243422, -22.801579, -23.030008,
                -23.259119, -23.381491, -22.931431, -22.48205, -22.275375, -22.068701, -21.862026, -21.390209, -21.079519, -20.980259,
                -20.881683, -20.89596, -21.233845, -21.57173, -22.024509, -22.280134, -22.535078, -23.089155, -22.883162, -22.676487,
                -22.47389, -22.271976, -21.579889, -21.372534, -21.16518, -20.957825, -21.02445, -20.933352, -21.435759, -21.554054,
                -21.671667, -21.959244, -22.07618, -22.144165, -22.925991, -23.152382, -23.378092, -23.33662, -23.295149, -22.93075,
                -23.054483, -22.98242, -22.910355, -22.488848, -22.178156, -22.460293, -22.742432, -22.922592, -22.961344, -22.999414,
                -23.066719, -22.592184, -22.380072, -21.800159, -21.75597, -21.7111, -21.942247, -21.899418, -21.856588, -21.490147,
                -21.120989, -21.16246, -21.20393, -21.186255, -21.168579, -21.507145, -21.84639, -21.861347, -21.658072, -21.667589,
                -21.677786, -21.52754, -21.215488, -21.179457, -21.461594, -21.584648, -21.975561, -22.366474, -23.192493, -23.42704,
                -23.626236, -23.824753, -23.836309, -23.799599, -24.138165, -24.47673, -24.544035, -24.61134, -24.511402, -24.410103,
                -24.373392, -24.225185, -24.124567, -24.37883, -24.633774, -24.757507, -25.104231, -24.899597, -24.770424, -24.642612,
                -24.118448, -23.885939, -23.65411, -23.289032, -23.268637, -23.24824, -23.315546, -22.847809, -22.61054, -22.374632,
                -22.058502, -21.742373, -21.377293, -21.11759, -21.025129, -21.148184, -21.019691, -20.89052, -20.853807, -20.458136,
                -20.061783, -19.698063, -19.600843, -19.504305, -19.243923, -19.255482, -19.810238, -20.803499, -21.405848, -21.696823,
                -21.220926, -21.232485, -21.243362, -21.581926, -21.537739, -21.492868, -21.511904, -21.331062, -21.150904, -20.29973,
                -20.311287, -19.994478, -19.678347, -19.473713, -19.325504, -19.337063, -19.020252, -19.039288, -19.594046, -21.019012,
                -22.008873, -22.998055, -24.096012, -24.595024, -24.989336, -24.465851, -24.036865, -23.401207, -22.730194, -22.058502,
                -21.366415, -20.834093, -20.630136, -20.154243, -19.949608, -19.768766, -19.588608, -19.655912, -19.93873, -20.557394,
                -21.214809, -21.777723, -22.331802, -22.990578, -23.769005, -24.266657, -24.821413, -24.353678, -24.06542, -23.777163,
                -23.188414, -22.872284, -22.556152, -21.761408, -21.472471, -21.184216, -20.812338, -21.046886, -20.459496, -20.198433,
                -19.834713, -19.678347, -19.969322, -20.359558, -20.749792, -21.416723, -21.643795, -21.878342, -21.941568, -22.004795,
                -22.0721, -21.923212, -21.942928, -22.113571, -23.131306, -24.149042, -24.97506, -25.801077, -26.466652, -27.133583,
                -28.183271, -28.897795, -28.533396, -27.673384, -26.814053, -25.735132, -24.65621, -23.206089, -22.673088, -22.356956,
                -22.264498, -22.388229, -22.179516, -21.970802, -21.550655, -21.626118, -21.689344, -21.75189, -21.987118, -21.886499,
                -21.786562, -20.982981, -20.242622, -19.926493, -19.938049, -20.819817, -21.862026, -23.126547, -23.960724, -23.640512,
                -23.320305, -22.741072, -22.480009, -23.497746, -24.51548, -25.34218, -26.168198, -27.712137, -27.124744, -26.536676,
                -25.865664, -25.193291, -23.79892, -22.939589, -22.679205, -23.185694, -23.847868, -24.510042, -25.783401, -26.142363,
                -26.501322, -26.351755, -26.203548, -25.616159, -25.140263, -24.664368, -24.187794, -23.220366, -22.25362, -21.066601,
                -20.102573, -19.842871, -19.798002, -19.7103, -19.532179, -19.353378, -19.206532, -18.839413, -18.472294, -18.158203,
                -17.527302, -17.376375, -17.226128, -16.863089, -16.604746, -16.345722, -15.816119, -15.395972, -15.244366, -15.314389,
                -15.820878, -16.434103, -17.047327, -17.386572, -17.72514, -18.089539, -18.453938, -18.802021, -18.76395, -18.855728,
                -18.948868, -18.527361, -18.106533, -17.850231, -16.893002, -16.57959, -16.399431, -16.21859, -16.506166, -17.064323,
                -17.789045, -18.186077, -18.415865, -18.808819, -19.582489, -20.851089, -22.173397, -23.220366, -24.267336, -24.391748,
                -24.890759, -25.389769, -26.437418, -26.996254, -26.901075, -27.51498, -27.935806, -28.356634, -29.458672, -30.724552,
                -31.885057, -32.169914, -32.946301, -33.065956, -33.022446, -32.872879, -32.565586, -31.929247, -31.585922, -31.241917,
                -30.28537, -29.699339, -29.113306, -27.879379, -26.805218, -25.841867, -24.660969, -23.639154, -22.513323, -21.603683,
                -21.07272, -20.222908, -20.071981, -19.327545, -18.796581, -18.267658, -17.62928, -17.533421, -17.490589, -17.678228,
                -18.368277, -19.057644, -19.887741, -20.44454, -20.458136, -20.498926, -20.539038, -20.390152, -20.241943, -20.066542,
                -19.891819, -18.500847, -17.997078, -17.493309, -16.477613, -15.298073, -14.820139, -14.342203, -14.08454, -13.774529,
                -13.517546, -13.04845, -12.736398, -12.473976, -12.212234, -11.471877, -11.216253, -11.036773, -10.857292, -10.711804,
                -10.50717, -10.038073, -10.000001, -10.067307, -10.191039, -10.310693, -10.706366, -10.826699, -10.947032, -11.125834,
                -11.13943, -11.374659, -11.120394, -10.865451, -10.847775, -10.830098, -10.845736, -10.915079, -11.038133, -11.331148,
                -11.724781, -12.119094, -13.275519, -13.614764, -13.897582, -13.968966, -13.953329, -13.937014, -14.114454, -14.4537,
                -14.848692, -15.186578, -14.881326, -14.460499, -14.038311, -13.839794, -13.76909, -13.698385, -13.76909, -14.326568,
                -14.882685, -15.552337, -15.894301, -15.986761, -16.079901, -16.474894, -17.039848, -17.185337, -17.330145, -17.783606,
                -18.612343, -18.791822, -18.971302, -19.226927, -19.483231, -19.825195, -20.163761, -20.582548, -21.001335, -21.831432,
                -22.451456, -22.732914, -23.013012, -22.979019, -22.992617, -23.169378, -23.132666, -22.985138, -22.836252, -22.902876,
                -22.97154, -23.040207, -23.105473, -23.171417, -23.513382, -23.640512, -23.679266, -23.717337, -23.629637, -23.585445,
                -23.541937, -23.719378, -23.466473, -23.33934, -23.212887, -22.900837, -22.584707, -22.544596, -22.667648, -23.278154,
                -23.47599, -23.673147, -23.960724, -24.241501, -24.091934, -24.107571, -24.087854, -24.068819, -24.136124, -24.311525,
                -24.486248, -24.878521, -25.051882, -25.387049, -25.590322, -25.792919, -25.910534, -26.362635, -27.079876, -27.960281,
                -28.78426, -29.338337, -29.727892, -29.902615, -30.024305, -29.708176, -29.339697, -29.356693, -29.50082, -29.64563,
                -30.91083, -31.245317, -32.237896, -32.709034, -33.179493, -34.825405, -35.760201, -36.366627, -36.866318, -37.257229,
                -36.941101, -36.954018, -37.077072, -37.143696, -37.153214, -37.163414, -36.362549, -35.073555, -33.946362, -33.438515,
                -32.931347, -31.859222, -31.545132, -31.176651, -30.430855, -29.73605, -29.476347, -29.162256, -28.576227, -27.934448,
                -27.455153, -26.219866, -24.983219, -24.178274, -23.42976, -22.953184, -22.095894, -21.535017, -20.973463, -20.17124,
                -19.48119, -18.569511, -18.252022, -17.933851, -17.347822, -16.761789, -16.339603, -15.753572, -15.441522, -15.289236,
                -14.919396, -14.550239, -14.454379, -14.197395, -14.209633, -14.657655, -14.992141, -15.326626, -15.717541, -16.216551,
                -16.615623, -16.841333, -16.799181, -16.593187, -16.226749, -15.85759, -15.487752, -15.143747, -14.800424, -14.433304,
                -14.035591, -13.638559, -13.436644, -13.338745, -13.678671, -13.563775, -13.448201, -13.333306, -13.399932, -13.463838,
                -13.527063, -13.651477, -13.579412, -13.507348, -13.194617, -13.043691, -13.380217, -13.659635, -14.328608, -14.393192,
                -14.514206, -14.576753, -14.639978, -15.037011, -14.941832, -15.005738, -15.069644, -15.189978, -15.206294, -15.269519,
                -15.332746, -15.18046, -14.649497, -13.903021, -13.535222, -13.325829, -13.116434, -13.019216, -12.980464, -13.372738,
                -13.708584, -13.881946, -14.330647, -14.610065, -15.002338, -14.854131, -14.650856, -14.468656, -14.286456, -14.190598,
                -13.933614, -14.053947, -14.284417, -14.456419, -14.628421, -14.969706, -15.306911, -16.245785, -16.526562, -16.805981,
                -17.387934, -17.969883, -18.362839, -18.920315, -19.587248, -19.980881, -20.48193, -20.944227, -21.407206, -21.868824,
                -23.402567, -25.862944, -27.506821, -29.366211, -30.410461, -31.45471, -32.7743, -33.603035, -34.102726, -34.335918,
                -34.208103, -34.080292, -33.388206, -32.5853, -32.215462, -31.741608, -31.753166, -31.655268, -31.447912, -31.351372,
                -31.308542, -30.883636, -30.133081, -29.162256, -28.759787, -28.357313, -28.037785, -27.55509, -27.234882, -26.918753,
                -26.707317, -26.279013, -25.849346, -25.338779, -24.828213, -24.454973, -24.026669, -23.70714, -23.441319, -23.177536,
                -22.640455, -22.238663, -21.836191, -21.516663, -20.980259, -20.281374, -19.690584, -19.234406, -18.778227, -18.296211,
                -17.975323, -17.764568, -17.825756, -17.942009, -18.275816, -18.391392, -18.507645, -18.404308, -18.30097, -18.118771,
                -17.935892, -17.696585, -17.457956, -17.519144, -17.58033, -17.209812, -17.243805, -17.277796, -17.555176, -17.833233,
                -18.058266, -18.118092, -18.178598, -18.404308, -18.955667, -18.960426, -18.965864, -18.432182, -18.275137, -18.118092,
                -17.85363, -17.698624, -17.784966, -17.871986, -18.369637, -18.757151, -19.034529, -19.312588, -19.75449, -20.740274,
                -21.725376, -22.92939, -23.643234, -25.009052, -25.340139, -25.671906, -26.060101, -25.959482, -26.128765, -26.296688,
                -26.576786, -26.826971, -27.077835, -26.977898, -26.603981, -26.582224, -26.560471, -26.406143, -26.19471, -25.982597,
                -25.310226, -24.637854, -23.776484, -23.456955, -23.356337, -23.144222, -22.932791, -22.505163, -21.914373, -21.458195,
                -21.002016, -19.489349, -19.224888, -19.12291, -19.019573, -18.916914, -18.218029, -17.844791, -17.689787, -17.534101,
                -17.377054, -17.166302, -17.1731, -17.124151, -17.130949, -16.922235, -16.928354, -16.933113, -16.886204, -17.003138,
                -17.1731, -17.613642, -18.108574, -18.442379, -18.150045, -17.858389, -17.158823, -16.458578, -15.434043, -14.81538,
                -14.197395, -14.096778, -14.592388, -15.576811, -16.126131, -16.67477, -17.388613, -17.720379, -18.054186, -18.224148,
                -17.689106, -17.232927, -16.777428, -16.838614, -16.412348, -16.255302, -16.097576, -16.323288, -16.818218, -17.750292,
                -18.381193, -19.010735, -19.834034, -20.275255, -20.498247, -20.721237, -20.672968, -20.408506, -20.035948, -19.989719,
                -19.995836, -20.002636, -19.954367, -20.070621, -19.969322, -19.8925, -19.817038, -19.661352, -20.105293, -20.381992,
                -20.658691, -21.099915, -21.433041, -21.387491, -21.258999, -21.129148, -20.89052, -20.652573, -20.17124, -20.124329,
                -19.696703, -19.67495, -19.653873, -19.335703, -19.125629, -19.131748, -19.30171, -19.417965, -19.479153, -19.483912,
                -19.490028, -19.17322, -18.475012, -18.318647, -18.161602, -17.950169, -17.738735, -17.096277, -16.912037, -16.727118,
                -16.844051, -17.610924, -18.323406, -19.251402, -19.634838, -19.747692, -19.534899, -19.322105, -18.619822, -18.026991,
                -17.433483, -16.813459, -16.192755, -16.006475, -15.820878, -16.096897, -16.698565, -16.648935, -16.815498, -16.737995,
                -16.660494, -16.774029, -16.886883, -16.835894, -16.67749, -16.62718, -16.576872, -16.526562, -16.421865, -16.861048,
                -18.277857, -18.295532, -18.312529, -18.330885, -18.34856, -19.602205, -20.530199, -20.968704, -21.081558, -21.193733,
                -21.361656, -20.850409, -20.337801, -20.151522, -19.965925, -20.296331, -21.441879, -22.477291, -23.677225, -24.224504,
                -24.826172, -24.667088, -24.508003, -23.697622, -23.756769, -23.434519, -23.11227, -22.030628, -20.9755, -19.920374,
                -19.1637, -18.406347, -16.781506, -15.590408, -15.432004, -15.516985, -15.601966, -15.823597, -15.99152, -16.104376,
                -16.216551, -16.818218, -17.801281, -18.186077, -18.135767, -17.704742, -17.736015, -17.767288, -18.097696, -18.917595,
                -18.975382, -18.925074, -18.875444, -18.66197, -18.775507, -19.105234, -19.434961, -19.440399, -19.498188, -19.556654,
                -19.452637, -19.402328, -19.35202, -18.975382, -18.21871, -17.706783, -17.194855, -16.546957, -16.007837, -15.875266,
                -15.743375, -15.748134, -16.077862, -16.245785, -16.358641, -16.253942, -16.094858, -15.935773, -15.803883, -15.671991,
                -15.67607, -15.680149, -15.848071, -15.906539, -15.856231, -16.023474, -16.245106, -16.521122, -16.932434, -17.344421,
                -18.055546, -18.875444, -19.151464, -19.101154, -19.050846, -18.34856, -18.026312, -17.704742, -16.784225, -16.190037,
                -15.596528, -15.111794, -15.115873, -15.119273, -14.688927, -14.856171, -15.022735, -15.353821, -15.792325, -15.851472,
                -15.420446, -15.207653, -14.939112, -14.535962, -14.13213, -14.081821, -13.81464, -13.709264, -13.604567, -13.391093,
                -13.341465, -13.563096, -13.566495, -13.843194, -13.874467, -13.905061, -13.801043, -13.750054, -13.917977, -14.085221,
                -14.034912, -14.147767, -14.097458, -14.155926, -14.214392, -14.491092, -14.494491, -14.716802, -14.31297, -13.90846,
                -14.94727, -15.385775, -15.824958, -16.481693, -17.411047, -18.067783, -18.724518, -18.892441, -18.814938, -18.737434,
                -18.796581, -18.528042, -18.259501, -17.883543, -17.887621, -17.946089, -18.113333, -18.280577, -18.66605, -18.724518,
                -18.837374, -19.059004, -19.716419, -19.66679, -19.562094, -19.456038, -19.406408, -19.574331, -19.687866, -19.80072,
                -19.804119, -19.917654, -20.032549, -20.147444, -20.456776, -20.766108, -20.997936, -21.006094, -20.742992, -20.534958,
                -20.545156, -20.66753, -20.241943, -19.979521, -19.772846, -19.618521, -19.464195, -19.311909, -19.049486, -19.222847,
                -19.560734, -19.842871, -20.124329, -20.247381, -20.25894, -20.594786, -20.766108, -20.93811, -21.166538, -20.961905,
                -20.61858, -20.274576, -20.065182, -19.854429, -19.490028, -19.689226, -19.888422, -20.033909, -20.179398, -20.406466,
                -20.498247, -20.590027, -20.4391, -20.231745, -20.025072, -20.199793, -20.426863, -20.653252, -20.721237, -20.214069,
                -19.706221, -18.903997, -18.938671, -18.974024, -19.205172, -19.380573, -19.406408, -19.432241, -19.458076, -19.252762,
                -18.991018, -18.513084, -17.656473, -17.094917, -16.53404, -16.160803, -15.787565, -15.365378, -15.213092, -15.168902,
                -15.340223, -15.512226, -16.122732, -17.003138, -17.230207, -17.457277, -17.631319, -17.968525, -18.633417, -18.859808,
                -19.086197, -19.532179, -20.088297, -20.316046, -20.869446, -22.021791, -24.973019, -26.694401, -28.416462, -32.507118,
                -34.858719, -35.741165, -35.858101, -35.703773, -33.86478, -32.135921, -30.513798, -29.110588, -28.739389, -27.283831,
                -26.094093, -24.904356, -22.197191, -19.598125, -17.379774, -16.62582, -15.871866, -15.070324, -15.079842, -15.254563,
                -15.234848, -15.216492, -15.118592, -15.512905, -15.332746, -15.151905, -15.024094, -14.896961, -14.477494, -14.348323,
                -14.22051, -14.344243, -14.461858, -14.579472, -14.805861, -15.141028, -15.971126, -16.092817, -16.047268, -16.001717,
                -16.064264, -16.127491, -16.192076, -16.257341, -16.266859, -16.225388, -16.288614, -16.35252, -16.418467, -16.645536,
                -16.873287, -16.937193, -17.49263, -18.158882, -18.167042, -18.1752, -17.971245, -17.547697, -17.394732, -17.321306,
                -17.247883, -17.53138, -17.48583, -16.89776, -16.856289, -17.001099, -17.145906, -17.156784, -17.439602, -17.66939,
                -17.789724, -17.474274, -17.103754, -16.949429, -17.287315, -17.594606, -17.901218, -18.404989, -18.549116, -18.693245,
                -19.362217, -19.698744, -19.787123, -19.876184, -19.886381, -19.572969, -18.931871, -18.642256, -18.353319, -18.226189,
                -18.099735, -17.731256, -17.685707, -17.640158, -17.515064, -17.389973, -17.238365, -17.087439, -17.12347, -17.159502,
                -17.7129, -17.998438, -18.606903, -18.837374, -19.361538, -19.885702, -20.656651, -21.156342, -21.062521, -20.364317,
                -19.666111, -19.184097, -18.48793, -18.232986, -18.148005, -18.063025, -17.403568, -17.072481, -16.824337, -16.576191,
                -16.404869, -16.211111, -16.017355, -15.742015, -14.648816, -14.426505, -14.204194, -13.875147, -13.5461, -13.212294,
                -12.828177, -12.439983, -12.386955, -12.488253, -12.484174, -12.422307, -12.686769, -12.792826, -12.898882, -13.378857,
                -13.373418, -13.147707, -13.22793, -13.308152, -12.758153, -12.696286, -12.308772, -12.387635, -12.466497, -12.081022,
                -11.689428, -11.414089, -11.601728, -11.790047, -12.32373, -12.375398, -12.858771, -12.579352, -12.354322, -12.214953,
                -12.076263, -11.741097, -11.711864, -11.681951, -11.295115, -11.339986, -11.22985, -11.119715, -11.325029, -11.377378,
                -11.429726, -11.586771, -11.90766, -12.496411, -12.541961, -12.565756, -12.58955, -12.581392, -12.497091, -12.414149,
                -12.025954, -11.745177, -11.661555, -11.577933, -11.573174, -11.72818, -11.993322, -12.532443, -13.072925, -14.31297,
                -15.771929, -15.712782, -15.652955, -16.030272, -16.406908, -16.619701, -16.831816, -17.397451, -17.963085, -18.498808,
                -18.821056, -19.142626, -18.699364, -18.040588, -17.794483, -17.548378, -17.487871, -17.532061, -17.637438, -17.742134,
                -17.788364, -17.729898, -17.672789, -18.371675, -18.884962, -19.39893, -20.259619, -20.227667, -20.195034, -20.057024,
                -19.918335, -19.477791, -19.688545, -20.604303, -20.925192, -21.246761, -21.132547, -21.019012, -20.906157, -20.084898,
                -19.509745, -18.935951, -18.003197, -17.725819, -17.859749, -17.992319, -18.145966, -18.006596, -17.867907, -17.989601,
                -18.110613, -18.232306, -18.30913, -18.385952, -18.21463, -18.343801, -18.472973, -18.361477, -18.249983, -18.354679,
                -18.458696, -17.903259, -17.736694, -17.570812, -17.376375, -17.182617, -17.175819, -17.471554, -17.766609, -18.193554,
                -18.485891, -18.778227, -18.855049, -18.931192, -19.254801, -19.578409, -19.898619, -20.324205, -20.156961, -19.98904,
                -19.821115, -19.490028, -19.158262, -18.826494, -18.632738, -18.43898, -17.937931, -17.879465, -17.820997, -17.541578,
                -17.047327, -16.553076, -16.058826, -15.807281, -15.557096, -15.253883, -14.95135, -14.673971, -14.612104, -15.286515,
                -15.960927, -16.095537, -16.230827, -16.687687, -17.145906, -16.916117, -16.669331, -16.421865, -16.196156, -16.463337,
                -16.130209, -15.854191, -15.576811, -15.40481, -15.482993, -15.561175, -15.987441, -16.556475, -17.125511, -17.608204,
                -18.309809, -19.501587, -20.479891, -21.459555, -25.595083, -27.501383, -29.407682, -32.726711, -33.708416, -34.690117,
                -36.376827, -38.607414, -39.315815, -39.498695, -39.680897, -39.863777, -39.97187, -40.081329, -40.026939, -39.972553,
                -39.755001, -39.537449, -39.08535, -38.633247, -38.181149, -36.603214, -35.024601, -32.440495, -29.856384, -27.38105,
                -24.905714, -23.191813, -21.478592, -20.337122, -19.195654, -17.12619, -16.611544, -16.096216, -15.716182, -15.716861,
                -15.716861, -16.096897, -15.988801, -15.772608, -15.556417, -15.230768, -14.9058, -14.850732, -15.105676, -15.36062,
                -15.614883, -15.778728, -15.942571, -16.025513, -16.107094, -16.162163, -16.217232, -16.163523, -15.974524, -15.784165,
                -15.440842, -15.097517, -14.754193, -14.319769, -13.884665, -13.614084, -13.343504, -13.344184, -13.344864, -13.018536,
                -12.883925, -12.749315, -12.749315, -12.586831, -12.478055, -12.370639, -12.316931, -12.263902, -12.208834, -12.373358,
                -12.755434, -13.137509, -13.247645, -14.009078, -14.281697, -14.661734, -14.699125, -14.737197, -14.773909, -14.338125,
                -14.366679, -14.395912, -14.776628, -15.211053, -15.892262, -16.572792, -17.661232, -18.152084, -18.642935, -19.512465,
                -19.540339, -19.568211, -19.296272, -19.025011, -18.791143, -18.556595, -18.322727, -17.942009, -17.561974, -16.637379,
                -15.750854, -14.864329, -13.977125, -12.671812, -12.265262, -11.859391, -12.076263, -12.185719, -12.295856, -13.001539,
                -13.465877, -13.930215, -14.474094, -14.9092, -14.393192, -13.876507, -13.49715, -13.118474, -13.172182, -13.49919,
                -13.446161, -13.393133, -13.665073, -13.937014, -14.101538, -14.266061, -14.429905, -14.918717, -14.701845, -14.431944,
                -14.161364, -13.128672, -12.259143, -11.824719, -11.826078, -11.826758, -11.936214, -11.991282, -12.182321, -12.374038,
                -12.86353, -13.354382, -13.844554, -14.334725, -15.149185, -15.502708, -15.85691, -16.427984, -16.999737, -17.35462,
                -17.709501, -18.742874, -19.287434, -20.320126, -19.39757, -18.148005, -16.897081, -16.300852, -15.920815, -15.894301,
                -15.868467, -15.81544, -15.762411, -15.76309, -15.708702, -15.871186, -15.818838, -15.76649, -15.604006, -15.167542,
                -14.924155, -14.68077, -14.664453, -14.647457, -14.62978, -14.792944, -14.983982, -15.175701, -15.339544, -15.502708,
                -15.828356, -16.183237, -16.537439, -16.917475, -17.243805, -16.892323, -16.54084, -15.236207, -14.748755, -14.261981,
                -13.067485, -12.034113, -11.505189, -11.359701, -11.214893, -11.011619, -10.807663, -10.840296, -10.87293, -10.758034,
                -10.64314, -10.587392, -10.530965, -11.18498, -11.780529, -12.316931, -11.669033, -11.464398, -11.260444, -11.204696,
                -11.148948, -11.132632, -11.115635, -11.099319, -11.073485, -11.04697, -10.961989, -10.875648, -10.701607, -10.527565,
                -10.175403, -10.089742, -10.00408, -10.066627, -10.129172, -10.45822, -10.786588, -11.026575, -11.562977, -12.098699,
                -12.575953, -13.051848, -13.765691, -14.479534, -15.667233, -15.67063, -14.962907, -14.581511, -14.200115, -13.9071,
                -13.614764, -13.854072, -14.183119, -14.512166, -14.8113, -14.608026, -14.40339, -14.317729, -14.232748, -14.354442,
                -13.705864, -12.969586, -12.23263, -11.782568, -11.331827, -10.881086, -10.440544, -10.000001, -10.239988, -10.569036,
                -10.897404, -11.019096, -11.14079, -11.262484, -11.147588, -11.032014, -10.917119, -10.831458, -10.746476, -10.719282,
                -10.693449, -11.288318, -11.883866, -12.597709, -13.310871, -14.557036, -14.797024, -15.03769, -15.306911, -15.576132,
                -15.816798, -16.470814, -16.948069, -16.675449, -16.40147, -16.128849, -15.007776, -13.886024, -13.238127, -12.590231,
                -11.054449, -11.057848, -11.120394, -11.182261, -11.422248, -11.455561, -11.488194, -11.432446, -11.73158, -12.356361,
                -12.981144, -13.369339, -13.757533, -14.529842, -14.76983, -14.891522, -15.013216, -15.283116, -15.552337, -16.147886,
                -16.565313, -16.983421, -17.430763, -17.877424, -18.265619, -18.653814, -18.834654, -18.98558, -19.136507, -18.607582,
                -18.275137, -17.943371, -17.610924, -17.317907, -17.025572, -16.49597, -16.203634, -16.028912, -16.564634, -16.62718,
                -16.689726, -16.486452, -16.281816, -15.98948, -15.873906, -15.877306, -16.058146, -16.002398, -15.945971, -15.890223,
                -15.746094, -15.600607, -15.840593, -16.140408, -16.439541, -16.620382, -17.007896, -17.39609, -18.050785, -17.935892,
                -17.820997, -17.67551, -17.530701, -17.534101, -17.537498, -17.540897, -17.721739, -17.90258, -18.083418, -18.382553,
                -18.681688, -18.98082, -18.510365, -17.981441, -17.451839, -16.862408, -16.274338, -15.389853, -15.096837, -14.804502,
                -14.866369, -14.574034, -14.281018, -13.929535, -14.761671, -15.593127, -16.602705, -17.612284, -18.799982, -19.276556,
                -19.753132, -20.585268, -21.002695, -21.420803, -22.044905, -22.669687, -23.206089, -23.179575, -23.15374, -22.416103,
                -21.679827, -20.44046, -20.149485, -19.859188, -19.5315, -19.964563, -20.834093, -21.703621, -23.007572, -24.581427,
                -25.232721, -25.667828, -26.102932, -25.912571, -25.722214, -25.015852, -24.309486, -22.950466, -21.590086, -20.720556,
                -19.851709, -19.228287, -18.604185, -18.384592, -18.574951, -18.765308, -18.656532, -18.602144, -18.220068, -17.785645,
                -17.351221, -17.13299, -16.914757, -16.779467, -16.644176, -16.425943, -16.315809, -16.315809, -16.315809, -16.640778,
                -16.750914, -16.861048, -17.158823, -17.457277, -17.671431, -17.835953, -18.000477, -18.325445, -18.921673, -18.920315,
                -18.702763, -18.485891, -18.729956, -18.974703, -19.844912, -20.715118, -21.312706, -22.506523, -23.158501, -24.678644,
                -25.793598, -26.907194, -27.938528, -28.156759, -28.375669, -28.266214, -28.156078, -26.959541, -26.253859, -25.548172,
                -24.622217, -23.779203, -22.936869, -22.148924, -21.361656, -20.708321, -20.598866, -21.25152, -21.904177, -21.876303,
                -21.84775, -21.631556, -21.414684, -21.086998, -20.977541, -20.813017, -21.167219, -21.521421, -21.901457, -22.092495,
                -22.282173, -22.334522, -22.333841, -22.090456, -21.847069, -20.539719, -20.078098, -19.617161, -18.800661, -18.2561,
                -18.174519, -18.093616, -17.982801, -17.901218, -17.819637, -17.764568, -17.71018, -17.547018, -17.384533, -17.221369,
                -16.812099, -16.403509, -15.912658, -15.778728, -15.643437, -15.478913, -16.130209, -16.321247, -16.512285, -16.781506,
                -16.591148, -16.40011, -16.345722, -16.482372, -16.617662, -16.427305, -16.236946, -16.046587, -15.85487, -15.665193,
                -15.475514, -15.149185, -14.822858, -15.146466, -15.364699, -15.582931, -15.445601, -15.30895, -15.498629, -15.688987,
                -15.905859, -15.852151, -15.798443, -15.63392, -15.196774, -15.170261, -15.143747, -15.905859, -16.666611, -17.860428,
                -18.132368, -18.404308, -18.593306, -18.783665, -18.566113, -18.349241, -18.158882, -17.968525, -17.640837, -17.368896,
                -17.096956, -16.580271, -16.062904, -15.708702, -15.355181, -15.464637, -15.574092, -16.331446, -16.440222, -16.548998,
                -16.657772, -16.765869, -16.740034, -16.713522, -16.548998, -16.656414, -16.520443, -16.385153, -16.056786, -16.002398,
                -15.94801, -16.001717, -16.08466, -16.166922, -16.219271, -16.329405, -16.438181, -16.76111, -16.788984, -16.816177,
                -16.761789, -16.707401, -16.76111, -17.08676, -17.467474, -18.337004, -19.207211, -19.697384, -20.351398, -21.004736,
                -21.656033, -22.308008, -22.903557, -23.254358, -23.605162, -24.254417, -24.904356, -25.445517, -25.986675, -26.633894,
                -27.06288, -27.361332, -27.659788, -27.273634, -26.807936, -26.341557, -26.444895, -26.032227, -25.619556, -25.261957,
                -24.905714, -24.65893, -24.412825, -25.218445, -26.115168, -27.01189, -33.203964, -40.001785, -46.800285, -53.025677,
                -59.252422, -70.560371, -77.08149, -79.908989, -82.735802, -86.156807, -87.459404, -88.761993, -89.407852, -90,
                -89.505753, -88.252106, -86.998466, -84.790993, -82.584198, -79.779816, -76.976112, -71.039658, -68.751968, -66.464272,
                -64.177261, -60.960205, -58.289753, -58.259163, -58.229248, -58.198658, -58.16806, -57.943714, -58.157864, -58.645317,
                -59.13345, -58.531101, -57.600384, -57.21423, -58.108234, -59.002239, -59.351681, -59.701126, -58.429123, -57.156445,
                -55.884441, -52.067764, -50.351143, -48.635204, -46.700352, -44.766174, -43.021679, -41.277187, -39.041836, -38.089371,
                -37.136219, -36.370026, -36.58078, -37.068233, -37.556366, -37.878616, -37.546169, -37.21508, -37.75692, -38.298763,
                -38.892273, -39.319897, -37.303459, -35.287025, -33.870899, -32.454769, -30.543032, -30.267014, -30.591982, -30.916948,
                -31.294266, -31.833389, -33.186287, -36.824848, -40.791092, -44.917782, -47.307457, -50.131554, -50.918823, -51.706085,
                -53.058987, -53.377159, -53.782349, -54.188221, -54.592731, -54.996559, -55.127769, -55.259663, -55.229748, -55.199837,
                -54.869427, -54.5397, -54.237167, -53.934635, -52.512386, -52.073887, -51.636059, -50.055408, -48.474758, -46.893425,
                -44.606411, -42.320076, -38.973175, -35.626949, -31.269112, -27.566648, -26.88612, -26.205589, -25.384331, -25.190573,
                -24.998175, -25.429878, -25.862265, -27.540133, -28.297487, -29.055519, -30.135801, -30.486603, -30.838087, -30.780981,
                -30.723873, -30.116766, -29.653788, -29.19013, -27.442234, -25.914612, -25.206209, -24.498486, -24.277533, -24.057262,
                -23.779882, -21.43644, -20.61858, -19.800041, -18.706841, -18.541637, -18.376434, -18.424025, -18.366236, -18.308451,
                -18.359438, -18.410427, -18.675568, -18.80814, -18.94071, -19.428843, -19.917654, -20.293612, -20.260979, -20.229025,
                -20.252821, -20.277296, -20.432301, -20.557394, -20.682486, -20.807577, -21.129148, -21.450716, -21.745771, -22.040827,
                -22.038107, -22.035387, -21.75325, -21.56901, -21.384092, -21.199852, -20.516602, -19.834034, -19.533541, -19.233046,
                -19.064444, -18.89448, -18.585148, -18.275816, -18.209871, -18.144606, -18.134407, -18.124889, -17.837994, -17.551096,
                -17.593248, -17.635399, -17.612284, -17.927732, -18.242504, -18.381874, -18.399549, -18.417906, -18.351959, -18.286015,
                -18.264259, -18.574951, -18.994417, -18.876123, -18.75783, -18.794542, -18.340403, -18.385273, -18.430141, -18.959747,
                -19.517223, -20.074699, -20.224947, -20.375193, -20.362276, -20.34868, -20.335762, -20.203873, -20.34664, -20.313328,
                -20.280695, -19.877542, -19.809559, -19.798681, -19.786444, -19.556654, -19.326185, -19.203812, -19.081438, -19.579769,
                -20.078098, -20.334402, -20.590706, -20.692684, -20.793982, -20.71172, -20.620619, -20.528839, -20.679087, -20.827974,
                -20.381992, -19.935331, -19.041328, -18.947508, -18.85437, -19.487989, -19.857149, -20.226307, -20.377913, -20.53088,
                -20.052946, -19.57501, -19.232367, -18.889042, -18.80814, -18.726557, -18.645655, -18.411787, -18.765308, -19.053564,
                -19.341822, -19.434961, -19.477791, -19.676987, -19.314629, -18.951588, -18.601465, -18.724518, -18.848249, -18.730637,
                -18.613022, -18.480452, -18.417225, -18.354, -18.283974]],
            'indexType': 'depth',
            'startIndex': 4544,
            'endIndex': 5750,
            'rollsPerUpdate': 10,
            'step': 0.5,
            'interval': 1000
        };


        var getCurveIndex = function (curveId) {
            for (var i = 0; i < depthData['curveNames'].length; i++) {
                if (depthData['curveNames'][i].toLowerCase() === curveId.toLowerCase()) {
                    return i;
                }
            }
            return 0;
        };

        helpers.getData = function (curveId, nbrPoints) {
            var curveIndex = getCurveIndex(curveId);

            var min = Number.MAX_VALUE;
            var max = Number.MIN_VALUE;

            var values = [];
            for (var j = 0; j < nbrPoints; ++j) {
                var value = depthData['curveData'][curveIndex][j];
                values.push(value);
                min = value < min ? value : min;
                max = value > max ? value : max;
            }

            return {
                'values': values, 'min': min, 'max': max
            };
        };

        helpers.getAllData = function (curveId) {
            var curveIndex = getCurveIndex(curveId);

            var min = Number.MAX_VALUE;
            var max = Number.MIN_VALUE;

            var values = depthData['curveData'][curveIndex].slice(0);
            var nbrPoints = values.length;
            for (var j = 0; j < nbrPoints; ++j) {
                var value = values[j];
                min = value < min ? value : min;
                max = value > max ? value : max;
            }

            return {
                'values': values, 'min': min, 'max': max
            };
        };

        helpers.getDepthData = function (curveId, nbrPoints) {
            var curveIndex = getCurveIndex(curveId);

            var sIndex = depthData['startIndex'];
            var eIndex = nbrPoints === undefined ? depthData['endIndex'] : Math.min(sIndex + nbrPoints - 1, depthData['endIndex']);
            var depths = [];
            var values = [];
            var minValue = Number.MAX_VALUE;
            var maxValue = Number.MIN_VALUE;
            var minDepth = Number.MAX_VALUE;
            var maxDepth = Number.MIN_VALUE;

            if (sIndex < eIndex) {
                var startValueIndex = Math.floor((sIndex - depthData['startIndex']) / depthData['step']);
                var endValueIndex = Math.floor((eIndex - depthData['startIndex']) / depthData['step']) + 1;
                for (var j = startValueIndex; j < endValueIndex; ++j) {
                    var depth = depthData['startIndex'] + depthData['step'] * j;
                    depths.push(depth);
                    values.push(depthData['curveData'][curveIndex][j]);
                    var value = depthData['curveData'][curveIndex][j];
                    minValue = value < minValue ? value : minValue;
                    maxValue = value > maxValue ? value : maxValue;
                    minDepth = depth < minDepth ? depth : minDepth;
                    maxDepth = depth > maxDepth ? depth : maxDepth;
                }
            }

            return {
                'depths': depths, 'values': values, 'minValue': minValue, 'maxValue': maxValue, 'minDepth': minDepth, 'maxDepth': maxDepth
            };
        };

        helpers.getTimeData = function (nbrPoints) {
            var startDate = new Date(2013, 0, 1).getTime();
            var endDate = new Date(2014, 0, 1).getTime();
            var step = (endDate - startDate) / nbrPoints;

            var indices = [];
            for (var i = 0; i < nbrPoints; ++i) {
                indices[i] = startDate + step * i;
            }

            return indices;
        };

        var getOffsetSum = function (elem) {
            var top = 0, left = 0;
            while (elem) {
                top = top + parseInt(elem.offsetTop);
                left = left + parseInt(elem.offsetLeft);
                elem = elem.offsetParent;
            }
            return {
                'top': top, 'left': left
            };
        };

        var getOffsetRect = function (elem) {
            var box = elem.getBoundingClientRect();
            var body = document.body;
            var docElem = document.documentElement;
            var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
            var clientTop = docElem.clientTop || body.clientTop || 0;
            var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
            var clientLeft = docElem.clientLeft || body.clientLeft || 0;
            var top = box.top + scrollTop - clientTop;
            var left = box.left + scrollLeft - clientLeft;

            return {
                'top': Math.round(top), 'left': Math.round(left)
            };
        };

        // Public Methods
        helpers.getAbsolutePosition = function (element) {
            if (!element) {
                throw new Error('Invalid element');
            }
            if (element === document.body) {
                return {
                    'x': 0, 'y': 0
                };
            }
            var parentAbsolutePosition = this.getAbsolutePosition(element.parentNode);
            return {
                'x': parentAbsolutePosition.x + element.offsetLeft, 'y': parentAbsolutePosition.y + element.offsetTop
            };
        };

        helpers.getOffset = function (elem) {
            if (elem.getBoundingClientRect) {
                return getOffsetRect(elem);
            } // old browser
            return getOffsetSum(elem);
        };

        /**
         * Adds a panel listener on change, and makes sure it is removed when the dialog is closed.
         * The reason we add and remove listeners is because we reuse the same panels for performance
         *
         * @param {*} display display
         * @param {*} panel panel
         * @param {*} listener listener
         */
        helpers.addRemoveListenerHandler = function (display, panel, listener) {
            panel.addListener('CHANGE', listener);
            display.addListener('CLOSE', function () {
                panel.removeListener('CHANGE', listener);
                display.removeListener(this);
            });
        };

        function loadImages (sources, containerName, imageLoadedCallback, finishedCallback) {
            var images = {};
            var loadedImages = 0;
            var numImages = 0;
            var src;

            for (src in sources) {
                numImages++;
            }

            for (src in sources) {
                images[src] = new Image();
                images[src].onload = function () { // eslint-disable-line no-loop-func
                    if (++loadedImages >= numImages) {
                        imageLoadedCallback(containerName, images, finishedCallback);
                    }
                };

                images[src].src = sources[src];
                images[src].name = src.toString();
            }
        }

        function registerImages (containerName, images, finishedCallback) {
            var imageContainer = new geotoolkit.attributes.ImageContainer(containerName);

            if (imageContainer == null) {
                return;
            }

            for (var src in images) {
                var image = images[src];
                imageContainer.register(image.name, image);
            }
            if (finishedCallback) finishedCallback();
        }


        helpers.getRandomInt = function (min, max) {
            var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
            if (randNum === randNumOld) {
                Helpers.getRandomInt(min, max);
            }
            randNumOld = randNum;
            return randNum;
        };

        helpers.getRandomRgbColor = function () {
            var r = Helpers.getRandomInt(0, 254);
            var g = Helpers.getRandomInt(0, 254);
            var b = Helpers.getRandomInt(0, 254);
            var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

            return color;
        };

        helpers.getRandomRgbaColor = function () {
            var r = Helpers.getRandomInt(0, 254);
            var g = Helpers.getRandomInt(0, 254);
            var b = Helpers.getRandomInt(0, 254);
            var a = Helpers.getRandomInt(0, 10) > 5 ? 0.3 : 0.7;
            var color = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';

            return color;
        };

        helpers.getSeededColor = function () {
            var r = (helpers.seededRandom() * 255) >> 0;
            var g = (helpers.seededRandom() * 255) >> 0;
            var b = (helpers.seededRandom() * 255) >> 0;
            return 'rgb(' + r + ',' + g + ',' + b + ')';
        };

        helpers.getPatterns = function () {
            return patterns;
        };
        helpers.loadResources = function (resource, finishedCallback) {
            if (resource === 'patterns') {
                loadImages(patterns, 'patterns', registerImages, finishedCallback);
            } else if (resource === 'symbols') {
                loadImages(symbols, 'symbols', registerImages, finishedCallback);
            }
        };
        helpers.getIntImageBase64 = function () {
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAABGCAIAAAA4pSMvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA' +
                'JcEhZcwAADsMAAA7DAcdvqGQAAEV5SURBVHhe7bwHmFTlvT8+ivReFFtibnJzk9wYk9iVXpddehVRjGADREHpnWUbZRdYeu8dpDfpSG/bd6fPnCmn9zJ' +
                '9Zt//951BRMzN1fxCnv/zXI+f533OnHnr9/OtZxZN6OFeCYRiCEV/JKpRAnpHvg94AognUX0ffr7+H6//33EPBKfIvh8p4n/m/l97/Xu4//FIAKn3mL6' +
                'H+yl/AD9f//Rlqn7oV7waG/SPA3T+/pVA0GCN+J+Q6vbz9VOvfxf3PwXo+8BPEncnunf9zP3/+4W5Tzz0K/bjUQ2pXjxyP+DJXcTvTgdXPIHu4e6jn6+' +
                'feGHu4w/9iv54JOJhFAt9H/AkDM8T+Fvog69YvPoeUk9+vn7q9e/hHq4UZ/97C+yi+PdY/5Z7TPzP3P8Lr38b93ClSPquhbXD4bBhBEP4iui6Di08jEZ' +
                'C1VFMPGY6FomEg8GArmlacuDP17/s+vdwD0z/HQSDmHhok2nHdxd8ggwuEo1HYwloQ+EotPDwZxP/114galPsoV+Jv4sU09FoPAzsRmJwA3avqIFgDEm' +
                'BmBLCL/gARiRhhGNwE44j0IbUjOAP7iH15Ofrp16Y++hDv+L/E4By4Btwz/SjCRRAiAsjIYJCCEMMJgQ9okcR6EQoVo39QTQai4bvIbXGz9dPvUDa/xb' +
                'uI9U/hKGHdS0EbTAQjYQToWBMkQ2KV2WEfGHkCyIujsQEEmNIA6MHBxDD9N/PfSISBPxM/z93Ye4jD/eKAa9/FxDYY1EUDsWhBVUIGJDWJSDZA+45hPh' +
                'ky1YjNoboEKKNhBZDgWh1MJqASSEfjIcDibABLdynVvr5+kkX5h6S7Yd5RYHdcCjxQ1SDezfA4qtT7+UFXhUFDXZEJxAFpo+QRUd2AwkIqWD0CClRBF8' +
                'HIpAfhCH5j4WMeEgHwH1qpZ+vn3SluI+GInD/o1pAJISRvMcXPAcEItEUQmGcmQOSXwIrwVRneA60AeAGnsSCYOzI0BLBMHbmV0qoyXkbMoaM6/D2hFb' +
                'Dct78ZPFL783901uZvSesW3XcUsFi569GcN6Hl8ArBsMRIxIG4u9x/+3SeJ/Jde9D8gnuA4hBv2AYNnDfKVI39z7izslTJACph5FQ8pu7UwVhA9/H94W' +
                'Q/Jj6KjUbDL83w/eH3NczYnz77d2pUn1SM6Qu2BUMwaPuCvnunnHP5D2sEoPwGQLhpOZJzQ9d7jJ4r8XcJ1lJcfO/t9hFBxAAO93kFEY0rMWiaiyuRhE' +
                'ATNNIWideI0lPNKTBDXRTY1ElFtJhREBN6CoKV8t8XI+g60709vTDT3aZ3TItp0laXr2M+abO80xdltRKX9UoffmrH2xbesAFUd8II6gOAiEjiBUmwQc' +
                'lUqYi1XgLcOBQCHfARUE0Gorq4Yga0hVdFoK6hBJwTpBLUIftBKqhYKgWdQQ3kDxCxIjEoKSEtIPnNPyjYzXSNQkLFrINHWlw0jAKGoHqKASvoKzwkah' +
                'RjaKixgei+reA0wWTQkgAtHiC0zUtBslJzIjooYiRiEcNRdZlSRJ5RROxRqGwFNKkUNCoToRQLIhCwbgWjEihqBqKB41EVE9Uw6YBki6rmphIxAIBXZL' +
                'VSDXiDF2rjgcTyAhVw7BEHL/YNsIRkDnkT9Wg3KocEMhoSGFlHpJlEMjfZRNznzLHHwmwAyA+bsB+MfegVndJjceVGHbLKfpxzyT3YTg8pHSGKocDBoo' +
                'EUEgPygGNjxhqQIvBSS6b0ZBpB4H1Bl3mtui77MnBqxp1n9+83/IWg7Y06bu5TqeljdrP6/zJxrz1l6UILvlgOi/j53RJr45K0aAYBJox94Ew0sJ4ddi' +
                'MEdNBiLhChLgSA6OADchyIAAd8IuCCIoIekAMG2qUEzU1iEMflJFQa0B9KctiMKyDVIVgiAkgNY6UINKDiXCkOhyJGUE9Vh0C9YGyIxBTjbgKaxkxQ4t' +
                'hIaS4V0D4SSGp8SAQDLUqlNIgavyKAsEmYc+qFNGVRFBPxHWU8Eg0HxCMKCicDIoF1S4IUAhUQ34DKwWCoFkG5LO6rvOypscSYjyiVFeDs1RBNZVYENI' +
                'esADInCAXDiQQyDQQQLqCEgEjBJUy6ATQ9CCPAMw9HPvHIxiKRQPxGGwmALVZAMSkR3UVdCwaUSLVSgSpYaAHBUO4WA+HAqFQCJ5AnQacRWPwkVdVWg8' +
                'ooI/eADpZpXyw4MDjnT+v8eqwX7+V2S/vwKwD5QuPlKz5umr5MfuszUUZX+5o+Orn9V4Z3e6jFSuPWctpFITAr+LXfCBKEI2ggxPA7wVhUTWE5Gi1HIu' +
                'owEdEh15gByC7QDQBdaMKaWMY0TqOHaIRV0BRYDioLAgJVAoBZ3G/INEqG0RhA0UlhMg48oYRA/qEOyAtDmNjgsoLMmUEeTBTI6qo0QA4Mzi+GsWaDnA' +
                'zNOgB7FNKRCFvhbF8BFE68im4dlWST1SU0FFMi8fwwHgwqdUxcA9gUbEQ+ChMH8uigI4iGgpr8WroEUsEY9gZ6OCZ4gjiNe4ZxAhFUDSOQHfj2MGBIie' +
                'QDjRoKCCEFAaE8wCJKWDuwUZ+PECUoQA+IrirYEgLhFU9rGphQ4kElXAU1ExLWgkYBe4WCEL9BpW6kkBgNOB+DYU2ArKWwDn8IUsgY+qGJp1HN+48+r8' +
                'Gzxi74cJlGXkRImJIqEZ8AtkVtPGM/41hy2q8OuapnrnPv5uft7fYB04YoTjk/FpEMxCkDaCAgVAQ1pXDSIokpGhYBhcLW0wgLyWXWT1Wn+hWojBbpYA' +
                'qRVTGIouCPBHkjSKbgarkoFlQq1iZkMAtIT6aKPV7y3jGFkJmQBjd4FCFjswa8kVwtYmVTxciETkYFvWILEeDUhQbrAZBBWQSNGQoXGPILwcqfYKFj5p' +
                'FvKg3jkp5VCUhl4HcGrLSisXH0lIQbKCSNexS3CPHCTbqpRAtIE5GrIgoLnkjIJJFfgF5FGRVUIWMnCFkF5GbQ6wMEQGxGiIk5BSRjUIuBlE8cvoSbk/' +
                'YA09j8URACwaDD5CYwj/BPRhzEIjH0g6pKe6TMLBzxx3AC8UiEGSMcFy/y70EihjQVInF9RjC2fsBc2xQ/un6aTNML47449DFX66/eV3Euf0VEt2gUZW' +
                'CLDKy6qjcQGuvxlpNOGpqPd3UdvJLn65ZesJMQOSoRrJkyEIgDvElBGcLgm9Nch8D7iEWyJEwKQUOfX05Z+H68dnLRs5a9taEwnem7/xsybW3Z519N/u' +
                'bd+dcGDzt0OAp24ZOW/9Z7raZhQeOXSbNFPrqvHnU7JV/m1Y4eMqavhP3jFhye9jiy8OXXBix9NyS4xargemPVEcDAT4UEgNhGZQeFpUjMeA+ElQjUKo' +
                'Gkc0R2Lrn8tS520fP2T10yu7Bk4+NzC8aVVD8/uyz703dM3LWjsm5WxcuP3DmnNkloLErL3yw9OIH+ac+mff1p/POjs49/1HmN8OmXxyZfePDWd98OPP' +
                'r4ZknhuWdfG/hmcFLLvRffH7I4nNDco8Mnbl7+Ky9H+UcH553ZnDmib5T9w+Zuf+jeV+PLLwyfMHFMcuuz91+BzyNbET1IA6BPwTmHnKMHw8jEArgSw8' +
                'E1UBQgYhihCTcBlWIhfgbODtU6hoIIxTTAqAkYBZsKMRIgggOAmEXuvEKNzDvVKP0LFPryb/qnz9zp7NEQd840cyVJf3G7H5r+pF3s08MmroHDrPijHh' +
                'ZQ3nnw0+/s7xGtyzTG5+/MCx/2UkLAf4shiLg8BXDCAbUUEANxuVgXApHpHAIDFiMRMQQulnu3Xfixpq957/M3/7mu5lPdpjQvFPW073XPp6xqkGbec3' +
                'bZ70ytPBvs3fnbb6887Tj/B3NwaGLZcqyfdenrz3Z5oP5tf88qmGbWc16LKjZaeZj7Se+Omr1ivNuL4RVhASRCQeEYFCCpSFQA8AUwgElousojjgOfXP' +
                'Nv/Vg2dyNN96dduh3vZbWfWVm83bz/6Pbgi4frp2Qf3z9ntsnz9oqK2WPjDqO3ft4n2WPvjKx3uvjn+4465kOs55qN/vZDjnPdcxt+eb0X3bI/I+MuY2' +
                '7ZD3Sabap56Ia/ZaZOsxskj77uYxJv+g09qmOk5/ultUyPbdJp+lN2o5t0WlS7bYzTa9OadazsNOXu6A+kiAUJtPIHwJzj433R0M38A8wSRhgypC4JSG' +
                'CJzcCSsBQAroRgk6aEVUxcJoVVdgAT+sqFUZlIlp7kek562iLHnl12037w5Alk9cV3SDRZSv6YNLhp/866YlXM+u1zavVIa9Ou9n1201r/enmtdfCl2S' +
                '0qaS63aRdddOmmlp/8eaYzQVHbBU0CoeQLui6EVSCoHoRANwoQcifNTGE3SnkH3IUiQgVc2j+QfNrH20yvTyl2YBN9Xuvqdc1/68fbZ65t/KMO2EP4jB' +
                'MCEiK4hvob4ugDZdcGeM2N+00s0nfwlq9l9boubDFoCV9co/uKZJYoD+aCBlyWBd1fOawFIyAKUBlAefVNTg9gvpFqka+BLrgQ2PWlD7bY36D1tN7Tz2' +
                '06RJfKUOeAek3kpS4hUYZk042776qzhvTXxu+etTCczM23MjeXrT4oHnlUdeCPVWFh4isr9xdZxxvMmD5I/3XN3h/9+PvrB6Qf3bBocrFh0pydpXkfeW' +
                'Yd4TMPuAYt/rcO3n7f/veclOraQ16L+04YR8LmS7kFiCZH/AI+MncAyCPwq9jjTAcG9MfUJLEiwGAIafOH9awAABwH4rKYljhqpEjjrYWhXtlHm+anm1' +
                '6bexv+md/uuRsuYiKfWjIpyub/27Ic69N+q9ui+q3zzW1md28Z0GTzjNMvx3wpz4T13xtsUTQoq/dGTO/qtt1lumVcS8MXb7kEOHjkW4gKZAA6ScT7gh' +
                'sSQ0qSkhRIO4GqxlIIPi4P4BfFl2g0QfLy+qnLXokvdDULb9uxvz0zMP7rGEINGQEOTgR+lNigDIC/nDIW40zjz2lWqcJO+r0WNBk6Pamw/aYus5/pOP' +
                '0wXOPX7RDTIFEDDJdrOtY+ZKSAXsIGBp8BB8AT/xqyBtBHoQ23Ai2GrWhWYcJEzbdKjPwK0vaiPJ6QNJ0G4u6fLrvqW4r/jRwae6uqkoNMckcE/IhSC9' +
                'skJfE0GW88+v1e+SbOi+uMXBzk36LpuyqsAURZKOeECJgiQRyR/C0Z53BdxedatF3/uODVrUdux0OLkrK/dzdj5/OPchXj93FXR+gYdUPiIYhYPqTGgA' +
                'igJo4DG4wDCqiscE4SHN3RXW7iQcebTu9fqfpv+w1PXfPzWvekE1JbD76zSfTC4dNXvlp3v4R845/vOjsoDkHBmd99VHBoY9zNo+YubRw88ErlSSkZsu' +
                'Pu1/+aGO9dllN2s99YdC6zDU2j46TIClULalRDZJb/Bd8YcjFtJAuqZCGIFFNQG5PI3RTRKM32Bt0X1x3wMra/Qvr95gzbOXZaxIIN84GIWsTNY1L+nC' +
                'ej3BkTHZGw+YgGjrvYPP+i00d5tV8a2vdd7abusxr2ivv08KTEHRikLGSrMTxkABBPBNkA5wB+EAtCKagyIYEOQehR70JdMKJOn2+ukW7UQVHzPDRF0w' +
                'wGlSjUajdb5vZNm8tefbN2XM3lrtURAWREA6TMq1FZTkoCVh01Td9kQ8XHG2aPqdu/3W1+qxunpGVs6sIMlPwNJIOLZQt+FVEOI6YUPVFPxq6+GyddpP' +
                'TvtgMbkxTZdDFB0lM4p/jPgFBLdnGwAGklB34Bu5lhVE1LhTWIPUGpRZVeBolGJ0MoV239LTJB+t0yjG9PPE3gwpGLj1dzGMdxw5Wj96iA8USKtfRHQG' +
                'Bid8W0W0JWYKQhKNbhGrjoNJBbBQ5Amj9Ob3jp3trvzS9zkuZHUZ9PX+/AA/hWzmI/JQmCbKugaqDUSkqhCA9piphXk1A1XBLQJ9tsDRMX1Sv/6o6/ZY' +
                '2zMj8cNmZW0KCjERFnY0GuZBExnUuFGDkAM2HJV8oaA+g4Tl7n+i7AL9r6r7isUFbGgzZ1rDX4hfeWzR/xy1Kw05bkXRwAFC+6+Fq8EA6RI1ABOSt6gq' +
                'U8n41QsXQGVt110+XP9V21KKD5f4IGH1c0JR4dUxQ1OvldPuB+V3fW3fgokwHEA0lU0xXDDIc44wArRqiaESLCOOjBYebdstMcf94ek7eziKfBGKXA3A' +
                '8PRTQEoYa1RUe6kxHGC044fqPfvNbf7ic1HA9/CCD3wJzn0rYfix0cOdxqK51FRA31DDmHfycDucVZI2VDRH2zxu6T1ApJSJGkcdAX90M9ptxtGH7TNM' +
                'rk5/uuXDsqltlGq6vStjENSp6W0ZVcWRDqDKC4LlFxWVYGYc7QCQukXGVBdpwyY3AhfrCaNd5NWPU9kee/8L0Ss6fP9yz9KT3th/JMVzwCIIhwaXwmqZ' +
                'oih7SwrqkyXJITKAiAY1ZX9oofVH93pvq9dzQpOvCEYuuFtGIAz2WtISqxjilWoaUQdU0TTCClIEIGX2cdeDJ7tnPvb+l5dCtpoylTd/Z0eytdbXbTHn' +
                'pnfwtpxweEVsbzG+EqgMRxOpxiAWSgWQ1oakhw4jTYowJo/NmlDFizXNtvliyp4rUEayjKGEoUxkueOkO81qPzJFZZ0oo/LulT40a1QkxBHWiquoaiJL' +
                'T0A0Cvb/gZIOMvEcGbDL12QhHyNxZ5ZDiKgheUUNaxFCQLicYhlGicRKKZztqPWr7nwcvrOIRH8Cp/oMkJoG5T2VrPxZ4UxEQlKbENDWCg7sa1LG4FFB' +
                'SKPYg/wGH5pEMQo1BvPGG0KGS6v5Tj7XoMKd+65m/H7xm2nbPNRaViGjqqjNjCo9+vPjkx8vPf7zywvuLTw7LP/BJwaGxi0+MyT/62YIDny06OmbF+c/' +
                'W3Ry5vviT1UXvZp8cOffElmNuK4cO34l3/nSb6Y1Z9dLmv/LByuztJZD6GfitGRTEKiOIiqaq4ITVQADcsazJcQRuZuy6Ww27zW/Qa0u9HluadF40suB' +
                'aKYk4FSeMYK1RVgWpR6SgpgTAl4JZeyQ0Yvb+lp2nDVx8+2/r7C36rzB1mvfU25sapRc065zZccTqPZdZKF9hNM1DuhsHQVMKeBHsD2ASKHkYIcwF0fk' +
                'qlP7J6v9o98WS3eV+BQlKHHxSLFJNMcalO1THgbPz1t8mdMRHEanht7mcooBLADlLCmIVdNOF/jbvdN30PNOA9aY+Gxp0Wzxzh9UixcSgCi4dCu2AnAD' +
                'uBbiCIVcYXePQB3knOg4vrOIQD/mQDn7oBzzqUKz8VO51WBAD9BqQJD4IzIOLg+gFxLMB3a0GqCjOVkpZtPeG3PnzXY3azq718pd/GrJ8yiZziYEuQXI' +
                '3bX/jVz9r0XFmi/QF9bvmP9o2+9E2sxp2ynyiW06Lztkt0/Ie75LVsP2sxzrMebTLgkfSlz7WrbBpxqK6r37R7p0FW772lgto0yWx/Zdba7QeV/ONCa9' +
                '9uDF/j6vUj0DQtBynRF3UgjJ4RSUYEHlNEiG6go8Zu/5aw7Tcer3X1e2xtnHnuR8vvFgE1qYlZFGKqXKQk6JwPEWTFQ0crl+LuWX0yexdT3eeOGGXe78' +
                'TDZ53sV6b6U3S5rfos6pZr2X12s/uN+PwsdIwH8Mi5lQgA5ES6E1IVIE6GlIfRpLA7s9agmkjF/1Hp5GL9lwnlIQA4lLZcFiiOPZ2hTurcN+hC05aAw8' +
                'U5VVVM1Se50F1DCmqCpCsoTt24PLrBmmZNfqvMvVZCRvI2l5ug4WCvKHQUUUKS1BzBIMhTdAFpyhC3rDra3PWkkOg1rwcBnO9n757wNxLGsTmHw+IYyq' +
                '2Kggk4JUUDPgAT3hVpjTFJSqEkQDinWG04QwBZXrDdjNNL47/dd95mbsdRQo6ZUfvzj7Y6I3PG3WY80SfNU+8tbNBn621e21qPGhHy3d3tnx7a8OeKx/' +
                'vv+Gpt7c2f2tLnb4bHu29sUbfbbX7ba+bsaZBx/lPdZzd6ZO1K074IWHedltpP2Y9xBHTS9NeG7qhcK+r3If/4AdyHFaLiCJIJGAIrCqxaixewkXGrrv' +
                'UADKm3itr91jZqEvOR4vP3qYSlB6TJCGkSQYvAPFwFgjGlGF4tKgTuM/c8UyXCV9uKqsIo/0l1WmjNzdpP7NGu7lN+m+p32td/a7z3597+jaFEw5s7lp' +
                'MNsKSYUDQURS/YTCkxENle8oa7DSq8JedP83fe90NsQXsRPIGAiwvMhY3We5S7FQUVJCDkClxgsSKIuSPUV2MKTwSRMz98NyTwP2j/Zebei9r3DV39vZ' +
                'is6zzQUZTfGGVB+IVORCIB/gQ75dpORKFWHO7mAhFES8oP2DwLjD3kJH9FGiyCg5JUBRJURRVxoALNJ3VZI8su7UwROVyGW047x04aduTHSa17LngN28' +
                'vH7ex6IaAvrZFBk5Z3azdyIadp9bsOr9W91U1uq83pa0xdVtj6rXB1HujKWOlqcfKGj1XPNZvfZ23ttQetPWxvhvr9tvYdOCOWt3WNey+qX6X1XXazHt' +
                'zxI615+ViBh0pj/9l1JFH2i2r82pm2ifbwKmWeGJsBFFaNQeZsBLUeUaVaCUaKWaDn6+7UL9bZq0+Kx/rtbxe1+wPFp25QSOvHmVlUTdkyBOhHuI0g9R' +
                '1XyDgNOJQYn2Qub1lhy9GLr1k1hERROuP+TqM2Gh6M7tmz82N3jliarfouX6FMzffKvVgV69CQNSgVAhKsqrIHMwJSQ9EvWMW1HbUWvAfc/eWu/Bb2BD' +
                'HU6rCg4MhhaAax2/7IVcAZ0PJHKdyoHyiEpClOBBPi+i6HQ3NPVU7LcfUf42p98r6abnTdhYVq7o/wvG6H4oaQQ0xeoSOGkxC4sI0q0JJi8BzhEIhSRG' +
                'Bsh+QiPHPcC9qcLR79GMPiU+qSqLM0YrMxvC7633FgbdnHfxlh0l1X/jo1z3nvD//VLGKigXU5/P5DV/o/XSXMU+kz2zWc17jHosADXsU1um+qEb6IlP' +
                '3paaeS+v1XfRI2hxTx9mmtLzHuuU91jkbeGrWI//xPivqdV3YMH1JrXbZpv/+8PcZk5bvukpAWns60nr8+XqvZtb787g2768oPGQp5XGCCc4fUipJ5EW' +
                'w+2ikgg6OW3UZzL1WrxU1ei6r3wW4P3eTqvbqMdg2xCxIDIA2TguQuuE1gsC9VQbudzZ+ffToJZfKKOxO7CzK2ni1ZXpuja7LavXfW6vfnhod8l94d+X' +
                'qwzYI5IqGWAaqDMw9BBpIg3yCDiX4YQtqNWrLE12m5e2zuHF0iLA0g/9SRQ/LejUlV7voIKWGwF65ALZiIWB4KFaQopwIQQRddQD3Z+p2zTP1XW/qtap' +
                'eWu7UnSXFSsgXERmNFg0RnJxfj7p1lYmrUKBWOksCUHsYAfBneiBJ2YMkYmDueVn78QC/xCgaoyqSzAHgIyfroiyBX1V8NmAfplx93NU/83zj9jk1/2v' +
                'kC2mzVu8tLXInSr1oyfYrwyevhwg6Nv/0iLzjw7MODs/a/9GcPR9k7R6ete9v2YcgmxuSe2Jgzt6BuTveytk5OHvnO3N2vztnJ+CdrB1Dcna9O3/f4Nw' +
                '9g7J3DM7cPHjqitmrDp8tk8tktOoE1efz/c90mG96afqfPtj85bpv7CH8kx0jhCBVplgJyhM3XT1l4bVnOy1u0GtdnV4rGnfJ+aTgHBQIfiVOijIICGo' +
                'EBTI1JcCqBq0FIVe1SejDWXuavzFp4upiYJ2XQoSfttJa7p6iBu2n1s5Y3aD/Vw367XmsQ+Ff3l279jiJ4ysXhojtJuwS5U+EIhQvAdlHHOj1kVubdZq' +
                'Ws6fCoyGQu0zxAUGWJZ3hFV4KcFKIk3FxySg6iBfkLEoK5CuSFGUUdMOJhuedbpI2t26fDbV6r2uYPnf6zooKCdGBIAcaq0kwkJLDtAJFIVAjYSg6TAv' +
                'qBxCl7zF4D/8E9zqsAVOnuIeN0qoOeSlwjyClYDk7jfO4Z/uAZ17Qeuimgo3FN0sYVUfhamRj0DcV0at2dNuHrrnQHQ8q8iZKvFFAkQd/vOlB13zoBo9' +
                'xm0PFUA4wqIzGbRGLrlLoOo8u0egimbjoiR6vkC5aA97k61ibiDYd4wZOPlO7/aK63Ra9MXrtpouEX0eUGOK1KMlBVhL1kGjKglvPdFgC3NftuaJJp5w' +
                'R+eeKvcgnJ2gBYpbG8wHgHgo2HihRg14l5hDRBzN3N35l/KSVJQSPwI551ikZyplK/sOC0/U75NVJX1+31+5a3TY2TluS8eWBfWeBBcirgyTt1VgOuGc' +
                'E3qHEvqpIvD5yc/OOkzH3OsKeEnOvgnugeQG4wfSABmD6sRKAnKFOVSRVFAOQ599wVkOu17zr3Aa9N9Ttta5R2nzgvkrAuSFwAE4Xv5GQIFWFsTomSAW' +
                'OQowcgTQGfIgo4R/+fwjMPSepPwGixophTjQUgZdEllJUn6pBK0hiQld5Srxlj7/+TmGtVplNOhd8uuDyLSdS9LjIKxQb9QnIJSGngpwB/JamSkFmGYF' +
                'ftUrILOHfNytlnCiUSQiUulJEFgFZeWTncQv3FgXZw/iFjzmAX2HaVVTFIIeAynyIjmL6C74iftl/ten12c/0ypmz6w4YnA/EqusMy0M56iLRF4tuteh' +
                'SWK/n2jo9lgP3nyw4CzoH3FM8tnvgXgZ5QfYsYf0G7u0C5r7Ry+MmrLjt5pCh6SLlgHSahvTNhrqM2ds8fampdUHzvtuadF9Z+/Wp/b/cdcUaZ4KQ9us' +
                'yL+iiSHJ+txLaV6K1GbmmRcfxeXvKCA1qPJ2nBEgpwWb8ooDfCYogWIOVDKAQWpCzKMqyCLEatAFddyQg12vWJQ+4r9NzbcOu84D7Sh7ns8A9OAhaMij' +
                'QEhHGQrYIdGiUHKSlsMgHJd4Az/A9Br8F5p4VlZ8AQQe3JnABheNEgSFlyaOqXkWlJIWlOZIOVjKo1d9WN+yY+0T3gomrrhb7kYPV1u048PnMVZ9l7Rs' +
                '99+SwrCPv5x38YOHBjxbu+7hg34j8gyMWHBkx/wTg4/wjH+UfG5Z3cnjuqY9yjn+cc3RE9tGR2Ueg/Tj7+HuzDsPzv2WffGf20Q9zTn5WcO6zeadHZh6' +
                'YmH/oQrkOvnTLOeqF9zc+8kbWM70Kcg/YHUHkAelpPMP6NTlop9DIJdehOK7Va03t7ssad8z+eP6ZOwTySnGSkyB/4TjwsWEQN+g3cO+Ro8D98Bm7mr0' +
                '+cdyym1Z/FLJazmNReFoO4d/gd10Ldvx0t+nFyY/3XfObYftMr81s0SF7dMGFm2SUCVWDDpE+P0G66FDoaLncbuTSlu3G5u0udisImyklQbgHm/EKPEg' +
                'VsnEQLCPqQCG08EQQJOAewhAt3eW+aefc+r3W1+6xpkGXudN2lAP3jBpmRUizpBT3jABjVQApq1Bqgs8DmkRO5wX1O/ruw0/mnud1kY3KbEhjhRT3blV' +
                '1q7oXPJUYgaTUpqFXhq6q335O87SsyRuu3AIHLqF35mxs2npMk3ZZDbssNrXJfbRzZp1ec2plTKmdPqVe2mxIuxp2zmnUeU6jrlMadp3WKL2gYXph424' +
                'FTbstaNZtbou0uc3S5sF9nQ5z4TnkelBimd7Mqtsxr2HH7HqvjW39Tt7OM3anhLafc7w0bH3NNnlP9VqWfcBrCyJCZiTNz9Eu4N5Mo+HLrj3WvaBmb8x' +
                '9ow5ZKe49Ygy4h5ybZfUU96ygUrJBSBEbj4bN2N6i9aQvlt+oIMLghGW/SyIJntO8HPIbaNFe258GL6rfIfOJAeub9llfu+Pip7sXzN5x6xphKBEEOuQ' +
                'm7XRQ/bqc6/xx/lNtR83beQe4p5WIn9I4MUiqKiFwWKp/j3uoO0DawP01e3xYzgngvl7PdSnup24vq+Aw94wADkKiRJ0UjH+Ge0aQfzw4ThOYkAwHYni' +
                'Bp/2S6FIUlwKSCnFKtRc8s47+OmRJg46zG3eaPmXzldsquhZEvbL21mw9o27XlfV77Xy0x9aaAzbWfmetqfcCU6+CR7oveyx9Zc1uK2ulL66TkVsrY16' +
                'NjFWPZmyokbGmZsbKWhlLa2UUQgv3j6avrtNnW+O39zcYsLtGxrpaPdfW7bW6ZruZfxmQvfOcy6WgTactwH2d9gue7rU6+4DfaiA3mITiZWm7IhuVNHp' +
                'vxZVHei54tDeeFrj/aN7p227MvZ8VwXkC9yLISzCAe1LS3WLYymHum7ce/+WKm+Vu/AtlWGRDLCXCf2TAQ6MyL5qz9fYve2aa3pzW4q3tj7+119Qq7/n' +
                '3CufuK7KK+G+8CNbvlvjjxWTXD+f+ovWIedtvu2RESTEfCVSFvIpCCAzwx/Eyw2u0ACWfAS3ImeehyJeAe0pEV22x97OPQ5Cq22Ntre6r63fOm7KttJw' +
                'FHQrBWIi2pKD5QUt4GKsA/BKEEgOqR541BFbjeOV+Bu8Bc0/z0o8Hy8k8o4s0pJIczzF+QSIk1S0FCNBiMWolE1AHv/Tu4hbdsxt0mjJ+07WrMjrNoIy' +
                'pu+q0mlG/8/L63bfX6rmz7uCdNQZuqDlkfa23N9Z5a0e9Absb9t/VpP+WpgNWNRm4plbfbTX77qzVd0sdKPH7ra7TfyW0tfqtN6WvNaWtr9l3d71B+2r' +
                '22VpnwJa6gzbU7JL1/ICcPZdZu4ZWn3A+P3RjnfYFz/Vds+AI7dAReFRJIWnaLcl6OZMYuuKiqcfcR3qtqJm+pGH7OR/OPXXLVU0IUR8jAPcMA6l+EMQ' +
                'Nufc97t+fvq3p62PGr7pZRkQlMWBwfIBlZVLkaM3lFDkNXXPHRhWeerrv/AY9ljUbtLtuj/WPtZ/VZvSm1ccJSBXdguYSleO3/Wnvz33uzZH5W++4BEQ' +
                'K1V5fgOZDPll28zSkeywn0ZxK8SpQCC3ImeME4B4sjRTucg9BCrivmbGqXqfcFPc4qIMBikKKe4qDsZBEyj5RhtrSzwc4Br/dAMruZ/AefjL3AJiLYyW' +
                'e5eCCGga/vhACXpCamrD4QpDBvTwkr2VGZp12Ez5ff+OSiG6oUJ4efiYtu2X6kkZdV9frvrFB/62mnqtM/daa+q17tM+WGr231uq1pXavDfV6rQZTrtd' +
                'ne92+O+r221y3/4a6A1Zh9F8D9/UH7TR1XWvqtrFWz+01um+s03cDPK/RKfOPA+buvW6AlS88TP3mrU2Pvpn3XI9Fiw96wLuCQYPrpCg/pFdldPT95ed' +
                'rdM/9Mdz7wV2LYQsL3G9t9OqoSWtvlXpiJK0zXorz+FkvJ1CawhkUE4Bq4ow9/FbeiTqds2p0LHzi7T2PdV1cp0N2/6lHvi6L2sRqQkcniqQuQ+c998a' +
                'ogi3FUC9QPPL6QgwXgtrSw9Es9/e5Fzgxxf0Va/RvWcce4L6M+Y57P6/6OO2hc08Jgl/kKIhSPAebxjuGJZMgfJwYQlcd+oDJaxq0Ht0sbcbrozZO3lJ' +
                'WBmnRVSFj1OrGr455Nj3/uf7rGndf1mLwVqCz9sCNoAQ1+q5rOmR3vb6bIZi1HLK7ab9tGP03Nh2wtumANeAMcNt/fb0ea54deqBxn22PdVndfMC22un' +
                'LTW3mNO9dMHU7/suO/UWo46gDz/bfWrvd/F+nz8lZd8XLIJqEEB700wInayWU8cmycw16zKvRfSnUeBA+IYhet8cg1wMVIVmOJLHbp2kZ+ns42ckHkz5' +
                '/25Ptx48sOIurCTHmA9ZZhfKrAhMUGfwyy8MaUKfsLjYyph+ALKdu58V1e26oC565Vdaw7DPnHdXOIDp8J9zxvcX/2WbC/I1FDhr/BabIIomPg+OlOPZ' +
                '/4p5jeIZR/Hw1cJ/y+al4D9xP2lJcTCa8vOajGYZjfZzyD7inGTid8EP8M9x7ZcYrU0A/fARhsSxeg2PlQCAEdX8lE1xzqrzH5I3123xe4+XRHT/bsmB' +
                'f5WUvcBPqP2nnM52nN2k7vXbr2aZWmbXSF9XqvtjUJcfUNbd+n6W10xaaWmU/1n4eBOx67efW6ZBbu9Oc2p0yk5gDltSs+5JabefWeCOrRcYyuDe9PPm' +
                'Zt1Z8udt7hkarL0R6jfv6yU6FtdosqvH6zC4fLz18kWCoas4XgNqToFUoe8pIfVThmWbp82omuQdRAvfXbNFUvPcz7D3ufRRPsJKDC4DdfzB921Ntx41' +
                'acA64p2AqL7Bi+EiNY0MCLdFexu1lCTFxh0eLTxDtR26s/ea0Rn03NRu0t1arBb/rt3LcymuXSXTRi9I+2vybNpPnbygB7sHkBLZa4iI8JwNzQPM/4N7' +
                'HJVJ2f4/7uh1z/mXcU5z44+ETeLdMAnwCS7ESwxgcZYADFGhRFQWr02FlxHI5sfGyp/2nKx79y4fN2k38dY/pOfttFwW04qKUNm7bL3tmPdtrwa8GLXt' +
                '2QOEvBi9+ckBuywGZvx268A/vFv62/8Lf9iv4/cDFvxu08Ldv5f8nYPB8jLfy4eOf31vxq97gz3P+MGjRb/rNf/69peN3OooQWnM93n384ZZt5jZ4Jaf' +
                'mGzkvvLtq8a6bXjbO+8KcJ8gLyE0FSSVY7jc+X3Tmia654PBT9f097sHnp7gHt09R0ve53/50mwmjFlwo9SC/WO30gf8MukmdYsMsJdNe1udlvFzAH0H' +
                'lEoI0/vmB82p3ym8xaE+Tbutrv57z6z75849KRxyo06ivftVu1rzNpXawezHOU7hW4lnI9BiWhSpUpFiFTFIILcgZHgL3WBG5xGVL5J7Ph1wPuJ+4uQi' +
                '493Cql6JplvGyspdVSRbGSgCvIGG14AyW1sAzUTScjv8hMPcPqMM/hpfnXBIUOn4Pz/lZmaF0ntQFvwz5hp9w2502K0k61XCJjNZdIDLGrm/canS9N0f' +
                '995C5M/ZZLojogA3N2WOfvs288CSXuc+afciWdaAsc9/tvP3FCw9WLjlgXnLAuuhAVcHBqgWHLPMPWeYetqUA99M2XJ7/Vfmy446cnXcyt93cfF0+6kL' +
                'biuPtP9v2i/S5j785+9kOea99sK3giNchIR+pil6N8xgsj5xk2C+Fy3yhsfmnW3bOqZlWCNyDKMGRXrVGUvEeDMjvl2haJUnRS3JuRrSzhplBw6dte6r' +
                'V5JHzvgHufULC4RPBNF2U7ufClF9m/TxHS15KdvExKgxJmT5t7TdNOs9ukLb0qT5bW3bfAE6o7bgTE3fqL76/9xed5uRuLbawCVoKM5Qh0jpLc8A9WC7' +
                'NCCQjgzyBQmhBzticaQ4UEZT4kjn83pyjUJik4j24QOC+yB8H7j0kBdx7GMkD0YGBsSLAw4tYLVidoVRQUJLifTT3Q/xk7v0cB2WJS2Q8vHA/9zwlgp7' +
                'yUO6zjJlinXp1lYpWn6zsPGrRL3tPNv1x0G/7ziw4QtwSUKWGSjh01V1dzKJyEdl05NSTb+7ouIOO2amolYtX8dXlAioVUXESpQIqA/MNIIeKX6qYhUQ' +
                'lj8wq2nHR0ePzZU91ndXozSnPtp7Q7cMVBV85rDr+l1lVlXbezzNegQXC/CE/H4NE/bP80493yXmsW2GqvgdjumIJu/mIl+bBgHw+McU9JHMuWrAxehW' +
                'Nhk3Z3rLVlBFzL5UQCCZxeimSE50UeFGD9IHPZzH3pFBFCOD5vTK6YNHezTvcPC2r7pt5vxm8q0HXxY17rnpx9Lkn+6x/umtW9vaiCi7kh9qDFBlapmg' +
                'eU0cLf5d7hmKBew8TA+6HZh6BDdfpDnXvqtrtsyZsunPHFyNYBbinGPqf5/4BV/CP4WN4gmMJjof1fIxEkwpDKpwfWokXVEipCIZzsqyDl1xquIjU152' +
                'vfHVEQZ22o01/HPr7nnOmrb51h0SuADpdwu+6aN70dfHui/ZTxcLJW+yxK+5jl+1HvjEfv+44csN18Kbvq5vMvpvSnpvKvpvCgZvM/quuVQcuHrxS5TT' +
                'w33VtPFU5eMLyZzt8XuOlcZBDdB2Wv+arOzYoqyRkc4FBsSzpJ30UlNFOf5Dkqktd1aPzzzbvkl0jbXGqvgdjSnHvoTjg3uuFikDx+4X7uX9/8raWb04' +
                'fMfdKsRv5uaDTA06BcvsZEDTtF70OykcAQ4qLUh2sBvWOXYif9yTSvtxY++XJT3Rf3aLfxlrpq+r33lar09KW3XNm77pVLqiEzBEk8y0lTFIDeD+N5Qk' +
                'UQgtyBldOQx9QRCb2TVUIuIfCpHbG6sfSVwL34zfevu2NuhmZ8JMkTRG0SEB0oGGsACA4AasFoyXZkfwknI79ITD39+vC/wovBg+LgaPzgfqTIgXwyxA' +
                's3T7J6RdsXhKKfifls5IeMmyUypHZx8y98s4822N+vZcmvDRw+ZyN5pOV6IIHDZmx9k/9Jz/becLzAwteHLLyL28XvjhkwYtvZ788JPOlIVl/GZL/pyG' +
                'Fzw9Z9d9D1jw/ZAXcP9dtYtfPli056bzCow2X1S6fb2nYauIjL46v2Sqn6/iDG44U2UkZCg2bh7fa3KFAkKQdPspJC4rTp9I0KnciSNnwP3JIWwTcgyi' +
                'B+8vmkIsLA/dgQMA9nMLn4wkf46R4K61VUsD9jifemPFJ7tUSNwJbJzwOhvUQfqBMBLGSbpZwMn5Ko6SIjVbMXsolGp4YWnPWmTZmz5M9ltfPWFmr16Z' +
                'He2x9pOuyx3vmztx7vVgUXYof5OOhWDeNQVIcAITpTVIILcgZmzMJYUgg6OjFyuC7sw83aJcJ3NfotqJWuzn3uHf7/MC9mxLcEB0oGMsD3CyP1QIyXL8' +
                'MCurzsx6S+SGS3KcU8Ee2FMyOib/HfQo+SnZ6BKdfcvlYWpCdXpeVsLKGVMIIJQk0+4jr9Y83P9k+p8GLU37VNefzZZcucWjRKWeH0Ssat57QpF1Wiy6' +
                'FTbssbpKe3yg9p37HqfU7ToOoVrvD/NrtC3Da32FOww5TG7b67Iv1t89QaM2VaJtPdz7y8gTTa1Nb9Fzc6vOv1lySIRbYfaTV5RVkQxI1p9Pppx0E5YA' +
                'a2uGXfSwqcaFR+aeadplVo2tBrW5Q32e+N+f4JUuIYKNg6H4/5ffSNMn5fQzhp4F7M6OVg91P2fzUGxNH5l4odiEfG3B7CIb1eXzQlYUwJ9Kqj+C9Xgl' +
                'cQhXBltjdHlm75fITQbTlPPvq0BW1Wk+vm15Yu9eG2j1WNu2TO/Wr27clxSYzdtIPpu+mOaDtWxmC/SRvKD5JPJXkXnIy8fNV4XdmH23Qbnbt9JU105b' +
                'XbTdj/PobN71RO6M6/JSHJrHuUgLQ8a0CiUnugSA8J5wOk/2DFnPv8fP4w49t/wFEwg8rwU1yAZKB49kYHrzcdTa+5izZZ8qh5u2zTM+P/uOQheO23C6' +
                'KoOVnfJ1GrHu64+ynuy1t3HWFqW3BI10La/Vc1KDfyke6rDB1XtlswJamvQobdJ7wXN+J4zdevCGjLVcSr769tvEbmbVen1G3S2ar8ZtP+dA1r15Ggpd' +
                'OOiQaiw/MweK0khJL8GKJi62kojcINHHVuSZtv2zQbXHd9KX12swcOuf4FUe1X0CiYIRlxW81BwWO8rj8FGkjWbsYuuEzhs9Y84vXPxqbe+xSueFkolY' +
                'nZbO7CcJLEn5IsRgPS3tEvxcOLkMS4KB5B806aRacv0eoXrvv+l/7Tm7abtwT/Zc92jXP1GHKuD2l39DRclrycPgtgt0NPkOnqTDp1X1uiSKgjoIqDYI' +
                '2yfp8HCM6PWKFN37aHB+a83WzLrnN+qxt2nM5WMu0DdevELEiv1ZFQkrDE5Tf6QJnxMJOfD7Z41NcJN4P7MRFAQtA3N9h8x73DwsuirXSjF0OfuMM5x8' +
                'wdxm7vV6rCQ3ajnt9xKpJW+6c9aOvSlHHkVtq/GVc406Lnhy4q0GfrQ0GbzX1WFFv4K6n3j/8WNfFppe+eOHDxVP23Lqlo82XpfSR2558Y/qzHXKe6pr' +
                'ZZuz61de9V/1Cid9XQVFWmoM4DRYABwPbhdQEvF+pi7rp4EoYdMGZ+LLw7BPtJjXouqhRj9VNu84fmnvuog25WOR0CPYKO+8hZNLvtjsgnJd7OJuKbnH' +
                'V789a95+tR0wtPHvLjX8vLneIViek4LIuGSnuSS/v9909KRDvYBgIiy4vCfp3s8w9LX/X79O/rNXqi3rdc8Dupx92XeVQMamBUTKs5CJEN6H5/GGP2yA' +
                'cvN9Bg/1KPhrSM87POJ203Ruw8+isDb2Tda5xh9x6nZZAgPtFlzkz19++TqIKyIJ9oo2kSZ7nBQm4J72giIrPq2BdxJuhHAw4mL9vtJh7wsc9PLj9nNU' +
                'nuMWwQ0PX/ZFlx6q6jF7Z6LVPa7zw0X8PzM856DvLomXf6J2/2NOwzaz6b859pj9+m2tKX1Z/4IYm/Veb3pzyq7cWTd5jP+5HS07Lg2Ycbf7auEd/O/S' +
                '3XSa+M2XjhlNlVgOVUP5KijBTPgdFA21uL00QjJOgXV6+CizeqxMq/ouBw8WxYbNPtISMqePiBt3XNum6sPuko7uvRcws8rLI5w867YzbzVY5GAcbKSa' +
                'jRQI6ZglmjF3e4qWRI7JOna1Edhn/+QlUDYRfIVys38P5PQy0Xh/jxmGCtNM+Bw3JH+MgfB4vUBI6X8wMm7X98S4Ta3aY9MzAvKyjjpscECY7/RzLyW6' +
                'PZHMKLr/hcEtWO+10+L0ESflZysdB8mF1yDYfKqfQzsvxXuO+fqLTspYZWx/vsubZtrkjsy7AfggD2QXkoBS3T7DbfT4PlNmSzyNBDAI5OGA/jMtBu2F' +
                'vD5CSAube7WUfHoAAiwvoFx2sDJl/CR1ae7wifeSqhn/9tGmrSc92z/pwxbWTPNpZidqO3PTYH8Y0bpVrem1OjfRFj3acbfrTB8/1y8s9xh71oGUXEr8' +
                'fsLxFmxmNXx3zu/RJ70xetfdilV0IWijaQnttNGGnvHa/z0mQLhfldJJ2F3AvQTVd5DQqaHSqNDZ1+c033l7RvFVmg05Lm3RfW7/d3N8PWPpl4bX9V2T' +
                'I40AUxZVQFVZXekK3ifBFR2THNWb8mnO/7T65/gsjWr+7evbakiM3jZvORJkrWOmQbA7W4+G9HhbggRTP73eQXjsF2yBACcDUCA8Fya+dThy7I7+dfaB' +
                'Oq1HNuoydvuvWbTpuJhWnF9J7AXZodvI2r2jxcBY37fDQoLguD2NzUuVW1k3hHOXI9dD4wjt/7Lm80WvzWnbe+FTHdY+/nN1u0Jq8deVnS6JFjpDdF/R' +
                'RAbud9hJiCrAxl4/G+6HhsdPlox4gJYWHzr0buHfQZhdldbttPq9fNMxUZM1Bc98vtj3ebprpjx8/3nP2mO0V+51o/SVj+PRjf+654IUhq9t9ufevwwt' +
                'eeC97yvbbp/xo2dlE589P/qLbCtN/jnyq4+QvVp4+WkJWsppb0CqdbjA1J+Vx+jxQgMFBgXiHgwJuQHxfHbuZv+bYlIKDb3+x8Q9pM5q9OKbp6zOadCh' +
                '4PH1Z0/bZjV4d/0LPLPhq4tz9C1adOnzWXuqO7j1jyV57asbas4OnbvyvnuPrvTSsxevjH39t/F975wydvH3akqOLN506cq7M4dXAakHKHg+ckQb5fsu' +
                '9F/Ivh4cEu6+y+Ktcqj+Mdt2UXxuW16zN+5PWHL9FqE5aAbcEygHh3ELwFvBPPhYyDEgXXLRk9nB3zL5LRcSSTadnLzn+4dTdr/aZ1/gvExq/NOvxVgu' +
                'bvjLvmZezf/XytPb9C0ZN3pm5cP/OA1dLK2ivR/W6FS8hAe7j3mmnXP+Ie1C0hwqz3Q/m6Ca8VqvVDlLhI0XO6IZT3jc/XNG08zTTXz5+qtecMWtvX/C' +
                'i2160+QS762p802Vj9XnffnPgsoAKTtBvDNvRrNX8pm/Of6pD7qDpu/fcJsulUCXLVXhJi9fvhGIOi9tvd/kcDj8Q73AwdicH3G/bd3FSzqZPpq4dOn5' +
                '9n9Hr+o7dOXTWme5fHhk049z72RcGjNs94PONwyZu/mj82s+mr999vOpyuVK47ZsPpq4elb3zrclr00YuHDJj59DMY73GbO/9+frh07aOmrlxXNa6LV9' +
                'dtHs1YM5FCC4PB2d0eimoMmx+DPDnFVY3cO9wM8WVpEdBJSzK23Wt3XvT8jafvGXnIAl3uf0Op9fuxkYPxFf5aQvF2hnJzigVXv56le/sHeen05Z9MHH' +
                'FB1M2Dfpi0+Bxez7KOv/ejHODxh0bNvnM0DEHhn+5Y9SkrV9MX7No+Vfnv6n0+DSPSwYQbhnSCNgV3g/pAcDe7qfjHjD3oIMPE6Sd8JmdTsJNgje0Vnm' +
                'cbsnBRq+5I7n7StImbmvSaXqt1758YfCS6etLzpkheKMiH/4HbOcJdFVEq64IbT/bXPfVqQ1fy2rZOmvU/Etf3WS+cTJ3vL5in+eOi6z08ja/CDW9zcV' +
                'CyATYksQ7XLyPDd2upL6+Yj9+nThdIp+tjJy1oosOdPhO9HhR/KoTXShPnLmtnC+Sj37j/voycbNKMfvgCbn9eMn+b5yHbpBH7/BX3OhUVeJoSeh4kXa' +
                'qWDp82fHVmeIrRZDGhB2E4HQDeICD4PF7BS+Gg5Qq7D63mwaXUGn1mwm1iqm+5NAKd57bf7Gs1E7CYPBPNjthdrLY4fvYSh9V4aFBCcyUWOkTbjvpqxb' +
                '/17ftR6/azpQwp4qFC+bQDQ/6ujRw9JZxtgxdqkAXioOnrzOnrzrOX60qrfAxXIhwSoRTcTs1p0sBISf3Q9u8JISSH5CC8dC5BzuH+HervNJs9lB+ze0' +
                'QbQ7eTqplpHGDRXMPVnT9YkfLDjNq/mnE832yP11wqGB3Uc76W1kb7izYb/li3dW/DlvUuOOUlp3znumc+0nehSO3AxVsvAysnKeqSOKWxVXlE6w+2eK' +
                'WIXBW2lkz0O9k7W7O6REqbJTZLVR5lTKvVkwYt9yhG+7QdWfYyqA79nCVJ1FsNYqtmt0XLbcrEDVLrUKZTTR7gxYyXOELmpk4VIY3HdoVq3bTFSr2RMo' +
                '8wQqPZiZkGyGByaZYT9IvQLIGsBGKFdI3rwglFqQd4OTA/myEUOFRLUy4igqWuoVKcEtuCnNv81Y5afD5Nh9X5faXOX3lLn+Fh60ihXK/UOoVHGKo1CN' +
                'VktptB1tCiFY2WOTiIWLesoXKvajIESyxyy7GsHuFcjNhd7Jul+B2pbjXHG4luR/B5mH/Efd2F2RGDws2N2n2+MwEbXEJNqcCsLikKoKFs5Uy0at+tPI' +
                'kmT56yxOtvmz6xujfZIz7Q58p/9Vrzi+7zflV77xf9Z9fr+0k019G/m5AwScF5y4T6I47VOGCqRxWlwVgcbmqnL4qEC6hVLlhWsHshqSJhbwpBVjXTLB' +
                'VBFdBCOUeAURZ7pFAISC7trm4BwA5KQBmAMCQ7wAzu/EofATck4Xq6z6w4GbwhE7JAqdzKrinm4Wz4+QDOAYJ4AnxO3+4sblgCP4KOkA32B50AHy7Ydg' +
                'tCxqQQhU4Aw8I0Gv2EBaPy0Y4LIS3gpDKCRVOBD3NBGkhYAk8G+zE6eCcDskOqagTAzYMS8CKKS4ewMPn3pU6j1DlBnoUswuLBkRQ4eGulHlLfbHrbrT' +
                '8sK3X2PUt24+u88p79VuNfKZHdqP2M+q0nly/zdTG7ac+PyR/yqZbVyh03RMqBrsBkblcdqfD7rRBa3ESQA8wCtTCnClxYIlgaaZwTwkA+AnI3eX0Apw' +
                'unBtCloD3mSTgWw7utfgJfIvZctJQMN2Fk7yHVE2Roh/UGpDUEg6Pwtx7Yf7ktMABBnROzoanTe0Nbu7uAdQaKy5WCEBqDzY3pAUup9vmJKwutxlu4GH' +
                'ymDQYFaiCjSDs0AcnubANrIh2rIhYTWEbqRWTSzwIzL3N6X94sDqZSqdS7tLKCLGMYMsJphJqaBdf5ZTLzLyFCFiZ2IUKYfqa46+8M+vZ9HH/OSjvVwM' +
                'XPNtn3nM95/6uV84rb+UNnrB+2f4bNwjtJiHecbNFbrbURVc4KbPDC+RbHM5ygirxsCUepszjL/d4Kz2eKgLgNbv8ACskGQC4wfDaXB6H0+2E6uAuPPD' +
                'E5vTCVwCzOznqXuv2wlcuh8dj83qsfsIGoJLwu+wAr9MBs+HhUJXBSSF+J8HjQO6k4Dl8m+oAqyef4DwUlyH4HraHNwZJH4Yj2cHBQIXyHXB/P6zicgD' +
                '/dgL8ndMOs8HA1A6tLg8gdYSkwPEMsJO7p04e/B4XDwBzb3X4Hh4sDqbSrpc5AqVurpQgywhPBaitg7PYJQhLlVXwLf5XTre82tEK8bAVXRDQYQ86RaJ' +
                'LJP4/b10oC18sEW+aGdAbyOxuu6lbLkiFxGKHUOagquzuCoe7zE2WEjRMXurxlBFEBUFUugEeHA6cJFSYOAd0kLAZu4OwO1wpWJ0pEOA5LE4PoMqVBB7' +
                '1HawOj9tGeC0EYfERFpKw0G4r7bSRTpvPYfc47DAhkZzEY3GQEL+rHAwATg0fYSx8hQE3WBpkKhtNATpYnD4YCGmB3e5LgrTbmCS4FBw2xmGD5XxOmwe' +
                'od9sdTjtsPjUbHptCcv67S+BpU8CTY6Q6/xD/Du6rbDrQX+FiKtyeCsIFxCT54Fx2wVzpKym3ldrcFT6uhDJu+NEVHzppFi67tRJPrMIVMdsNu0uFxAo' +
                'cYImTvONibrnEGy71llO94xRLnFSZgyxzM0kkFesu955KFzCHmbDYOdhDin4stSQTKaHfh7tiwrhPfFh1nFjuboCVdALrVsZhBVYYO35vAgfEE97VHjw' +
                'kxfpd7pMTwuQp3YKZge/kfvCWUtzf3U9SVlgzUsQ7rMK3uEu/w0Y67KBtGHe1xA669T0kNwDTJme+h3/MvcXufYiAZBuSZ5sI+W2lk6h0OaHes9gJnOV' +
                'WuJ0OvwvMy+oqtxFAHiS0lyvdd5zOUoerzOorq/SXl/krysnKCm95pafc5ocCqcjB3nbwKRQ56GI7XWHnMRwQCPwVTm8ScENB2l9ph+SfN9t4yP/Ndj+' +
                'sC6h0+O+DF2IHILlb6PAtYNv2FPxQjAHsVr/NStusvMWanNAGNQX+NjUc38AS+DlvsbEWGyxH4fnhyCngPt9tCbwd3o/DDYDh0BO+hVEw1mYF8HZLCqm' +
                'P8Jz6dm9e2EkKNhsgNQojecYfIjXwPka+BebebPM8XFhJgBXDZ7W5bTaHzV4FsFqtHoL0eQQ4QGWl22J12txWu6vcbLtRab5ptlaBblY5hHKLVGWRbXb' +
                'ZXOW3mN0Ws8NscVRYnWVWd4nNV2ql4FuzWa6yClVWDuo6QLmdKrdx5Tah3CYCKmzJ53Zfld1V4XBV2EnokHxCVtl8ZpsPNgKwpWDxAfBuLRQAdp4aBT2' +
                'Tk8O0eM7k5NzdeWwULA0bgG0ArBbODLuykbBiucPzLfDw5K7w2AobuEOf2e4CwFfgvVJTVVkZs5WxWu4BNvC9qSDGwSbtFgDsE28S+pstsDrewAMwWwC' +
                'wGfJBRpJIcQ9CgQ8Ppb23UpJ7EkvW6rLZLMB9cWlRaVlVRQUBZm2uJIBUm73c5S51O4vMlpuV5jKzgwBh3amgiysgi1aAe2uVG9TGaraYLTagv9TmSXI' +
                'vYqFbxOT5GRAr4FvuU8AkYek7cH5Q/q2gk9yDXIBpTH+K9SSSmnpP7jDECaN8eBIbV2bHcyZbmPbucndFD1oIm8H8pQgj8agk8feGp7Z0l3ubG1IW+Ap' +
                'yl7tbAvrB5SRnSOHePGVODwBmu6um3yoodE6u/ne4B8nA86T6PsgLtJj7CouvzOp5SG2FBdoU4D4FT4XVDczh9sHnzkqro9JqgzZp2Z4yi7/MQiXhhz6' +
                'VFk+lxQ2AsfhbiAvJDhVmjOT9/wDoiQFDkqPuw3erf7eT75Dsc98oi7/UiidMtT9AcifJrd7tf3f4t/f3d8ZL35251HavM0Zqhvs2gIEV3Yb7J7d6/27' +
                'vm/NB3JVbctSDLea+1OL9Gf8HgbkvMXt+xv9BYO6Lq4if8X8QmPs7Fa6f8X8QmPvb5c6f8X8QCKH/D3hZhc7SHvfEAAAAAElFTkSuQmCC';
        };


        return helpers;
}(_geo));
/* eslint-enable */
/* tslint:enable */