import { Class, Spec } from "../../models/enums";
import { Talent } from "../../models/interfaces/talent";

export const Talents : Talent[] = [
    {
        title: 'Convection',
        ranks: [
            { id: 16039, number: 1, spellUrl: 'https://www.wowhead.com/tbc/spell=16039/convection' },
            { id: 16109, number: 2, spellUrl: 'https://www.wowhead.com/tbc/spell=16109/convection' },
            { id: 16110, number: 3, spellUrl: 'https://www.wowhead.com/tbc/spell=16110/convection' },
            { id: 16111, number: 4, spellUrl: 'https://www.wowhead.com/tbc/spell=16111/convection' },
            { id: 16112, number: 5, spellUrl: 'https://www.wowhead.com/tbc/spell=16112/convection' }
        ],
        iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_wispsplode.jpg',
        description: 'Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 2/4/6/8/10%.',
        class: Class.Shaman,
        spec: Spec.Elemental
    },
    {
        title: 'Concussion',
        ranks: [
            { id: 16035, number: 1, spellUrl: 'https://www.wowhead.com/tbc/spell=16035/concussion' },
            { id: 16105, number: 2, spellUrl: 'https://www.wowhead.com/tbc/spell=16105/concussion' },
            { id: 16106, number: 3, spellUrl: 'https://www.wowhead.com/tbc/spell=16106/concussion' },
            { id: 16107, number: 4, spellUrl: 'https://www.wowhead.com/tbc/spell=16107/concussion' },
            { id: 16108, number: 5, spellUrl: 'https://www.wowhead.com/tbc/spell=16108/concussion' }
        ],
        iconUrl: 'https://wow.zamimg.com/images/wow/icons/medium/spell_fire_fireball.jpg',
        description: 'Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 1%/2%/3%/4%/5%.',
        class: Class.Shaman,
        spec: Spec.Elemental
    },
    {
        title: 'Call of Flame',
        ranks: [
            { id: 16038, number: 1, spellUrl: 'https://www.wowhead.com/tbc/spell=16038/call-of-flame' },
            { id: 16160, number: 2, spellUrl: 'https://www.wowhead.com/tbc/spell=16160/call-of-flame' },
            { id: 16161, number: 3, spellUrl: 'https://www.wowhead.com/tbc/spell=16161/call-of-flame' }
        ],
        iconUrl: 'https://wow.zamimg.com/images/wow/icons/medium/spell_fire_immolation.jpg',
        description: 'Increases the damage done by your Fire Totems by 5%/10%/15%.',
        class: Class.Shaman,
        spec: Spec.Elemental
    },
    {
        title: 'Elemental Warding',
        ranks: [
            { id: 28996, number: 1, spellUrl: 'https://www.wowhead.com/tbc/spell=28996/elemental-warding' },
            { id: 28997, number: 2, spellUrl: 'https://www.wowhead.com/tbc/spell=28997/elemental-warding' },
            { id: 28998, number: 3, spellUrl: 'https://www.wowhead.com/tbc/spell=28998/elemental-warding' }
        ],
        iconUrl: 'https://wow.zamimg.com/images/wow/icons/medium/spell_nature_spiritarmor.jpg',
        description: 'Reduces damage taken from Fire, Frost and Nature effects by 4%/7%/10%.',
        class: Class.Shaman,
        spec: Spec.Elemental
    },
    {
        title: `Earth's Grasp`,
        ranks: [
            { id: 16043, number: 1, spellUrl: 'https://www.wowhead.com/tbc/spell=16043/earths-grasp' },
            { id: 16130, number: 2, spellUrl: 'https://www.wowhead.com/tbc/spell=16130/earths-grasp' }
        ],
        iconUrl: 'https://wow.zamimg.com/images/wow/icons/medium/spell_nature_stoneclawtotem.jpg',
        description: 'Increases the health of your Stoneclaw Totem by 25/50% and the radius of your Earthbind Totem by 10/20%.',
        class: Class.Shaman,
        spec: Spec.Elemental
    }
]