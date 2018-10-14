/**
 * PFH Interner Bereich
 *
 * $LastChangedDate$
 *
 * LICENSE
 *
 * This source file is subject to a close source license
 *
 * @author    $Author$
 * @copyright 2009-2018 Private Hochschule Goettingen
 * @license   Closed Source
 * @version   $Id$
 */

import 'whatwg-fetch'
function mreader(data: Blob): void {
    let f = new FileReader();

    f.addEventListener('loadend', function (e) {
        console.log(e);
    });

	f.readAsText(data);
}

fetch("http://intern.localhost/intern_fern/style/intern.css")
    .then(res => res.blob())
    .then((blob) => mreader(blob));
