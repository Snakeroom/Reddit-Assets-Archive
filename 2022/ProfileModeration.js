// https://www.redditstatic.com/desktop2x/ProfileModeration.ac90419fd3bcd6b197e7.js
// Retrieved at 2/16/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileModeration"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				a = Math.max;
			e.exports = function(e, t, r, s) {
				for (var o = -1, i = a(n((t - e) / (r || 1)), 0), l = Array(i); i--;) l[s ? i : ++o] = e, e += r;
				return l
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseRange.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				s = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, o) {
					return o && "number" != typeof o && r(t, n, o) && (n = o = void 0), t = s(t), void 0 === n ? (n = t, t = 0) : n = s(n), o = void 0 === o ? t < n ? 1 : -1 : s(o), a(t, n, o, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_createRange.js")();
			e.exports = a
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var a = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return a(e) + t
			}
		},
		"./node_modules/react-uid/dist/es2015/hooks.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var a = n("./node_modules/react/index.js"),
				r = function() {
					var e = 1,
						t = new WeakMap,
						n = function(a, r) {
							return "number" == typeof a || "string" == typeof a ? r ? "idx-" + r : "val-" + a : t.has(a) ? "uid" + t.get(a) : (t.set(a, e++), n(a))
						};
					return n
				},
				s = (r(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: r()
					}
				}),
				o = s(),
				i = a.createContext(s()),
				l = function() {
					return a.useState((e = a.useContext(i), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || o) + function(e) {
							return e.value++
						}(t),
						gen: function(e) {
							return n + t.uid(e)
						}
					}));
					var e, t, n
				},
				c = function() {
					return l()[0].uid
				},
				d = function() {
					return l()[0].gen
				}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				l = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(o.b, {
				className: Object(s.a)(e.className, l.a.container, e.text.length >= e.maxChars ? l.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				l = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: a,
					text: o,
					tooltipContentClass: i,
					...d
				} = e;
				return r.a.createElement("div", c({}, d, {
					className: Object(s.a)(l.a.container, n)
				}), o ? r.a.createElement("div", {
					className: Object(s.a)(l.a.tooltip, i, a ? l.a.below : l.a.above)
				}, o) : null, t)
			}, "HoverTooltip", l.a)
		},
		"./src/reddit/components/Settings/shared/Heading.m.less": function(e, t, n) {
			e.exports = {
				Heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				"m-responsive": "_1zFj2WkkmV422Jul4b3LUb",
				mResponsive: "_1zFj2WkkmV422Jul4b3LUb",
				HeadingSubtext: "_3yr8kdlxh51P-SJDaWVzJD",
				headingSubtext: "_3yr8kdlxh51P-SJDaWVzJD"
			}
		},
		"./src/reddit/components/Settings/shared/Heading.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Settings/shared/Heading.m.less"),
				l = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const d = o.a.h2("Heading", l.a);
			t.b = e => {
				const {
					children: t,
					isResponsiveSettingsEnabled: n,
					...a
				} = e;
				return r.a.createElement(d, c({}, a, {
					className: Object(s.a)({
						[l.a["m-responsive"]]: n
					})
				}), t)
			};
			const u = o.a.p("HeadingSubtext", l.a)
		},
		"./src/reddit/components/Settings/shared/Layout.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1OrNGmpfcSuSebbZM5vYq4",
				container: "_1OrNGmpfcSuSebbZM5vYq4",
				Content: "_3FVpvZ7OLbS_68QzaxplxT",
				content: "_3FVpvZ7OLbS_68QzaxplxT",
				Sidebar: "_6hkUCjcaRoPRm1710RzSl",
				sidebar: "_6hkUCjcaRoPRm1710RzSl",
				defaultLayout: "jrocDu3YgcEScGB_zdT4I",
				"m-collectionLayout": "_1LF62vb6GTug21RCMM47iK",
				mCollectionLayout: "_1LF62vb6GTug21RCMM47iK"
			}
		},
		"./src/reddit/components/Settings/shared/Layout.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				o = n.n(s),
				i = n("./src/lib/lessComponent.tsx");
			const l = i.a.div("Container", o.a),
				c = i.a.div("Content", o.a),
				d = i.a.div("Sidebar", o.a);
			t.a = e => r.a.createElement(l, {
				className: e.className
			}, r.a.createElement(c, null, e.children), r.a.createElement(d, null, e.sidebar))
		},
		"./src/reddit/components/Settings/shared/Widgets.m.less": function(e, t, n) {
			e.exports = {
				Label: "asxizthf5kZpmoY27VBKd",
				label: "asxizthf5kZpmoY27VBKd",
				HoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				hoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				ControlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				controlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				TextContainer: "_3dLmvT0hpACHFxhncqzCOr",
				textContainer: "_3dLmvT0hpACHFxhncqzCOr",
				inModal: "_2O2JPVgOlh8J6OW_9ur4BQ",
				ActionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				actionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				Wrapper: "_2f63as5b5FASHMqGd5P1o0",
				wrapper: "_2f63as5b5FASHMqGd5P1o0",
				isCreateCommunity: "_38bDTwLcytTCF-174R0UXB",
				mColumn: "_1HH_g-CLQB1BPcqOhZcakt",
				mLast: "_3Lu6XJyVbSLDVKDx-wue2g",
				mIndent: "_2D65jEbgD16ae_sJ8BG4AD",
				mDisabled: "LvI7FSBTGgYo2skaf18Zv",
				Subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				RangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				rangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				isNightModeOn: "KUWYDFs7fIjkQNSOL_BR6",
				Wrapper__LineBreak: "wVinKyEoajEmwhqwINYGd",
				wrapperLineBreak: "wVinKyEoajEmwhqwINYGd",
				ActionHintText: "_2sMk-Gi9c8T3BKYlxSopql",
				actionHintText: "_2sMk-Gi9c8T3BKYlxSopql",
				Link: "oFObIzV6ZJDQuG09BXh8u",
				link: "oFObIzV6ZJDQuG09BXh8u",
				SubtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				subtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				LinkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				linkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				LinkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				linkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				ArrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				arrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				NoColor: "mI7WmWMma8pZnlYRHtE56",
				noColor: "mI7WmWMma8pZnlYRHtE56",
				StyledFlair: "_1F2irboi-xRChkhyndP6ct",
				styledFlair: "_1F2irboi-xRChkhyndP6ct",
				SpoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				spoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				NSFWFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				nsfwFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				DropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				dropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				DropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				dropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				Row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				DropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				dropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				DescriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				descriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				Circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				RangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				rangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				Ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				TickText: "_1hEYjTFCxEu2ILobPvatAp",
				tickText: "_1hEYjTFCxEu2ILobPvatAp",
				PreSubText: "_2_hv6QgJ151j9WmCyETVfC",
				preSubText: "_2_hv6QgJ151j9WmCyETVfC",
				MultiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				multiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				ActionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				actionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				input: "_14_SnmD6g3FrozcKjTpqoH",
				tag: "_1GQzFyg5xYq94euL74ZaeJ"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "n", (function() {
				return U
			})), n.d(t, "k", (function() {
				return J
			})), n.d(t, "o", (function() {
				return K
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "m", (function() {
				return se
			})), n.d(t, "p", (function() {
				return oe
			})), n.d(t, "j", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return he
			})), n.d(t, "g", (function() {
				return fe
			})), n.d(t, "a", (function() {
				return be
			})), n.d(t, "d", (function() {
				return ge
			})), n.d(t, "i", (function() {
				return ve
			})), n.d(t, "c", (function() {
				return Ee
			})), n.d(t, "e", (function() {
				return Ce
			})), n.d(t, "h", (function() {
				return _e
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				u = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				h = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/controls/FormFields/index.tsx"),
				x = n("./src/lib/lessComponent.tsx"),
				g = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				v = n("./src/reddit/controls/Select/index.m.less"),
				E = n.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = x.a.span("Wrapper", E.a),
				w = x.a.select("Inner", E.a),
				y = x.a.wrapped(g.b, "Caret", E.a);

			function k({
				className: e,
				innerClassName: t,
				...n
			}) {
				const a = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return r.a.createElement(_, {
					className: e
				}, r.a.createElement(w, C({
					className: t
				}, n)), r.a.createElement(y, C({
					isSubreddit: !0
				}, a)))
			}
			var N = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				S = n("./src/reddit/controls/Typography/index.tsx"),
				O = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				T = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				j = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				R = n("./node_modules/lodash/range.js"),
				L = n.n(R),
				F = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/layout/row/Inline/index.tsx"),
				M = n("./src/reddit/models/Flair/index.ts"),
				P = n("./src/reddit/selectors/tooltip.ts"),
				H = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				D = n.n(B);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const A = Object(d.a)(h.a),
				G = x.a.wrapped(T.a, "Circle", D.a),
				z = x.a.h3("Label", D.a),
				U = x.a.wrapped(S.c, "Subtext", D.a),
				q = x.a.wrapped(m.a, "HoverTooltip", D.a),
				Y = x.a.div("ControlContainer", D.a),
				Q = x.a.div("TextContainer", D.a),
				V = x.a.div("ActionContainer", D.a),
				J = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: a,
					isNightModeOn: s,
					disabled: o,
					indent: i,
					last: c,
					...d
				}) => r.a.createElement("div", W({}, d, {
					className: Object(l.a)(D.a.Wrapper, e, {
						[D.a.mColumn]: "column" === t,
						[D.a.mDisabled]: !!o,
						[D.a.mIndent]: !!i,
						[D.a.mLast]: !!c,
						[D.a.isCreateCommunity]: !!n,
						[D.a.inModal]: !!a,
						[D.a.isNightModeOn]: !!s
					})
				})),
				Z = x.a.a("Link", D.a),
				K = x.a.wrapped(Z, "SubtextLink", D.a),
				X = x.a.wrapped(j.a, "LinkIcon", D.a),
				$ = x.a.button("LinkButton", D.a),
				ee = x.a.wrapped(O.a, "ArrowRight", D.a),
				te = e => r.a.createElement(J, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, r.a.createElement(Q, {
					className: e.textContainerClassName
				}, r.a.createElement(z, null, e.label, e.isRequired && r.a.createElement(G, null)), r.a.createElement(U, null, e.subtext)), r.a.createElement(V, null, e.children)),
				ne = x.a.div("StyledFlair", D.a),
				ae = x.a.wrapped(ne, "SpoilerFlair", D.a),
				re = x.a.wrapped(ne, "NSFWFlair", D.a),
				se = e => {
					switch (e.flair) {
						case M.f.Nsfw:
							return r.a.createElement(re, null, "NSFW");
						case M.f.Spoiler:
							return r.a.createElement(ae, null, "SPOILER");
						default:
							return null
					}
				},
				oe = e => {
					const t = Object(o.a)();
					return r.a.createElement(J, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, r.a.createElement(Q, null, r.a.createElement(I.a, null, r.a.createElement("label", {
						htmlFor: t
					}, r.a.createElement(z, null, e.label))), r.a.createElement(U, null, e.subtext)), r.a.createElement(V, null, r.a.createElement(Y, null, e.tooltip && r.a.createElement(q, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), r.a.createElement(N.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				ie = x.a.input("RangeSliderInput", D.a),
				le = x.a.div("RangeSlider", D.a),
				ce = x.a.div("Ticks", D.a),
				de = x.a.div("TickText", D.a),
				ue = x.a.div("PreSubText", D.a),
				me = Object(i.c)({
					isNightModeOn: H.X
				}),
				pe = Object(s.b)(me)(e => r.a.createElement(J, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction,
					className: e.className
				}, r.a.createElement(Q, {
					style: {
						flex: 5
					}
				}, !e.inModal && r.a.createElement(I.a, null, r.a.createElement(z, null, e.label)), !e.hideSubtext && r.a.createElement(U, null, " ", r.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), r.a.createElement(V, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, r.a.createElement(le, null, r.a.createElement(ie, {
					style: {
						background: "linear-gradient(to right, " + L()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
					},
					className: "range-slider-input",
					type: "range",
					min: e.min,
					max: e.max,
					step: e.step,
					value: e.value,
					onChange: e.onChange,
					onInput: e.onChange,
					disabled: e.disabled
				}), r.a.createElement(ce, null, Object.keys(e.ticks).map((t, n) => r.a.createElement(de, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				he = e => r.a.createElement(J, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(Q, null, r.a.createElement(I.a, null, r.a.createElement(z, null, e.label)), r.a.createElement(U, null, e.subtext)), r.a.createElement(V, null, r.a.createElement(Y, null, r.a.createElement(F.o, {
					onClick: e.onClick
				}, e.actionText)))),
				fe = e => r.a.createElement(J, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(Q, null, r.a.createElement(Z, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, r.a.createElement(X, null)), r.a.createElement(U, null, e.subtext)), r.a.createElement(V, null, r.a.createElement(Z, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, r.a.createElement(ee, null)))),
				be = e => r.a.createElement(J, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(Q, null, r.a.createElement($, {
					onClick: e.onClick,
					className: Object(l.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), r.a.createElement(U, null, e.subtext)), r.a.createElement(V, null, !!e.hintText && r.a.createElement("div", {
					className: D.a.ActionHintText
				}, e.hintText), r.a.createElement($, {
					onClick: e.onClick,
					className: Object(l.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				}, r.a.createElement(ee, {
					className: Object(l.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				xe = Object(i.c)({
					isOpen: (e, t) => Object(P.b)(t.id)(e)
				}),
				ge = Object(s.b)(xe, (e, t) => ({
					openDropdown: () => {
						e(Object(c.h)({
							tooltipId: t.id
						}))
					}
				}))(e => r.a.createElement(J, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(Q, null, r.a.createElement(z, null, e.label), r.a.createElement(U, null, e.subtext)), r.a.createElement(V, null, (e => r.a.createElement("div", {
					className: D.a.DropdownWrapper,
					onClick: e.openDropdown
				}, r.a.createElement("span", {
					className: D.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), r.a.createElement(g.b, {
					className: D.a.DropdownTriangle
				}), r.a.createElement(A, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => r.a.createElement(f.b, {
					className: D.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && r.a.createElement("div", {
					className: D.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				ve = ({
					disabled: e,
					last: t,
					onClick: n,
					onChange: s,
					...o
				}) => {
					const i = Object(a.useCallback)(e => s(e.target.value), [s]),
						{
							items: l
						} = o;
					return r.a.createElement(J, {
						disabled: e
					}, r.a.createElement(Q, null, r.a.createElement("label", {
						htmlFor: o.id
					}, r.a.createElement(z, {
						className: o.labelClassname
					}, o.label)), r.a.createElement(U, null, o.subtext)), r.a.createElement("div", {
						className: D.a.Wrapper__LineBreak
					}), r.a.createElement(J, {
						last: t,
						indent: !0,
						disabled: e
					}, r.a.createElement(k, {
						id: o.id,
						className: "redditStyle",
						disabled: e || o.inputDisabled,
						onChange: i,
						value: o.selected
					}, l.map(({
						value: e,
						displayName: t
					}) => r.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				Ee = e => r.a.createElement(J, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(Q, null, r.a.createElement(z, null, e.label), r.a.createElement(U, null, e.subtext)), r.a.createElement(V, null, e.children)),
				Ce = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && r.a.createElement("span", {
					className: D.a.tag
				}, "r/"), r.a.createElement(b.a, {
					className: e.isCreateCommunity ? D.a.input : void 0,
					disabled: !!e.disabled,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && r.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				_e = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, r.a.createElement(p.i, {
					disabled: !1,
					onChange: e.onChange,
					onFocus: e.onFocus,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					rows: e.rows || 4,
					style: {
						marginBottom: e.isCreateCommunity ? "4px" : 0,
						resize: e.isCreateCommunity ? "vertical" : "both"
					},
					value: e.value,
					onBlur: e.onBlur
				}), r.a.createElement("div", {
					className: D.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && r.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && r.a.createElement("div", {
					className: D.a.ActionLinkContainer
				}, e.actionLink)))
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "j", (function() {
				return C
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(r);
			const o = a.a.section("FormPage", s.a),
				i = a.a.h1("HomePageTitle", s.a),
				l = a.a.button("HomePageBreadcrumb", s.a),
				c = a.a.div("HomePageGroup", s.a),
				d = a.a.h1("FormPageTitle", s.a),
				u = a.a.div("FormPageSection", s.a),
				m = a.a.div("FormGroup", s.a),
				p = a.a.h2("FormGroupTitle", s.a),
				h = a.a.div("FormElement", s.a),
				f = a.a.div("FormGroupDescription", s.a),
				b = a.a.div("FormItem", s.a),
				x = a.a.h3("FormElementTitle", s.a),
				g = a.a.div("FormElementDescription", s.a),
				v = a.a.div("FormElementError", s.a),
				E = a.a.div("FormElementSubGroup", s.a),
				C = a.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "g", (function() {
				return v
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				s = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(c);
			const u = a.a.wrapped(r.a, "ModalInput", d.a),
				m = a.a.input("Input", d.a),
				p = a.a.wrapped(l.a, "RadioOn", d.a),
				h = a.a.wrapped(i.a, "RadioOff", d.a),
				f = a.a.wrapped(s.a, "Checkbox", d.a),
				b = a.a.wrapped(o.a, "CheckboxSelected", d.a),
				x = a.a.textarea("Textarea", d.a),
				g = a.a.label("StyledLabel", d.a),
				v = a.a.input("StyledFileInput", d.a)
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, n) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
				mResponsive: "_28QD3wRQT74vkz8KPzFC43",
				TabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				tabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				Tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				Tab: "_1PoD47oSHsBQ37RfRPY-G-",
				tab: "_1PoD47oSHsBQ37RfRPY-G-",
				mIsActive: "_1Ico4fvlryEwDknLqa0-lP",
				mIsEnabled: "_3ZTJ0aNoM983-ysCWCpmrA"
			}
		},
		"./src/reddit/components/TabNav/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return _
			}));
			var a, r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/constants/zIndex.ts"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				h = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				f = n("./src/reddit/components/TabNav/index.m.less"),
				b = n.n(f);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.GEAR = "gear"
			}(a || (a = {}));
			const g = d.a.wrapped(h.a, "Gear", b.a),
				v = d.a.h3("Title", b.a),
				E = d.a.div("TabNavContainer", b.a),
				C = d.a.div("Tabs", b.a),
				_ = d.a.wrapped(({
					active: e,
					children: t,
					enabled: n,
					...a
				}) => i.a.createElement(p.a, x({}, a, {
					"aria-selected": e,
					className: Object(l.a)(a.className, {
						[b.a.mIsActive]: e,
						[b.a.mIsEnabled]: !1 !== n
					}),
					role: "tab"
				}), t), "Tab", b.a),
				w = e => {
					switch (e) {
						case a.GEAR:
							return i.a.createElement(g, null);
						default:
							return null
					}
				},
				y = () => window.pageYOffset || window.scrollY,
				k = 75,
				N = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: u.f,
					willChange: "transform",
					zIndex: m.f
				};
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = s()(() => {
						this.state.sticky || this.forceUnsticky ? y() < k && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : y() >= k && this.setState({
							sticky: !0
						})
					}, c.K), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
						sticky: !1
					}
				}
				componentDidMount() {
					this.props.isCategoryPage && (this.toggleSticky(), window.addEventListener("orientationchange", this.toggleSticky), window.addEventListener("resize", this.toggleSticky), window.addEventListener("scroll", this.toggleSticky))
				}
				componentWillUnmount() {
					this.props.isCategoryPage && (window.removeEventListener("orientationchange", this.toggleSticky), window.removeEventListener("resize", this.toggleSticky), window.removeEventListener("scroll", this.toggleSticky))
				}
				render() {
					const {
						innerRef: e,
						isResponsiveSettingsEnabled: t,
						onTouchMove: n
					} = this.props, a = Object(l.a)({
						[b.a.mResponsive]: t
					});
					return i.a.createElement(E, {
						className: Object(l.a)(a, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, i.a.createElement(v, {
						className: Object(l.a)(a, {
							[b.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, w(this.props.icon), this.props.title), i.a.createElement(C, {
						className: Object(l.a)(a, {
							[b.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? N : void 0
					}, this.props.children))
				}
			}
			t.c = S
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "c", (function() {
				return C
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				s = n.n(r),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				l = n("./node_modules/react/index.js"),
				c = n.n(l),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				f = n.n(h);
			var b = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return c.a.createElement("div", {
						className: f.a.wrapper
					}, c.a.createElement(p.a, {
						className: f.a.titleRow
					}, n), c.a.createElement("div", {
						className: f.a.detailsContainer
					}, t), c.a.createElement(p.a, {
						className: f.a.buttonRow
					}, c.a.createElement(m.l, {
						className: f.a.confirmButton,
						onClick: e.onConfirmed
					}, a.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				x = n("./src/reddit/controls/ErrorText/index.m.less"),
				g = n.n(x);
			class v extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: n,
						errorModalTitle: r = a.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: s = a.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: i
					} = this.state;
					return c.a.createElement("div", {
						className: Object(d.a)(g.a.wrapper, t)
					}, c.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), o && c.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, s), i && c.a.createElement(b, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const E = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: a,
						fallbackMessage: r,
						messages: s = []
					} = e, o = s.length ? s : r ? [r] : [];
					return o.length ? c.a.createElement("div", {
						className: t
					}, o.map((e, t) => c.a.createElement(v, {
						className: n,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				C = e => c.a.createElement(E, {
					fallbackMessage: a.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = v
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				l = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: a,
						className: o,
						...i
					} = e, l = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(s.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, r.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: a
					}, i)), e.label && r.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: a,
						isInvalid: o,
						className: i,
						redditStyle: l,
						...c
					} = e, d = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(s.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: l
						}),
						onClick: h
					}, r.a.createElement(p, m({
						innerRef: a
					}, c)), e.label && r.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				x = e => r.a.createElement("div", {
					className: Object(s.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(l.a, {
					className: u.a.plus
				}));
			var g;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(g || (g = {}));
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: g.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: g.REMOVE,
							value: n,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: n,
						placeholder: a,
						errors: s = []
					} = this.props;
					return e.map((e, o) => r.a.createElement(f, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!s[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: a,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, r.a.createElement(c.b, {
						className: u.a.trash
					})), !!s[o] && r.a.createElement(i.b, {
						className: u.a.errorText
					}, s[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: a,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const l = !(!!a && n.length >= a) && !i;
					return r.a.createElement("div", {
						className: Object(s.a)(u.a.multiInputWrapper, e)
					}, t && l && r.a.createElement(x, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && l && r.a.createElement(x, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/controls/Select/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "DuuuuIp9EubfvJyrdxytL",
				wrapper: "DuuuuIp9EubfvJyrdxytL",
				Caret: "_8fOXBcWxu_c3tlrAKMR3R",
				caret: "_8fOXBcWxu_c3tlrAKMR3R",
				Inner: "_3-_epznhOfLDNH3-plYM6l",
				inner: "_3-_epznhOfLDNH3-plYM6l",
				active: "wFEhEmBm9HI3jG6QDUnaw",
				redditStyle: "_2PDExzXmSTOdxzNjRB1Pww"
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, n) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(i.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, r.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, r.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", l({
				className: Object(s.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(o);
			const l = e => r.a.createElement("svg", {
				className: Object(s.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = ({
					message: e
				}) => s.a.createElement("div", {
					className: l.a.container
				}, s.a.createElement("h3", {
					className: l.a.title
				}, e || a.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), s.a.createElement(o.n, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, a.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				d = ({
					message: e
				}) => s.a.createElement("div", {
					className: l.a.container
				}, s.a.createElement("h3", {
					className: l.a.title
				}, e || a.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), s.a.createElement(o.n, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, a.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/ProfileModSettings/Navigation.m.less": function(e, t, n) {
			e.exports = {
				listItem: "BvT1z-ywH7tI443Z5ORMe",
				sectionWrapper: "_1Ivld4cbXCFAZRcstB6jkn"
			}
		},
		"./src/reddit/pages/ProfileModSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				c = n("./src/reddit/components/TabNav/index.tsx"),
				d = n("./src/reddit/pages/ErrorPages/index.tsx"),
				u = n("./src/reddit/selectors/profile.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/config.ts"),
				h = n("./src/lib/lessComponent.tsx"),
				f = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				b = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				x = n("./src/reddit/controls/Typography/index.tsx"),
				g = n("./src/reddit/pages/ProfileModSettings/Navigation.m.less"),
				v = n.n(g);
			const E = h.a.li("listItem", v.a),
				C = h.a.wrapped(b.k, "sectionWrapper", v.a);
			class _ extends s.a.PureComponent {
				render() {
					const {
						profileName: e
					} = this.props, t = `user/${e}`;
					return s.a.createElement("div", null, s.a.createElement(f.b, {
						isResponsiveSettingsEnabled: !1
					}, a.fbt._("Profile moderation", null, {
						hk: "3wd5uz"
					})), s.a.createElement(y, null, s.a.createElement(x.c, null, a.fbt._("Posting directly to your profile is optional. If you choose not to post to your profile, you will not have a need for moderation tools.", null, {
						hk: "1fhfms"
					})), s.a.createElement(x.c, null, a.fbt._("If you do choose to post to your profile, then it's important to get familiar with your {=moderation tools} and the {=mod guidelines} to ensure that personal information, spam, and other disallowed content isn't showing up and remaining in the comments of your profile. Below, you'll find a basic guide for the tools provided to you:", [a.fbt._param("=moderation tools", s.a.createElement(b.o, {
						href: "https://www.reddithelp.com/en/categories/using-reddit/profiles/profile-moderation-tools"
					}, a.fbt._("moderation tools", null, {
						hk: "134iKj"
					}))), a.fbt._param("=mod guidelines", s.a.createElement(b.o, {
						href: "https://www.reddit.com/help/healthycommunities/"
					}, a.fbt._("mod guidelines", null, {
						hk: "1pCYsz"
					})))], {
						hk: "3sL7qq"
					}))), s.a.createElement(w, {
						title: a.fbt._("Traffic", null, {
							hk: "3p7y3G"
						}),
						url: `${p.a.redditUrl}/${t}/about/traffic/`
					}, a.fbt._("View traffic statistics and graphs for your profile.", null, {
						hk: "Ldtz5"
					})), s.a.createElement(w, {
						title: a.fbt._("Moderators", null, {
							hk: "3NZZDm"
						}),
						url: `${p.a.redditUrl}/${t}/about/moderators/`
					}, a.fbt._("If your profile's comments are busy and you need some help with moderation, you might want to add on some users as mods to assist you. You can do this here. Choose users that you trust to represent you via their statements and mod actions, and be mindful of what permissions your grant them.", null, {
						hk: "4iZhyS"
					})), s.a.createElement(w, {
						title: a.fbt._("Moderation log", null, {
							hk: "3SnXfa"
						}),
						url: `${p.a.redditUrl}/${t}/about/log/`
					}, a.fbt._("The moderation log lists all mod actions taken by any mod on your profile. If you are the only moderator of your profile the only actions will be from you or Automoderator.", null, {
						hk: "2E5IUN"
					}), s.a.createElement("ul", null, s.a.createElement(E, null, a.fbt._("If you add multiple moderators, the mod log can be helpful in seeing who has taken a particular action like banning a user or removing a comment.", null, {
						hk: "1jkBZO"
					})), s.a.createElement(E, null, a.fbt._("The moderation log will also list actions taken by Automoderator if it is set up to make actions on your profile.", null, {
						hk: "1jFtuS"
					})))), s.a.createElement(w, {
						title: a.fbt._("Automoderator", null, {
							hk: "RlDIl"
						}),
						url: `${p.a.redditUrl}/${t}/wiki/edit/config/automoderator/`
					}, s.a.createElement(s.a.Fragment, null, a.fbt._("Automoderator is our friendly robot that can be used to help you moderate your community. Automod is a versatile tool that can be set up to remove or flag content posted on your page so you can review it.", null, {
						hk: "39AqGb"
					}), s.a.createElement("ul", null, s.a.createElement(E, null, a.fbt._("If you have questions about setting up rules, {=r/Automoderator} is a valuable resource for help and advice. You can see the {=full documentation of how it works here}", [a.fbt._param("=r/Automoderator", s.a.createElement(b.o, {
						href: `${p.a.redditUrl}/r/automoderator`
					}, a.fbt._("r/Automoderator", null, {
						hk: "4G6JG7"
					}))), a.fbt._param("=full documentation of how it works here", s.a.createElement(b.o, {
						href: `${p.a.redditUrl}/wiki/automoderator/full-documentation`
					}, a.fbt._("full documentation of how it works here", null, {
						hk: "38DU6Z"
					})))], {
						hk: "3RyHot"
					}))))), s.a.createElement(w, {
						title: a.fbt._("Moderation queue", null, {
							hk: "2klx0L"
						}),
						url: `${p.a.redditUrl}/${t}/about/modqueue/`
					}, a.fbt._("Content that users report can be found here so you can approve or remove it.", null, {
						hk: "1XCfvS"
					})), s.a.createElement(w, {
						title: a.fbt._("Ban users", null, {
							hk: "1aSzpl"
						}),
						url: `${p.a.redditUrl}/${t}/about/banned`
					}, s.a.createElement(s.a.Fragment, null, a.fbt._("This tool allows you to ban users from participating in your page and should be used sparingly. If users are violating site-wide rules or harassing you, please contact the admins using our {=contact form} or {=r/reddit.com modmail} .", [a.fbt._param("=contact form", s.a.createElement(b.o, {
						href: "https://www.reddithelp.com/en/submit-request"
					}, a.fbt._("contact form", null, {
						hk: "2SNqWb"
					}))), a.fbt._param("=r/reddit.com modmail", s.a.createElement(b.o, {
						href: "https://www.reddit.com/message/compose?to=%2Fr%2Freddit.com"
					}, a.fbt._("r/reddit.com modmail", null, {
						hk: "39y2SZ"
					})))], {
						hk: "utbR5"
					}), s.a.createElement("ul", null, s.a.createElement(E, null, a.fbt._("Bans can be permanent or timed. For minor infractions a warning or a short ban is often enough.", null, {
						hk: "lLQqA"
					})), s.a.createElement(E, null, a.fbt._("It is important to use bans only in situations where it is warranted. Educating users or ignoring someone’s bad behavior can often be more effective than banning them.", null, {
						hk: "RCs7j"
					}))))), s.a.createElement(w, {
						title: a.fbt._("Flairs", null, {
							hk: "1Xgd2b"
						}),
						url: `${p.a.redditUrl}/${t}/about/flair/`
					}, a.fbt._("Flair is text that displays next to someone’s username. Users in sports communities use flair to display their favorite team.", null, {
						hk: "1d8Ly3"
					}), s.a.createElement("ul", null, s.a.createElement(E, null, a.fbt._("“Flair” is like a label you can apply to a post or a specific user. For example, you could flair someone who works with you so other users are aware of who they are.", null, {
						hk: "2vQddD"
					})))), s.a.createElement(w, {
						title: a.fbt._("Spam", null, {
							hk: "Z2twC"
						}),
						url: `${p.a.redditUrl}/${t}/about/spam/`
					}, a.fbt._("All removed content can be seen here. This includes content caught by the site wide spam filter and content removed by a moderator.", null, {
						hk: "13xRK1"
					}), s.a.createElement("ul", null, s.a.createElement(E, null, a.fbt._("You can approve content that was removed accidentally.", null, {
						hk: "4n2TOC"
					})))), s.a.createElement(w, {
						title: a.fbt._("Awards", null, {
							hk: "4C97ga"
						}),
						url: `/${t}/about/awards/`
					}, a.fbt._("Optional awards can be toggled on or off to make them available on posts and comments in your community. When disabled, users will not be able to use those awards on your content.", null, {
						hk: "4oO0RA"
					})), s.a.createElement(y, null, a.fbt._("Have more questions?", null, {
						hk: "2YqHcl"
					}), s.a.createElement(b.o, {
						href: "https://www.reddithelp.com/en/submit-request"
					}, a.fbt._("Submit a request", null, {
						hk: "1poUz6"
					}))))
				}
			}

			function w({
				title: e,
				url: t,
				children: n
			}) {
				return s.a.createElement(b.g, {
					link: t,
					label: e,
					subtext: n
				})
			}

			function y({
				children: e
			}) {
				return s.a.createElement(C, null, s.a.createElement(b.n, null, e))
			}
			var k = _;
			const N = Object(i.c)({
					isModerator: (e, t) => Object(u.f)(e, t.match.params),
					isOwnProfile: (e, t) => Object(m.Q)(e, t.match.params.profileName),
					isPending: e => e.profileModSettingsPage.api.pending,
					hasSubreddit: (e, t) => Object(m.tb)(e, {
						userName: t.match.params.profileName
					})
				}),
				S = Object(o.b)(N);
			class O extends s.a.Component {
				render() {
					const {
						isModerator: e,
						isOwnProfile: t,
						isPending: n,
						hasSubreddit: r,
						match: o
					} = this.props;
					if (n) return null;
					const {
						profileName: i
					} = o.params;
					return e || t ? r ? s.a.createElement(s.a.Fragment, null, s.a.createElement(c.c, {
						constrainWidth: !0,
						title: `/user/${i} Settings`,
						icon: c.b.GEAR
					}), s.a.createElement(l.a, null, s.a.createElement(k, {
						profileName: i
					}))) : s.a.createElement(d.b, {
						message: a.fbt._("The requested page is not supported", null, {
							hk: "41VUSW"
						})
					}) : s.a.createElement(d.a, null)
				}
			}
			t.default = S(O)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileModeration.ac90419fd3bcd6b197e7.js.map