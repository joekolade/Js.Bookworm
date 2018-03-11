import manifest from '@js/bookworm';
import {IconButton} from '@neos-project/react-ui-components';

manifest('main', {}, globalRegistry => {
    const ckEditorRegistry = globalRegistry.get('ckEditor');

    const richtextToolbar = ckEditorRegistry.get('richtextToolbar');

    richtextToolbar.add('Js.Bookworm:MyCustomButton1', {
        formattingRule: 'Js.Bookworm:MyCustomSpan',
        component: IconButton,
        callbackPropName: 'onClick',

        icon: 'facebook',
        hoverStyle: 'brand'
    });

    const formattingRules = ckEditorRegistry.get('formattingRules');

   formattingRules.add('Js.Bookworm:MyCustomSpan', {
       style: {element: 'span', attributes: {style: 'background-color: red'}},
       config: formattingRules.config.addToExtraAllowedContent('span[style]')
    });

});
