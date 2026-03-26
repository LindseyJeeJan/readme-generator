const LICENSES = {
  'GNU AGPLv3': {
    badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    link: 'https://spdx.org/licenses/AGPL-3.0-or-later.html',
  },
  'GNU GPLv3': {
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    link: 'https://spdx.org/licenses/GPL-3.0-or-later.html',
  },
  'GNU LGPLv3': {
    badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    link: 'https://spdx.org/licenses/LGPL-3.0-or-later.html',
  },
  'Mozilla Public License 2.0': {
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    link: 'https://spdx.org/licenses/MPL-2.0.html',
  },
  'Apache License 2.0': {
    badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://www.apache.org/licenses/LICENSE-2.0.html',
  },
  'MIT License': {
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://spdx.org/licenses/MIT.html',
  },
  'Boost Software License 1.0': {
    badge: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    link: 'https://spdx.org/licenses/BSL-1.0.html',
  },
  'The Unlicense': {
    badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    link: 'https://unlicense.org',
  },
};

function renderLicenseBadge(license) {
  return LICENSES[license] ? LICENSES[license].badge : '';
}

function renderLicenseLink(license) {
  return LICENSES[license] ? LICENSES[license].link : '';
}

function renderLicenseSection(license) {
  const licenseURL = renderLicenseLink(license);
  if (!licenseURL) return '';
  return `Licensed under [${license}](${licenseURL}).`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  const licenseSection = renderLicenseSection(license);
  const licenseBadge = renderLicenseBadge(license);

  return `# ${data.title}
  ${licenseBadge}

  ## Description
  ${data.solves} ${data.why} ${data.technologies}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.instructions}
  [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

  ## Usage
  ${data.usage}

  ## License
  ${licenseSection}

  ## Contributing
  ${data.guidelines}
  If you are interested in fixing issues and contributing to this project, please refer to the [Contributor Covenant](https://www.contributor-covenant.org/).

  ## Tests
  ${data.tests}
  If you would like to contribute and help us by writing them, see the [Contributing](#contributing) section.

  ## Questions
  For more information about me and my other projects, visit my [GitHub profile](https://github.com/${data.github}).
  Reach me to report issues or with questions at [${data.email}](mailto:${data.email}).
`;
}

module.exports = {
  generateMarkdown
};
