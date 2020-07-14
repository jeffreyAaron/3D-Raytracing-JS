/**
 * gpu.js
 * http://gpu.rocks/
 *
 * GPU Accelerated JavaScript
 *
 * @version 2.9.4
 * @date Sat May 02 2020 11:46:56 GMT-0400 (Eastern Daylight Time)
 *
 * @license MIT
 * The MIT License
 *
 * Copyright (c) 2020 gpu.js Team
 */
! function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).GPU = e()
    }
}(function () {
    return function () {
        return function e(t, n, r) {
            function i(a, o) {
                if (!n[a]) {
                    if (!t[a]) {
                        var u = "function" == typeof require && require;
                        if (!o && u) return u(a, !0);
                        if (s) return s(a, !0);
                        var l = new Error("Cannot find module '" + a + "'");
                        throw l.code = "MODULE_NOT_FOUND", l
                    }
                    var h = n[a] = {
                        exports: {}
                    };
                    t[a][0].call(h.exports, function (e) {
                        return i(t[a][1][e] || e)
                    }, h, h.exports, e, t, n, r)
                }
                return n[a].exports
            }
            for (var s = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
            return i
        }
    }()({
        1: [function (e, t, n) {
            var r;
            r = this,
                function (e) {
                    "use strict";
                    var t = {
                            3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
                            5: "class enum extends super const export import",
                            6: "enum",
                            strict: "implements interface let package private protected public static yield",
                            strictBind: "eval arguments"
                        },
                        n = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
                        r = {
                            5: n,
                            "5module": n + " export import",
                            6: n + " const class extends export import super"
                        },
                        i = /^in(stanceof)?$/,
                        s = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-Ᶎꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭧꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                        a = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
                        o = new RegExp("[" + s + "]"),
                        u = new RegExp("[" + s + a + "]");
                    s = a = null;
                    var l = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 477, 28, 11, 0, 9, 21, 155, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 12, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 0, 33, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 0, 161, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 270, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 754, 9486, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541],
                        h = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 525, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 232, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 792487, 239];

                    function c(e, t) {
                        for (var n = 65536, r = 0; r < t.length; r += 2) {
                            if ((n += t[r]) > e) return !1;
                            if ((n += t[r + 1]) >= e) return !0
                        }
                    }

                    function p(e, t) {
                        return e < 65 ? 36 === e : e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? e >= 170 && o.test(String.fromCharCode(e)) : !1 !== t && c(e, l)))
                    }

                    function d(e, t) {
                        return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? e >= 170 && u.test(String.fromCharCode(e)) : !1 !== t && (c(e, l) || c(e, h)))))
                    }
                    var m = function (e, t) {
                        void 0 === t && (t = {}), this.label = e, this.keyword = t.keyword, this.beforeExpr = !!t.beforeExpr, this.startsExpr = !!t.startsExpr, this.isLoop = !!t.isLoop, this.isAssign = !!t.isAssign, this.prefix = !!t.prefix, this.postfix = !!t.postfix, this.binop = t.binop || null, this.updateContext = null
                    };

                    function g(e, t) {
                        return new m(e, {
                            beforeExpr: !0,
                            binop: t
                        })
                    }
                    var f = {
                            beforeExpr: !0
                        },
                        x = {
                            startsExpr: !0
                        },
                        y = {};

                    function b(e, t) {
                        return void 0 === t && (t = {}), t.keyword = e, y[e] = new m(e, t)
                    }
                    var T = {
                            num: new m("num", x),
                            regexp: new m("regexp", x),
                            string: new m("string", x),
                            name: new m("name", x),
                            eof: new m("eof"),
                            bracketL: new m("[", {
                                beforeExpr: !0,
                                startsExpr: !0
                            }),
                            bracketR: new m("]"),
                            braceL: new m("{", {
                                beforeExpr: !0,
                                startsExpr: !0
                            }),
                            braceR: new m("}"),
                            parenL: new m("(", {
                                beforeExpr: !0,
                                startsExpr: !0
                            }),
                            parenR: new m(")"),
                            comma: new m(",", f),
                            semi: new m(";", f),
                            colon: new m(":", f),
                            dot: new m("."),
                            question: new m("?", f),
                            arrow: new m("=>", f),
                            template: new m("template"),
                            invalidTemplate: new m("invalidTemplate"),
                            ellipsis: new m("...", f),
                            backQuote: new m("`", x),
                            dollarBraceL: new m("${", {
                                beforeExpr: !0,
                                startsExpr: !0
                            }),
                            eq: new m("=", {
                                beforeExpr: !0,
                                isAssign: !0
                            }),
                            assign: new m("_=", {
                                beforeExpr: !0,
                                isAssign: !0
                            }),
                            incDec: new m("++/--", {
                                prefix: !0,
                                postfix: !0,
                                startsExpr: !0
                            }),
                            prefix: new m("!/~", {
                                beforeExpr: !0,
                                prefix: !0,
                                startsExpr: !0
                            }),
                            logicalOR: g("||", 1),
                            logicalAND: g("&&", 2),
                            bitwiseOR: g("|", 3),
                            bitwiseXOR: g("^", 4),
                            bitwiseAND: g("&", 5),
                            equality: g("==/!=/===/!==", 6),
                            relational: g("</>/<=/>=", 7),
                            bitShift: g("<</>>/>>>", 8),
                            plusMin: new m("+/-", {
                                beforeExpr: !0,
                                binop: 9,
                                prefix: !0,
                                startsExpr: !0
                            }),
                            modulo: g("%", 10),
                            star: g("*", 10),
                            slash: g("/", 10),
                            starstar: new m("**", {
                                beforeExpr: !0
                            }),
                            _break: b("break"),
                            _case: b("case", f),
                            _catch: b("catch"),
                            _continue: b("continue"),
                            _debugger: b("debugger"),
                            _default: b("default", f),
                            _do: b("do", {
                                isLoop: !0,
                                beforeExpr: !0
                            }),
                            _else: b("else", f),
                            _finally: b("finally"),
                            _for: b("for", {
                                isLoop: !0
                            }),
                            _function: b("function", x),
                            _if: b("if"),
                            _return: b("return", f),
                            _switch: b("switch"),
                            _throw: b("throw", f),
                            _try: b("try"),
                            _var: b("var"),
                            _const: b("const"),
                            _while: b("while", {
                                isLoop: !0
                            }),
                            _with: b("with"),
                            _new: b("new", {
                                beforeExpr: !0,
                                startsExpr: !0
                            }),
                            _this: b("this", x),
                            _super: b("super", x),
                            _class: b("class", x),
                            _extends: b("extends", f),
                            _export: b("export"),
                            _import: b("import", x),
                            _null: b("null", x),
                            _true: b("true", x),
                            _false: b("false", x),
                            _in: b("in", {
                                beforeExpr: !0,
                                binop: 7
                            }),
                            _instanceof: b("instanceof", {
                                beforeExpr: !0,
                                binop: 7
                            }),
                            _typeof: b("typeof", {
                                beforeExpr: !0,
                                prefix: !0,
                                startsExpr: !0
                            }),
                            _void: b("void", {
                                beforeExpr: !0,
                                prefix: !0,
                                startsExpr: !0
                            }),
                            _delete: b("delete", {
                                beforeExpr: !0,
                                prefix: !0,
                                startsExpr: !0
                            })
                        },
                        v = /\r\n?|\n|\u2028|\u2029/,
                        S = new RegExp(v.source, "g");

                    function A(e, t) {
                        return 10 === e || 13 === e || !t && (8232 === e || 8233 === e)
                    }
                    var _ = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                        E = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
                        w = Object.prototype,
                        k = w.hasOwnProperty,
                        I = w.toString;

                    function D(e, t) {
                        return k.call(e, t)
                    }
                    var C = Array.isArray || function (e) {
                        return "[object Array]" === I.call(e)
                    };

                    function $(e) {
                        return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$")
                    }
                    var L = function (e, t) {
                        this.line = e, this.column = t
                    };
                    L.prototype.offset = function (e) {
                        return new L(this.line, this.column + e)
                    };
                    var R = function (e, t, n) {
                        this.start = t, this.end = n, null !== e.sourceFile && (this.source = e.sourceFile)
                    };

                    function F(e, t) {
                        for (var n = 1, r = 0;;) {
                            S.lastIndex = r;
                            var i = S.exec(e);
                            if (!(i && i.index < t)) return new L(n, t - r);
                            ++n, r = i.index + i[0].length
                        }
                    }
                    var N = {
                        ecmaVersion: 10,
                        sourceType: "script",
                        onInsertedSemicolon: null,
                        onTrailingComma: null,
                        allowReserved: null,
                        allowReturnOutsideFunction: !1,
                        allowImportExportEverywhere: !1,
                        allowAwaitOutsideFunction: !1,
                        allowHashBang: !1,
                        locations: !1,
                        onToken: null,
                        onComment: null,
                        ranges: !1,
                        program: null,
                        sourceFile: null,
                        directSourceFile: null,
                        preserveParens: !1
                    };

                    function V(e) {
                        var t = {};
                        for (var n in N) t[n] = e && D(e, n) ? e[n] : N[n];
                        if (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), null == t.allowReserved && (t.allowReserved = t.ecmaVersion < 5), C(t.onToken)) {
                            var r = t.onToken;
                            t.onToken = function (e) {
                                return r.push(e)
                            }
                        }
                        return C(t.onComment) && (t.onComment = function (e, t) {
                            return function (n, r, i, s, a, o) {
                                var u = {
                                    type: n ? "Block" : "Line",
                                    value: r,
                                    start: i,
                                    end: s
                                };
                                e.locations && (u.loc = new R(this, a, o)), e.ranges && (u.range = [i, s]), t.push(u)
                            }
                        }(t, t.onComment)), t
                    }
                    var M = 2,
                        O = 1 | M,
                        z = 4,
                        P = 8;

                    function K(e, t) {
                        return M | (e ? z : 0) | (t ? P : 0)
                    }
                    var G = function (e, n, i) {
                            this.options = e = V(e), this.sourceFile = e.sourceFile, this.keywords = $(r[e.ecmaVersion >= 6 ? 6 : "module" === e.sourceType ? "5module" : 5]);
                            var s = "";
                            if (!0 !== e.allowReserved) {
                                for (var a = e.ecmaVersion; !(s = t[a]); a--);
                                "module" === e.sourceType && (s += " await")
                            }
                            this.reservedWords = $(s);
                            var o = (s ? s + " " : "") + t.strict;
                            this.reservedWordsStrict = $(o), this.reservedWordsStrictBind = $(o + " " + t.strictBind), this.input = String(n), this.containsEsc = !1, i ? (this.pos = i, this.lineStart = this.input.lastIndexOf("\n", i - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(v).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = T.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === e.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = {}, 0 === this.pos && e.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null
                        },
                        U = {
                            inFunction: {
                                configurable: !0
                            },
                            inGenerator: {
                                configurable: !0
                            },
                            inAsync: {
                                configurable: !0
                            },
                            allowSuper: {
                                configurable: !0
                            },
                            allowDirectSuper: {
                                configurable: !0
                            },
                            treatFunctionsAsVar: {
                                configurable: !0
                            }
                        };
                    G.prototype.parse = function () {
                        var e = this.options.program || this.startNode();
                        return this.nextToken(), this.parseTopLevel(e)
                    }, U.inFunction.get = function () {
                        return (this.currentVarScope().flags & M) > 0
                    }, U.inGenerator.get = function () {
                        return (this.currentVarScope().flags & P) > 0
                    }, U.inAsync.get = function () {
                        return (this.currentVarScope().flags & z) > 0
                    }, U.allowSuper.get = function () {
                        return (64 & this.currentThisScope().flags) > 0
                    }, U.allowDirectSuper.get = function () {
                        return (128 & this.currentThisScope().flags) > 0
                    }, U.treatFunctionsAsVar.get = function () {
                        return this.treatFunctionsAsVarInScope(this.currentScope())
                    }, G.prototype.inNonArrowFunction = function () {
                        return (this.currentThisScope().flags & M) > 0
                    }, G.extend = function () {
                        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                        for (var n = this, r = 0; r < e.length; r++) n = e[r](n);
                        return n
                    }, G.parse = function (e, t) {
                        return new this(t, e).parse()
                    }, G.parseExpressionAt = function (e, t, n) {
                        var r = new this(n, e, t);
                        return r.nextToken(), r.parseExpression()
                    }, G.tokenizer = function (e, t) {
                        return new this(t, e)
                    }, Object.defineProperties(G.prototype, U);
                    var B = G.prototype,
                        W = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;

                    function j() {
                        this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1
                    }
                    B.strictDirective = function (e) {
                        for (;;) {
                            E.lastIndex = e, e += E.exec(this.input)[0].length;
                            var t = W.exec(this.input.slice(e));
                            if (!t) return !1;
                            if ("use strict" === (t[1] || t[2])) return !0;
                            e += t[0].length, E.lastIndex = e, e += E.exec(this.input)[0].length, ";" === this.input[e] && e++
                        }
                    }, B.eat = function (e) {
                        return this.type === e && (this.next(), !0)
                    }, B.isContextual = function (e) {
                        return this.type === T.name && this.value === e && !this.containsEsc
                    }, B.eatContextual = function (e) {
                        return !!this.isContextual(e) && (this.next(), !0)
                    }, B.expectContextual = function (e) {
                        this.eatContextual(e) || this.unexpected()
                    }, B.canInsertSemicolon = function () {
                        return this.type === T.eof || this.type === T.braceR || v.test(this.input.slice(this.lastTokEnd, this.start))
                    }, B.insertSemicolon = function () {
                        if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0
                    }, B.semicolon = function () {
                        this.eat(T.semi) || this.insertSemicolon() || this.unexpected()
                    }, B.afterTrailingComma = function (e, t) {
                        if (this.type === e) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0
                    }, B.expect = function (e) {
                        this.eat(e) || this.unexpected()
                    }, B.unexpected = function (e) {
                        this.raise(null != e ? e : this.start, "Unexpected token")
                    }, B.checkPatternErrors = function (e, t) {
                        if (e) {
                            e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
                            var n = t ? e.parenthesizedAssign : e.parenthesizedBind;
                            n > -1 && this.raiseRecoverable(n, "Parenthesized pattern")
                        }
                    }, B.checkExpressionErrors = function (e, t) {
                        if (!e) return !1;
                        var n = e.shorthandAssign,
                            r = e.doubleProto;
                        if (!t) return n >= 0 || r >= 0;
                        n >= 0 && this.raise(n, "Shorthand property assignments are valid only in destructuring patterns"), r >= 0 && this.raiseRecoverable(r, "Redefinition of __proto__ property")
                    }, B.checkYieldAwaitInDefaultParams = function () {
                        this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value")
                    }, B.isSimpleAssignTarget = function (e) {
                        return "ParenthesizedExpression" === e.type ? this.isSimpleAssignTarget(e.expression) : "Identifier" === e.type || "MemberExpression" === e.type
                    };
                    var H = G.prototype;
                    H.parseTopLevel = function (e) {
                        var t = {};
                        for (e.body || (e.body = []); this.type !== T.eof;) {
                            var n = this.parseStatement(null, !0, t);
                            e.body.push(n)
                        }
                        if (this.inModule)
                            for (var r = 0, i = Object.keys(this.undefinedExports); r < i.length; r += 1) {
                                var s = i[r];
                                this.raiseRecoverable(this.undefinedExports[s].start, "Export '" + s + "' is not defined")
                            }
                        return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program")
                    };
                    var X = {
                            kind: "loop"
                        },
                        q = {
                            kind: "switch"
                        };
                    H.isLet = function (e) {
                        if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
                        E.lastIndex = this.pos;
                        var t = E.exec(this.input),
                            n = this.pos + t[0].length,
                            r = this.input.charCodeAt(n);
                        if (91 === r) return !0;
                        if (e) return !1;
                        if (123 === r) return !0;
                        if (p(r, !0)) {
                            for (var s = n + 1; d(this.input.charCodeAt(s), !0);) ++s;
                            var a = this.input.slice(n, s);
                            if (!i.test(a)) return !0
                        }
                        return !1
                    }, H.isAsyncFunction = function () {
                        if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
                        E.lastIndex = this.pos;
                        var e = E.exec(this.input),
                            t = this.pos + e[0].length;
                        return !(v.test(this.input.slice(this.pos, t)) || "function" !== this.input.slice(t, t + 8) || t + 8 !== this.input.length && d(this.input.charAt(t + 8)))
                    }, H.parseStatement = function (e, t, n) {
                        var r, i = this.type,
                            s = this.startNode();
                        switch (this.isLet(e) && (i = T._var, r = "let"), i) {
                            case T._break:
                            case T._continue:
                                return this.parseBreakContinueStatement(s, i.keyword);
                            case T._debugger:
                                return this.parseDebuggerStatement(s);
                            case T._do:
                                return this.parseDoStatement(s);
                            case T._for:
                                return this.parseForStatement(s);
                            case T._function:
                                return e && (this.strict || "if" !== e && "label" !== e) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(s, !1, !e);
                            case T._class:
                                return e && this.unexpected(), this.parseClass(s, !0);
                            case T._if:
                                return this.parseIfStatement(s);
                            case T._return:
                                return this.parseReturnStatement(s);
                            case T._switch:
                                return this.parseSwitchStatement(s);
                            case T._throw:
                                return this.parseThrowStatement(s);
                            case T._try:
                                return this.parseTryStatement(s);
                            case T._const:
                            case T._var:
                                return r = r || this.value, e && "var" !== r && this.unexpected(), this.parseVarStatement(s, r);
                            case T._while:
                                return this.parseWhileStatement(s);
                            case T._with:
                                return this.parseWithStatement(s);
                            case T.braceL:
                                return this.parseBlock(!0, s);
                            case T.semi:
                                return this.parseEmptyStatement(s);
                            case T._export:
                            case T._import:
                                if (this.options.ecmaVersion > 10 && i === T._import) {
                                    E.lastIndex = this.pos;
                                    var a = E.exec(this.input),
                                        o = this.pos + a[0].length;
                                    if (40 === this.input.charCodeAt(o)) return this.parseExpressionStatement(s, this.parseExpression())
                                }
                                return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), i === T._import ? this.parseImport(s) : this.parseExport(s, n);
                            default:
                                if (this.isAsyncFunction()) return e && this.unexpected(), this.next(), this.parseFunctionStatement(s, !0, !e);
                                var u = this.value,
                                    l = this.parseExpression();
                                return i === T.name && "Identifier" === l.type && this.eat(T.colon) ? this.parseLabeledStatement(s, u, l, e) : this.parseExpressionStatement(s, l)
                        }
                    }, H.parseBreakContinueStatement = function (e, t) {
                        var n = "break" === t;
                        this.next(), this.eat(T.semi) || this.insertSemicolon() ? e.label = null : this.type !== T.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
                        for (var r = 0; r < this.labels.length; ++r) {
                            var i = this.labels[r];
                            if (null == e.label || i.name === e.label.name) {
                                if (null != i.kind && (n || "loop" === i.kind)) break;
                                if (e.label && n) break
                            }
                        }
                        return r === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, n ? "BreakStatement" : "ContinueStatement")
                    }, H.parseDebuggerStatement = function (e) {
                        return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement")
                    }, H.parseDoStatement = function (e) {
                        return this.next(), this.labels.push(X), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(T._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(T.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement")
                    }, H.parseForStatement = function (e) {
                        this.next();
                        var t = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
                        if (this.labels.push(X), this.enterScope(0), this.expect(T.parenL), this.type === T.semi) return t > -1 && this.unexpected(t), this.parseFor(e, null);
                        var n = this.isLet();
                        if (this.type === T._var || this.type === T._const || n) {
                            var r = this.startNode(),
                                i = n ? "let" : this.value;
                            return this.next(), this.parseVar(r, !0, i), this.finishNode(r, "VariableDeclaration"), (this.type === T._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === r.declarations.length ? (this.options.ecmaVersion >= 9 && (this.type === T._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, r)) : (t > -1 && this.unexpected(t), this.parseFor(e, r))
                        }
                        var s = new j,
                            a = this.parseExpression(!0, s);
                        return this.type === T._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === T._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.toAssignable(a, !1, s), this.checkLVal(a), this.parseForIn(e, a)) : (this.checkExpressionErrors(s, !0), t > -1 && this.unexpected(t), this.parseFor(e, a))
                    }, H.parseFunctionStatement = function (e, t, n) {
                        return this.next(), this.parseFunction(e, Z | (n ? 0 : J), !1, t)
                    }, H.parseIfStatement = function (e) {
                        return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(T._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement")
                    }, H.parseReturnStatement = function (e) {
                        return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(T.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement")
                    }, H.parseSwitchStatement = function (e) {
                        var t;
                        this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(T.braceL), this.labels.push(q), this.enterScope(0);
                        for (var n = !1; this.type !== T.braceR;)
                            if (this.type === T._case || this.type === T._default) {
                                var r = this.type === T._case;
                                t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), r ? t.test = this.parseExpression() : (n && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), n = !0, t.test = null), this.expect(T.colon)
                            } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
                        return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement")
                    }, H.parseThrowStatement = function (e) {
                        return this.next(), v.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement")
                    };
                    var Y = [];
                    H.parseTryStatement = function (e) {
                        if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === T._catch) {
                            var t = this.startNode();
                            if (this.next(), this.eat(T.parenL)) {
                                t.param = this.parseBindingAtom();
                                var n = "Identifier" === t.param.type;
                                this.enterScope(n ? 32 : 0), this.checkLVal(t.param, n ? 4 : 2), this.expect(T.parenR)
                            } else this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0);
                            t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause")
                        }
                        return e.finalizer = this.eat(T._finally) ? this.parseBlock() : null, e.handler || e.finalizer || this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement")
                    }, H.parseVarStatement = function (e, t) {
                        return this.next(), this.parseVar(e, !1, t), this.semicolon(), this.finishNode(e, "VariableDeclaration")
                    }, H.parseWhileStatement = function (e) {
                        return this.next(), e.test = this.parseParenExpression(), this.labels.push(X), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement")
                    }, H.parseWithStatement = function (e) {
                        return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement")
                    }, H.parseEmptyStatement = function (e) {
                        return this.next(), this.finishNode(e, "EmptyStatement")
                    }, H.parseLabeledStatement = function (e, t, n, r) {
                        for (var i = 0, s = this.labels; i < s.length; i += 1) {
                            s[i].name === t && this.raise(n.start, "Label '" + t + "' is already declared")
                        }
                        for (var a = this.type.isLoop ? "loop" : this.type === T._switch ? "switch" : null, o = this.labels.length - 1; o >= 0; o--) {
                            var u = this.labels[o];
                            if (u.statementStart !== e.start) break;
                            u.statementStart = this.start, u.kind = a
                        }
                        return this.labels.push({
                            name: t,
                            kind: a,
                            statementStart: this.start
                        }), e.body = this.parseStatement(r ? -1 === r.indexOf("label") ? r + "label" : r : "label"), this.labels.pop(), e.label = n, this.finishNode(e, "LabeledStatement")
                    }, H.parseExpressionStatement = function (e, t) {
                        return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement")
                    }, H.parseBlock = function (e, t) {
                        for (void 0 === e && (e = !0), void 0 === t && (t = this.startNode()), t.body = [], this.expect(T.braceL), e && this.enterScope(0); !this.eat(T.braceR);) {
                            var n = this.parseStatement(null);
                            t.body.push(n)
                        }
                        return e && this.exitScope(), this.finishNode(t, "BlockStatement")
                    }, H.parseFor = function (e, t) {
                        return e.init = t, this.expect(T.semi), e.test = this.type === T.semi ? null : this.parseExpression(), this.expect(T.semi), e.update = this.type === T.parenR ? null : this.parseExpression(), this.expect(T.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement")
                    }, H.parseForIn = function (e, t) {
                        var n = this.type === T._in;
                        return this.next(), "VariableDeclaration" === t.type && null != t.declarations[0].init && (!n || this.options.ecmaVersion < 8 || this.strict || "var" !== t.kind || "Identifier" !== t.declarations[0].id.type) ? this.raise(t.start, (n ? "for-in" : "for-of") + " loop variable declaration may not have an initializer") : "AssignmentPattern" === t.type && this.raise(t.start, "Invalid left-hand side in for-loop"), e.left = t, e.right = n ? this.parseExpression() : this.parseMaybeAssign(), this.expect(T.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, n ? "ForInStatement" : "ForOfStatement")
                    }, H.parseVar = function (e, t, n) {
                        for (e.declarations = [], e.kind = n;;) {
                            var r = this.startNode();
                            if (this.parseVarId(r, n), this.eat(T.eq) ? r.init = this.parseMaybeAssign(t) : "const" !== n || this.type === T._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? "Identifier" === r.id.type || t && (this.type === T._in || this.isContextual("of")) ? r.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), e.declarations.push(this.finishNode(r, "VariableDeclarator")), !this.eat(T.comma)) break
                        }
                        return e
                    }, H.parseVarId = function (e, t) {
                        e.id = this.parseBindingAtom(), this.checkLVal(e.id, "var" === t ? 1 : 2, !1)
                    };
                    var Z = 1,
                        J = 2;
                    H.parseFunction = function (e, t, n, r) {
                        this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) && (this.type === T.star && t & J && this.unexpected(), e.generator = this.eat(T.star)), this.options.ecmaVersion >= 8 && (e.async = !!r), t & Z && (e.id = 4 & t && this.type !== T.name ? null : this.parseIdent(), !e.id || t & J || this.checkLVal(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
                        var i = this.yieldPos,
                            s = this.awaitPos,
                            a = this.awaitIdentPos;
                        return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(K(e.async, e.generator)), t & Z || (e.id = this.type === T.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, n, !1), this.yieldPos = i, this.awaitPos = s, this.awaitIdentPos = a, this.finishNode(e, t & Z ? "FunctionDeclaration" : "FunctionExpression")
                    }, H.parseFunctionParams = function (e) {
                        this.expect(T.parenL), e.params = this.parseBindingList(T.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams()
                    }, H.parseClass = function (e, t) {
                        this.next();
                        var n = this.strict;
                        this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
                        var r = this.startNode(),
                            i = !1;
                        for (r.body = [], this.expect(T.braceL); !this.eat(T.braceR);) {
                            var s = this.parseClassElement(null !== e.superClass);
                            s && (r.body.push(s), "MethodDefinition" === s.type && "constructor" === s.kind && (i && this.raise(s.start, "Duplicate constructor in the same class"), i = !0))
                        }
                        return e.body = this.finishNode(r, "ClassBody"), this.strict = n, this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression")
                    }, H.parseClassElement = function (e) {
                        var t = this;
                        if (this.eat(T.semi)) return null;
                        var n = this.startNode(),
                            r = function (e, r) {
                                void 0 === r && (r = !1);
                                var i = t.start,
                                    s = t.startLoc;
                                return !!t.eatContextual(e) && (!(t.type === T.parenL || r && t.canInsertSemicolon()) || (n.key && t.unexpected(), n.computed = !1, n.key = t.startNodeAt(i, s), n.key.name = e, t.finishNode(n.key, "Identifier"), !1))
                            };
                        n.kind = "method", n.static = r("static");
                        var i = this.eat(T.star),
                            s = !1;
                        i || (this.options.ecmaVersion >= 8 && r("async", !0) ? (s = !0, i = this.options.ecmaVersion >= 9 && this.eat(T.star)) : r("get") ? n.kind = "get" : r("set") && (n.kind = "set")), n.key || this.parsePropertyName(n);
                        var a = n.key,
                            o = !1;
                        return n.computed || n.static || !("Identifier" === a.type && "constructor" === a.name || "Literal" === a.type && "constructor" === a.value) ? n.static && "Identifier" === a.type && "prototype" === a.name && this.raise(a.start, "Classes may not have a static property named prototype") : ("method" !== n.kind && this.raise(a.start, "Constructor can't have get/set modifier"), i && this.raise(a.start, "Constructor can't be a generator"), s && this.raise(a.start, "Constructor can't be an async method"), n.kind = "constructor", o = e), this.parseClassMethod(n, i, s, o), "get" === n.kind && 0 !== n.value.params.length && this.raiseRecoverable(n.value.start, "getter should have no params"), "set" === n.kind && 1 !== n.value.params.length && this.raiseRecoverable(n.value.start, "setter should have exactly one param"), "set" === n.kind && "RestElement" === n.value.params[0].type && this.raiseRecoverable(n.value.params[0].start, "Setter cannot use rest params"), n
                    }, H.parseClassMethod = function (e, t, n, r) {
                        return e.value = this.parseMethod(t, n, r), this.finishNode(e, "MethodDefinition")
                    }, H.parseClassId = function (e, t) {
                        this.type === T.name ? (e.id = this.parseIdent(), t && this.checkLVal(e.id, 2, !1)) : (!0 === t && this.unexpected(), e.id = null)
                    }, H.parseClassSuper = function (e) {
                        e.superClass = this.eat(T._extends) ? this.parseExprSubscripts() : null
                    }, H.parseExport = function (e, t) {
                        if (this.next(), this.eat(T.star)) return this.expectContextual("from"), this.type !== T.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
                        if (this.eat(T._default)) {
                            var n;
                            if (this.checkExport(t, "default", this.lastTokStart), this.type === T._function || (n = this.isAsyncFunction())) {
                                var r = this.startNode();
                                this.next(), n && this.next(), e.declaration = this.parseFunction(r, 4 | Z, !1, n)
                            } else if (this.type === T._class) {
                                var i = this.startNode();
                                e.declaration = this.parseClass(i, "nullableID")
                            } else e.declaration = this.parseMaybeAssign(), this.semicolon();
                            return this.finishNode(e, "ExportDefaultDeclaration")
                        }
                        if (this.shouldParseExportStatement()) e.declaration = this.parseStatement(null), "VariableDeclaration" === e.declaration.type ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id.name, e.declaration.id.start), e.specifiers = [], e.source = null;
                        else {
                            if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from")) this.type !== T.string && this.unexpected(), e.source = this.parseExprAtom();
                            else {
                                for (var s = 0, a = e.specifiers; s < a.length; s += 1) {
                                    var o = a[s];
                                    this.checkUnreserved(o.local), this.checkLocalExport(o.local)
                                }
                                e.source = null
                            }
                            this.semicolon()
                        }
                        return this.finishNode(e, "ExportNamedDeclaration")
                    }, H.checkExport = function (e, t, n) {
                        e && (D(e, t) && this.raiseRecoverable(n, "Duplicate export '" + t + "'"), e[t] = !0)
                    }, H.checkPatternExport = function (e, t) {
                        var n = t.type;
                        if ("Identifier" === n) this.checkExport(e, t.name, t.start);
                        else if ("ObjectPattern" === n)
                            for (var r = 0, i = t.properties; r < i.length; r += 1) {
                                var s = i[r];
                                this.checkPatternExport(e, s)
                            } else if ("ArrayPattern" === n)
                                for (var a = 0, o = t.elements; a < o.length; a += 1) {
                                    var u = o[a];
                                    u && this.checkPatternExport(e, u)
                                } else "Property" === n ? this.checkPatternExport(e, t.value) : "AssignmentPattern" === n ? this.checkPatternExport(e, t.left) : "RestElement" === n ? this.checkPatternExport(e, t.argument) : "ParenthesizedExpression" === n && this.checkPatternExport(e, t.expression)
                    }, H.checkVariableExport = function (e, t) {
                        if (e)
                            for (var n = 0, r = t; n < r.length; n += 1) {
                                var i = r[n];
                                this.checkPatternExport(e, i.id)
                            }
                    }, H.shouldParseExportStatement = function () {
                        return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction()
                    }, H.parseExportSpecifiers = function (e) {
                        var t = [],
                            n = !0;
                        for (this.expect(T.braceL); !this.eat(T.braceR);) {
                            if (n) n = !1;
                            else if (this.expect(T.comma), this.afterTrailingComma(T.braceR)) break;
                            var r = this.startNode();
                            r.local = this.parseIdent(!0), r.exported = this.eatContextual("as") ? this.parseIdent(!0) : r.local, this.checkExport(e, r.exported.name, r.exported.start), t.push(this.finishNode(r, "ExportSpecifier"))
                        }
                        return t
                    }, H.parseImport = function (e) {
                        return this.next(), this.type === T.string ? (e.specifiers = Y, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === T.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration")
                    }, H.parseImportSpecifiers = function () {
                        var e = [],
                            t = !0;
                        if (this.type === T.name) {
                            var n = this.startNode();
                            if (n.local = this.parseIdent(), this.checkLVal(n.local, 2), e.push(this.finishNode(n, "ImportDefaultSpecifier")), !this.eat(T.comma)) return e
                        }
                        if (this.type === T.star) {
                            var r = this.startNode();
                            return this.next(), this.expectContextual("as"), r.local = this.parseIdent(), this.checkLVal(r.local, 2), e.push(this.finishNode(r, "ImportNamespaceSpecifier")), e
                        }
                        for (this.expect(T.braceL); !this.eat(T.braceR);) {
                            if (t) t = !1;
                            else if (this.expect(T.comma), this.afterTrailingComma(T.braceR)) break;
                            var i = this.startNode();
                            i.imported = this.parseIdent(!0), this.eatContextual("as") ? i.local = this.parseIdent() : (this.checkUnreserved(i.imported), i.local = i.imported), this.checkLVal(i.local, 2), e.push(this.finishNode(i, "ImportSpecifier"))
                        }
                        return e
                    }, H.adaptDirectivePrologue = function (e) {
                        for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1)
                    }, H.isDirectiveCandidate = function (e) {
                        return "ExpressionStatement" === e.type && "Literal" === e.expression.type && "string" == typeof e.expression.value && ('"' === this.input[e.start] || "'" === this.input[e.start])
                    };
                    var Q = G.prototype;
                    Q.toAssignable = function (e, t, n) {
                        if (this.options.ecmaVersion >= 6 && e) switch (e.type) {
                            case "Identifier":
                                this.inAsync && "await" === e.name && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
                                break;
                            case "ObjectPattern":
                            case "ArrayPattern":
                            case "RestElement":
                                break;
                            case "ObjectExpression":
                                e.type = "ObjectPattern", n && this.checkPatternErrors(n, !0);
                                for (var r = 0, i = e.properties; r < i.length; r += 1) {
                                    var s = i[r];
                                    this.toAssignable(s, t), "RestElement" !== s.type || "ArrayPattern" !== s.argument.type && "ObjectPattern" !== s.argument.type || this.raise(s.argument.start, "Unexpected token")
                                }
                                break;
                            case "Property":
                                "init" !== e.kind && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
                                break;
                            case "ArrayExpression":
                                e.type = "ArrayPattern", n && this.checkPatternErrors(n, !0), this.toAssignableList(e.elements, t);
                                break;
                            case "SpreadElement":
                                e.type = "RestElement", this.toAssignable(e.argument, t), "AssignmentPattern" === e.argument.type && this.raise(e.argument.start, "Rest elements cannot have a default value");
                                break;
                            case "AssignmentExpression":
                                "=" !== e.operator && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
                            case "AssignmentPattern":
                                break;
                            case "ParenthesizedExpression":
                                this.toAssignable(e.expression, t, n);
                                break;
                            case "MemberExpression":
                                if (!t) break;
                            default:
                                this.raise(e.start, "Assigning to rvalue")
                        } else n && this.checkPatternErrors(n, !0);
                        return e
                    }, Q.toAssignableList = function (e, t) {
                        for (var n = e.length, r = 0; r < n; r++) {
                            var i = e[r];
                            i && this.toAssignable(i, t)
                        }
                        if (n) {
                            var s = e[n - 1];
                            6 === this.options.ecmaVersion && t && s && "RestElement" === s.type && "Identifier" !== s.argument.type && this.unexpected(s.argument.start)
                        }
                        return e
                    }, Q.parseSpread = function (e) {
                        var t = this.startNode();
                        return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement")
                    }, Q.parseRestBinding = function () {
                        var e = this.startNode();
                        return this.next(), 6 === this.options.ecmaVersion && this.type !== T.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement")
                    }, Q.parseBindingAtom = function () {
                        if (this.options.ecmaVersion >= 6) switch (this.type) {
                            case T.bracketL:
                                var e = this.startNode();
                                return this.next(), e.elements = this.parseBindingList(T.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
                            case T.braceL:
                                return this.parseObj(!0)
                        }
                        return this.parseIdent()
                    }, Q.parseBindingList = function (e, t, n) {
                        for (var r = [], i = !0; !this.eat(e);)
                            if (i ? i = !1 : this.expect(T.comma), t && this.type === T.comma) r.push(null);
                            else {
                                if (n && this.afterTrailingComma(e)) break;
                                if (this.type === T.ellipsis) {
                                    var s = this.parseRestBinding();
                                    this.parseBindingListItem(s), r.push(s), this.type === T.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(e);
                                    break
                                }
                                var a = this.parseMaybeDefault(this.start, this.startLoc);
                                this.parseBindingListItem(a), r.push(a)
                            } return r
                    }, Q.parseBindingListItem = function (e) {
                        return e
                    }, Q.parseMaybeDefault = function (e, t, n) {
                        if (n = n || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(T.eq)) return n;
                        var r = this.startNodeAt(e, t);
                        return r.left = n, r.right = this.parseMaybeAssign(), this.finishNode(r, "AssignmentPattern")
                    }, Q.checkLVal = function (e, t, n) {
                        switch (void 0 === t && (t = 0), e.type) {
                            case "Identifier":
                                2 === t && "let" === e.name && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (t ? "Binding " : "Assigning to ") + e.name + " in strict mode"), n && (D(n, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), n[e.name] = !0), 0 !== t && 5 !== t && this.declareName(e.name, t, e.start);
                                break;
                            case "MemberExpression":
                                t && this.raiseRecoverable(e.start, "Binding member expression");
                                break;
                            case "ObjectPattern":
                                for (var r = 0, i = e.properties; r < i.length; r += 1) {
                                    var s = i[r];
                                    this.checkLVal(s, t, n)
                                }
                                break;
                            case "Property":
                                this.checkLVal(e.value, t, n);
                                break;
                            case "ArrayPattern":
                                for (var a = 0, o = e.elements; a < o.length; a += 1) {
                                    var u = o[a];
                                    u && this.checkLVal(u, t, n)
                                }
                                break;
                            case "AssignmentPattern":
                                this.checkLVal(e.left, t, n);
                                break;
                            case "RestElement":
                                this.checkLVal(e.argument, t, n);
                                break;
                            case "ParenthesizedExpression":
                                this.checkLVal(e.expression, t, n);
                                break;
                            default:
                                this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue")
                        }
                    };
                    var ee = G.prototype;
                    ee.checkPropClash = function (e, t, n) {
                        if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === e.type || this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
                            var r, i = e.key;
                            switch (i.type) {
                                case "Identifier":
                                    r = i.name;
                                    break;
                                case "Literal":
                                    r = String(i.value);
                                    break;
                                default:
                                    return
                            }
                            var s = e.kind;
                            if (this.options.ecmaVersion >= 6) "__proto__" === r && "init" === s && (t.proto && (n ? n.doubleProto < 0 && (n.doubleProto = i.start) : this.raiseRecoverable(i.start, "Redefinition of __proto__ property")), t.proto = !0);
                            else {
                                var a = t[r = "$" + r];
                                if (a)("init" === s ? this.strict && a.init || a.get || a.set : a.init || a[s]) && this.raiseRecoverable(i.start, "Redefinition of property");
                                else a = t[r] = {
                                    init: !1,
                                    get: !1,
                                    set: !1
                                };
                                a[s] = !0
                            }
                        }
                    }, ee.parseExpression = function (e, t) {
                        var n = this.start,
                            r = this.startLoc,
                            i = this.parseMaybeAssign(e, t);
                        if (this.type === T.comma) {
                            var s = this.startNodeAt(n, r);
                            for (s.expressions = [i]; this.eat(T.comma);) s.expressions.push(this.parseMaybeAssign(e, t));
                            return this.finishNode(s, "SequenceExpression")
                        }
                        return i
                    }, ee.parseMaybeAssign = function (e, t, n) {
                        if (this.isContextual("yield")) {
                            if (this.inGenerator) return this.parseYield(e);
                            this.exprAllowed = !1
                        }
                        var r = !1,
                            i = -1,
                            s = -1;
                        t ? (i = t.parenthesizedAssign, s = t.trailingComma, t.parenthesizedAssign = t.trailingComma = -1) : (t = new j, r = !0);
                        var a = this.start,
                            o = this.startLoc;
                        this.type !== T.parenL && this.type !== T.name || (this.potentialArrowAt = this.start);
                        var u = this.parseMaybeConditional(e, t);
                        if (n && (u = n.call(this, u, a, o)), this.type.isAssign) {
                            var l = this.startNodeAt(a, o);
                            return l.operator = this.value, l.left = this.type === T.eq ? this.toAssignable(u, !1, t) : u, r || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= l.left.start && (t.shorthandAssign = -1), this.checkLVal(u), this.next(), l.right = this.parseMaybeAssign(e), this.finishNode(l, "AssignmentExpression")
                        }
                        return r && this.checkExpressionErrors(t, !0), i > -1 && (t.parenthesizedAssign = i), s > -1 && (t.trailingComma = s), u
                    }, ee.parseMaybeConditional = function (e, t) {
                        var n = this.start,
                            r = this.startLoc,
                            i = this.parseExprOps(e, t);
                        if (this.checkExpressionErrors(t)) return i;
                        if (this.eat(T.question)) {
                            var s = this.startNodeAt(n, r);
                            return s.test = i, s.consequent = this.parseMaybeAssign(), this.expect(T.colon), s.alternate = this.parseMaybeAssign(e), this.finishNode(s, "ConditionalExpression")
                        }
                        return i
                    }, ee.parseExprOps = function (e, t) {
                        var n = this.start,
                            r = this.startLoc,
                            i = this.parseMaybeUnary(t, !1);
                        return this.checkExpressionErrors(t) ? i : i.start === n && "ArrowFunctionExpression" === i.type ? i : this.parseExprOp(i, n, r, -1, e)
                    }, ee.parseExprOp = function (e, t, n, r, i) {
                        var s = this.type.binop;
                        if (null != s && (!i || this.type !== T._in) && s > r) {
                            var a = this.type === T.logicalOR || this.type === T.logicalAND,
                                o = this.value;
                            this.next();
                            var u = this.start,
                                l = this.startLoc,
                                h = this.parseExprOp(this.parseMaybeUnary(null, !1), u, l, s, i),
                                c = this.buildBinary(t, n, e, h, o, a);
                            return this.parseExprOp(c, t, n, r, i)
                        }
                        return e
                    }, ee.buildBinary = function (e, t, n, r, i, s) {
                        var a = this.startNodeAt(e, t);
                        return a.left = n, a.operator = i, a.right = r, this.finishNode(a, s ? "LogicalExpression" : "BinaryExpression")
                    }, ee.parseMaybeUnary = function (e, t) {
                        var n, r = this.start,
                            i = this.startLoc;
                        if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) n = this.parseAwait(), t = !0;
                        else if (this.type.prefix) {
                            var s = this.startNode(),
                                a = this.type === T.incDec;
                            s.operator = this.value, s.prefix = !0, this.next(), s.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(e, !0), a ? this.checkLVal(s.argument) : this.strict && "delete" === s.operator && "Identifier" === s.argument.type ? this.raiseRecoverable(s.start, "Deleting local variable in strict mode") : t = !0, n = this.finishNode(s, a ? "UpdateExpression" : "UnaryExpression")
                        } else {
                            if (n = this.parseExprSubscripts(e), this.checkExpressionErrors(e)) return n;
                            for (; this.type.postfix && !this.canInsertSemicolon();) {
                                var o = this.startNodeAt(r, i);
                                o.operator = this.value, o.prefix = !1, o.argument = n, this.checkLVal(n), this.next(), n = this.finishNode(o, "UpdateExpression")
                            }
                        }
                        return !t && this.eat(T.starstar) ? this.buildBinary(r, i, n, this.parseMaybeUnary(null, !1), "**", !1) : n
                    }, ee.parseExprSubscripts = function (e) {
                        var t = this.start,
                            n = this.startLoc,
                            r = this.parseExprAtom(e);
                        if ("ArrowFunctionExpression" === r.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return r;
                        var i = this.parseSubscripts(r, t, n);
                        return e && "MemberExpression" === i.type && (e.parenthesizedAssign >= i.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= i.start && (e.parenthesizedBind = -1)), i
                    }, ee.parseSubscripts = function (e, t, n, r) {
                        for (var i = this.options.ecmaVersion >= 8 && "Identifier" === e.type && "async" === e.name && this.lastTokEnd === e.end && !this.canInsertSemicolon() && "async" === this.input.slice(e.start, e.end);;) {
                            var s = this.parseSubscript(e, t, n, r, i);
                            if (s === e || "ArrowFunctionExpression" === s.type) return s;
                            e = s
                        }
                    }, ee.parseSubscript = function (e, t, n, r, i) {
                        var s = this.eat(T.bracketL);
                        if (s || this.eat(T.dot)) {
                            var a = this.startNodeAt(t, n);
                            a.object = e, a.property = s ? this.parseExpression() : this.parseIdent("never" !== this.options.allowReserved), a.computed = !!s, s && this.expect(T.bracketR), e = this.finishNode(a, "MemberExpression")
                        } else if (!r && this.eat(T.parenL)) {
                            var o = new j,
                                u = this.yieldPos,
                                l = this.awaitPos,
                                h = this.awaitIdentPos;
                            this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
                            var c = this.parseExprList(T.parenR, this.options.ecmaVersion >= 8, !1, o);
                            if (i && !this.canInsertSemicolon() && this.eat(T.arrow)) return this.checkPatternErrors(o, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = u, this.awaitPos = l, this.awaitIdentPos = h, this.parseArrowExpression(this.startNodeAt(t, n), c, !0);
                            this.checkExpressionErrors(o, !0), this.yieldPos = u || this.yieldPos, this.awaitPos = l || this.awaitPos, this.awaitIdentPos = h || this.awaitIdentPos;
                            var p = this.startNodeAt(t, n);
                            p.callee = e, p.arguments = c, e = this.finishNode(p, "CallExpression")
                        } else if (this.type === T.backQuote) {
                            var d = this.startNodeAt(t, n);
                            d.tag = e, d.quasi = this.parseTemplate({
                                isTagged: !0
                            }), e = this.finishNode(d, "TaggedTemplateExpression")
                        }
                        return e
                    }, ee.parseExprAtom = function (e) {
                        this.type === T.slash && this.readRegexp();
                        var t, n = this.potentialArrowAt === this.start;
                        switch (this.type) {
                            case T._super:
                                return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), t = this.startNode(), this.next(), this.type !== T.parenL || this.allowDirectSuper || this.raise(t.start, "super() call outside constructor of a subclass"), this.type !== T.dot && this.type !== T.bracketL && this.type !== T.parenL && this.unexpected(), this.finishNode(t, "Super");
                            case T._this:
                                return t = this.startNode(), this.next(), this.finishNode(t, "ThisExpression");
                            case T.name:
                                var r = this.start,
                                    i = this.startLoc,
                                    s = this.containsEsc,
                                    a = this.parseIdent(!1);
                                if (this.options.ecmaVersion >= 8 && !s && "async" === a.name && !this.canInsertSemicolon() && this.eat(T._function)) return this.parseFunction(this.startNodeAt(r, i), 0, !1, !0);
                                if (n && !this.canInsertSemicolon()) {
                                    if (this.eat(T.arrow)) return this.parseArrowExpression(this.startNodeAt(r, i), [a], !1);
                                    if (this.options.ecmaVersion >= 8 && "async" === a.name && this.type === T.name && !s) return a = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(T.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(r, i), [a], !0)
                                }
                                return a;
                            case T.regexp:
                                var o = this.value;
                                return (t = this.parseLiteral(o.value)).regex = {
                                    pattern: o.pattern,
                                    flags: o.flags
                                }, t;
                            case T.num:
                            case T.string:
                                return this.parseLiteral(this.value);
                            case T._null:
                            case T._true:
                            case T._false:
                                return (t = this.startNode()).value = this.type === T._null ? null : this.type === T._true, t.raw = this.type.keyword, this.next(), this.finishNode(t, "Literal");
                            case T.parenL:
                                var u = this.start,
                                    l = this.parseParenAndDistinguishExpression(n);
                                return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(l) && (e.parenthesizedAssign = u), e.parenthesizedBind < 0 && (e.parenthesizedBind = u)), l;
                            case T.bracketL:
                                return t = this.startNode(), this.next(), t.elements = this.parseExprList(T.bracketR, !0, !0, e), this.finishNode(t, "ArrayExpression");
                            case T.braceL:
                                return this.parseObj(!1, e);
                            case T._function:
                                return t = this.startNode(), this.next(), this.parseFunction(t, 0);
                            case T._class:
                                return this.parseClass(this.startNode(), !1);
                            case T._new:
                                return this.parseNew();
                            case T.backQuote:
                                return this.parseTemplate();
                            case T._import:
                                return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
                            default:
                                this.unexpected()
                        }
                    }, ee.parseExprImport = function () {
                        var e = this.startNode();
                        switch (this.next(), this.type) {
                            case T.parenL:
                                return this.parseDynamicImport(e);
                            default:
                                this.unexpected()
                        }
                    }, ee.parseDynamicImport = function (e) {
                        if (this.next(), e.source = this.parseMaybeAssign(), !this.eat(T.parenR)) {
                            var t = this.start;
                            this.eat(T.comma) && this.eat(T.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t)
                        }
                        return this.finishNode(e, "ImportExpression")
                    }, ee.parseLiteral = function (e) {
                        var t = this.startNode();
                        return t.value = e, t.raw = this.input.slice(this.start, this.end), 110 === t.raw.charCodeAt(t.raw.length - 1) && (t.bigint = t.raw.slice(0, -1)), this.next(), this.finishNode(t, "Literal")
                    }, ee.parseParenExpression = function () {
                        this.expect(T.parenL);
                        var e = this.parseExpression();
                        return this.expect(T.parenR), e
                    }, ee.parseParenAndDistinguishExpression = function (e) {
                        var t, n = this.start,
                            r = this.startLoc,
                            i = this.options.ecmaVersion >= 8;
                        if (this.options.ecmaVersion >= 6) {
                            this.next();
                            var s, a = this.start,
                                o = this.startLoc,
                                u = [],
                                l = !0,
                                h = !1,
                                c = new j,
                                p = this.yieldPos,
                                d = this.awaitPos;
                            for (this.yieldPos = 0, this.awaitPos = 0; this.type !== T.parenR;) {
                                if (l ? l = !1 : this.expect(T.comma), i && this.afterTrailingComma(T.parenR, !0)) {
                                    h = !0;
                                    break
                                }
                                if (this.type === T.ellipsis) {
                                    s = this.start, u.push(this.parseParenItem(this.parseRestBinding())), this.type === T.comma && this.raise(this.start, "Comma is not permitted after the rest element");
                                    break
                                }
                                u.push(this.parseMaybeAssign(!1, c, this.parseParenItem))
                            }
                            var m = this.start,
                                g = this.startLoc;
                            if (this.expect(T.parenR), e && !this.canInsertSemicolon() && this.eat(T.arrow)) return this.checkPatternErrors(c, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = p, this.awaitPos = d, this.parseParenArrowList(n, r, u);
                            u.length && !h || this.unexpected(this.lastTokStart), s && this.unexpected(s), this.checkExpressionErrors(c, !0), this.yieldPos = p || this.yieldPos, this.awaitPos = d || this.awaitPos, u.length > 1 ? ((t = this.startNodeAt(a, o)).expressions = u, this.finishNodeAt(t, "SequenceExpression", m, g)) : t = u[0]
                        } else t = this.parseParenExpression();
                        if (this.options.preserveParens) {
                            var f = this.startNodeAt(n, r);
                            return f.expression = t, this.finishNode(f, "ParenthesizedExpression")
                        }
                        return t
                    }, ee.parseParenItem = function (e) {
                        return e
                    }, ee.parseParenArrowList = function (e, t, n) {
                        return this.parseArrowExpression(this.startNodeAt(e, t), n)
                    };
                    var te = [];
                    ee.parseNew = function () {
                        this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
                        var e = this.startNode(),
                            t = this.parseIdent(!0);
                        if (this.options.ecmaVersion >= 6 && this.eat(T.dot)) {
                            e.meta = t;
                            var n = this.containsEsc;
                            return e.property = this.parseIdent(!0), ("target" !== e.property.name || n) && this.raiseRecoverable(e.property.start, "The only valid meta property for new is new.target"), this.inNonArrowFunction() || this.raiseRecoverable(e.start, "new.target can only be used in functions"), this.finishNode(e, "MetaProperty")
                        }
                        var r = this.start,
                            i = this.startLoc,
                            s = this.type === T._import;
                        return e.callee = this.parseSubscripts(this.parseExprAtom(), r, i, !0), s && "ImportExpression" === e.callee.type && this.raise(r, "Cannot use new with import()"), this.eat(T.parenL) ? e.arguments = this.parseExprList(T.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = te, this.finishNode(e, "NewExpression")
                    }, ee.parseTemplateElement = function (e) {
                        var t = e.isTagged,
                            n = this.startNode();
                        return this.type === T.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), n.value = {
                            raw: this.value,
                            cooked: null
                        }) : n.value = {
                            raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
                            cooked: this.value
                        }, this.next(), n.tail = this.type === T.backQuote, this.finishNode(n, "TemplateElement")
                    }, ee.parseTemplate = function (e) {
                        void 0 === e && (e = {});
                        var t = e.isTagged;
                        void 0 === t && (t = !1);
                        var n = this.startNode();
                        this.next(), n.expressions = [];
                        var r = this.parseTemplateElement({
                            isTagged: t
                        });
                        for (n.quasis = [r]; !r.tail;) this.type === T.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(T.dollarBraceL), n.expressions.push(this.parseExpression()), this.expect(T.braceR), n.quasis.push(r = this.parseTemplateElement({
                            isTagged: t
                        }));
                        return this.next(), this.finishNode(n, "TemplateLiteral")
                    }, ee.isAsyncProp = function (e) {
                        return !e.computed && "Identifier" === e.key.type && "async" === e.key.name && (this.type === T.name || this.type === T.num || this.type === T.string || this.type === T.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === T.star) && !v.test(this.input.slice(this.lastTokEnd, this.start))
                    }, ee.parseObj = function (e, t) {
                        var n = this.startNode(),
                            r = !0,
                            i = {};
                        for (n.properties = [], this.next(); !this.eat(T.braceR);) {
                            if (r) r = !1;
                            else if (this.expect(T.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(T.braceR)) break;
                            var s = this.parseProperty(e, t);
                            e || this.checkPropClash(s, i, t), n.properties.push(s)
                        }
                        return this.finishNode(n, e ? "ObjectPattern" : "ObjectExpression")
                    }, ee.parseProperty = function (e, t) {
                        var n, r, i, s, a = this.startNode();
                        if (this.options.ecmaVersion >= 9 && this.eat(T.ellipsis)) return e ? (a.argument = this.parseIdent(!1), this.type === T.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(a, "RestElement")) : (this.type === T.parenL && t && (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start), t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)), a.argument = this.parseMaybeAssign(!1, t), this.type === T.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(a, "SpreadElement"));
                        this.options.ecmaVersion >= 6 && (a.method = !1, a.shorthand = !1, (e || t) && (i = this.start, s = this.startLoc), e || (n = this.eat(T.star)));
                        var o = this.containsEsc;
                        return this.parsePropertyName(a), !e && !o && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(a) ? (r = !0, n = this.options.ecmaVersion >= 9 && this.eat(T.star), this.parsePropertyName(a, t)) : r = !1, this.parsePropertyValue(a, e, n, r, i, s, t, o), this.finishNode(a, "Property")
                    }, ee.parsePropertyValue = function (e, t, n, r, i, s, a, o) {
                        if ((n || r) && this.type === T.colon && this.unexpected(), this.eat(T.colon)) e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a), e.kind = "init";
                        else if (this.options.ecmaVersion >= 6 && this.type === T.parenL) t && this.unexpected(), e.kind = "init", e.method = !0, e.value = this.parseMethod(n, r);
                        else if (t || o || !(this.options.ecmaVersion >= 5) || e.computed || "Identifier" !== e.key.type || "get" !== e.key.name && "set" !== e.key.name || this.type === T.comma || this.type === T.braceR) this.options.ecmaVersion >= 6 && !e.computed && "Identifier" === e.key.type ? ((n || r) && this.unexpected(), this.checkUnreserved(e.key), "await" !== e.key.name || this.awaitIdentPos || (this.awaitIdentPos = i), e.kind = "init", t ? e.value = this.parseMaybeDefault(i, s, e.key) : this.type === T.eq && a ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start), e.value = this.parseMaybeDefault(i, s, e.key)) : e.value = e.key, e.shorthand = !0) : this.unexpected();
                        else {
                            (n || r) && this.unexpected(), e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(!1);
                            var u = "get" === e.kind ? 0 : 1;
                            if (e.value.params.length !== u) {
                                var l = e.value.start;
                                "get" === e.kind ? this.raiseRecoverable(l, "getter should have no params") : this.raiseRecoverable(l, "setter should have exactly one param")
                            } else "set" === e.kind && "RestElement" === e.value.params[0].type && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params")
                        }
                    }, ee.parsePropertyName = function (e) {
                        if (this.options.ecmaVersion >= 6) {
                            if (this.eat(T.bracketL)) return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(T.bracketR), e.key;
                            e.computed = !1
                        }
                        return e.key = this.type === T.num || this.type === T.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved)
                    }, ee.initFunction = function (e) {
                        e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1)
                    }, ee.parseMethod = function (e, t, n) {
                        var r = this.startNode(),
                            i = this.yieldPos,
                            s = this.awaitPos,
                            a = this.awaitIdentPos;
                        return this.initFunction(r), this.options.ecmaVersion >= 6 && (r.generator = e), this.options.ecmaVersion >= 8 && (r.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | K(t, r.generator) | (n ? 128 : 0)), this.expect(T.parenL), r.params = this.parseBindingList(T.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(r, !1, !0), this.yieldPos = i, this.awaitPos = s, this.awaitIdentPos = a, this.finishNode(r, "FunctionExpression")
                    }, ee.parseArrowExpression = function (e, t, n) {
                        var r = this.yieldPos,
                            i = this.awaitPos,
                            s = this.awaitIdentPos;
                        return this.enterScope(16 | K(n, !1)), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!n), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1), this.yieldPos = r, this.awaitPos = i, this.awaitIdentPos = s, this.finishNode(e, "ArrowFunctionExpression")
                    }, ee.parseFunctionBody = function (e, t, n) {
                        var r = t && this.type !== T.braceL,
                            i = this.strict,
                            s = !1;
                        if (r) e.body = this.parseMaybeAssign(), e.expression = !0, this.checkParams(e, !1);
                        else {
                            var a = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
                            i && !a || (s = this.strictDirective(this.end)) && a && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list");
                            var o = this.labels;
                            this.labels = [], s && (this.strict = !0), this.checkParams(e, !i && !s && !t && !n && this.isSimpleParamList(e.params)), e.body = this.parseBlock(!1), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = o
                        }
                        this.exitScope(), this.strict && e.id && this.checkLVal(e.id, 5), this.strict = i
                    }, ee.isSimpleParamList = function (e) {
                        for (var t = 0, n = e; t < n.length; t += 1) {
                            if ("Identifier" !== n[t].type) return !1
                        }
                        return !0
                    }, ee.checkParams = function (e, t) {
                        for (var n = {}, r = 0, i = e.params; r < i.length; r += 1) {
                            var s = i[r];
                            this.checkLVal(s, 1, t ? null : n)
                        }
                    }, ee.parseExprList = function (e, t, n, r) {
                        for (var i = [], s = !0; !this.eat(e);) {
                            if (s) s = !1;
                            else if (this.expect(T.comma), t && this.afterTrailingComma(e)) break;
                            var a = void 0;
                            n && this.type === T.comma ? a = null : this.type === T.ellipsis ? (a = this.parseSpread(r), r && this.type === T.comma && r.trailingComma < 0 && (r.trailingComma = this.start)) : a = this.parseMaybeAssign(!1, r), i.push(a)
                        }
                        return i
                    }, ee.checkUnreserved = function (e) {
                        var t = e.start,
                            n = e.end,
                            r = e.name;
                        (this.inGenerator && "yield" === r && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === r && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.keywords.test(r) && this.raise(t, "Unexpected keyword '" + r + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(t, n).indexOf("\\")) || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(r) && (this.inAsync || "await" !== r || this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + r + "' is reserved"))
                    }, ee.parseIdent = function (e, t) {
                        var n = this.startNode();
                        return this.type === T.name ? n.name = this.value : this.type.keyword ? (n.name = this.type.keyword, "class" !== n.name && "function" !== n.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop()) : this.unexpected(), this.next(!!e), this.finishNode(n, "Identifier"), e || (this.checkUnreserved(n), "await" !== n.name || this.awaitIdentPos || (this.awaitIdentPos = n.start)), n
                    }, ee.parseYield = function (e) {
                        this.yieldPos || (this.yieldPos = this.start);
                        var t = this.startNode();
                        return this.next(), this.type === T.semi || this.canInsertSemicolon() || this.type !== T.star && !this.type.startsExpr ? (t.delegate = !1, t.argument = null) : (t.delegate = this.eat(T.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression")
                    }, ee.parseAwait = function () {
                        this.awaitPos || (this.awaitPos = this.start);
                        var e = this.startNode();
                        return this.next(), e.argument = this.parseMaybeUnary(null, !1), this.finishNode(e, "AwaitExpression")
                    };
                    var ne = G.prototype;
                    ne.raise = function (e, t) {
                        var n = F(this.input, e);
                        t += " (" + n.line + ":" + n.column + ")";
                        var r = new SyntaxError(t);
                        throw r.pos = e, r.loc = n, r.raisedAt = this.pos, r
                    }, ne.raiseRecoverable = ne.raise, ne.curPosition = function () {
                        if (this.options.locations) return new L(this.curLine, this.pos - this.lineStart)
                    };
                    var re = G.prototype,
                        ie = function (e) {
                            this.flags = e, this.var = [], this.lexical = [], this.functions = []
                        };
                    re.enterScope = function (e) {
                        this.scopeStack.push(new ie(e))
                    }, re.exitScope = function () {
                        this.scopeStack.pop()
                    }, re.treatFunctionsAsVarInScope = function (e) {
                        return e.flags & M || !this.inModule && 1 & e.flags
                    }, re.declareName = function (e, t, n) {
                        var r = !1;
                        if (2 === t) {
                            var i = this.currentScope();
                            r = i.lexical.indexOf(e) > -1 || i.functions.indexOf(e) > -1 || i.var.indexOf(e) > -1, i.lexical.push(e), this.inModule && 1 & i.flags && delete this.undefinedExports[e]
                        } else if (4 === t) {
                            this.currentScope().lexical.push(e)
                        } else if (3 === t) {
                            var s = this.currentScope();
                            r = this.treatFunctionsAsVar ? s.lexical.indexOf(e) > -1 : s.lexical.indexOf(e) > -1 || s.var.indexOf(e) > -1, s.functions.push(e)
                        } else
                            for (var a = this.scopeStack.length - 1; a >= 0; --a) {
                                var o = this.scopeStack[a];
                                if (o.lexical.indexOf(e) > -1 && !(32 & o.flags && o.lexical[0] === e) || !this.treatFunctionsAsVarInScope(o) && o.functions.indexOf(e) > -1) {
                                    r = !0;
                                    break
                                }
                                if (o.var.push(e), this.inModule && 1 & o.flags && delete this.undefinedExports[e], o.flags & O) break
                            }
                        r && this.raiseRecoverable(n, "Identifier '" + e + "' has already been declared")
                    }, re.checkLocalExport = function (e) {
                        -1 === this.scopeStack[0].lexical.indexOf(e.name) && -1 === this.scopeStack[0].var.indexOf(e.name) && (this.undefinedExports[e.name] = e)
                    }, re.currentScope = function () {
                        return this.scopeStack[this.scopeStack.length - 1]
                    }, re.currentVarScope = function () {
                        for (var e = this.scopeStack.length - 1;; e--) {
                            var t = this.scopeStack[e];
                            if (t.flags & O) return t
                        }
                    }, re.currentThisScope = function () {
                        for (var e = this.scopeStack.length - 1;; e--) {
                            var t = this.scopeStack[e];
                            if (t.flags & O && !(16 & t.flags)) return t
                        }
                    };
                    var se = function (e, t, n) {
                            this.type = "", this.start = t, this.end = 0, e.options.locations && (this.loc = new R(e, n)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [t, 0])
                        },
                        ae = G.prototype;

                    function oe(e, t, n, r) {
                        return e.type = t, e.end = n, this.options.locations && (e.loc.end = r), this.options.ranges && (e.range[1] = n), e
                    }
                    ae.startNode = function () {
                        return new se(this, this.start, this.startLoc)
                    }, ae.startNodeAt = function (e, t) {
                        return new se(this, e, t)
                    }, ae.finishNode = function (e, t) {
                        return oe.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc)
                    }, ae.finishNodeAt = function (e, t, n, r) {
                        return oe.call(this, e, t, n, r)
                    };
                    var ue = function (e, t, n, r, i) {
                            this.token = e, this.isExpr = !!t, this.preserveSpace = !!n, this.override = r, this.generator = !!i
                        },
                        le = {
                            b_stat: new ue("{", !1),
                            b_expr: new ue("{", !0),
                            b_tmpl: new ue("${", !1),
                            p_stat: new ue("(", !1),
                            p_expr: new ue("(", !0),
                            q_tmpl: new ue("`", !0, !0, function (e) {
                                return e.tryReadTemplateToken()
                            }),
                            f_stat: new ue("function", !1),
                            f_expr: new ue("function", !0),
                            f_expr_gen: new ue("function", !0, !1, null, !0),
                            f_gen: new ue("function", !1, !1, null, !0)
                        },
                        he = G.prototype;
                    he.initialContext = function () {
                        return [le.b_stat]
                    }, he.braceIsBlock = function (e) {
                        var t = this.curContext();
                        return t === le.f_expr || t === le.f_stat || (e !== T.colon || t !== le.b_stat && t !== le.b_expr ? e === T._return || e === T.name && this.exprAllowed ? v.test(this.input.slice(this.lastTokEnd, this.start)) : e === T._else || e === T.semi || e === T.eof || e === T.parenR || e === T.arrow || (e === T.braceL ? t === le.b_stat : e !== T._var && e !== T._const && e !== T.name && !this.exprAllowed) : !t.isExpr)
                    }, he.inGeneratorContext = function () {
                        for (var e = this.context.length - 1; e >= 1; e--) {
                            var t = this.context[e];
                            if ("function" === t.token) return t.generator
                        }
                        return !1
                    }, he.updateContext = function (e) {
                        var t, n = this.type;
                        n.keyword && e === T.dot ? this.exprAllowed = !1 : (t = n.updateContext) ? t.call(this, e) : this.exprAllowed = n.beforeExpr
                    }, T.parenR.updateContext = T.braceR.updateContext = function () {
                        if (1 !== this.context.length) {
                            var e = this.context.pop();
                            e === le.b_stat && "function" === this.curContext().token && (e = this.context.pop()), this.exprAllowed = !e.isExpr
                        } else this.exprAllowed = !0
                    }, T.braceL.updateContext = function (e) {
                        this.context.push(this.braceIsBlock(e) ? le.b_stat : le.b_expr), this.exprAllowed = !0
                    }, T.dollarBraceL.updateContext = function () {
                        this.context.push(le.b_tmpl), this.exprAllowed = !0
                    }, T.parenL.updateContext = function (e) {
                        var t = e === T._if || e === T._for || e === T._with || e === T._while;
                        this.context.push(t ? le.p_stat : le.p_expr), this.exprAllowed = !0
                    }, T.incDec.updateContext = function () {}, T._function.updateContext = T._class.updateContext = function (e) {
                        !e.beforeExpr || e === T.semi || e === T._else || e === T._return && v.test(this.input.slice(this.lastTokEnd, this.start)) || (e === T.colon || e === T.braceL) && this.curContext() === le.b_stat ? this.context.push(le.f_stat) : this.context.push(le.f_expr), this.exprAllowed = !1
                    }, T.backQuote.updateContext = function () {
                        this.curContext() === le.q_tmpl ? this.context.pop() : this.context.push(le.q_tmpl), this.exprAllowed = !1
                    }, T.star.updateContext = function (e) {
                        if (e === T._function) {
                            var t = this.context.length - 1;
                            this.context[t] === le.f_expr ? this.context[t] = le.f_expr_gen : this.context[t] = le.f_gen
                        }
                        this.exprAllowed = !0
                    }, T.name.updateContext = function (e) {
                        var t = !1;
                        this.options.ecmaVersion >= 6 && e !== T.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t
                    };
                    var ce = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
                        pe = ce + " Extended_Pictographic",
                        de = {
                            9: ce,
                            10: pe,
                            11: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic"
                        },
                        me = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
                        ge = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
                        fe = ge + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
                        xe = {
                            9: ge,
                            10: fe,
                            11: "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho"
                        },
                        ye = {};

                    function be(e) {
                        var t = ye[e] = {
                            binary: $(de[e] + " " + me),
                            nonBinary: {
                                General_Category: $(me),
                                Script: $(xe[e])
                            }
                        };
                        t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions
                    }
                    be(9), be(10), be(11);
                    var Te = G.prototype,
                        ve = function (e) {
                            this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : ""), this.unicodeProperties = ye[e.options.ecmaVersion >= 11 ? 11 : e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = []
                        };

                    function Se(e) {
                        return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
                    }

                    function Ae(e) {
                        return 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || e >= 91 && e <= 94 || e >= 123 && e <= 125
                    }

                    function _e(e) {
                        return e >= 65 && e <= 90 || e >= 97 && e <= 122
                    }

                    function Ee(e) {
                        return _e(e) || 95 === e
                    }

                    function we(e) {
                        return Ee(e) || ke(e)
                    }

                    function ke(e) {
                        return e >= 48 && e <= 57
                    }

                    function Ie(e) {
                        return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102
                    }

                    function De(e) {
                        return e >= 65 && e <= 70 ? e - 65 + 10 : e >= 97 && e <= 102 ? e - 97 + 10 : e - 48
                    }

                    function Ce(e) {
                        return e >= 48 && e <= 55
                    }
                    ve.prototype.reset = function (e, t, n) {
                        var r = -1 !== n.indexOf("u");
                        this.start = 0 | e, this.source = t + "", this.flags = n, this.switchU = r && this.parser.options.ecmaVersion >= 6, this.switchN = r && this.parser.options.ecmaVersion >= 9
                    }, ve.prototype.raise = function (e) {
                        this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e)
                    }, ve.prototype.at = function (e) {
                        var t = this.source,
                            n = t.length;
                        if (e >= n) return -1;
                        var r = t.charCodeAt(e);
                        if (!this.switchU || r <= 55295 || r >= 57344 || e + 1 >= n) return r;
                        var i = t.charCodeAt(e + 1);
                        return i >= 56320 && i <= 57343 ? (r << 10) + i - 56613888 : r
                    }, ve.prototype.nextIndex = function (e) {
                        var t = this.source,
                            n = t.length;
                        if (e >= n) return n;
                        var r, i = t.charCodeAt(e);
                        return !this.switchU || i <= 55295 || i >= 57344 || e + 1 >= n || (r = t.charCodeAt(e + 1)) < 56320 || r > 57343 ? e + 1 : e + 2
                    }, ve.prototype.current = function () {
                        return this.at(this.pos)
                    }, ve.prototype.lookahead = function () {
                        return this.at(this.nextIndex(this.pos))
                    }, ve.prototype.advance = function () {
                        this.pos = this.nextIndex(this.pos)
                    }, ve.prototype.eat = function (e) {
                        return this.current() === e && (this.advance(), !0)
                    }, Te.validateRegExpFlags = function (e) {
                        for (var t = e.validFlags, n = e.flags, r = 0; r < n.length; r++) {
                            var i = n.charAt(r); - 1 === t.indexOf(i) && this.raise(e.start, "Invalid regular expression flag"), n.indexOf(i, r + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag")
                        }
                    }, Te.validateRegExpPattern = function (e) {
                        this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && (e.switchN = !0, this.regexp_pattern(e))
                    }, Te.regexp_pattern = function (e) {
                        e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames.length = 0, e.backReferenceNames.length = 0, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
                        for (var t = 0, n = e.backReferenceNames; t < n.length; t += 1) {
                            var r = n[t]; - 1 === e.groupNames.indexOf(r) && e.raise("Invalid named capture referenced")
                        }
                    }, Te.regexp_disjunction = function (e) {
                        for (this.regexp_alternative(e); e.eat(124);) this.regexp_alternative(e);
                        this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets")
                    }, Te.regexp_alternative = function (e) {
                        for (; e.pos < e.source.length && this.regexp_eatTerm(e););
                    }, Te.regexp_eatTerm = function (e) {
                        return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : !(e.switchU ? !this.regexp_eatAtom(e) : !this.regexp_eatExtendedAtom(e)) && (this.regexp_eatQuantifier(e), !0)
                    }, Te.regexp_eatAssertion = function (e) {
                        var t = e.pos;
                        if (e.lastAssertionIsQuantifiable = !1, e.eat(94) || e.eat(36)) return !0;
                        if (e.eat(92)) {
                            if (e.eat(66) || e.eat(98)) return !0;
                            e.pos = t
                        }
                        if (e.eat(40) && e.eat(63)) {
                            var n = !1;
                            if (this.options.ecmaVersion >= 9 && (n = e.eat(60)), e.eat(61) || e.eat(33)) return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !n, !0
                        }
                        return e.pos = t, !1
                    }, Te.regexp_eatQuantifier = function (e, t) {
                        return void 0 === t && (t = !1), !!this.regexp_eatQuantifierPrefix(e, t) && (e.eat(63), !0)
                    }, Te.regexp_eatQuantifierPrefix = function (e, t) {
                        return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t)
                    }, Te.regexp_eatBracedQuantifier = function (e, t) {
                        var n = e.pos;
                        if (e.eat(123)) {
                            var r = 0,
                                i = -1;
                            if (this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue), e.eat(125))) return -1 !== i && i < r && !t && e.raise("numbers out of order in {} quantifier"), !0;
                            e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = n
                        }
                        return !1
                    }, Te.regexp_eatAtom = function (e) {
                        return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e)
                    }, Te.regexp_eatReverseSolidusAtomEscape = function (e) {
                        var t = e.pos;
                        if (e.eat(92)) {
                            if (this.regexp_eatAtomEscape(e)) return !0;
                            e.pos = t
                        }
                        return !1
                    }, Te.regexp_eatUncapturingGroup = function (e) {
                        var t = e.pos;
                        if (e.eat(40)) {
                            if (e.eat(63) && e.eat(58)) {
                                if (this.regexp_disjunction(e), e.eat(41)) return !0;
                                e.raise("Unterminated group")
                            }
                            e.pos = t
                        }
                        return !1
                    }, Te.regexp_eatCapturingGroup = function (e) {
                        if (e.eat(40)) {
                            if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : 63 === e.current() && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(41)) return e.numCapturingParens += 1, !0;
                            e.raise("Unterminated group")
                        }
                        return !1
                    }, Te.regexp_eatExtendedAtom = function (e) {
                        return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e)
                    }, Te.regexp_eatInvalidBracedQuantifier = function (e) {
                        return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1
                    }, Te.regexp_eatSyntaxCharacter = function (e) {
                        var t = e.current();
                        return !!Ae(t) && (e.lastIntValue = t, e.advance(), !0)
                    }, Te.regexp_eatPatternCharacters = function (e) {
                        for (var t = e.pos, n = 0; - 1 !== (n = e.current()) && !Ae(n);) e.advance();
                        return e.pos !== t
                    }, Te.regexp_eatExtendedPatternCharacter = function (e) {
                        var t = e.current();
                        return !(-1 === t || 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || 91 === t || 94 === t || 124 === t) && (e.advance(), !0)
                    }, Te.regexp_groupSpecifier = function (e) {
                        if (e.eat(63)) {
                            if (this.regexp_eatGroupName(e)) return -1 !== e.groupNames.indexOf(e.lastStringValue) && e.raise("Duplicate capture group name"), void e.groupNames.push(e.lastStringValue);
                            e.raise("Invalid group")
                        }
                    }, Te.regexp_eatGroupName = function (e) {
                        if (e.lastStringValue = "", e.eat(60)) {
                            if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
                            e.raise("Invalid capture group name")
                        }
                        return !1
                    }, Te.regexp_eatRegExpIdentifierName = function (e) {
                        if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
                            for (e.lastStringValue += Se(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e);) e.lastStringValue += Se(e.lastIntValue);
                            return !0
                        }
                        return !1
                    }, Te.regexp_eatRegExpIdentifierStart = function (e) {
                        var t = e.pos,
                            n = e.current();
                        return e.advance(), 92 === n && this.regexp_eatRegExpUnicodeEscapeSequence(e) && (n = e.lastIntValue),
                            function (e) {
                                return p(e, !0) || 36 === e || 95 === e
                            }(n) ? (e.lastIntValue = n, !0) : (e.pos = t, !1)
                    }, Te.regexp_eatRegExpIdentifierPart = function (e) {
                        var t = e.pos,
                            n = e.current();
                        return e.advance(), 92 === n && this.regexp_eatRegExpUnicodeEscapeSequence(e) && (n = e.lastIntValue),
                            function (e) {
                                return d(e, !0) || 36 === e || 95 === e || 8204 === e || 8205 === e
                            }(n) ? (e.lastIntValue = n, !0) : (e.pos = t, !1)
                    }, Te.regexp_eatAtomEscape = function (e) {
                        return !!(this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e)) || (e.switchU && (99 === e.current() && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1)
                    }, Te.regexp_eatBackReference = function (e) {
                        var t = e.pos;
                        if (this.regexp_eatDecimalEscape(e)) {
                            var n = e.lastIntValue;
                            if (e.switchU) return n > e.maxBackReference && (e.maxBackReference = n), !0;
                            if (n <= e.numCapturingParens) return !0;
                            e.pos = t
                        }
                        return !1
                    }, Te.regexp_eatKGroupName = function (e) {
                        if (e.eat(107)) {
                            if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), !0;
                            e.raise("Invalid named reference")
                        }
                        return !1
                    }, Te.regexp_eatCharacterEscape = function (e) {
                        return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e)
                    }, Te.regexp_eatCControlLetter = function (e) {
                        var t = e.pos;
                        if (e.eat(99)) {
                            if (this.regexp_eatControlLetter(e)) return !0;
                            e.pos = t
                        }
                        return !1
                    }, Te.regexp_eatZero = function (e) {
                        return 48 === e.current() && !ke(e.lookahead()) && (e.lastIntValue = 0, e.advance(), !0)
                    }, Te.regexp_eatControlEscape = function (e) {
                        var t = e.current();
                        return 116 === t ? (e.lastIntValue = 9, e.advance(), !0) : 110 === t ? (e.lastIntValue = 10, e.advance(), !0) : 118 === t ? (e.lastIntValue = 11, e.advance(), !0) : 102 === t ? (e.lastIntValue = 12, e.advance(), !0) : 114 === t && (e.lastIntValue = 13, e.advance(), !0)
                    }, Te.regexp_eatControlLetter = function (e) {
                        var t = e.current();
                        return !!_e(t) && (e.lastIntValue = t % 32, e.advance(), !0)
                    }, Te.regexp_eatRegExpUnicodeEscapeSequence = function (e) {
                        var t, n = e.pos;
                        if (e.eat(117)) {
                            if (this.regexp_eatFixedHexDigits(e, 4)) {
                                var r = e.lastIntValue;
                                if (e.switchU && r >= 55296 && r <= 56319) {
                                    var i = e.pos;
                                    if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
                                        var s = e.lastIntValue;
                                        if (s >= 56320 && s <= 57343) return e.lastIntValue = 1024 * (r - 55296) + (s - 56320) + 65536, !0
                                    }
                                    e.pos = i, e.lastIntValue = r
                                }
                                return !0
                            }
                            if (e.switchU && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && ((t = e.lastIntValue) >= 0 && t <= 1114111)) return !0;
                            e.switchU && e.raise("Invalid unicode escape"), e.pos = n
                        }
                        return !1
                    }, Te.regexp_eatIdentityEscape = function (e) {
                        if (e.switchU) return !!this.regexp_eatSyntaxCharacter(e) || !!e.eat(47) && (e.lastIntValue = 47, !0);
                        var t = e.current();
                        return !(99 === t || e.switchN && 107 === t) && (e.lastIntValue = t, e.advance(), !0)
                    }, Te.regexp_eatDecimalEscape = function (e) {
                        e.lastIntValue = 0;
                        var t = e.current();
                        if (t >= 49 && t <= 57) {
                            do {
                                e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance()
                            } while ((t = e.current()) >= 48 && t <= 57);
                            return !0
                        }
                        return !1
                    }, Te.regexp_eatCharacterClassEscape = function (e) {
                        var t = e.current();
                        if (function (e) {
                                return 100 === e || 68 === e || 115 === e || 83 === e || 119 === e || 87 === e
                            }(t)) return e.lastIntValue = -1, e.advance(), !0;
                        if (e.switchU && this.options.ecmaVersion >= 9 && (80 === t || 112 === t)) {
                            if (e.lastIntValue = -1, e.advance(), e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125)) return !0;
                            e.raise("Invalid property name")
                        }
                        return !1
                    }, Te.regexp_eatUnicodePropertyValueExpression = function (e) {
                        var t = e.pos;
                        if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
                            var n = e.lastStringValue;
                            if (this.regexp_eatUnicodePropertyValue(e)) {
                                var r = e.lastStringValue;
                                return this.regexp_validateUnicodePropertyNameAndValue(e, n, r), !0
                            }
                        }
                        if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
                            var i = e.lastStringValue;
                            return this.regexp_validateUnicodePropertyNameOrValue(e, i), !0
                        }
                        return !1
                    }, Te.regexp_validateUnicodePropertyNameAndValue = function (e, t, n) {
                        D(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(n) || e.raise("Invalid property value")
                    }, Te.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
                        e.unicodeProperties.binary.test(t) || e.raise("Invalid property name")
                    }, Te.regexp_eatUnicodePropertyName = function (e) {
                        var t = 0;
                        for (e.lastStringValue = ""; Ee(t = e.current());) e.lastStringValue += Se(t), e.advance();
                        return "" !== e.lastStringValue
                    }, Te.regexp_eatUnicodePropertyValue = function (e) {
                        var t = 0;
                        for (e.lastStringValue = ""; we(t = e.current());) e.lastStringValue += Se(t), e.advance();
                        return "" !== e.lastStringValue
                    }, Te.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
                        return this.regexp_eatUnicodePropertyValue(e)
                    }, Te.regexp_eatCharacterClass = function (e) {
                        if (e.eat(91)) {
                            if (e.eat(94), this.regexp_classRanges(e), e.eat(93)) return !0;
                            e.raise("Unterminated character class")
                        }
                        return !1
                    }, Te.regexp_classRanges = function (e) {
                        for (; this.regexp_eatClassAtom(e);) {
                            var t = e.lastIntValue;
                            if (e.eat(45) && this.regexp_eatClassAtom(e)) {
                                var n = e.lastIntValue;
                                !e.switchU || -1 !== t && -1 !== n || e.raise("Invalid character class"), -1 !== t && -1 !== n && t > n && e.raise("Range out of order in character class")
                            }
                        }
                    }, Te.regexp_eatClassAtom = function (e) {
                        var t = e.pos;
                        if (e.eat(92)) {
                            if (this.regexp_eatClassEscape(e)) return !0;
                            if (e.switchU) {
                                var n = e.current();
                                (99 === n || Ce(n)) && e.raise("Invalid class escape"), e.raise("Invalid escape")
                            }
                            e.pos = t
                        }
                        var r = e.current();
                        return 93 !== r && (e.lastIntValue = r, e.advance(), !0)
                    }, Te.regexp_eatClassEscape = function (e) {
                        var t = e.pos;
                        if (e.eat(98)) return e.lastIntValue = 8, !0;
                        if (e.switchU && e.eat(45)) return e.lastIntValue = 45, !0;
                        if (!e.switchU && e.eat(99)) {
                            if (this.regexp_eatClassControlLetter(e)) return !0;
                            e.pos = t
                        }
                        return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e)
                    }, Te.regexp_eatClassControlLetter = function (e) {
                        var t = e.current();
                        return !(!ke(t) && 95 !== t) && (e.lastIntValue = t % 32, e.advance(), !0)
                    }, Te.regexp_eatHexEscapeSequence = function (e) {
                        var t = e.pos;
                        if (e.eat(120)) {
                            if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
                            e.switchU && e.raise("Invalid escape"), e.pos = t
                        }
                        return !1
                    }, Te.regexp_eatDecimalDigits = function (e) {
                        var t = e.pos,
                            n = 0;
                        for (e.lastIntValue = 0; ke(n = e.current());) e.lastIntValue = 10 * e.lastIntValue + (n - 48), e.advance();
                        return e.pos !== t
                    }, Te.regexp_eatHexDigits = function (e) {
                        var t = e.pos,
                            n = 0;
                        for (e.lastIntValue = 0; Ie(n = e.current());) e.lastIntValue = 16 * e.lastIntValue + De(n), e.advance();
                        return e.pos !== t
                    }, Te.regexp_eatLegacyOctalEscapeSequence = function (e) {
                        if (this.regexp_eatOctalDigit(e)) {
                            var t = e.lastIntValue;
                            if (this.regexp_eatOctalDigit(e)) {
                                var n = e.lastIntValue;
                                t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = 64 * t + 8 * n + e.lastIntValue : e.lastIntValue = 8 * t + n
                            } else e.lastIntValue = t;
                            return !0
                        }
                        return !1
                    }, Te.regexp_eatOctalDigit = function (e) {
                        var t = e.current();
                        return Ce(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1)
                    }, Te.regexp_eatFixedHexDigits = function (e, t) {
                        var n = e.pos;
                        e.lastIntValue = 0;
                        for (var r = 0; r < t; ++r) {
                            var i = e.current();
                            if (!Ie(i)) return e.pos = n, !1;
                            e.lastIntValue = 16 * e.lastIntValue + De(i), e.advance()
                        }
                        return !0
                    };
                    var $e = function (e) {
                            this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new R(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end])
                        },
                        Le = G.prototype;

                    function Re(e) {
                        return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
                    }
                    Le.next = function (e) {
                        !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new $e(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken()
                    }, Le.getToken = function () {
                        return this.next(), new $e(this)
                    }, "undefined" != typeof Symbol && (Le[Symbol.iterator] = function () {
                        var e = this;
                        return {
                            next: function () {
                                var t = e.getToken();
                                return {
                                    done: t.type === T.eof,
                                    value: t
                                }
                            }
                        }
                    }), Le.curContext = function () {
                        return this.context[this.context.length - 1]
                    }, Le.nextToken = function () {
                        var e = this.curContext();
                        return e && e.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(T.eof) : e.override ? e.override(this) : void this.readToken(this.fullCharCodeAtPos())
                    }, Le.readToken = function (e) {
                        return p(e, this.options.ecmaVersion >= 6) || 92 === e ? this.readWord() : this.getTokenFromCode(e)
                    }, Le.fullCharCodeAtPos = function () {
                        var e = this.input.charCodeAt(this.pos);
                        return e <= 55295 || e >= 57344 ? e : (e << 10) + this.input.charCodeAt(this.pos + 1) - 56613888
                    }, Le.skipBlockComment = function () {
                        var e, t = this.options.onComment && this.curPosition(),
                            n = this.pos,
                            r = this.input.indexOf("*/", this.pos += 2);
                        if (-1 === r && this.raise(this.pos - 2, "Unterminated comment"), this.pos = r + 2, this.options.locations)
                            for (S.lastIndex = n;
                                (e = S.exec(this.input)) && e.index < this.pos;) ++this.curLine, this.lineStart = e.index + e[0].length;
                        this.options.onComment && this.options.onComment(!0, this.input.slice(n + 2, r), n, this.pos, t, this.curPosition())
                    }, Le.skipLineComment = function (e) {
                        for (var t = this.pos, n = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !A(r);) r = this.input.charCodeAt(++this.pos);
                        this.options.onComment && this.options.onComment(!1, this.input.slice(t + e, this.pos), t, this.pos, n, this.curPosition())
                    }, Le.skipSpace = function () {
                        e: for (; this.pos < this.input.length;) {
                            var e = this.input.charCodeAt(this.pos);
                            switch (e) {
                                case 32:
                                case 160:
                                    ++this.pos;
                                    break;
                                case 13:
                                    10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
                                case 10:
                                case 8232:
                                case 8233:
                                    ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
                                    break;
                                case 47:
                                    switch (this.input.charCodeAt(this.pos + 1)) {
                                        case 42:
                                            this.skipBlockComment();
                                            break;
                                        case 47:
                                            this.skipLineComment(2);
                                            break;
                                        default:
                                            break e
                                    }
                                    break;
                                default:
                                    if (!(e > 8 && e < 14 || e >= 5760 && _.test(String.fromCharCode(e)))) break e;
                                    ++this.pos
                            }
                        }
                    }, Le.finishToken = function (e, t) {
                        this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
                        var n = this.type;
                        this.type = e, this.value = t, this.updateContext(n)
                    }, Le.readToken_dot = function () {
                        var e = this.input.charCodeAt(this.pos + 1);
                        if (e >= 48 && e <= 57) return this.readNumber(!0);
                        var t = this.input.charCodeAt(this.pos + 2);
                        return this.options.ecmaVersion >= 6 && 46 === e && 46 === t ? (this.pos += 3, this.finishToken(T.ellipsis)) : (++this.pos, this.finishToken(T.dot))
                    }, Le.readToken_slash = function () {
                        var e = this.input.charCodeAt(this.pos + 1);
                        return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === e ? this.finishOp(T.assign, 2) : this.finishOp(T.slash, 1)
                    }, Le.readToken_mult_modulo_exp = function (e) {
                        var t = this.input.charCodeAt(this.pos + 1),
                            n = 1,
                            r = 42 === e ? T.star : T.modulo;
                        return this.options.ecmaVersion >= 7 && 42 === e && 42 === t && (++n, r = T.starstar, t = this.input.charCodeAt(this.pos + 2)), 61 === t ? this.finishOp(T.assign, n + 1) : this.finishOp(r, n)
                    }, Le.readToken_pipe_amp = function (e) {
                        var t = this.input.charCodeAt(this.pos + 1);
                        return t === e ? this.finishOp(124 === e ? T.logicalOR : T.logicalAND, 2) : 61 === t ? this.finishOp(T.assign, 2) : this.finishOp(124 === e ? T.bitwiseOR : T.bitwiseAND, 1)
                    }, Le.readToken_caret = function () {
                        return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(T.assign, 2) : this.finishOp(T.bitwiseXOR, 1)
                    }, Le.readToken_plus_min = function (e) {
                        var t = this.input.charCodeAt(this.pos + 1);
                        return t === e ? 45 !== t || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !v.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(T.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === t ? this.finishOp(T.assign, 2) : this.finishOp(T.plusMin, 1)
                    }, Le.readToken_lt_gt = function (e) {
                        var t = this.input.charCodeAt(this.pos + 1),
                            n = 1;
                        return t === e ? (n = 62 === e && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + n) ? this.finishOp(T.assign, n + 1) : this.finishOp(T.bitShift, n)) : 33 !== t || 60 !== e || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === t && (n = 2), this.finishOp(T.relational, n)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken())
                    }, Le.readToken_eq_excl = function (e) {
                        var t = this.input.charCodeAt(this.pos + 1);
                        return 61 === t ? this.finishOp(T.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === e && 62 === t && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(T.arrow)) : this.finishOp(61 === e ? T.eq : T.prefix, 1)
                    }, Le.getTokenFromCode = function (e) {
                        switch (e) {
                            case 46:
                                return this.readToken_dot();
                            case 40:
                                return ++this.pos, this.finishToken(T.parenL);
                            case 41:
                                return ++this.pos, this.finishToken(T.parenR);
                            case 59:
                                return ++this.pos, this.finishToken(T.semi);
                            case 44:
                                return ++this.pos, this.finishToken(T.comma);
                            case 91:
                                return ++this.pos, this.finishToken(T.bracketL);
                            case 93:
                                return ++this.pos, this.finishToken(T.bracketR);
                            case 123:
                                return ++this.pos, this.finishToken(T.braceL);
                            case 125:
                                return ++this.pos, this.finishToken(T.braceR);
                            case 58:
                                return ++this.pos, this.finishToken(T.colon);
                            case 63:
                                return ++this.pos, this.finishToken(T.question);
                            case 96:
                                if (this.options.ecmaVersion < 6) break;
                                return ++this.pos, this.finishToken(T.backQuote);
                            case 48:
                                var t = this.input.charCodeAt(this.pos + 1);
                                if (120 === t || 88 === t) return this.readRadixNumber(16);
                                if (this.options.ecmaVersion >= 6) {
                                    if (111 === t || 79 === t) return this.readRadixNumber(8);
                                    if (98 === t || 66 === t) return this.readRadixNumber(2)
                                }
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    return this.readNumber(!1);
                                case 34:
                                case 39:
                                    return this.readString(e);
                                case 47:
                                    return this.readToken_slash();
                                case 37:
                                case 42:
                                    return this.readToken_mult_modulo_exp(e);
                                case 124:
                                case 38:
                                    return this.readToken_pipe_amp(e);
                                case 94:
                                    return this.readToken_caret();
                                case 43:
                                case 45:
                                    return this.readToken_plus_min(e);
                                case 60:
                                case 62:
                                    return this.readToken_lt_gt(e);
                                case 61:
                                case 33:
                                    return this.readToken_eq_excl(e);
                                case 126:
                                    return this.finishOp(T.prefix, 1)
                        }
                        this.raise(this.pos, "Unexpected character '" + Re(e) + "'")
                    }, Le.finishOp = function (e, t) {
                        var n = this.input.slice(this.pos, this.pos + t);
                        return this.pos += t, this.finishToken(e, n)
                    }, Le.readRegexp = function () {
                        for (var e, t, n = this.pos;;) {
                            this.pos >= this.input.length && this.raise(n, "Unterminated regular expression");
                            var r = this.input.charAt(this.pos);
                            if (v.test(r) && this.raise(n, "Unterminated regular expression"), e) e = !1;
                            else {
                                if ("[" === r) t = !0;
                                else if ("]" === r && t) t = !1;
                                else if ("/" === r && !t) break;
                                e = "\\" === r
                            }++this.pos
                        }
                        var i = this.input.slice(n, this.pos);
                        ++this.pos;
                        var s = this.pos,
                            a = this.readWord1();
                        this.containsEsc && this.unexpected(s);
                        var o = this.regexpState || (this.regexpState = new ve(this));
                        o.reset(n, i, a), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
                        var u = null;
                        try {
                            u = new RegExp(i, a)
                        } catch (e) {}
                        return this.finishToken(T.regexp, {
                            pattern: i,
                            flags: a,
                            value: u
                        })
                    }, Le.readInt = function (e, t) {
                        for (var n = this.pos, r = 0, i = 0, s = null == t ? 1 / 0 : t; i < s; ++i) {
                            var a = this.input.charCodeAt(this.pos),
                                o = void 0;
                            if ((o = a >= 97 ? a - 97 + 10 : a >= 65 ? a - 65 + 10 : a >= 48 && a <= 57 ? a - 48 : 1 / 0) >= e) break;
                            ++this.pos, r = r * e + o
                        }
                        return this.pos === n || null != t && this.pos - n !== t ? null : r
                    }, Le.readRadixNumber = function (e) {
                        var t = this.pos;
                        this.pos += 2;
                        var n = this.readInt(e);
                        return null == n && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (n = "undefined" != typeof BigInt ? BigInt(this.input.slice(t, this.pos)) : null, ++this.pos) : p(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(T.num, n)
                    }, Le.readNumber = function (e) {
                        var t = this.pos;
                        e || null !== this.readInt(10) || this.raise(t, "Invalid number");
                        var n = this.pos - t >= 2 && 48 === this.input.charCodeAt(t);
                        n && this.strict && this.raise(t, "Invalid number");
                        var r = this.input.charCodeAt(this.pos);
                        if (!n && !e && this.options.ecmaVersion >= 11 && 110 === r) {
                            var i = this.input.slice(t, this.pos),
                                s = "undefined" != typeof BigInt ? BigInt(i) : null;
                            return ++this.pos, p(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(T.num, s)
                        }
                        n && /[89]/.test(this.input.slice(t, this.pos)) && (n = !1), 46 !== r || n || (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), 69 !== r && 101 !== r || n || (43 !== (r = this.input.charCodeAt(++this.pos)) && 45 !== r || ++this.pos, null === this.readInt(10) && this.raise(t, "Invalid number")), p(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
                        var a = this.input.slice(t, this.pos),
                            o = n ? parseInt(a, 8) : parseFloat(a);
                        return this.finishToken(T.num, o)
                    }, Le.readCodePoint = function () {
                        var e;
                        if (123 === this.input.charCodeAt(this.pos)) {
                            this.options.ecmaVersion < 6 && this.unexpected();
                            var t = ++this.pos;
                            e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e > 1114111 && this.invalidStringToken(t, "Code point out of bounds")
                        } else e = this.readHexChar(4);
                        return e
                    }, Le.readString = function (e) {
                        for (var t = "", n = ++this.pos;;) {
                            this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                            var r = this.input.charCodeAt(this.pos);
                            if (r === e) break;
                            92 === r ? (t += this.input.slice(n, this.pos), t += this.readEscapedChar(!1), n = this.pos) : (A(r, this.options.ecmaVersion >= 10) && this.raise(this.start, "Unterminated string constant"), ++this.pos)
                        }
                        return t += this.input.slice(n, this.pos++), this.finishToken(T.string, t)
                    };
                    var Fe = {};
                    Le.tryReadTemplateToken = function () {
                        this.inTemplateElement = !0;
                        try {
                            this.readTmplToken()
                        } catch (e) {
                            if (e !== Fe) throw e;
                            this.readInvalidTemplateToken()
                        }
                        this.inTemplateElement = !1
                    }, Le.invalidStringToken = function (e, t) {
                        if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Fe;
                        this.raise(e, t)
                    }, Le.readTmplToken = function () {
                        for (var e = "", t = this.pos;;) {
                            this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                            var n = this.input.charCodeAt(this.pos);
                            if (96 === n || 36 === n && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== T.template && this.type !== T.invalidTemplate ? (e += this.input.slice(t, this.pos), this.finishToken(T.template, e)) : 36 === n ? (this.pos += 2, this.finishToken(T.dollarBraceL)) : (++this.pos, this.finishToken(T.backQuote));
                            if (92 === n) e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;
                            else if (A(n)) {
                                switch (e += this.input.slice(t, this.pos), ++this.pos, n) {
                                    case 13:
                                        10 === this.input.charCodeAt(this.pos) && ++this.pos;
                                    case 10:
                                        e += "\n";
                                        break;
                                    default:
                                        e += String.fromCharCode(n)
                                }
                                this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos
                            } else ++this.pos
                        }
                    }, Le.readInvalidTemplateToken = function () {
                        for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
                            case "\\":
                                ++this.pos;
                                break;
                            case "$":
                                if ("{" !== this.input[this.pos + 1]) break;
                            case "`":
                                return this.finishToken(T.invalidTemplate, this.input.slice(this.start, this.pos))
                        }
                        this.raise(this.start, "Unterminated template")
                    }, Le.readEscapedChar = function (e) {
                        var t = this.input.charCodeAt(++this.pos);
                        switch (++this.pos, t) {
                            case 110:
                                return "\n";
                            case 114:
                                return "\r";
                            case 120:
                                return String.fromCharCode(this.readHexChar(2));
                            case 117:
                                return Re(this.readCodePoint());
                            case 116:
                                return "\t";
                            case 98:
                                return "\b";
                            case 118:
                                return "\v";
                            case 102:
                                return "\f";
                            case 13:
                                10 === this.input.charCodeAt(this.pos) && ++this.pos;
                            case 10:
                                return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
                            case 56:
                            case 57:
                                if (e) {
                                    var n = this.pos - 1;
                                    return this.invalidStringToken(n, "Invalid escape sequence in template string"), null
                                }
                                default:
                                    if (t >= 48 && t <= 55) {
                                        var r = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                                            i = parseInt(r, 8);
                                        return i > 255 && (r = r.slice(0, -1), i = parseInt(r, 8)), this.pos += r.length - 1, t = this.input.charCodeAt(this.pos), "0" === r && 56 !== t && 57 !== t || !this.strict && !e || this.invalidStringToken(this.pos - 1 - r.length, e ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(i)
                                    }
                                    return A(t) ? "" : String.fromCharCode(t)
                        }
                    }, Le.readHexChar = function (e) {
                        var t = this.pos,
                            n = this.readInt(16, e);
                        return null === n && this.invalidStringToken(t, "Bad character escape sequence"), n
                    }, Le.readWord1 = function () {
                        this.containsEsc = !1;
                        for (var e = "", t = !0, n = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
                            var i = this.fullCharCodeAtPos();
                            if (d(i, r)) this.pos += i <= 65535 ? 1 : 2;
                            else {
                                if (92 !== i) break;
                                this.containsEsc = !0, e += this.input.slice(n, this.pos);
                                var s = this.pos;
                                117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
                                var a = this.readCodePoint();
                                (t ? p : d)(a, r) || this.invalidStringToken(s, "Invalid Unicode escape"), e += Re(a), n = this.pos
                            }
                            t = !1
                        }
                        return e + this.input.slice(n, this.pos)
                    }, Le.readWord = function () {
                        var e = this.readWord1(),
                            t = T.name;
                        return this.keywords.test(e) && (t = y[e]), this.finishToken(t, e)
                    }, G.acorn = {
                        Parser: G,
                        version: "7.1.0",
                        defaultOptions: N,
                        Position: L,
                        SourceLocation: R,
                        getLineInfo: F,
                        Node: se,
                        TokenType: m,
                        tokTypes: T,
                        keywordTypes: y,
                        TokContext: ue,
                        tokContexts: le,
                        isIdentifierChar: d,
                        isIdentifierStart: p,
                        Token: $e,
                        isNewLine: A,
                        lineBreak: v,
                        lineBreakG: S,
                        nonASCIIwhitespace: _
                    }, e.Node = se, e.Parser = G, e.Position = L, e.SourceLocation = R, e.TokContext = ue, e.Token = $e, e.TokenType = m, e.defaultOptions = N, e.getLineInfo = F, e.isIdentifierChar = d, e.isIdentifierStart = p, e.isNewLine = A, e.keywordTypes = y, e.lineBreak = v, e.lineBreakG = S, e.nonASCIIwhitespace = _, e.parse = function (e, t) {
                        return G.parse(e, t)
                    }, e.parseExpressionAt = function (e, t, n) {
                        return G.parseExpressionAt(e, t, n)
                    }, e.tokContexts = le, e.tokTypes = T, e.tokenizer = function (e, t) {
                        return G.tokenizer(e, t)
                    }, e.version = "7.1.0", Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }("object" == typeof n && void 0 !== t ? n : (r = r || self).acorn = {})
        }, {}],
        2: [function (e, t, n) {}, {}],
        3: [function (e, t, n) {
            function r(e, t = {}) {
                const {
                    contextName: n = "gl",
                    throwGetError: r,
                    useTrackablePrimitives: o,
                    readPixelsFile: u,
                    recording: l = [],
                    variables: h = {},
                    onReadPixels: c,
                    onUnrecognizedArgumentLookup: p
                } = t, d = new Proxy(e, {
                    get: function (t, d) {
                        switch (d) {
                            case "addComment":
                                return E;
                            case "checkThrowError":
                                return w;
                            case "getReadPixelsVariableName":
                                return f;
                            case "insertVariable":
                                return v;
                            case "reset":
                                return T;
                            case "setIndent":
                                return A;
                            case "toString":
                                return b;
                            case "getContextVariableName":
                                return I
                        }
                        if ("function" == typeof e[d]) return function () {
                            switch (d) {
                                case "getError":
                                    return r ? l.push(`${y}if (${n}.getError() !== ${n}.NONE) throw new Error('error');`) : l.push(`${y}${n}.getError();`), e.getError();
                                case "getExtension": {
                                    const t = `${n}Variables${m.length}`;
                                    l.push(`${y}const ${t} = ${n}.getExtension('${arguments[0]}');`);
                                    const r = e.getExtension(arguments[0]);
                                    if (r && "object" == typeof r) {
                                        const e = i(r, {
                                            getEntity: S,
                                            useTrackablePrimitives: o,
                                            recording: l,
                                            contextName: t,
                                            contextVariables: m,
                                            variables: h,
                                            indent: y,
                                            onUnrecognizedArgumentLookup: p
                                        });
                                        return m.push(e), e
                                    }
                                    return m.push(null), r
                                }
                                case "readPixels":
                                    const t = m.indexOf(arguments[6]);
                                    let a;
                                    if (-1 === t) {
                                        const e = function (e) {
                                            if (h)
                                                for (const t in h)
                                                    if (h[t] === e) return t;
                                            return null
                                        }(arguments[6]);
                                        e ? (a = e, l.push(`${y}${e}`)) : (a = `${n}Variable${m.length}`, m.push(arguments[6]), l.push(`${y}const ${a} = new ${arguments[6].constructor.name}(${arguments[6].length});`))
                                    } else a = `${n}Variable${t}`;
                                    f = a;
                                    const g = [arguments[0], arguments[1], arguments[2], arguments[3], S(arguments[4]), S(arguments[5]), a];
                                    return l.push(`${y}${n}.readPixels(${g.join(", ")});`), u && function (e, t) {
                                        const r = `${n}Variable${m.length}`,
                                            i = `imageDatum${x}`;
                                        l.push(`${y}let ${i} = ["P3\\n# ${u}.ppm\\n", ${e}, ' ', ${t}, "\\n255\\n"].join("");`), l.push(`${y}for (let i = 0; i < ${i}.length; i += 4) {`), l.push(`${y}  ${i} += ${r}[i] + ' ' + ${r}[i + 1] + ' ' + ${r}[i + 2] + ' ';`), l.push(`${y}}`), l.push(`${y}if (typeof require !== "undefined") {`), l.push(`${y}  require('fs').writeFileSync('./${u}.ppm', ${i});`), l.push(`${y}}`), x++
                                    }(arguments[2], arguments[3]), c && c(a, g), e.readPixels.apply(e, arguments);
                                case "drawBuffers":
                                    return l.push(`${y}${n}.drawBuffers([${s(arguments[0],{contextName:n,contextVariables:m,getEntity:S,addVariable:_,variables:h,onUnrecognizedArgumentLookup:p})}]);`), e.drawBuffers(arguments[0])
                            }
                            let t = e[d].apply(e, arguments);
                            switch (typeof t) {
                                case "undefined":
                                    return void l.push(`${y}${k(d,arguments)};`);
                                case "number":
                                case "boolean":
                                    if (o && -1 === m.indexOf(a(t))) {
                                        l.push(`${y}const ${n}Variable${m.length} = ${k(d,arguments)};`), m.push(t = a(t));
                                        break
                                    }
                                    default:
                                        null === t ? l.push(`${k(d,arguments)};`) : l.push(`${y}const ${n}Variable${m.length} = ${k(d,arguments)};`), m.push(t)
                            }
                            return t
                        };
                        return g[e[d]] = d, e[d]
                    }
                }), m = [], g = {};
                let f, x = 0,
                    y = "";
                return d;

                function b() {
                    return l.join("\n")
                }

                function T() {
                    for (; l.length > 0;) l.pop()
                }

                function v(e, t) {
                    h[e] = t
                }

                function S(e) {
                    const t = g[e];
                    return t ? n + "." + t : e
                }

                function A(e) {
                    y = " ".repeat(e)
                }

                function _(e, t) {
                    const r = `${n}Variable${m.length}`;
                    return l.push(`${y}const ${r} = ${t};`), m.push(e), r
                }

                function E(e) {
                    l.push(`${y}// ${e}`)
                }

                function w() {
                    l.push(`${y}(() => {\n${y}const error = ${n}.getError();\n${y}if (error !== ${n}.NONE) {\n${y}  const names = Object.getOwnPropertyNames(gl);\n${y}  for (let i = 0; i < names.length; i++) {\n${y}    const name = names[i];\n${y}    if (${n}[name] === error) {\n${y}      throw new Error('${n} threw ' + name);\n${y}    }\n${y}  }\n${y}}\n${y}})();`)
                }

                function k(e, t) {
                    return `${n}.${e}(${s(t,{contextName:n,contextVariables:m,getEntity:S,addVariable:_,variables:h,onUnrecognizedArgumentLookup:p})})`
                }

                function I(e) {
                    const t = m.indexOf(e);
                    return -1 !== t ? `${n}Variable${t}` : null
                }
            }

            function i(e, t) {
                const n = new Proxy(e, {
                        get: function (t, n) {
                            if ("function" == typeof t[n]) return function () {
                                switch (n) {
                                    case "drawBuffersWEBGL":
                                        return h.push(`${p}${i}.drawBuffersWEBGL([${s(arguments[0],{contextName:i,contextVariables:o,getEntity:m,addVariable:f,variables:c,onUnrecognizedArgumentLookup:d})}]);`), e.drawBuffersWEBGL(arguments[0])
                                }
                                let t = e[n].apply(e, arguments);
                                switch (typeof t) {
                                    case "undefined":
                                        return void h.push(`${p}${g(n,arguments)};`);
                                    case "number":
                                    case "boolean":
                                        l && -1 === o.indexOf(a(t)) ? (h.push(`${p}const ${i}Variable${o.length} = ${g(n,arguments)};`), o.push(t = a(t))) : (h.push(`${p}const ${i}Variable${o.length} = ${g(n,arguments)};`), o.push(t));
                                        break;
                                    default:
                                        null === t ? h.push(`${g(n,arguments)};`) : h.push(`${p}const ${i}Variable${o.length} = ${g(n,arguments)};`), o.push(t)
                                }
                                return t
                            };
                            return r[e[n]] = n, e[n]
                        }
                    }),
                    r = {},
                    {
                        contextName: i,
                        contextVariables: o,
                        getEntity: u,
                        useTrackablePrimitives: l,
                        recording: h,
                        variables: c,
                        indent: p,
                        onUnrecognizedArgumentLookup: d
                    } = t;
                return n;

                function m(e) {
                    return r.hasOwnProperty(e) ? `${i}.${r[e]}` : u(e)
                }

                function g(e, t) {
                    return `${i}.${e}(${s(t,{contextName:i,contextVariables:o,getEntity:m,addVariable:f,variables:c,onUnrecognizedArgumentLookup:d})})`
                }

                function f(e, t) {
                    const n = `${i}Variable${o.length}`;
                    return o.push(e), h.push(`${p}const ${n} = ${t};`), n
                }
            }

            function s(e, t) {
                const {
                    variables: n,
                    onUnrecognizedArgumentLookup: r
                } = t;
                return Array.from(e).map(e => {
                    const i = function (e) {
                        if (n)
                            for (const t in n)
                                if (n.hasOwnProperty(t) && n[t] === e) return t;
                        if (r) return r(e);
                        return null
                    }(e);
                    return i || function (e, t) {
                        const {
                            contextName: n,
                            contextVariables: r,
                            getEntity: i,
                            addVariable: s,
                            onUnrecognizedArgumentLookup: a
                        } = t;
                        if (void 0 === e) return "undefined";
                        if (null === e) return "null";
                        const o = r.indexOf(e);
                        if (o > -1) return `${n}Variable${o}`;
                        switch (e.constructor.name) {
                            case "String":
                                const t = /\n/.test(e),
                                    n = /'/.test(e),
                                    r = /"/.test(e);
                                return t ? "`" + e + "`" : n && !r ? '"' + e + '"' : "'" + e + "'";
                            case "Number":
                            case "Boolean":
                                return i(e);
                            case "Array":
                                return s(e, `new ${e.constructor.name}([${Array.from(e).join(",")}])`);
                            case "Float32Array":
                            case "Uint8Array":
                            case "Uint16Array":
                            case "Int32Array":
                                return s(e, `new ${e.constructor.name}(${JSON.stringify(Array.from(e))})`);
                            default:
                                if (a) {
                                    const t = a(e);
                                    if (t) return t
                                }
                                throw new Error(`unrecognized argument type ${e.constructor.name}`)
                        }
                    }(e, t)
                }).join(", ")
            }

            function a(e) {
                return new e.constructor(e)
            }
            void 0 !== t && (t.exports = {
                glWiretap: r,
                glExtensionWiretap: i
            }), "undefined" != typeof window && (r.glExtensionWiretap = i, window.glWiretap = r)
        }, {}],
        4: [function (e, t, n) {
            function r(e) {
                const t = new Array(e.length);
                for (let n = 0; n < e.length; n++) {
                    const r = e[n];
                    r.toArray ? t[n] = r.toArray() : t[n] = r
                }
                return t
            }

            function i(e) {
                e.setOutput = (t => {
                    e.output = a(t), e.graphical && s(e)
                }), e.toJSON = (() => {
                    throw new Error("Not usable with gpuMock")
                }), e.setConstants = (t => (e.constants = t, e)), e.setGraphical = (t => (e.graphical = t, e)), e.setCanvas = (t => (e.canvas = t, e)), e.setContext = (t => (e.context = t, e)), e.destroy = (() => {}), e.validateSettings = (() => {}), e.graphical && e.output && s(e), e.exec = function () {
                    return new Promise((t, n) => {
                        try {
                            t(e.apply(e, arguments))
                        } catch (e) {
                            n(e)
                        }
                    })
                }, e.getPixels = (t => {
                    const {
                        x: n,
                        y: r
                    } = e.output;
                    return t ? function (e, t, n) {
                        const r = n / 2 | 0,
                            i = 4 * t,
                            s = new Uint8ClampedArray(4 * t),
                            a = e.slice(0);
                        for (let e = 0; e < r; ++e) {
                            const t = e * i,
                                r = (n - e - 1) * i;
                            s.set(a.subarray(t, t + i)), a.copyWithin(t, r, r + i), a.set(s, r)
                        }
                        return a
                    }(e._imageData.data, n, r) : e._imageData.data.slice(0)
                }), e.color = function (t, n, r, i) {
                    void 0 === i && (i = 1), t = Math.floor(255 * t), n = Math.floor(255 * n), r = Math.floor(255 * r), i = Math.floor(255 * i);
                    const s = e.output.x,
                        a = e.output.y,
                        o = e.thread.x + (a - e.thread.y - 1) * s;
                    e._colorData[4 * o + 0] = t, e._colorData[4 * o + 1] = n, e._colorData[4 * o + 2] = r, e._colorData[4 * o + 3] = i
                };
                const t = () => e,
                    n = ["setWarnVarUsage", "setArgumentTypes", "setTactic", "setOptimizeFloatMemory", "setDebug", "setLoopMaxIterations", "setConstantTypes", "setFunctions", "setNativeFunctions", "setInjectedNative", "setPipeline", "setPrecision", "setOutputToTexture", "setImmutable", "setStrictIntegers", "setDynamicOutput", "setHardcodeConstants", "setDynamicArguments", "setUseLegacyEncoder", "setWarnVarUsage", "addSubKernel"];
                for (let r = 0; r < n.length; r++) e[n[r]] = t;
                return e
            }

            function s(e) {
                const {
                    x: t,
                    y: n
                } = e.output;
                if (e.context && e.context.createImageData) {
                    const r = new Uint8ClampedArray(t * n * 4);
                    e._imageData = e.context.createImageData(t, n), e._colorData = r
                } else {
                    const r = new Uint8ClampedArray(t * n * 4);
                    e._imageData = {
                        data: r
                    }, e._colorData = r
                }
            }

            function a(e) {
                let t = null;
                if (e.length)
                    if (3 === e.length) {
                        const [n, r, i] = e;
                        t = {
                            x: n,
                            y: r,
                            z: i
                        }
                    } else if (2 === e.length) {
                    const [n, r] = e;
                    t = {
                        x: n,
                        y: r
                    }
                } else {
                    const [n] = e;
                    t = {
                        x: n
                    }
                } else t = e;
                return t
            }
            t.exports = {
                gpuMock: function (e, t = {}) {
                    const n = t.output ? a(t.output) : null;

                    function s() {
                        return s.output.z ? function () {
                            const e = r(arguments),
                                t = new Array(this.output.z);
                            for (let n = 0; n < this.output.z; n++) {
                                const r = new Array(this.output.y);
                                for (let t = 0; t < this.output.y; t++) {
                                    const i = new Float32Array(this.output.x);
                                    for (let r = 0; r < this.output.x; r++) this.thread.x = r, this.thread.y = t, this.thread.z = n, i[r] = this._fn.apply(this, e);
                                    r[t] = i
                                }
                                t[n] = r
                            }
                            return t
                        }.apply(s, arguments) : s.output.y ? s.graphical ? function () {
                            const e = r(arguments);
                            for (let t = 0; t < this.output.y; t++)
                                for (let n = 0; n < this.output.x; n++) this.thread.x = n, this.thread.y = t, this.thread.z = 0, this._fn.apply(this, e)
                        }.apply(s, arguments) : function () {
                            const e = r(arguments),
                                t = new Array(this.output.y);
                            for (let n = 0; n < this.output.y; n++) {
                                const r = new Float32Array(this.output.x);
                                for (let t = 0; t < this.output.x; t++) this.thread.x = t, this.thread.y = n, this.thread.z = 0, r[t] = this._fn.apply(this, e);
                                t[n] = r
                            }
                            return t
                        }.apply(s, arguments) : function () {
                            const e = r(arguments),
                                t = new Float32Array(this.output.x);
                            for (let n = 0; n < this.output.x; n++) this.thread.x = n, this.thread.y = 0, this.thread.z = 0, t[n] = this._fn.apply(this, e);
                            return t
                        }.apply(s, arguments)
                    }
                    return s._fn = e, s.constants = t.constants || null, s.context = t.context || null, s.canvas = t.canvas || null, s.graphical = t.graphical || !1, s._imageData = null, s._colorData = null, s.output = n, s.thread = {
                        x: 0,
                        y: 0,
                        z: 0
                    }, i(s)
                }
            }
        }, {}],
        5: [function (e, t, n) {
            const {
                utils: r
            } = e("./utils");
            t.exports = {
                alias: function (e, t) {
                    const n = t.toString();
                    return new Function(`return function ${e} (${r.getArgumentNamesFromString(n).join(", ")}) {\n  ${r.getFunctionBodyFromString(n)}\n}`)()
                }
            }
        }, {
            "./utils": 114
        }],
        6: [function (e, t, n) {
            const {
                FunctionNode: r
            } = e("../function-node");
            t.exports = {
                CPUFunctionNode: class extends r {
                    astFunction(e, t) {
                        if (!this.isRootKernel) {
                            t.push("function"), t.push(" "), t.push(this.name), t.push("(");
                            for (let e = 0; e < this.argumentNames.length; ++e) {
                                const n = this.argumentNames[e];
                                e > 0 && t.push(", "), t.push("user_"), t.push(n)
                            }
                            t.push(") {\n")
                        }
                        for (let n = 0; n < e.body.body.length; ++n) this.astGeneric(e.body.body[n], t), t.push("\n");
                        return this.isRootKernel || t.push("}\n"), t
                    }
                    astReturnStatement(e, t) {
                        const n = this.returnType || this.getType(e.argument);
                        return this.returnType || (this.returnType = n), this.isRootKernel ? (t.push(this.leadingReturnStatement), this.astGeneric(e.argument, t), t.push(";\n"), t.push(this.followingReturnStatement), t.push("continue;\n")) : this.isSubKernel ? (t.push(`subKernelResult_${this.name} = `), this.astGeneric(e.argument, t), t.push(";"), t.push(`return subKernelResult_${this.name};`)) : (t.push("return "), this.astGeneric(e.argument, t), t.push(";")), t
                    }
                    astLiteral(e, t) {
                        if (isNaN(e.value)) throw this.astErrorOutput("Non-numeric literal not supported : " + e.value, e);
                        return t.push(e.value), t
                    }
                    astBinaryExpression(e, t) {
                        return t.push("("), this.astGeneric(e.left, t), t.push(e.operator), this.astGeneric(e.right, t), t.push(")"), t
                    }
                    astIdentifierExpression(e, t) {
                        if ("Identifier" !== e.type) throw this.astErrorOutput("IdentifierExpression - not an Identifier", e);
                        switch (e.name) {
                            case "Infinity":
                                t.push("Infinity");
                                break;
                            default:
                                this.constants && this.constants.hasOwnProperty(e.name) ? t.push("constants_" + e.name) : t.push("user_" + e.name)
                        }
                        return t
                    }
                    astForStatement(e, t) {
                        if ("ForStatement" !== e.type) throw this.astErrorOutput("Invalid for statement", e);
                        const n = [],
                            r = [],
                            i = [],
                            s = [];
                        let a = null;
                        if (e.init) {
                            this.pushState("in-for-loop-init"), this.astGeneric(e.init, n);
                            for (let e = 0; e < n.length; e++) n[e].includes && n[e].includes(",") && (a = !1);
                            this.popState("in-for-loop-init")
                        } else a = !1;
                        if (e.test ? this.astGeneric(e.test, r) : a = !1, e.update ? this.astGeneric(e.update, i) : a = !1, e.body && (this.pushState("loop-body"), this.astGeneric(e.body, s), this.popState("loop-body")), null === a && (a = this.isSafe(e.init) && this.isSafe(e.test)), a) t.push(`for (${n.join("")};${r.join("")};${i.join("")}){\n`), t.push(s.join("")), t.push("}\n");
                        else {
                            const e = this.getInternalVariableName("safeI");
                            n.length > 0 && t.push(n.join(""), ";\n"), t.push(`for (let ${e}=0;${e}<LOOP_MAX;${e}++){\n`), r.length > 0 && t.push(`if (!${r.join("")}) break;\n`), t.push(s.join("")), t.push(`\n${i.join("")};`), t.push("}\n")
                        }
                        return t
                    }
                    astWhileStatement(e, t) {
                        if ("WhileStatement" !== e.type) throw this.astErrorOutput("Invalid while statement", e);
                        return t.push("for (let i = 0; i < LOOP_MAX; i++) {"), t.push("if ("), this.astGeneric(e.test, t), t.push(") {\n"), this.astGeneric(e.body, t), t.push("} else {\n"), t.push("break;\n"), t.push("}\n"), t.push("}\n"), t
                    }
                    astDoWhileStatement(e, t) {
                        if ("DoWhileStatement" !== e.type) throw this.astErrorOutput("Invalid while statement", e);
                        return t.push("for (let i = 0; i < LOOP_MAX; i++) {"), this.astGeneric(e.body, t), t.push("if (!"), this.astGeneric(e.test, t), t.push(") {\n"), t.push("break;\n"), t.push("}\n"), t.push("}\n"), t
                    }
                    astAssignmentExpression(e, t) {
                        const n = this.getDeclaration(e.left);
                        if (n && !n.assignable) throw this.astErrorOutput(`Variable ${e.left.name} is not assignable here`, e);
                        return this.astGeneric(e.left, t), t.push(e.operator), this.astGeneric(e.right, t), t
                    }
                    astBlockStatement(e, t) {
                        if (this.isState("loop-body")) {
                            this.pushState("block-body");
                            for (let n = 0; n < e.body.length; n++) this.astGeneric(e.body[n], t);
                            this.popState("block-body")
                        } else {
                            t.push("{\n");
                            for (let n = 0; n < e.body.length; n++) this.astGeneric(e.body[n], t);
                            t.push("}\n")
                        }
                        return t
                    }
                    astVariableDeclaration(e, t) {
                        t.push(`${e.kind} `);
                        const {
                            declarations: n
                        } = e;
                        for (let e = 0; e < n.length; e++) {
                            e > 0 && t.push(",");
                            const r = n[e],
                                i = this.getDeclaration(r.id);
                            i.valueType || (i.valueType = this.getType(r.init)), this.astGeneric(r, t)
                        }
                        return this.isState("in-for-loop-init") || t.push(";"), t
                    }
                    astIfStatement(e, t) {
                        return t.push("if ("), this.astGeneric(e.test, t), t.push(")"), "BlockStatement" === e.consequent.type ? this.astGeneric(e.consequent, t) : (t.push(" {\n"), this.astGeneric(e.consequent, t), t.push("\n}\n")), e.alternate && (t.push("else "), "BlockStatement" === e.alternate.type || "IfStatement" === e.alternate.type ? this.astGeneric(e.alternate, t) : (t.push(" {\n"), this.astGeneric(e.alternate, t), t.push("\n}\n"))), t
                    }
                    astSwitchStatement(e, t) {
                        const {
                            discriminant: n,
                            cases: r
                        } = e;
                        t.push("switch ("), this.astGeneric(n, t), t.push(") {\n");
                        for (let e = 0; e < r.length; e++) null !== r[e].test ? (t.push("case "), this.astGeneric(r[e].test, t), t.push(":\n"), r[e].consequent && r[e].consequent.length > 0 && (this.astGeneric(r[e].consequent, t), t.push("break;\n"))) : (t.push("default:\n"), this.astGeneric(r[e].consequent, t), r[e].consequent && r[e].consequent.length > 0 && t.push("break;\n"));
                        t.push("\n}")
                    }
                    astThisExpression(e, t) {
                        return t.push("_this"), t
                    }
                    astMemberExpression(e, t) {
                        const {
                            signature: n,
                            type: r,
                            property: i,
                            xProperty: s,
                            yProperty: a,
                            zProperty: o,
                            name: u,
                            origin: l
                        } = this.getMemberExpressionDetails(e);
                        switch (n) {
                            case "this.thread.value":
                                return t.push(`_this.thread.${u}`), t;
                            case "this.output.value":
                                switch (u) {
                                    case "x":
                                        t.push("outputX");
                                        break;
                                    case "y":
                                        t.push("outputY");
                                        break;
                                    case "z":
                                        t.push("outputZ");
                                        break;
                                    default:
                                        throw this.astErrorOutput("Unexpected expression", e)
                                }
                                return t;
                            case "value":
                                throw this.astErrorOutput("Unexpected expression", e);
                            case "value[]":
                            case "value[][]":
                            case "value[][][]":
                            case "value.value":
                                if ("Math" === l) return t.push(Math[u]), t;
                                switch (i) {
                                    case "r":
                                        return t.push(`user_${u}[0]`), t;
                                    case "g":
                                        return t.push(`user_${u}[1]`), t;
                                    case "b":
                                        return t.push(`user_${u}[2]`), t;
                                    case "a":
                                        return t.push(`user_${u}[3]`), t
                                }
                                break;
                            case "value.value[]":
                                return this.removeIstanbulCoverage ? t : (t.push(`${e.object.object.name}.${e.object.property.name}[${e.property.value}]`), t);
                            case "value.value[][]":
                                return this.removeIstanbulCoverage ? t : (t.push(`${e.object.object.object.name}.${e.object.object.property.name}[${e.object.property.value}][${e.property.value}]`), t);
                            case "this.constants.value":
                            case "this.constants.value[]":
                            case "this.constants.value[][]":
                            case "this.constants.value[][][]":
                                break;
                            case "fn()[]":
                                return this.astGeneric(e.object, t), t.push("["), this.astGeneric(e.property, t), t.push("]"), t;
                            default:
                                throw this.astErrorOutput("Unexpected expression", e)
                        }
                        if (!e.computed) switch (r) {
                            case "Number":
                            case "Integer":
                            case "Float":
                            case "Boolean":
                                return t.push(`${l}_${u}`), t
                        }
                        const h = `${l}_${u}`;
                        switch (r) {
                            case "Array(2)":
                            case "Array(3)":
                            case "Array(4)":
                            case "HTMLImageArray":
                            case "ArrayTexture(1)":
                            case "ArrayTexture(2)":
                            case "ArrayTexture(3)":
                            case "ArrayTexture(4)":
                            case "HTMLImage":
                            default:
                                let e, n;
                                if ("constants" === l) {
                                    const t = this.constants[u];
                                    e = (n = "Input" === this.constantTypes[u]) ? t.size : null
                                } else e = (n = this.isInput(u)) ? this.argumentSizes[this.argumentNames.indexOf(u)] : null;
                                t.push(`${h}`), o && a ? n ? (t.push("[("), this.astGeneric(o, t), t.push(`*${this.dynamicArguments?"(outputY * outputX)":e[1]*e[0]})+(`), this.astGeneric(a, t), t.push(`*${this.dynamicArguments?"outputX":e[0]})+`), this.astGeneric(s, t), t.push("]")) : (t.push("["), this.astGeneric(o, t), t.push("]"), t.push("["), this.astGeneric(a, t), t.push("]"), t.push("["), this.astGeneric(s, t), t.push("]")) : a ? n ? (t.push("[("), this.astGeneric(a, t), t.push(`*${this.dynamicArguments?"outputX":e[0]})+`), this.astGeneric(s, t), t.push("]")) : (t.push("["), this.astGeneric(a, t), t.push("]"), t.push("["), this.astGeneric(s, t), t.push("]")) : void 0 !== s && (t.push("["), this.astGeneric(s, t), t.push("]"))
                        }
                        return t
                    }
                    astCallExpression(e, t) {
                        if ("CallExpression" !== e.type) throw this.astErrorOutput("Unknown CallExpression", e);
                        let n = this.astMemberExpressionUnroll(e.callee);
                        this.calledFunctions.indexOf(n) < 0 && this.calledFunctions.push(n), this.isAstMathFunction(e), this.onFunctionCall && this.onFunctionCall(this.name, n, e.arguments), t.push(n), t.push("(");
                        const r = this.lookupFunctionArgumentTypes(n) || [];
                        for (let i = 0; i < e.arguments.length; ++i) {
                            const s = e.arguments[i];
                            let a = this.getType(s);
                            r[i] || this.triggerImplyArgumentType(n, i, a, this), i > 0 && t.push(", "), this.astGeneric(s, t)
                        }
                        return t.push(")"), t
                    }
                    astArrayExpression(e, t) {
                        const n = e.elements.length;
                        t.push("new Float32Array([");
                        for (let r = 0; r < n; ++r) {
                            r > 0 && t.push(", ");
                            const n = e.elements[r];
                            this.astGeneric(n, t)
                        }
                        return t.push("])"), t
                    }
                    astDebuggerStatement(e, t) {
                        return t.push("debugger;"), t
                    }
                }
            }
        }, {
            "../function-node": 10
        }],
        7: [function (e, t, n) {
            const {
                utils: r
            } = e("../../utils");
            t.exports = {
                cpuKernelString: function (e, t) {
                    const n = [],
                        i = [],
                        s = [],
                        a = !/^function/.test(e.color.toString());
                    if (n.push("  const { context, canvas, constants: incomingConstants } = settings;", `  const output = new Int32Array(${JSON.stringify(Array.from(e.output))});`, `  const _constantTypes = ${JSON.stringify(e.constantTypes)};`, `  const _constants = ${function(e,t){const n=[];for(const r in t){if(!t.hasOwnProperty(r))continue;const i=t[r],s=e[r];switch(i){case"Number":case"Integer":case"Float":case"Boolean":n.push(`${r}:${s}`);break;case"Array(2)":case"Array(3)":case"Array(4)":n.push(`${r}:new ${s.constructor.name}(${JSON.stringify(Array.from(s))})`)}}return` {
                                $ {
                                    n.join()
                                }
                            }
                            `}(e.constants,e.constantTypes)};`), i.push("    constants: _constants,", "    context,", "    output,", "    thread: {x: 0, y: 0, z: 0},"), e.graphical) {
                        n.push(`  const _imageData = context.createImageData(${e.output[0]}, ${e.output[1]});`), n.push(`  const _colorData = new Uint8ClampedArray(${e.output[0]} * ${e.output[1]} * 4);`);
                        const t = r.flattenFunctionToString((a ? "function " : "") + e.color.toString(), {
                                thisLookup: t => {
                                    switch (t) {
                                        case "_colorData":
                                            return "_colorData";
                                        case "_imageData":
                                            return "_imageData";
                                        case "output":
                                            return "output";
                                        case "thread":
                                            return "this.thread"
                                    }
                                    return JSON.stringify(e[t])
                                },
                                findDependency: (e, t) => null
                            }),
                            o = r.flattenFunctionToString((a ? "function " : "") + e.getPixels.toString(), {
                                thisLookup: t => {
                                    switch (t) {
                                        case "_colorData":
                                            return "_colorData";
                                        case "_imageData":
                                            return "_imageData";
                                        case "output":
                                            return "output";
                                        case "thread":
                                            return "this.thread"
                                    }
                                    return JSON.stringify(e[t])
                                },
                                findDependency: () => null
                            });
                        i.push("    _imageData,", "    _colorData,", `    color: ${t},`), s.push(`  kernel.getPixels = ${o};`)
                    }
                    const o = [],
                        u = Object.keys(e.constantTypes);
                    for (let t = 0; t < u.length; t++) o.push(e.constantTypes[u]);
                    if (-1 !== e.argumentTypes.indexOf("HTMLImageArray") || -1 !== o.indexOf("HTMLImageArray")) {
                        const t = r.flattenFunctionToString((a ? "function " : "") + e._imageTo3DArray.toString(), {
                            doNotDefine: ["canvas"],
                            findDependency: (t, n) => "this" === t ? (a ? "function " : "") + e[n].toString() : null,
                            thisLookup: e => {
                                switch (e) {
                                    case "canvas":
                                        return;
                                    case "context":
                                        return "context"
                                }
                            }
                        });
                        s.push(t), i.push("    _mediaTo2DArray,"), i.push("    _imageTo3DArray,")
                    } else if (-1 !== e.argumentTypes.indexOf("HTMLImage") || -1 !== o.indexOf("HTMLImage")) {
                        const t = r.flattenFunctionToString((a ? "function " : "") + e._mediaTo2DArray.toString(), {
                            findDependency: (e, t) => null,
                            thisLookup: e => {
                                switch (e) {
                                    case "canvas":
                                        return "settings.canvas";
                                    case "context":
                                        return "settings.context"
                                }
                                throw new Error("unhandled thisLookup")
                            }
                        });
                        s.push(t), i.push("    _mediaTo2DArray,")
                    }
                    return `function(settings) {\n${n.join("\n")}\n  for (const p in _constantTypes) {\n    if (!_constantTypes.hasOwnProperty(p)) continue;\n    const type = _constantTypes[p];\n    switch (type) {\n      case 'Number':\n      case 'Integer':\n      case 'Float':\n      case 'Boolean':\n      case 'Array(2)':\n      case 'Array(3)':\n      case 'Array(4)':\n        if (incomingConstants.hasOwnProperty(p)) {\n          console.warn('constant ' + p + ' of type ' + type + ' cannot be resigned');\n        }\n        continue;\n    }\n    if (!incomingConstants.hasOwnProperty(p)) {\n      throw new Error('constant ' + p + ' not found');\n    }\n    _constants[p] = incomingConstants[p];\n  }\n  const kernel = (function() {\n${e._kernelString}\n  })\n    .apply({ ${i.join("\n")} });\n  ${s.join("\n")}\n  return kernel;\n}`
                }
            }
        }, {
            "../../utils": 114
        }],
        8: [function (e, t, n) {
            const {
                Kernel: r
            } = e("../kernel"), {
                FunctionBuilder: i
            } = e("../function-builder"), {
                CPUFunctionNode: s
            } = e("./function-node"), {
                utils: a
            } = e("../../utils"), {
                cpuKernelString: o
            } = e("./kernel-string");
            t.exports = {
                CPUKernel: class extends r {
                    static getFeatures() {
                        return this.features
                    }
                    static get features() {
                        return Object.freeze({
                            kernelMap: !0,
                            isIntegerDivisionAccurate: !0
                        })
                    }
                    static get isSupported() {
                        return !0
                    }
                    static isContextMatch(e) {
                        return !1
                    }
                    static get mode() {
                        return "cpu"
                    }
                    static nativeFunctionArguments() {
                        return null
                    }
                    static nativeFunctionReturnType() {
                        throw new Error(`Looking up native function return type not supported on ${this.name}`)
                    }
                    static combineKernels(e) {
                        return e
                    }
                    static getSignature(e, t) {
                        return "cpu" + (t.length > 0 ? ":" + t.join(",") : "")
                    }
                    constructor(e, t) {
                        super(e, t), this.mergeSettings(e.settings || t), this._imageData = null, this._colorData = null, this._kernelString = null, this._prependedString = [], this.thread = {
                            x: 0,
                            y: 0,
                            z: 0
                        }, this.translatedSources = null
                    }
                    initCanvas() {
                        return "undefined" != typeof document ? document.createElement("canvas") : "undefined" != typeof OffscreenCanvas ? new OffscreenCanvas(0, 0) : void 0
                    }
                    initContext() {
                        return this.canvas ? this.canvas.getContext("2d") : null
                    }
                    initPlugins(e) {
                        return []
                    }
                    validateSettings(e) {
                        if (!this.output || 0 === this.output.length) {
                            if (1 !== e.length) throw new Error("Auto output only supported for kernels with only one input");
                            const t = a.getVariableType(e[0], this.strictIntegers);
                            if ("Array" === t) this.output = a.getDimensions(t);
                            else {
                                if ("NumberTexture" !== t && "ArrayTexture(4)" !== t) throw new Error("Auto output not supported for input type: " + t);
                                this.output = e[0].output
                            }
                        }
                        if (this.graphical && 2 !== this.output.length) throw new Error("Output must have 2 dimensions on graphical mode");
                        this.checkOutput()
                    }
                    translateSource() {
                        if (this.leadingReturnStatement = this.output.length > 1 ? "resultX[x] = " : "result[x] = ", this.subKernels) {
                            const e = [];
                            for (let t = 0; t < this.subKernels.length; t++) {
                                const {
                                    name: n
                                } = this.subKernels[t];
                                e.push(this.output.length > 1 ? `resultX_${n}[x] = subKernelResult_${n};\n` : `result_${n}[x] = subKernelResult_${n};\n`)
                            }
                            this.followingReturnStatement = e.join("")
                        }
                        const e = i.fromKernel(this, s);
                        this.translatedSources = e.getPrototypes("kernel"), this.graphical || this.returnType || (this.returnType = e.getKernelResultType())
                    }
                    build() {
                        if (this.built) return;
                        if (this.setupConstants(), this.setupArguments(arguments), this.validateSettings(arguments), this.translateSource(), this.graphical) {
                            const {
                                canvas: e,
                                output: t
                            } = this;
                            if (!e) throw new Error("no canvas available for using graphical output");
                            const n = t[0],
                                r = t[1] || 1;
                            e.width = n, e.height = r, this._imageData = this.context.createImageData(n, r), this._colorData = new Uint8ClampedArray(n * r * 4)
                        }
                        const e = this.getKernelString();
                        this.kernelString = e, this.debug && (console.log("Function output:"), console.log(e));
                        try {
                            this.run = new Function([], e).bind(this)()
                        } catch (e) {
                            console.error("An error occurred compiling the javascript: ", e)
                        }
                        this.buildSignature(arguments), this.built = !0
                    }
                    color(e, t, n, r) {
                        void 0 === r && (r = 1), e = Math.floor(255 * e), t = Math.floor(255 * t), n = Math.floor(255 * n), r = Math.floor(255 * r);
                        const i = this.output[0],
                            s = this.output[1],
                            a = this.thread.x + (s - this.thread.y - 1) * i;
                        this._colorData[4 * a + 0] = e, this._colorData[4 * a + 1] = t, this._colorData[4 * a + 2] = n, this._colorData[4 * a + 3] = r
                    }
                    getKernelString() {
                        if (null !== this._kernelString) return this._kernelString;
                        let e = null,
                            {
                                translatedSources: t
                            } = this;
                        return t.length > 1 ? t = t.filter(t => /^function/.test(t) ? t : (e = t, !1)) : e = t.shift(), this._kernelString = `  const LOOP_MAX = ${this._getLoopMaxString()};\n  ${this.injectedNative||""}\n  const _this = this;\n  ${this._resultKernelHeader()}\n  ${this._processConstants()}\n  return (${this.argumentNames.map(e=>"user_"+e).join(", ")}) => {\n    ${this._prependedString.join("")}\n    ${this._earlyThrows()}\n    ${this._processArguments()}\n    ${this.graphical?this._graphicalKernelBody(e):this._resultKernelBody(e)}\n    ${t.length>0?t.join("\n"):""}\n  };`
                    }
                    toString() {
                        return o(this)
                    }
                    _getLoopMaxString() {
                        return this.loopMaxIterations ? ` ${parseInt(this.loopMaxIterations)};` : " 1000;"
                    }
                    _processConstants() {
                        if (!this.constants) return "";
                        const e = [];
                        for (let t in this.constants) switch (this.constantTypes[t]) {
                            case "HTMLCanvas":
                            case "HTMLImage":
                            case "HTMLVideo":
                                e.push(`    const constants_${t} = this._mediaTo2DArray(this.constants.${t});\n`);
                                break;
                            case "HTMLImageArray":
                                e.push(`    const constants_${t} = this._imageTo3DArray(this.constants.${t});\n`);
                                break;
                            case "Input":
                                e.push(`    const constants_${t} = this.constants.${t}.value;\n`);
                                break;
                            default:
                                e.push(`    const constants_${t} = this.constants.${t};\n`)
                        }
                        return e.join("")
                    }
                    _earlyThrows() {
                        if (this.graphical) return "";
                        if (this.immutable) return "";
                        if (!this.pipeline) return "";
                        const e = [];
                        for (let t = 0; t < this.argumentTypes.length; t++) "Array" === this.argumentTypes[t] && e.push(this.argumentNames[t]);
                        if (0 === e.length) return "";
                        const t = [];
                        for (let n = 0; n < e.length; n++) {
                            const r = e[n],
                                i = this._mapSubKernels(e => `user_${r} === result_${e.name}`).join(" || ");
                            t.push(`user_${r} === result${i?` || ${i}`:""}`)
                        }
                        return `if (${t.join(" || ")}) throw new Error('Source and destination arrays are the same.  Use immutable = true');`
                    }
                    _processArguments() {
                        const e = [];
                        for (let t = 0; t < this.argumentTypes.length; t++) {
                            const n = `user_${this.argumentNames[t]}`;
                            switch (this.argumentTypes[t]) {
                                case "HTMLCanvas":
                                case "HTMLImage":
                                case "HTMLVideo":
                                    e.push(`    ${n} = this._mediaTo2DArray(${n});\n`);
                                    break;
                                case "HTMLImageArray":
                                    e.push(`    ${n} = this._imageTo3DArray(${n});\n`);
                                    break;
                                case "Input":
                                    e.push(`    ${n} = ${n}.value;\n`);
                                    break;
                                case "ArrayTexture(1)":
                                case "ArrayTexture(2)":
                                case "ArrayTexture(3)":
                                case "ArrayTexture(4)":
                                case "NumberTexture":
                                case "MemoryOptimizedNumberTexture":
                                    e.push(`\n    if (${n}.toArray) {\n      if (!_this.textureCache) {\n        _this.textureCache = [];\n        _this.arrayCache = [];\n      }\n      const textureIndex = _this.textureCache.indexOf(${n});\n      if (textureIndex !== -1) {\n        ${n} = _this.arrayCache[textureIndex];\n      } else {\n        _this.textureCache.push(${n});\n        ${n} = ${n}.toArray();\n        _this.arrayCache.push(${n});\n      }\n    }`)
                            }
                        }
                        return e.join("")
                    }
                    _mediaTo2DArray(e) {
                        const t = this.canvas,
                            n = e.width > 0 ? e.width : e.videoWidth,
                            r = e.height > 0 ? e.height : e.videoHeight;
                        t.width < n && (t.width = n), t.height < r && (t.height = r);
                        const i = this.context;
                        i.drawImage(e, 0, 0, n, r);
                        const s = i.getImageData(0, 0, n, r).data,
                            a = new Array(r);
                        let o = 0;
                        for (let e = r - 1; e >= 0; e--) {
                            const t = a[e] = new Array(n);
                            for (let e = 0; e < n; e++) {
                                const n = new Float32Array(4);
                                n[0] = s[o++] / 255, n[1] = s[o++] / 255, n[2] = s[o++] / 255, n[3] = s[o++] / 255, t[e] = n
                            }
                        }
                        return a
                    }
                    getPixels(e) {
                        const [t, n] = this.output;
                        return e ? a.flipPixels(this._imageData.data, t, n) : this._imageData.data.slice(0)
                    }
                    _imageTo3DArray(e) {
                        const t = new Array(e.length);
                        for (let n = 0; n < e.length; n++) t[n] = this._mediaTo2DArray(e[n]);
                        return t
                    }
                    _resultKernelHeader() {
                        if (this.graphical) return "";
                        if (this.immutable) return "";
                        if (!this.pipeline) return "";
                        switch (this.output.length) {
                            case 1:
                                return this._mutableKernel1DResults();
                            case 2:
                                return this._mutableKernel2DResults();
                            case 3:
                                return this._mutableKernel3DResults()
                        }
                    }
                    _resultKernelBody(e) {
                        switch (this.output.length) {
                            case 1:
                                return (!this.immutable && this.pipeline ? this._resultMutableKernel1DLoop(e) : this._resultImmutableKernel1DLoop(e)) + this._kernelOutput();
                            case 2:
                                return (!this.immutable && this.pipeline ? this._resultMutableKernel2DLoop(e) : this._resultImmutableKernel2DLoop(e)) + this._kernelOutput();
                            case 3:
                                return (!this.immutable && this.pipeline ? this._resultMutableKernel3DLoop(e) : this._resultImmutableKernel3DLoop(e)) + this._kernelOutput();
                            default:
                                throw new Error("unsupported size kernel")
                        }
                    }
                    _graphicalKernelBody(e) {
                        switch (this.output.length) {
                            case 2:
                                return this._graphicalKernel2DLoop(e) + this._graphicalOutput();
                            default:
                                throw new Error("unsupported size kernel")
                        }
                    }
                    _graphicalOutput() {
                        return "\n    this._imageData.data.set(this._colorData);\n    this.context.putImageData(this._imageData, 0, 0);\n    return;"
                    }
                    _getKernelResultTypeConstructorString() {
                        switch (this.returnType) {
                            case "LiteralInteger":
                            case "Number":
                            case "Integer":
                            case "Float":
                                return "Float32Array";
                            case "Array(2)":
                            case "Array(3)":
                            case "Array(4)":
                                return "Array";
                            default:
                                if (this.graphical) return "Float32Array";
                                throw new Error(`unhandled returnType ${this.returnType}`)
                        }
                    }
                    _resultImmutableKernel1DLoop(e) {
                        const t = this._getKernelResultTypeConstructorString();
                        return `  const outputX = _this.output[0];\n    const result = new ${t}(outputX);\n    ${this._mapSubKernels(e=>`const result_${e.name} = new ${t}(outputX);\n`).join("    ")}\n    ${this._mapSubKernels(e=>`let subKernelResult_${e.name};\n`).join("    ")}\n    for (let x = 0; x < outputX; x++) {\n      this.thread.x = x;\n      this.thread.y = 0;\n      this.thread.z = 0;\n      ${e}\n    }`
                    }
                    _mutableKernel1DResults() {
                        const e = this._getKernelResultTypeConstructorString();
                        return `  const outputX = _this.output[0];\n    const result = new ${e}(outputX);\n    ${this._mapSubKernels(t=>`const result_${t.name} = new ${e}(outputX);\n`).join("    ")}\n    ${this._mapSubKernels(e=>`let subKernelResult_${e.name};\n`).join("    ")}`
                    }
                    _resultMutableKernel1DLoop(e) {
                        return `  const outputX = _this.output[0];\n    for (let x = 0; x < outputX; x++) {\n      this.thread.x = x;\n      this.thread.y = 0;\n      this.thread.z = 0;\n      ${e}\n    }`
                    }
                    _resultImmutableKernel2DLoop(e) {
                        const t = this._getKernelResultTypeConstructorString();
                        return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    const result = new Array(outputY);\n    ${this._mapSubKernels(e=>`const result_${e.name} = new Array(outputY);\n`).join("    ")}\n    ${this._mapSubKernels(e=>`let subKernelResult_${e.name};\n`).join("    ")}\n    for (let y = 0; y < outputY; y++) {\n      this.thread.z = 0;\n      this.thread.y = y;\n      const resultX = result[y] = new ${t}(outputX);\n      ${this._mapSubKernels(e=>`const resultX_${e.name} = result_${e.name}[y] = new ${t}(outputX);\n`).join("")}\n      for (let x = 0; x < outputX; x++) {\n        this.thread.x = x;\n        ${e}\n      }\n    }`
                    }
                    _mutableKernel2DResults() {
                        const e = this._getKernelResultTypeConstructorString();
                        return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    const result = new Array(outputY);\n    ${this._mapSubKernels(e=>`const result_${e.name} = new Array(outputY);\n`).join("    ")}\n    ${this._mapSubKernels(e=>`let subKernelResult_${e.name};\n`).join("    ")}\n    for (let y = 0; y < outputY; y++) {\n      const resultX = result[y] = new ${e}(outputX);\n      ${this._mapSubKernels(t=>`const resultX_${t.name} = result_${t.name}[y] = new ${e}(outputX);\n`).join("")}\n    }`
                    }
                    _resultMutableKernel2DLoop(e) {
                        const t = this._getKernelResultTypeConstructorString();
                        return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    for (let y = 0; y < outputY; y++) {\n      this.thread.z = 0;\n      this.thread.y = y;\n      const resultX = result[y];\n      ${this._mapSubKernels(e=>`const resultX_${e.name} = result_${e.name}[y] = new ${t}(outputX);\n`).join("")}\n      for (let x = 0; x < outputX; x++) {\n        this.thread.x = x;\n        ${e}\n      }\n    }`
                    }
                    _graphicalKernel2DLoop(e) {
                        return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    for (let y = 0; y < outputY; y++) {\n      this.thread.z = 0;\n      this.thread.y = y;\n      for (let x = 0; x < outputX; x++) {\n        this.thread.x = x;\n        ${e}\n      }\n    }`
                    }
                    _resultImmutableKernel3DLoop(e) {
                        const t = this._getKernelResultTypeConstructorString();
                        return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    const outputZ = _this.output[2];\n    const result = new Array(outputZ);\n    ${this._mapSubKernels(e=>`const result_${e.name} = new Array(outputZ);\n`).join("    ")}\n    ${this._mapSubKernels(e=>`let subKernelResult_${e.name};\n`).join("    ")}\n    for (let z = 0; z < outputZ; z++) {\n      this.thread.z = z;\n      const resultY = result[z] = new Array(outputY);\n      ${this._mapSubKernels(e=>`const resultY_${e.name} = result_${e.name}[z] = new Array(outputY);\n`).join("      ")}\n      for (let y = 0; y < outputY; y++) {\n        this.thread.y = y;\n        const resultX = resultY[y] = new ${t}(outputX);\n        ${this._mapSubKernels(e=>`const resultX_${e.name} = resultY_${e.name}[y] = new ${t}(outputX);\n`).join("        ")}\n        for (let x = 0; x < outputX; x++) {\n          this.thread.x = x;\n          ${e}\n        }\n      }\n    }`
                    }
                    _mutableKernel3DResults() {
                        const e = this._getKernelResultTypeConstructorString();
                        return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    const outputZ = _this.output[2];\n    const result = new Array(outputZ);\n    ${this._mapSubKernels(e=>`const result_${e.name} = new Array(outputZ);\n`).join("    ")}\n    ${this._mapSubKernels(e=>`let subKernelResult_${e.name};\n`).join("    ")}\n    for (let z = 0; z < outputZ; z++) {\n      const resultY = result[z] = new Array(outputY);\n      ${this._mapSubKernels(e=>`const resultY_${e.name} = result_${e.name}[z] = new Array(outputY);\n`).join("      ")}\n      for (let y = 0; y < outputY; y++) {\n        const resultX = resultY[y] = new ${e}(outputX);\n        ${this._mapSubKernels(t=>`const resultX_${t.name} = resultY_${t.name}[y] = new ${e}(outputX);\n`).join("        ")}\n      }\n    }`
                    }
                    _resultMutableKernel3DLoop(e) {
                        return `  const outputX = _this.output[0];\n    const outputY = _this.output[1];\n    const outputZ = _this.output[2];\n    for (let z = 0; z < outputZ; z++) {\n      this.thread.z = z;\n      const resultY = result[z];\n      for (let y = 0; y < outputY; y++) {\n        this.thread.y = y;\n        const resultX = resultY[y];\n        for (let x = 0; x < outputX; x++) {\n          this.thread.x = x;\n          ${e}\n        }\n      }\n    }`
                    }
                    _kernelOutput() {
                        return this.subKernels ? `\n    return {\n      result: result,\n      ${this.subKernels.map(e=>`${e.property}: result_${e.name}`).join(",\n      ")}\n    };` : "\n    return result;"
                    }
                    _mapSubKernels(e) {
                        return null === this.subKernels ? [""] : this.subKernels.map(e)
                    }
                    destroy(e) {
                        e && delete this.canvas
                    }
                    static destroyContext(e) {}
                    toJSON() {
                        const e = super.toJSON();
                        return e.functionNodes = i.fromKernel(this, s).toJSON(), e
                    }
                    setOutput(e) {
                        super.setOutput(e);
                        const [t, n] = this.output;
                        this.graphical && (this._imageData = this.context.createImageData(t, n), this._colorData = new Uint8ClampedArray(t * n * 4))
                    }
                    prependString(e) {
                        if (this._kernelString) throw new Error("Kernel already built");
                        this._prependedString.push(e)
                    }
                    hasPrependString(e) {
                        return this._prependedString.indexOf(e) > -1
                    }
                }
            }
        }, {
            "../../utils": 114,
            "../function-builder": 9,
            "../kernel": 36,
            "./function-node": 6,
            "./kernel-string": 7
        }],
        9: [function (e, t, n) {
            class r {
                static fromKernel(e, t, n) {
                    const {
                        kernelArguments: i,
                        kernelConstants: s,
                        argumentNames: a,
                        argumentSizes: o,
                        argumentBitRatios: u,
                        constants: l,
                        constantBitRatios: h,
                        debug: c,
                        loopMaxIterations: p,
                        nativeFunctions: d,
                        output: m,
                        optimizeFloatMemory: g,
                        precision: f,
                        plugins: x,
                        source: y,
                        subKernels: b,
                        functions: T,
                        leadingReturnStatement: v,
                        followingReturnStatement: S,
                        dynamicArguments: A,
                        dynamicOutput: _,
                        onIstanbulCoverageVariable: E,
                        removeIstanbulCoverage: w
                    } = e, k = new Array(i.length), I = {};
                    for (let e = 0; e < i.length; e++) k[e] = i[e].type;
                    for (let e = 0; e < s.length; e++) {
                        const t = s[e];
                        I[t.name] = t.type
                    }
                    const D = (e, t) => B.needsArgumentType(e, t),
                        C = (e, t, n) => {
                            B.assignArgumentType(e, t, n)
                        },
                        $ = (e, t, n) => B.lookupReturnType(e, t, n),
                        L = e => B.lookupFunctionArgumentTypes(e),
                        R = (e, t) => B.lookupFunctionArgumentName(e, t),
                        F = (e, t) => B.lookupFunctionArgumentBitRatio(e, t),
                        N = (e, t, n, r) => {
                            B.assignArgumentType(e, t, n, r)
                        },
                        V = (e, t, n, r) => {
                            B.assignArgumentBitRatio(e, t, n, r)
                        },
                        M = (e, t, n) => {
                            B.trackFunctionCall(e, t, n)
                        },
                        O = (e, n) => {
                            const r = [];
                            for (let t = 0; t < e.params.length; t++) r.push(e.params[t].name);
                            const i = new t(null, Object.assign({}, z, {
                                returnType: null,
                                ast: e,
                                name: e.id.name,
                                argumentNames: r,
                                lookupReturnType: $,
                                lookupFunctionArgumentTypes: L,
                                lookupFunctionArgumentName: R,
                                lookupFunctionArgumentBitRatio: F,
                                needsArgumentType: D,
                                assignArgumentType: C,
                                triggerImplyArgumentType: N,
                                triggerImplyArgumentBitRatio: V,
                                onFunctionCall: M
                            }));
                            i.traceFunctionAST(e), B.addFunctionNode(i)
                        },
                        z = Object.assign({
                            isRootKernel: !1,
                            onNestedFunction: O,
                            lookupReturnType: $,
                            lookupFunctionArgumentTypes: L,
                            lookupFunctionArgumentName: R,
                            lookupFunctionArgumentBitRatio: F,
                            needsArgumentType: D,
                            assignArgumentType: C,
                            triggerImplyArgumentType: N,
                            triggerImplyArgumentBitRatio: V,
                            onFunctionCall: M,
                            onIstanbulCoverageVariable: E ? t => E(t, e) : null,
                            removeIstanbulCoverage: w,
                            optimizeFloatMemory: g,
                            precision: f,
                            constants: l,
                            constantTypes: I,
                            constantBitRatios: h,
                            debug: c,
                            loopMaxIterations: p,
                            output: m,
                            plugins: x,
                            dynamicArguments: A,
                            dynamicOutput: _
                        }, n || {}),
                        P = Object.assign({}, z, {
                            isRootKernel: !0,
                            name: "kernel",
                            argumentNames: a,
                            argumentTypes: k,
                            argumentSizes: o,
                            argumentBitRatios: u,
                            leadingReturnStatement: v,
                            followingReturnStatement: S
                        });
                    if ("object" == typeof y && y.functionNodes) return (new r).fromJSON(y.functionNodes, t);
                    const K = new t(y, P);
                    let G = null;
                    T && (G = T.map(n => new t(n.source, {
                        returnType: n.returnType,
                        argumentTypes: n.argumentTypes,
                        output: m,
                        plugins: x,
                        constants: l,
                        constantTypes: I,
                        constantBitRatios: h,
                        optimizeFloatMemory: g,
                        precision: f,
                        lookupReturnType: $,
                        lookupFunctionArgumentTypes: L,
                        lookupFunctionArgumentName: R,
                        lookupFunctionArgumentBitRatio: F,
                        needsArgumentType: D,
                        assignArgumentType: C,
                        triggerImplyArgumentType: N,
                        triggerImplyArgumentBitRatio: V,
                        onFunctionCall: M,
                        onNestedFunction: O,
                        onIstanbulCoverageVariable: E ? t => E(t, e) : null,
                        removeIstanbulCoverage: w
                    })));
                    let U = null;
                    b && (U = b.map(e => {
                        const {
                            name: n,
                            source: r
                        } = e;
                        return new t(r, Object.assign({}, z, {
                            name: n,
                            isSubKernel: !0,
                            isRootKernel: !1
                        }))
                    }));
                    const B = new r({
                        kernel: e,
                        rootNode: K,
                        functionNodes: G,
                        nativeFunctions: d,
                        subKernelNodes: U
                    });
                    return B
                }
                constructor(e) {
                    if (e = e || {}, this.kernel = e.kernel, this.rootNode = e.rootNode, this.functionNodes = e.functionNodes || [], this.subKernelNodes = e.subKernelNodes || [], this.nativeFunctions = e.nativeFunctions || [], this.functionMap = {}, this.nativeFunctionNames = [], this.lookupChain = [], this.functionNodeDependencies = {}, this.functionCalls = {}, this.rootNode && (this.functionMap.kernel = this.rootNode), this.functionNodes)
                        for (let e = 0; e < this.functionNodes.length; e++) this.functionMap[this.functionNodes[e].name] = this.functionNodes[e];
                    if (this.subKernelNodes)
                        for (let e = 0; e < this.subKernelNodes.length; e++) this.functionMap[this.subKernelNodes[e].name] = this.subKernelNodes[e];
                    if (this.nativeFunctions)
                        for (let e = 0; e < this.nativeFunctions.length; e++) {
                            const t = this.nativeFunctions[e];
                            this.nativeFunctionNames.push(t.name)
                        }
                }
                addFunctionNode(e) {
                    if (!e.name) throw new Error("functionNode.name needs set");
                    this.functionMap[e.name] = e, e.isRootKernel && (this.rootNode = e)
                }
                traceFunctionCalls(e, t) {
                    if (e = e || "kernel", t = t || [], this.nativeFunctionNames.indexOf(e) > -1) return -1 === t.indexOf(e) && t.push(e), t;
                    const n = this.functionMap[e];
                    if (n) {
                        const r = t.indexOf(e);
                        if (-1 === r) {
                            t.push(e), n.toString();
                            for (let e = 0; e < n.calledFunctions.length; ++e) this.traceFunctionCalls(n.calledFunctions[e], t)
                        } else {
                            const e = t.splice(r, 1)[0];
                            t.push(e)
                        }
                    }
                    return t
                }
                getPrototypeString(e) {
                    return this.getPrototypes(e).join("\n")
                }
                getPrototypes(e) {
                    return this.rootNode && this.rootNode.toString(), e ? this.getPrototypesFromFunctionNames(this.traceFunctionCalls(e, []).reverse()) : this.getPrototypesFromFunctionNames(Object.keys(this.functionMap))
                }
                getStringFromFunctionNames(e) {
                    const t = [];
                    for (let n = 0; n < e.length; ++n) {
                        this.functionMap[e[n]] && t.push(this.functionMap[e[n]].toString())
                    }
                    return t.join("\n")
                }
                getPrototypesFromFunctionNames(e) {
                    const t = [];
                    for (let n = 0; n < e.length; ++n) {
                        const r = e[n],
                            i = this.nativeFunctionNames.indexOf(r);
                        if (i > -1) {
                            t.push(this.nativeFunctions[i].source);
                            continue
                        }
                        const s = this.functionMap[r];
                        s && t.push(s.toString())
                    }
                    return t
                }
                toJSON() {
                    return this.traceFunctionCalls(this.rootNode.name).reverse().map(e => {
                        const t = this.nativeFunctions.indexOf(e);
                        if (t > -1) return {
                            name: e,
                            source: this.nativeFunctions[t].source
                        };
                        if (this.functionMap[e]) return this.functionMap[e].toJSON();
                        throw new Error(`function ${e} not found`)
                    })
                }
                fromJSON(e, t) {
                    this.functionMap = {};
                    for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        this.functionMap[r.settings.name] = new t(r.ast, r.settings)
                    }
                    return this
                }
                getString(e) {
                    return e ? this.getStringFromFunctionNames(this.traceFunctionCalls(e).reverse()) : this.getStringFromFunctionNames(Object.keys(this.functionMap))
                }
                lookupReturnType(e, t, n) {
                    if ("CallExpression" !== t.type) throw new Error(`expected ast type of "CallExpression", but is ${t.type}`);
                    if (this._isNativeFunction(e)) return this._lookupNativeFunctionReturnType(e);
                    if (this._isFunction(e)) {
                        const r = this._getFunction(e);
                        if (r.returnType) return r.returnType; {
                            for (let e = 0; e < this.lookupChain.length; e++)
                                if (this.lookupChain[e].ast === t) {
                                    if (0 === r.argumentTypes.length && t.arguments.length > 0) {
                                        const i = t.arguments;
                                        for (let t = 0; t < i.length; t++) this.lookupChain.push({
                                            name: n.name,
                                            ast: i[e],
                                            requestingNode: n
                                        }), r.argumentTypes[t] = n.getType(i[t]), this.lookupChain.pop();
                                        return r.returnType = r.getType(r.getJsAST())
                                    }
                                    throw new Error("circlical logic detected!")
                                } this.lookupChain.push({
                                name: n.name,
                                ast: t,
                                requestingNode: n
                            });
                            const e = r.getType(r.getJsAST());
                            return this.lookupChain.pop(), r.returnType = e
                        }
                    }
                    return null
                }
                _getFunction(e) {
                    return this._isFunction(e) || new Error(`Function ${e} not found`), this.functionMap[e]
                }
                _isFunction(e) {
                    return Boolean(this.functionMap[e])
                }
                _getNativeFunction(e) {
                    for (let t = 0; t < this.nativeFunctions.length; t++)
                        if (this.nativeFunctions[t].name === e) return this.nativeFunctions[t];
                    return null
                }
                _isNativeFunction(e) {
                    return Boolean(this._getNativeFunction(e))
                }
                _lookupNativeFunctionReturnType(e) {
                    let t = this._getNativeFunction(e);
                    if (t) return t.returnType;
                    throw new Error(`Native function ${e} not found`)
                }
                lookupFunctionArgumentTypes(e) {
                    return this._isNativeFunction(e) ? this._getNativeFunction(e).argumentTypes : this._isFunction(e) ? this._getFunction(e).argumentTypes : null
                }
                lookupFunctionArgumentName(e, t) {
                    return this._getFunction(e).argumentNames[t]
                }
                lookupFunctionArgumentBitRatio(e, t) {
                    if (!this._isFunction(e)) throw new Error("function not found");
                    if (this.rootNode.name === e) {
                        const e = this.rootNode.argumentNames.indexOf(t);
                        if (-1 !== e) return this.rootNode.argumentBitRatios[e]
                    }
                    const n = this._getFunction(e),
                        r = n.argumentNames.indexOf(t);
                    if (-1 === r) throw new Error("argument not found");
                    const i = n.argumentBitRatios[r];
                    if ("number" != typeof i) throw new Error("argument bit ratio not found");
                    return i
                }
                needsArgumentType(e, t) {
                    if (!this._isFunction(e)) return !1;
                    return !this._getFunction(e).argumentTypes[t]
                }
                assignArgumentType(e, t, n, r) {
                    if (!this._isFunction(e)) return;
                    const i = this._getFunction(e);
                    i.argumentTypes[t] || (i.argumentTypes[t] = n)
                }
                assignArgumentBitRatio(e, t, n, r) {
                    const i = this._getFunction(e);
                    if (this._isNativeFunction(n)) return null;
                    const s = this._getFunction(n),
                        a = i.argumentNames.indexOf(t);
                    if (-1 === a) throw new Error(`Argument ${t} not found in arguments from function ${e}`);
                    const o = i.argumentBitRatios[a];
                    if ("number" != typeof o) throw new Error(`Bit ratio for argument ${t} not found in function ${e}`);
                    s.argumentBitRatios || (s.argumentBitRatios = new Array(s.argumentNames.length));
                    const u = s.argumentBitRatios[a];
                    if ("number" == typeof u) {
                        if (u !== o) throw new Error(`Incompatible bit ratio found at function ${e} at argument ${t}`);
                        return u
                    }
                    return s.argumentBitRatios[a] = o, o
                }
                trackFunctionCall(e, t, n) {
                    this.functionNodeDependencies[e] || (this.functionNodeDependencies[e] = new Set, this.functionCalls[e] = []), this.functionNodeDependencies[e].add(t), this.functionCalls[e].push(n)
                }
                getKernelResultType() {
                    return this.rootNode.returnType || this.rootNode.getType(this.rootNode.ast)
                }
                getSubKernelResultType(e) {
                    const t = this.subKernelNodes[e];
                    let n = !1;
                    for (let e = 0; e < this.rootNode.functionCalls.length; e++) {
                        this.rootNode.functionCalls[e].ast.callee.name === t.name && (n = !0)
                    }
                    if (!n) throw new Error(`SubKernel ${t.name} never called by kernel`);
                    return t.returnType || t.getType(t.getJsAST())
                }
                getReturnTypes() {
                    const e = {
                            [this.rootNode.name]: this.rootNode.getType(this.rootNode.ast)
                        },
                        t = this.traceFunctionCalls(this.rootNode.name);
                    for (let n = 0; n < t.length; n++) {
                        const r = t[n],
                            i = this.functionMap[r];
                        e[r] = i.getType(i.ast)
                    }
                    return e
                }
            }
            t.exports = {
                FunctionBuilder: r
            }
        }, {}],
        10: [function (e, t, n) {
            const r = e("acorn"),
                {
                    utils: i
                } = e("../utils"),
                {
                    FunctionTracer: s
                } = e("./function-tracer");
            const a = {
                Number: "Number",
                Float: "Float",
                Integer: "Integer",
                Array: "Number",
                "Array(2)": "Number",
                "Array(3)": "Number",
                "Array(4)": "Number",
                Array2D: "Number",
                Array3D: "Number",
                Input: "Number",
                HTMLCanvas: "Array(4)",
                HTMLImage: "Array(4)",
                HTMLVideo: "Array(4)",
                HTMLImageArray: "Array(4)",
                NumberTexture: "Number",
                MemoryOptimizedNumberTexture: "Number",
                "Array1D(2)": "Array(2)",
                "Array1D(3)": "Array(3)",
                "Array1D(4)": "Array(4)",
                "Array2D(2)": "Array(2)",
                "Array2D(3)": "Array(3)",
                "Array2D(4)": "Array(4)",
                "Array3D(2)": "Array(2)",
                "Array3D(3)": "Array(3)",
                "Array3D(4)": "Array(4)",
                "ArrayTexture(1)": "Number",
                "ArrayTexture(2)": "Array(2)",
                "ArrayTexture(3)": "Array(3)",
                "ArrayTexture(4)": "Array(4)"
            };
            t.exports = {
                FunctionNode: class {
                    constructor(e, t) {
                        if (!e && !t.ast) throw new Error("source parameter is missing");
                        if (t = t || {}, this.source = e, this.ast = null, this.name = "string" == typeof e ? t.isRootKernel ? "kernel" : t.name || i.getFunctionNameFromString(e) : null, this.calledFunctions = [], this.constants = {}, this.constantTypes = {}, this.constantBitRatios = {}, this.isRootKernel = !1, this.isSubKernel = !1, this.debug = null, this.functions = null, this.identifiers = null, this.contexts = null, this.functionCalls = null, this.states = [], this.needsArgumentType = null, this.assignArgumentType = null, this.lookupReturnType = null, this.lookupFunctionArgumentTypes = null, this.lookupFunctionArgumentBitRatio = null, this.triggerImplyArgumentType = null, this.triggerImplyArgumentBitRatio = null, this.onNestedFunction = null, this.onFunctionCall = null, this.optimizeFloatMemory = null, this.precision = null, this.loopMaxIterations = null, this.argumentNames = "string" == typeof this.source ? i.getArgumentNamesFromString(this.source) : null, this.argumentTypes = [], this.argumentSizes = [], this.argumentBitRatios = null, this.returnType = null, this.output = [], this.plugins = null, this.leadingReturnStatement = null, this.followingReturnStatement = null, this.dynamicOutput = null, this.dynamicArguments = null, this.strictTypingChecking = !1, this.fixIntegerDivisionAccuracy = null, this.onIstanbulCoverageVariable = null, this.removeIstanbulCoverage = !1, t)
                            for (const e in t) t.hasOwnProperty(e) && this.hasOwnProperty(e) && (this[e] = t[e]);
                        this.literalTypes = {}, this.validate(), this._string = null, this._internalVariableNames = {}
                    }
                    validate() {
                        if ("string" != typeof this.source && !this.ast) throw new Error("this.source not a string");
                        if (!this.ast && !i.isFunctionString(this.source)) throw new Error("this.source not a function string");
                        if (!this.name) throw new Error("this.name could not be set");
                        if (this.argumentTypes.length > 0 && this.argumentTypes.length !== this.argumentNames.length) throw new Error(`argumentTypes count of ${this.argumentTypes.length} exceeds ${this.argumentNames.length}`);
                        if (this.output.length < 1) throw new Error("this.output is not big enough")
                    }
                    isIdentifierConstant(e) {
                        return !!this.constants && this.constants.hasOwnProperty(e)
                    }
                    isInput(e) {
                        return "Input" === this.argumentTypes[this.argumentNames.indexOf(e)]
                    }
                    pushState(e) {
                        this.states.push(e)
                    }
                    popState(e) {
                        if (this.state !== e) throw new Error(`Cannot popState ${e} when in ${this.state}`);
                        this.states.pop()
                    }
                    isState(e) {
                        return this.state === e
                    }
                    get state() {
                        return this.states[this.states.length - 1]
                    }
                    astMemberExpressionUnroll(e) {
                        if ("Identifier" === e.type) return e.name;
                        if ("ThisExpression" === e.type) return "this";
                        if ("MemberExpression" === e.type && e.object && e.property) return e.object.hasOwnProperty("name") && "_" === e.object.name[0] ? this.astMemberExpressionUnroll(e.property) : this.astMemberExpressionUnroll(e.object) + "." + this.astMemberExpressionUnroll(e.property);
                        if (e.hasOwnProperty("expressions")) {
                            const t = e.expressions[0];
                            if ("Literal" === t.type && 0 === t.value && 2 === e.expressions.length) return this.astMemberExpressionUnroll(e.expressions[1])
                        }
                        throw this.astErrorOutput("Unknown astMemberExpressionUnroll", e)
                    }
                    getJsAST(e) {
                        if (this.ast) return this.ast;
                        if ("object" == typeof this.source) return this.traceFunctionAST(this.source), this.ast = this.source;
                        if (null === (e = e || r)) throw new Error("Missing JS to AST parser");
                        const t = Object.freeze(e.parse(`const parser_${this.name} = ${this.source};`, {
                                locations: !0
                            })),
                            n = t.body[0].declarations[0].init;
                        if (this.traceFunctionAST(n), !t) throw new Error("Failed to parse JS code");
                        return this.ast = n
                    }
                    traceFunctionAST(e) {
                        const {
                            contexts: t,
                            declarations: n,
                            functions: r,
                            identifiers: i,
                            functionCalls: a
                        } = new s(e);
                        this.contexts = t, this.identifiers = i, this.functionCalls = a, this.functions = r;
                        for (let e = 0; e < n.length; e++) {
                            const t = n[e],
                                {
                                    ast: r,
                                    inForLoopInit: i,
                                    inForLoopTest: s
                                } = t,
                                {
                                    init: a
                                } = r,
                                o = this.getDependencies(a);
                            let u = null;
                            if (i && s) u = "Integer";
                            else if (a) {
                                const e = this.getType(a);
                                switch (e) {
                                    case "Integer":
                                    case "Float":
                                    case "Number":
                                        u = "MemberExpression" === a.type ? e : "Number";
                                        break;
                                    case "LiteralInteger":
                                        u = "Number";
                                        break;
                                    default:
                                        u = e
                                }
                            }
                            t.valueType = u, t.dependencies = o, t.isSafe = this.isSafeDependencies(o)
                        }
                        for (let e = 0; e < r.length; e++) this.onNestedFunction(r[e])
                    }
                    getDeclaration(e) {
                        for (let t = 0; t < this.identifiers.length; t++) {
                            const n = this.identifiers[t];
                            if (e === n.ast) return n.declaration
                        }
                        return null
                    }
                    getVariableType(e) {
                        if ("Identifier" !== e.type) throw new Error(`ast of ${e.type} not "Identifier"`);
                        let t = null;
                        const n = this.argumentNames.indexOf(e.name);
                        if (-1 === n) {
                            const t = this.getDeclaration(e);
                            if (t) return t.valueType
                        } else {
                            const e = this.argumentTypes[n];
                            e && (t = e)
                        }
                        if (!t && this.strictTypingChecking) throw new Error(`Declaration of ${name} not found`);
                        return t
                    }
                    getLookupType(e) {
                        if (!a.hasOwnProperty(e)) throw new Error(`unknown typeLookupMap ${e}`);
                        return a[e]
                    }
                    getConstantType(e) {
                        if (this.constantTypes[e]) {
                            const t = this.constantTypes[e];
                            return "Float" === t ? "Number" : t
                        }
                        throw new Error(`Type for constant "${e}" not declared`)
                    }
                    toString() {
                        return this._string ? this._string : this._string = this.astGeneric(this.getJsAST(), []).join("").trim()
                    }
                    toJSON() {
                        const e = {
                            source: this.source,
                            name: this.name,
                            constants: this.constants,
                            constantTypes: this.constantTypes,
                            isRootKernel: this.isRootKernel,
                            isSubKernel: this.isSubKernel,
                            debug: this.debug,
                            output: this.output,
                            loopMaxIterations: this.loopMaxIterations,
                            argumentNames: this.argumentNames,
                            argumentTypes: this.argumentTypes,
                            argumentSizes: this.argumentSizes,
                            returnType: this.returnType,
                            leadingReturnStatement: this.leadingReturnStatement,
                            followingReturnStatement: this.followingReturnStatement
                        };
                        return {
                            ast: this.ast,
                            settings: e
                        }
                    }
                    getType(e) {
                        if (Array.isArray(e)) return this.getType(e[e.length - 1]);
                        switch (e.type) {
                            case "BlockStatement":
                                return this.getType(e.body);
                            case "ArrayExpression":
                                return `Array(${e.elements.length})`;
                            case "Literal":
                                const t = this.astKey(e);
                                return this.literalTypes[t] ? this.literalTypes[t] : Number.isInteger(e.value) ? "LiteralInteger" : !0 === e.value || !1 === e.value ? "Boolean" : "Number";
                            case "AssignmentExpression":
                                return this.getType(e.left);
                            case "CallExpression":
                                if (this.isAstMathFunction(e)) return "Number";
                                if (!e.callee || !e.callee.name) {
                                    if ("SequenceExpression" === e.callee.type && e.callee.expressions[e.callee.expressions.length - 1].property.name) {
                                        const t = e.callee.expressions[e.callee.expressions.length - 1].property.name;
                                        return this.inferArgumentTypesIfNeeded(t, e.arguments), this.lookupReturnType(t, e, this)
                                    }
                                    if ("this.color" === this.getVariableSignature(e.callee, !0)) return null;
                                    throw this.astErrorOutput("Unknown call expression", e)
                                }
                                if (e.callee && e.callee.name) {
                                    const t = e.callee.name;
                                    return this.inferArgumentTypesIfNeeded(t, e.arguments), this.lookupReturnType(t, e, this)
                                }
                                throw this.astErrorOutput(`Unhandled getType Type "${e.type}"`, e);
                            case "LogicalExpression":
                                return "Boolean";
                            case "BinaryExpression":
                                switch (e.operator) {
                                    case "%":
                                    case "/":
                                        if (this.fixIntegerDivisionAccuracy) return "Number";
                                        break;
                                    case ">":
                                    case "<":
                                        return "Boolean";
                                    case "&":
                                    case "|":
                                    case "^":
                                    case "<<":
                                    case ">>":
                                    case ">>>":
                                        return "Integer"
                                }
                                const n = this.getType(e.left);
                                if (this.isState("skip-literal-correction")) return n;
                                if ("LiteralInteger" === n) {
                                    const t = this.getType(e.right);
                                    return "LiteralInteger" === t ? e.left.value % 1 == 0 ? "Integer" : "Float" : t
                                }
                                return a[n] || n;
                            case "UpdateExpression":
                                return this.getType(e.argument);
                            case "UnaryExpression":
                                return "~" === e.operator ? "Integer" : this.getType(e.argument);
                            case "VariableDeclaration": {
                                const t = e.declarations;
                                let n;
                                for (let e = 0; e < t.length; e++) {
                                    const r = t[e];
                                    n = this.getType(r)
                                }
                                if (!n) throw this.astErrorOutput("Unable to find type for declaration", e);
                                return n
                            }
                            case "VariableDeclarator":
                                const r = this.getDeclaration(e.id);
                                if (!r) throw this.astErrorOutput("Unable to find declarator", e);
                                if (!r.valueType) throw this.astErrorOutput("Unable to find declarator valueType", e);
                                return r.valueType;
                            case "Identifier":
                                if ("Infinity" === e.name) return "Number";
                                if (this.isAstVariable(e) && "value" === this.getVariableSignature(e)) return this.getCheckVariableType(e);
                                const i = this.findIdentifierOrigin(e);
                                return i && i.init ? this.getType(i.init) : null;
                            case "ReturnStatement":
                                return this.getType(e.argument);
                            case "MemberExpression":
                                if (this.isAstMathFunction(e)) {
                                    switch (e.property.name) {
                                        case "ceil":
                                        case "floor":
                                        case "round":
                                            return "Integer"
                                    }
                                    return "Number"
                                }
                                if (this.isAstVariable(e)) {
                                    switch (this.getVariableSignature(e)) {
                                        case "value[]":
                                            return this.getLookupType(this.getCheckVariableType(e.object));
                                        case "value[][]":
                                            return this.getLookupType(this.getCheckVariableType(e.object.object));
                                        case "value[][][]":
                                            return this.getLookupType(this.getCheckVariableType(e.object.object.object));
                                        case "value[][][][]":
                                            return this.getLookupType(this.getCheckVariableType(e.object.object.object.object));
                                        case "value.thread.value":
                                        case "this.thread.value":
                                            return "Integer";
                                        case "this.output.value":
                                            return this.dynamicOutput ? "Integer" : "LiteralInteger";
                                        case "this.constants.value":
                                            return this.getConstantType(e.property.name);
                                        case "this.constants.value[]":
                                            return this.getLookupType(this.getConstantType(e.object.property.name));
                                        case "this.constants.value[][]":
                                            return this.getLookupType(this.getConstantType(e.object.object.property.name));
                                        case "this.constants.value[][][]":
                                            return this.getLookupType(this.getConstantType(e.object.object.object.property.name));
                                        case "this.constants.value[][][][]":
                                            return this.getLookupType(this.getConstantType(e.object.object.object.object.property.name));
                                        case "fn()[]":
                                        case "fn()[][]":
                                        case "fn()[][][]":
                                            return this.getLookupType(this.getType(e.object));
                                        case "value.value":
                                            if (this.isAstMathVariable(e)) return "Number";
                                            switch (e.property.name) {
                                                case "r":
                                                case "g":
                                                case "b":
                                                case "a":
                                                    return this.getLookupType(this.getCheckVariableType(e.object))
                                            }
                                            case "[][]":
                                                return "Number"
                                    }
                                    throw this.astErrorOutput("Unhandled getType MemberExpression", e)
                                }
                                throw this.astErrorOutput("Unhandled getType MemberExpression", e);
                            case "ConditionalExpression":
                                return this.getType(e.consequent);
                            case "FunctionDeclaration":
                            case "FunctionExpression":
                                const s = this.findLastReturn(e.body);
                                return s ? this.getType(s) : null;
                            case "IfStatement":
                                return this.getType(e.consequent);
                            case "SequenceExpression":
                                return this.getType(e.expressions[e.expressions.length - 1]);
                            default:
                                throw this.astErrorOutput(`Unhandled getType Type "${e.type}"`, e)
                        }
                    }
                    getCheckVariableType(e) {
                        const t = this.getVariableType(e);
                        if (!t) throw this.astErrorOutput(`${e.type} is not defined`, e);
                        return t
                    }
                    inferArgumentTypesIfNeeded(e, t) {
                        for (let n = 0; n < t.length; n++) {
                            if (!this.needsArgumentType(e, n)) continue;
                            const r = this.getType(t[n]);
                            if (!r) throw this.astErrorOutput(`Unable to infer argument ${n}`, t[n]);
                            this.assignArgumentType(e, n, r)
                        }
                    }
                    isAstMathVariable(e) {
                        return "MemberExpression" === e.type && e.object && "Identifier" === e.object.type && "Math" === e.object.name && e.property && "Identifier" === e.property.type && ["E", "PI", "SQRT2", "SQRT1_2", "LN2", "LN10", "LOG2E", "LOG10E"].indexOf(e.property.name) > -1
                    }
                    isAstMathFunction(e) {
                        return "CallExpression" === e.type && e.callee && "MemberExpression" === e.callee.type && e.callee.object && "Identifier" === e.callee.object.type && "Math" === e.callee.object.name && e.callee.property && "Identifier" === e.callee.property.type && ["abs", "acos", "acosh", "asin", "asinh", "atan", "atan2", "atanh", "cbrt", "ceil", "clz32", "cos", "cosh", "expm1", "exp", "floor", "fround", "imul", "log", "log2", "log10", "log1p", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"].indexOf(e.callee.property.name) > -1
                    }
                    isAstVariable(e) {
                        return "Identifier" === e.type || "MemberExpression" === e.type
                    }
                    isSafe(e) {
                        return this.isSafeDependencies(this.getDependencies(e))
                    }
                    isSafeDependencies(e) {
                        return !e || !e.every || e.every(e => e.isSafe)
                    }
                    getDependencies(e, t, n) {
                        if (t || (t = []), !e) return null;
                        if (Array.isArray(e)) {
                            for (let r = 0; r < e.length; r++) this.getDependencies(e[r], t, n);
                            return t
                        }
                        switch (e.type) {
                            case "AssignmentExpression":
                                return this.getDependencies(e.left, t, n), this.getDependencies(e.right, t, n), t;
                            case "ConditionalExpression":
                                return this.getDependencies(e.test, t, n), this.getDependencies(e.alternate, t, n), this.getDependencies(e.consequent, t, n), t;
                            case "Literal":
                                t.push({
                                    origin: "literal",
                                    value: e.value,
                                    isSafe: !0 !== n && e.value > -1 / 0 && e.value < 1 / 0 && !isNaN(e.value)
                                });
                                break;
                            case "VariableDeclarator":
                                return this.getDependencies(e.init, t, n);
                            case "Identifier":
                                const r = this.getDeclaration(e);
                                if (r) t.push({
                                    name: e.name,
                                    origin: "declaration",
                                    isSafe: !n && this.isSafeDependencies(r.dependencies)
                                });
                                else if (this.argumentNames.indexOf(e.name) > -1) t.push({
                                    name: e.name,
                                    origin: "argument",
                                    isSafe: !1
                                });
                                else if (this.strictTypingChecking) throw new Error(`Cannot find identifier origin "${e.name}"`);
                                break;
                            case "FunctionDeclaration":
                                return this.getDependencies(e.body.body[e.body.body.length - 1], t, n);
                            case "ReturnStatement":
                                return this.getDependencies(e.argument, t);
                            case "BinaryExpression":
                            case "LogicalExpression":
                                return n = "/" === e.operator || "*" === e.operator, this.getDependencies(e.left, t, n), this.getDependencies(e.right, t, n), t;
                            case "UnaryExpression":
                            case "UpdateExpression":
                                return this.getDependencies(e.argument, t, n);
                            case "VariableDeclaration":
                                return this.getDependencies(e.declarations, t, n);
                            case "ArrayExpression":
                                return t.push({
                                    origin: "declaration",
                                    isSafe: !0
                                }), t;
                            case "CallExpression":
                                return t.push({
                                    origin: "function",
                                    isSafe: !0
                                }), t;
                            case "MemberExpression":
                                const i = this.getMemberExpressionDetails(e);
                                switch (i.signature) {
                                    case "value[]":
                                        this.getDependencies(e.object, t, n);
                                        break;
                                    case "value[][]":
                                        this.getDependencies(e.object.object, t, n);
                                        break;
                                    case "value[][][]":
                                        this.getDependencies(e.object.object.object, t, n);
                                        break;
                                    case "this.output.value":
                                        this.dynamicOutput && t.push({
                                            name: i.name,
                                            origin: "output",
                                            isSafe: !1
                                        })
                                }
                                if (i) return i.property && this.getDependencies(i.property, t, n), i.xProperty && this.getDependencies(i.xProperty, t, n), i.yProperty && this.getDependencies(i.yProperty, t, n), i.zProperty && this.getDependencies(i.zProperty, t, n), t;
                            case "SequenceExpression":
                                return this.getDependencies(e.expressions, t, n);
                            default:
                                throw this.astErrorOutput(`Unhandled type ${e.type} in getDependencies`, e)
                        }
                        return t
                    }
                    getVariableSignature(e, t) {
                        if (!this.isAstVariable(e)) throw new Error(`ast of type "${e.type}" is not a variable signature`);
                        if ("Identifier" === e.type) return "value";
                        const n = [];
                        for (; e;) e.computed ? n.push("[]") : "ThisExpression" === e.type ? n.unshift("this") : e.property && e.property.name ? "x" === e.property.name || "y" === e.property.name || "z" === e.property.name ? n.unshift(t ? "." + e.property.name : ".value") : "constants" === e.property.name || "thread" === e.property.name || "output" === e.property.name ? n.unshift("." + e.property.name) : n.unshift(t ? "." + e.property.name : ".value") : e.name ? n.unshift(t ? e.name : "value") : e.callee && e.callee.name ? n.unshift(t ? e.callee.name + "()" : "fn()") : e.elements ? n.unshift("[]") : n.unshift("unknown"), e = e.object;
                        const r = n.join("");
                        return t ? r : ["value", "value[]", "value[][]", "value[][][]", "value[][][][]", "value.value", "value.value[]", "value.value[][]", "value.thread.value", "this.thread.value", "this.output.value", "this.constants.value", "this.constants.value[]", "this.constants.value[][]", "this.constants.value[][][]", "this.constants.value[][][][]", "fn()[]", "fn()[][]", "fn()[][][]", "[][]"].indexOf(r) > -1 ? r : null
                    }
                    build() {
                        return this.toString().length > 0
                    }
                    astGeneric(e, t) {
                        if (null === e) throw this.astErrorOutput("NULL ast", e);
                        if (Array.isArray(e)) {
                            for (let n = 0; n < e.length; n++) this.astGeneric(e[n], t);
                            return t
                        }
                        switch (e.type) {
                            case "FunctionDeclaration":
                                return this.astFunctionDeclaration(e, t);
                            case "FunctionExpression":
                                return this.astFunctionExpression(e, t);
                            case "ReturnStatement":
                                return this.astReturnStatement(e, t);
                            case "Literal":
                                return this.astLiteral(e, t);
                            case "BinaryExpression":
                                return this.astBinaryExpression(e, t);
                            case "Identifier":
                                return this.astIdentifierExpression(e, t);
                            case "AssignmentExpression":
                                return this.astAssignmentExpression(e, t);
                            case "ExpressionStatement":
                                return this.astExpressionStatement(e, t);
                            case "EmptyStatement":
                                return this.astEmptyStatement(e, t);
                            case "BlockStatement":
                                return this.astBlockStatement(e, t);
                            case "IfStatement":
                                return this.astIfStatement(e, t);
                            case "SwitchStatement":
                                return this.astSwitchStatement(e, t);
                            case "BreakStatement":
                                return this.astBreakStatement(e, t);
                            case "ContinueStatement":
                                return this.astContinueStatement(e, t);
                            case "ForStatement":
                                return this.astForStatement(e, t);
                            case "WhileStatement":
                                return this.astWhileStatement(e, t);
                            case "DoWhileStatement":
                                return this.astDoWhileStatement(e, t);
                            case "VariableDeclaration":
                                return this.astVariableDeclaration(e, t);
                            case "VariableDeclarator":
                                return this.astVariableDeclarator(e, t);
                            case "ThisExpression":
                                return this.astThisExpression(e, t);
                            case "SequenceExpression":
                                return this.astSequenceExpression(e, t);
                            case "UnaryExpression":
                                return this.astUnaryExpression(e, t);
                            case "UpdateExpression":
                                return this.astUpdateExpression(e, t);
                            case "LogicalExpression":
                                return this.astLogicalExpression(e, t);
                            case "MemberExpression":
                                return this.astMemberExpression(e, t);
                            case "CallExpression":
                                return this.astCallExpression(e, t);
                            case "ArrayExpression":
                                return this.astArrayExpression(e, t);
                            case "DebuggerStatement":
                                return this.astDebuggerStatement(e, t);
                            case "ConditionalExpression":
                                return this.astConditionalExpression(e, t)
                        }
                        throw this.astErrorOutput("Unknown ast type : " + e.type, e)
                    }
                    astErrorOutput(e, t) {
                        if ("string" != typeof this.source) return new Error(e);
                        const n = i.getAstString(this.source, t),
                            r = this.source.substr(t.start).split(/\n/),
                            s = r.length > 0 ? r[r.length - 1] : 0;
                        return new Error(`${e} on line ${r.length}, position ${s.length}:\n ${n}`)
                    }
                    astDebuggerStatement(e, t) {
                        return t
                    }
                    astConditionalExpression(e, t) {
                        if ("ConditionalExpression" !== e.type) throw this.astErrorOutput("Not a conditional expression", e);
                        return t.push("("), this.astGeneric(e.test, t), t.push("?"), this.astGeneric(e.consequent, t), t.push(":"), this.astGeneric(e.alternate, t), t.push(")"), t
                    }
                    astFunction(e, t) {
                        throw new Error(`"astFunction" not defined on ${this.constructor.name}`)
                    }
                    astFunctionDeclaration(e, t) {
                        return this.isChildFunction(e) ? t : this.astFunction(e, t)
                    }
                    astFunctionExpression(e, t) {
                        return this.isChildFunction(e) ? t : this.astFunction(e, t)
                    }
                    isChildFunction(e) {
                        for (let t = 0; t < this.functions.length; t++)
                            if (this.functions[t] === e) return !0;
                        return !1
                    }
                    astReturnStatement(e, t) {
                        return t
                    }
                    astLiteral(e, t) {
                        return this.literalTypes[this.astKey(e)] = "Number", t
                    }
                    astBinaryExpression(e, t) {
                        return t
                    }
                    astIdentifierExpression(e, t) {
                        return t
                    }
                    astAssignmentExpression(e, t) {
                        return t
                    }
                    astExpressionStatement(e, t) {
                        return this.astGeneric(e.expression, t), t.push(";"), t
                    }
                    astEmptyStatement(e, t) {
                        return t
                    }
                    astBlockStatement(e, t) {
                        return t
                    }
                    astIfStatement(e, t) {
                        return t
                    }
                    astSwitchStatement(e, t) {
                        return t
                    }
                    astBreakStatement(e, t) {
                        return t.push("break;"), t
                    }
                    astContinueStatement(e, t) {
                        return t.push("continue;\n"), t
                    }
                    astForStatement(e, t) {
                        return t
                    }
                    astWhileStatement(e, t) {
                        return t
                    }
                    astDoWhileStatement(e, t) {
                        return t
                    }
                    astVariableDeclarator(e, t) {
                        return this.astGeneric(e.id, t), null !== e.init && (t.push("="), this.astGeneric(e.init, t)), t
                    }
                    astThisExpression(e, t) {
                        return t
                    }
                    isIstanbulAST(e) {
                        const t = this.getVariableSignature(e);
                        return "value.value[]" === t || "value.value[][]" === t
                    }
                    astSequenceExpression(e, t) {
                        const {
                            expressions: n
                        } = e, r = [];
                        for (let e = 0; e < n.length; e++) {
                            const t = n[e];
                            if (this.removeIstanbulCoverage && "UpdateExpression" === t.type && this.isIstanbulAST(t.argument)) continue;
                            const i = [];
                            this.astGeneric(t, i), r.push(i.join(""))
                        }
                        return r.length > 1 ? t.push("(", r.join(","), ")") : t.push(r[0]), t
                    }
                    astUnaryExpression(e, t) {
                        return this.checkAndUpconvertBitwiseUnary(e, t) ? t : (e.prefix ? (t.push(e.operator), this.astGeneric(e.argument, t)) : (this.astGeneric(e.argument, t), t.push(e.operator)), t)
                    }
                    checkAndUpconvertBitwiseUnary(e, t) {}
                    astUpdateExpression(e, t) {
                        return this.removeIstanbulCoverage && (this.getVariableSignature(e.argument), this.isIstanbulAST(e.argument)) ? t : (e.prefix ? (t.push(e.operator), this.astGeneric(e.argument, t)) : (this.astGeneric(e.argument, t), t.push(e.operator)), t)
                    }
                    astLogicalExpression(e, t) {
                        return t.push("("), this.astGeneric(e.left, t), t.push(e.operator), this.astGeneric(e.right, t), t.push(")"), t
                    }
                    astMemberExpression(e, t) {
                        return t
                    }
                    astCallExpression(e, t) {
                        return t
                    }
                    astArrayExpression(e, t) {
                        return t
                    }
                    getMemberExpressionDetails(e) {
                        if ("MemberExpression" !== e.type) throw this.astErrorOutput(`Expression ${e.type} not a MemberExpression`, e);
                        let t = null,
                            n = null;
                        const r = this.getVariableSignature(e);
                        switch (r) {
                            case "value":
                                return null;
                            case "value.thread.value":
                            case "this.thread.value":
                            case "this.output.value":
                                return {
                                    signature: r, type: "Integer", name: e.property.name
                                };
                            case "value[]":
                                if ("string" != typeof e.object.name) throw this.astErrorOutput("Unexpected expression", e);
                                return {
                                    name: t = e.object.name, origin: "user", signature: r, type: this.getVariableType(e.object), xProperty: e.property
                                };
                            case "value[][]":
                                if ("string" != typeof e.object.object.name) throw this.astErrorOutput("Unexpected expression", e);
                                return {
                                    name: t = e.object.object.name, origin: "user", signature: r, type: this.getVariableType(e.object.object), yProperty: e.object.property, xProperty: e.property
                                };
                            case "value[][][]":
                                if ("string" != typeof e.object.object.object.name) throw this.astErrorOutput("Unexpected expression", e);
                                return {
                                    name: t = e.object.object.object.name, origin: "user", signature: r, type: this.getVariableType(e.object.object.object), zProperty: e.object.object.property, yProperty: e.object.property, xProperty: e.property
                                };
                            case "value[][][][]":
                                if ("string" != typeof e.object.object.object.object.name) throw this.astErrorOutput("Unexpected expression", e);
                                return {
                                    name: t = e.object.object.object.object.name, origin: "user", signature: r, type: this.getVariableType(e.object.object.object.object), zProperty: e.object.object.property, yProperty: e.object.property, xProperty: e.property
                                };
                            case "value.value":
                                if ("string" != typeof e.property.name) throw this.astErrorOutput("Unexpected expression", e);
                                if (this.isAstMathVariable(e)) return {
                                    name: t = e.property.name,
                                    origin: "Math",
                                    type: "Number",
                                    signature: r
                                };
                                switch (e.property.name) {
                                    case "r":
                                    case "g":
                                    case "b":
                                    case "a":
                                        return {
                                            name: t = e.object.name, property: e.property.name, origin: "user", signature: r, type: "Number"
                                        };
                                    default:
                                        throw this.astErrorOutput("Unexpected expression", e)
                                }
                                case "this.constants.value":
                                    if ("string" != typeof e.property.name) throw this.astErrorOutput("Unexpected expression", e);
                                    if (t = e.property.name, !(n = this.getConstantType(t))) throw this.astErrorOutput("Constant has no type", e);
                                    return {
                                        name: t, type: n, origin: "constants", signature: r
                                    };
                                case "this.constants.value[]":
                                    if ("string" != typeof e.object.property.name) throw this.astErrorOutput("Unexpected expression", e);
                                    if (t = e.object.property.name, !(n = this.getConstantType(t))) throw this.astErrorOutput("Constant has no type", e);
                                    return {
                                        name: t, type: n, origin: "constants", signature: r, xProperty: e.property
                                    };
                                case "this.constants.value[][]":
                                    if ("string" != typeof e.object.object.property.name) throw this.astErrorOutput("Unexpected expression", e);
                                    if (t = e.object.object.property.name, !(n = this.getConstantType(t))) throw this.astErrorOutput("Constant has no type", e);
                                    return {
                                        name: t, type: n, origin: "constants", signature: r, yProperty: e.object.property, xProperty: e.property
                                    };
                                case "this.constants.value[][][]":
                                    if ("string" != typeof e.object.object.object.property.name) throw this.astErrorOutput("Unexpected expression", e);
                                    if (t = e.object.object.object.property.name, !(n = this.getConstantType(t))) throw this.astErrorOutput("Constant has no type", e);
                                    return {
                                        name: t, type: n, origin: "constants", signature: r, zProperty: e.object.object.property, yProperty: e.object.property, xProperty: e.property
                                    };
                                case "fn()[]":
                                case "[][]":
                                    return {
                                        signature: r, property: e.property
                                    };
                                case "value.value[]":
                                    if (this.removeIstanbulCoverage) return {
                                        signature: r
                                    };
                                    if (this.onIstanbulCoverageVariable) return this.onIstanbulCoverageVariable(e.object.object.name), {
                                        signature: r
                                    };
                                case "value.value[][]":
                                    if (this.removeIstanbulCoverage) return {
                                        signature: r
                                    };
                                    if (this.onIstanbulCoverageVariable) return this.onIstanbulCoverageVariable(e.object.object.object.name), {
                                        signature: r
                                    };
                                default:
                                    throw this.astErrorOutput("Unexpected expression", e)
                        }
                    }
                    findIdentifierOrigin(e) {
                        const t = [this.ast];
                        for (; t.length > 0;) {
                            const n = t[0];
                            if ("VariableDeclarator" === n.type && n.id && n.id.name && n.id.name === e.name) return n;
                            if (t.shift(), n.argument) t.push(n.argument);
                            else if (n.body) t.push(n.body);
                            else if (n.declarations) t.push(n.declarations);
                            else if (Array.isArray(n))
                                for (let e = 0; e < n.length; e++) t.push(n[e])
                        }
                        return null
                    }
                    findLastReturn(e) {
                        const t = [e || this.ast];
                        for (; t.length > 0;) {
                            const e = t.pop();
                            if ("ReturnStatement" === e.type) return e;
                            if ("FunctionDeclaration" !== e.type)
                                if (e.argument) t.push(e.argument);
                                else if (e.body) t.push(e.body);
                            else if (e.declarations) t.push(e.declarations);
                            else if (Array.isArray(e))
                                for (let n = 0; n < e.length; n++) t.push(e[n]);
                            else e.consequent ? t.push(e.consequent) : e.cases && t.push(e.cases)
                        }
                        return null
                    }
                    getInternalVariableName(e) {
                        return this._internalVariableNames.hasOwnProperty(e) || (this._internalVariableNames[e] = 0), this._internalVariableNames[e]++, 1 === this._internalVariableNames[e] ? e : e + this._internalVariableNames[e]
                    }
                    astKey(e, t = ",") {
                        if (!e.start || !e.end) throw new Error("AST start and end needed");
                        return `${e.start}${t}${e.end}`
                    }
                }
            }
        }, {
            "../utils": 114,
            "./function-tracer": 11,
            acorn: 1
        }],
        11: [function (e, t, n) {
            const {
                utils: r
            } = e("../utils");

            function i(e) {
                return e.length > 0 ? e[e.length - 1] : null
            }
            const s = {
                trackIdentifiers: "trackIdentifiers",
                memberExpression: "memberExpression",
                inForLoopInit: "inForLoopInit"
            };
            t.exports = {
                FunctionTracer: class {
                    constructor(e) {
                        this.runningContexts = [], this.functionContexts = [], this.contexts = [], this.functionCalls = [], this.declarations = [], this.identifiers = [], this.functions = [], this.returnStatements = [], this.trackedIdentifiers = null, this.states = [], this.newFunctionContext(), this.scan(e)
                    }
                    isState(e) {
                        return this.states[this.states.length - 1] === e
                    }
                    hasState(e) {
                        return this.states.indexOf(e) > -1
                    }
                    pushState(e) {
                        this.states.push(e)
                    }
                    popState(e) {
                        if (!this.isState(e)) throw new Error(`Cannot pop the non-active state "${e}"`);
                        this.states.pop()
                    }
                    get currentFunctionContext() {
                        return i(this.functionContexts)
                    }
                    get currentContext() {
                        return i(this.runningContexts)
                    }
                    newFunctionContext() {
                        const e = {
                            "@contextType": "function"
                        };
                        this.contexts.push(e), this.functionContexts.push(e)
                    }
                    newContext(e) {
                        const t = Object.assign({
                            "@contextType": "const/let"
                        }, this.currentContext);
                        this.contexts.push(t), this.runningContexts.push(t), e();
                        const {
                            currentFunctionContext: n
                        } = this;
                        for (const e in n) n.hasOwnProperty(e) && !t.hasOwnProperty(e) && (t[e] = n[e]);
                        return this.runningContexts.pop(), t
                    }
                    useFunctionContext(e) {
                        const t = i(this.functionContexts);
                        this.runningContexts.push(t), e(), this.runningContexts.pop()
                    }
                    getIdentifiers(e) {
                        const t = this.trackedIdentifiers = [];
                        return this.pushState(s.trackIdentifiers), e(), this.trackedIdentifiers = null, this.popState(s.trackIdentifiers), t
                    }
                    getDeclaration(e) {
                        const {
                            currentContext: t,
                            currentFunctionContext: n,
                            runningContexts: r
                        } = this, i = t[e] || n[e] || null;
                        if (!i && t === n && r.length > 0) {
                            const t = r[r.length - 2];
                            if (t[e]) return t[e]
                        }
                        return i
                    }
                    scan(e) {
                        if (e)
                            if (Array.isArray(e))
                                for (let t = 0; t < e.length; t++) this.scan(e[t]);
                            else switch (e.type) {
                                case "Program":
                                    this.useFunctionContext(() => {
                                        this.scan(e.body)
                                    });
                                    break;
                                case "BlockStatement":
                                    this.newContext(() => {
                                        this.scan(e.body)
                                    });
                                    break;
                                case "AssignmentExpression":
                                case "LogicalExpression":
                                case "BinaryExpression":
                                    this.scan(e.left), this.scan(e.right);
                                    break;
                                case "UpdateExpression":
                                    if ("++" === e.operator) {
                                        const t = this.getDeclaration(e.argument.name);
                                        t && (t.suggestedType = "Integer")
                                    }
                                    this.scan(e.argument);
                                    break;
                                case "UnaryExpression":
                                    this.scan(e.argument);
                                    break;
                                case "VariableDeclaration":
                                    "var" === e.kind ? this.useFunctionContext(() => {
                                        e.declarations = r.normalizeDeclarations(e), this.scan(e.declarations)
                                    }) : (e.declarations = r.normalizeDeclarations(e), this.scan(e.declarations));
                                    break;
                                case "VariableDeclarator": {
                                    const {
                                        currentContext: t
                                    } = this, n = this.hasState(s.inForLoopInit), r = {
                                        ast: e,
                                        context: t,
                                        name: e.id.name,
                                        origin: "declaration",
                                        inForLoopInit: n,
                                        inForLoopTest: null,
                                        assignable: t === this.currentFunctionContext || !n && !t.hasOwnProperty(e.id.name),
                                        suggestedType: null,
                                        valueType: null,
                                        dependencies: null,
                                        isSafe: null
                                    };
                                    t[e.id.name] || (t[e.id.name] = r), this.declarations.push(r), this.scan(e.id), this.scan(e.init);
                                    break
                                }
                                case "FunctionExpression":
                                case "FunctionDeclaration":
                                    0 === this.runningContexts.length ? this.scan(e.body) : this.functions.push(e);
                                    break;
                                case "IfStatement":
                                    this.scan(e.test), this.scan(e.consequent), e.alternate && this.scan(e.alternate);
                                    break;
                                case "ForStatement": {
                                    let t;
                                    const n = this.newContext(() => {
                                        this.pushState(s.inForLoopInit), this.scan(e.init), this.popState(s.inForLoopInit), t = this.getIdentifiers(() => {
                                            this.scan(e.test)
                                        }), this.scan(e.update), this.newContext(() => {
                                            this.scan(e.body)
                                        })
                                    });
                                    if (t)
                                        for (const e in n) "@contextType" !== e && t.indexOf(e) > -1 && (n[e].inForLoopTest = !0);
                                    break
                                }
                                case "DoWhileStatement":
                                case "WhileStatement":
                                    this.newContext(() => {
                                        this.scan(e.body), this.scan(e.test)
                                    });
                                    break;
                                case "Identifier":
                                    this.isState(s.trackIdentifiers) && this.trackedIdentifiers.push(e.name), this.identifiers.push({
                                        context: this.currentContext,
                                        declaration: this.getDeclaration(e.name),
                                        ast: e
                                    });
                                    break;
                                case "ReturnStatement":
                                    this.returnStatements.push(e), this.scan(e.argument);
                                    break;
                                case "MemberExpression":
                                    this.pushState(s.memberExpression), this.scan(e.object), this.scan(e.property), this.popState(s.memberExpression);
                                    break;
                                case "ExpressionStatement":
                                    this.scan(e.expression);
                                    break;
                                case "SequenceExpression":
                                    this.scan(e.expressions);
                                    break;
                                case "CallExpression":
                                    this.functionCalls.push({
                                        context: this.currentContext,
                                        ast: e
                                    }), this.scan(e.arguments);
                                    break;
                                case "ArrayExpression":
                                    this.scan(e.elements);
                                    break;
                                case "ConditionalExpression":
                                    this.scan(e.test), this.scan(e.alternate), this.scan(e.consequent);
                                    break;
                                case "SwitchStatement":
                                    this.scan(e.discriminant), this.scan(e.cases);
                                    break;
                                case "SwitchCase":
                                    this.scan(e.test), this.scan(e.consequent);
                                    break;
                                case "ThisExpression":
                                case "Literal":
                                case "DebuggerStatement":
                                case "EmptyStatement":
                                case "BreakStatement":
                                case "ContinueStatement":
                                    break;
                                default:
                                    throw new Error(`unhandled type "${e.type}"`)
                            }
                    }
                }
            }
        }, {
            "../utils": 114
        }],
        12: [function (e, t, n) {
            const {
                glWiretap: r
            } = e("gl-wiretap"), {
                utils: i
            } = e("../../utils");

            function s(e) {
                return e.toString().replace("=>", "").replace(/^function /, "").replace(/utils[.]/g, "/*utils.*/")
            }

            function a(e, t) {
                const n = "single" === t.precision ? e : `new Float32Array(${e}.buffer)`;
                return t.output[2] ? `renderOutput(${n}, ${t.output[0]}, ${t.output[1]}, ${t.output[2]})` : t.output[1] ? `renderOutput(${n}, ${t.output[0]}, ${t.output[1]})` : `renderOutput(${n}, ${t.output[0]})`
            }

            function o(e, t) {
                const n = e.toArray.toString(),
                    r = !/^function/.test(n);
                return `() => {\n  let _framebuffer;\n  ${i.flattenFunctionToString(`${r?"function ":""}${n}`,{findDependency:(t,n)=>{if("utils"===t)return`const ${n} = ${i[n].toString()};`;if("this"===t)return`${r?"function ":""}${e[n].toString()}`;throw new Error("unhandled fromObject")},thisLookup:(n,r)=>{if("texture"===n)return t;if("context"===n)return r?null:"gl";if("_framebuffer"===n)return"_framebuffer";if(e.hasOwnProperty(n))return JSON.stringify(e[n]);throw new Error(`
                unhandled thisLookup $ {
                    n
                }
                `)}})}\n  return toArray();\n  }`
            }

            function u(e, t, n, r, i) {
                if (null === e) return null;
                if (null === t) return null;
                switch (typeof e) {
                    case "boolean":
                    case "number":
                        return null
                }
                if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement)
                    for (let i = 0; i < t.length; i++) {
                        const s = t[i];
                        if ("HTMLImageArray" !== s.type && s) continue;
                        if (s.uploadValue !== e) continue;
                        const a = n[i].indexOf(e);
                        if (-1 === a) continue;
                        const o = `uploadValue_${s.name}[${a}]`;
                        return r.insertVariable(o, e), o
                    }
                for (let n = 0; n < t.length; n++) {
                    const i = t[n];
                    if (e !== i.uploadValue) continue;
                    const s = `uploadValue_${i.name}`;
                    return r.insertVariable(s, i), s
                }
                return null
            }
            t.exports = {
                glKernelString: function (e, t, n, l, h) {
                    n.built || n.build.apply(n, t), t = t ? Array.from(t).map(e => {
                        switch (typeof e) {
                            case "boolean":
                                return new Boolean(e);
                            case "number":
                                return new Number(e);
                            default:
                                return e
                        }
                    }) : null;
                    const c = [],
                        p = r(n.context, {
                            useTrackablePrimitives: !0,
                            onReadPixels: e => {
                                if (F.subKernels) {
                                    if (d) {
                                        const t = F.subKernels[m++].property;
                                        c.push(`    result${isNaN(t)?"."+t:`[${t}]`} = ${a(e,F)};`)
                                    } else c.push(`    const result = { result: ${a(e,F)} };`), d = !0;
                                    m === F.subKernels.length && c.push("    return result;")
                                } else e ? c.push(`    return ${a(e,F)};`) : c.push("    return null;")
                            },
                            onUnrecognizedArgumentLookup: e => {
                                const t = u(e, F.kernelArguments, [], p);
                                if (t) return t;
                                const n = u(e, F.kernelConstants, v ? Object.keys(v).map(e => v[e]) : [], p);
                                return n || null
                            }
                        });
                    let d = !1,
                        m = 0;
                    const {
                        source: g,
                        canvas: f,
                        output: x,
                        pipeline: y,
                        graphical: b,
                        loopMaxIterations: T,
                        constants: v,
                        optimizeFloatMemory: S,
                        precision: A,
                        fixIntegerDivisionAccuracy: _,
                        functions: E,
                        nativeFunctions: w,
                        subKernels: k,
                        immutable: I,
                        argumentTypes: D,
                        constantTypes: C,
                        kernelArguments: $,
                        kernelConstants: L,
                        tactic: R
                    } = n, F = new e(g, {
                        canvas: f,
                        context: p,
                        checkContext: !1,
                        output: x,
                        pipeline: y,
                        graphical: b,
                        loopMaxIterations: T,
                        constants: v,
                        optimizeFloatMemory: S,
                        precision: A,
                        fixIntegerDivisionAccuracy: _,
                        functions: E,
                        nativeFunctions: w,
                        subKernels: k,
                        immutable: I,
                        argumentTypes: D,
                        constantTypes: C,
                        tactic: R
                    });
                    let N = [];
                    if (p.setIndent(2), F.build.apply(F, t), N.push(p.toString()), p.reset(), F.kernelArguments.forEach((e, n) => {
                            switch (e.type) {
                                case "Integer":
                                case "Boolean":
                                case "Number":
                                case "Float":
                                case "Array":
                                case "Array(2)":
                                case "Array(3)":
                                case "Array(4)":
                                case "HTMLCanvas":
                                case "HTMLImage":
                                case "HTMLVideo":
                                    p.insertVariable(`uploadValue_${e.name}`, e.uploadValue);
                                    break;
                                case "HTMLImageArray":
                                    for (let r = 0; r < t[n].length; r++) {
                                        const i = t[n];
                                        p.insertVariable(`uploadValue_${e.name}[${r}]`, i[r])
                                    }
                                    break;
                                case "Input":
                                    p.insertVariable(`uploadValue_${e.name}`, e.uploadValue);
                                    break;
                                case "MemoryOptimizedNumberTexture":
                                case "NumberTexture":
                                case "Array1D(2)":
                                case "Array1D(3)":
                                case "Array1D(4)":
                                case "Array2D(2)":
                                case "Array2D(3)":
                                case "Array2D(4)":
                                case "Array3D(2)":
                                case "Array3D(3)":
                                case "Array3D(4)":
                                case "ArrayTexture(1)":
                                case "ArrayTexture(2)":
                                case "ArrayTexture(3)":
                                case "ArrayTexture(4)":
                                    p.insertVariable(`uploadValue_${e.name}`, t[n].texture);
                                    break;
                                default:
                                    throw new Error(`unhandled kernelArgumentType insertion for glWiretap of type ${e.type}`)
                            }
                        }), N.push("/** start of injected functions **/"), N.push(`function ${s(i.flattenTo)}`), N.push(`function ${s(i.flatten2dArrayTo)}`), N.push(`function ${s(i.flatten3dArrayTo)}`), N.push(`function ${s(i.flatten4dArrayTo)}`), N.push(`function ${s(i.isArray)}`), F.renderOutput !== F.renderTexture && F.formatValues && N.push(`  const renderOutput = function ${s(F.formatValues)};`), N.push("/** end of injected functions **/"), N.push(`  const innerKernel = function (${F.kernelArguments.map(e=>e.varName).join(", ")}) {`), p.setIndent(4), F.run.apply(F, t), F.renderKernels ? F.renderKernels() : F.renderOutput && F.renderOutput(), N.push("    /** start setup uploads for kernel values **/"), F.kernelArguments.forEach(e => {
                            N.push("    " + e.getStringValueHandler().split("\n").join("\n    "))
                        }), N.push("    /** end setup uploads for kernel values **/"), N.push(p.toString()), F.renderOutput === F.renderTexture)
                        if (p.reset(), F.renderKernels) {
                            const e = F.renderKernels(),
                                t = p.getContextVariableName(F.texture.texture);
                            N.push(`    return {\n      result: {\n        texture: ${t},\n        type: '${e.result.type}',\n        toArray: ${o(e.result,t)}\n      },`);
                            const {
                                subKernels: n,
                                mappedTextures: r
                            } = F;
                            for (let t = 0; t < n.length; t++) {
                                const i = r[t],
                                    s = n[t],
                                    a = e[s.property],
                                    u = p.getContextVariableName(i.texture);
                                N.push(`\n      ${s.property}: {\n        texture: ${u},\n        type: '${a.type}',\n        toArray: ${o(a,u)}\n      },`)
                            }
                            N.push("    };")
                        } else {
                            const e = F.renderOutput(),
                                t = p.getContextVariableName(F.texture.texture);
                            N.push(`    return {\n        texture: ${t},\n        type: '${e.type}',\n        toArray: ${o(e,t)}\n      };`)
                        } N.push(`    ${h?"\n"+h+"    ":""}`), N.push(c.join("\n")), N.push("  };"), F.graphical && (N.push(function (e) {
                        const t = e.getPixels.toString(),
                            n = !/^function/.test(t);
                        return i.flattenFunctionToString(`${n?"function ":""}${t}`, {
                            findDependency: (e, t) => "utils" === e ? `const ${t} = ${i[t].toString()};` : null,
                            thisLookup: t => {
                                if ("context" === t) return null;
                                if (e.hasOwnProperty(t)) return JSON.stringify(e[t]);
                                throw new Error(`unhandled thisLookup ${t}`)
                            }
                        })
                    }(F)), N.push("  innerKernel.getPixels = getPixels;")), N.push("  return innerKernel;");
                    let V = [];
                    return L.forEach(e => {
                        V.push(`${e.getStringValueHandler()}`)
                    }), `function kernel(settings) {\n  const { context, constants } = settings;\n  ${V.join("")}\n  ${l||""}\n${N.join("\n")}\n}`
                }
            }
        }, {
            "../../utils": 114,
            "gl-wiretap": 3
        }],
        13: [function (e, t, n) {
            const {
                Kernel: r
            } = e("../kernel"), {
                utils: i
            } = e("../../utils"), {
                GLTextureArray2Float: s
            } = e("./texture/array-2-float"), {
                GLTextureArray2Float2D: a
            } = e("./texture/array-2-float-2d"), {
                GLTextureArray2Float3D: o
            } = e("./texture/array-2-float-3d"), {
                GLTextureArray3Float: u
            } = e("./texture/array-3-float"), {
                GLTextureArray3Float2D: l
            } = e("./texture/array-3-float-2d"), {
                GLTextureArray3Float3D: h
            } = e("./texture/array-3-float-3d"), {
                GLTextureArray4Float: c
            } = e("./texture/array-4-float"), {
                GLTextureArray4Float2D: p
            } = e("./texture/array-4-float-2d"), {
                GLTextureArray4Float3D: d
            } = e("./texture/array-4-float-3d"), {
                GLTextureFloat: m
            } = e("./texture/float"), {
                GLTextureFloat2D: g
            } = e("./texture/float-2d"), {
                GLTextureFloat3D: f
            } = e("./texture/float-3d"), {
                GLTextureMemoryOptimized: x
            } = e("./texture/memory-optimized"), {
                GLTextureMemoryOptimized2D: y
            } = e("./texture/memory-optimized-2d"), {
                GLTextureMemoryOptimized3D: b
            } = e("./texture/memory-optimized-3d"), {
                GLTextureUnsigned: T
            } = e("./texture/unsigned"), {
                GLTextureUnsigned2D: v
            } = e("./texture/unsigned-2d"), {
                GLTextureUnsigned3D: S
            } = e("./texture/unsigned-3d"), {
                GLTextureGraphical: A
            } = e("./texture/graphical");
            const _ = {
                int: "Integer",
                float: "Number",
                vec2: "Array(2)",
                vec3: "Array(3)",
                vec4: "Array(4)"
            };
            t.exports = {
                GLKernel: class extends r {
                    static get mode() {
                        return "gpu"
                    }
                    static getIsFloatRead() {
                        const e = new this("function kernelFunction() {\n      return 1;\n    }", {
                            context: this.testContext,
                            canvas: this.testCanvas,
                            validate: !1,
                            output: [1],
                            precision: "single",
                            returnType: "Number",
                            tactic: "speed"
                        });
                        e.build(), e.run();
                        const t = e.renderOutput();
                        return e.destroy(!0), 1 === t[0]
                    }
                    static getIsIntegerDivisionAccurate() {
                        const e = new this(function (e, t) {
                                return e[this.thread.x] / t[this.thread.x]
                            }.toString(), {
                                context: this.testContext,
                                canvas: this.testCanvas,
                                validate: !1,
                                output: [2],
                                returnType: "Number",
                                precision: "unsigned",
                                tactic: "speed"
                            }),
                            t = [
                                [6, 6030401],
                                [3, 3991]
                            ];
                        e.build.apply(e, t), e.run.apply(e, t);
                        const n = e.renderOutput();
                        return e.destroy(!0), 2 === n[0] && 1511 === n[1]
                    }
                    static getIsSpeedTacticSupported() {
                        const e = new this(function (e) {
                                return e[this.thread.x]
                            }.toString(), {
                                context: this.testContext,
                                canvas: this.testCanvas,
                                validate: !1,
                                output: [4],
                                returnType: "Number",
                                precision: "unsigned",
                                tactic: "speed"
                            }),
                            t = [
                                [0, 1, 2, 3]
                            ];
                        e.build.apply(e, t), e.run.apply(e, t);
                        const n = e.renderOutput();
                        return e.destroy(!0), 0 === Math.round(n[0]) && 1 === Math.round(n[1]) && 2 === Math.round(n[2]) && 3 === Math.round(n[3])
                    }
                    static get testCanvas() {
                        throw new Error(`"testCanvas" not defined on ${this.name}`)
                    }
                    static get testContext() {
                        throw new Error(`"testContext" not defined on ${this.name}`)
                    }
                    static getFeatures() {
                        const e = this.testContext,
                            t = this.getIsDrawBuffers();
                        return Object.freeze({
                            isFloatRead: this.getIsFloatRead(),
                            isIntegerDivisionAccurate: this.getIsIntegerDivisionAccurate(),
                            isSpeedTacticSupported: this.getIsSpeedTacticSupported(),
                            isTextureFloat: this.getIsTextureFloat(),
                            isDrawBuffers: t,
                            kernelMap: t,
                            channelCount: this.getChannelCount(),
                            maxTextureSize: this.getMaxTextureSize(),
                            lowIntPrecision: e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT),
                            lowFloatPrecision: e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT),
                            mediumIntPrecision: e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT),
                            mediumFloatPrecision: e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT),
                            highIntPrecision: e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT),
                            highFloatPrecision: e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)
                        })
                    }
                    static setupFeatureChecks() {
                        throw new Error(`"setupFeatureChecks" not defined on ${this.name}`)
                    }
                    static getSignature(e, t) {
                        return e.getVariablePrecisionString() + (t.length > 0 ? ":" + t.join(",") : "")
                    }
                    setFixIntegerDivisionAccuracy(e) {
                        return this.fixIntegerDivisionAccuracy = e, this
                    }
                    setPrecision(e) {
                        return this.precision = e, this
                    }
                    setFloatTextures(e) {
                        return i.warnDeprecated("method", "setFloatTextures", "setOptimizeFloatMemory"), this.floatTextures = e, this
                    }
                    static nativeFunctionArguments(e) {
                        const t = [],
                            n = [],
                            r = [],
                            i = /^[a-zA-Z_]/,
                            s = /[a-zA-Z_0-9]/;
                        let a = 0,
                            o = null,
                            u = null;
                        for (; a < e.length;) {
                            const l = e[a],
                                h = e[a + 1],
                                c = r.length > 0 ? r[r.length - 1] : null;
                            if ("FUNCTION_ARGUMENTS" !== c || "/" !== l || "*" !== h)
                                if ("MULTI_LINE_COMMENT" !== c || "*" !== l || "/" !== h)
                                    if ("FUNCTION_ARGUMENTS" !== c || "/" !== l || "/" !== h)
                                        if ("COMMENT" !== c || "\n" !== l)
                                            if (null !== c || "(" !== l) {
                                                if ("FUNCTION_ARGUMENTS" === c) {
                                                    if (")" === l) {
                                                        r.pop();
                                                        break
                                                    }
                                                    if ("f" === l && "l" === h && "o" === e[a + 2] && "a" === e[a + 3] && "t" === e[a + 4] && " " === e[a + 5]) {
                                                        r.push("DECLARE_VARIABLE"), u = "float", o = "", a += 6;
                                                        continue
                                                    }
                                                    if ("i" === l && "n" === h && "t" === e[a + 2] && " " === e[a + 3]) {
                                                        r.push("DECLARE_VARIABLE"), u = "int", o = "", a += 4;
                                                        continue
                                                    }
                                                    if ("v" === l && "e" === h && "c" === e[a + 2] && "2" === e[a + 3] && " " === e[a + 4]) {
                                                        r.push("DECLARE_VARIABLE"), u = "vec2", o = "", a += 5;
                                                        continue
                                                    }
                                                    if ("v" === l && "e" === h && "c" === e[a + 2] && "3" === e[a + 3] && " " === e[a + 4]) {
                                                        r.push("DECLARE_VARIABLE"), u = "vec3", o = "", a += 5;
                                                        continue
                                                    }
                                                    if ("v" === l && "e" === h && "c" === e[a + 2] && "4" === e[a + 3] && " " === e[a + 4]) {
                                                        r.push("DECLARE_VARIABLE"), u = "vec4", o = "", a += 5;
                                                        continue
                                                    }
                                                } else if ("DECLARE_VARIABLE" === c) {
                                                    if ("" === o) {
                                                        if (" " === l) {
                                                            a++;
                                                            continue
                                                        }
                                                        if (!i.test(l)) throw new Error("variable name is not expected string")
                                                    }
                                                    o += l, s.test(h) || (r.pop(), n.push(o), t.push(_[u]))
                                                }
                                                a++
                                            } else r.push("FUNCTION_ARGUMENTS"), a++;
                            else r.pop(), a++;
                            else r.push("COMMENT"), a += 2;
                            else r.pop(), a += 2;
                            else r.push("MULTI_LINE_COMMENT"), a += 2
                        }
                        if (r.length > 0) throw new Error("GLSL function was not parsable");
                        return {
                            argumentNames: n,
                            argumentTypes: t
                        }
                    }
                    static nativeFunctionReturnType(e) {
                        return _[e.match(/int|float|vec[2-4]/)[0]]
                    }
                    static combineKernels(e, t) {
                        e.apply(null, arguments);
                        const {
                            texSize: n,
                            context: r,
                            threadDim: s
                        } = t.texSize;
                        let a;
                        if ("single" === t.precision) {
                            const e = n[0],
                                t = Math.ceil(n[1] / 4);
                            a = new Float32Array(e * t * 4 * 4), r.readPixels(0, 0, e, 4 * t, r.RGBA, r.FLOAT, a)
                        } else {
                            const e = new Uint8Array(n[0] * n[1] * 4);
                            r.readPixels(0, 0, n[0], n[1], r.RGBA, r.UNSIGNED_BYTE, e), a = new Float32Array(e.buffer)
                        }
                        return a = a.subarray(0, s[0] * s[1] * s[2]), 1 === t.output.length ? a : 2 === t.output.length ? i.splitArray(a, t.output[0]) : 3 === t.output.length ? i.splitArray(a, t.output[0] * t.output[1]).map(function (e) {
                            return i.splitArray(e, t.output[0])
                        }) : void 0
                    }
                    constructor(e, t) {
                        super(e, t), this.transferValues = null, this.formatValues = null, this.TextureConstructor = null, this.renderOutput = null, this.renderRawOutput = null, this.texSize = null, this.translatedSource = null, this.compiledFragmentShader = null, this.compiledVertexShader = null, this.switchingKernels = null, this._textureSwitched = null, this._mappedTextureSwitched = null
                    }
                    checkTextureSize() {
                        const {
                            features: e
                        } = this.constructor;
                        if (this.texSize[0] > e.maxTextureSize || this.texSize[1] > e.maxTextureSize) throw new Error(`Texture size [${this.texSize[0]},${this.texSize[1]}] generated by kernel is larger than supported size [${e.maxTextureSize},${e.maxTextureSize}]`)
                    }
                    translateSource() {
                        throw new Error(`"translateSource" not defined on ${this.constructor.name}`)
                    }
                    pickRenderStrategy(e) {
                        if (this.graphical) return this.renderRawOutput = this.readPackedPixelsToUint8Array, this.transferValues = (e => e), this.TextureConstructor = A, null;
                        if ("unsigned" === this.precision)
                            if (this.renderRawOutput = this.readPackedPixelsToUint8Array, this.transferValues = this.readPackedPixelsToFloat32Array, this.pipeline) switch (this.renderOutput = this.renderTexture, null !== this.subKernels && (this.renderKernels = this.renderKernelsToTextures), this.returnType) {
                                case "LiteralInteger":
                                case "Float":
                                case "Number":
                                case "Integer":
                                    return this.output[2] > 0 ? (this.TextureConstructor = S, null) : this.output[1] > 0 ? (this.TextureConstructor = v, null) : (this.TextureConstructor = T, null);
                                case "Array(2)":
                                case "Array(3)":
                                case "Array(4)":
                                    return this.requestFallback(e)
                            } else switch (null !== this.subKernels && (this.renderKernels = this.renderKernelsToArrays), this.returnType) {
                                case "LiteralInteger":
                                case "Float":
                                case "Number":
                                case "Integer":
                                    return this.renderOutput = this.renderValues, this.output[2] > 0 ? (this.TextureConstructor = S, this.formatValues = i.erect3DPackedFloat, null) : this.output[1] > 0 ? (this.TextureConstructor = v, this.formatValues = i.erect2DPackedFloat, null) : (this.TextureConstructor = T, this.formatValues = i.erectPackedFloat, null);
                                case "Array(2)":
                                case "Array(3)":
                                case "Array(4)":
                                    return this.requestFallback(e)
                            } else {
                                if ("single" !== this.precision) throw new Error(`unhandled precision of "${this.precision}"`);
                                if (this.renderRawOutput = this.readFloatPixelsToFloat32Array, this.transferValues = this.readFloatPixelsToFloat32Array, this.pipeline) switch (this.renderOutput = this.renderTexture, null !== this.subKernels && (this.renderKernels = this.renderKernelsToTextures), this.returnType) {
                                    case "LiteralInteger":
                                    case "Float":
                                    case "Number":
                                    case "Integer":
                                        return this.optimizeFloatMemory ? this.output[2] > 0 ? (this.TextureConstructor = b, null) : this.output[1] > 0 ? (this.TextureConstructor = y, null) : (this.TextureConstructor = x, null) : this.output[2] > 0 ? (this.TextureConstructor = f, null) : this.output[1] > 0 ? (this.TextureConstructor = g, null) : (this.TextureConstructor = m, null);
                                    case "Array(2)":
                                        return this.output[2] > 0 ? (this.TextureConstructor = o, null) : this.output[1] > 0 ? (this.TextureConstructor = a, null) : (this.TextureConstructor = s, null);
                                    case "Array(3)":
                                        return this.output[2] > 0 ? (this.TextureConstructor = h, null) : this.output[1] > 0 ? (this.TextureConstructor = l, null) : (this.TextureConstructor = u, null);
                                    case "Array(4)":
                                        return this.output[2] > 0 ? (this.TextureConstructor = d, null) : this.output[1] > 0 ? (this.TextureConstructor = p, null) : (this.TextureConstructor = c, null)
                                }
                                if (this.renderOutput = this.renderValues, null !== this.subKernels && (this.renderKernels = this.renderKernelsToArrays), this.optimizeFloatMemory) switch (this.returnType) {
                                    case "LiteralInteger":
                                    case "Float":
                                    case "Number":
                                    case "Integer":
                                        return this.output[2] > 0 ? (this.TextureConstructor = b, this.formatValues = i.erectMemoryOptimized3DFloat, null) : this.output[1] > 0 ? (this.TextureConstructor = y, this.formatValues = i.erectMemoryOptimized2DFloat, null) : (this.TextureConstructor = x, this.formatValues = i.erectMemoryOptimizedFloat, null);
                                    case "Array(2)":
                                        return this.output[2] > 0 ? (this.TextureConstructor = o, this.formatValues = i.erect3DArray2, null) : this.output[1] > 0 ? (this.TextureConstructor = a, this.formatValues = i.erect2DArray2, null) : (this.TextureConstructor = s, this.formatValues = i.erectArray2, null);
                                    case "Array(3)":
                                        return this.output[2] > 0 ? (this.TextureConstructor = h, this.formatValues = i.erect3DArray3, null) : this.output[1] > 0 ? (this.TextureConstructor = l, this.formatValues = i.erect2DArray3, null) : (this.TextureConstructor = u, this.formatValues = i.erectArray3, null);
                                    case "Array(4)":
                                        return this.output[2] > 0 ? (this.TextureConstructor = d, this.formatValues = i.erect3DArray4, null) : this.output[1] > 0 ? (this.TextureConstructor = p, this.formatValues = i.erect2DArray4, null) : (this.TextureConstructor = c, this.formatValues = i.erectArray4, null)
                                } else switch (this.returnType) {
                                    case "LiteralInteger":
                                    case "Float":
                                    case "Number":
                                    case "Integer":
                                        return this.output[2] > 0 ? (this.TextureConstructor = f, this.formatValues = i.erect3DFloat, null) : this.output[1] > 0 ? (this.TextureConstructor = g, this.formatValues = i.erect2DFloat, null) : (this.TextureConstructor = m, this.formatValues = i.erectFloat, null);
                                    case "Array(2)":
                                        return this.output[2] > 0 ? (this.TextureConstructor = o, this.formatValues = i.erect3DArray2, null) : this.output[1] > 0 ? (this.TextureConstructor = a, this.formatValues = i.erect2DArray2, null) : (this.TextureConstructor = s, this.formatValues = i.erectArray2, null);
                                    case "Array(3)":
                                        return this.output[2] > 0 ? (this.TextureConstructor = h, this.formatValues = i.erect3DArray3, null) : this.output[1] > 0 ? (this.TextureConstructor = l, this.formatValues = i.erect2DArray3, null) : (this.TextureConstructor = u, this.formatValues = i.erectArray3, null);
                                    case "Array(4)":
                                        return this.output[2] > 0 ? (this.TextureConstructor = d, this.formatValues = i.erect3DArray4, null) : this.output[1] > 0 ? (this.TextureConstructor = p, this.formatValues = i.erect2DArray4, null) : (this.TextureConstructor = c, this.formatValues = i.erectArray4, null)
                                }
                            }
                        throw new Error(`unhandled return type "${this.returnType}"`)
                    }
                    getKernelString() {
                        throw new Error("abstract method call")
                    }
                    getMainResultTexture() {
                        switch (this.returnType) {
                            case "LiteralInteger":
                            case "Float":
                            case "Integer":
                            case "Number":
                                return this.getMainResultNumberTexture();
                            case "Array(2)":
                                return this.getMainResultArray2Texture();
                            case "Array(3)":
                                return this.getMainResultArray3Texture();
                            case "Array(4)":
                                return this.getMainResultArray4Texture();
                            default:
                                throw new Error(`unhandled returnType type ${this.returnType}`)
                        }
                    }
                    getMainResultKernelNumberTexture() {
                        throw new Error("abstract method call")
                    }
                    getMainResultSubKernelNumberTexture() {
                        throw new Error("abstract method call")
                    }
                    getMainResultKernelArray2Texture() {
                        throw new Error("abstract method call")
                    }
                    getMainResultSubKernelArray2Texture() {
                        throw new Error("abstract method call")
                    }
                    getMainResultKernelArray3Texture() {
                        throw new Error("abstract method call")
                    }
                    getMainResultSubKernelArray3Texture() {
                        throw new Error("abstract method call")
                    }
                    getMainResultKernelArray4Texture() {
                        throw new Error("abstract method call")
                    }
                    getMainResultSubKernelArray4Texture() {
                        throw new Error("abstract method call")
                    }
                    getMainResultGraphical() {
                        throw new Error("abstract method call")
                    }
                    getMainResultMemoryOptimizedFloats() {
                        throw new Error("abstract method call")
                    }
                    getMainResultPackedPixels() {
                        throw new Error("abstract method call")
                    }
                    getMainResultString() {
                        return this.graphical ? this.getMainResultGraphical() : "single" === this.precision ? this.optimizeFloatMemory ? this.getMainResultMemoryOptimizedFloats() : this.getMainResultTexture() : this.getMainResultPackedPixels()
                    }
                    getMainResultNumberTexture() {
                        return i.linesToString(this.getMainResultKernelNumberTexture()) + i.linesToString(this.getMainResultSubKernelNumberTexture())
                    }
                    getMainResultArray2Texture() {
                        return i.linesToString(this.getMainResultKernelArray2Texture()) + i.linesToString(this.getMainResultSubKernelArray2Texture())
                    }
                    getMainResultArray3Texture() {
                        return i.linesToString(this.getMainResultKernelArray3Texture()) + i.linesToString(this.getMainResultSubKernelArray3Texture())
                    }
                    getMainResultArray4Texture() {
                        return i.linesToString(this.getMainResultKernelArray4Texture()) + i.linesToString(this.getMainResultSubKernelArray4Texture())
                    }
                    getFloatTacticDeclaration() {
                        return `precision ${this.getVariablePrecisionString(this.texSize,this.tactic)} float;\n`
                    }
                    getIntTacticDeclaration() {
                        return `precision ${this.getVariablePrecisionString(this.texSize,this.tactic,!0)} int;\n`
                    }
                    getSampler2DTacticDeclaration() {
                        return `precision ${this.getVariablePrecisionString(this.texSize,this.tactic)} sampler2D;\n`
                    }
                    getSampler2DArrayTacticDeclaration() {
                        return `precision ${this.getVariablePrecisionString(this.texSize,this.tactic)} sampler2DArray;\n`
                    }
                    renderTexture() {
                        return this.immutable ? this.texture.clone() : this.texture
                    }
                    readPackedPixelsToUint8Array() {
                        if ("unsigned" !== this.precision) throw new Error('Requires this.precision to be "unsigned"');
                        const {
                            texSize: e,
                            context: t
                        } = this, n = new Uint8Array(e[0] * e[1] * 4);
                        return t.readPixels(0, 0, e[0], e[1], t.RGBA, t.UNSIGNED_BYTE, n), n
                    }
                    readPackedPixelsToFloat32Array() {
                        return new Float32Array(this.readPackedPixelsToUint8Array().buffer)
                    }
                    readFloatPixelsToFloat32Array() {
                        if ("single" !== this.precision) throw new Error('Requires this.precision to be "single"');
                        const {
                            texSize: e,
                            context: t
                        } = this, n = e[0], r = e[1], i = new Float32Array(n * r * 4);
                        return t.readPixels(0, 0, n, r, t.RGBA, t.FLOAT, i), i
                    }
                    getPixels(e) {
                        const {
                            context: t,
                            output: n
                        } = this, [r, s] = n, a = new Uint8Array(r * s * 4);
                        return t.readPixels(0, 0, r, s, t.RGBA, t.UNSIGNED_BYTE, a), new Uint8ClampedArray((e ? a : i.flipPixels(a, r, s)).buffer)
                    }
                    renderKernelsToArrays() {
                        const e = {
                            result: this.renderOutput()
                        };
                        for (let t = 0; t < this.subKernels.length; t++) e[this.subKernels[t].property] = this.mappedTextures[t].toArray();
                        return e
                    }
                    renderKernelsToTextures() {
                        const e = {
                            result: this.renderOutput()
                        };
                        if (this.immutable)
                            for (let t = 0; t < this.subKernels.length; t++) e[this.subKernels[t].property] = this.mappedTextures[t].clone();
                        else
                            for (let t = 0; t < this.subKernels.length; t++) e[this.subKernels[t].property] = this.mappedTextures[t];
                        return e
                    }
                    resetSwitchingKernels() {
                        const e = this.switchingKernels;
                        return this.switchingKernels = null, e
                    }
                    setOutput(e) {
                        const t = this.toKernelOutput(e);
                        if (this.program) {
                            if (!this.dynamicOutput) throw new Error("Resizing a kernel with dynamicOutput: false is not possible");
                            const n = [t[0], t[1] || 1, t[2] || 1],
                                r = i.getKernelTextureSize({
                                    optimizeFloatMemory: this.optimizeFloatMemory,
                                    precision: this.precision
                                }, n),
                                s = this.texSize;
                            if (s) {
                                const t = this.getVariablePrecisionString(s, this.tactic),
                                    n = this.getVariablePrecisionString(r, this.tactic);
                                if (t !== n) return this.debug && console.warn("Precision requirement changed, asking GPU instance to recompile"), void this.switchKernels({
                                    type: "outputPrecisionMismatch",
                                    precision: n,
                                    needed: e
                                })
                            }
                            this.output = t, this.threadDim = n, this.texSize = r;
                            const {
                                context: a
                            } = this;
                            if (a.bindFramebuffer(a.FRAMEBUFFER, this.framebuffer), this.updateMaxTexSize(), this.framebuffer.width = this.texSize[0], this.framebuffer.height = this.texSize[1], a.viewport(0, 0, this.maxTexSize[0], this.maxTexSize[1]), this.canvas.width = this.maxTexSize[0], this.canvas.height = this.maxTexSize[1], this.texture && this.texture.delete(), this.texture = null, this._setupOutputTexture(), this.mappedTextures && this.mappedTextures.length > 0) {
                                for (let e = 0; e < this.mappedTextures.length; e++) this.mappedTextures[e].delete();
                                this.mappedTextures = null, this._setupSubOutputTextures()
                            }
                        } else this.output = t;
                        return this
                    }
                    renderValues() {
                        return this.formatValues(this.transferValues(), this.output[0], this.output[1], this.output[2])
                    }
                    switchKernels(e) {
                        this.switchingKernels ? this.switchingKernels.push(e) : this.switchingKernels = [e]
                    }
                    getVariablePrecisionString(e = this.texSize, t = this.tactic, n = !1) {
                        if (!t) {
                            if (!this.constructor.features.isSpeedTacticSupported) return "highp";
                            const t = this.constructor.features[n ? "lowIntPrecision" : "lowFloatPrecision"],
                                r = this.constructor.features[n ? "mediumIntPrecision" : "mediumFloatPrecision"],
                                i = this.constructor.features[n ? "highIntPrecision" : "highFloatPrecision"],
                                s = Math.log2(e[0] * e[1]);
                            if (s <= t.rangeMax) return "lowp";
                            if (s <= r.rangeMax) return "mediump";
                            if (s <= i.rangeMax) return "highp";
                            throw new Error("The required size exceeds that of the ability of your system")
                        }
                        switch (t) {
                            case "speed":
                                return "lowp";
                            case "balanced":
                                return "mediump";
                            case "precision":
                                return "highp";
                            default:
                                throw new Error(`Unknown tactic "${t}" use "speed", "balanced", "precision", or empty for auto`)
                        }
                    }
                    updateTextureArgumentRefs(e, t) {
                        if (this.immutable)
                            if (this.texture.texture === t.texture) {
                                const {
                                    prevArg: n
                                } = e;
                                n && (1 === n.texture._refs && (this.texture.delete(), this.texture = n.clone(), this._textureSwitched = !0), n.delete()), e.prevArg = t.clone()
                            } else if (this.mappedTextures && this.mappedTextures.length > 0) {
                            const {
                                mappedTextures: n
                            } = this;
                            for (let r = 0; r < n.length; r++) {
                                const i = n[r];
                                if (i.texture === t.texture) {
                                    const {
                                        prevArg: s
                                    } = e;
                                    return s && (1 === s.texture._refs && (i.delete(), n[r] = s.clone(), this._mappedTextureSwitched[r] = !0), s.delete()), void(e.prevArg = t.clone())
                                }
                            }
                        }
                    }
                    onActivate(e) {
                        if (this._textureSwitched = !0, this.texture = e.texture, this.mappedTextures) {
                            for (let e = 0; e < this.mappedTextures.length; e++) this._mappedTextureSwitched[e] = !0;
                            this.mappedTextures = e.mappedTextures
                        }
                    }
                    initCanvas() {}
                }
            }
        }, {
            "../../utils": 114,
            "../kernel": 36,
            "./texture/array-2-float": 16,
            "./texture/array-2-float-2d": 14,
            "./texture/array-2-float-3d": 15,
            "./texture/array-3-float": 19,
            "./texture/array-3-float-2d": 17,
            "./texture/array-3-float-3d": 18,
            "./texture/array-4-float": 22,
            "./texture/array-4-float-2d": 20,
            "./texture/array-4-float-3d": 21,
            "./texture/float": 25,
            "./texture/float-2d": 23,
            "./texture/float-3d": 24,
            "./texture/graphical": 26,
            "./texture/memory-optimized": 30,
            "./texture/memory-optimized-2d": 28,
            "./texture/memory-optimized-3d": 29,
            "./texture/unsigned": 33,
            "./texture/unsigned-2d": 31,
            "./texture/unsigned-3d": 32
        }],
        14: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureArray2Float2D: class extends i {
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(2)"
                    }
                    toArray() {
                        return r.erect2DArray2(this.renderValues(), this.output[0], this.output[1])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        15: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureArray2Float3D: class extends i {
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(2)"
                    }
                    toArray() {
                        return r.erect3DArray2(this.renderValues(), this.output[0], this.output[1], this.output[2])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        16: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureArray2Float: class extends i {
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(2)"
                    }
                    toArray() {
                        return r.erectArray2(this.renderValues(), this.output[0], this.output[1])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        17: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureArray3Float2D: class extends i {
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(3)"
                    }
                    toArray() {
                        return r.erect2DArray3(this.renderValues(), this.output[0], this.output[1])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        18: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureArray3Float3D: class extends i {
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(3)"
                    }
                    toArray() {
                        return r.erect3DArray3(this.renderValues(), this.output[0], this.output[1], this.output[2])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        19: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureArray3Float: class extends i {
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(3)"
                    }
                    toArray() {
                        return r.erectArray3(this.renderValues(), this.output[0])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        20: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureArray4Float2D: class extends i {
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(4)"
                    }
                    toArray() {
                        return r.erect2DArray4(this.renderValues(), this.output[0], this.output[1])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        21: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureArray4Float3D: class extends i {
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(4)"
                    }
                    toArray() {
                        return r.erect3DArray4(this.renderValues(), this.output[0], this.output[1], this.output[2])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        22: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureArray4Float: class extends i {
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(4)"
                    }
                    toArray() {
                        return r.erectArray4(this.renderValues(), this.output[0])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        23: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureFloat2D: class extends i {
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(1)"
                    }
                    toArray() {
                        return r.erect2DFloat(this.renderValues(), this.output[0], this.output[1])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        24: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureFloat3D: class extends i {
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(1)"
                    }
                    toArray() {
                        return r.erect3DFloat(this.renderValues(), this.output[0], this.output[1], this.output[2])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        25: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTexture: i
            } = e("./index");
            t.exports = {
                GLTextureFloat: class extends i {
                    get textureType() {
                        return this.context.FLOAT
                    }
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(1)"
                    }
                    renderRawOutput() {
                        const e = this.context,
                            t = this.size;
                        e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer()), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture, 0);
                        const n = new Float32Array(t[0] * t[1] * 4);
                        return e.readPixels(0, 0, t[0], t[1], e.RGBA, e.FLOAT, n), n
                    }
                    renderValues() {
                        return this._deleted ? null : this.renderRawOutput()
                    }
                    toArray() {
                        return r.erectFloat(this.renderValues(), this.output[0])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./index": 27
        }],
        26: [function (e, t, n) {
            const {
                GLTextureUnsigned: r
            } = e("./unsigned");
            t.exports = {
                GLTextureGraphical: class extends r {
                    constructor(e) {
                        super(e), this.type = "ArrayTexture(4)"
                    }
                    toArray() {
                        return this.renderValues()
                    }
                }
            }
        }, {
            "./unsigned": 33
        }],
        27: [function (e, t, n) {
            const {
                Texture: r
            } = e("../../../texture");

            function i(e, t) {
                e.activeTexture(e.TEXTURE15), e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST)
            }
            t.exports = {
                GLTexture: class extends r {
                    get textureType() {
                        throw new Error(`"textureType" not implemented on ${this.name}`)
                    }
                    clone() {
                        return new this.constructor(this)
                    }
                    beforeMutate() {
                        return this.texture._refs > 1 && (this.newTexture(), !0)
                    }
                    cloneTexture() {
                        this.texture._refs--;
                        const {
                            context: e,
                            size: t,
                            texture: n,
                            kernel: r
                        } = this;
                        r.debug && console.warn("cloning internal texture"), e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer()), i(e, n), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0);
                        const s = e.createTexture();
                        i(e, s), e.texImage2D(e.TEXTURE_2D, 0, this.internalFormat, t[0], t[1], 0, this.textureFormat, this.textureType, null), e.copyTexSubImage2D(e.TEXTURE_2D, 0, 0, 0, 0, 0, t[0], t[1]), s._refs = 1, this.texture = s
                    }
                    newTexture() {
                        this.texture._refs--;
                        const e = this.context,
                            t = this.size;
                        this.kernel.debug && console.warn("new internal texture");
                        const n = e.createTexture();
                        i(e, n), e.texImage2D(e.TEXTURE_2D, 0, this.internalFormat, t[0], t[1], 0, this.textureFormat, this.textureType, null), n._refs = 1, this.texture = n
                    }
                    clear() {
                        if (this.texture._refs) {
                            this.texture._refs--;
                            const e = this.context,
                                t = this.texture = e.createTexture();
                            i(e, t);
                            const n = this.size;
                            t._refs = 1, e.texImage2D(e.TEXTURE_2D, 0, this.internalFormat, n[0], n[1], 0, this.textureFormat, this.textureType, null)
                        }
                        const {
                            context: e,
                            texture: t
                        } = this;
                        e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer()), e.bindTexture(e.TEXTURE_2D, t), i(e, t), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT)
                    }
                    delete() {
                        this._deleted || (this._deleted = !0, this.texture._refs && (this.texture._refs--, this.texture._refs) || (this.context.deleteTexture(this.texture), 0 === this.texture._refs && this._framebuffer && (this.context.deleteFramebuffer(this._framebuffer), this._framebuffer = null)))
                    }
                    framebuffer() {
                        return this._framebuffer || (this._framebuffer = this.context.createFramebuffer()), this._framebuffer.width = this.size[0], this._framebuffer.height = this.size[1], this._framebuffer
                    }
                }
            }
        }, {
            "../../../texture": 113
        }],
        28: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureMemoryOptimized2D: class extends i {
                    constructor(e) {
                        super(e), this.type = "MemoryOptimizedNumberTexture"
                    }
                    toArray() {
                        return r.erectMemoryOptimized2DFloat(this.renderValues(), this.output[0], this.output[1])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        29: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureMemoryOptimized3D: class extends i {
                    constructor(e) {
                        super(e), this.type = "MemoryOptimizedNumberTexture"
                    }
                    toArray() {
                        return r.erectMemoryOptimized3DFloat(this.renderValues(), this.output[0], this.output[1], this.output[2])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        30: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureFloat: i
            } = e("./float");
            t.exports = {
                GLTextureMemoryOptimized: class extends i {
                    constructor(e) {
                        super(e), this.type = "MemoryOptimizedNumberTexture"
                    }
                    toArray() {
                        return r.erectMemoryOptimizedFloat(this.renderValues(), this.output[0])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./float": 25
        }],
        31: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureUnsigned: i
            } = e("./unsigned");
            t.exports = {
                GLTextureUnsigned2D: class extends i {
                    constructor(e) {
                        super(e), this.type = "NumberTexture"
                    }
                    toArray() {
                        return r.erect2DPackedFloat(this.renderValues(), this.output[0], this.output[1])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./unsigned": 33
        }],
        32: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTextureUnsigned: i
            } = e("./unsigned");
            t.exports = {
                GLTextureUnsigned3D: class extends i {
                    constructor(e) {
                        super(e), this.type = "NumberTexture"
                    }
                    toArray() {
                        return r.erect3DPackedFloat(this.renderValues(), this.output[0], this.output[1], this.output[2])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./unsigned": 33
        }],
        33: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                GLTexture: i
            } = e("./index");
            t.exports = {
                GLTextureUnsigned: class extends i {
                    get textureType() {
                        return this.context.UNSIGNED_BYTE
                    }
                    constructor(e) {
                        super(e), this.type = "NumberTexture"
                    }
                    renderRawOutput() {
                        const {
                            context: e
                        } = this, t = e.createFramebuffer();
                        e.bindFramebuffer(e.FRAMEBUFFER, t), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture, 0);
                        const n = new Uint8Array(this.size[0] * this.size[1] * 4);
                        return e.readPixels(0, 0, this.size[0], this.size[1], e.RGBA, e.UNSIGNED_BYTE, n), n
                    }
                    renderValues() {
                        return this._deleted ? null : new Float32Array(this.renderRawOutput().buffer)
                    }
                    toArray() {
                        return r.erectPackedFloat(this.renderValues(), this.output[0])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./index": 27
        }],
        34: [function (e, t, n) {
            const r = e("gl"),
                {
                    WebGLKernel: i
                } = e("../web-gl/kernel"),
                {
                    glKernelString: s
                } = e("../gl/kernel-string");
            let a = null,
                o = null,
                u = null,
                l = null,
                h = null;
            t.exports = {
                HeadlessGLKernel: class extends i {
                    static get isSupported() {
                        return null !== a ? a : (this.setupFeatureChecks(), a = null !== u)
                    }
                    static setupFeatureChecks() {
                        if (o = null, l = null, "function" == typeof r) try {
                            if (!(u = r(2, 2, {
                                    preserveDrawingBuffer: !0
                                })) || !u.getExtension) return;
                            l = {
                                STACKGL_resize_drawingbuffer: u.getExtension("STACKGL_resize_drawingbuffer"),
                                STACKGL_destroy_context: u.getExtension("STACKGL_destroy_context"),
                                OES_texture_float: u.getExtension("OES_texture_float"),
                                OES_texture_float_linear: u.getExtension("OES_texture_float_linear"),
                                OES_element_index_uint: u.getExtension("OES_element_index_uint"),
                                WEBGL_draw_buffers: u.getExtension("WEBGL_draw_buffers"),
                                WEBGL_color_buffer_float: u.getExtension("WEBGL_color_buffer_float")
                            }, h = this.getFeatures()
                        } catch (e) {
                            console.warn(e)
                        }
                    }
                    static isContextMatch(e) {
                        try {
                            return "ANGLE" === e.getParameter(e.RENDERER)
                        } catch (e) {
                            return !1
                        }
                    }
                    static getIsTextureFloat() {
                        return Boolean(l.OES_texture_float)
                    }
                    static getIsDrawBuffers() {
                        return Boolean(l.WEBGL_draw_buffers)
                    }
                    static getChannelCount() {
                        return l.WEBGL_draw_buffers ? u.getParameter(l.WEBGL_draw_buffers.MAX_DRAW_BUFFERS_WEBGL) : 1
                    }
                    static getMaxTextureSize() {
                        return u.getParameter(u.MAX_TEXTURE_SIZE)
                    }
                    static get testCanvas() {
                        return o
                    }
                    static get testContext() {
                        return u
                    }
                    static get features() {
                        return h
                    }
                    initCanvas() {
                        return {}
                    }
                    initContext() {
                        return r(2, 2, {
                            preserveDrawingBuffer: !0
                        })
                    }
                    initExtensions() {
                        this.extensions = {
                            STACKGL_resize_drawingbuffer: this.context.getExtension("STACKGL_resize_drawingbuffer"),
                            STACKGL_destroy_context: this.context.getExtension("STACKGL_destroy_context"),
                            OES_texture_float: this.context.getExtension("OES_texture_float"),
                            OES_texture_float_linear: this.context.getExtension("OES_texture_float_linear"),
                            OES_element_index_uint: this.context.getExtension("OES_element_index_uint"),
                            WEBGL_draw_buffers: this.context.getExtension("WEBGL_draw_buffers")
                        }
                    }
                    build() {
                        super.build.apply(this, arguments), this.fallbackRequested || this.extensions.STACKGL_resize_drawingbuffer.resize(this.maxTexSize[0], this.maxTexSize[1])
                    }
                    destroyExtensions() {
                        this.extensions.STACKGL_resize_drawingbuffer = null, this.extensions.STACKGL_destroy_context = null, this.extensions.OES_texture_float = null, this.extensions.OES_texture_float_linear = null, this.extensions.OES_element_index_uint = null, this.extensions.WEBGL_draw_buffers = null
                    }
                    static destroyContext(e) {
                        const t = e.getExtension("STACKGL_destroy_context");
                        t && t.destroy && t.destroy()
                    }
                    toString() {
                        return s(this.constructor, arguments, this, "const gl = context || require('gl')(1, 1);\n", "    if (!context) { gl.getExtension('STACKGL_destroy_context').destroy(); }\n")
                    }
                    setOutput(e) {
                        return super.setOutput(e), this.graphical && this.extensions.STACKGL_resize_drawingbuffer && this.extensions.STACKGL_resize_drawingbuffer.resize(this.maxTexSize[0], this.maxTexSize[1]), this
                    }
                }
            }
        }, {
            "../gl/kernel-string": 12,
            "../web-gl/kernel": 70,
            gl: 2
        }],
        35: [function (e, t, n) {
            t.exports = {
                KernelValue: class {
                    constructor(e, t) {
                        const {
                            name: n,
                            kernel: r,
                            context: i,
                            checkContext: s,
                            onRequestContextHandle: a,
                            onUpdateValueMismatch: o,
                            origin: u,
                            strictIntegers: l,
                            type: h,
                            tactic: c
                        } = t;
                        if (!n) throw new Error("name not set");
                        if (!h) throw new Error("type not set");
                        if (!u) throw new Error("origin not set");
                        if ("user" !== u && "constants" !== u) throw new Error(`origin must be "user" or "constants" value is "${u}"`);
                        if (!a) throw new Error("onRequestContextHandle is not set");
                        this.name = n, this.origin = u, this.tactic = c, this.varName = "constants" === u ? `constants.${n}` : n, this.kernel = r, this.strictIntegers = l, this.type = e.type || h, this.size = e.size || null, this.index = null, this.context = i, this.checkContext = null == s || s, this.contextHandle = null, this.onRequestContextHandle = a, this.onUpdateValueMismatch = o, this.forceUploadEachRun = null
                    }
                    get id() {
                        return `${this.origin}_${name}`
                    }
                    getSource() {
                        throw new Error(`"getSource" not defined on ${this.constructor.name}`)
                    }
                    updateValue(e) {
                        throw new Error(`"updateValue" not defined on ${this.constructor.name}`)
                    }
                }
            }
        }, {}],
        36: [function (e, t, n) {
            const {
                utils: r
            } = e("../utils"), {
                Input: i
            } = e("../input");
            t.exports = {
                Kernel: class {
                    static get isSupported() {
                        throw new Error(`"isSupported" not implemented on ${this.name}`)
                    }
                    static isContextMatch(e) {
                        throw new Error(`"isContextMatch" not implemented on ${this.name}`)
                    }
                    static getFeatures() {
                        throw new Error(`"getFeatures" not implemented on ${this.name}`)
                    }
                    static destroyContext(e) {
                        throw new Error(`"destroyContext" called on ${this.name}`)
                    }
                    static nativeFunctionArguments() {
                        throw new Error(`"nativeFunctionArguments" called on ${this.name}`)
                    }
                    static nativeFunctionReturnType() {
                        throw new Error(`"nativeFunctionReturnType" called on ${this.name}`)
                    }
                    static combineKernels() {
                        throw new Error(`"combineKernels" called on ${this.name}`)
                    }
                    constructor(e, t) {
                        if ("object" != typeof e) {
                            if ("string" != typeof e) throw new Error("source not a string");
                            if (!r.isFunctionString(e)) throw new Error("source not a function string")
                        }
                        this.useLegacyEncoder = !1, this.fallbackRequested = !1, this.onRequestFallback = null, this.argumentNames = "string" == typeof e ? r.getArgumentNamesFromString(e) : null, this.argumentTypes = null, this.argumentSizes = null, this.argumentBitRatios = null, this.kernelArguments = null, this.kernelConstants = null, this.forceUploadKernelConstants = null, this.source = e, this.output = null, this.debug = !1, this.graphical = !1, this.loopMaxIterations = 0, this.constants = null, this.constantTypes = null, this.constantBitRatios = null, this.dynamicArguments = !1, this.dynamicOutput = !1, this.canvas = null, this.context = null, this.checkContext = null, this.gpu = null, this.functions = null, this.nativeFunctions = null, this.injectedNative = null, this.subKernels = null, this.validate = !0, this.immutable = !1, this.pipeline = !1, this.precision = null, this.tactic = null, this.plugins = null, this.returnType = null, this.leadingReturnStatement = null, this.followingReturnStatement = null, this.optimizeFloatMemory = null, this.strictIntegers = !1, this.fixIntegerDivisionAccuracy = null, this.onIstanbulCoverageVariable = null, this.removeIstanbulCoverage = !1, this.built = !1, this.signature = null
                    }
                    mergeSettings(e) {
                        for (let t in e)
                            if (e.hasOwnProperty(t) && this.hasOwnProperty(t)) {
                                switch (t) {
                                    case "output":
                                        if (!Array.isArray(e.output)) {
                                            this.setOutput(e.output);
                                            continue
                                        }
                                        break;
                                    case "functions":
                                        this.functions = [];
                                        for (let t = 0; t < e.functions.length; t++) this.addFunction(e.functions[t]);
                                        continue;
                                    case "graphical":
                                        e[t] && !e.hasOwnProperty("precision") && (this.precision = "unsigned"), this[t] = e[t];
                                        continue;
                                    case "removeIstanbulCoverage":
                                        null !== e[t] && (this[t] = e[t]);
                                        continue;
                                    case "nativeFunctions":
                                        if (!e.nativeFunctions) continue;
                                        this.nativeFunctions = [];
                                        for (let t = 0; t < e.nativeFunctions.length; t++) {
                                            const n = e.nativeFunctions[t],
                                                {
                                                    name: r,
                                                    source: i
                                                } = n;
                                            this.addNativeFunction(r, i, n)
                                        }
                                        continue
                                }
                                this[t] = e[t]
                            } this.canvas || (this.canvas = this.initCanvas()), this.context || (this.context = this.initContext()), this.plugins || (this.plugins = this.initPlugins(e))
                    }
                    build() {
                        throw new Error(`"build" not defined on ${this.constructor.name}`)
                    }
                    run() {
                        throw new Error(`"run" not defined on ${this.constructor.name}`)
                    }
                    initCanvas() {
                        throw new Error(`"initCanvas" not defined on ${this.constructor.name}`)
                    }
                    initContext() {
                        throw new Error(`"initContext" not defined on ${this.constructor.name}`)
                    }
                    initPlugins(e) {
                        throw new Error(`"initPlugins" not defined on ${this.constructor.name}`)
                    }
                    addFunction(e, t = {}) {
                        if (e.name && e.source && e.argumentTypes && "returnType" in e) this.functions.push(e);
                        else if ("settings" in e && "source" in e) this.functions.push(this.functionToIGPUFunction(e.source, e.settings));
                        else {
                            if ("string" != typeof e && "function" != typeof e) throw new Error("function not properly defined");
                            this.functions.push(this.functionToIGPUFunction(e, t))
                        }
                        return this
                    }
                    addNativeFunction(e, t, n = {}) {
                        const {
                            argumentTypes: r,
                            argumentNames: i
                        } = n.argumentTypes ? function (e) {
                            const t = Object.keys(e),
                                n = [];
                            for (let r = 0; r < t.length; r++) {
                                const i = t[r];
                                n.push(e[i])
                            }
                            return {
                                argumentTypes: n,
                                argumentNames: t
                            }
                        }(n.argumentTypes) : this.constructor.nativeFunctionArguments(t) || {};
                        return this.nativeFunctions.push({
                            name: e,
                            source: t,
                            settings: n,
                            argumentTypes: r,
                            argumentNames: i,
                            returnType: n.returnType || this.constructor.nativeFunctionReturnType(t)
                        }), this
                    }
                    setupArguments(e) {
                        if (this.kernelArguments = [], this.argumentTypes)
                            for (let e = 0; e < this.argumentTypes.length; e++) this.kernelArguments.push({
                                type: this.argumentTypes[e]
                            });
                        else if (!this.argumentTypes) {
                            this.argumentTypes = [];
                            for (let t = 0; t < e.length; t++) {
                                const n = r.getVariableType(e[t], this.strictIntegers),
                                    i = "Integer" === n ? "Number" : n;
                                this.argumentTypes.push(i), this.kernelArguments.push({
                                    type: i
                                })
                            }
                        }
                        this.argumentSizes = new Array(e.length), this.argumentBitRatios = new Int32Array(e.length);
                        for (let t = 0; t < e.length; t++) {
                            const n = e[t];
                            this.argumentSizes[t] = n.constructor === i ? n.size : null, this.argumentBitRatios[t] = this.getBitRatio(n)
                        }
                        if (this.argumentNames.length !== e.length) throw new Error("arguments are miss-aligned")
                    }
                    setupConstants() {
                        this.kernelConstants = [];
                        let e = null === this.constantTypes;
                        if (e && (this.constantTypes = {}), this.constantBitRatios = {}, this.constants)
                            for (let t in this.constants) {
                                if (e) {
                                    const e = r.getVariableType(this.constants[t], this.strictIntegers);
                                    this.constantTypes[t] = e, this.kernelConstants.push({
                                        name: t,
                                        type: e
                                    })
                                } else this.kernelConstants.push({
                                    name: t,
                                    type: this.constantTypes[t]
                                });
                                this.constantBitRatios[t] = this.getBitRatio(this.constants[t])
                            }
                    }
                    setOptimizeFloatMemory(e) {
                        return this.optimizeFloatMemory = e, this
                    }
                    toKernelOutput(e) {
                        return e.hasOwnProperty("x") ? e.hasOwnProperty("y") ? e.hasOwnProperty("z") ? [e.x, e.y, e.z] : [e.x, e.y] : [e.x] : e
                    }
                    setOutput(e) {
                        return this.output = this.toKernelOutput(e), this
                    }
                    setDebug(e) {
                        return this.debug = e, this
                    }
                    setGraphical(e) {
                        return this.graphical = e, this.precision = "unsigned", this
                    }
                    setLoopMaxIterations(e) {
                        return this.loopMaxIterations = e, this
                    }
                    setConstants(e) {
                        return this.constants = e, this
                    }
                    setConstantTypes(e) {
                        return this.constantTypes = e, this
                    }
                    setFunctions(e) {
                        for (let t = 0; t < e.length; t++) this.addFunction(e[t]);
                        return this
                    }
                    setNativeFunctions(e) {
                        for (let t = 0; t < e.length; t++) {
                            const n = e[t],
                                {
                                    name: r,
                                    source: i
                                } = n;
                            this.addNativeFunction(r, i, n)
                        }
                        return this
                    }
                    setInjectedNative(e) {
                        return this.injectedNative = e, this
                    }
                    setPipeline(e) {
                        return this.pipeline = e, this
                    }
                    setPrecision(e) {
                        return this.precision = e, this
                    }
                    setDimensions(e) {
                        return r.warnDeprecated("method", "setDimensions", "setOutput"), this.output = e, this
                    }
                    setOutputToTexture(e) {
                        return r.warnDeprecated("method", "setOutputToTexture", "setPipeline"), this.pipeline = e, this
                    }
                    setImmutable(e) {
                        return this.immutable = e, this
                    }
                    setCanvas(e) {
                        return this.canvas = e, this
                    }
                    setStrictIntegers(e) {
                        return this.strictIntegers = e, this
                    }
                    setDynamicOutput(e) {
                        return this.dynamicOutput = e, this
                    }
                    setHardcodeConstants(e) {
                        return r.warnDeprecated("method", "setHardcodeConstants"), this.setDynamicOutput(e), this.setDynamicArguments(e), this
                    }
                    setDynamicArguments(e) {
                        return this.dynamicArguments = e, this
                    }
                    setUseLegacyEncoder(e) {
                        return this.useLegacyEncoder = e, this
                    }
                    setWarnVarUsage(e) {
                        return r.warnDeprecated("method", "setWarnVarUsage"), this
                    }
                    getCanvas() {
                        return r.warnDeprecated("method", "getCanvas"), this.canvas
                    }
                    getWebGl() {
                        return r.warnDeprecated("method", "getWebGl"), this.context
                    }
                    setContext(e) {
                        return this.context = e, this
                    }
                    setArgumentTypes(e) {
                        if (Array.isArray(e)) this.argumentTypes = e;
                        else {
                            this.argumentTypes = [];
                            for (const t in e) {
                                if (!e.hasOwnProperty(t)) continue;
                                const n = this.argumentNames.indexOf(t);
                                if (-1 === n) throw new Error(`unable to find argument ${t}`);
                                this.argumentTypes[n] = e[t]
                            }
                        }
                        return this
                    }
                    setTactic(e) {
                        return this.tactic = e, this
                    }
                    requestFallback(e) {
                        if (!this.onRequestFallback) throw new Error(`"onRequestFallback" not defined on ${this.constructor.name}`);
                        return this.fallbackRequested = !0, this.onRequestFallback(e)
                    }
                    validateSettings() {
                        throw new Error(`"validateSettings" not defined on ${this.constructor.name}`)
                    }
                    addSubKernel(e) {
                        if (null === this.subKernels && (this.subKernels = []), !e.source) throw new Error('subKernel missing "source" property');
                        if (!e.property && isNaN(e.property)) throw new Error('subKernel missing "property" property');
                        if (!e.name) throw new Error('subKernel missing "name" property');
                        return this.subKernels.push(e), this
                    }
                    destroy(e) {
                        throw new Error(`"destroy" called on ${this.constructor.name}`)
                    }
                    getBitRatio(e) {
                        if ("single" === this.precision) return 4;
                        if (Array.isArray(e[0])) return this.getBitRatio(e[0]);
                        if (e.constructor === i) return this.getBitRatio(e.value);
                        switch (e.constructor) {
                            case Uint8ClampedArray:
                            case Uint8Array:
                            case Int8Array:
                                return 1;
                            case Uint16Array:
                            case Int16Array:
                                return 2;
                            case Float32Array:
                            case Int32Array:
                            default:
                                return 4
                        }
                    }
                    getPixels(e) {
                        throw new Error(`"getPixels" called on ${this.constructor.name}`)
                    }
                    checkOutput() {
                        if (!this.output || !r.isArray(this.output)) throw new Error("kernel.output not an array");
                        if (this.output.length < 1) throw new Error("kernel.output is empty, needs at least 1 value");
                        for (let e = 0; e < this.output.length; e++)
                            if (isNaN(this.output[e]) || this.output[e] < 1) throw new Error(`${this.constructor.name}.output[${e}] incorrectly defined as \`${this.output[e]}\`, needs to be numeric, and greater than 0`)
                    }
                    prependString(e) {
                        throw new Error(`"prependString" called on ${this.constructor.name}`)
                    }
                    hasPrependString(e) {
                        throw new Error(`"hasPrependString" called on ${this.constructor.name}`)
                    }
                    toJSON() {
                        return {
                            settings: {
                                output: this.output,
                                pipeline: this.pipeline,
                                argumentNames: this.argumentNames,
                                argumentsTypes: this.argumentTypes,
                                constants: this.constants,
                                pluginNames: this.plugins ? this.plugins.map(e => e.name) : null,
                                returnType: this.returnType
                            }
                        }
                    }
                    buildSignature(e) {
                        const t = this.constructor;
                        this.signature = t.getSignature(this, t.getArgumentTypes(this, e))
                    }
                    static getArgumentTypes(e, t) {
                        const n = new Array(t.length);
                        for (let i = 0; i < t.length; i++) {
                            const s = t[i],
                                a = e.argumentTypes[i];
                            if (s.type) n[i] = s.type;
                            else switch (a) {
                                case "Number":
                                case "Integer":
                                case "Float":
                                case "ArrayTexture(1)":
                                    n[i] = r.getVariableType(s);
                                    break;
                                default:
                                    n[i] = a
                            }
                        }
                        return n
                    }
                    static getSignature(e, t) {
                        throw new Error(`"getSignature" not implemented on ${this.name}`)
                    }
                    functionToIGPUFunction(e, t = {}) {
                        if ("string" != typeof e && "function" != typeof e) throw new Error("source not a string or function");
                        const n = "string" == typeof e ? e : e.toString();
                        let i = [];
                        return i = Array.isArray(t.argumentTypes) ? t.argumentTypes : "object" == typeof t.argumentTypes ? r.getArgumentNamesFromString(n).map(e => t.argumentTypes[e]) || [] : t.argumentTypes || [], {
                            name: r.getFunctionNameFromString(n) || null,
                            source: n,
                            argumentTypes: i,
                            returnType: t.returnType || null
                        }
                    }
                    onActivate(e) {}
                }
            }
        }, {
            "../input": 110,
            "../utils": 114
        }],
        37: [function (e, t, n) {
            const r = `__HEADER__;\n__FLOAT_TACTIC_DECLARATION__;\n__INT_TACTIC_DECLARATION__;\n__SAMPLER_2D_TACTIC_DECLARATION__;\n\nconst int LOOP_MAX = __LOOP_MAX__;\n\n__PLUGINS__;\n__CONSTANTS__;\n\nvarying vec2 vTexCoord;\n\nfloat acosh(float x) {\n  return log(x + sqrt(x * x - 1.0));\n}\n\nfloat sinh(float x) {\n  return (pow(${Math.E}, x) - pow(${Math.E}, -x)) / 2.0;\n}\n\nfloat asinh(float x) {\n  return log(x + sqrt(x * x + 1.0));\n}\n\nfloat atan2(float v1, float v2) {\n  if (v1 == 0.0 || v2 == 0.0) return 0.0;\n  return atan(v1 / v2);\n}\n\nfloat atanh(float x) {\n  x = (x + 1.0) / (x - 1.0);\n  if (x < 0.0) {\n    return 0.5 * log(-x);\n  }\n  return 0.5 * log(x);\n}\n\nfloat cbrt(float x) {\n  if (x >= 0.0) {\n    return pow(x, 1.0 / 3.0);\n  } else {\n    return -pow(x, 1.0 / 3.0);\n  }\n}\n\nfloat cosh(float x) {\n  return (pow(${Math.E}, x) + pow(${Math.E}, -x)) / 2.0; \n}\n\nfloat expm1(float x) {\n  return pow(${Math.E}, x) - 1.0; \n}\n\nfloat fround(highp float x) {\n  return x;\n}\n\nfloat imul(float v1, float v2) {\n  return float(int(v1) * int(v2));\n}\n\nfloat log10(float x) {\n  return log2(x) * (1.0 / log2(10.0));\n}\n\nfloat log1p(float x) {\n  return log(1.0 + x);\n}\n\nfloat _pow(float v1, float v2) {\n  if (v2 == 0.0) return 1.0;\n  return pow(v1, v2);\n}\n\nfloat tanh(float x) {\n  float e = exp(2.0 * x);\n  return (e - 1.0) / (e + 1.0);\n}\n\nfloat trunc(float x) {\n  if (x >= 0.0) {\n    return floor(x); \n  } else {\n    return ceil(x);\n  }\n}\n\nvec4 _round(vec4 x) {\n  return floor(x + 0.5);\n}\n\nfloat _round(float x) {\n  return floor(x + 0.5);\n}\n\nconst int BIT_COUNT = 32;\nint modi(int x, int y) {\n  return x - y * (x / y);\n}\n\nint bitwiseOr(int a, int b) {\n  int result = 0;\n  int n = 1;\n  \n  for (int i = 0; i < BIT_COUNT; i++) {\n    if ((modi(a, 2) == 1) || (modi(b, 2) == 1)) {\n      result += n;\n    }\n    a = a / 2;\n    b = b / 2;\n    n = n * 2;\n    if(!(a > 0 || b > 0)) {\n      break;\n    }\n  }\n  return result;\n}\nint bitwiseXOR(int a, int b) {\n  int result = 0;\n  int n = 1;\n  \n  for (int i = 0; i < BIT_COUNT; i++) {\n    if ((modi(a, 2) == 1) != (modi(b, 2) == 1)) {\n      result += n;\n    }\n    a = a / 2;\n    b = b / 2;\n    n = n * 2;\n    if(!(a > 0 || b > 0)) {\n      break;\n    }\n  }\n  return result;\n}\nint bitwiseAnd(int a, int b) {\n  int result = 0;\n  int n = 1;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if ((modi(a, 2) == 1) && (modi(b, 2) == 1)) {\n      result += n;\n    }\n    a = a / 2;\n    b = b / 2;\n    n = n * 2;\n    if(!(a > 0 && b > 0)) {\n      break;\n    }\n  }\n  return result;\n}\nint bitwiseNot(int a) {\n  int result = 0;\n  int n = 1;\n  \n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (modi(a, 2) == 0) {\n      result += n;    \n    }\n    a = a / 2;\n    n = n * 2;\n  }\n  return result;\n}\nint bitwiseZeroFillLeftShift(int n, int shift) {\n  int maxBytes = BIT_COUNT;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (maxBytes >= n) {\n      break;\n    }\n    maxBytes *= 2;\n  }\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= shift) {\n      break;\n    }\n    n *= 2;\n  }\n\n  int result = 0;\n  int byteVal = 1;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= maxBytes) break;\n    if (modi(n, 2) > 0) { result += byteVal; }\n    n = int(n / 2);\n    byteVal *= 2;\n  }\n  return result;\n}\n\nint bitwiseSignedRightShift(int num, int shifts) {\n  return int(floor(float(num) / pow(2.0, float(shifts))));\n}\n\nint bitwiseZeroFillRightShift(int n, int shift) {\n  int maxBytes = BIT_COUNT;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (maxBytes >= n) {\n      break;\n    }\n    maxBytes *= 2;\n  }\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= shift) {\n      break;\n    }\n    n /= 2;\n  }\n  int result = 0;\n  int byteVal = 1;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= maxBytes) break;\n    if (modi(n, 2) > 0) { result += byteVal; }\n    n = int(n / 2);\n    byteVal *= 2;\n  }\n  return result;\n}\n\nvec2 integerMod(vec2 x, float y) {\n  vec2 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nvec3 integerMod(vec3 x, float y) {\n  vec3 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nvec4 integerMod(vec4 x, vec4 y) {\n  vec4 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nfloat integerMod(float x, float y) {\n  float res = floor(mod(x, y));\n  return res * (res > floor(y) - 1.0 ? 0.0 : 1.0);\n}\n\nint integerMod(int x, int y) {\n  return x - (y * int(x / y));\n}\n\n__DIVIDE_WITH_INTEGER_CHECK__;\n\n// Here be dragons!\n// DO NOT OPTIMIZE THIS CODE\n// YOU WILL BREAK SOMETHING ON SOMEBODY'S MACHINE\n// LEAVE IT AS IT IS, LEST YOU WASTE YOUR OWN TIME\nconst vec2 MAGIC_VEC = vec2(1.0, -256.0);\nconst vec4 SCALE_FACTOR = vec4(1.0, 256.0, 65536.0, 0.0);\nconst vec4 SCALE_FACTOR_INV = vec4(1.0, 0.00390625, 0.0000152587890625, 0.0); // 1, 1/256, 1/65536\nfloat decode32(vec4 texel) {\n  __DECODE32_ENDIANNESS__;\n  texel *= 255.0;\n  vec2 gte128;\n  gte128.x = texel.b >= 128.0 ? 1.0 : 0.0;\n  gte128.y = texel.a >= 128.0 ? 1.0 : 0.0;\n  float exponent = 2.0 * texel.a - 127.0 + dot(gte128, MAGIC_VEC);\n  float res = exp2(_round(exponent));\n  texel.b = texel.b - 128.0 * gte128.x;\n  res = dot(texel, SCALE_FACTOR) * exp2(_round(exponent-23.0)) + res;\n  res *= gte128.y * -2.0 + 1.0;\n  return res;\n}\n\nfloat decode16(vec4 texel, int index) {\n  int channel = integerMod(index, 2);\n  if (channel == 0) return texel.r * 255.0 + texel.g * 65280.0;\n  if (channel == 1) return texel.b * 255.0 + texel.a * 65280.0;\n  return 0.0;\n}\n\nfloat decode8(vec4 texel, int index) {\n  int channel = integerMod(index, 4);\n  if (channel == 0) return texel.r * 255.0;\n  if (channel == 1) return texel.g * 255.0;\n  if (channel == 2) return texel.b * 255.0;\n  if (channel == 3) return texel.a * 255.0;\n  return 0.0;\n}\n\nvec4 legacyEncode32(float f) {\n  float F = abs(f);\n  float sign = f < 0.0 ? 1.0 : 0.0;\n  float exponent = floor(log2(F));\n  float mantissa = (exp2(-exponent) * F);\n  // exponent += floor(log2(mantissa));\n  vec4 texel = vec4(F * exp2(23.0-exponent)) * SCALE_FACTOR_INV;\n  texel.rg = integerMod(texel.rg, 256.0);\n  texel.b = integerMod(texel.b, 128.0);\n  texel.a = exponent*0.5 + 63.5;\n  texel.ba += vec2(integerMod(exponent+127.0, 2.0), sign) * 128.0;\n  texel = floor(texel);\n  texel *= 0.003921569; // 1/255\n  __ENCODE32_ENDIANNESS__;\n  return texel;\n}\n\n// https://github.com/gpujs/gpu.js/wiki/Encoder-details\nvec4 encode32(float value) {\n  if (value == 0.0) return vec4(0, 0, 0, 0);\n\n  float exponent;\n  float mantissa;\n  vec4  result;\n  float sgn;\n\n  sgn = step(0.0, -value);\n  value = abs(value);\n\n  exponent = floor(log2(value));\n\n  mantissa = value*pow(2.0, -exponent)-1.0;\n  exponent = exponent+127.0;\n  result   = vec4(0,0,0,0);\n\n  result.a = floor(exponent/2.0);\n  exponent = exponent - result.a*2.0;\n  result.a = result.a + 128.0*sgn;\n\n  result.b = floor(mantissa * 128.0);\n  mantissa = mantissa - result.b / 128.0;\n  result.b = result.b + exponent*128.0;\n\n  result.g = floor(mantissa*32768.0);\n  mantissa = mantissa - result.g/32768.0;\n\n  result.r = floor(mantissa*8388608.0);\n  return result/255.0;\n}\n// Dragons end here\n\nint index;\nivec3 threadId;\n\nivec3 indexTo3D(int idx, ivec3 texDim) {\n  int z = int(idx / (texDim.x * texDim.y));\n  idx -= z * int(texDim.x * texDim.y);\n  int y = int(idx / texDim.x);\n  int x = int(integerMod(idx, texDim.x));\n  return ivec3(x, y, z);\n}\n\nfloat get32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture2D(tex, st / vec2(texSize));\n  return decode32(texel);\n}\n\nfloat get16(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x * 2;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture2D(tex, st / vec2(texSize.x * 2, texSize.y));\n  return decode16(texel, index);\n}\n\nfloat get8(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x * 4;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture2D(tex, st / vec2(texSize.x * 4, texSize.y));\n  return decode8(texel, index);\n}\n\nfloat getMemoryOptimized32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int channel = integerMod(index, 4);\n  index = index / 4;\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture2D(tex, st / vec2(texSize));\n  if (channel == 0) return texel.r;\n  if (channel == 1) return texel.g;\n  if (channel == 2) return texel.b;\n  if (channel == 3) return texel.a;\n  return 0.0;\n}\n\nvec4 getImage2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  return texture2D(tex, st / vec2(texSize));\n}\n\nfloat getFloatFromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n  return result[0];\n}\n\nvec2 getVec2FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n  return vec2(result[0], result[1]);\n}\n\nvec2 getMemoryOptimizedVec2(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + (texDim.x * (y + (texDim.y * z)));\n  int channel = integerMod(index, 2);\n  index = index / 2;\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture2D(tex, st / vec2(texSize));\n  if (channel == 0) return vec2(texel.r, texel.g);\n  if (channel == 1) return vec2(texel.b, texel.a);\n  return vec2(0.0, 0.0);\n}\n\nvec3 getVec3FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n  return vec3(result[0], result[1], result[2]);\n}\n\nvec3 getMemoryOptimizedVec3(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int fieldIndex = 3 * (x + texDim.x * (y + texDim.y * z));\n  int vectorIndex = fieldIndex / 4;\n  int vectorOffset = fieldIndex - vectorIndex * 4;\n  int readY = vectorIndex / texSize.x;\n  int readX = vectorIndex - readY * texSize.x;\n  vec4 tex1 = texture2D(tex, (vec2(readX, readY) + 0.5) / vec2(texSize));\n  \n  if (vectorOffset == 0) {\n    return tex1.xyz;\n  } else if (vectorOffset == 1) {\n    return tex1.yzw;\n  } else {\n    readX++;\n    if (readX >= texSize.x) {\n      readX = 0;\n      readY++;\n    }\n    vec4 tex2 = texture2D(tex, vec2(readX, readY) / vec2(texSize));\n    if (vectorOffset == 2) {\n      return vec3(tex1.z, tex1.w, tex2.x);\n    } else {\n      return vec3(tex1.w, tex2.x, tex2.y);\n    }\n  }\n}\n\nvec4 getVec4FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  return getImage2D(tex, texSize, texDim, z, y, x);\n}\n\nvec4 getMemoryOptimizedVec4(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int channel = integerMod(index, 2);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture2D(tex, st / vec2(texSize));\n  return vec4(texel.r, texel.g, texel.b, texel.a);\n}\n\nvec4 actualColor;\nvoid color(float r, float g, float b, float a) {\n  actualColor = vec4(r,g,b,a);\n}\n\nvoid color(float r, float g, float b) {\n  color(r,g,b,1.0);\n}\n\nvoid color(sampler2D image) {\n  actualColor = texture2D(image, vTexCoord);\n}\n\nfloat modulo(float number, float divisor) {\n  if (number < 0.0) {\n    number = abs(number);\n    if (divisor < 0.0) {\n      divisor = abs(divisor);\n    }\n    return -mod(number, divisor);\n  }\n  if (divisor < 0.0) {\n    divisor = abs(divisor);\n  }\n  return mod(number, divisor);\n}\n\n__INJECTED_NATIVE__;\n__MAIN_CONSTANTS__;\n__MAIN_ARGUMENTS__;\n__KERNEL__;\n\nvoid main(void) {\n  index = int(vTexCoord.s * float(uTexSize.x)) + int(vTexCoord.t * float(uTexSize.y)) * uTexSize.x;\n  __MAIN_RESULT__;\n}`;
            t.exports = {
                fragmentShader: r
            }
        }, {}],
        38: [function (e, t, n) {
            const {
                utils: r
            } = e("../../utils"), {
                FunctionNode: i
            } = e("../function-node");
            const s = {
                    Array: "sampler2D",
                    "Array(2)": "vec2",
                    "Array(3)": "vec3",
                    "Array(4)": "vec4",
                    Array2D: "sampler2D",
                    Array3D: "sampler2D",
                    Boolean: "bool",
                    Float: "float",
                    Input: "sampler2D",
                    Integer: "int",
                    Number: "float",
                    LiteralInteger: "float",
                    NumberTexture: "sampler2D",
                    MemoryOptimizedNumberTexture: "sampler2D",
                    "ArrayTexture(1)": "sampler2D",
                    "ArrayTexture(2)": "sampler2D",
                    "ArrayTexture(3)": "sampler2D",
                    "ArrayTexture(4)": "sampler2D",
                    HTMLVideo: "sampler2D",
                    HTMLCanvas: "sampler2D",
                    HTMLImage: "sampler2D",
                    HTMLImageArray: "sampler2DArray"
                },
                a = {
                    "===": "==",
                    "!==": "!="
                };
            t.exports = {
                WebGLFunctionNode: class extends i {
                    constructor(e, t) {
                        super(e, t), t && t.hasOwnProperty("fixIntegerDivisionAccuracy") && (this.fixIntegerDivisionAccuracy = t.fixIntegerDivisionAccuracy)
                    }
                    astConditionalExpression(e, t) {
                        if ("ConditionalExpression" !== e.type) throw this.astErrorOutput("Not a conditional expression", e);
                        const n = this.getType(e.consequent),
                            r = this.getType(e.alternate);
                        return null === n && null === r ? (t.push("if ("), this.astGeneric(e.test, t), t.push(") {"), this.astGeneric(e.consequent, t), t.push(";"), t.push("} else {"), this.astGeneric(e.alternate, t), t.push(";"), t.push("}"), t) : (t.push("("), this.astGeneric(e.test, t), t.push("?"), this.astGeneric(e.consequent, t), t.push(":"), this.astGeneric(e.alternate, t), t.push(")"), t)
                    }
                    astFunction(e, t) {
                        if (this.isRootKernel) t.push("void");
                        else {
                            this.returnType || this.findLastReturn() && (this.returnType = this.getType(e.body), "LiteralInteger" === this.returnType && (this.returnType = "Number"));
                            const {
                                returnType: n
                            } = this;
                            if (n) {
                                const e = s[n];
                                if (!e) throw new Error(`unknown type ${n}`);
                                t.push(e)
                            } else t.push("void")
                        }
                        if (t.push(" "), t.push(this.name), t.push("("), !this.isRootKernel)
                            for (let n = 0; n < this.argumentNames.length; ++n) {
                                const i = this.argumentNames[n];
                                n > 0 && t.push(", ");
                                let a = this.argumentTypes[this.argumentNames.indexOf(i)];
                                if (!a) throw this.astErrorOutput(`Unknown argument ${i} type`, e);
                                "LiteralInteger" === a && (this.argumentTypes[n] = a = "Number");
                                const o = s[a];
                                if (!o) throw this.astErrorOutput("Unexpected expression", e);
                                const u = r.sanitizeName(i);
                                "sampler2D" === o || "sampler2DArray" === o ? t.push(`${o} user_${u},ivec2 user_${u}Size,ivec3 user_${u}Dim`) : t.push(`${o} user_${u}`)
                            }
                        t.push(") {\n");
                        for (let n = 0; n < e.body.body.length; ++n) this.astGeneric(e.body.body[n], t), t.push("\n");
                        return t.push("}\n"), t
                    }
                    astReturnStatement(e, t) {
                        if (!e.argument) throw this.astErrorOutput("Unexpected return statement", e);
                        this.pushState("skip-literal-correction");
                        const n = this.getType(e.argument);
                        this.popState("skip-literal-correction");
                        const r = [];
                        switch (this.returnType || (this.returnType = "LiteralInteger" === n || "Integer" === n ? "Number" : n), this.returnType) {
                            case "LiteralInteger":
                            case "Number":
                            case "Float":
                                switch (n) {
                                    case "Integer":
                                        r.push("float("), this.astGeneric(e.argument, r), r.push(")");
                                        break;
                                    case "LiteralInteger":
                                        this.castLiteralToFloat(e.argument, r), "Integer" === this.getType(e) && (r.unshift("float("), r.push(")"));
                                        break;
                                    default:
                                        this.astGeneric(e.argument, r)
                                }
                                break;
                            case "Integer":
                                switch (n) {
                                    case "Float":
                                    case "Number":
                                        this.castValueToInteger(e.argument, r);
                                        break;
                                    case "LiteralInteger":
                                        this.castLiteralToInteger(e.argument, r);
                                        break;
                                    default:
                                        this.astGeneric(e.argument, r)
                                }
                                break;
                            case "Array(4)":
                            case "Array(3)":
                            case "Array(2)":
                            case "Input":
                                this.astGeneric(e.argument, r);
                                break;
                            default:
                                throw this.astErrorOutput(`unhandled return type ${this.returnType}`, e)
                        }
                        return this.isRootKernel ? (t.push(`kernelResult = ${r.join("")};`), t.push("return;")) : this.isSubKernel ? (t.push(`subKernelResult_${this.name} = ${r.join("")};`), t.push(`return subKernelResult_${this.name};`)) : t.push(`return ${r.join("")};`), t
                    }
                    astLiteral(e, t) {
                        if (isNaN(e.value)) throw this.astErrorOutput("Non-numeric literal not supported : " + e.value, e);
                        const n = this.astKey(e);
                        return Number.isInteger(e.value) ? this.isState("casting-to-integer") || this.isState("building-integer") ? (this.literalTypes[n] = "Integer", t.push(`${e.value}`)) : (this.isState("casting-to-float") || this.isState("building-float"), this.literalTypes[n] = "Number", t.push(`${e.value}.0`)) : this.isState("casting-to-integer") || this.isState("building-integer") ? (this.literalTypes[n] = "Integer", t.push(Math.round(e.value))) : (this.literalTypes[n] = "Number", t.push(`${e.value}`)), t
                    }
                    astBinaryExpression(e, t) {
                        if (this.checkAndUpconvertOperator(e, t)) return t;
                        if (this.fixIntegerDivisionAccuracy && "/" === e.operator) {
                            switch (t.push("divWithIntCheck("), this.pushState("building-float"), this.getType(e.left)) {
                                case "Integer":
                                    this.castValueToFloat(e.left, t);
                                    break;
                                case "LiteralInteger":
                                    this.castLiteralToFloat(e.left, t);
                                    break;
                                default:
                                    this.astGeneric(e.left, t)
                            }
                            switch (t.push(", "), this.getType(e.right)) {
                                case "Integer":
                                    this.castValueToFloat(e.right, t);
                                    break;
                                case "LiteralInteger":
                                    this.castLiteralToFloat(e.right, t);
                                    break;
                                default:
                                    this.astGeneric(e.right, t)
                            }
                            return this.popState("building-float"), t.push(")"), t
                        }
                        t.push("(");
                        const n = this.getType(e.left) || "Number",
                            r = this.getType(e.right) || "Number";
                        if (!n || !r) throw this.astErrorOutput("Unhandled binary expression", e);
                        const i = n + " & " + r;
                        switch (i) {
                            case "Integer & Integer":
                                this.pushState("building-integer"), this.astGeneric(e.left, t), t.push(a[e.operator] || e.operator), this.astGeneric(e.right, t), this.popState("building-integer");
                                break;
                            case "Number & Float":
                            case "Float & Number":
                            case "Float & Float":
                            case "Number & Number":
                                this.pushState("building-float"), this.astGeneric(e.left, t), t.push(a[e.operator] || e.operator), this.astGeneric(e.right, t), this.popState("building-float");
                                break;
                            case "LiteralInteger & LiteralInteger":
                                this.isState("casting-to-integer") || this.isState("building-integer") ? (this.pushState("building-integer"), this.astGeneric(e.left, t), t.push(a[e.operator] || e.operator), this.astGeneric(e.right, t), this.popState("building-integer")) : (this.pushState("building-float"), this.castLiteralToFloat(e.left, t), t.push(a[e.operator] || e.operator), this.castLiteralToFloat(e.right, t), this.popState("building-float"));
                                break;
                            case "Integer & Float":
                            case "Integer & Number":
                                if ((">" === e.operator || "<" === e.operator && "Literal" === e.right.type) && !Number.isInteger(e.right.value)) {
                                    this.pushState("building-float"), this.castValueToFloat(e.left, t), t.push(a[e.operator] || e.operator), this.astGeneric(e.right, t), this.popState("building-float");
                                    break
                                }
                                if (this.pushState("building-integer"), this.astGeneric(e.left, t), t.push(a[e.operator] || e.operator), this.pushState("casting-to-integer"), "Literal" === e.right.type) {
                                    const n = [];
                                    if (this.astGeneric(e.right, n), "Integer" !== this.getType(e.right)) throw this.astErrorOutput("Unhandled binary expression with literal", e);
                                    t.push(n.join(""))
                                } else t.push("int("), this.astGeneric(e.right, t), t.push(")");
                                this.popState("casting-to-integer"), this.popState("building-integer");
                                break;
                            case "Integer & LiteralInteger":
                                this.pushState("building-integer"), this.astGeneric(e.left, t), t.push(a[e.operator] || e.operator), this.castLiteralToInteger(e.right, t), this.popState("building-integer");
                                break;
                            case "Number & Integer":
                                this.pushState("building-float"), this.astGeneric(e.left, t), t.push(a[e.operator] || e.operator), this.castValueToFloat(e.right, t), this.popState("building-float");
                                break;
                            case "Float & LiteralInteger":
                            case "Number & LiteralInteger":
                                this.pushState("building-float"), this.astGeneric(e.left, t), t.push(a[e.operator] || e.operator), this.castLiteralToFloat(e.right, t), this.popState("building-float");
                                break;
                            case "LiteralInteger & Float":
                            case "LiteralInteger & Number":
                                this.isState("casting-to-integer") ? (this.pushState("building-integer"), this.castLiteralToInteger(e.left, t), t.push(a[e.operator] || e.operator), this.castValueToInteger(e.right, t), this.popState("building-integer")) : (this.pushState("building-float"), this.astGeneric(e.left, t), t.push(a[e.operator] || e.operator), this.pushState("casting-to-float"), this.astGeneric(e.right, t), this.popState("casting-to-float"), this.popState("building-float"));
                                break;
                            case "LiteralInteger & Integer":
                                this.pushState("building-integer"), this.castLiteralToInteger(e.left, t), t.push(a[e.operator] || e.operator), this.astGeneric(e.right, t), this.popState("building-integer");
                                break;
                            case "Boolean & Boolean":
                                this.pushState("building-boolean"), this.astGeneric(e.left, t), t.push(a[e.operator] || e.operator), this.astGeneric(e.right, t), this.popState("building-boolean");
                                break;
                            case "Float & Integer":
                                this.pushState("building-float"), this.astGeneric(e.left, t), t.push(a[e.operator] || e.operator), this.castValueToFloat(e.right, t), this.popState("building-float");
                                break;
                            default:
                                throw this.astErrorOutput(`Unhandled binary expression between ${i}`, e)
                        }
                        return t.push(")"), t
                    }
                    checkAndUpconvertOperator(e, t) {
                        const n = this.checkAndUpconvertBitwiseOperators(e, t);
                        if (n) return n;
                        const r = {
                            "%": this.fixIntegerDivisionAccuracy ? "integerCorrectionModulo" : "modulo",
                            "**": "pow"
                        } [e.operator];
                        if (!r) return null;
                        switch (t.push(r), t.push("("), this.getType(e.left)) {
                            case "Integer":
                                this.castValueToFloat(e.left, t);
                                break;
                            case "LiteralInteger":
                                this.castLiteralToFloat(e.left, t);
                                break;
                            default:
                                this.astGeneric(e.left, t)
                        }
                        switch (t.push(","), this.getType(e.right)) {
                            case "Integer":
                                this.castValueToFloat(e.right, t);
                                break;
                            case "LiteralInteger":
                                this.castLiteralToFloat(e.right, t);
                                break;
                            default:
                                this.astGeneric(e.right, t)
                        }
                        return t.push(")"), t
                    }
                    checkAndUpconvertBitwiseOperators(e, t) {
                        const n = {
                            "&": "bitwiseAnd",
                            "|": "bitwiseOr",
                            "^": "bitwiseXOR",
                            "<<": "bitwiseZeroFillLeftShift",
                            ">>": "bitwiseSignedRightShift",
                            ">>>": "bitwiseZeroFillRightShift"
                        } [e.operator];
                        if (!n) return null;
                        switch (t.push(n), t.push("("), this.getType(e.left)) {
                            case "Number":
                            case "Float":
                                this.castValueToInteger(e.left, t);
                                break;
                            case "LiteralInteger":
                                this.castLiteralToInteger(e.left, t);
                                break;
                            default:
                                this.astGeneric(e.left, t)
                        }
                        switch (t.push(","), this.getType(e.right)) {
                            case "Number":
                            case "Float":
                                this.castValueToInteger(e.right, t);
                                break;
                            case "LiteralInteger":
                                this.castLiteralToInteger(e.right, t);
                                break;
                            default:
                                this.astGeneric(e.right, t)
                        }
                        return t.push(")"), t
                    }
                    checkAndUpconvertBitwiseUnary(e, t) {
                        const n = {
                            "~": "bitwiseNot"
                        } [e.operator];
                        if (!n) return null;
                        switch (t.push(n), t.push("("), this.getType(e.argument)) {
                            case "Number":
                            case "Float":
                                this.castValueToInteger(e.argument, t);
                                break;
                            case "LiteralInteger":
                                this.castLiteralToInteger(e.argument, t);
                                break;
                            default:
                                this.astGeneric(e.argument, t)
                        }
                        return t.push(")"), t
                    }
                    castLiteralToInteger(e, t) {
                        return this.pushState("casting-to-integer"), this.astGeneric(e, t), this.popState("casting-to-integer"), t
                    }
                    castLiteralToFloat(e, t) {
                        return this.pushState("casting-to-float"), this.astGeneric(e, t), this.popState("casting-to-float"), t
                    }
                    castValueToInteger(e, t) {
                        return this.pushState("casting-to-integer"), t.push("int("), this.astGeneric(e, t), t.push(")"), this.popState("casting-to-integer"), t
                    }
                    castValueToFloat(e, t) {
                        return this.pushState("casting-to-float"), t.push("float("), this.astGeneric(e, t), t.push(")"), this.popState("casting-to-float"), t
                    }
                    astIdentifierExpression(e, t) {
                        if ("Identifier" !== e.type) throw this.astErrorOutput("IdentifierExpression - not an Identifier", e);
                        const n = this.getType(e),
                            i = r.sanitizeName(e.name);
                        return "Infinity" === e.name ? t.push("3.402823466e+38") : "Boolean" === n && this.argumentNames.indexOf(i) > -1 ? t.push(`bool(user_${i})`) : t.push(`user_${i}`), t
                    }
                    astForStatement(e, t) {
                        if ("ForStatement" !== e.type) throw this.astErrorOutput("Invalid for statement", e);
                        const n = [],
                            r = [],
                            i = [],
                            s = [];
                        let a = null;
                        if (e.init) {
                            const {
                                declarations: t
                            } = e.init;
                            t.length > 1 && (a = !1), this.astGeneric(e.init, n);
                            for (let e = 0; e < t.length; e++) t[e].init && "Literal" !== t[e].init.type && (a = !1)
                        } else a = !1;
                        if (e.test ? this.astGeneric(e.test, r) : a = !1, e.update ? this.astGeneric(e.update, i) : a = !1, e.body && (this.pushState("loop-body"), this.astGeneric(e.body, s), this.popState("loop-body")), null === a && (a = this.isSafe(e.init) && this.isSafe(e.test)), a) {
                            const e = n.join(""),
                                a = ";" !== e[e.length - 1];
                            t.push(`for (${e}${a?";":""}${r.join("")};${i.join("")}){\n`), t.push(s.join("")), t.push("}\n")
                        } else {
                            const e = this.getInternalVariableName("safeI");
                            n.length > 0 && t.push(n.join(""), "\n"), t.push(`for (int ${e}=0;${e}<LOOP_MAX;${e}++){\n`), r.length > 0 && t.push(`if (!${r.join("")}) break;\n`), t.push(s.join("")), t.push(`\n${i.join("")};`), t.push("}\n")
                        }
                        return t
                    }
                    astWhileStatement(e, t) {
                        if ("WhileStatement" !== e.type) throw this.astErrorOutput("Invalid while statement", e);
                        const n = this.getInternalVariableName("safeI");
                        return t.push(`for (int ${n}=0;${n}<LOOP_MAX;${n}++){\n`), t.push("if (!"), this.astGeneric(e.test, t), t.push(") break;\n"), this.astGeneric(e.body, t), t.push("}\n"), t
                    }
                    astDoWhileStatement(e, t) {
                        if ("DoWhileStatement" !== e.type) throw this.astErrorOutput("Invalid while statement", e);
                        const n = this.getInternalVariableName("safeI");
                        return t.push(`for (int ${n}=0;${n}<LOOP_MAX;${n}++){\n`), this.astGeneric(e.body, t), t.push("if (!"), this.astGeneric(e.test, t), t.push(") break;\n"), t.push("}\n"), t
                    }
                    astAssignmentExpression(e, t) {
                        if ("%=" === e.operator) this.astGeneric(e.left, t), t.push("="), t.push("mod("), this.astGeneric(e.left, t), t.push(","), this.astGeneric(e.right, t), t.push(")");
                        else {
                            if ("**=" !== e.operator) {
                                const n = this.getType(e.left),
                                    r = this.getType(e.right);
                                return this.astGeneric(e.left, t), t.push(e.operator), "Integer" !== n && "Integer" === r ? (t.push("float("), this.astGeneric(e.right, t), t.push(")")) : this.astGeneric(e.right, t), t
                            }
                            this.astGeneric(e.left, t), t.push("="), t.push("pow("), this.astGeneric(e.left, t), t.push(","), this.astGeneric(e.right, t), t.push(")")
                        }
                    }
                    astBlockStatement(e, t) {
                        if (this.isState("loop-body")) {
                            this.pushState("block-body");
                            for (let n = 0; n < e.body.length; n++) this.astGeneric(e.body[n], t);
                            this.popState("block-body")
                        } else {
                            t.push("{\n");
                            for (let n = 0; n < e.body.length; n++) this.astGeneric(e.body[n], t);
                            t.push("}\n")
                        }
                        return t
                    }
                    astVariableDeclaration(e, t) {
                        const n = e.declarations;
                        if (!n || !n[0] || !n[0].init) throw this.astErrorOutput("Unexpected expression", e);
                        const i = [];
                        let a = null;
                        const o = [];
                        let u = [];
                        for (let t = 0; t < n.length; t++) {
                            const i = n[t],
                                l = i.init,
                                h = this.getDeclaration(i.id),
                                c = this.getType(i.init);
                            let p = c;
                            "LiteralInteger" === p && (p = "Integer" === h.suggestedType ? "Integer" : "Number");
                            const d = s[p];
                            if (!d) throw this.astErrorOutput(`Markup type ${d} not handled`, e);
                            const m = [];
                            if ("Integer" === c && "Integer" === p) {
                                if (h.valueType = "Number", 0 === t || null === a) m.push("float ");
                                else if (p !== a) throw new Error("Unhandled declaration");
                                a = p, m.push(`user_${r.sanitizeName(i.id.name)}=`), m.push("float("), this.astGeneric(l, m), m.push(")")
                            } else h.valueType = p, 0 === t || null === a ? m.push(`${d} `) : p !== a && (o.push(u.join(",")), u = [], m.push(`${d} `)), a = p, m.push(`user_${r.sanitizeName(i.id.name)}=`), "Number" === c && "Integer" === p ? l.left && "Literal" === l.left.type ? this.astGeneric(l, m) : (m.push("int("), this.astGeneric(l, m), m.push(")")) : "LiteralInteger" === c && "Integer" === p ? this.castLiteralToInteger(l, m) : this.astGeneric(l, m);
                            u.push(m.join(""))
                        }
                        return u.length > 0 && o.push(u.join(",")), i.push(o.join(";")), t.push(i.join("")), t.push(";"), t
                    }
                    astIfStatement(e, t) {
                        return t.push("if ("), this.astGeneric(e.test, t), t.push(")"), "BlockStatement" === e.consequent.type ? this.astGeneric(e.consequent, t) : (t.push(" {\n"), this.astGeneric(e.consequent, t), t.push("\n}\n")), e.alternate && (t.push("else "), "BlockStatement" === e.alternate.type || "IfStatement" === e.alternate.type ? this.astGeneric(e.alternate, t) : (t.push(" {\n"), this.astGeneric(e.alternate, t), t.push("\n}\n"))), t
                    }
                    astSwitchStatement(e, t) {
                        if ("SwitchStatement" !== e.type) throw this.astErrorOutput("Invalid switch statement", e);
                        const {
                            discriminant: n,
                            cases: r
                        } = e, i = this.getType(n), s = `switchDiscriminant${this.astKey(e,"_")}`;
                        switch (i) {
                            case "Float":
                            case "Number":
                                t.push(`float ${s} = `), this.astGeneric(n, t), t.push(";\n");
                                break;
                            case "Integer":
                                t.push(`int ${s} = `), this.astGeneric(n, t), t.push(";\n")
                        }
                        if (1 === r.length && !r[0].test) return this.astGeneric(r[0].consequent, t), t;
                        let a = !1,
                            o = [],
                            u = !1,
                            l = !1;
                        for (let e = 0; e < r.length; e++) {
                            if (r[e].test) {
                                if (0 !== e && l ? a ? (t.push(`${s} == `), a = !1) : t.push(` else if (${s} == `) : (l = !0, t.push(`if (${s} == `)), "Integer" === i) switch (this.getType(r[e].test)) {
                                    case "Number":
                                    case "Float":
                                        this.castValueToInteger(r[e].test, t);
                                        break;
                                    case "LiteralInteger":
                                        this.castLiteralToInteger(r[e].test, t)
                                } else {
                                    if ("Float" !== i) throw new Error("unhanlded");
                                    switch (this.getType(r[e].test)) {
                                        case "LiteralInteger":
                                            this.castLiteralToFloat(r[e].test, t);
                                            break;
                                        case "Integer":
                                            this.castValueToFloat(r[e].test, t)
                                    }
                                }
                                if (!r[e].consequent || 0 === r[e].consequent.length) {
                                    a = !0, t.push(" || ");
                                    continue
                                }
                                t.push(") {\n")
                            } else {
                                if (r.length > e + 1) {
                                    u = !0, this.astGeneric(r[e].consequent, o);
                                    continue
                                }
                                t.push(" else {\n")
                            }
                            this.astGeneric(r[e].consequent, t), t.push("\n}")
                        }
                        return u && (t.push(" else {"), t.push(o.join("")), t.push("}")), t
                    }
                    astThisExpression(e, t) {
                        return t.push("this"), t
                    }
                    astMemberExpression(e, t) {
                        const {
                            property: n,
                            name: i,
                            signature: s,
                            origin: a,
                            type: o,
                            xProperty: u,
                            yProperty: l,
                            zProperty: h
                        } = this.getMemberExpressionDetails(e);
                        switch (s) {
                            case "value.thread.value":
                            case "this.thread.value":
                                if ("x" !== i && "y" !== i && "z" !== i) throw this.astErrorOutput("Unexpected expression, expected `this.thread.x`, `this.thread.y`, or `this.thread.z`", e);
                                return t.push(`threadId.${i}`), t;
                            case "this.output.value":
                                if (this.dynamicOutput) switch (i) {
                                    case "x":
                                        this.isState("casting-to-float") ? t.push("float(uOutputDim.x)") : t.push("uOutputDim.x");
                                        break;
                                    case "y":
                                        this.isState("casting-to-float") ? t.push("float(uOutputDim.y)") : t.push("uOutputDim.y");
                                        break;
                                    case "z":
                                        this.isState("casting-to-float") ? t.push("float(uOutputDim.z)") : t.push("uOutputDim.z");
                                        break;
                                    default:
                                        throw this.astErrorOutput("Unexpected expression", e)
                                } else switch (i) {
                                    case "x":
                                        this.isState("casting-to-integer") ? t.push(this.output[0]) : t.push(this.output[0], ".0");
                                        break;
                                    case "y":
                                        this.isState("casting-to-integer") ? t.push(this.output[1]) : t.push(this.output[1], ".0");
                                        break;
                                    case "z":
                                        this.isState("casting-to-integer") ? t.push(this.output[2]) : t.push(this.output[2], ".0");
                                        break;
                                    default:
                                        throw this.astErrorOutput("Unexpected expression", e)
                                }
                                return t;
                            case "value":
                                throw this.astErrorOutput("Unexpected expression", e);
                            case "value[]":
                            case "value[][]":
                            case "value[][][]":
                            case "value[][][][]":
                            case "value.value":
                                if ("Math" === a) return t.push(Math[i]), t;
                                const l = r.sanitizeName(i);
                                switch (n) {
                                    case "r":
                                        return t.push(`user_${l}.r`), t;
                                    case "g":
                                        return t.push(`user_${l}.g`), t;
                                    case "b":
                                        return t.push(`user_${l}.b`), t;
                                    case "a":
                                        return t.push(`user_${l}.a`), t
                                }
                                break;
                            case "this.constants.value":
                                if (void 0 === u) switch (o) {
                                    case "Array(2)":
                                    case "Array(3)":
                                    case "Array(4)":
                                        return t.push(`constants_${r.sanitizeName(i)}`), t
                                }
                                case "this.constants.value[]":
                            case "this.constants.value[][]":
                            case "this.constants.value[][][]":
                            case "this.constants.value[][][][]":
                                break;
                            case "fn()[]":
                                return this.astCallExpression(e.object, t), t.push("["), t.push(this.memberExpressionPropertyMarkup(n)), t.push("]"), t;
                            case "[][]":
                                return this.astArrayExpression(e.object, t), t.push("["), t.push(this.memberExpressionPropertyMarkup(n)), t.push("]"), t;
                            case "value.value[]":
                            case "value.value[][]":
                                if (this.removeIstanbulCoverage) return t;
                            default:
                                throw this.astErrorOutput("Unexpected expression", e)
                        }
                        if (!1 === e.computed) switch (o) {
                            case "Number":
                            case "Integer":
                            case "Float":
                            case "Boolean":
                                return t.push(`${a}_${r.sanitizeName(i)}`), t
                        }
                        const c = `${a}_${r.sanitizeName(i)}`;
                        switch (o) {
                            case "Array(2)":
                            case "Array(3)":
                            case "Array(4)":
                                this.astGeneric(e.object, t), t.push("["), t.push(this.memberExpressionPropertyMarkup(u)), t.push("]");
                                break;
                            case "HTMLImageArray":
                                t.push(`getImage3D(${c}, ${c}Size, ${c}Dim, `), this.memberExpressionXYZ(u, l, h, t), t.push(")");
                                break;
                            case "ArrayTexture(1)":
                                t.push(`getFloatFromSampler2D(${c}, ${c}Size, ${c}Dim, `), this.memberExpressionXYZ(u, l, h, t), t.push(")");
                                break;
                            case "Array1D(2)":
                            case "Array2D(2)":
                            case "Array3D(2)":
                                t.push(`getMemoryOptimizedVec2(${c}, ${c}Size, ${c}Dim, `), this.memberExpressionXYZ(u, l, h, t), t.push(")");
                                break;
                            case "ArrayTexture(2)":
                                t.push(`getVec2FromSampler2D(${c}, ${c}Size, ${c}Dim, `), this.memberExpressionXYZ(u, l, h, t), t.push(")");
                                break;
                            case "Array1D(3)":
                            case "Array2D(3)":
                            case "Array3D(3)":
                                t.push(`getMemoryOptimizedVec3(${c}, ${c}Size, ${c}Dim, `), this.memberExpressionXYZ(u, l, h, t), t.push(")");
                                break;
                            case "ArrayTexture(3)":
                                t.push(`getVec3FromSampler2D(${c}, ${c}Size, ${c}Dim, `), this.memberExpressionXYZ(u, l, h, t), t.push(")");
                                break;
                            case "Array1D(4)":
                            case "Array2D(4)":
                            case "Array3D(4)":
                                t.push(`getMemoryOptimizedVec4(${c}, ${c}Size, ${c}Dim, `), this.memberExpressionXYZ(u, l, h, t), t.push(")");
                                break;
                            case "ArrayTexture(4)":
                            case "HTMLCanvas":
                            case "HTMLImage":
                            case "HTMLVideo":
                                t.push(`getVec4FromSampler2D(${c}, ${c}Size, ${c}Dim, `), this.memberExpressionXYZ(u, l, h, t), t.push(")");
                                break;
                            case "NumberTexture":
                            case "Array":
                            case "Array2D":
                            case "Array3D":
                            case "Array4D":
                            case "Input":
                            case "Number":
                            case "Float":
                            case "Integer":
                                if ("single" === this.precision) t.push(`getMemoryOptimized32(${c}, ${c}Size, ${c}Dim, `), this.memberExpressionXYZ(u, l, h, t), t.push(")");
                                else {
                                    const e = "user" === a ? this.lookupFunctionArgumentBitRatio(this.name, i) : this.constantBitRatios[i];
                                    switch (e) {
                                        case 1:
                                            t.push(`get8(${c}, ${c}Size, ${c}Dim, `);
                                            break;
                                        case 2:
                                            t.push(`get16(${c}, ${c}Size, ${c}Dim, `);
                                            break;
                                        case 4:
                                        case 0:
                                            t.push(`get32(${c}, ${c}Size, ${c}Dim, `);
                                            break;
                                        default:
                                            throw new Error(`unhandled bit ratio of ${e}`)
                                    }
                                    this.memberExpressionXYZ(u, l, h, t), t.push(")")
                                }
                                break;
                            case "MemoryOptimizedNumberTexture":
                                t.push(`getMemoryOptimized32(${c}, ${c}Size, ${c}Dim, `), this.memberExpressionXYZ(u, l, h, t), t.push(")");
                                break;
                            default:
                                throw new Error(`unhandled member expression "${o}"`)
                        }
                        return t
                    }
                    astCallExpression(e, t) {
                        if (!e.callee) throw this.astErrorOutput("Unknown CallExpression", e);
                        let n = null;
                        const i = this.isAstMathFunction(e);
                        if (!(n = i || e.callee.object && "ThisExpression" === e.callee.object.type ? e.callee.property.name : "SequenceExpression" !== e.callee.type || "Literal" !== e.callee.expressions[0].type || isNaN(e.callee.expressions[0].raw) ? e.callee.name : e.callee.expressions[1].property.name)) throw this.astErrorOutput("Unhandled function, couldn't find name", e);
                        switch (n) {
                            case "pow":
                                n = "_pow";
                                break;
                            case "round":
                                n = "_round"
                        }
                        if (this.calledFunctions.indexOf(n) < 0 && this.calledFunctions.push(n), "random" === n && this.plugins && this.plugins.length > 0)
                            for (let e = 0; e < this.plugins.length; e++) {
                                const n = this.plugins[e];
                                if ("Math.random()" === n.functionMatch && n.functionReplace) return t.push(n.functionReplace), t
                            }
                        if (this.onFunctionCall && this.onFunctionCall(this.name, n, e.arguments), t.push(n), t.push("("), i)
                            for (let n = 0; n < e.arguments.length; ++n) {
                                const r = e.arguments[n],
                                    i = this.getType(r);
                                switch (n > 0 && t.push(", "), i) {
                                    case "Integer":
                                        this.castValueToFloat(r, t);
                                        break;
                                    default:
                                        this.astGeneric(r, t)
                                }
                            } else {
                                const i = this.lookupFunctionArgumentTypes(n) || [];
                                for (let s = 0; s < e.arguments.length; ++s) {
                                    const a = e.arguments[s];
                                    let o = i[s];
                                    s > 0 && t.push(", ");
                                    const u = this.getType(a);
                                    switch (o || (this.triggerImplyArgumentType(n, s, u, this), o = u), u) {
                                        case "Boolean":
                                            this.astGeneric(a, t);
                                            continue;
                                        case "Number":
                                        case "Float":
                                            if ("Integer" === o) {
                                                t.push("int("), this.astGeneric(a, t), t.push(")");
                                                continue
                                            }
                                            if ("Number" === o || "Float" === o) {
                                                this.astGeneric(a, t);
                                                continue
                                            }
                                            if ("LiteralInteger" === o) {
                                                this.castLiteralToFloat(a, t);
                                                continue
                                            }
                                            break;
                                        case "Integer":
                                            if ("Number" === o || "Float" === o) {
                                                t.push("float("), this.astGeneric(a, t), t.push(")");
                                                continue
                                            }
                                            if ("Integer" === o) {
                                                this.astGeneric(a, t);
                                                continue
                                            }
                                            break;
                                        case "LiteralInteger":
                                            if ("Integer" === o) {
                                                this.castLiteralToInteger(a, t);
                                                continue
                                            }
                                            if ("Number" === o || "Float" === o) {
                                                this.castLiteralToFloat(a, t);
                                                continue
                                            }
                                            if ("LiteralInteger" === o) {
                                                this.astGeneric(a, t);
                                                continue
                                            }
                                            break;
                                        case "Array(2)":
                                        case "Array(3)":
                                        case "Array(4)":
                                            if (o === u) {
                                                if ("Identifier" === a.type) t.push(`user_${r.sanitizeName(a.name)}`);
                                                else {
                                                    if ("ArrayExpression" !== a.type && "MemberExpression" !== a.type && "CallExpression" !== a.type) throw this.astErrorOutput(`Unhandled argument type ${a.type}`, e);
                                                    this.astGeneric(a, t)
                                                }
                                                continue
                                            }
                                            break;
                                        case "HTMLCanvas":
                                        case "HTMLImage":
                                        case "HTMLImageArray":
                                        case "HTMLVideo":
                                        case "ArrayTexture(1)":
                                        case "ArrayTexture(2)":
                                        case "ArrayTexture(3)":
                                        case "ArrayTexture(4)":
                                        case "Array":
                                        case "Input":
                                            if (o === u) {
                                                if ("Identifier" !== a.type) throw this.astErrorOutput(`Unhandled argument type ${a.type}`, e);
                                                this.triggerImplyArgumentBitRatio(this.name, a.name, n, s);
                                                const i = r.sanitizeName(a.name);
                                                t.push(`user_${i},user_${i}Size,user_${i}Dim`);
                                                continue
                                            }
                                    }
                                    throw this.astErrorOutput(`Unhandled argument combination of ${u} and ${o} for argument named "${a.name}"`, e)
                                }
                            }
                        return t.push(")"), t
                    }
                    astArrayExpression(e, t) {
                        const n = e.elements.length;
                        t.push("vec" + n + "(");
                        for (let r = 0; r < n; ++r) {
                            r > 0 && t.push(", ");
                            const n = e.elements[r];
                            this.astGeneric(n, t)
                        }
                        return t.push(")"), t
                    }
                    memberExpressionXYZ(e, t, n, r) {
                        return n ? r.push(this.memberExpressionPropertyMarkup(n), ", ") : r.push("0, "), t ? r.push(this.memberExpressionPropertyMarkup(t), ", ") : r.push("0, "), r.push(this.memberExpressionPropertyMarkup(e)), r
                    }
                    memberExpressionPropertyMarkup(e) {
                        if (!e) throw new Error("Property not set");
                        const t = [];
                        switch (this.getType(e)) {
                            case "Number":
                            case "Float":
                                this.castValueToInteger(e, t);
                                break;
                            case "LiteralInteger":
                                this.castLiteralToInteger(e, t);
                                break;
                            default:
                                this.astGeneric(e, t)
                        }
                        return t.join("")
                    }
                }
            }
        }, {
            "../../utils": 114,
            "../function-node": 10
        }],
        39: [function (e, t, n) {
            const {
                WebGLKernelValueBoolean: r
            } = e("./kernel-value/boolean"), {
                WebGLKernelValueFloat: i
            } = e("./kernel-value/float"), {
                WebGLKernelValueInteger: s
            } = e("./kernel-value/integer"), {
                WebGLKernelValueHTMLImage: a
            } = e("./kernel-value/html-image"), {
                WebGLKernelValueDynamicHTMLImage: o
            } = e("./kernel-value/dynamic-html-image"), {
                WebGLKernelValueHTMLVideo: u
            } = e("./kernel-value/html-video"), {
                WebGLKernelValueDynamicHTMLVideo: l
            } = e("./kernel-value/dynamic-html-video"), {
                WebGLKernelValueSingleInput: h
            } = e("./kernel-value/single-input"), {
                WebGLKernelValueDynamicSingleInput: c
            } = e("./kernel-value/dynamic-single-input"), {
                WebGLKernelValueUnsignedInput: p
            } = e("./kernel-value/unsigned-input"), {
                WebGLKernelValueDynamicUnsignedInput: d
            } = e("./kernel-value/dynamic-unsigned-input"), {
                WebGLKernelValueMemoryOptimizedNumberTexture: m
            } = e("./kernel-value/memory-optimized-number-texture"), {
                WebGLKernelValueDynamicMemoryOptimizedNumberTexture: g
            } = e("./kernel-value/dynamic-memory-optimized-number-texture"), {
                WebGLKernelValueNumberTexture: f
            } = e("./kernel-value/number-texture"), {
                WebGLKernelValueDynamicNumberTexture: x
            } = e("./kernel-value/dynamic-number-texture"), {
                WebGLKernelValueSingleArray: y
            } = e("./kernel-value/single-array"), {
                WebGLKernelValueDynamicSingleArray: b
            } = e("./kernel-value/dynamic-single-array"), {
                WebGLKernelValueSingleArray1DI: T
            } = e("./kernel-value/single-array1d-i"), {
                WebGLKernelValueDynamicSingleArray1DI: v
            } = e("./kernel-value/dynamic-single-array1d-i"), {
                WebGLKernelValueSingleArray2DI: S
            } = e("./kernel-value/single-array2d-i"), {
                WebGLKernelValueDynamicSingleArray2DI: A
            } = e("./kernel-value/dynamic-single-array2d-i"), {
                WebGLKernelValueSingleArray3DI: _
            } = e("./kernel-value/single-array3d-i"), {
                WebGLKernelValueDynamicSingleArray3DI: E
            } = e("./kernel-value/dynamic-single-array3d-i"), {
                WebGLKernelValueSingleArray2: w
            } = e("./kernel-value/single-array2"), {
                WebGLKernelValueSingleArray3: k
            } = e("./kernel-value/single-array3"), {
                WebGLKernelValueSingleArray4: I
            } = e("./kernel-value/single-array4"), {
                WebGLKernelValueUnsignedArray: D
            } = e("./kernel-value/unsigned-array"), {
                WebGLKernelValueDynamicUnsignedArray: C
            } = e("./kernel-value/dynamic-unsigned-array"), $ = {
                unsigned: {
                    dynamic: {
                        Boolean: r,
                        Integer: s,
                        Float: i,
                        Array: C,
                        "Array(2)": !1,
                        "Array(3)": !1,
                        "Array(4)": !1,
                        "Array1D(2)": !1,
                        "Array1D(3)": !1,
                        "Array1D(4)": !1,
                        "Array2D(2)": !1,
                        "Array2D(3)": !1,
                        "Array2D(4)": !1,
                        "Array3D(2)": !1,
                        "Array3D(3)": !1,
                        "Array3D(4)": !1,
                        Input: d,
                        NumberTexture: x,
                        "ArrayTexture(1)": x,
                        "ArrayTexture(2)": x,
                        "ArrayTexture(3)": x,
                        "ArrayTexture(4)": x,
                        MemoryOptimizedNumberTexture: g,
                        HTMLCanvas: o,
                        HTMLImage: o,
                        HTMLImageArray: !1,
                        HTMLVideo: l
                    },
                    static: {
                        Boolean: r,
                        Float: i,
                        Integer: s,
                        Array: D,
                        "Array(2)": !1,
                        "Array(3)": !1,
                        "Array(4)": !1,
                        "Array1D(2)": !1,
                        "Array1D(3)": !1,
                        "Array1D(4)": !1,
                        "Array2D(2)": !1,
                        "Array2D(3)": !1,
                        "Array2D(4)": !1,
                        "Array3D(2)": !1,
                        "Array3D(3)": !1,
                        "Array3D(4)": !1,
                        Input: p,
                        NumberTexture: f,
                        "ArrayTexture(1)": f,
                        "ArrayTexture(2)": f,
                        "ArrayTexture(3)": f,
                        "ArrayTexture(4)": f,
                        MemoryOptimizedNumberTexture: m,
                        HTMLCanvas: a,
                        HTMLImage: a,
                        HTMLImageArray: !1,
                        HTMLVideo: u
                    }
                },
                single: {
                    dynamic: {
                        Boolean: r,
                        Integer: s,
                        Float: i,
                        Array: b,
                        "Array(2)": w,
                        "Array(3)": k,
                        "Array(4)": I,
                        "Array1D(2)": v,
                        "Array1D(3)": v,
                        "Array1D(4)": v,
                        "Array2D(2)": A,
                        "Array2D(3)": A,
                        "Array2D(4)": A,
                        "Array3D(2)": E,
                        "Array3D(3)": E,
                        "Array3D(4)": E,
                        Input: c,
                        NumberTexture: x,
                        "ArrayTexture(1)": x,
                        "ArrayTexture(2)": x,
                        "ArrayTexture(3)": x,
                        "ArrayTexture(4)": x,
                        MemoryOptimizedNumberTexture: g,
                        HTMLCanvas: o,
                        HTMLImage: o,
                        HTMLImageArray: !1,
                        HTMLVideo: l
                    },
                    static: {
                        Boolean: r,
                        Float: i,
                        Integer: s,
                        Array: y,
                        "Array(2)": w,
                        "Array(3)": k,
                        "Array(4)": I,
                        "Array1D(2)": T,
                        "Array1D(3)": T,
                        "Array1D(4)": T,
                        "Array2D(2)": S,
                        "Array2D(3)": S,
                        "Array2D(4)": S,
                        "Array3D(2)": _,
                        "Array3D(3)": _,
                        "Array3D(4)": _,
                        Input: h,
                        NumberTexture: f,
                        "ArrayTexture(1)": f,
                        "ArrayTexture(2)": f,
                        "ArrayTexture(3)": f,
                        "ArrayTexture(4)": f,
                        MemoryOptimizedNumberTexture: m,
                        HTMLCanvas: a,
                        HTMLImage: a,
                        HTMLImageArray: !1,
                        HTMLVideo: u
                    }
                }
            };
            t.exports = {
                lookupKernelValueType: function (e, t, n, r) {
                    if (!e) throw new Error("type missing");
                    if (!t) throw new Error("dynamic missing");
                    if (!n) throw new Error("precision missing");
                    r.type && (e = r.type);
                    const i = $[n][t];
                    if (!1 === i[e]) return null;
                    if (void 0 === i[e]) throw new Error(`Could not find a KernelValue for ${e}`);
                    return i[e]
                },
                kernelValueMaps: $
            }
        }, {
            "./kernel-value/boolean": 41,
            "./kernel-value/dynamic-html-image": 42,
            "./kernel-value/dynamic-html-video": 43,
            "./kernel-value/dynamic-memory-optimized-number-texture": 44,
            "./kernel-value/dynamic-number-texture": 45,
            "./kernel-value/dynamic-single-array": 46,
            "./kernel-value/dynamic-single-array1d-i": 47,
            "./kernel-value/dynamic-single-array2d-i": 48,
            "./kernel-value/dynamic-single-array3d-i": 49,
            "./kernel-value/dynamic-single-input": 50,
            "./kernel-value/dynamic-unsigned-array": 51,
            "./kernel-value/dynamic-unsigned-input": 52,
            "./kernel-value/float": 53,
            "./kernel-value/html-image": 54,
            "./kernel-value/html-video": 55,
            "./kernel-value/integer": 57,
            "./kernel-value/memory-optimized-number-texture": 58,
            "./kernel-value/number-texture": 59,
            "./kernel-value/single-array": 60,
            "./kernel-value/single-array1d-i": 61,
            "./kernel-value/single-array2": 62,
            "./kernel-value/single-array2d-i": 63,
            "./kernel-value/single-array3": 64,
            "./kernel-value/single-array3d-i": 65,
            "./kernel-value/single-array4": 66,
            "./kernel-value/single-input": 67,
            "./kernel-value/unsigned-array": 68,
            "./kernel-value/unsigned-input": 69
        }],
        40: [function (e, t, n) {
            const {
                WebGLKernelValue: r
            } = e("./index"), {
                Input: i
            } = e("../../../input");
            t.exports = {
                WebGLKernelArray: class extends r {
                    checkSize(e, t) {
                        if (!this.kernel.validate) return;
                        const {
                            maxTextureSize: n
                        } = this.kernel.constructor.features;
                        if (e > n || t > n) throw e > t ? new Error(`Argument texture width of ${e} larger than maximum size of ${n} for your GPU`) : e < t ? new Error(`Argument texture height of ${t} larger than maximum size of ${n} for your GPU`) : new Error(`Argument texture height and width of ${t} larger than maximum size of ${n} for your GPU`)
                    }
                    setup() {
                        this.requestTexture(), this.setupTexture(), this.defineTexture()
                    }
                    requestTexture() {
                        this.texture = this.onRequestTexture()
                    }
                    defineTexture() {
                        const {
                            context: e
                        } = this;
                        e.activeTexture(this.contextHandle), e.bindTexture(e.TEXTURE_2D, this.texture), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST)
                    }
                    setupTexture() {
                        this.contextHandle = this.onRequestContextHandle(), this.index = this.onRequestIndex(), this.dimensionsId = this.id + "Dim", this.sizeId = this.id + "Size"
                    }
                    getBitRatio(e) {
                        if (Array.isArray(e[0])) return this.getBitRatio(e[0]);
                        if (e.constructor === i) return this.getBitRatio(e.value);
                        switch (e.constructor) {
                            case Uint8ClampedArray:
                            case Uint8Array:
                            case Int8Array:
                                return 1;
                            case Uint16Array:
                            case Int16Array:
                                return 2;
                            case Float32Array:
                            case Int32Array:
                            default:
                                return 4
                        }
                    }
                    destroy() {
                        this.prevArg && this.prevArg.delete(), this.context.deleteTexture(this.texture)
                    }
                }
            }
        }, {
            "../../../input": 110,
            "./index": 56
        }],
        41: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValue: i
            } = e("./index");
            t.exports = {
                WebGLKernelValueBoolean: class extends i {
                    constructor(e, t) {
                        super(e, t), this.uploadValue = e
                    }
                    getSource(e) {
                        return "constants" === this.origin ? `const bool ${this.id} = ${e};\n` : `uniform bool ${this.id};\n`
                    }
                    getStringValueHandler() {
                        return `const uploadValue_${this.name} = ${this.varName};\n`
                    }
                    updateValue(e) {
                        "constants" !== this.origin && this.kernel.setUniform1i(this.id, this.uploadValue = e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./index": 56
        }],
        42: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueHTMLImage: i
            } = e("./html-image");
            t.exports = {
                WebGLKernelValueDynamicHTMLImage: class extends i {
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `uniform ivec2 ${this.sizeId}`, `uniform ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        const {
                            width: t,
                            height: n
                        } = e;
                        this.checkSize(t, n), this.dimensions = [t, n, 1], this.textureSize = [t, n], this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./html-image": 54
        }],
        43: [function (e, t, n) {
            const {
                WebGLKernelValueDynamicHTMLImage: r
            } = e("./dynamic-html-image");
            t.exports = {
                WebGLKernelValueDynamicHTMLVideo: class extends r {}
            }
        }, {
            "./dynamic-html-image": 42
        }],
        44: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueMemoryOptimizedNumberTexture: i
            } = e("./memory-optimized-number-texture");
            t.exports = {
                WebGLKernelValueDynamicMemoryOptimizedNumberTexture: class extends i {
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `uniform ivec2 ${this.sizeId}`, `uniform ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        this.dimensions = e.dimensions, this.checkSize(e.size[0], e.size[1]), this.textureSize = e.size, this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./memory-optimized-number-texture": 58
        }],
        45: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueNumberTexture: i
            } = e("./number-texture");
            t.exports = {
                WebGLKernelValueDynamicNumberTexture: class extends i {
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `uniform ivec2 ${this.sizeId}`, `uniform ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        this.dimensions = e.dimensions, this.checkSize(e.size[0], e.size[1]), this.textureSize = e.size, this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./number-texture": 59
        }],
        46: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueSingleArray: i
            } = e("./single-array");
            t.exports = {
                WebGLKernelValueDynamicSingleArray: class extends i {
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `uniform ivec2 ${this.sizeId}`, `uniform ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        this.dimensions = r.getDimensions(e, !0), this.textureSize = r.getMemoryOptimizedFloatTextureSize(this.dimensions, this.bitRatio), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * this.bitRatio, this.checkSize(this.textureSize[0], this.textureSize[1]), this.uploadValue = new Float32Array(this.uploadArrayLength), this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./single-array": 60
        }],
        47: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueSingleArray1DI: i
            } = e("./single-array1d-i");
            t.exports = {
                WebGLKernelValueDynamicSingleArray1DI: class extends i {
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `uniform ivec2 ${this.sizeId}`, `uniform ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        this.setShape(e), this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./single-array1d-i": 61
        }],
        48: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueSingleArray2DI: i
            } = e("./single-array2d-i");
            t.exports = {
                WebGLKernelValueDynamicSingleArray2DI: class extends i {
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `uniform ivec2 ${this.sizeId}`, `uniform ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        this.setShape(e), this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./single-array2d-i": 63
        }],
        49: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueSingleArray3DI: i
            } = e("./single-array3d-i");
            t.exports = {
                WebGLKernelValueDynamicSingleArray3DI: class extends i {
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `uniform ivec2 ${this.sizeId}`, `uniform ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        this.setShape(e), this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./single-array3d-i": 65
        }],
        50: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueSingleInput: i
            } = e("./single-input");
            t.exports = {
                WebGLKernelValueDynamicSingleInput: class extends i {
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `uniform ivec2 ${this.sizeId}`, `uniform ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        let [t, n, i] = e.size;
                        this.dimensions = new Int32Array([t || 1, n || 1, i || 1]), this.textureSize = r.getMemoryOptimizedFloatTextureSize(this.dimensions, this.bitRatio), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * this.bitRatio, this.checkSize(this.textureSize[0], this.textureSize[1]), this.uploadValue = new Float32Array(this.uploadArrayLength), this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./single-input": 67
        }],
        51: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueUnsignedArray: i
            } = e("./unsigned-array");
            t.exports = {
                WebGLKernelValueDynamicUnsignedArray: class extends i {
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `uniform ivec2 ${this.sizeId}`, `uniform ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        this.dimensions = r.getDimensions(e, !0), this.textureSize = r.getMemoryOptimizedPackedTextureSize(this.dimensions, this.bitRatio), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * (4 / this.bitRatio), this.checkSize(this.textureSize[0], this.textureSize[1]);
                        const t = this.getTransferArrayType(e);
                        this.preUploadValue = new t(this.uploadArrayLength), this.uploadValue = new Uint8Array(this.preUploadValue.buffer), this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./unsigned-array": 68
        }],
        52: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueUnsignedInput: i
            } = e("./unsigned-input");
            t.exports = {
                WebGLKernelValueDynamicUnsignedInput: class extends i {
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `uniform ivec2 ${this.sizeId}`, `uniform ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        let [t, n, i] = e.size;
                        this.dimensions = new Int32Array([t || 1, n || 1, i || 1]), this.textureSize = r.getMemoryOptimizedPackedTextureSize(this.dimensions, this.bitRatio), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * (4 / this.bitRatio), this.checkSize(this.textureSize[0], this.textureSize[1]);
                        const s = this.getTransferArrayType(e.value);
                        this.preUploadValue = new s(this.uploadArrayLength), this.uploadValue = new Uint8Array(this.preUploadValue.buffer), this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./unsigned-input": 69
        }],
        53: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValue: i
            } = e("./index");
            t.exports = {
                WebGLKernelValueFloat: class extends i {
                    constructor(e, t) {
                        super(e, t), this.uploadValue = e
                    }
                    getStringValueHandler() {
                        return `const uploadValue_${this.name} = ${this.varName};\n`
                    }
                    getSource(e) {
                        return "constants" === this.origin ? Number.isInteger(e) ? `const float ${this.id} = ${e}.0;\n` : `const float ${this.id} = ${e};\n` : `uniform float ${this.id};\n`
                    }
                    updateValue(e) {
                        "constants" !== this.origin && this.kernel.setUniform1f(this.id, this.uploadValue = e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./index": 56
        }],
        54: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelArray: i
            } = e("./array");
            t.exports = {
                WebGLKernelValueHTMLImage: class extends i {
                    constructor(e, t) {
                        super(e, t);
                        const {
                            width: n,
                            height: r
                        } = e;
                        this.checkSize(n, r), this.dimensions = [n, r, 1], this.textureSize = [n, r], this.uploadValue = e
                    }
                    getStringValueHandler() {
                        return `const uploadValue_${this.name} = ${this.varName};\n`
                    }
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        const {
                            context: t
                        } = this;
                        t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.uploadValue = e), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./array": 40
        }],
        55: [function (e, t, n) {
            const {
                WebGLKernelValueHTMLImage: r
            } = e("./html-image");
            t.exports = {
                WebGLKernelValueHTMLVideo: class extends r {}
            }
        }, {
            "./html-image": 54
        }],
        56: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                KernelValue: i
            } = e("../../kernel-value");
            t.exports = {
                WebGLKernelValue: class extends i {
                    constructor(e, t) {
                        super(e, t), this.dimensionsId = null, this.sizeId = null, this.initialValueConstructor = e.constructor, this.onRequestTexture = t.onRequestTexture, this.onRequestIndex = t.onRequestIndex, this.uploadValue = null, this.textureSize = null, this.bitRatio = null, this.prevArg = null
                    }
                    get id() {
                        return `${this.origin}_${r.sanitizeName(this.name)}`
                    }
                    setup() {}
                    getTransferArrayType(e) {
                        if (Array.isArray(e[0])) return this.getTransferArrayType(e[0]);
                        switch (e.constructor) {
                            case Array:
                            case Int32Array:
                            case Int16Array:
                            case Int8Array:
                                return Float32Array;
                            case Uint8ClampedArray:
                            case Uint8Array:
                            case Uint16Array:
                            case Uint32Array:
                            case Float32Array:
                            case Float64Array:
                                return e.constructor
                        }
                        return console.warn("Unfamiliar constructor type.  Will go ahead and use, but likley this may result in a transfer of zeros"), e.constructor
                    }
                    getStringValueHandler() {
                        throw new Error(`"getStringValueHandler" not implemented on ${this.constructor.name}`)
                    }
                    getVariablePrecisionString() {
                        return this.kernel.getVariablePrecisionString(this.textureSize || void 0, this.tactic || void 0)
                    }
                    destroy() {}
                }
            }
        }, {
            "../../../utils": 114,
            "../../kernel-value": 35
        }],
        57: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValue: i
            } = e("./index");
            t.exports = {
                WebGLKernelValueInteger: class extends i {
                    constructor(e, t) {
                        super(e, t), this.uploadValue = e
                    }
                    getStringValueHandler() {
                        return `const uploadValue_${this.name} = ${this.varName};\n`
                    }
                    getSource(e) {
                        return "constants" === this.origin ? `const int ${this.id} = ${parseInt(e)};\n` : `uniform int ${this.id};\n`
                    }
                    updateValue(e) {
                        "constants" !== this.origin && this.kernel.setUniform1i(this.id, this.uploadValue = e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./index": 56
        }],
        58: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelArray: i
            } = e("./array"), s = "Source and destination textures are the same.  Use immutable = true and manually cleanup kernel output texture memory with texture.delete()";
            t.exports = {
                WebGLKernelValueMemoryOptimizedNumberTexture: class extends i {
                    constructor(e, t) {
                        super(e, t);
                        const [n, r] = e.size;
                        this.checkSize(n, r), this.dimensions = e.dimensions, this.textureSize = e.size, this.uploadValue = e.texture, this.forceUploadEachRun = !0
                    }
                    setup() {
                        this.setupTexture()
                    }
                    getStringValueHandler() {
                        return `const uploadValue_${this.name} = ${this.varName}.texture;\n`
                    }
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        if (this.checkContext && e.context !== this.context) throw new Error(`Value ${this.name} (${this.type}) must be from same context`);
                        const {
                            kernel: t,
                            context: n
                        } = this;
                        if (t.pipeline)
                            if (t.immutable) t.updateTextureArgumentRefs(this, e);
                            else {
                                if (t.texture.texture === e.texture) throw new Error(s);
                                if (t.mappedTextures) {
                                    const {
                                        mappedTextures: n
                                    } = t;
                                    for (let t = 0; t < n.length; t++)
                                        if (n[t].texture === e.texture) throw new Error(s)
                                }
                            } n.activeTexture(this.contextHandle), n.bindTexture(n.TEXTURE_2D, this.uploadValue = e.texture), this.kernel.setUniform1i(this.id, this.index)
                    }
                },
                sameError: s
            }
        }, {
            "../../../utils": 114,
            "./array": 40
        }],
        59: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelArray: i
            } = e("./array"), {
                sameError: s
            } = e("./memory-optimized-number-texture");
            t.exports = {
                WebGLKernelValueNumberTexture: class extends i {
                    constructor(e, t) {
                        super(e, t);
                        const [n, r] = e.size;
                        this.checkSize(n, r);
                        const {
                            size: i,
                            dimensions: s
                        } = e;
                        this.bitRatio = this.getBitRatio(e), this.dimensions = s, this.textureSize = i, this.uploadValue = e.texture, this.forceUploadEachRun = !0
                    }
                    setup() {
                        this.setupTexture()
                    }
                    getStringValueHandler() {
                        return `const uploadValue_${this.name} = ${this.varName}.texture;\n`
                    }
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        if (this.checkContext && e.context !== this.context) throw new Error(`Value ${this.name} (${this.type}) must be from same context`);
                        const {
                            kernel: t,
                            context: n
                        } = this;
                        if (t.pipeline)
                            if (t.immutable) t.updateTextureArgumentRefs(this, e);
                            else {
                                if (t.texture.texture === e.texture) throw new Error(s);
                                if (t.mappedTextures) {
                                    const {
                                        mappedTextures: n
                                    } = t;
                                    for (let t = 0; t < n.length; t++)
                                        if (n[t].texture === e.texture) throw new Error(s)
                                }
                            } n.activeTexture(this.contextHandle), n.bindTexture(n.TEXTURE_2D, this.uploadValue = e.texture), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./array": 40,
            "./memory-optimized-number-texture": 58
        }],
        60: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelArray: i
            } = e("./array");
            t.exports = {
                WebGLKernelValueSingleArray: class extends i {
                    constructor(e, t) {
                        super(e, t), this.bitRatio = 4, this.dimensions = r.getDimensions(e, !0), this.textureSize = r.getMemoryOptimizedFloatTextureSize(this.dimensions, this.bitRatio), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * this.bitRatio, this.checkSize(this.textureSize[0], this.textureSize[1]), this.uploadValue = new Float32Array(this.uploadArrayLength)
                    }
                    getStringValueHandler() {
                        return r.linesToString([`const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`, `flattenTo(${this.varName}, uploadValue_${this.name})`])
                    }
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        const {
                            context: t
                        } = this;
                        r.flattenTo(e, this.uploadValue), t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.textureSize[0], this.textureSize[1], 0, t.RGBA, t.FLOAT, this.uploadValue), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./array": 40
        }],
        61: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelArray: i
            } = e("./array");
            t.exports = {
                WebGLKernelValueSingleArray1DI: class extends i {
                    constructor(e, t) {
                        super(e, t), this.bitRatio = 4, this.setShape(e)
                    }
                    setShape(e) {
                        const t = r.getDimensions(e, !0);
                        this.textureSize = r.getMemoryOptimizedFloatTextureSize(t, this.bitRatio), this.dimensions = new Int32Array([t[1], 1, 1]), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * this.bitRatio, this.checkSize(this.textureSize[0], this.textureSize[1]), this.uploadValue = new Float32Array(this.uploadArrayLength)
                    }
                    getStringValueHandler() {
                        return r.linesToString([`const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`, `flattenTo(${this.varName}, uploadValue_${this.name})`])
                    }
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        const {
                            context: t
                        } = this;
                        r.flatten2dArrayTo(e, this.uploadValue), t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.textureSize[0], this.textureSize[1], 0, t.RGBA, t.FLOAT, this.uploadValue), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./array": 40
        }],
        62: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValue: i
            } = e("./index");
            t.exports = {
                WebGLKernelValueSingleArray2: class extends i {
                    constructor(e, t) {
                        super(e, t), this.uploadValue = e
                    }
                    getSource(e) {
                        return "constants" === this.origin ? `const vec2 ${this.id} = vec2(${e[0]},${e[1]});\n` : `uniform vec2 ${this.id};\n`
                    }
                    getStringValueHandler() {
                        return "constants" === this.origin ? "" : `const uploadValue_${this.name} = ${this.varName};\n`
                    }
                    updateValue(e) {
                        "constants" !== this.origin && this.kernel.setUniform2fv(this.id, this.uploadValue = e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./index": 56
        }],
        63: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelArray: i
            } = e("./array");
            t.exports = {
                WebGLKernelValueSingleArray2DI: class extends i {
                    constructor(e, t) {
                        super(e, t), this.bitRatio = 4, this.setShape(e)
                    }
                    setShape(e) {
                        const t = r.getDimensions(e, !0);
                        this.textureSize = r.getMemoryOptimizedFloatTextureSize(t, this.bitRatio), this.dimensions = new Int32Array([t[1], t[2], 1]), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * this.bitRatio, this.checkSize(this.textureSize[0], this.textureSize[1]), this.uploadValue = new Float32Array(this.uploadArrayLength)
                    }
                    getStringValueHandler() {
                        return r.linesToString([`const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`, `flattenTo(${this.varName}, uploadValue_${this.name})`])
                    }
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        const {
                            context: t
                        } = this;
                        r.flatten3dArrayTo(e, this.uploadValue), t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.textureSize[0], this.textureSize[1], 0, t.RGBA, t.FLOAT, this.uploadValue), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./array": 40
        }],
        64: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValue: i
            } = e("./index");
            t.exports = {
                WebGLKernelValueSingleArray3: class extends i {
                    constructor(e, t) {
                        super(e, t), this.uploadValue = e
                    }
                    getSource(e) {
                        return "constants" === this.origin ? `const vec3 ${this.id} = vec3(${e[0]},${e[1]},${e[2]});\n` : `uniform vec3 ${this.id};\n`
                    }
                    getStringValueHandler() {
                        return "constants" === this.origin ? "" : `const uploadValue_${this.name} = ${this.varName};\n`
                    }
                    updateValue(e) {
                        "constants" !== this.origin && this.kernel.setUniform3fv(this.id, this.uploadValue = e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./index": 56
        }],
        65: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelArray: i
            } = e("./array");
            t.exports = {
                WebGLKernelValueSingleArray3DI: class extends i {
                    constructor(e, t) {
                        super(e, t), this.bitRatio = 4, this.setShape(e)
                    }
                    setShape(e) {
                        const t = r.getDimensions(e, !0);
                        this.textureSize = r.getMemoryOptimizedFloatTextureSize(t, this.bitRatio), this.dimensions = new Int32Array([t[1], t[2], t[3]]), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * this.bitRatio, this.checkSize(this.textureSize[0], this.textureSize[1]), this.uploadValue = new Float32Array(this.uploadArrayLength)
                    }
                    getStringValueHandler() {
                        return r.linesToString([`const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`, `flattenTo(${this.varName}, uploadValue_${this.name})`])
                    }
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        const {
                            context: t
                        } = this;
                        r.flatten4dArrayTo(e, this.uploadValue), t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.textureSize[0], this.textureSize[1], 0, t.RGBA, t.FLOAT, this.uploadValue), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./array": 40
        }],
        66: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValue: i
            } = e("./index");
            t.exports = {
                WebGLKernelValueSingleArray4: class extends i {
                    constructor(e, t) {
                        super(e, t), this.uploadValue = e
                    }
                    getSource(e) {
                        return "constants" === this.origin ? `const vec4 ${this.id} = vec4(${e[0]},${e[1]},${e[2]},${e[3]});\n` : `uniform vec4 ${this.id};\n`
                    }
                    getStringValueHandler() {
                        return "constants" === this.origin ? "" : `const uploadValue_${this.name} = ${this.varName};\n`
                    }
                    updateValue(e) {
                        "constants" !== this.origin && this.kernel.setUniform4fv(this.id, this.uploadValue = e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./index": 56
        }],
        67: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelArray: i
            } = e("./array");
            t.exports = {
                WebGLKernelValueSingleInput: class extends i {
                    constructor(e, t) {
                        super(e, t), this.bitRatio = 4;
                        let [n, i, s] = e.size;
                        this.dimensions = new Int32Array([n || 1, i || 1, s || 1]), this.textureSize = r.getMemoryOptimizedFloatTextureSize(this.dimensions, this.bitRatio), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * this.bitRatio, this.checkSize(this.textureSize[0], this.textureSize[1]), this.uploadValue = new Float32Array(this.uploadArrayLength)
                    }
                    getStringValueHandler() {
                        return r.linesToString([`const uploadValue_${this.name} = new Float32Array(${this.uploadArrayLength})`, `flattenTo(${this.varName}.value, uploadValue_${this.name})`])
                    }
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        const {
                            context: t
                        } = this;
                        r.flattenTo(e.value, this.uploadValue), t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.textureSize[0], this.textureSize[1], 0, t.RGBA, t.FLOAT, this.uploadValue), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./array": 40
        }],
        68: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelArray: i
            } = e("./array");
            t.exports = {
                WebGLKernelValueUnsignedArray: class extends i {
                    constructor(e, t) {
                        super(e, t), this.bitRatio = this.getBitRatio(e), this.dimensions = r.getDimensions(e, !0), this.textureSize = r.getMemoryOptimizedPackedTextureSize(this.dimensions, this.bitRatio), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * (4 / this.bitRatio), this.checkSize(this.textureSize[0], this.textureSize[1]), this.TranserArrayType = this.getTransferArrayType(e), this.preUploadValue = new this.TranserArrayType(this.uploadArrayLength), this.uploadValue = new Uint8Array(this.preUploadValue.buffer)
                    }
                    getStringValueHandler() {
                        return r.linesToString([`const preUploadValue_${this.name} = new ${this.TranserArrayType.name}(${this.uploadArrayLength})`, `const uploadValue_${this.name} = new Uint8Array(preUploadValue_${this.name}.buffer)`, `flattenTo(${this.varName}, preUploadValue_${this.name})`])
                    }
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        const {
                            context: t
                        } = this;
                        r.flattenTo(e, this.preUploadValue), t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.textureSize[0], this.textureSize[1], 0, t.RGBA, t.UNSIGNED_BYTE, this.uploadValue), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./array": 40
        }],
        69: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelArray: i
            } = e("./array");
            t.exports = {
                WebGLKernelValueUnsignedInput: class extends i {
                    constructor(e, t) {
                        super(e, t), this.bitRatio = this.getBitRatio(e);
                        const [n, i, s] = e.size;
                        this.dimensions = new Int32Array([n || 1, i || 1, s || 1]), this.textureSize = r.getMemoryOptimizedPackedTextureSize(this.dimensions, this.bitRatio), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * (4 / this.bitRatio), this.checkSize(this.textureSize[0], this.textureSize[1]), this.TranserArrayType = this.getTransferArrayType(e.value), this.preUploadValue = new this.TranserArrayType(this.uploadArrayLength), this.uploadValue = new Uint8Array(this.preUploadValue.buffer)
                    }
                    getStringValueHandler() {
                        return r.linesToString([`const preUploadValue_${this.name} = new ${this.TranserArrayType.name}(${this.uploadArrayLength})`, `const uploadValue_${this.name} = new Uint8Array(preUploadValue_${this.name}.buffer)`, `flattenTo(${this.varName}.value, preUploadValue_${this.name})`])
                    }
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(value.constructor);
                        const {
                            context: t
                        } = this;
                        r.flattenTo(e.value, this.preUploadValue), t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.textureSize[0], this.textureSize[1], 0, t.RGBA, t.UNSIGNED_BYTE, this.uploadValue), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./array": 40
        }],
        70: [function (e, t, n) {
            const {
                GLKernel: r
            } = e("../gl/kernel"), {
                FunctionBuilder: i
            } = e("../function-builder"), {
                WebGLFunctionNode: s
            } = e("./function-node"), {
                utils: a
            } = e("../../utils"), o = e("../../plugins/math-random-uniformly-distributed"), {
                fragmentShader: u
            } = e("./fragment-shader"), {
                vertexShader: l
            } = e("./vertex-shader"), {
                glKernelString: h
            } = e("../gl/kernel-string"), {
                lookupKernelValueType: c
            } = e("./kernel-value-maps");
            let p = null,
                d = null,
                m = null,
                g = null,
                f = null;
            const x = [o],
                y = [],
                b = {};
            t.exports = {
                WebGLKernel: class extends r {
                    static get isSupported() {
                        return null !== p ? p : (this.setupFeatureChecks(), p = this.isContextMatch(m))
                    }
                    static setupFeatureChecks() {
                        "undefined" != typeof document ? d = document.createElement("canvas") : "undefined" != typeof OffscreenCanvas && (d = new OffscreenCanvas(0, 0)), d && (m = d.getContext("webgl") || d.getContext("experimental-webgl")) && m.getExtension && (g = {
                            OES_texture_float: m.getExtension("OES_texture_float"),
                            OES_texture_float_linear: m.getExtension("OES_texture_float_linear"),
                            OES_element_index_uint: m.getExtension("OES_element_index_uint"),
                            WEBGL_draw_buffers: m.getExtension("WEBGL_draw_buffers")
                        }, f = this.getFeatures())
                    }
                    static isContextMatch(e) {
                        return "undefined" != typeof WebGLRenderingContext && e instanceof WebGLRenderingContext
                    }
                    static getIsTextureFloat() {
                        return Boolean(g.OES_texture_float)
                    }
                    static getIsDrawBuffers() {
                        return Boolean(g.WEBGL_draw_buffers)
                    }
                    static getChannelCount() {
                        return g.WEBGL_draw_buffers ? m.getParameter(g.WEBGL_draw_buffers.MAX_DRAW_BUFFERS_WEBGL) : 1
                    }
                    static getMaxTextureSize() {
                        return m.getParameter(m.MAX_TEXTURE_SIZE)
                    }
                    static lookupKernelValueType(e, t, n, r) {
                        return c(e, t, n, r)
                    }
                    static get testCanvas() {
                        return d
                    }
                    static get testContext() {
                        return m
                    }
                    static get features() {
                        return f
                    }
                    static get fragmentShader() {
                        return u
                    }
                    static get vertexShader() {
                        return l
                    }
                    constructor(e, t) {
                        super(e, t), this.program = null, this.pipeline = t.pipeline, this.endianness = a.systemEndianness(), this.extensions = {}, this.argumentTextureCount = 0, this.constantTextureCount = 0, this.fragShader = null, this.vertShader = null, this.drawBuffersMap = null, this.maxTexSize = null, this.onRequestSwitchKernel = null, this.removeIstanbulCoverage = !0, this.texture = null, this.mappedTextures = null, this.mergeSettings(e.settings || t), this.threadDim = null, this.framebuffer = null, this.buffer = null, this.textureCache = [], this.programUniformLocationCache = {}, this.uniform1fCache = {}, this.uniform1iCache = {}, this.uniform2fCache = {}, this.uniform2fvCache = {}, this.uniform2ivCache = {}, this.uniform3fvCache = {}, this.uniform3ivCache = {}, this.uniform4fvCache = {}, this.uniform4ivCache = {}
                    }
                    initCanvas() {
                        if ("undefined" != typeof document) {
                            const e = document.createElement("canvas");
                            return e.width = 2, e.height = 2, e
                        }
                        if ("undefined" != typeof OffscreenCanvas) return new OffscreenCanvas(0, 0)
                    }
                    initContext() {
                        const e = {
                            alpha: !1,
                            depth: !1,
                            antialias: !1
                        };
                        return this.canvas.getContext("webgl", e) || this.canvas.getContext("experimental-webgl", e)
                    }
                    initPlugins(e) {
                        const t = [],
                            {
                                source: n
                            } = this;
                        if ("string" == typeof n)
                            for (let e = 0; e < x.length; e++) {
                                const r = x[e];
                                n.match(r.functionMatch) && t.push(r)
                            } else if ("object" == typeof n && e.pluginNames)
                                for (let n = 0; n < x.length; n++) {
                                    const r = x[n];
                                    e.pluginNames.some(e => e === r.name) && t.push(r)
                                }
                        return t
                    }
                    initExtensions() {
                        this.extensions = {
                            OES_texture_float: this.context.getExtension("OES_texture_float"),
                            OES_texture_float_linear: this.context.getExtension("OES_texture_float_linear"),
                            OES_element_index_uint: this.context.getExtension("OES_element_index_uint"),
                            WEBGL_draw_buffers: this.context.getExtension("WEBGL_draw_buffers"),
                            WEBGL_color_buffer_float: this.context.getExtension("WEBGL_color_buffer_float")
                        }
                    }
                    validateSettings(e) {
                        if (!this.validate) return void(this.texSize = a.getKernelTextureSize({
                            optimizeFloatMemory: this.optimizeFloatMemory,
                            precision: this.precision
                        }, this.output));
                        const {
                            features: t
                        } = this.constructor;
                        if (!0 === this.optimizeFloatMemory && !t.isTextureFloat) throw new Error("Float textures are not supported");
                        if ("single" === this.precision && !t.isFloatRead) throw new Error("Single precision not supported");
                        if (!this.graphical && null === this.precision && t.isTextureFloat && (this.precision = t.isFloatRead ? "single" : "unsigned"), this.subKernels && this.subKernels.length > 0 && !this.extensions.WEBGL_draw_buffers) throw new Error("could not instantiate draw buffers extension");
                        if (null === this.fixIntegerDivisionAccuracy ? this.fixIntegerDivisionAccuracy = !t.isIntegerDivisionAccurate : this.fixIntegerDivisionAccuracy && t.isIntegerDivisionAccurate && (this.fixIntegerDivisionAccuracy = !1), this.checkOutput(), !this.output || 0 === this.output.length) {
                            if (1 !== e.length) throw new Error("Auto output only supported for kernels with only one input");
                            const t = a.getVariableType(e[0], this.strictIntegers);
                            switch (t) {
                                case "Array":
                                    this.output = a.getDimensions(t);
                                    break;
                                case "NumberTexture":
                                case "MemoryOptimizedNumberTexture":
                                case "ArrayTexture(1)":
                                case "ArrayTexture(2)":
                                case "ArrayTexture(3)":
                                case "ArrayTexture(4)":
                                    this.output = e[0].output;
                                    break;
                                default:
                                    throw new Error("Auto output not supported for input type: " + t)
                            }
                        }
                        if (this.graphical) {
                            if (2 !== this.output.length) throw new Error("Output must have 2 dimensions on graphical mode");
                            return "precision" === this.precision && (this.precision = "unsigned", console.warn("Cannot use graphical mode and single precision at the same time")), void(this.texSize = a.clone(this.output))
                        }
                        null === this.precision && t.isTextureFloat && (this.precision = "single"), this.texSize = a.getKernelTextureSize({
                            optimizeFloatMemory: this.optimizeFloatMemory,
                            precision: this.precision
                        }, this.output), this.checkTextureSize()
                    }
                    updateMaxTexSize() {
                        const {
                            texSize: e,
                            canvas: t
                        } = this;
                        if (null === this.maxTexSize) {
                            let n = y.indexOf(t); - 1 === n && (n = y.length, y.push(t), b[n] = [e[0], e[1]]), this.maxTexSize = b[n]
                        }
                        this.maxTexSize[0] < e[0] && (this.maxTexSize[0] = e[0]), this.maxTexSize[1] < e[1] && (this.maxTexSize[1] = e[1])
                    }
                    setupArguments(e) {
                        this.kernelArguments = [], this.argumentTextureCount = 0;
                        const t = null === this.argumentTypes;
                        if (t && (this.argumentTypes = []), this.argumentSizes = [], this.argumentBitRatios = [], e.length < this.argumentNames.length) throw new Error("not enough arguments for kernel");
                        if (e.length > this.argumentNames.length) throw new Error("too many arguments for kernel");
                        const {
                            context: n
                        } = this;
                        let r = 0;
                        const i = () => this.createTexture(),
                            s = () => r++,
                            o = e => {
                                this.switchKernels({
                                    type: "argumentMismatch",
                                    needed: e
                                })
                            },
                            u = () => n.TEXTURE0 + this.constantTextureCount + this.argumentTextureCount++;
                        for (let r = 0; r < e.length; r++) {
                            const l = e[r],
                                h = this.argumentNames[r];
                            let c;
                            t ? (c = a.getVariableType(l, this.strictIntegers), this.argumentTypes.push(c)) : c = this.argumentTypes[r];
                            const p = this.constructor.lookupKernelValueType(c, this.dynamicArguments ? "dynamic" : "static", this.precision, e[r]);
                            if (null === p) return this.requestFallback(e);
                            const d = new p(l, {
                                name: h,
                                type: c,
                                tactic: this.tactic,
                                origin: "user",
                                context: n,
                                checkContext: this.checkContext,
                                kernel: this,
                                strictIntegers: this.strictIntegers,
                                onRequestTexture: i,
                                onRequestIndex: s,
                                onUpdateValueMismatch: o,
                                onRequestContextHandle: u
                            });
                            this.kernelArguments.push(d), d.setup(), this.argumentSizes.push(d.textureSize), this.argumentBitRatios[r] = d.bitRatio
                        }
                    }
                    createTexture() {
                        const e = this.context.createTexture();
                        return this.textureCache.push(e), e
                    }
                    setupConstants(e) {
                        const {
                            context: t
                        } = this;
                        this.kernelConstants = [], this.forceUploadKernelConstants = [];
                        let n = null === this.constantTypes;
                        n && (this.constantTypes = {}), this.constantBitRatios = {};
                        let r = 0;
                        for (const i in this.constants) {
                            const s = this.constants[i];
                            let o;
                            n ? (o = a.getVariableType(s, this.strictIntegers), this.constantTypes[i] = o) : o = this.constantTypes[i];
                            const u = this.constructor.lookupKernelValueType(o, "static", this.precision, s);
                            if (null === u) return this.requestFallback(e);
                            const l = new u(s, {
                                name: i,
                                type: o,
                                tactic: this.tactic,
                                origin: "constants",
                                context: this.context,
                                checkContext: this.checkContext,
                                kernel: this,
                                strictIntegers: this.strictIntegers,
                                onRequestTexture: () => this.createTexture(),
                                onRequestIndex: () => r++,
                                onRequestContextHandle: () => t.TEXTURE0 + this.constantTextureCount++
                            });
                            this.constantBitRatios[i] = l.bitRatio, this.kernelConstants.push(l), l.setup(), l.forceUploadEachRun && this.forceUploadKernelConstants.push(l)
                        }
                    }
                    build() {
                        if (this.built) return;
                        if (this.initExtensions(), this.validateSettings(arguments), this.setupConstants(arguments), this.fallbackRequested) return;
                        if (this.setupArguments(arguments), this.fallbackRequested) return;
                        this.updateMaxTexSize(), this.translateSource();
                        const e = this.pickRenderStrategy(arguments);
                        if (e) return e;
                        const {
                            texSize: t,
                            context: n,
                            canvas: r
                        } = this;
                        n.enable(n.SCISSOR_TEST), this.pipeline && this.precision, n.viewport(0, 0, this.maxTexSize[0], this.maxTexSize[1]), r.width = this.maxTexSize[0], r.height = this.maxTexSize[1];
                        const i = this.threadDim = Array.from(this.output);
                        for (; i.length < 3;) i.push(1);
                        const s = this.getVertexShader(arguments),
                            a = n.createShader(n.VERTEX_SHADER);
                        n.shaderSource(a, s), n.compileShader(a), this.vertShader = a;
                        const o = this.getFragmentShader(arguments),
                            u = n.createShader(n.FRAGMENT_SHADER);
                        if (n.shaderSource(u, o), n.compileShader(u), this.fragShader = u, this.debug && (console.log("GLSL Shader Output:"), console.log(o)), !n.getShaderParameter(a, n.COMPILE_STATUS)) throw new Error("Error compiling vertex shader: " + n.getShaderInfoLog(a));
                        if (!n.getShaderParameter(u, n.COMPILE_STATUS)) throw new Error("Error compiling fragment shader: " + n.getShaderInfoLog(u));
                        const l = this.program = n.createProgram();
                        n.attachShader(l, a), n.attachShader(l, u), n.linkProgram(l), this.framebuffer = n.createFramebuffer(), this.framebuffer.width = t[0], this.framebuffer.height = t[1];
                        const h = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
                            c = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
                            p = h.byteLength;
                        let d = this.buffer;
                        d ? n.bindBuffer(n.ARRAY_BUFFER, d) : (d = this.buffer = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, d), n.bufferData(n.ARRAY_BUFFER, h.byteLength + c.byteLength, n.STATIC_DRAW)), n.bufferSubData(n.ARRAY_BUFFER, 0, h), n.bufferSubData(n.ARRAY_BUFFER, p, c);
                        const m = n.getAttribLocation(this.program, "aPos");
                        n.enableVertexAttribArray(m), n.vertexAttribPointer(m, 2, n.FLOAT, !1, 0, 0);
                        const g = n.getAttribLocation(this.program, "aTexCoord");
                        n.enableVertexAttribArray(g), n.vertexAttribPointer(g, 2, n.FLOAT, !1, 0, p), n.bindFramebuffer(n.FRAMEBUFFER, this.framebuffer);
                        let f = 0;
                        n.useProgram(this.program);
                        for (let e in this.constants) this.kernelConstants[f++].updateValue(this.constants[e]);
                        this._setupOutputTexture(), null !== this.subKernels && this.subKernels.length > 0 && (this._mappedTextureSwitched = {}, this._setupSubOutputTextures()), this.buildSignature(arguments), this.built = !0
                    }
                    translateSource() {
                        const e = i.fromKernel(this, s, {
                            fixIntegerDivisionAccuracy: this.fixIntegerDivisionAccuracy
                        });
                        this.translatedSource = e.getPrototypeString("kernel"), this.setupReturnTypes(e)
                    }
                    setupReturnTypes(e) {
                        if (this.graphical || this.returnType || (this.returnType = e.getKernelResultType()), this.subKernels && this.subKernels.length > 0)
                            for (let t = 0; t < this.subKernels.length; t++) {
                                const n = this.subKernels[t];
                                n.returnType || (n.returnType = e.getSubKernelResultType(t))
                            }
                    }
                    run() {
                        const {
                            kernelArguments: e,
                            texSize: t,
                            forceUploadKernelConstants: n,
                            context: r
                        } = this;
                        r.useProgram(this.program), r.scissor(0, 0, t[0], t[1]), this.dynamicOutput && (this.setUniform3iv("uOutputDim", new Int32Array(this.threadDim)), this.setUniform2iv("uTexSize", t)), this.setUniform2f("ratio", t[0] / this.maxTexSize[0], t[1] / this.maxTexSize[1]);
                        for (let e = 0; e < n.length; e++) {
                            const t = n[e];
                            if (t.updateValue(this.constants[t.name]), this.switchingKernels) return
                        }
                        for (let t = 0; t < e.length; t++)
                            if (e[t].updateValue(arguments[t]), this.switchingKernels) return;
                        if (this.plugins)
                            for (let e = 0; e < this.plugins.length; e++) {
                                const t = this.plugins[e];
                                t.onBeforeRun && t.onBeforeRun(this)
                            }
                        if (this.graphical) return this.pipeline ? (r.bindRenderbuffer(r.RENDERBUFFER, null), r.bindFramebuffer(r.FRAMEBUFFER, this.framebuffer), this.immutable && this._replaceOutputTexture(), r.drawArrays(r.TRIANGLE_STRIP, 0, 4), this.immutable ? this.texture.clone() : this.texture) : (r.bindRenderbuffer(r.RENDERBUFFER, null), r.bindFramebuffer(r.FRAMEBUFFER, null), void r.drawArrays(r.TRIANGLE_STRIP, 0, 4));
                        r.bindFramebuffer(r.FRAMEBUFFER, this.framebuffer), this.immutable && this._replaceOutputTexture(), null !== this.subKernels && (this.immutable && this._replaceSubOutputTextures(), this.drawBuffers()), r.drawArrays(r.TRIANGLE_STRIP, 0, 4)
                    }
                    drawBuffers() {
                        this.extensions.WEBGL_draw_buffers.drawBuffersWEBGL(this.drawBuffersMap)
                    }
                    getInternalFormat() {
                        return this.context.RGBA
                    }
                    getTextureFormat() {
                        const {
                            context: e
                        } = this;
                        switch (this.getInternalFormat()) {
                            case e.RGBA:
                                return e.RGBA;
                            default:
                                throw new Error("Unknown internal format")
                        }
                    }
                    _replaceOutputTexture() {
                        if (this.texture.beforeMutate() || this._textureSwitched) {
                            const e = this.context;
                            e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0), this._textureSwitched = !1
                        }
                    }
                    _setupOutputTexture() {
                        const e = this.context,
                            t = this.texSize;
                        if (this.texture) return void e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0);
                        const n = this.createTexture();
                        e.activeTexture(e.TEXTURE0 + this.constantTextureCount + this.argumentTextureCount), e.bindTexture(e.TEXTURE_2D, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
                        const r = this.getInternalFormat();
                        "single" === this.precision ? e.texImage2D(e.TEXTURE_2D, 0, r, t[0], t[1], 0, e.RGBA, e.FLOAT, null) : e.texImage2D(e.TEXTURE_2D, 0, r, t[0], t[1], 0, r, e.UNSIGNED_BYTE, null), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0), this.texture = new this.TextureConstructor({
                            texture: n,
                            size: t,
                            dimensions: this.threadDim,
                            output: this.output,
                            context: this.context,
                            internalFormat: this.getInternalFormat(),
                            textureFormat: this.getTextureFormat(),
                            kernel: this
                        })
                    }
                    _replaceSubOutputTextures() {
                        const e = this.context;
                        for (let t = 0; t < this.mappedTextures.length; t++) {
                            const n = this.mappedTextures[t];
                            (n.beforeMutate() || this._mappedTextureSwitched[t]) && (e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t + 1, e.TEXTURE_2D, n.texture, 0), this._mappedTextureSwitched[t] = !1)
                        }
                    }
                    _setupSubOutputTextures() {
                        const e = this.context;
                        if (this.mappedTextures) {
                            for (let t = 0; t < this.subKernels.length; t++) e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t + 1, e.TEXTURE_2D, this.mappedTextures[t].texture, 0);
                            return
                        }
                        const t = this.texSize;
                        this.drawBuffersMap = [e.COLOR_ATTACHMENT0], this.mappedTextures = [];
                        for (let n = 0; n < this.subKernels.length; n++) {
                            const r = this.createTexture();
                            this.drawBuffersMap.push(e.COLOR_ATTACHMENT0 + n + 1), e.activeTexture(e.TEXTURE0 + this.constantTextureCount + this.argumentTextureCount + n), e.bindTexture(e.TEXTURE_2D, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), "single" === this.precision ? e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t[0], t[1], 0, e.RGBA, e.FLOAT, null) : e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t[0], t[1], 0, e.RGBA, e.UNSIGNED_BYTE, null), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n + 1, e.TEXTURE_2D, r, 0), this.mappedTextures.push(new this.TextureConstructor({
                                texture: r,
                                size: t,
                                dimensions: this.threadDim,
                                output: this.output,
                                context: this.context,
                                internalFormat: this.getInternalFormat(),
                                textureFormat: this.getTextureFormat(),
                                kernel: this
                            }))
                        }
                    }
                    setUniform1f(e, t) {
                        if (this.uniform1fCache.hasOwnProperty(e) && t === this.uniform1fCache[e]) return;
                        this.uniform1fCache[e] = t;
                        const n = this.getUniformLocation(e);
                        this.context.uniform1f(n, t)
                    }
                    setUniform1i(e, t) {
                        if (this.uniform1iCache.hasOwnProperty(e) && t === this.uniform1iCache[e]) return;
                        this.uniform1iCache[e] = t;
                        const n = this.getUniformLocation(e);
                        this.context.uniform1i(n, t)
                    }
                    setUniform2f(e, t, n) {
                        if (this.uniform2fCache.hasOwnProperty(e)) {
                            const r = this.uniform2fCache[e];
                            if (t === r[0] && n === r[1]) return
                        }
                        this.uniform2fCache[e] = [t, n];
                        const r = this.getUniformLocation(e);
                        this.context.uniform2f(r, t, n)
                    }
                    setUniform2fv(e, t) {
                        if (this.uniform2fvCache.hasOwnProperty(e)) {
                            const n = this.uniform2fvCache[e];
                            if (t[0] === n[0] && t[1] === n[1]) return
                        }
                        this.uniform2fvCache[e] = t;
                        const n = this.getUniformLocation(e);
                        this.context.uniform2fv(n, t)
                    }
                    setUniform2iv(e, t) {
                        if (this.uniform2ivCache.hasOwnProperty(e)) {
                            const n = this.uniform2ivCache[e];
                            if (t[0] === n[0] && t[1] === n[1]) return
                        }
                        this.uniform2ivCache[e] = t;
                        const n = this.getUniformLocation(e);
                        this.context.uniform2iv(n, t)
                    }
                    setUniform3fv(e, t) {
                        if (this.uniform3fvCache.hasOwnProperty(e)) {
                            const n = this.uniform3fvCache[e];
                            if (t[0] === n[0] && t[1] === n[1] && t[2] === n[2]) return
                        }
                        this.uniform3fvCache[e] = t;
                        const n = this.getUniformLocation(e);
                        this.context.uniform3fv(n, t)
                    }
                    setUniform3iv(e, t) {
                        if (this.uniform3ivCache.hasOwnProperty(e)) {
                            const n = this.uniform3ivCache[e];
                            if (t[0] === n[0] && t[1] === n[1] && t[2] === n[2]) return
                        }
                        this.uniform3ivCache[e] = t;
                        const n = this.getUniformLocation(e);
                        this.context.uniform3iv(n, t)
                    }
                    setUniform4fv(e, t) {
                        if (this.uniform4fvCache.hasOwnProperty(e)) {
                            const n = this.uniform4fvCache[e];
                            if (t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]) return
                        }
                        this.uniform4fvCache[e] = t;
                        const n = this.getUniformLocation(e);
                        this.context.uniform4fv(n, t)
                    }
                    setUniform4iv(e, t) {
                        if (this.uniform4ivCache.hasOwnProperty(e)) {
                            const n = this.uniform4ivCache[e];
                            if (t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]) return
                        }
                        this.uniform4ivCache[e] = t;
                        const n = this.getUniformLocation(e);
                        this.context.uniform4iv(n, t)
                    }
                    getUniformLocation(e) {
                        return this.programUniformLocationCache.hasOwnProperty(e) ? this.programUniformLocationCache[e] : this.programUniformLocationCache[e] = this.context.getUniformLocation(this.program, e)
                    }
                    _getFragShaderArtifactMap(e) {
                        return {
                            HEADER: this._getHeaderString(),
                            LOOP_MAX: this._getLoopMaxString(),
                            PLUGINS: this._getPluginsString(),
                            CONSTANTS: this._getConstantsString(),
                            DECODE32_ENDIANNESS: this._getDecode32EndiannessString(),
                            ENCODE32_ENDIANNESS: this._getEncode32EndiannessString(),
                            DIVIDE_WITH_INTEGER_CHECK: this._getDivideWithIntegerCheckString(),
                            INJECTED_NATIVE: this._getInjectedNative(),
                            MAIN_CONSTANTS: this._getMainConstantsString(),
                            MAIN_ARGUMENTS: this._getMainArgumentsString(e),
                            KERNEL: this.getKernelString(),
                            MAIN_RESULT: this.getMainResultString(),
                            FLOAT_TACTIC_DECLARATION: this.getFloatTacticDeclaration(),
                            INT_TACTIC_DECLARATION: this.getIntTacticDeclaration(),
                            SAMPLER_2D_TACTIC_DECLARATION: this.getSampler2DTacticDeclaration(),
                            SAMPLER_2D_ARRAY_TACTIC_DECLARATION: this.getSampler2DArrayTacticDeclaration()
                        }
                    }
                    _getVertShaderArtifactMap(e) {
                        return {
                            FLOAT_TACTIC_DECLARATION: this.getFloatTacticDeclaration(),
                            INT_TACTIC_DECLARATION: this.getIntTacticDeclaration(),
                            SAMPLER_2D_TACTIC_DECLARATION: this.getSampler2DTacticDeclaration(),
                            SAMPLER_2D_ARRAY_TACTIC_DECLARATION: this.getSampler2DArrayTacticDeclaration()
                        }
                    }
                    _getHeaderString() {
                        return null !== this.subKernels ? "#extension GL_EXT_draw_buffers : require\n" : ""
                    }
                    _getLoopMaxString() {
                        return this.loopMaxIterations ? ` ${parseInt(this.loopMaxIterations)};\n` : " 1000;\n"
                    }
                    _getPluginsString() {
                        return this.plugins ? this.plugins.map(e => e.source && this.source.match(e.functionMatch) ? e.source : "").join("\n") : "\n"
                    }
                    _getConstantsString() {
                        const e = [],
                            {
                                threadDim: t,
                                texSize: n
                            } = this;
                        return this.dynamicOutput ? e.push("uniform ivec3 uOutputDim", "uniform ivec2 uTexSize") : e.push(`ivec3 uOutputDim = ivec3(${t[0]}, ${t[1]}, ${t[2]})`, `ivec2 uTexSize = ivec2(${n[0]}, ${n[1]})`), a.linesToString(e)
                    }
                    _getTextureCoordinate() {
                        const e = this.subKernels;
                        return null === e || e.length < 1 ? "varying vec2 vTexCoord;\n" : "out vec2 vTexCoord;\n"
                    }
                    _getDecode32EndiannessString() {
                        return "LE" === this.endianness ? "" : "  texel.rgba = texel.abgr;\n"
                    }
                    _getEncode32EndiannessString() {
                        return "LE" === this.endianness ? "" : "  texel.rgba = texel.abgr;\n"
                    }
                    _getDivideWithIntegerCheckString() {
                        return this.fixIntegerDivisionAccuracy ? "float divWithIntCheck(float x, float y) {\n  if (floor(x) == x && floor(y) == y && integerMod(x, y) == 0.0) {\n    return float(int(x) / int(y));\n  }\n  return x / y;\n}\n\nfloat integerCorrectionModulo(float number, float divisor) {\n  if (number < 0.0) {\n    number = abs(number);\n    if (divisor < 0.0) {\n      divisor = abs(divisor);\n    }\n    return -(number - (divisor * floor(divWithIntCheck(number, divisor))));\n  }\n  if (divisor < 0.0) {\n    divisor = abs(divisor);\n  }\n  return number - (divisor * floor(divWithIntCheck(number, divisor)));\n}" : ""
                    }
                    _getMainArgumentsString(e) {
                        const t = [],
                            {
                                argumentNames: n
                            } = this;
                        for (let r = 0; r < n.length; r++) t.push(this.kernelArguments[r].getSource(e[r]));
                        return t.join("")
                    }
                    _getInjectedNative() {
                        return this.injectedNative || ""
                    }
                    _getMainConstantsString() {
                        const e = [],
                            {
                                constants: t
                            } = this;
                        if (t) {
                            let n = 0;
                            for (const r in t) this.constants.hasOwnProperty(r) && e.push(this.kernelConstants[n++].getSource(this.constants[r]))
                        }
                        return e.join("")
                    }
                    getKernelResultDeclaration() {
                        switch (this.returnType) {
                            case "Array(2)":
                                return "vec2 kernelResult";
                            case "Array(3)":
                                return "vec3 kernelResult";
                            case "Array(4)":
                                return "vec4 kernelResult";
                            case "LiteralInteger":
                            case "Float":
                            case "Number":
                            case "Integer":
                                return "float kernelResult";
                            default:
                                if (this.graphical) return "float kernelResult";
                                throw new Error(`unrecognized output type "${this.returnType}"`)
                        }
                    }
                    getKernelString() {
                        const e = [this.getKernelResultDeclaration()],
                            {
                                subKernels: t
                            } = this;
                        if (null !== t) switch (this.returnType) {
                            case "Number":
                            case "Float":
                            case "Integer":
                                for (let n = 0; n < t.length; n++) {
                                    const r = t[n];
                                    e.push("Integer" === r.returnType ? `int subKernelResult_${r.name} = 0` : `float subKernelResult_${r.name} = 0.0`)
                                }
                                break;
                            case "Array(2)":
                                for (let n = 0; n < t.length; n++) e.push(`vec2 subKernelResult_${t[n].name}`);
                                break;
                            case "Array(3)":
                                for (let n = 0; n < t.length; n++) e.push(`vec3 subKernelResult_${t[n].name}`);
                                break;
                            case "Array(4)":
                                for (let n = 0; n < t.length; n++) e.push(`vec4 subKernelResult_${t[n].name}`)
                        }
                        return a.linesToString(e) + this.translatedSource
                    }
                    getMainResultGraphical() {
                        return a.linesToString(["  threadId = indexTo3D(index, uOutputDim)", "  kernel()", "  gl_FragColor = actualColor"])
                    }
                    getMainResultPackedPixels() {
                        switch (this.returnType) {
                            case "LiteralInteger":
                            case "Number":
                            case "Integer":
                            case "Float":
                                return this.getMainResultKernelPackedPixels() + this.getMainResultSubKernelPackedPixels();
                            default:
                                throw new Error(`packed output only usable with Numbers, "${this.returnType}" specified`)
                        }
                    }
                    getMainResultKernelPackedPixels() {
                        return a.linesToString(["  threadId = indexTo3D(index, uOutputDim)", "  kernel()", `  gl_FragData[0] = ${this.useLegacyEncoder?"legacyEncode32":"encode32"}(kernelResult)`])
                    }
                    getMainResultSubKernelPackedPixels() {
                        const e = [];
                        if (!this.subKernels) return "";
                        for (let t = 0; t < this.subKernels.length; t++) "Integer" === this.subKernels[t].returnType ? e.push(`  gl_FragData[${t+1}] = ${this.useLegacyEncoder?"legacyEncode32":"encode32"}(float(subKernelResult_${this.subKernels[t].name}))`) : e.push(`  gl_FragData[${t+1}] = ${this.useLegacyEncoder?"legacyEncode32":"encode32"}(subKernelResult_${this.subKernels[t].name})`);
                        return a.linesToString(e)
                    }
                    getMainResultMemoryOptimizedFloats() {
                        const e = ["  index *= 4"];
                        switch (this.returnType) {
                            case "Number":
                            case "Integer":
                            case "Float":
                                const t = ["r", "g", "b", "a"];
                                for (let n = 0; n < t.length; n++) {
                                    const r = t[n];
                                    this.getMainResultKernelMemoryOptimizedFloats(e, r), this.getMainResultSubKernelMemoryOptimizedFloats(e, r), n + 1 < t.length && e.push("  index += 1")
                                }
                                break;
                            default:
                                throw new Error(`optimized output only usable with Numbers, ${this.returnType} specified`)
                        }
                        return a.linesToString(e)
                    }
                    getMainResultKernelMemoryOptimizedFloats(e, t) {
                        e.push("  threadId = indexTo3D(index, uOutputDim)", "  kernel()", `  gl_FragData[0].${t} = kernelResult`)
                    }
                    getMainResultSubKernelMemoryOptimizedFloats(e, t) {
                        if (!this.subKernels) return e;
                        for (let n = 0; n < this.subKernels.length; n++) "Integer" === this.subKernels[n].returnType ? e.push(`  gl_FragData[${n+1}].${t} = float(subKernelResult_${this.subKernels[n].name})`) : e.push(`  gl_FragData[${n+1}].${t} = subKernelResult_${this.subKernels[n].name}`)
                    }
                    getMainResultKernelNumberTexture() {
                        return ["  threadId = indexTo3D(index, uOutputDim)", "  kernel()", "  gl_FragData[0][0] = kernelResult"]
                    }
                    getMainResultSubKernelNumberTexture() {
                        const e = [];
                        if (!this.subKernels) return e;
                        for (let t = 0; t < this.subKernels.length; ++t) {
                            const n = this.subKernels[t];
                            "Integer" === n.returnType ? e.push(`  gl_FragData[${t+1}][0] = float(subKernelResult_${n.name})`) : e.push(`  gl_FragData[${t+1}][0] = subKernelResult_${n.name}`)
                        }
                        return e
                    }
                    getMainResultKernelArray2Texture() {
                        return ["  threadId = indexTo3D(index, uOutputDim)", "  kernel()", "  gl_FragData[0][0] = kernelResult[0]", "  gl_FragData[0][1] = kernelResult[1]"]
                    }
                    getMainResultSubKernelArray2Texture() {
                        const e = [];
                        if (!this.subKernels) return e;
                        for (let t = 0; t < this.subKernels.length; ++t) e.push(`  gl_FragData[${t+1}][0] = subKernelResult_${this.subKernels[t].name}[0]`, `  gl_FragData[${t+1}][1] = subKernelResult_${this.subKernels[t].name}[1]`);
                        return e
                    }
                    getMainResultKernelArray3Texture() {
                        return ["  threadId = indexTo3D(index, uOutputDim)", "  kernel()", "  gl_FragData[0][0] = kernelResult[0]", "  gl_FragData[0][1] = kernelResult[1]", "  gl_FragData[0][2] = kernelResult[2]"]
                    }
                    getMainResultSubKernelArray3Texture() {
                        const e = [];
                        if (!this.subKernels) return e;
                        for (let t = 0; t < this.subKernels.length; ++t) e.push(`  gl_FragData[${t+1}][0] = subKernelResult_${this.subKernels[t].name}[0]`, `  gl_FragData[${t+1}][1] = subKernelResult_${this.subKernels[t].name}[1]`, `  gl_FragData[${t+1}][2] = subKernelResult_${this.subKernels[t].name}[2]`);
                        return e
                    }
                    getMainResultKernelArray4Texture() {
                        return ["  threadId = indexTo3D(index, uOutputDim)", "  kernel()", "  gl_FragData[0] = kernelResult"]
                    }
                    getMainResultSubKernelArray4Texture() {
                        const e = [];
                        if (!this.subKernels) return e;
                        switch (this.returnType) {
                            case "Number":
                            case "Float":
                            case "Integer":
                                for (let t = 0; t < this.subKernels.length; ++t) "Integer" === this.subKernels[t].returnType ? e.push(`  gl_FragData[${t+1}] = float(subKernelResult_${this.subKernels[t].name})`) : e.push(`  gl_FragData[${t+1}] = subKernelResult_${this.subKernels[t].name}`);
                                break;
                            case "Array(2)":
                                for (let t = 0; t < this.subKernels.length; ++t) e.push(`  gl_FragData[${t+1}][0] = subKernelResult_${this.subKernels[t].name}[0]`, `  gl_FragData[${t+1}][1] = subKernelResult_${this.subKernels[t].name}[1]`);
                                break;
                            case "Array(3)":
                                for (let t = 0; t < this.subKernels.length; ++t) e.push(`  gl_FragData[${t+1}][0] = subKernelResult_${this.subKernels[t].name}[0]`, `  gl_FragData[${t+1}][1] = subKernelResult_${this.subKernels[t].name}[1]`, `  gl_FragData[${t+1}][2] = subKernelResult_${this.subKernels[t].name}[2]`);
                                break;
                            case "Array(4)":
                                for (let t = 0; t < this.subKernels.length; ++t) e.push(`  gl_FragData[${t+1}][0] = subKernelResult_${this.subKernels[t].name}[0]`, `  gl_FragData[${t+1}][1] = subKernelResult_${this.subKernels[t].name}[1]`, `  gl_FragData[${t+1}][2] = subKernelResult_${this.subKernels[t].name}[2]`, `  gl_FragData[${t+1}][3] = subKernelResult_${this.subKernels[t].name}[3]`)
                        }
                        return e
                    }
                    replaceArtifacts(e, t) {
                        return e.replace(/[ ]*__([A-Z]+[0-9]*([_]?[A-Z]*[0-9]?)*)__;\n/g, (e, n) => {
                            if (t.hasOwnProperty(n)) return t[n];
                            throw `unhandled artifact ${n}`
                        })
                    }
                    getFragmentShader(e) {
                        return null !== this.compiledFragmentShader ? this.compiledFragmentShader : this.compiledFragmentShader = this.replaceArtifacts(this.constructor.fragmentShader, this._getFragShaderArtifactMap(e))
                    }
                    getVertexShader(e) {
                        return null !== this.compiledVertexShader ? this.compiledVertexShader : this.compiledVertexShader = this.replaceArtifacts(this.constructor.vertexShader, this._getVertShaderArtifactMap(e))
                    }
                    toString() {
                        const e = a.linesToString(["const gl = context"]);
                        return h(this.constructor, arguments, this, e)
                    }
                    destroy(e) {
                        if (!this.context) return;
                        if (this.buffer && this.context.deleteBuffer(this.buffer), this.framebuffer && this.context.deleteFramebuffer(this.framebuffer), this.vertShader && this.context.deleteShader(this.vertShader), this.fragShader && this.context.deleteShader(this.fragShader), this.program && this.context.deleteProgram(this.program), this.texture) {
                            this.texture.delete();
                            const e = this.textureCache.indexOf(this.texture.texture);
                            e > -1 && this.textureCache.splice(e, 1), this.texture = null
                        }
                        if (this.mappedTextures && this.mappedTextures.length) {
                            for (let e = 0; e < this.mappedTextures.length; e++) {
                                const t = this.mappedTextures[e];
                                t.delete();
                                const n = this.textureCache.indexOf(t.texture);
                                n > -1 && this.textureCache.splice(n, 1)
                            }
                            this.mappedTextures = null
                        }
                        if (this.kernelArguments)
                            for (let e = 0; e < this.kernelArguments.length; e++) this.kernelArguments[e].destroy();
                        if (this.kernelConstants)
                            for (let e = 0; e < this.kernelConstants.length; e++) this.kernelConstants[e].destroy();
                        for (; this.textureCache.length > 0;) {
                            const e = this.textureCache.pop();
                            this.context.deleteTexture(e)
                        }
                        if (e) {
                            const e = y.indexOf(this.canvas);
                            e >= 0 && (y[e] = null, b[e] = null)
                        }
                        if (this.destroyExtensions(), delete this.context, delete this.canvas, !this.gpu) return;
                        const t = this.gpu.kernels.indexOf(this); - 1 !== t && this.gpu.kernels.splice(t, 1)
                    }
                    destroyExtensions() {
                        this.extensions.OES_texture_float = null, this.extensions.OES_texture_float_linear = null, this.extensions.OES_element_index_uint = null, this.extensions.WEBGL_draw_buffers = null
                    }
                    static destroyContext(e) {
                        const t = e.getExtension("WEBGL_lose_context");
                        t && t.loseContext()
                    }
                    toJSON() {
                        const e = super.toJSON();
                        return e.functionNodes = i.fromKernel(this, s).toJSON(), e.settings.threadDim = this.threadDim, e
                    }
                }
            }
        }, {
            "../../plugins/math-random-uniformly-distributed": 112,
            "../../utils": 114,
            "../function-builder": 9,
            "../gl/kernel": 13,
            "../gl/kernel-string": 12,
            "./fragment-shader": 37,
            "./function-node": 38,
            "./kernel-value-maps": 39,
            "./vertex-shader": 71
        }],
        71: [function (e, t, n) {
            t.exports = {
                vertexShader: "__FLOAT_TACTIC_DECLARATION__;\n__INT_TACTIC_DECLARATION__;\n__SAMPLER_2D_TACTIC_DECLARATION__;\n\nattribute vec2 aPos;\nattribute vec2 aTexCoord;\n\nvarying vec2 vTexCoord;\nuniform vec2 ratio;\n\nvoid main(void) {\n  gl_Position = vec4((aPos + vec2(1)) * ratio + vec2(-1), 0, 1);\n  vTexCoord = aTexCoord;\n}"
            }
        }, {}],
        72: [function (e, t, n) {
            const r = `#version 300 es\n__HEADER__;\n__FLOAT_TACTIC_DECLARATION__;\n__INT_TACTIC_DECLARATION__;\n__SAMPLER_2D_TACTIC_DECLARATION__;\n__SAMPLER_2D_ARRAY_TACTIC_DECLARATION__;\n\nconst int LOOP_MAX = __LOOP_MAX__;\n\n__PLUGINS__;\n__CONSTANTS__;\n\nin vec2 vTexCoord;\n\nfloat atan2(float v1, float v2) {\n  if (v1 == 0.0 || v2 == 0.0) return 0.0;\n  return atan(v1 / v2);\n}\n\nfloat cbrt(float x) {\n  if (x >= 0.0) {\n    return pow(x, 1.0 / 3.0);\n  } else {\n    return -pow(x, 1.0 / 3.0);\n  }\n}\n\nfloat expm1(float x) {\n  return pow(${Math.E}, x) - 1.0; \n}\n\nfloat fround(highp float x) {\n  return x;\n}\n\nfloat imul(float v1, float v2) {\n  return float(int(v1) * int(v2));\n}\n\nfloat log10(float x) {\n  return log2(x) * (1.0 / log2(10.0));\n}\n\nfloat log1p(float x) {\n  return log(1.0 + x);\n}\n\nfloat _pow(float v1, float v2) {\n  if (v2 == 0.0) return 1.0;\n  return pow(v1, v2);\n}\n\nfloat _round(float x) {\n  return floor(x + 0.5);\n}\n\n\nconst int BIT_COUNT = 32;\nint modi(int x, int y) {\n  return x - y * (x / y);\n}\n\nint bitwiseOr(int a, int b) {\n  int result = 0;\n  int n = 1;\n  \n  for (int i = 0; i < BIT_COUNT; i++) {\n    if ((modi(a, 2) == 1) || (modi(b, 2) == 1)) {\n      result += n;\n    }\n    a = a / 2;\n    b = b / 2;\n    n = n * 2;\n    if(!(a > 0 || b > 0)) {\n      break;\n    }\n  }\n  return result;\n}\nint bitwiseXOR(int a, int b) {\n  int result = 0;\n  int n = 1;\n  \n  for (int i = 0; i < BIT_COUNT; i++) {\n    if ((modi(a, 2) == 1) != (modi(b, 2) == 1)) {\n      result += n;\n    }\n    a = a / 2;\n    b = b / 2;\n    n = n * 2;\n    if(!(a > 0 || b > 0)) {\n      break;\n    }\n  }\n  return result;\n}\nint bitwiseAnd(int a, int b) {\n  int result = 0;\n  int n = 1;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if ((modi(a, 2) == 1) && (modi(b, 2) == 1)) {\n      result += n;\n    }\n    a = a / 2;\n    b = b / 2;\n    n = n * 2;\n    if(!(a > 0 && b > 0)) {\n      break;\n    }\n  }\n  return result;\n}\nint bitwiseNot(int a) {\n  int result = 0;\n  int n = 1;\n  \n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (modi(a, 2) == 0) {\n      result += n;    \n    }\n    a = a / 2;\n    n = n * 2;\n  }\n  return result;\n}\nint bitwiseZeroFillLeftShift(int n, int shift) {\n  int maxBytes = BIT_COUNT;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (maxBytes >= n) {\n      break;\n    }\n    maxBytes *= 2;\n  }\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= shift) {\n      break;\n    }\n    n *= 2;\n  }\n\n  int result = 0;\n  int byteVal = 1;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= maxBytes) break;\n    if (modi(n, 2) > 0) { result += byteVal; }\n    n = int(n / 2);\n    byteVal *= 2;\n  }\n  return result;\n}\n\nint bitwiseSignedRightShift(int num, int shifts) {\n  return int(floor(float(num) / pow(2.0, float(shifts))));\n}\n\nint bitwiseZeroFillRightShift(int n, int shift) {\n  int maxBytes = BIT_COUNT;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (maxBytes >= n) {\n      break;\n    }\n    maxBytes *= 2;\n  }\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= shift) {\n      break;\n    }\n    n /= 2;\n  }\n  int result = 0;\n  int byteVal = 1;\n  for (int i = 0; i < BIT_COUNT; i++) {\n    if (i >= maxBytes) break;\n    if (modi(n, 2) > 0) { result += byteVal; }\n    n = int(n / 2);\n    byteVal *= 2;\n  }\n  return result;\n}\n\nvec2 integerMod(vec2 x, float y) {\n  vec2 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nvec3 integerMod(vec3 x, float y) {\n  vec3 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nvec4 integerMod(vec4 x, vec4 y) {\n  vec4 res = floor(mod(x, y));\n  return res * step(1.0 - floor(y), -res);\n}\n\nfloat integerMod(float x, float y) {\n  float res = floor(mod(x, y));\n  return res * (res > floor(y) - 1.0 ? 0.0 : 1.0);\n}\n\nint integerMod(int x, int y) {\n  return x - (y * int(x/y));\n}\n\n__DIVIDE_WITH_INTEGER_CHECK__;\n\n// Here be dragons!\n// DO NOT OPTIMIZE THIS CODE\n// YOU WILL BREAK SOMETHING ON SOMEBODY'S MACHINE\n// LEAVE IT AS IT IS, LEST YOU WASTE YOUR OWN TIME\nconst vec2 MAGIC_VEC = vec2(1.0, -256.0);\nconst vec4 SCALE_FACTOR = vec4(1.0, 256.0, 65536.0, 0.0);\nconst vec4 SCALE_FACTOR_INV = vec4(1.0, 0.00390625, 0.0000152587890625, 0.0); // 1, 1/256, 1/65536\nfloat decode32(vec4 texel) {\n  __DECODE32_ENDIANNESS__;\n  texel *= 255.0;\n  vec2 gte128;\n  gte128.x = texel.b >= 128.0 ? 1.0 : 0.0;\n  gte128.y = texel.a >= 128.0 ? 1.0 : 0.0;\n  float exponent = 2.0 * texel.a - 127.0 + dot(gte128, MAGIC_VEC);\n  float res = exp2(round(exponent));\n  texel.b = texel.b - 128.0 * gte128.x;\n  res = dot(texel, SCALE_FACTOR) * exp2(round(exponent-23.0)) + res;\n  res *= gte128.y * -2.0 + 1.0;\n  return res;\n}\n\nfloat decode16(vec4 texel, int index) {\n  int channel = integerMod(index, 2);\n  return texel[channel*2] * 255.0 + texel[channel*2 + 1] * 65280.0;\n}\n\nfloat decode8(vec4 texel, int index) {\n  int channel = integerMod(index, 4);\n  return texel[channel] * 255.0;\n}\n\nvec4 legacyEncode32(float f) {\n  float F = abs(f);\n  float sign = f < 0.0 ? 1.0 : 0.0;\n  float exponent = floor(log2(F));\n  float mantissa = (exp2(-exponent) * F);\n  // exponent += floor(log2(mantissa));\n  vec4 texel = vec4(F * exp2(23.0-exponent)) * SCALE_FACTOR_INV;\n  texel.rg = integerMod(texel.rg, 256.0);\n  texel.b = integerMod(texel.b, 128.0);\n  texel.a = exponent*0.5 + 63.5;\n  texel.ba += vec2(integerMod(exponent+127.0, 2.0), sign) * 128.0;\n  texel = floor(texel);\n  texel *= 0.003921569; // 1/255\n  __ENCODE32_ENDIANNESS__;\n  return texel;\n}\n\n// https://github.com/gpujs/gpu.js/wiki/Encoder-details\nvec4 encode32(float value) {\n  if (value == 0.0) return vec4(0, 0, 0, 0);\n\n  float exponent;\n  float mantissa;\n  vec4  result;\n  float sgn;\n\n  sgn = step(0.0, -value);\n  value = abs(value);\n\n  exponent = floor(log2(value));\n\n  mantissa = value*pow(2.0, -exponent)-1.0;\n  exponent = exponent+127.0;\n  result   = vec4(0,0,0,0);\n\n  result.a = floor(exponent/2.0);\n  exponent = exponent - result.a*2.0;\n  result.a = result.a + 128.0*sgn;\n\n  result.b = floor(mantissa * 128.0);\n  mantissa = mantissa - result.b / 128.0;\n  result.b = result.b + exponent*128.0;\n\n  result.g = floor(mantissa*32768.0);\n  mantissa = mantissa - result.g/32768.0;\n\n  result.r = floor(mantissa*8388608.0);\n  return result/255.0;\n}\n// Dragons end here\n\nint index;\nivec3 threadId;\n\nivec3 indexTo3D(int idx, ivec3 texDim) {\n  int z = int(idx / (texDim.x * texDim.y));\n  idx -= z * int(texDim.x * texDim.y);\n  int y = int(idx / texDim.x);\n  int x = int(integerMod(idx, texDim.x));\n  return ivec3(x, y, z);\n}\n\nfloat get32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture(tex, st / vec2(texSize));\n  return decode32(texel);\n}\n\nfloat get16(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + (texDim.x * (y + (texDim.y * z)));\n  int w = texSize.x * 2;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture(tex, st / vec2(texSize.x * 2, texSize.y));\n  return decode16(texel, index);\n}\n\nfloat get8(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + (texDim.x * (y + (texDim.y * z)));\n  int w = texSize.x * 4;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture(tex, st / vec2(texSize.x * 4, texSize.y));\n  return decode8(texel, index);\n}\n\nfloat getMemoryOptimized32(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + (texDim.x * (y + (texDim.y * z)));\n  int channel = integerMod(index, 4);\n  index = index / 4;\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  index = index / 4;\n  vec4 texel = texture(tex, st / vec2(texSize));\n  return texel[channel];\n}\n\nvec4 getImage2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  return texture(tex, st / vec2(texSize));\n}\n\nvec4 getImage3D(sampler2DArray tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  return texture(tex, vec3(st / vec2(texSize), z));\n}\n\nfloat getFloatFromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n  return result[0];\n}\n\nvec2 getVec2FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n  return vec2(result[0], result[1]);\n}\n\nvec2 getMemoryOptimizedVec2(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int channel = integerMod(index, 2);\n  index = index / 2;\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture(tex, st / vec2(texSize));\n  if (channel == 0) return vec2(texel.r, texel.g);\n  if (channel == 1) return vec2(texel.b, texel.a);\n  return vec2(0.0, 0.0);\n}\n\nvec3 getVec3FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  vec4 result = getImage2D(tex, texSize, texDim, z, y, x);\n  return vec3(result[0], result[1], result[2]);\n}\n\nvec3 getMemoryOptimizedVec3(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int fieldIndex = 3 * (x + texDim.x * (y + texDim.y * z));\n  int vectorIndex = fieldIndex / 4;\n  int vectorOffset = fieldIndex - vectorIndex * 4;\n  int readY = vectorIndex / texSize.x;\n  int readX = vectorIndex - readY * texSize.x;\n  vec4 tex1 = texture(tex, (vec2(readX, readY) + 0.5) / vec2(texSize));\n\n  if (vectorOffset == 0) {\n    return tex1.xyz;\n  } else if (vectorOffset == 1) {\n    return tex1.yzw;\n  } else {\n    readX++;\n    if (readX >= texSize.x) {\n      readX = 0;\n      readY++;\n    }\n    vec4 tex2 = texture(tex, vec2(readX, readY) / vec2(texSize));\n    if (vectorOffset == 2) {\n      return vec3(tex1.z, tex1.w, tex2.x);\n    } else {\n      return vec3(tex1.w, tex2.x, tex2.y);\n    }\n  }\n}\n\nvec4 getVec4FromSampler2D(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  return getImage2D(tex, texSize, texDim, z, y, x);\n}\n\nvec4 getMemoryOptimizedVec4(sampler2D tex, ivec2 texSize, ivec3 texDim, int z, int y, int x) {\n  int index = x + texDim.x * (y + texDim.y * z);\n  int channel = integerMod(index, 2);\n  int w = texSize.x;\n  vec2 st = vec2(float(integerMod(index, w)), float(index / w)) + 0.5;\n  vec4 texel = texture(tex, st / vec2(texSize));\n  return vec4(texel.r, texel.g, texel.b, texel.a);\n}\n\nvec4 actualColor;\nvoid color(float r, float g, float b, float a) {\n  actualColor = vec4(r,g,b,a);\n}\n\nvoid color(float r, float g, float b) {\n  color(r,g,b,1.0);\n}\n\nfloat modulo(float number, float divisor) {\n  if (number < 0.0) {\n    number = abs(number);\n    if (divisor < 0.0) {\n      divisor = abs(divisor);\n    }\n    return -mod(number, divisor);\n  }\n  if (divisor < 0.0) {\n    divisor = abs(divisor);\n  }\n  return mod(number, divisor);\n}\n\n__INJECTED_NATIVE__;\n__MAIN_CONSTANTS__;\n__MAIN_ARGUMENTS__;\n__KERNEL__;\n\nvoid main(void) {\n  index = int(vTexCoord.s * float(uTexSize.x)) + int(vTexCoord.t * float(uTexSize.y)) * uTexSize.x;\n  __MAIN_RESULT__;\n}`;
            t.exports = {
                fragmentShader: r
            }
        }, {}],
        73: [function (e, t, n) {
            const {
                utils: r
            } = e("../../utils"), {
                WebGLFunctionNode: i
            } = e("../web-gl/function-node");
            t.exports = {
                WebGL2FunctionNode: class extends i {
                    astIdentifierExpression(e, t) {
                        if ("Identifier" !== e.type) throw this.astErrorOutput("IdentifierExpression - not an Identifier", e);
                        const n = this.getType(e),
                            i = r.sanitizeName(e.name);
                        return "Infinity" === e.name ? t.push("intBitsToFloat(2139095039)") : "Boolean" === n && this.argumentNames.indexOf(i) > -1 ? t.push(`bool(user_${i})`) : t.push(`user_${i}`), t
                    }
                }
            }
        }, {
            "../../utils": 114,
            "../web-gl/function-node": 38
        }],
        74: [function (e, t, n) {
            const {
                WebGL2KernelValueBoolean: r
            } = e("./kernel-value/boolean"), {
                WebGL2KernelValueFloat: i
            } = e("./kernel-value/float"), {
                WebGL2KernelValueInteger: s
            } = e("./kernel-value/integer"), {
                WebGL2KernelValueHTMLImage: a
            } = e("./kernel-value/html-image"), {
                WebGL2KernelValueDynamicHTMLImage: o
            } = e("./kernel-value/dynamic-html-image"), {
                WebGL2KernelValueHTMLImageArray: u
            } = e("./kernel-value/html-image-array"), {
                WebGL2KernelValueDynamicHTMLImageArray: l
            } = e("./kernel-value/dynamic-html-image-array"), {
                WebGL2KernelValueHTMLVideo: h
            } = e("./kernel-value/html-video"), {
                WebGL2KernelValueDynamicHTMLVideo: c
            } = e("./kernel-value/dynamic-html-video"), {
                WebGL2KernelValueSingleInput: p
            } = e("./kernel-value/single-input"), {
                WebGL2KernelValueDynamicSingleInput: d
            } = e("./kernel-value/dynamic-single-input"), {
                WebGL2KernelValueUnsignedInput: m
            } = e("./kernel-value/unsigned-input"), {
                WebGL2KernelValueDynamicUnsignedInput: g
            } = e("./kernel-value/dynamic-unsigned-input"), {
                WebGL2KernelValueMemoryOptimizedNumberTexture: f
            } = e("./kernel-value/memory-optimized-number-texture"), {
                WebGL2KernelValueDynamicMemoryOptimizedNumberTexture: x
            } = e("./kernel-value/dynamic-memory-optimized-number-texture"), {
                WebGL2KernelValueNumberTexture: y
            } = e("./kernel-value/number-texture"), {
                WebGL2KernelValueDynamicNumberTexture: b
            } = e("./kernel-value/dynamic-number-texture"), {
                WebGL2KernelValueSingleArray: T
            } = e("./kernel-value/single-array"), {
                WebGL2KernelValueDynamicSingleArray: v
            } = e("./kernel-value/dynamic-single-array"), {
                WebGL2KernelValueSingleArray1DI: S
            } = e("./kernel-value/single-array1d-i"), {
                WebGL2KernelValueDynamicSingleArray1DI: A
            } = e("./kernel-value/dynamic-single-array1d-i"), {
                WebGL2KernelValueSingleArray2DI: _
            } = e("./kernel-value/single-array2d-i"), {
                WebGL2KernelValueDynamicSingleArray2DI: E
            } = e("./kernel-value/dynamic-single-array2d-i"), {
                WebGL2KernelValueSingleArray3DI: w
            } = e("./kernel-value/single-array3d-i"), {
                WebGL2KernelValueDynamicSingleArray3DI: k
            } = e("./kernel-value/dynamic-single-array3d-i"), {
                WebGL2KernelValueSingleArray2: I
            } = e("./kernel-value/single-array2"), {
                WebGL2KernelValueSingleArray3: D
            } = e("./kernel-value/single-array3"), {
                WebGL2KernelValueSingleArray4: C
            } = e("./kernel-value/single-array4"), {
                WebGL2KernelValueUnsignedArray: $
            } = e("./kernel-value/unsigned-array"), {
                WebGL2KernelValueDynamicUnsignedArray: L
            } = e("./kernel-value/dynamic-unsigned-array"), R = {
                unsigned: {
                    dynamic: {
                        Boolean: r,
                        Integer: s,
                        Float: i,
                        Array: L,
                        "Array(2)": !1,
                        "Array(3)": !1,
                        "Array(4)": !1,
                        "Array1D(2)": !1,
                        "Array1D(3)": !1,
                        "Array1D(4)": !1,
                        "Array2D(2)": !1,
                        "Array2D(3)": !1,
                        "Array2D(4)": !1,
                        "Array3D(2)": !1,
                        "Array3D(3)": !1,
                        "Array3D(4)": !1,
                        Input: g,
                        NumberTexture: b,
                        "ArrayTexture(1)": b,
                        "ArrayTexture(2)": b,
                        "ArrayTexture(3)": b,
                        "ArrayTexture(4)": b,
                        MemoryOptimizedNumberTexture: x,
                        HTMLCanvas: o,
                        HTMLImage: o,
                        HTMLImageArray: l,
                        HTMLVideo: c
                    },
                    static: {
                        Boolean: r,
                        Float: i,
                        Integer: s,
                        Array: $,
                        "Array(2)": !1,
                        "Array(3)": !1,
                        "Array(4)": !1,
                        "Array1D(2)": !1,
                        "Array1D(3)": !1,
                        "Array1D(4)": !1,
                        "Array2D(2)": !1,
                        "Array2D(3)": !1,
                        "Array2D(4)": !1,
                        "Array3D(2)": !1,
                        "Array3D(3)": !1,
                        "Array3D(4)": !1,
                        Input: m,
                        NumberTexture: y,
                        "ArrayTexture(1)": y,
                        "ArrayTexture(2)": y,
                        "ArrayTexture(3)": y,
                        "ArrayTexture(4)": y,
                        MemoryOptimizedNumberTexture: x,
                        HTMLCanvas: a,
                        HTMLImage: a,
                        HTMLImageArray: u,
                        HTMLVideo: h
                    }
                },
                single: {
                    dynamic: {
                        Boolean: r,
                        Integer: s,
                        Float: i,
                        Array: v,
                        "Array(2)": I,
                        "Array(3)": D,
                        "Array(4)": C,
                        "Array1D(2)": A,
                        "Array1D(3)": A,
                        "Array1D(4)": A,
                        "Array2D(2)": E,
                        "Array2D(3)": E,
                        "Array2D(4)": E,
                        "Array3D(2)": k,
                        "Array3D(3)": k,
                        "Array3D(4)": k,
                        Input: d,
                        NumberTexture: b,
                        "ArrayTexture(1)": b,
                        "ArrayTexture(2)": b,
                        "ArrayTexture(3)": b,
                        "ArrayTexture(4)": b,
                        MemoryOptimizedNumberTexture: x,
                        HTMLCanvas: o,
                        HTMLImage: o,
                        HTMLImageArray: l,
                        HTMLVideo: c
                    },
                    static: {
                        Boolean: r,
                        Float: i,
                        Integer: s,
                        Array: T,
                        "Array(2)": I,
                        "Array(3)": D,
                        "Array(4)": C,
                        "Array1D(2)": S,
                        "Array1D(3)": S,
                        "Array1D(4)": S,
                        "Array2D(2)": _,
                        "Array2D(3)": _,
                        "Array2D(4)": _,
                        "Array3D(2)": w,
                        "Array3D(3)": w,
                        "Array3D(4)": w,
                        Input: p,
                        NumberTexture: y,
                        "ArrayTexture(1)": y,
                        "ArrayTexture(2)": y,
                        "ArrayTexture(3)": y,
                        "ArrayTexture(4)": y,
                        MemoryOptimizedNumberTexture: f,
                        HTMLCanvas: a,
                        HTMLImage: a,
                        HTMLImageArray: u,
                        HTMLVideo: h
                    }
                }
            };
            t.exports = {
                kernelValueMaps: R,
                lookupKernelValueType: function (e, t, n, r) {
                    if (!e) throw new Error("type missing");
                    if (!t) throw new Error("dynamic missing");
                    if (!n) throw new Error("precision missing");
                    r.type && (e = r.type);
                    const i = R[n][t];
                    if (!1 === i[e]) return null;
                    if (void 0 === i[e]) throw new Error(`Could not find a KernelValue for ${e}`);
                    return i[e]
                }
            }
        }, {
            "./kernel-value/boolean": 75,
            "./kernel-value/dynamic-html-image": 77,
            "./kernel-value/dynamic-html-image-array": 76,
            "./kernel-value/dynamic-html-video": 78,
            "./kernel-value/dynamic-memory-optimized-number-texture": 79,
            "./kernel-value/dynamic-number-texture": 80,
            "./kernel-value/dynamic-single-array": 81,
            "./kernel-value/dynamic-single-array1d-i": 82,
            "./kernel-value/dynamic-single-array2d-i": 83,
            "./kernel-value/dynamic-single-array3d-i": 84,
            "./kernel-value/dynamic-single-input": 85,
            "./kernel-value/dynamic-unsigned-array": 86,
            "./kernel-value/dynamic-unsigned-input": 87,
            "./kernel-value/float": 88,
            "./kernel-value/html-image": 90,
            "./kernel-value/html-image-array": 89,
            "./kernel-value/html-video": 91,
            "./kernel-value/integer": 92,
            "./kernel-value/memory-optimized-number-texture": 93,
            "./kernel-value/number-texture": 94,
            "./kernel-value/single-array": 95,
            "./kernel-value/single-array1d-i": 96,
            "./kernel-value/single-array2": 97,
            "./kernel-value/single-array2d-i": 98,
            "./kernel-value/single-array3": 99,
            "./kernel-value/single-array3d-i": 100,
            "./kernel-value/single-array4": 101,
            "./kernel-value/single-input": 102,
            "./kernel-value/unsigned-array": 103,
            "./kernel-value/unsigned-input": 104
        }],
        75: [function (e, t, n) {
            const {
                WebGLKernelValueBoolean: r
            } = e("../../web-gl/kernel-value/boolean");
            t.exports = {
                WebGL2KernelValueBoolean: class extends r {}
            }
        }, {
            "../../web-gl/kernel-value/boolean": 41
        }],
        76: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGL2KernelValueHTMLImageArray: i
            } = e("./html-image-array");
            t.exports = {
                WebGL2KernelValueDynamicHTMLImageArray: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2DArray ${this.id}`, `uniform ${e} ivec2 ${this.sizeId}`, `uniform ${e} ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        const {
                            width: t,
                            height: n
                        } = e[0];
                        this.checkSize(t, n), this.dimensions = [t, n, e.length], this.textureSize = [t, n], this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "./html-image-array": 89
        }],
        77: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueDynamicHTMLImage: i
            } = e("../../web-gl/kernel-value/dynamic-html-image");
            t.exports = {
                WebGL2KernelValueDynamicHTMLImage: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `uniform ${e} ivec2 ${this.sizeId}`, `uniform ${e} ivec3 ${this.dimensionsId}`])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/dynamic-html-image": 42
        }],
        78: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGL2KernelValueDynamicHTMLImage: i
            } = e("./dynamic-html-image");
            t.exports = {
                WebGL2KernelValueDynamicHTMLVideo: class extends i {}
            }
        }, {
            "../../../utils": 114,
            "./dynamic-html-image": 77
        }],
        79: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueDynamicMemoryOptimizedNumberTexture: i
            } = e("../../web-gl/kernel-value/dynamic-memory-optimized-number-texture");
            t.exports = {
                WebGL2KernelValueDynamicMemoryOptimizedNumberTexture: class extends i {
                    getSource() {
                        return r.linesToString([`uniform sampler2D ${this.id}`, `uniform ivec2 ${this.sizeId}`, `uniform ivec3 ${this.dimensionsId}`])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/dynamic-memory-optimized-number-texture": 44
        }],
        80: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueDynamicNumberTexture: i
            } = e("../../web-gl/kernel-value/dynamic-number-texture");
            t.exports = {
                WebGL2KernelValueDynamicNumberTexture: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `uniform ${e} ivec2 ${this.sizeId}`, `uniform ${e} ivec3 ${this.dimensionsId}`])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/dynamic-number-texture": 45
        }],
        81: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGL2KernelValueSingleArray: i
            } = e("../../web-gl2/kernel-value/single-array");
            t.exports = {
                WebGL2KernelValueDynamicSingleArray: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `uniform ${e} ivec2 ${this.sizeId}`, `uniform ${e} ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        this.dimensions = r.getDimensions(e, !0), this.textureSize = r.getMemoryOptimizedFloatTextureSize(this.dimensions, this.bitRatio), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * this.bitRatio, this.checkSize(this.textureSize[0], this.textureSize[1]), this.uploadValue = new Float32Array(this.uploadArrayLength), this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl2/kernel-value/single-array": 95
        }],
        82: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGL2KernelValueSingleArray1DI: i
            } = e("../../web-gl2/kernel-value/single-array1d-i");
            t.exports = {
                WebGL2KernelValueDynamicSingleArray1DI: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `uniform ${e} ivec2 ${this.sizeId}`, `uniform ${e} ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        this.setShape(e), this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl2/kernel-value/single-array1d-i": 96
        }],
        83: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGL2KernelValueSingleArray2DI: i
            } = e("../../web-gl2/kernel-value/single-array2d-i");
            t.exports = {
                WebGL2KernelValueDynamicSingleArray2DI: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `uniform ${e} ivec2 ${this.sizeId}`, `uniform ${e} ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        this.setShape(e), this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl2/kernel-value/single-array2d-i": 98
        }],
        84: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGL2KernelValueSingleArray3DI: i
            } = e("../../web-gl2/kernel-value/single-array3d-i");
            t.exports = {
                WebGL2KernelValueDynamicSingleArray3DI: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `uniform ${e} ivec2 ${this.sizeId}`, `uniform ${e} ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        this.setShape(e), this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl2/kernel-value/single-array3d-i": 100
        }],
        85: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGL2KernelValueSingleInput: i
            } = e("../../web-gl2/kernel-value/single-input");
            t.exports = {
                WebGL2KernelValueDynamicSingleInput: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `uniform ${e} ivec2 ${this.sizeId}`, `uniform ${e} ivec3 ${this.dimensionsId}`])
                    }
                    updateValue(e) {
                        let [t, n, i] = e.size;
                        this.dimensions = new Int32Array([t || 1, n || 1, i || 1]), this.textureSize = r.getMemoryOptimizedFloatTextureSize(this.dimensions, this.bitRatio), this.uploadArrayLength = this.textureSize[0] * this.textureSize[1] * this.bitRatio, this.checkSize(this.textureSize[0], this.textureSize[1]), this.uploadValue = new Float32Array(this.uploadArrayLength), this.kernel.setUniform3iv(this.dimensionsId, this.dimensions), this.kernel.setUniform2iv(this.sizeId, this.textureSize), super.updateValue(e)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl2/kernel-value/single-input": 102
        }],
        86: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueDynamicUnsignedArray: i
            } = e("../../web-gl/kernel-value/dynamic-unsigned-array");
            t.exports = {
                WebGL2KernelValueDynamicUnsignedArray: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `uniform ${e} ivec2 ${this.sizeId}`, `uniform ${e} ivec3 ${this.dimensionsId}`])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/dynamic-unsigned-array": 51
        }],
        87: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueDynamicUnsignedInput: i
            } = e("../../web-gl/kernel-value/dynamic-unsigned-input");
            t.exports = {
                WebGL2KernelValueDynamicUnsignedInput: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `uniform ${e} ivec2 ${this.sizeId}`, `uniform ${e} ivec3 ${this.dimensionsId}`])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/dynamic-unsigned-input": 52
        }],
        88: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueFloat: i
            } = e("../../web-gl/kernel-value/float");
            t.exports = {
                WebGL2KernelValueFloat: class extends i {}
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/float": 53
        }],
        89: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelArray: i
            } = e("../../web-gl/kernel-value/array");
            t.exports = {
                WebGL2KernelValueHTMLImageArray: class extends i {
                    constructor(e, t) {
                        super(e, t), this.checkSize(e[0].width, e[0].height), this.dimensions = [e[0].width, e[0].height, e.length], this.textureSize = [e[0].width, e[0].height]
                    }
                    defineTexture() {
                        const {
                            context: e
                        } = this;
                        e.activeTexture(this.contextHandle), e.bindTexture(e.TEXTURE_2D_ARRAY, this.texture), e.texParameteri(e.TEXTURE_2D_ARRAY, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D_ARRAY, e.TEXTURE_MIN_FILTER, e.NEAREST)
                    }
                    getStringValueHandler() {
                        return `const uploadValue_${this.name} = ${this.varName};\n`
                    }
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2DArray ${this.id}`, `${e} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `${e} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        const {
                            context: t
                        } = this;
                        t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D_ARRAY, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texImage3D(t.TEXTURE_2D_ARRAY, 0, t.RGBA, e[0].width, e[0].height, e.length, 0, t.RGBA, t.UNSIGNED_BYTE, null);
                        for (let n = 0; n < e.length; n++) {
                            const r = 0,
                                i = 0,
                                s = 1;
                            t.texSubImage3D(t.TEXTURE_2D_ARRAY, 0, r, i, n, e[n].width, e[n].height, s, t.RGBA, t.UNSIGNED_BYTE, this.uploadValue = e[n])
                        }
                        this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/array": 40
        }],
        90: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueHTMLImage: i
            } = e("../../web-gl/kernel-value/html-image");
            t.exports = {
                WebGL2KernelValueHTMLImage: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `${e} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `${e} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/html-image": 54
        }],
        91: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGL2KernelValueHTMLImage: i
            } = e("./html-image");
            t.exports = {
                WebGL2KernelValueHTMLVideo: class extends i {}
            }
        }, {
            "../../../utils": 114,
            "./html-image": 90
        }],
        92: [function (e, t, n) {
            const {
                WebGLKernelValueInteger: r
            } = e("../../web-gl/kernel-value/integer");
            t.exports = {
                WebGL2KernelValueInteger: class extends r {
                    getSource(e) {
                        const t = this.getVariablePrecisionString();
                        return "constants" === this.origin ? `const ${t} int ${this.id} = ${parseInt(e)};\n` : `uniform ${t} int ${this.id};\n`
                    }
                    updateValue(e) {
                        "constants" !== this.origin && this.kernel.setUniform1i(this.id, this.uploadValue = e)
                    }
                }
            }
        }, {
            "../../web-gl/kernel-value/integer": 57
        }],
        93: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueMemoryOptimizedNumberTexture: i
            } = e("../../web-gl/kernel-value/memory-optimized-number-texture");
            t.exports = {
                WebGL2KernelValueMemoryOptimizedNumberTexture: class extends i {
                    getSource() {
                        const {
                            id: e,
                            sizeId: t,
                            textureSize: n,
                            dimensionsId: i,
                            dimensions: s
                        } = this, a = this.getVariablePrecisionString();
                        return r.linesToString([`uniform sampler2D ${e}`, `${a} ivec2 ${t} = ivec2(${n[0]}, ${n[1]})`, `${a} ivec3 ${i} = ivec3(${s[0]}, ${s[1]}, ${s[2]})`])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/memory-optimized-number-texture": 58
        }],
        94: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueNumberTexture: i
            } = e("../../web-gl/kernel-value/number-texture");
            t.exports = {
                WebGL2KernelValueNumberTexture: class extends i {
                    getSource() {
                        const {
                            id: e,
                            sizeId: t,
                            textureSize: n,
                            dimensionsId: i,
                            dimensions: s
                        } = this, a = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${a} sampler2D ${e}`, `${a} ivec2 ${t} = ivec2(${n[0]}, ${n[1]})`, `${a} ivec3 ${i} = ivec3(${s[0]}, ${s[1]}, ${s[2]})`])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/number-texture": 59
        }],
        95: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueSingleArray: i
            } = e("../../web-gl/kernel-value/single-array");
            t.exports = {
                WebGL2KernelValueSingleArray: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `${e} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `${e} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        const {
                            context: t
                        } = this;
                        r.flattenTo(e, this.uploadValue), t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA32F, this.textureSize[0], this.textureSize[1], 0, t.RGBA, t.FLOAT, this.uploadValue), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/single-array": 60
        }],
        96: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueSingleArray1DI: i
            } = e("../../web-gl/kernel-value/single-array1d-i");
            t.exports = {
                WebGL2KernelValueSingleArray1DI: class extends i {
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        const {
                            context: t
                        } = this;
                        r.flattenTo(e, this.uploadValue), t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA32F, this.textureSize[0], this.textureSize[1], 0, t.RGBA, t.FLOAT, this.uploadValue), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/single-array1d-i": 61
        }],
        97: [function (e, t, n) {
            const {
                WebGLKernelValueSingleArray2: r
            } = e("../../web-gl/kernel-value/single-array2");
            t.exports = {
                WebGL2KernelValueSingleArray2: class extends r {}
            }
        }, {
            "../../web-gl/kernel-value/single-array2": 62
        }],
        98: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueSingleArray2DI: i
            } = e("../../web-gl/kernel-value/single-array2d-i");
            t.exports = {
                WebGL2KernelValueSingleArray2DI: class extends i {
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        const {
                            context: t
                        } = this;
                        r.flattenTo(e, this.uploadValue), t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA32F, this.textureSize[0], this.textureSize[1], 0, t.RGBA, t.FLOAT, this.uploadValue), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/single-array2d-i": 63
        }],
        99: [function (e, t, n) {
            const {
                WebGLKernelValueSingleArray3: r
            } = e("../../web-gl/kernel-value/single-array3");
            t.exports = {
                WebGL2KernelValueSingleArray3: class extends r {}
            }
        }, {
            "../../web-gl/kernel-value/single-array3": 64
        }],
        100: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueSingleArray3DI: i
            } = e("../../web-gl/kernel-value/single-array3d-i");
            t.exports = {
                WebGL2KernelValueSingleArray3DI: class extends i {
                    updateValue(e) {
                        if (e.constructor !== this.initialValueConstructor) return void this.onUpdateValueMismatch(e.constructor);
                        const {
                            context: t
                        } = this;
                        r.flattenTo(e, this.uploadValue), t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA32F, this.textureSize[0], this.textureSize[1], 0, t.RGBA, t.FLOAT, this.uploadValue), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/single-array3d-i": 65
        }],
        101: [function (e, t, n) {
            const {
                WebGLKernelValueSingleArray4: r
            } = e("../../web-gl/kernel-value/single-array4");
            t.exports = {
                WebGL2KernelValueSingleArray4: class extends r {}
            }
        }, {
            "../../web-gl/kernel-value/single-array4": 66
        }],
        102: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueSingleInput: i
            } = e("../../web-gl/kernel-value/single-input");
            t.exports = {
                WebGL2KernelValueSingleInput: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `${e} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `${e} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                    updateValue(e) {
                        const {
                            context: t
                        } = this;
                        r.flattenTo(e.value, this.uploadValue), t.activeTexture(this.contextHandle), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA32F, this.textureSize[0], this.textureSize[1], 0, t.RGBA, t.FLOAT, this.uploadValue), this.kernel.setUniform1i(this.id, this.index)
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/single-input": 67
        }],
        103: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueUnsignedArray: i
            } = e("../../web-gl/kernel-value/unsigned-array");
            t.exports = {
                WebGL2KernelValueUnsignedArray: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `${e} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `${e} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/unsigned-array": 68
        }],
        104: [function (e, t, n) {
            const {
                utils: r
            } = e("../../../utils"), {
                WebGLKernelValueUnsignedInput: i
            } = e("../../web-gl/kernel-value/unsigned-input");
            t.exports = {
                WebGL2KernelValueUnsignedInput: class extends i {
                    getSource() {
                        const e = this.getVariablePrecisionString();
                        return r.linesToString([`uniform ${e} sampler2D ${this.id}`, `${e} ivec2 ${this.sizeId} = ivec2(${this.textureSize[0]}, ${this.textureSize[1]})`, `${e} ivec3 ${this.dimensionsId} = ivec3(${this.dimensions[0]}, ${this.dimensions[1]}, ${this.dimensions[2]})`])
                    }
                }
            }
        }, {
            "../../../utils": 114,
            "../../web-gl/kernel-value/unsigned-input": 69
        }],
        105: [function (e, t, n) {
            const {
                WebGLKernel: r
            } = e("../web-gl/kernel"), {
                WebGL2FunctionNode: i
            } = e("./function-node"), {
                FunctionBuilder: s
            } = e("../function-builder"), {
                utils: a
            } = e("../../utils"), {
                fragmentShader: o
            } = e("./fragment-shader"), {
                vertexShader: u
            } = e("./vertex-shader"), {
                lookupKernelValueType: l
            } = e("./kernel-value-maps");
            let h = null,
                c = null,
                p = null,
                d = null,
                m = null;
            t.exports = {
                WebGL2Kernel: class extends r {
                    static get isSupported() {
                        return null !== h ? h : (this.setupFeatureChecks(), h = this.isContextMatch(p))
                    }
                    static setupFeatureChecks() {
                        "undefined" != typeof document ? c = document.createElement("canvas") : "undefined" != typeof OffscreenCanvas && (c = new OffscreenCanvas(0, 0)), c && (p = c.getContext("webgl2")) && p.getExtension && (d = {
                            EXT_color_buffer_float: p.getExtension("EXT_color_buffer_float"),
                            OES_texture_float_linear: p.getExtension("OES_texture_float_linear")
                        }, m = this.getFeatures())
                    }
                    static isContextMatch(e) {
                        return "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext
                    }
                    static getFeatures() {
                        const e = this.testContext;
                        return Object.freeze({
                            isFloatRead: this.getIsFloatRead(),
                            isIntegerDivisionAccurate: this.getIsIntegerDivisionAccurate(),
                            isSpeedTacticSupported: this.getIsSpeedTacticSupported(),
                            kernelMap: !0,
                            isTextureFloat: !0,
                            isDrawBuffers: !0,
                            channelCount: this.getChannelCount(),
                            maxTextureSize: this.getMaxTextureSize(),
                            lowIntPrecision: e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT),
                            lowFloatPrecision: e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT),
                            mediumIntPrecision: e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT),
                            mediumFloatPrecision: e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT),
                            highIntPrecision: e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT),
                            highFloatPrecision: e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)
                        })
                    }
                    static getIsTextureFloat() {
                        return !0
                    }
                    static getChannelCount() {
                        return p.getParameter(p.MAX_DRAW_BUFFERS)
                    }
                    static getMaxTextureSize() {
                        return p.getParameter(p.MAX_TEXTURE_SIZE)
                    }
                    static lookupKernelValueType(e, t, n, r) {
                        return l(e, t, n, r)
                    }
                    static get testCanvas() {
                        return c
                    }
                    static get testContext() {
                        return p
                    }
                    static get features() {
                        return m
                    }
                    static get fragmentShader() {
                        return o
                    }
                    static get vertexShader() {
                        return u
                    }
                    initContext() {
                        return this.canvas.getContext("webgl2", {
                            alpha: !1,
                            depth: !1,
                            antialias: !1
                        })
                    }
                    initExtensions() {
                        this.extensions = {
                            EXT_color_buffer_float: this.context.getExtension("EXT_color_buffer_float"),
                            OES_texture_float_linear: this.context.getExtension("OES_texture_float_linear")
                        }
                    }
                    validateSettings(e) {
                        if (!this.validate) return void(this.texSize = a.getKernelTextureSize({
                            optimizeFloatMemory: this.optimizeFloatMemory,
                            precision: this.precision
                        }, this.output));
                        const {
                            features: t
                        } = this.constructor;
                        if ("single" === this.precision && !t.isFloatRead) throw new Error("Float texture outputs are not supported");
                        if (this.graphical || null !== this.precision || (this.precision = t.isFloatRead ? "single" : "unsigned"), null === this.fixIntegerDivisionAccuracy ? this.fixIntegerDivisionAccuracy = !t.isIntegerDivisionAccurate : this.fixIntegerDivisionAccuracy && t.isIntegerDivisionAccurate && (this.fixIntegerDivisionAccuracy = !1), this.checkOutput(), !this.output || 0 === this.output.length) {
                            if (1 !== e.length) throw new Error("Auto output only supported for kernels with only one input");
                            const t = a.getVariableType(e[0], this.strictIntegers);
                            switch (t) {
                                case "Array":
                                    this.output = a.getDimensions(t);
                                    break;
                                case "NumberTexture":
                                case "MemoryOptimizedNumberTexture":
                                case "ArrayTexture(1)":
                                case "ArrayTexture(2)":
                                case "ArrayTexture(3)":
                                case "ArrayTexture(4)":
                                    this.output = e[0].output;
                                    break;
                                default:
                                    throw new Error("Auto output not supported for input type: " + t)
                            }
                        }
                        if (this.graphical) {
                            if (2 !== this.output.length) throw new Error("Output must have 2 dimensions on graphical mode");
                            return "single" === this.precision && (console.warn("Cannot use graphical mode and single precision at the same time"), this.precision = "unsigned"), void(this.texSize = a.clone(this.output))
                        }!this.graphical && null === this.precision && t.isTextureFloat && (this.precision = "single"), this.texSize = a.getKernelTextureSize({
                            optimizeFloatMemory: this.optimizeFloatMemory,
                            precision: this.precision
                        }, this.output), this.checkTextureSize()
                    }
                    translateSource() {
                        const e = s.fromKernel(this, i, {
                            fixIntegerDivisionAccuracy: this.fixIntegerDivisionAccuracy
                        });
                        this.translatedSource = e.getPrototypeString("kernel"), this.setupReturnTypes(e)
                    }
                    drawBuffers() {
                        this.context.drawBuffers(this.drawBuffersMap)
                    }
                    getTextureFormat() {
                        const {
                            context: e
                        } = this;
                        switch (this.getInternalFormat()) {
                            case e.R32F:
                                return e.RED;
                            case e.RG32F:
                                return e.RG;
                            case e.RGBA32F:
                            case e.RGBA:
                                return e.RGBA;
                            default:
                                throw new Error("Unknown internal format")
                        }
                    }
                    getInternalFormat() {
                        const {
                            context: e
                        } = this;
                        if ("single" === this.precision) {
                            if (this.pipeline) switch (this.returnType) {
                                case "Number":
                                case "Float":
                                case "Integer":
                                    return this.optimizeFloatMemory ? e.RGBA32F : e.R32F;
                                case "Array(2)":
                                    return e.RG32F;
                                case "Array(3)":
                                case "Array(4)":
                                    return e.RGBA32F;
                                default:
                                    throw new Error("Unhandled return type")
                            }
                            return e.RGBA32F
                        }
                        return e.RGBA
                    }
                    _setupOutputTexture() {
                        const e = this.context;
                        if (this.texture) return void e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0);
                        e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer);
                        const t = e.createTexture(),
                            n = this.texSize;
                        e.activeTexture(e.TEXTURE0 + this.constantTextureCount + this.argumentTextureCount), e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
                        const r = this.getInternalFormat();
                        "single" === this.precision ? e.texStorage2D(e.TEXTURE_2D, 1, r, n[0], n[1]) : e.texImage2D(e.TEXTURE_2D, 0, r, n[0], n[1], 0, r, e.UNSIGNED_BYTE, null), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0), this.texture = new this.TextureConstructor({
                            texture: t,
                            size: n,
                            dimensions: this.threadDim,
                            output: this.output,
                            context: this.context,
                            internalFormat: this.getInternalFormat(),
                            textureFormat: this.getTextureFormat(),
                            kernel: this
                        })
                    }
                    _setupSubOutputTextures() {
                        const e = this.context;
                        if (this.mappedTextures) {
                            for (let t = 0; t < this.subKernels.length; t++) e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t + 1, e.TEXTURE_2D, this.mappedTextures[t].texture, 0);
                            return
                        }
                        const t = this.texSize;
                        this.drawBuffersMap = [e.COLOR_ATTACHMENT0], this.mappedTextures = [];
                        for (let n = 0; n < this.subKernels.length; n++) {
                            const r = this.createTexture();
                            this.drawBuffersMap.push(e.COLOR_ATTACHMENT0 + n + 1), e.activeTexture(e.TEXTURE0 + this.constantTextureCount + this.argumentTextureCount + n), e.bindTexture(e.TEXTURE_2D, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
                            const i = this.getInternalFormat();
                            "single" === this.precision ? e.texStorage2D(e.TEXTURE_2D, 1, i, t[0], t[1]) : e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t[0], t[1], 0, e.RGBA, e.UNSIGNED_BYTE, null), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n + 1, e.TEXTURE_2D, r, 0), this.mappedTextures.push(new this.TextureConstructor({
                                texture: r,
                                size: t,
                                dimensions: this.threadDim,
                                output: this.output,
                                context: this.context,
                                internalFormat: this.getInternalFormat(),
                                textureFormat: this.getTextureFormat(),
                                kernel: this
                            }))
                        }
                    }
                    _getHeaderString() {
                        return ""
                    }
                    _getTextureCoordinate() {
                        const e = this.subKernels,
                            t = this.getVariablePrecisionString(this.texSize, this.tactic);
                        return null === e || e.length < 1 ? `in ${t} vec2 vTexCoord;\n` : `out ${t} vec2 vTexCoord;\n`
                    }
                    _getMainArgumentsString(e) {
                        const t = [],
                            n = this.argumentNames;
                        for (let r = 0; r < n.length; r++) t.push(this.kernelArguments[r].getSource(e[r]));
                        return t.join("")
                    }
                    getKernelString() {
                        const e = [this.getKernelResultDeclaration()],
                            t = this.subKernels;
                        if (null !== t) switch (e.push("layout(location = 0) out vec4 data0"), this.returnType) {
                            case "Number":
                            case "Float":
                            case "Integer":
                                for (let n = 0; n < t.length; n++) {
                                    const r = t[n];
                                    e.push("Integer" === r.returnType ? `int subKernelResult_${r.name} = 0` : `float subKernelResult_${r.name} = 0.0`, `layout(location = ${n+1}) out vec4 data${n+1}`)
                                }
                                break;
                            case "Array(2)":
                                for (let n = 0; n < t.length; n++) e.push(`vec2 subKernelResult_${t[n].name}`, `layout(location = ${n+1}) out vec4 data${n+1}`);
                                break;
                            case "Array(3)":
                                for (let n = 0; n < t.length; n++) e.push(`vec3 subKernelResult_${t[n].name}`, `layout(location = ${n+1}) out vec4 data${n+1}`);
                                break;
                            case "Array(4)":
                                for (let n = 0; n < t.length; n++) e.push(`vec4 subKernelResult_${t[n].name}`, `layout(location = ${n+1}) out vec4 data${n+1}`)
                        } else e.push("out vec4 data0");
                        return a.linesToString(e) + this.translatedSource
                    }
                    getMainResultGraphical() {
                        return a.linesToString(["  threadId = indexTo3D(index, uOutputDim)", "  kernel()", "  data0 = actualColor"])
                    }
                    getMainResultPackedPixels() {
                        switch (this.returnType) {
                            case "LiteralInteger":
                            case "Number":
                            case "Integer":
                            case "Float":
                                return this.getMainResultKernelPackedPixels() + this.getMainResultSubKernelPackedPixels();
                            default:
                                throw new Error(`packed output only usable with Numbers, "${this.returnType}" specified`)
                        }
                    }
                    getMainResultKernelPackedPixels() {
                        return a.linesToString(["  threadId = indexTo3D(index, uOutputDim)", "  kernel()", `  data0 = ${this.useLegacyEncoder?"legacyEncode32":"encode32"}(kernelResult)`])
                    }
                    getMainResultSubKernelPackedPixels() {
                        const e = [];
                        if (!this.subKernels) return "";
                        for (let t = 0; t < this.subKernels.length; t++) "Integer" === this.subKernels[t].returnType ? e.push(`  data${t+1} = ${this.useLegacyEncoder?"legacyEncode32":"encode32"}(float(subKernelResult_${this.subKernels[t].name}))`) : e.push(`  data${t+1} = ${this.useLegacyEncoder?"legacyEncode32":"encode32"}(subKernelResult_${this.subKernels[t].name})`);
                        return a.linesToString(e)
                    }
                    getMainResultKernelMemoryOptimizedFloats(e, t) {
                        e.push("  threadId = indexTo3D(index, uOutputDim)", "  kernel()", `  data0.${t} = kernelResult`)
                    }
                    getMainResultSubKernelMemoryOptimizedFloats(e, t) {
                        if (!this.subKernels) return e;
                        for (let n = 0; n < this.subKernels.length; n++) {
                            const r = this.subKernels[n];
                            "Integer" === r.returnType ? e.push(`  data${n+1}.${t} = float(subKernelResult_${r.name})`) : e.push(`  data${n+1}.${t} = subKernelResult_${r.name}`)
                        }
                    }
                    getMainResultKernelNumberTexture() {
                        return ["  threadId = indexTo3D(index, uOutputDim)", "  kernel()", "  data0[0] = kernelResult"]
                    }
                    getMainResultSubKernelNumberTexture() {
                        const e = [];
                        if (!this.subKernels) return e;
                        for (let t = 0; t < this.subKernels.length; ++t) {
                            const n = this.subKernels[t];
                            "Integer" === n.returnType ? e.push(`  data${t+1}[0] = float(subKernelResult_${n.name})`) : e.push(`  data${t+1}[0] = subKernelResult_${n.name}`)
                        }
                        return e
                    }
                    getMainResultKernelArray2Texture() {
                        return ["  threadId = indexTo3D(index, uOutputDim)", "  kernel()", "  data0[0] = kernelResult[0]", "  data0[1] = kernelResult[1]"]
                    }
                    getMainResultSubKernelArray2Texture() {
                        const e = [];
                        if (!this.subKernels) return e;
                        for (let t = 0; t < this.subKernels.length; ++t) {
                            const n = this.subKernels[t];
                            e.push(`  data${t+1}[0] = subKernelResult_${n.name}[0]`, `  data${t+1}[1] = subKernelResult_${n.name}[1]`)
                        }
                        return e
                    }
                    getMainResultKernelArray3Texture() {
                        return ["  threadId = indexTo3D(index, uOutputDim)", "  kernel()", "  data0[0] = kernelResult[0]", "  data0[1] = kernelResult[1]", "  data0[2] = kernelResult[2]"]
                    }
                    getMainResultSubKernelArray3Texture() {
                        const e = [];
                        if (!this.subKernels) return e;
                        for (let t = 0; t < this.subKernels.length; ++t) {
                            const n = this.subKernels[t];
                            e.push(`  data${t+1}[0] = subKernelResult_${n.name}[0]`, `  data${t+1}[1] = subKernelResult_${n.name}[1]`, `  data${t+1}[2] = subKernelResult_${n.name}[2]`)
                        }
                        return e
                    }
                    getMainResultKernelArray4Texture() {
                        return ["  threadId = indexTo3D(index, uOutputDim)", "  kernel()", "  data0 = kernelResult"]
                    }
                    getMainResultSubKernelArray4Texture() {
                        const e = [];
                        if (!this.subKernels) return e;
                        for (let t = 0; t < this.subKernels.length; ++t) e.push(`  data${t+1} = subKernelResult_${this.subKernels[t].name}`);
                        return e
                    }
                    destroyExtensions() {
                        this.extensions.EXT_color_buffer_float = null, this.extensions.OES_texture_float_linear = null
                    }
                    toJSON() {
                        const e = super.toJSON();
                        return e.functionNodes = s.fromKernel(this, i).toJSON(), e.settings.threadDim = this.threadDim, e
                    }
                }
            }
        }, {
            "../../utils": 114,
            "../function-builder": 9,
            "../web-gl/kernel": 70,
            "./fragment-shader": 72,
            "./function-node": 73,
            "./kernel-value-maps": 74,
            "./vertex-shader": 106
        }],
        106: [function (e, t, n) {
            t.exports = {
                vertexShader: "#version 300 es\n__FLOAT_TACTIC_DECLARATION__;\n__INT_TACTIC_DECLARATION__;\n__SAMPLER_2D_TACTIC_DECLARATION__;\n\nin vec2 aPos;\nin vec2 aTexCoord;\n\nout vec2 vTexCoord;\nuniform vec2 ratio;\n\nvoid main(void) {\n  gl_Position = vec4((aPos + vec2(1)) * ratio + vec2(-1), 0, 1);\n  vTexCoord = aTexCoord;\n}"
            }
        }, {}],
        107: [function (e, t, n) {
            const r = e("./index"),
                i = r.GPU;
            for (const e in r) r.hasOwnProperty(e) && "GPU" !== e && (i[e] = r[e]);

            function s(e) {
                e.GPU || Object.defineProperty(e, "GPU", {
                    get: () => i
                })
            }
            "undefined" != typeof window && s(window), "undefined" != typeof self && s(self), t.exports = r
        }, {
            "./index": 109
        }],
        108: [function (e, t, n) {
            const {
                gpuMock: r
            } = e("gpu-mock.js"), {
                utils: i
            } = e("./utils"), {
                Kernel: s
            } = e("./backend/kernel"), {
                CPUKernel: a
            } = e("./backend/cpu/kernel"), {
                HeadlessGLKernel: o
            } = e("./backend/headless-gl/kernel"), {
                WebGL2Kernel: u
            } = e("./backend/web-gl2/kernel"), {
                WebGLKernel: l
            } = e("./backend/web-gl/kernel"), {
                kernelRunShortcut: h
            } = e("./kernel-run-shortcut"), c = [o, u, l], p = ["gpu", "cpu"], d = {
                headlessgl: o,
                webgl2: u,
                webgl: l
            };
            let m = !0;

            function g(e) {
                if (!e) return {};
                const t = Object.assign({}, e);
                return e.hasOwnProperty("floatOutput") && (i.warnDeprecated("setting", "floatOutput", "precision"), t.precision = e.floatOutput ? "single" : "unsigned"), e.hasOwnProperty("outputToTexture") && (i.warnDeprecated("setting", "outputToTexture", "pipeline"), t.pipeline = Boolean(e.outputToTexture)), e.hasOwnProperty("outputImmutable") && (i.warnDeprecated("setting", "outputImmutable", "immutable"), t.immutable = Boolean(e.outputImmutable)), e.hasOwnProperty("floatTextures") && (i.warnDeprecated("setting", "floatTextures", "optimizeFloatMemory"), t.optimizeFloatMemory = Boolean(e.floatTextures)), t
            }
            t.exports = {
                GPU: class {
                    static disableValidation() {
                        m = !1
                    }
                    static enableValidation() {
                        m = !0
                    }
                    static get isGPUSupported() {
                        return c.some(e => e.isSupported)
                    }
                    static get isKernelMapSupported() {
                        return c.some(e => e.isSupported && e.features.kernelMap)
                    }
                    static get isOffscreenCanvasSupported() {
                        return "undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas || "undefined" != typeof importScripts
                    }
                    static get isWebGLSupported() {
                        return l.isSupported
                    }
                    static get isWebGL2Supported() {
                        return u.isSupported
                    }
                    static get isHeadlessGLSupported() {
                        return o.isSupported
                    }
                    static get isCanvasSupported() {
                        return "undefined" != typeof HTMLCanvasElement
                    }
                    static get isGPUHTMLImageArraySupported() {
                        return u.isSupported
                    }
                    static get isSinglePrecisionSupported() {
                        return c.some(e => e.isSupported && e.features.isFloatRead && e.features.isTextureFloat)
                    }
                    constructor(e) {
                        if (e = e || {}, this.canvas = e.canvas || null, this.context = e.context || null, this.mode = e.mode, this.Kernel = null, this.kernels = [], this.functions = [], this.nativeFunctions = [], this.injectedNative = null, this.onIstanbulCoverageVariable = e.onIstanbulCoverageVariable || null, this.removeIstanbulCoverage = e.hasOwnProperty("removeIstanbulCoverage") ? e.removeIstanbulCoverage : null, "dev" !== this.mode) {
                            if (this.chooseKernel(), e.functions)
                                for (let t = 0; t < e.functions.length; t++) this.addFunction(e.functions[t]);
                            if (e.nativeFunctions)
                                for (const t in e.nativeFunctions) {
                                    if (!e.nativeFunctions.hasOwnProperty(t)) continue;
                                    const n = e.nativeFunctions[t],
                                        {
                                            name: r,
                                            source: i
                                        } = n;
                                    this.addNativeFunction(r, i, n)
                                }
                        }
                    }
                    chooseKernel() {
                        if (this.Kernel) return;
                        let e = null;
                        if (this.context) {
                            for (let t = 0; t < c.length; t++) {
                                const n = c[t];
                                if (n.isContextMatch(this.context)) {
                                    if (!n.isSupported) throw new Error(`Kernel type ${n.name} not supported`);
                                    e = n;
                                    break
                                }
                            }
                            if (null === e) throw new Error("unknown Context")
                        } else if (this.mode) {
                            if (this.mode in d) m && !d[this.mode].isSupported || (e = d[this.mode]);
                            else if ("gpu" === this.mode) {
                                for (let t = 0; t < c.length; t++)
                                    if (c[t].isSupported) {
                                        e = c[t];
                                        break
                                    }
                            } else "cpu" === this.mode && (e = a);
                            if (!e) throw new Error(`A requested mode of "${this.mode}" and is not supported`)
                        } else {
                            for (let t = 0; t < c.length; t++)
                                if (c[t].isSupported) {
                                    e = c[t];
                                    break
                                } e || (e = a)
                        }
                        this.mode || (this.mode = e.mode), this.Kernel = e
                    }
                    createKernel(e, t) {
                        if (void 0 === e) throw new Error("Missing source parameter");
                        if ("object" != typeof e && !i.isFunction(e) && "string" != typeof e) throw new Error("source parameter not a function");
                        const n = this.kernels;
                        if ("dev" === this.mode) {
                            const i = r(e, g(t));
                            return n.push(i), i
                        }
                        e = "function" == typeof e ? e.toString() : e;
                        const s = {},
                            o = g(t) || {};

                        function u(t) {
                            console.warn("Falling back to CPU");
                            const n = new a(e, {
                                argumentTypes: p.argumentTypes,
                                constantTypes: p.constantTypes,
                                graphical: p.graphical,
                                loopMaxIterations: p.loopMaxIterations,
                                constants: p.constants,
                                dynamicOutput: p.dynamicOutput,
                                dynamicArgument: p.dynamicArguments,
                                output: p.output,
                                precision: p.precision,
                                pipeline: p.pipeline,
                                immutable: p.immutable,
                                optimizeFloatMemory: p.optimizeFloatMemory,
                                fixIntegerDivisionAccuracy: p.fixIntegerDivisionAccuracy,
                                functions: p.functions,
                                nativeFunctions: p.nativeFunctions,
                                injectedNative: p.injectedNative,
                                subKernels: p.subKernels,
                                strictIntegers: p.strictIntegers,
                                debug: p.debug
                            });
                            n.build.apply(n, t);
                            const r = n.run.apply(n, t);
                            return p.replaceKernel(n), r
                        }
                        t && "object" == typeof t.argumentTypes && (o.argumentTypes = Object.keys(t.argumentTypes).map(e => t.argumentTypes[e]));
                        const l = Object.assign({
                                context: this.context,
                                canvas: this.canvas,
                                functions: this.functions,
                                nativeFunctions: this.nativeFunctions,
                                injectedNative: this.injectedNative,
                                onIstanbulCoverageVariable: this.onIstanbulCoverageVariable,
                                removeIstanbulCoverage: this.removeIstanbulCoverage,
                                gpu: this,
                                validate: m,
                                onRequestFallback: u,
                                onRequestSwitchKernel: function t(r, i, a) {
                                    a.debug && console.warn("Switching kernels");
                                    let o = null;
                                    if (a.signature && !s[a.signature] && (s[a.signature] = a), a.dynamicOutput)
                                        for (let e = r.length - 1; e >= 0; e--) {
                                            const t = r[e];
                                            "outputPrecisionMismatch" === t.type && (o = t.needed)
                                        }
                                    const l = a.constructor,
                                        h = l.getArgumentTypes(a, i),
                                        c = l.getSignature(a, h),
                                        d = s[c];
                                    if (d) return d.onActivate(a), d;
                                    const g = s[c] = new l(e, {
                                        argumentTypes: h,
                                        constantTypes: a.constantTypes,
                                        graphical: a.graphical,
                                        loopMaxIterations: a.loopMaxIterations,
                                        constants: a.constants,
                                        dynamicOutput: a.dynamicOutput,
                                        dynamicArgument: a.dynamicArguments,
                                        context: a.context,
                                        canvas: a.canvas,
                                        output: o || a.output,
                                        precision: a.precision,
                                        pipeline: a.pipeline,
                                        immutable: a.immutable,
                                        optimizeFloatMemory: a.optimizeFloatMemory,
                                        fixIntegerDivisionAccuracy: a.fixIntegerDivisionAccuracy,
                                        functions: a.functions,
                                        nativeFunctions: a.nativeFunctions,
                                        injectedNative: a.injectedNative,
                                        subKernels: a.subKernels,
                                        strictIntegers: a.strictIntegers,
                                        debug: a.debug,
                                        gpu: a.gpu,
                                        validate: m,
                                        returnType: a.returnType,
                                        onIstanbulCoverageVariable: a.onIstanbulCoverageVariable,
                                        removeIstanbulCoverage: a.removeIstanbulCoverage,
                                        tactic: a.tactic,
                                        onRequestFallback: u,
                                        onRequestSwitchKernel: t,
                                        texture: a.texture,
                                        mappedTextures: a.mappedTextures,
                                        drawBuffersMap: a.drawBuffersMap
                                    });
                                    return g.build.apply(g, i), p.replaceKernel(g), n.push(g), g
                                }
                            }, o),
                            c = new this.Kernel(e, l),
                            p = h(c);
                        return this.canvas || (this.canvas = c.canvas), this.context || (this.context = c.context), n.push(c), p
                    }
                    createKernelMap() {
                        let e, t;
                        const n = typeof arguments[arguments.length - 2];
                        if ("function" === n || "string" === n ? (e = arguments[arguments.length - 2], t = arguments[arguments.length - 1]) : e = arguments[arguments.length - 1], "dev" !== this.mode && (!this.Kernel.isSupported || !this.Kernel.features.kernelMap) && this.mode && p.indexOf(this.mode) < 0) throw new Error(`kernelMap not supported on ${this.Kernel.name}`);
                        const r = g(t);
                        if (t && "object" == typeof t.argumentTypes && (r.argumentTypes = Object.keys(t.argumentTypes).map(e => t.argumentTypes[e])), Array.isArray(arguments[0])) {
                            r.subKernels = [];
                            const e = arguments[0];
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t].toString(),
                                    s = i.getFunctionNameFromString(n);
                                r.subKernels.push({
                                    name: s,
                                    source: n,
                                    property: t
                                })
                            }
                        } else {
                            r.subKernels = [];
                            const e = arguments[0];
                            for (let t in e) {
                                if (!e.hasOwnProperty(t)) continue;
                                const n = e[t].toString(),
                                    s = i.getFunctionNameFromString(n);
                                r.subKernels.push({
                                    name: s || t,
                                    source: n,
                                    property: t
                                })
                            }
                        }
                        return this.createKernel(e, r)
                    }
                    combineKernels() {
                        const e = arguments[0],
                            t = arguments[arguments.length - 1];
                        if ("cpu" === e.kernel.constructor.mode) return t;
                        const n = arguments[0].canvas,
                            r = arguments[0].context,
                            i = arguments.length - 1;
                        for (let e = 0; e < i; e++) arguments[e].setCanvas(n).setContext(r).setPipeline(!0);
                        return function () {
                            const e = t.apply(this, arguments);
                            return e.toArray ? e.toArray() : e
                        }
                    }
                    setFunctions(e) {
                        return this.functions = e, this
                    }
                    setNativeFunctions(e) {
                        return this.nativeFunctions = e, this
                    }
                    addFunction(e, t) {
                        return this.functions.push({
                            source: e,
                            settings: t
                        }), this
                    }
                    addNativeFunction(e, t, n) {
                        if (this.kernels.length > 0) throw new Error('Cannot call "addNativeFunction" after "createKernels" has been called.');
                        return this.nativeFunctions.push(Object.assign({
                            name: e,
                            source: t
                        }, n)), this
                    }
                    injectNative(e) {
                        return this.injectedNative = e, this
                    }
                    destroy() {
                        return new Promise((e, t) => {
                            this.kernels || e(), setTimeout(() => {
                                try {
                                    for (let e = 0; e < this.kernels.length; e++) this.kernels[e].destroy(!0);
                                    let e = this.kernels[0];
                                    e && (e.kernel && (e = e.kernel), e.constructor.destroyContext && e.constructor.destroyContext(this.context))
                                } catch (e) {
                                    t(e)
                                }
                                e()
                            }, 0)
                        })
                    }
                },
                kernelOrder: c,
                kernelTypes: p
            }
        }, {
            "./backend/cpu/kernel": 8,
            "./backend/headless-gl/kernel": 34,
            "./backend/kernel": 36,
            "./backend/web-gl/kernel": 70,
            "./backend/web-gl2/kernel": 105,
            "./kernel-run-shortcut": 111,
            "./utils": 114,
            "gpu-mock.js": 4
        }],
        109: [function (e, t, n) {
            const {
                GPU: r
            } = e("./gpu"), {
                alias: i
            } = e("./alias"), {
                utils: s
            } = e("./utils"), {
                Input: a,
                input: o
            } = e("./input"), {
                Texture: u
            } = e("./texture"), {
                FunctionBuilder: l
            } = e("./backend/function-builder"), {
                FunctionNode: h
            } = e("./backend/function-node"), {
                CPUFunctionNode: c
            } = e("./backend/cpu/function-node"), {
                CPUKernel: p
            } = e("./backend/cpu/kernel"), {
                HeadlessGLKernel: d
            } = e("./backend/headless-gl/kernel"), {
                WebGLFunctionNode: m
            } = e("./backend/web-gl/function-node"), {
                WebGLKernel: g
            } = e("./backend/web-gl/kernel"), {
                kernelValueMaps: f
            } = e("./backend/web-gl/kernel-value-maps"), {
                WebGL2FunctionNode: x
            } = e("./backend/web-gl2/function-node"), {
                WebGL2Kernel: y
            } = e("./backend/web-gl2/kernel"), {
                kernelValueMaps: b
            } = e("./backend/web-gl2/kernel-value-maps"), {
                GLKernel: T
            } = e("./backend/gl/kernel"), {
                Kernel: v
            } = e("./backend/kernel"), {
                FunctionTracer: S
            } = e("./backend/function-tracer"), A = e("./plugins/math-random-uniformly-distributed");
            t.exports = {
                alias: i,
                CPUFunctionNode: c,
                CPUKernel: p,
                GPU: r,
                FunctionBuilder: l,
                FunctionNode: h,
                HeadlessGLKernel: d,
                Input: a,
                input: o,
                Texture: u,
                utils: s,
                WebGL2FunctionNode: x,
                WebGL2Kernel: y,
                webGL2KernelValueMaps: b,
                WebGLFunctionNode: m,
                WebGLKernel: g,
                webGLKernelValueMaps: f,
                GLKernel: T,
                Kernel: v,
                FunctionTracer: S,
                plugins: {
                    mathRandom: A
                }
            }
        }, {
            "./alias": 5,
            "./backend/cpu/function-node": 6,
            "./backend/cpu/kernel": 8,
            "./backend/function-builder": 9,
            "./backend/function-node": 10,
            "./backend/function-tracer": 11,
            "./backend/gl/kernel": 13,
            "./backend/headless-gl/kernel": 34,
            "./backend/kernel": 36,
            "./backend/web-gl/function-node": 38,
            "./backend/web-gl/kernel": 70,
            "./backend/web-gl/kernel-value-maps": 39,
            "./backend/web-gl2/function-node": 73,
            "./backend/web-gl2/kernel": 105,
            "./backend/web-gl2/kernel-value-maps": 74,
            "./gpu": 108,
            "./input": 110,
            "./plugins/math-random-uniformly-distributed": 112,
            "./texture": 113,
            "./utils": 114
        }],
        110: [function (e, t, n) {
            class r {
                constructor(e, t) {
                    this.value = e, Array.isArray(t) ? this.size = t : (this.size = new Int32Array(3), t.z ? this.size = new Int32Array([t.x, t.y, t.z]) : t.y ? this.size = new Int32Array([t.x, t.y]) : this.size = new Int32Array([t.x]));
                    const [n, r, i] = this.size;
                    if (i) {
                        if (this.value.length !== n * r * i) throw new Error(`Input size ${this.value.length} does not match ${n} * ${r} * ${i} = ${r*n*i}`)
                    } else if (r) {
                        if (this.value.length !== n * r) throw new Error(`Input size ${this.value.length} does not match ${n} * ${r} = ${r*n}`)
                    } else if (this.value.length !== n) throw new Error(`Input size ${this.value.length} does not match ${n}`)
                }
                toArray() {
                    const {
                        utils: t
                    } = e("./utils"), [n, r, i] = this.size;
                    return i ? t.erectMemoryOptimized3DFloat(this.value.subarray ? this.value : new Float32Array(this.value), n, r, i) : r ? t.erectMemoryOptimized2DFloat(this.value.subarray ? this.value : new Float32Array(this.value), n, r) : this.value
                }
            }
            t.exports = {
                Input: r,
                input: function (e, t) {
                    return new r(e, t)
                }
            }
        }, {
            "./utils": 114
        }],
        111: [function (e, t, n) {
            const {
                utils: r
            } = e("./utils");

            function i(e, t) {
                if (t.kernel) return void(t.kernel = e);
                const n = r.allPropertiesOf(e);
                for (let r = 0; r < n.length; r++) {
                    const i = n[r];
                    "_" === i[0] && "_" === i[1] || ("function" == typeof e[i] ? "add" === i.substring(0, 3) || "set" === i.substring(0, 3) ? t[i] = function () {
                        return t.kernel[i].apply(t.kernel, arguments), t
                    } : t[i] = function () {
                        return t.kernel[i].apply(t.kernel, arguments)
                    } : (t.__defineGetter__(i, () => t.kernel[i]), t.__defineSetter__(i, e => {
                        t.kernel[i] = e
                    })))
                }
                t.kernel = e
            }
            t.exports = {
                kernelRunShortcut: function (e) {
                    let t = function () {
                        return e.build.apply(e, arguments), (t = function () {
                            let t = e.run.apply(e, arguments);
                            if (e.switchingKernels) {
                                const r = e.resetSwitchingKernels(),
                                    i = e.onRequestSwitchKernel(r, arguments, e);
                                n.kernel = e = i, t = i.run.apply(i, arguments)
                            }
                            return e.renderKernels ? e.renderKernels() : e.renderOutput ? e.renderOutput() : t
                        }).apply(e, arguments)
                    };
                    const n = function () {
                        return t.apply(e, arguments)
                    };
                    return n.exec = function () {
                        return new Promise((e, n) => {
                            try {
                                e(t.apply(this, arguments))
                            } catch (e) {
                                n(e)
                            }
                        })
                    }, n.replaceKernel = function (t) {
                        i(e = t, n)
                    }, i(e, n), n
                }
            }
        }, {
            "./utils": 114
        }],
        112: [function (e, t, n) {
            const r = {
                name: "math-random-uniformly-distributed",
                onBeforeRun: e => {
                    e.setUniform1f("randomSeed1", Math.random()), e.setUniform1f("randomSeed2", Math.random())
                },
                functionMatch: "Math.random()",
                functionReplace: "nrand(vTexCoord)",
                functionReturnType: "Number",
                source: "// https://www.shadertoy.com/view/4t2SDh\n//note: uniformly distributed, normalized rand, [0,1]\nhighp float randomSeedShift = 1.0;\nhighp float slide = 1.0;\nuniform highp float randomSeed1;\nuniform highp float randomSeed2;\n\nhighp float nrand(highp vec2 n) {\n  highp float result = fract(sin(dot((n.xy + 1.0) * vec2(randomSeed1 * slide, randomSeed2 * randomSeedShift), vec2(12.9898, 78.233))) * 43758.5453);\n  randomSeedShift = result;\n  if (randomSeedShift > 0.5) {\n    slide += 0.00009; \n  } else {\n    slide += 0.0009;\n  }\n  return result;\n}"
            };
            t.exports = r
        }, {}],
        113: [function (e, t, n) {
            t.exports = {
                Texture: class {
                    constructor(e) {
                        const {
                            texture: t,
                            size: n,
                            dimensions: r,
                            output: i,
                            context: s,
                            type: a = "NumberTexture",
                            kernel: o,
                            internalFormat: u,
                            textureFormat: l
                        } = e;
                        if (!i) throw new Error('settings property "output" required.');
                        if (!s) throw new Error('settings property "context" required.');
                        if (!t) throw new Error('settings property "texture" required.');
                        if (!o) throw new Error('settings property "kernel" required.');
                        this.texture = t, t._refs ? t._refs++ : t._refs = 1, this.size = n, this.dimensions = r, this.output = i, this.context = s, this.kernel = o, this.type = a, this._deleted = !1, this.internalFormat = u, this.textureFormat = l
                    }
                    toArray() {
                        throw new Error(`Not implemented on ${this.constructor.name}`)
                    }
                    clone() {
                        throw new Error(`Not implemented on ${this.constructor.name}`)
                    }
                    delete() {
                        throw new Error(`Not implemented on ${this.constructor.name}`)
                    }
                    clear() {
                        throw new Error(`Not implemented on ${this.constructor.name}`)
                    }
                }
            }
        }, {}],
        114: [function (e, t, n) {
            const r = e("acorn"),
                {
                    Input: i
                } = e("./input"),
                {
                    Texture: s
                } = e("./texture"),
                a = /function ([^(]*)/,
                o = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
                u = /([^\s,]+)/g,
                l = {
                    systemEndianness: () => d,
                    getSystemEndianness() {
                        const e = new ArrayBuffer(4),
                            t = new Uint32Array(e),
                            n = new Uint8Array(e);
                        if (t[0] = 3735928559, 239 === n[0]) return "LE";
                        if (222 === n[0]) return "BE";
                        throw new Error("unknown endianness")
                    },
                    isFunction: e => "function" == typeof e,
                    isFunctionString: e => "string" == typeof e && "function" === e.slice(0, "function".length).toLowerCase(),
                    getFunctionNameFromString(e) {
                        const t = a.exec(e);
                        return t && 0 !== t.length ? t[1].trim() : null
                    },
                    getFunctionBodyFromString: e => e.substring(e.indexOf("{") + 1, e.lastIndexOf("}")),
                    getArgumentNamesFromString(e) {
                        const t = e.replace(o, "");
                        let n = t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(u);
                        return null === n && (n = []), n
                    },
                    clone(e) {
                        if (null === e || "object" != typeof e || e.hasOwnProperty("isActiveClone")) return e;
                        const t = e.constructor();
                        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (e.isActiveClone = null, t[n] = l.clone(e[n]), delete e.isActiveClone);
                        return t
                    },
                    isArray: e => !isNaN(e.length),
                    getVariableType(e, t) {
                        if (l.isArray(e)) return e.length > 0 && "IMG" === e[0].nodeName ? "HTMLImageArray" : "Array";
                        switch (e.constructor) {
                            case Boolean:
                                return "Boolean";
                            case Number:
                                return t && Number.isInteger(e) ? "Integer" : "Float";
                            case s:
                                return e.type;
                            case i:
                                return "Input"
                        }
                        switch (e.nodeName) {
                            case "IMG":
                            case "CANVAS":
                                return "HTMLImage";
                            case "VIDEO":
                                return "HTMLVideo"
                        }
                        return e.hasOwnProperty("type") ? e.type : "Unknown"
                    },
                    getKernelTextureSize(e, t) {
                        let [n, r, i] = t, s = (n || 1) * (r || 1) * (i || 1);
                        return e.optimizeFloatMemory && "single" === e.precision && (n = s = Math.ceil(s / 4)), r > 1 && n * r === s ? new Int32Array([n, r]) : l.closestSquareDimensions(s)
                    },
                    closestSquareDimensions(e) {
                        const t = Math.sqrt(e);
                        let n = Math.ceil(t),
                            r = Math.floor(t);
                        for (; n * r < e;) n--, r = Math.ceil(e / n);
                        return new Int32Array([r, Math.ceil(e / r)])
                    },
                    getMemoryOptimizedFloatTextureSize(e, t) {
                        const n = l.roundTo((e[0] || 1) * (e[1] || 1) * (e[2] || 1) * (e[3] || 1), 4) / t;
                        return l.closestSquareDimensions(n)
                    },
                    getMemoryOptimizedPackedTextureSize(e, t) {
                        const [n, r, i] = e, s = l.roundTo((n || 1) * (r || 1) * (i || 1), 4) / (4 / t);
                        return l.closestSquareDimensions(s)
                    },
                    roundTo: (e, t) => Math.floor((e + t - 1) / t) * t,
                    getDimensions(e, t) {
                        let n;
                        if (l.isArray(e)) {
                            const t = [];
                            let r = e;
                            for (; l.isArray(r);) t.push(r.length), r = r[0];
                            n = t.reverse()
                        } else if (e instanceof s) n = e.output;
                        else {
                            if (!(e instanceof i)) throw new Error(`Unknown dimensions of ${e}`);
                            n = e.size
                        }
                        if (t)
                            for (n = Array.from(n); n.length < 3;) n.push(1);
                        return new Int32Array(n)
                    },
                    flatten2dArrayTo(e, t) {
                        let n = 0;
                        for (let r = 0; r < e.length; r++) t.set(e[r], n), n += e[r].length
                    },
                    flatten3dArrayTo(e, t) {
                        let n = 0;
                        for (let r = 0; r < e.length; r++)
                            for (let i = 0; i < e[r].length; i++) t.set(e[r][i], n), n += e[r][i].length
                    },
                    flatten4dArrayTo(e, t) {
                        let n = 0;
                        for (let r = 0; r < e.length; r++)
                            for (let i = 0; i < e[r].length; i++)
                                for (let s = 0; s < e[r][i].length; s++) t.set(e[r][i][s], n), n += e[r][i][s].length
                    },
                    flattenTo(e, t) {
                        l.isArray(e[0]) ? l.isArray(e[0][0]) ? l.isArray(e[0][0][0]) ? l.flatten4dArrayTo(e, t) : l.flatten3dArrayTo(e, t) : l.flatten2dArrayTo(e, t) : t.set(e)
                    },
                    splitArray(e, t) {
                        const n = [];
                        for (let r = 0; r < e.length; r += t) n.push(new e.constructor(e.buffer, 4 * r + e.byteOffset, t));
                        return n
                    },
                    getAstString(e, t) {
                        const n = Array.isArray(e) ? e : e.split(/\r?\n/g),
                            r = t.loc.start,
                            i = t.loc.end,
                            s = [];
                        if (r.line === i.line) s.push(n[r.line - 1].substring(r.column, i.column));
                        else {
                            s.push(n[r.line - 1].slice(r.column));
                            for (let e = r.line; e < i.line; e++) s.push(n[e]);
                            s.push(n[i.line - 1].slice(0, i.column))
                        }
                        return s.join("\n")
                    },
                    allPropertiesOf(e) {
                        const t = [];
                        do {
                            t.push.apply(t, Object.getOwnPropertyNames(e))
                        } while (e = Object.getPrototypeOf(e));
                        return t
                    },
                    linesToString: e => e.length > 0 ? e.join(";\n") + ";\n" : "\n",
                    warnDeprecated(e, t, n) {
                        n ? console.warn(`You are using a deprecated ${e} "${t}". It has been replaced with "${n}". Fixing, but please upgrade as it will soon be removed.`) : console.warn(`You are using a deprecated ${e} "${t}". It has been removed. Fixing, but please upgrade as it will soon be removed.`)
                    },
                    flipPixels: (e, t, n) => {
                        const r = n / 2 | 0,
                            i = 4 * t,
                            s = new Uint8ClampedArray(4 * t),
                            a = e.slice(0);
                        for (let e = 0; e < r; ++e) {
                            const t = e * i,
                                r = (n - e - 1) * i;
                            s.set(a.subarray(t, t + i)), a.copyWithin(t, r, r + i), a.set(s, r)
                        }
                        return a
                    },
                    erectPackedFloat: (e, t) => e.subarray(0, t),
                    erect2DPackedFloat: (e, t, n) => {
                        const r = new Array(n);
                        for (let i = 0; i < n; i++) {
                            const n = i * t,
                                s = n + t;
                            r[i] = e.subarray(n, s)
                        }
                        return r
                    },
                    erect3DPackedFloat: (e, t, n, r) => {
                        const i = new Array(r);
                        for (let s = 0; s < r; s++) {
                            const r = new Array(n);
                            for (let i = 0; i < n; i++) {
                                const a = s * n * t + i * t,
                                    o = a + t;
                                r[i] = e.subarray(a, o)
                            }
                            i[s] = r
                        }
                        return i
                    },
                    erectMemoryOptimizedFloat: (e, t) => e.subarray(0, t),
                    erectMemoryOptimized2DFloat: (e, t, n) => {
                        const r = new Array(n);
                        for (let i = 0; i < n; i++) {
                            const n = i * t;
                            r[i] = e.subarray(n, n + t)
                        }
                        return r
                    },
                    erectMemoryOptimized3DFloat: (e, t, n, r) => {
                        const i = new Array(r);
                        for (let s = 0; s < r; s++) {
                            const r = new Array(n);
                            for (let i = 0; i < n; i++) {
                                const a = s * n * t + i * t;
                                r[i] = e.subarray(a, a + t)
                            }
                            i[s] = r
                        }
                        return i
                    },
                    erectFloat: (e, t) => {
                        const n = new Float32Array(t);
                        let r = 0;
                        for (let i = 0; i < t; i++) n[i] = e[r], r += 4;
                        return n
                    },
                    erect2DFloat: (e, t, n) => {
                        const r = new Array(n);
                        let i = 0;
                        for (let s = 0; s < n; s++) {
                            const n = new Float32Array(t);
                            for (let r = 0; r < t; r++) n[r] = e[i], i += 4;
                            r[s] = n
                        }
                        return r
                    },
                    erect3DFloat: (e, t, n, r) => {
                        const i = new Array(r);
                        let s = 0;
                        for (let a = 0; a < r; a++) {
                            const r = new Array(n);
                            for (let i = 0; i < n; i++) {
                                const n = new Float32Array(t);
                                for (let r = 0; r < t; r++) n[r] = e[s], s += 4;
                                r[i] = n
                            }
                            i[a] = r
                        }
                        return i
                    },
                    erectArray2: (e, t) => {
                        const n = new Array(t),
                            r = 4 * t;
                        let i = 0;
                        for (let t = 0; t < r; t += 4) n[i++] = e.subarray(t, t + 2);
                        return n
                    },
                    erect2DArray2: (e, t, n) => {
                        const r = new Array(n),
                            i = 4 * t;
                        for (let s = 0; s < n; s++) {
                            const n = new Array(t),
                                a = s * i;
                            let o = 0;
                            for (let t = 0; t < i; t += 4) n[o++] = e.subarray(t + a, t + a + 2);
                            r[s] = n
                        }
                        return r
                    },
                    erect3DArray2: (e, t, n, r) => {
                        const i = 4 * t,
                            s = new Array(r);
                        for (let a = 0; a < r; a++) {
                            const r = new Array(n);
                            for (let s = 0; s < n; s++) {
                                const o = new Array(t),
                                    u = a * i * n + s * i;
                                let l = 0;
                                for (let t = 0; t < i; t += 4) o[l++] = e.subarray(t + u, t + u + 2);
                                r[s] = o
                            }
                            s[a] = r
                        }
                        return s
                    },
                    erectArray3: (e, t) => {
                        const n = new Array(t),
                            r = 4 * t;
                        let i = 0;
                        for (let t = 0; t < r; t += 4) n[i++] = e.subarray(t, t + 3);
                        return n
                    },
                    erect2DArray3: (e, t, n) => {
                        const r = 4 * t,
                            i = new Array(n);
                        for (let s = 0; s < n; s++) {
                            const n = new Array(t),
                                a = s * r;
                            let o = 0;
                            for (let t = 0; t < r; t += 4) n[o++] = e.subarray(t + a, t + a + 3);
                            i[s] = n
                        }
                        return i
                    },
                    erect3DArray3: (e, t, n, r) => {
                        const i = 4 * t,
                            s = new Array(r);
                        for (let a = 0; a < r; a++) {
                            const r = new Array(n);
                            for (let s = 0; s < n; s++) {
                                const o = new Array(t),
                                    u = a * i * n + s * i;
                                let l = 0;
                                for (let t = 0; t < i; t += 4) o[l++] = e.subarray(t + u, t + u + 3);
                                r[s] = o
                            }
                            s[a] = r
                        }
                        return s
                    },
                    erectArray4: (e, t) => {
                        const n = new Array(e),
                            r = 4 * t;
                        let i = 0;
                        for (let t = 0; t < r; t += 4) n[i++] = e.subarray(t, t + 4);
                        return n
                    },
                    erect2DArray4: (e, t, n) => {
                        const r = 4 * t,
                            i = new Array(n);
                        for (let s = 0; s < n; s++) {
                            const n = new Array(t),
                                a = s * r;
                            let o = 0;
                            for (let t = 0; t < r; t += 4) n[o++] = e.subarray(t + a, t + a + 4);
                            i[s] = n
                        }
                        return i
                    },
                    erect3DArray4: (e, t, n, r) => {
                        const i = 4 * t,
                            s = new Array(r);
                        for (let a = 0; a < r; a++) {
                            const r = new Array(n);
                            for (let s = 0; s < n; s++) {
                                const o = new Array(t),
                                    u = a * i * n + s * i;
                                let l = 0;
                                for (let t = 0; t < i; t += 4) o[l++] = e.subarray(t + u, t + u + 4);
                                r[s] = o
                            }
                            s[a] = r
                        }
                        return s
                    },
                    flattenFunctionToString: (e, t) => {
                        const {
                            findDependency: n,
                            thisLookup: i,
                            doNotDefine: s
                        } = t;
                        let a = t.flattened;
                        a || (a = t.flattened = {});
                        const o = r.parse(e),
                            u = [];
                        let h = 0;
                        const c = function e(t) {
                            if (Array.isArray(t)) {
                                const n = [];
                                for (let r = 0; r < t.length; r++) n.push(e(t[r]));
                                return n.join("")
                            }
                            switch (t.type) {
                                case "Program":
                                    return e(t.body) + ("VariableDeclaration" === t.body[0].type ? ";" : "");
                                case "FunctionDeclaration":
                                    return `function ${t.id.name}(${t.params.map(e).join(", ")}) ${e(t.body)}`;
                                case "BlockStatement": {
                                    const n = [];
                                    h += 2;
                                    for (let r = 0; r < t.body.length; r++) {
                                        const i = e(t.body[r]);
                                        i && n.push(" ".repeat(h) + i, ";\n")
                                    }
                                    return h -= 2, `{\n${n.join("")}}`
                                }
                                case "VariableDeclaration":
                                    const r = l.normalizeDeclarations(t).map(e).filter(e => null !== e);
                                    return r.length < 1 ? "" : `${t.kind} ${r.join(",")}`;
                                case "VariableDeclarator":
                                    return t.init.object && "ThisExpression" === t.init.object.type ? i(t.init.property.name, !0) ? `${t.id.name} = ${e(t.init)}` : null : `${t.id.name} = ${e(t.init)}`;
                                case "CallExpression":
                                    if ("subarray" === t.callee.property.name) return `${e(t.callee.object)}.${e(t.callee.property)}(${t.arguments.map(t=>e(t)).join(", ")})`;
                                    if ("gl" === t.callee.object.name || "context" === t.callee.object.name) return `${e(t.callee.object)}.${e(t.callee.property)}(${t.arguments.map(t=>e(t)).join(", ")})`;
                                    if ("ThisExpression" === t.callee.object.type) return u.push(n("this", t.callee.property.name)), `${t.callee.property.name}(${t.arguments.map(t=>e(t)).join(", ")})`;
                                    if (t.callee.object.name) {
                                        const r = n(t.callee.object.name, t.callee.property.name);
                                        return null === r ? `${t.callee.object.name}.${t.callee.property.name}(${t.arguments.map(t=>e(t)).join(", ")})` : (u.push(r), `${t.callee.property.name}(${t.arguments.map(t=>e(t)).join(", ")})`)
                                    }
                                    if ("MemberExpression" === t.callee.object.type) return `${e(t.callee.object)}.${t.callee.property.name}(${t.arguments.map(t=>e(t)).join(", ")})`;
                                    throw new Error("unknown ast.callee");
                                case "ReturnStatement":
                                    return `return ${e(t.argument)}`;
                                case "BinaryExpression":
                                    return `(${e(t.left)}${t.operator}${e(t.right)})`;
                                case "UnaryExpression":
                                    return t.prefix ? `${t.operator} ${e(t.argument)}` : `${e(t.argument)} ${t.operator}`;
                                case "ExpressionStatement":
                                    return `${e(t.expression)}`;
                                case "SequenceExpression":
                                    return `(${e(t.expressions)})`;
                                case "ArrowFunctionExpression":
                                    return `(${t.params.map(e).join(", ")}) => ${e(t.body)}`;
                                case "Literal":
                                    return t.raw;
                                case "Identifier":
                                    return t.name;
                                case "MemberExpression":
                                    return "ThisExpression" === t.object.type ? i(t.property.name) : t.computed ? `${e(t.object)}[${e(t.property)}]` : e(t.object) + "." + e(t.property);
                                case "ThisExpression":
                                    return "this";
                                case "NewExpression":
                                    return `new ${e(t.callee)}(${t.arguments.map(t=>e(t)).join(", ")})`;
                                case "ForStatement":
                                    return `for (${e(t.init)};${e(t.test)};${e(t.update)}) ${e(t.body)}`;
                                case "AssignmentExpression":
                                    return `${e(t.left)}${t.operator}${e(t.right)}`;
                                case "UpdateExpression":
                                    return `${e(t.argument)}${t.operator}`;
                                case "IfStatement":
                                    return `if (${e(t.test)}) ${e(t.consequent)}`;
                                case "ThrowStatement":
                                    return `throw ${e(t.argument)}`;
                                case "ObjectPattern":
                                    return t.properties.map(e).join(", ");
                                case "ArrayPattern":
                                    return t.elements.map(e).join(", ");
                                case "DebuggerStatement":
                                    return "debugger;";
                                case "ConditionalExpression":
                                    return `${e(t.test)}?${e(t.consequent)}:${e(t.alternate)}`;
                                case "Property":
                                    if ("init" === t.kind) return e(t.key)
                            }
                            throw new Error(`unhandled ast.type of ${t.type}`)
                        }(o);
                        if (u.length > 0) {
                            const e = [];
                            for (let n = 0; n < u.length; n++) {
                                const r = u[n];
                                a[r] || (a[r] = !0), e.push(l.flattenFunctionToString(r, t) + "\n")
                            }
                            return e.join("") + c
                        }
                        return c
                    },
                    normalizeDeclarations: e => {
                        if ("VariableDeclaration" !== e.type) throw new Error('Ast is not of type "VariableDeclaration"');
                        const t = [];
                        for (let n = 0; n < e.declarations.length; n++) {
                            const r = e.declarations[n];
                            if (r.id && "ObjectPattern" === r.id.type && r.id.properties) {
                                const {
                                    properties: e
                                } = r.id;
                                for (let n = 0; n < e.length; n++) {
                                    const i = e[n];
                                    if ("ObjectPattern" === i.value.type && i.value.properties)
                                        for (let e = 0; e < i.value.properties.length; e++) {
                                            const n = i.value.properties[e];
                                            if ("Property" !== n.type) throw new Error("unexpected state");
                                            t.push({
                                                type: "VariableDeclarator",
                                                id: {
                                                    type: "Identifier",
                                                    name: n.key.name
                                                },
                                                init: {
                                                    type: "MemberExpression",
                                                    object: {
                                                        type: "MemberExpression",
                                                        object: r.init,
                                                        property: {
                                                            type: "Identifier",
                                                            name: i.key.name
                                                        },
                                                        computed: !1
                                                    },
                                                    property: {
                                                        type: "Identifier",
                                                        name: n.key.name
                                                    },
                                                    computed: !1
                                                }
                                            })
                                        } else {
                                            if ("Identifier" !== i.value.type) throw new Error("unexpected state");
                                            t.push({
                                                type: "VariableDeclarator",
                                                id: {
                                                    type: "Identifier",
                                                    name: i.value && i.value.name ? i.value.name : i.key.name
                                                },
                                                init: {
                                                    type: "MemberExpression",
                                                    object: r.init,
                                                    property: {
                                                        type: "Identifier",
                                                        name: i.key.name
                                                    },
                                                    computed: !1
                                                }
                                            })
                                        }
                                }
                            } else if (r.id && "ArrayPattern" === r.id.type && r.id.elements) {
                                const {
                                    elements: e
                                } = r.id;
                                for (let n = 0; n < e.length; n++) {
                                    const i = e[n];
                                    if ("Identifier" !== i.type) throw new Error("unexpected state");
                                    t.push({
                                        type: "VariableDeclarator",
                                        id: {
                                            type: "Identifier",
                                            name: i.name
                                        },
                                        init: {
                                            type: "MemberExpression",
                                            object: r.init,
                                            property: {
                                                type: "Literal",
                                                value: n,
                                                raw: n.toString(),
                                                start: i.start,
                                                end: i.end
                                            },
                                            computed: !0
                                        }
                                    })
                                }
                            } else t.push(r)
                        }
                        return t
                    },
                    splitHTMLImageToRGB: (e, t) => {
                        const n = e.createKernel(function (e) {
                                return 255 * e[this.thread.y][this.thread.x].r
                            }, {
                                output: [t.width, t.height],
                                precision: "unsigned",
                                argumentTypes: {
                                    a: "HTMLImage"
                                }
                            }),
                            r = e.createKernel(function (e) {
                                return 255 * e[this.thread.y][this.thread.x].g
                            }, {
                                output: [t.width, t.height],
                                precision: "unsigned",
                                argumentTypes: {
                                    a: "HTMLImage"
                                }
                            }),
                            i = e.createKernel(function (e) {
                                return 255 * e[this.thread.y][this.thread.x].b
                            }, {
                                output: [t.width, t.height],
                                precision: "unsigned",
                                argumentTypes: {
                                    a: "HTMLImage"
                                }
                            }),
                            s = e.createKernel(function (e) {
                                return 255 * e[this.thread.y][this.thread.x].a
                            }, {
                                output: [t.width, t.height],
                                precision: "unsigned",
                                argumentTypes: {
                                    a: "HTMLImage"
                                }
                            }),
                            a = [n(t), r(t), i(t), s(t)];
                        return a.rKernel = n, a.gKernel = r, a.bKernel = i, a.aKernel = s, a.gpu = e, a
                    },
                    splitRGBAToCanvases: (e, t, n, r) => {
                        const i = e.createKernel(function (e) {
                            const t = e[this.thread.y][this.thread.x];
                            this.color(t.r / 255, 0, 0, 255)
                        }, {
                            output: [n, r],
                            graphical: !0,
                            argumentTypes: {
                                v: "Array2D(4)"
                            }
                        });
                        i(t);
                        const s = e.createKernel(function (e) {
                            const t = e[this.thread.y][this.thread.x];
                            this.color(0, t.g / 255, 0, 255)
                        }, {
                            output: [n, r],
                            graphical: !0,
                            argumentTypes: {
                                v: "Array2D(4)"
                            }
                        });
                        s(t);
                        const a = e.createKernel(function (e) {
                            const t = e[this.thread.y][this.thread.x];
                            this.color(0, 0, t.b / 255, 255)
                        }, {
                            output: [n, r],
                            graphical: !0,
                            argumentTypes: {
                                v: "Array2D(4)"
                            }
                        });
                        a(t);
                        const o = e.createKernel(function (e) {
                            const t = e[this.thread.y][this.thread.x];
                            this.color(255, 255, 255, t.a / 255)
                        }, {
                            output: [n, r],
                            graphical: !0,
                            argumentTypes: {
                                v: "Array2D(4)"
                            }
                        });
                        return o(t), [i.canvas, s.canvas, a.canvas, o.canvas]
                    },
                    getMinifySafeName: e => {
                        try {
                            const t = r.parse(`const value = ${e.toString()}`),
                                {
                                    init: n
                                } = t.body[0].declarations[0];
                            return n.body.name || n.body.body[0].argument.name
                        } catch (e) {
                            throw new Error("Unrecognized function type.  Please use `() => yourFunctionVariableHere` or function() { return yourFunctionVariableHere; }")
                        }
                    },
                    sanitizeName: function (e) {
                        return h.test(e) && (e = e.replace(h, "S_S")), c.test(e) ? e = e.replace(c, "U_U") : p.test(e) && (e = e.replace(p, "u_u")), e
                    }
                },
                h = /\$/,
                c = /__/,
                p = /_/,
                d = l.getSystemEndianness();
            t.exports = {
                utils: l
            }
        }, {
            "./input": 110,
            "./texture": 113,
            acorn: 1
        }]
    }, {}, [107])(107)
});