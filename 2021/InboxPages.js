// https://www.redditstatic.com/desktop2x/InboxPages.00fdc35d387a5f270b09.js
// Retrieved at 3/18/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxPages"], {
		"./src/reddit/components/IFrame/index.m.less": function(e, t, s) {
			e.exports = {
				IFrame: "saPujbGMyXRwqISHcmJH9",
				iFrame: "saPujbGMyXRwqISHcmJH9"
			}
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-helmet/es/Helmet.js"),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/pageTitle.ts"),
				a = s("./src/reddit/helpers/tabBadging/index.ts"),
				l = s("./src/reddit/selectors/appBadges.ts");
			const u = Object(i.a)(l.c, e => ({
				badgeCount: e
			}));
			class m extends r.Component {
				constructor() {
					super(...arguments), this.title = Object(c.c)().toString(), this.state = {
						badgeCount: 0
					}
				}
				getTitle() {
					const e = this.props.title.length > 0 ? this.props.title : Object(c.c)().toString(),
						t = this.props.badgeCount >= 100 ? "99+" : this.props.badgeCount;
					return this.props.badgeCount > 0 ? `(${t}) ${this.props.title}` : e
				}
				render() {
					return Object(a.b)(this.props.badgeCount > 0), n.a.createElement(o.b, null, n.a.createElement("title", null, this.getTitle()))
				}
			}
			t.a = Object(d.b)(u)(m)
		},
		"./src/reddit/pages/RedditEmbed/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "e8fTXufFydLy7wHBm6rHP"
			}
		},
		"./src/reddit/pages/RedditEmbed/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/addQueryParams/index.ts"),
				a = s("./src/lib/env/index.ts"),
				l = s("./src/reddit/components/IFrame/index.m.less"),
				u = s.n(l);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = null
				}
				setRef(e) {
					this.ref = e
				}
				getDocument() {
					try {
						return this.ref.contentWindow.document
					} catch (e) {}
				}
				onLoad() {
					const e = this.getDocument();
					e && this.props.onLoad && this.props.onLoad(e)
				}
				render() {
					const {
						src: e
					} = this.props;
					return o.a.createElement("iframe", {
						className: u.a.IFrame,
						ref: e => this.setRef(e),
						src: e,
						onLoad: () => this.onLoad
					})
				}
			}
			var p = s("./src/reddit/components/TitleTagManager/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/selectors/userPrefs.ts"),
				O = s("./src/reddit/pages/RedditEmbed/index.m.less"),
				x = s.n(O);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(i.c)({
					isSubscriptionsPinned: g.b,
					url: e => e.platform.currentPage ? e.platform.currentPage.url : "",
					servedOrigin: e => `${e.meta.protocol}://${e.meta.domain}`,
					nightmode: f.W
				}),
				S = Object(d.b)(y),
				_ = ({
					offsetLeft: e,
					children: t,
					...s
				}) => o.a.createElement("div", j({
					className: x.a.wrapper,
					style: {
						left: e
					}
				}, s), t);
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0,
						hasMounted: !1,
						title: ""
					}
				}
				componentDidMount() {
					const e = () => () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(h.d)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					}), this.setState({
						hasMounted: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				onLoad(e) {
					e.title && this.setState({
						title: e.title
					})
				}
				render() {
					const {
						title: e
					} = this.state;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(p.a, {
						title: e
					}), this.renderContent())
				}
				renderContent() {
					const {
						isSubscriptionsPinned: e,
						servedOrigin: t,
						nightmode: s
					} = this.props;
					let n = 0;
					e && (n += b.u), 0 !== this.state.bodyScrollOffset && (n -= this.state.bodyScrollOffset);
					const d = Object(a.a)() ? t : "true",
						i = Object(a.a)() ? r.a.redditUrl : "";
					let l;
					return l = s ? i + Object(c.a)(this.props.url, {
						embedded: d,
						dark: "true"
					}) : i + Object(c.a)(this.props.url, {
						embedded: d
					}), o.a.createElement(_, {
						offsetLeft: n
					}, o.a.createElement(m, {
						src: l,
						onLoad: this.onLoad
					}))
				}
			}
			t.default = S(v)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxPages.00fdc35d387a5f270b09.js.map