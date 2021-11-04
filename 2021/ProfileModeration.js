// https://www.redditstatic.com/desktop2x/ProfileModeration.6c481f5e7db8216b1dff.js
// Retrieved at 11/4/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileModeration"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				a = Math.max;
			e.exports = function(e, t, r, o) {
				for (var s = -1, l = a(n((t - e) / (r || 1)), 0), i = Array(l); l--;) i[o ? l : ++s] = e, e += r;
				return i
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseRange.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, s) {
					return s && "number" != typeof s && r(t, n, s) && (n = s = void 0), t = o(t), void 0 === n ? (n = t, t = 0) : n = o(n), s = void 0 === s ? t < n ? 1 : -1 : o(s), a(t, n, s, e)
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
				o = (r(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: r()
					}
				}),
				s = o(),
				l = a.createContext(o()),
				i = function() {
					return a.useState((e = a.useContext(l), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || s) + function(e) {
							return e.value++
						}(t),
						gen: function(e) {
							return n + t.uid(e)
						}
					}));
					var e, t, n
				},
				c = function() {
					return i()[0].uid
				},
				d = function() {
					return i()[0].gen
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
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				i = n.n(l);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(s.b, {
				className: Object(o.a)(e.className, i.a.container, e.text.length >= e.maxChars ? i.a.mOverflow : null)
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
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				i = n.n(l);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = s.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: a,
					text: s,
					tooltipContentClass: l,
					...d
				} = e;
				return r.a.createElement("div", c({}, d, {
					className: Object(o.a)(i.a.container, n)
				}), s ? r.a.createElement("div", {
					className: Object(o.a)(i.a.tooltip, l, a ? i.a.below : i.a.above)
				}, s) : null, t)
			}, "HoverTooltip", i.a)
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
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/Settings/shared/Heading.m.less"),
				i = n.n(l);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const d = s.a.h2("Heading", i.a);
			t.b = e => {
				const {
					children: t,
					isResponsiveSettingsEnabled: n,
					...a
				} = e;
				return r.a.createElement(d, c({}, a, {
					className: Object(o.a)({
						[i.a["m-responsive"]]: n
					})
				}), t)
			};
			const u = s.a.p("HeadingSubtext", i.a)
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
				o = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				s = n.n(o),
				l = n("./src/lib/lessComponent.tsx");
			const i = l.a.div("Container", s.a),
				c = l.a.div("Content", s.a),
				d = l.a.div("Sidebar", s.a);
			t.a = e => r.a.createElement(i, {
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
				return V
			})), n.d(t, "o", (function() {
				return X
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "p", (function() {
				return se
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
				return Ee
			})), n.d(t, "c", (function() {
				return _e
			})), n.d(t, "e", (function() {
				return ve
			})), n.d(t, "h", (function() {
				return Ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
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
				E = n("./src/reddit/controls/Select/index.m.less"),
				_ = n.n(E);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const C = x.a.span("Wrapper", _.a),
				y = x.a.select("Inner", _.a),
				k = x.a.wrapped(g.b, "Caret", _.a);

			function w({
				className: e,
				innerClassName: t,
				...n
			}) {
				const a = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return r.a.createElement(C, {
					className: e
				}, r.a.createElement(y, v({
					className: t
				}, n)), r.a.createElement(k, v({
					isSubreddit: !0
				}, a)))
			}
			var N = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				S = n("./src/reddit/controls/Typography/index.tsx"),
				O = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				T = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				j = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				R = n("./node_modules/lodash/range.js"),
				I = n.n(R),
				F = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/layout/row/Inline/index.tsx"),
				M = n("./src/reddit/models/Flair/index.ts"),
				P = n("./src/reddit/selectors/tooltip.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				H = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				B = n.n(H);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const G = Object(d.a)(h.a),
				A = x.a.wrapped(T.a, "Circle", B.a),
				z = x.a.h3("Label", B.a),
				U = x.a.wrapped(S.c, "Subtext", B.a),
				q = x.a.wrapped(m.a, "HoverTooltip", B.a),
				Y = x.a.div("ControlContainer", B.a),
				Q = x.a.div("TextContainer", B.a),
				J = x.a.div("ActionContainer", B.a),
				V = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: a,
					isNightModeOn: o,
					disabled: s,
					indent: l,
					last: c,
					...d
				}) => r.a.createElement("div", W({}, d, {
					className: Object(i.a)(B.a.Wrapper, e, {
						[B.a.mColumn]: "column" === t,
						[B.a.mDisabled]: !!s,
						[B.a.mIndent]: !!l,
						[B.a.mLast]: !!c,
						[B.a.isCreateCommunity]: !!n,
						[B.a.inModal]: !!a,
						[B.a.isNightModeOn]: !!o
					})
				})),
				K = x.a.a("Link", B.a),
				X = x.a.wrapped(K, "SubtextLink", B.a),
				Z = x.a.wrapped(j.a, "LinkIcon", B.a),
				$ = x.a.button("LinkButton", B.a),
				ee = x.a.wrapped(O.a, "ArrowRight", B.a),
				te = e => r.a.createElement(V, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, r.a.createElement(Q, {
					className: e.textContainerClassName
				}, r.a.createElement(z, null, e.label, e.isRequired && r.a.createElement(A, null)), r.a.createElement(U, null, e.subtext)), r.a.createElement(J, null, e.children)),
				ne = x.a.div("StyledFlair", B.a),
				ae = x.a.wrapped(ne, "SpoilerFlair", B.a),
				re = x.a.wrapped(ne, "NSFWFlair", B.a),
				oe = e => {
					switch (e.flair) {
						case M.f.Nsfw:
							return r.a.createElement(re, null, "NSFW");
						case M.f.Spoiler:
							return r.a.createElement(ae, null, "SPOILER");
						default:
							return null
					}
				},
				se = e => {
					const t = Object(s.a)();
					return r.a.createElement(V, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, r.a.createElement(Q, null, r.a.createElement(L.a, null, r.a.createElement("label", {
						htmlFor: t
					}, r.a.createElement(z, null, e.label))), r.a.createElement(U, null, e.subtext)), r.a.createElement(J, null, r.a.createElement(Y, null, e.tooltip && r.a.createElement(q, {
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
				le = x.a.input("RangeSliderInput", B.a),
				ie = x.a.div("RangeSlider", B.a),
				ce = x.a.div("Ticks", B.a),
				de = x.a.div("TickText", B.a),
				ue = x.a.div("PreSubText", B.a),
				me = Object(l.c)({
					isNightModeOn: D.X
				}),
				pe = Object(o.b)(me)(e => r.a.createElement(V, {
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
				}, !e.inModal && r.a.createElement(L.a, null, r.a.createElement(z, null, e.label)), !e.hideSubtext && r.a.createElement(U, null, " ", r.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), r.a.createElement(J, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, r.a.createElement(ie, null, r.a.createElement(le, {
					style: {
						background: "linear-gradient(to right, " + I()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
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
				he = e => r.a.createElement(V, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(Q, null, r.a.createElement(L.a, null, r.a.createElement(z, null, e.label)), r.a.createElement(U, null, e.subtext)), r.a.createElement(J, null, r.a.createElement(Y, null, r.a.createElement(F.o, {
					onClick: e.onClick
				}, e.actionText)))),
				fe = e => r.a.createElement(V, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(Q, null, r.a.createElement(K, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, r.a.createElement(Z, null)), r.a.createElement(U, null, e.subtext)), r.a.createElement(J, null, r.a.createElement(K, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, r.a.createElement(ee, null)))),
				be = e => r.a.createElement(V, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(Q, null, r.a.createElement($, {
					onClick: e.onClick,
					className: Object(i.a)({
						[B.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), r.a.createElement(U, null, e.subtext)), r.a.createElement(J, null, !!e.hintText && r.a.createElement("div", {
					className: B.a.ActionHintText
				}, e.hintText), r.a.createElement($, {
					onClick: e.onClick,
					className: Object(i.a)({
						[B.a.NoColor]: e.color && "none" === e.color
					})
				}, r.a.createElement(ee, {
					className: Object(i.a)({
						[B.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				xe = Object(l.c)({
					isOpen: (e, t) => Object(P.b)(t.id)(e)
				}),
				ge = Object(o.b)(xe, (e, t) => ({
					openDropdown: () => {
						e(Object(c.h)({
							tooltipId: t.id
						}))
					}
				}))(e => r.a.createElement(V, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(Q, null, r.a.createElement(z, null, e.label), r.a.createElement(U, null, e.subtext)), r.a.createElement(J, null, (e => r.a.createElement("div", {
					className: B.a.DropdownWrapper,
					onClick: e.openDropdown
				}, r.a.createElement("span", {
					className: B.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), r.a.createElement(g.b, {
					className: B.a.DropdownTriangle
				}), r.a.createElement(G, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => r.a.createElement(f.b, {
					className: B.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && r.a.createElement("div", {
					className: B.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				Ee = ({
					disabled: e,
					last: t,
					onClick: n,
					onChange: o,
					...s
				}) => {
					const l = Object(a.useCallback)(e => o(e.target.value), [o]),
						{
							items: i
						} = s;
					return r.a.createElement(V, {
						disabled: e
					}, r.a.createElement(Q, null, r.a.createElement("label", {
						htmlFor: s.id
					}, r.a.createElement(z, {
						className: s.labelClassname
					}, s.label)), r.a.createElement(U, null, s.subtext)), r.a.createElement("div", {
						className: B.a.Wrapper__LineBreak
					}), r.a.createElement(V, {
						last: t,
						indent: !0,
						disabled: e
					}, r.a.createElement(w, {
						id: s.id,
						className: "redditStyle",
						disabled: e || s.inputDisabled,
						onChange: l,
						value: s.selected
					}, i.map(({
						value: e,
						displayName: t
					}) => r.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				_e = e => r.a.createElement(V, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(Q, null, r.a.createElement(z, null, e.label), r.a.createElement(U, null, e.subtext)), r.a.createElement(J, null, e.children)),
				ve = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && r.a.createElement("span", {
					className: B.a.tag
				}, "r/"), r.a.createElement(b.a, {
					className: e.isCreateCommunity ? B.a.input : void 0,
					disabled: !1,
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
				Ce = e => r.a.createElement(te, {
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
					className: B.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && r.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && r.a.createElement("div", {
					className: B.a.ActionLinkContainer
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
				return s
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "n", (function() {
				return i
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
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "j", (function() {
				return v
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(r);
			const s = a.a.section("FormPage", o.a),
				l = a.a.h1("HomePageTitle", o.a),
				i = a.a.button("HomePageBreadcrumb", o.a),
				c = a.a.div("HomePageGroup", o.a),
				d = a.a.h1("FormPageTitle", o.a),
				u = a.a.div("FormPageSection", o.a),
				m = a.a.div("FormGroup", o.a),
				p = a.a.h2("FormGroupTitle", o.a),
				h = a.a.div("FormElement", o.a),
				f = a.a.div("FormGroupDescription", o.a),
				b = a.a.div("FormItem", o.a),
				x = a.a.h3("FormElementTitle", o.a),
				g = a.a.div("FormElementDescription", o.a),
				E = a.a.div("FormElementError", o.a),
				_ = a.a.div("FormElementSubGroup", o.a),
				v = a.a.li("FormListItem", o.a)
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
				return E
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				s = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(c);
			const u = a.a.wrapped(r.a, "ModalInput", d.a),
				m = a.a.input("Input", d.a),
				p = a.a.wrapped(i.a, "RadioOn", d.a),
				h = a.a.wrapped(l.a, "RadioOff", d.a),
				f = a.a.wrapped(o.a, "Checkbox", d.a),
				b = a.a.wrapped(s.a, "CheckboxSelected", d.a),
				x = a.a.textarea("Textarea", d.a),
				g = a.a.label("StyledLabel", d.a),
				E = a.a.input("StyledFileInput", d.a)
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
				return C
			}));
			var a, r = n("./node_modules/lodash/throttle.js"),
				o = n.n(r),
				s = n("./node_modules/react/index.js"),
				l = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
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
				E = d.a.h3("Title", b.a),
				_ = d.a.div("TabNavContainer", b.a),
				v = d.a.div("Tabs", b.a),
				C = d.a.wrapped(({
					active: e,
					children: t,
					enabled: n,
					...a
				}) => l.a.createElement(p.a, x({}, a, {
					"aria-selected": e,
					className: Object(i.a)(a.className, {
						[b.a.mIsActive]: e,
						[b.a.mIsEnabled]: !1 !== n
					}),
					role: "tab"
				}), t), "Tab", b.a),
				y = e => {
					switch (e) {
						case a.GEAR:
							return l.a.createElement(g, null);
						default:
							return null
					}
				},
				k = () => window.pageYOffset || window.scrollY,
				w = 75,
				N = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: u.f,
					willChange: "transform",
					zIndex: m.f
				};
			class S extends l.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = o()(() => {
						this.state.sticky || this.forceUnsticky ? k() < w && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : k() >= w && this.setState({
							sticky: !0
						})
					}, c.J), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
					} = this.props, a = Object(i.a)({
						[b.a.mResponsive]: t
					});
					return l.a.createElement(_, {
						className: Object(i.a)(a, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, l.a.createElement(E, {
						className: Object(i.a)(a, {
							[b.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, y(this.props.icon), this.props.title), l.a.createElement(v, {
						className: Object(i.a)(a, {
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var a = n("./node_modules/lodash/throttle.js"),
				r = n.n(a),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				f = n.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends s.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(l.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? s.a.createElement(i.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && s.a.createElement("span", {
						className: n
					}, e.children), s.a.createElement("span", {
						className: Object(l.a)(f.a.text, e.textClassName)
					}, e.displayText)) : s.a.createElement(u.a, b({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? s.a.createElement("div", null, e.children) : s.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && s.a.createElement("span", {
						className: Object(l.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && s.a.createElement(d.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && s.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(l.a)(f.a.row, e, {
					[f.a.mIsInteractive]: !t.noHover,
					[f.a.mIsSelected]: t.isSelected,
					[f.a.topics]: t.isTopicsStyle
				});
				return s.a.createElement(x, b({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
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
				return _
			})), n.d(t, "c", (function() {
				return v
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				o = n.n(r),
				s = n("./node_modules/raf/index.js"),
				l = n.n(s),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
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
			class E extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
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
					l()(() => {
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
						moreText: o = a.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: s,
						isModalOpen: l
					} = this.state;
					return c.a.createElement("div", {
						className: Object(d.a)(g.a.wrapper, t)
					}, c.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), s && c.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, o), l && c.a.createElement(b, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const _ = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: a,
						fallbackMessage: r,
						messages: o = []
					} = e, s = o.length ? o : r ? [r] : [];
					return s.length ? c.a.createElement("div", {
						className: t
					}, s.map((e, t) => c.a.createElement(E, {
						className: n,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				v = e => c.a.createElement(_, {
					fallbackMessage: a.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = E
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
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/controls/ErrorText/index.tsx"),
				i = n("./src/reddit/icons/svgs/Plus/index.tsx"),
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
			const p = s.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: a,
						className: s,
						...l
					} = e, i = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.inputWrapper, s, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, r.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: a
					}, l)), e.label && r.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: i
						})
					}, e.label), e.children)
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: a,
						isInvalid: s,
						className: l,
						redditStyle: i,
						...c
					} = e, d = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.inputMovingLabelWrapper, l, {
							[u.a.mIsInvalid]: s,
							[u.a.mIsRedditStyle]: i
						}),
						onClick: h
					}, r.a.createElement(p, m({
						innerRef: a
					}, c)), e.label && r.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				x = e => r.a.createElement("div", {
					className: Object(o.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(i.a, {
					className: u.a.plus
				}));
			var g;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(g || (g = {}));
			class E extends r.a.Component {
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
						errors: o = []
					} = this.props;
					return e.map((e, s) => r.a.createElement(f, {
						inputRef: e => this.setInputRef(e, s),
						isInvalid: !!o[s],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, s),
						placeholder: a,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(s)
					}, r.a.createElement(c.b, {
						className: u.a.trash
					})), !!o[s] && r.a.createElement(l.b, {
						className: u.a.errorText
					}, o[s])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: a,
						addValueText: s,
						disabled: l
					} = this.props;
					this.focusedInput = null;
					const i = !(!!a && n.length >= a) && !l;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.multiInputWrapper, e)
					}, t && i && r.a.createElement(x, {
						onClick: this.addValue,
						text: s
					}), this.renderFields(), !t && i && r.a.createElement(x, {
						onClick: this.addValue,
						text: s
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				s = n.n(o);
			t.a = a.a.wrapped(r.a, "unstyledInternalLink", s.a)
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
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
				o = n.n(r),
				s = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/pages/ErrorPages/index.m.less"),
				i = n.n(l);
			const c = ({
					message: e
				}) => o.a.createElement("div", {
					className: i.a.container
				}, o.a.createElement("h3", {
					className: i.a.title
				}, e || a.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), o.a.createElement(s.n, {
					className: i.a.primaryRouterLink,
					to: "/"
				}, a.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				d = ({
					message: e
				}) => o.a.createElement("div", {
					className: i.a.container
				}, o.a.createElement("h3", {
					className: i.a.title
				}, e || a.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), o.a.createElement(s.n, {
					className: i.a.primaryRouterLink,
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
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/Settings/shared/Layout.tsx"),
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
				E = n.n(g);
			const _ = h.a.li("listItem", E.a),
				v = h.a.wrapped(b.k, "sectionWrapper", E.a);
			class C extends o.a.PureComponent {
				render() {
					const {
						profileName: e
					} = this.props, t = `user/${e}`;
					return o.a.createElement("div", null, o.a.createElement(f.b, {
						isResponsiveSettingsEnabled: !1
					}, a.fbt._("Profile moderation", null, {
						hk: "3wd5uz"
					})), o.a.createElement(k, null, o.a.createElement(x.c, null, a.fbt._("Posting directly to your profile is optional. If you choose not to post to your profile, you will not have a need for moderation tools.", null, {
						hk: "1fhfms"
					})), o.a.createElement(x.c, null, a.fbt._("If you do choose to post to your profile, then it's important to get familiar with your {=moderation tools} and the {=mod guidelines} to ensure that personal information, spam, and other disallowed content isn't showing up and remaining in the comments of your profile. Below, you'll find a basic guide for the tools provided to you:", [a.fbt._param("=moderation tools", o.a.createElement(b.o, {
						href: "https://www.reddithelp.com/en/categories/using-reddit/profiles/profile-moderation-tools"
					}, a.fbt._("moderation tools", null, {
						hk: "134iKj"
					}))), a.fbt._param("=mod guidelines", o.a.createElement(b.o, {
						href: "https://www.reddit.com/help/healthycommunities/"
					}, a.fbt._("mod guidelines", null, {
						hk: "1pCYsz"
					})))], {
						hk: "3sL7qq"
					}))), o.a.createElement(y, {
						title: a.fbt._("Traffic", null, {
							hk: "3p7y3G"
						}),
						url: `${p.a.redditUrl}/${t}/about/traffic/`
					}, a.fbt._("View traffic statistics and graphs for your profile.", null, {
						hk: "Ldtz5"
					})), o.a.createElement(y, {
						title: a.fbt._("Moderators", null, {
							hk: "3NZZDm"
						}),
						url: `${p.a.redditUrl}/${t}/about/moderators/`
					}, a.fbt._("If your profile's comments are busy and you need some help with moderation, you might want to add on some users as mods to assist you. You can do this here. Choose users that you trust to represent you via their statements and mod actions, and be mindful of what permissions your grant them.", null, {
						hk: "4iZhyS"
					})), o.a.createElement(y, {
						title: a.fbt._("Moderation log", null, {
							hk: "3SnXfa"
						}),
						url: `${p.a.redditUrl}/${t}/about/log/`
					}, a.fbt._("The moderation log lists all mod actions taken by any mod on your profile. If you are the only moderator of your profile the only actions will be from you or Automoderator.", null, {
						hk: "2E5IUN"
					}), o.a.createElement("ul", null, o.a.createElement(_, null, a.fbt._("If you add multiple moderators, the mod log can be helpful in seeing who has taken a particular action like banning a user or removing a comment.", null, {
						hk: "1jkBZO"
					})), o.a.createElement(_, null, a.fbt._("The moderation log will also list actions taken by Automoderator if it is set up to make actions on your profile.", null, {
						hk: "1jFtuS"
					})))), o.a.createElement(y, {
						title: a.fbt._("Automoderator", null, {
							hk: "RlDIl"
						}),
						url: `${p.a.redditUrl}/${t}/wiki/edit/config/automoderator/`
					}, o.a.createElement(o.a.Fragment, null, a.fbt._("Automoderator is our friendly robot that can be used to help you moderate your community. Automod is a versatile tool that can be set up to remove or flag content posted on your page so you can review it.", null, {
						hk: "39AqGb"
					}), o.a.createElement("ul", null, o.a.createElement(_, null, a.fbt._("If you have questions about setting up rules, {=r/Automoderator} is a valuable resource for help and advice. You can see the {=full documentation of how it works here}", [a.fbt._param("=r/Automoderator", o.a.createElement(b.o, {
						href: `${p.a.redditUrl}/r/automoderator`
					}, a.fbt._("r/Automoderator", null, {
						hk: "4G6JG7"
					}))), a.fbt._param("=full documentation of how it works here", o.a.createElement(b.o, {
						href: `${p.a.redditUrl}/wiki/automoderator/full-documentation`
					}, a.fbt._("full documentation of how it works here", null, {
						hk: "38DU6Z"
					})))], {
						hk: "3RyHot"
					}))))), o.a.createElement(y, {
						title: a.fbt._("Moderation queue", null, {
							hk: "2klx0L"
						}),
						url: `${p.a.redditUrl}/${t}/about/modqueue/`
					}, a.fbt._("Content that users report can be found here so you can approve or remove it.", null, {
						hk: "1XCfvS"
					})), o.a.createElement(y, {
						title: a.fbt._("Ban users", null, {
							hk: "1aSzpl"
						}),
						url: `${p.a.redditUrl}/${t}/about/banned`
					}, o.a.createElement(o.a.Fragment, null, a.fbt._("This tool allows you to ban users from participating in your page and should be used sparingly. If users are violating site-wide rules or harassing you, please contact the admins using our {=contact form} or {=r/reddit.com modmail} .", [a.fbt._param("=contact form", o.a.createElement(b.o, {
						href: "https://www.reddithelp.com/en/submit-request"
					}, a.fbt._("contact form", null, {
						hk: "2SNqWb"
					}))), a.fbt._param("=r/reddit.com modmail", o.a.createElement(b.o, {
						href: "https://www.reddit.com/message/compose?to=%2Fr%2Freddit.com"
					}, a.fbt._("r/reddit.com modmail", null, {
						hk: "39y2SZ"
					})))], {
						hk: "utbR5"
					}), o.a.createElement("ul", null, o.a.createElement(_, null, a.fbt._("Bans can be permanent or timed. For minor infractions a warning or a short ban is often enough.", null, {
						hk: "lLQqA"
					})), o.a.createElement(_, null, a.fbt._("It is important to use bans only in situations where it is warranted. Educating users or ignoring someone’s bad behavior can often be more effective than banning them.", null, {
						hk: "RCs7j"
					}))))), o.a.createElement(y, {
						title: a.fbt._("Flairs", null, {
							hk: "1Xgd2b"
						}),
						url: `${p.a.redditUrl}/${t}/about/flair/`
					}, a.fbt._("Flair is text that displays next to someone’s username. Users in sports communities use flair to display their favorite team.", null, {
						hk: "1d8Ly3"
					}), o.a.createElement("ul", null, o.a.createElement(_, null, a.fbt._("“Flair” is like a label you can apply to a post or a specific user. For example, you could flair someone who works with you so other users are aware of who they are.", null, {
						hk: "2vQddD"
					})))), o.a.createElement(y, {
						title: a.fbt._("Spam", null, {
							hk: "Z2twC"
						}),
						url: `${p.a.redditUrl}/${t}/about/spam/`
					}, a.fbt._("All removed content can be seen here. This includes content caught by the site wide spam filter and content removed by a moderator.", null, {
						hk: "13xRK1"
					}), o.a.createElement("ul", null, o.a.createElement(_, null, a.fbt._("You can approve content that was removed accidentally.", null, {
						hk: "4n2TOC"
					})))), o.a.createElement(y, {
						title: a.fbt._("Awards", null, {
							hk: "4C97ga"
						}),
						url: `/${t}/about/awards/`
					}, a.fbt._("Optional awards can be toggled on or off to make them available on posts and comments in your community. When disabled, users will not be able to use those awards on your content.", null, {
						hk: "4oO0RA"
					})), o.a.createElement(k, null, a.fbt._("Have more questions?", null, {
						hk: "2YqHcl"
					}), o.a.createElement(b.o, {
						href: "https://www.reddithelp.com/en/submit-request"
					}, a.fbt._("Submit a request", null, {
						hk: "1poUz6"
					}))))
				}
			}

			function y({
				title: e,
				url: t,
				children: n
			}) {
				return o.a.createElement(b.g, {
					link: t,
					label: e,
					subtext: n
				})
			}

			function k({
				children: e
			}) {
				return o.a.createElement(v, null, o.a.createElement(b.n, null, e))
			}
			var w = C;
			const N = Object(l.c)({
					isModerator: (e, t) => Object(u.f)(e, t.match.params),
					isOwnProfile: (e, t) => Object(m.Q)(e, t.match.params.profileName),
					isPending: e => e.profileModSettingsPage.api.pending,
					hasSubreddit: (e, t) => Object(m.ob)(e, {
						userName: t.match.params.profileName
					})
				}),
				S = Object(s.b)(N);
			class O extends o.a.Component {
				render() {
					const {
						isModerator: e,
						isOwnProfile: t,
						isPending: n,
						hasSubreddit: r,
						match: s
					} = this.props;
					if (n) return null;
					const {
						profileName: l
					} = s.params;
					return e || t ? r ? o.a.createElement(o.a.Fragment, null, o.a.createElement(c.c, {
						constrainWidth: !0,
						title: `/user/${l} Settings`,
						icon: c.b.GEAR
					}), o.a.createElement(i.a, null, o.a.createElement(w, {
						profileName: l
					}))) : o.a.createElement(d.b, {
						message: a.fbt._("The requested page is not supported", null, {
							hk: "41VUSW"
						})
					}) : o.a.createElement(d.a, null)
				}
			}
			t.default = S(O)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileModeration.6c481f5e7db8216b1dff.js.map