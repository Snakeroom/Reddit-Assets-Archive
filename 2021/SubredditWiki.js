// https://www.redditstatic.com/desktop2x/SubredditWiki.cad722345f299141dbe8.js
// Retrieved at 5/11/2021, 6:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var s = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, i, r) {
				for (var o = -1, a = n(s((t - e) / (i || 1)), 0), d = Array(a); a--;) d[r ? a : ++o] = e, e += i;
				return d
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRange.js"),
				i = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, s, o) {
					return o && "number" != typeof o && i(t, s, o) && (s = o = void 0), t = r(t), void 0 === s ? (s = t, t = 0) : s = r(s), o = void 0 === o ? t < s ? 1 : -1 : r(o), n(t, s, o, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				i = s("./node_modules/lodash/_castFunction.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > o) return [];
				var s = a,
					c = d(e, a);
				t = i(t), e -= a;
				for (var l = n(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, s) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isAdmin: "_1-wk-QXxJ0S4snrasETuaA",
				isAdminEmeritus: "sKTYSQHxlRLbA-0pCpguU",
				isMod: "_1VChcviPF84MLFsL2xfBCP",
				isOp: "_1uBAPhkb8ZOA-9p_B6inAR",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/config.ts"),
				a = s("./src/reddit/controls/InternalLink/index.tsx"),
				d = s("./src/reddit/hooks/useClickSourceData.ts"),
				c = s("./src/reddit/components/AuthorLink/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(r.a)(e.className, l.a.authorLinkStyles, {
						[l.a.isAdmin]: e.isAdmin,
						[l.a.isAdminEmeritus]: e.isAdminEmeritus,
						[l.a.isLivestreaming]: e.isLivestreaming,
						[l.a.isMod]: e.isMod,
						[l.a.isOp]: e.isOp,
						[l.a.isStrong]: e.isStrong,
						[l.a.isUnstyled]: e.isUnstyled
					}),
					s = Object(d.a)();
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? i.a.createElement("a", {
					className: t,
					href: `${o.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? i.a.createElement("span", {
					className: Object(r.a)(l.a.deletedAuthorLink, e.className)
				}, e.children) : i.a.createElement(a.a, {
					className: t,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: s
					}
				}, e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(o.a)(e => r.a.createElement(a.d, null, r.a.createElement(a.h, null, r.a.createElement(c.a, null, r.a.createElement(a.p, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.k, null, r.a.createElement(a.o, {
				className: m.a.ModalText
			}, e.modalText)), r.a.createElement(a.f, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.t, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				g = s("./src/reddit/selectors/tooltip.ts"),
				k = s("./src/reddit/components/OverflowMenu/index.m.less"),
				f = s.n(k);
			const w = c.a.wrapped(u.a, "_Dropdown", f.a),
				C = Object(m.a)(w),
				y = c.a.button("MenuButton", f.a),
				_ = c.a.wrapped(x.a, "MenuIcon", f.a),
				E = c.a.wrapped(p.b, "DropdownRow", f.a),
				S = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(g.b)(t)(e)
				}),
				v = Object(o.b)(S, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				O = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = v(e => {
				const t = Object(h.a)();
				return r.a.createElement(y, {
					"aria-expanded": e.dropdownIsOpen,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("more options", null, {
						hk: "2EnY1x"
					}),
					className: Object(d.a)(e.className, {
						[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
					}),
					disabled: e.disabled,
					onClick: O(e),
					onMouseDown: e.handleMouseDown,
					id: e.dropdownId
				}, e.icon ? e.icon : t ? r.a.createElement(b.a, {
					name: "overflow_horizontal"
				}) : r.a.createElement(_, null), r.a.createElement(C, {
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId,
					isFixed: e.isFixed,
					targetPosition: e.targetPosition,
					tooltipPosition: e.tooltipPosition,
					style: e.style
				}, e.children))
			})
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(i);
			t.a = n.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.a("Link", c.a), u = Object(a.t)({
				isFrontpage: a.y
			});
			t.a = u(e => i.a.createElement(o.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, i.a.createElement("div", {
				className: c.a.LinkContainer
			}, i.a.createElement("div", {
				className: c.a.Column
			}, i.a.createElement(m, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), i.a.createElement(m, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), i.a.createElement(m, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), i.a.createElement(m, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), i.a.createElement(m, {
				href: "https://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && i.a.createElement(i.a.Fragment, null, i.a.createElement(m, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), i.a.createElement(m, {
				href: "https://www.reddit.com/posts/2020/"
			}, l._("Rereddit", null, {
				hk: "1z3k7C"
			})), i.a.createElement(m, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), i.a.createElement("div", {
				className: c.a.Column
			}, i.a.createElement(m, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), i.a.createElement(m, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), i.a.createElement(m, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), i.a.createElement(m, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), i.a.createElement(m, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), i.a.createElement(m, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), i.a.createElement(m, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), i.a.createElement(m, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), i.a.createElement(m, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), i.a.createElement("div", {
				className: c.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/lodash/throttle.js"),
				r = s.n(i),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(l);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var p = e => a.a.createElement("div", {
					className: Object(n.a)(e.className, m.a.container),
					style: e.style
				}, a.a.createElement(c.i, {
					className: m.a.button,
					onClick: () => window.scroll(0, 0)
				}, u._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				h = s("./src/reddit/components/SidebarFooter/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				k = s.n(g),
				f = s("./src/lib/lessComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = d.e[1] + 24,
				y = b.f + 8 + 152 + 16,
				_ = y + C + 8,
				E = f.a.div("Container", k.a),
				S = f.a.wrapped(({
					className: e,
					...t
				}) => a.a.createElement(p, w({
					className: e,
					style: {
						top: "calc(100vh - 8px)"
					}
				}, t)), "BackToTop", k.a),
				v = ({
					children: e,
					className: t,
					isFakeOverlay: s,
					isSticky: i
				}) => a.a.createElement("div", {
					className: Object(n.a)(t, {
						[k.a.StickyStyles]: i && !s,
						[k.a.StickyStylesFakeOverlay]: !!s
					})
				}, e);
			class O extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > _,
						shouldFooterSticky: this.windowHeight > y
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.G), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							adComponentOnFakeOverlay: t,
							children: s,
							className: n,
							hideFooter: i
						}
					} = this, r = this.state.isAdSticky && !(!e && !s);
					return a.a.createElement(E, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(v, {
						isFakeOverlay: t,
						isSticky: r
					}, e, s, !i && a.a.createElement(h.a, null)), !this.props.hideBackToTop && a.a.createElement(S, null))
				}
			}
			const N = Object(x.t)();
			t.a = N(O)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/models/Theme/index.ts"),
				f = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const w = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(f.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(f.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = w(e);
					return Object(k.f)(t)
				},
				_ = e => {
					const t = C(e);
					return Object(k.f)(t)
				};
			var E = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				S = s.n(E);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(m.t)(), N = Object(r.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.m)(e, t) || void 0,
						n = t.redditStyle || Object(x.l)(e, {
							subredditId: s
						}),
						i = Object(g.V)(e);
					return n || i
				},
				nigtmode: g.V,
				subredditId: m.m,
				topPostVariant: b.d
			}));
			class j extends i.a.Component {
				constructor() {
					super(...arguments), this.contentRef = i.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = w(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = _(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: o,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, p = s ? S.a.widgetContentOnly : S.a.widgetContent, h = !n && this.props.styles, b = h ? this.getWidgetBackgroundStyles() : {}, x = h ? this.getWidgetHeaderStyles() : {};
					return i.a.createElement("div", {
						className: Object(a.a)(t, S.a.widgetBackground, {
							[S.a.redditStyle]: n,
							[S.a.clickable]: !!o,
							[S.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: o,
						style: b
					}, d && i.a.createElement("div", {
						className: S.a.widgetHeader,
						style: x
					}, i.a.createElement("div", {
						className: Object(a.a)(S.a.widgetTitle, l)
					}, i.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), i.a.createElement("div", {
						className: Object(a.a)(p, {
							[S.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && i.a.createElement(u.o, {
						className: S.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, v._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = O(N(Object(d.a)(Object(l.c)(j))))
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less": function(e, t, s) {
			e.exports = {
				topBar: "_3kk9JdhNiGLp6Q4tGsrqLR"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less": function(e, t, s) {
			e.exports = {
				communityWikiTopBar: "_2XDZHbiDksRCrTtd194Wf2",
				wikiPageEditorContent: "_3GDwuTIITQZO6fapgaJpFD"
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.m.less"),
				l = s.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: o,
						"data-redditstyle": a,
						...d
					} = t, c = ((e, t, s) => {
						const n = !(!t && !s);
						let i = "";
						return i = e ? n ? l.a.mDisabledRedditStyle : l.a.mDisabled : n ? l.a.mActiveRedditStyle : l.a.mActive
					})(n, o, a);
					return i.a.createElement(e, m({
						className: Object(r.a)(l.a.CheckboxIcon, c, s)
					}, d))
				},
				p = u(d.a),
				h = u(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? p : o.a;
				return i.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(r.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, i.a.createElement(t, {
					className: Object(r.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, i, r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(i || (i = {}));
			const a = (e, t) => s => ({
					source: i.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(o.widget)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...o.defaults
				}),
				d = (e, t) => s => ({
					source: i.POST,
					action: r.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: o.post(s, e),
					subreddit: o.subreddit(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...o.defaults(s)
				}),
				c = () => e => ({
					source: i.SIDEBAR,
					action: r.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...o.defaults(e)
				}),
				l = e => t => ({
					source: i.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: n.TOPIC,
					...o.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), i.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, i.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, i.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, i.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), i.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/pages/shared.ts"),
				d = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = s("./src/reddit/components/ContentGate/index.tsx"),
				l = s("./src/reddit/components/HeaderImage/index.tsx"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var h = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, n = Object(u.a)(s, m.R.HOT, {});
					return i.a.createElement(p.a, {
						listingKey: n,
						listingName: s.toLowerCase(),
						subredditId: t.id,
						subredditName: s
					})
				},
				b = s("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				x = s("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				g = s("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				k = s("./src/reddit/constants/parameters.ts"),
				f = s("./src/reddit/constants/wiki.ts"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				y = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				_ = s("./src/reddit/components/JumpToContent/index.tsx"),
				E = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				S = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				v = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				O = s.n(v);

			function N(e) {
				const {
					wikiPageName: t,
					subredditName: s
				} = e;
				return n.createElement(n.Fragment, null, n.createElement(_.a, null), n.createElement(S.a, {
					isModHub: !1,
					className: O.a.topBar,
					wikiPageName: t,
					subredditName: s
				}), n.createElement(E.a, {
					showRevisionInfo: !0,
					subredditName: s,
					wikiPageName: t
				}))
			}
			var j = s("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				T = s.n(j);
			class P extends i.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: s,
						queryParams: n
					} = e, {
						wikiSubRoute: r,
						wikiPageName: o
					} = s, a = n[k.A], d = n[k.B], c = k.C in n;
					switch (r) {
						case f.m.Create:
						case f.m.Edit:
							return i.a.createElement(x.a, {
								contentClassName: T.a.wikiPageEditorContent,
								isCreation: r === f.m.Create,
								subredditName: t,
								topBarClassName: T.a.communityWikiTopBar,
								wikiPageName: o
							});
						case f.m.Revisions:
							return i.a.createElement(y.a, {
								key: o,
								isRecentRevisionsMode: !o,
								subredditName: t,
								wikiPageName: o
							});
						default:
							return o && a && d ? i.a.createElement(b.a, {
								comparisonRevisionId: Object(C.a)(d),
								revisionId: Object(C.a)(a),
								subredditName: t,
								wikiPageName: o
							}) : o && (a || c) ? i.a.createElement(g.a, {
								revisionId: a ? Object(C.a)(a) : void 0,
								subredditName: t,
								wikiPageName: o
							}) : o ? i.a.createElement(N, {
								wikiPageName: o,
								subredditName: t
							}) : null
					}
				}
			}
			var R = Object(w.t)()(P),
				W = s("./src/reddit/constants/componentSizes.ts"),
				M = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				I = s("./src/reddit/layout/page/Listing/index.tsx"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				B = s("./src/reddit/selectors/user.ts");
			const L = Object(w.t)(),
				A = Object(r.b)(() => Object(o.c)({
					contentGateInfo: (e, {
						match: t
					}) => Object(B.e)(e, t.params.subredditName),
					layout: w.O,
					over18Pref: B.cb,
					subreddit: (e, {
						match: t
					}) => Object(D.A)(e, {
						subredditName: t.params.subredditName || f.e
					}),
					subredditName: (e, {
						match: t
					}) => t.params.subredditName || f.e,
					wikiPageName: (e, {
						match: t
					}) => t.params.wikiPageName || f.i
				}), e => ({
					onPageViewed: () => e(Object(a.a)())
				}));
			class F extends i.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: s,
						subredditName: n
					} = this.props, r = !!s && s.isNSFW && !B.cb, o = Object(M.a)(t, r, n);
					if (o) return i.a.createElement(c.default, o);
					const a = `/r/${n}/`;
					return i.a.createElement(I.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: W.i,
						navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: s ? s.name : n,
							maxWidth: W.i,
							subredditOrProfile: s,
							url: a
						}), i.a.createElement(d.a, {
							subreddit: s || void 0,
							subredditId: s ? s.id : void 0,
							subredditName: n,
							subredditUrl: a
						})),
						content: i.a.createElement(R, {
							subredditName: n
						}),
						sidebar: s && i.a.createElement(h, {
							subreddit: s,
							subredditName: n
						})
					})
				}
			}
			t.default = L(A(F))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.cad722345f299141dbe8.js.map