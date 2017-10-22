import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Link } from './link';
import { Logger } from '../../util/log';
import { namespace, Action, Getter } from 'vuex-class'
const CommonAction = namespace('common', Action)
const CommonGetter = namespace('common', Getter)

@Component({
    template: require('./navbar.html')
})
export class NavbarComponent extends Vue {

    protected logger: Logger;
    @CommonAction changeLanguage: (langCode: string) => void;
    @CommonGetter language: string;
    currentLang: string = this.language;
    inverted: boolean = true; // default value

    object: { default: string } = { default: 'Default object property!' }; // objects as default values don't need to be wrapped into functions

    links: Link[] = [
        new Link('Home', '/'),
        new Link('About', '/about'),
        new Link('List', '/list')
    ];

    @Watch('$route.path')
    pathChanged() {
        this.logger.info('Changed current path to: ' + this.$route.path);
    }

    setLang() {
        this.currentLang = this.currentLang == 'en-US' ? 'vi-VN' : 'en-US';
        console.log(this.currentLang)
        if (this.currentLang != this.$i18n.locale) {
            let messsages = this.$i18n.getLocaleMessage(this.currentLang);

            if (Object.keys(messsages).length == 0)
                this.$i18n.setLocaleMessage(this.language, require(`../../locale/lang.${this.currentLang}.json`))

            this.$i18n.locale = this.currentLang;
            this.changeLanguage(this.currentLang);
           
        }
    }

    mounted() {
        if (!this.logger) this.logger = new Logger();
        this.$nextTick(() => this.logger.info(this.object.default));
        if (this.language === undefined || this.language === null)
            this.changeLanguage('en-US');
    }
}
