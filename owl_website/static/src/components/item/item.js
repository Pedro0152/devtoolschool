/** @odoo-module **/

import { Component, useState, onWillStart } from '@odoo/owl';
import { registry } from '@web/core/registry';

export class OwlPartner extends Component {
  static template = 'owl_website.OwlPartner';
  setup() {
    this.state = useState({
      partners: [],
    });

    onWillStart(async () => await this.getPartners());
  }

  async getPartners() {
    this.state.partners = await this.env.services.orm.searchRead(
      'res.partner',
      [],
      ['image_128', 'name', 'phone']
    );
  }

openPartner(partner) {
    window.location.href = `/web#id=${partner.id}&model=res.partner&view_type=form`;
    }
}

registry.category('public_components').add('owl_website.OwlPartner', OwlPartner);
