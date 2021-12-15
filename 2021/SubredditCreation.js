// https://www.redditstatic.com/desktop2x/SubredditCreation.6688ef63de29f58288ee.js
// Retrieved at 12/15/2021, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditCreation"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				a = Math.max;
			e.exports = function(e, t, s, r) {
				for (var i = -1, o = a(n((t - e) / (s || 1)), 0), l = Array(o); o--;) l[r ? o : ++i] = e, e += s;
				return l
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, i) {
					return i && "number" != typeof i && s(t, n, i) && (n = i = void 0), t = r(t), void 0 === n ? (n = t, t = 0) : n = r(n), i = void 0 === i ? t < n ? 1 : -1 : r(i), a(t, n, i, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_createRange.js")();
			e.exports = a
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var a = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
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
				s = function() {
					var e = 1,
						t = new WeakMap,
						n = function(a, s) {
							return "number" == typeof a || "string" == typeof a ? s ? "idx-" + s : "val-" + a : t.has(a) ? "uid" + t.get(a) : (t.set(a, e++), n(a))
						};
					return n
				},
				r = (s(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: s()
					}
				}),
				i = r(),
				o = a.createContext(r()),
				l = function() {
					return a.useState((e = a.useContext(o), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || i) + function(e) {
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
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				o = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				l = n.n(o);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(i.b, {
				className: Object(r.a)(e.className, l.a.container, e.text.length >= e.maxChars ? l.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/EmailInvitePaintedDoor/loader.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(a.a)({
				resolved: {},
				chunkName: () => "EmailInvitePaintedDoor",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EmailInvitePaintedDoor").then(n.bind(null, "./src/reddit/components/EmailInvitePaintedDoor/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EmailInvitePaintedDoor/index.tsx"
				}
			});
			t.a = s
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
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				l = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = i.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: a,
					text: i,
					tooltipContentClass: o,
					...d
				} = e;
				return s.a.createElement("div", c({}, d, {
					className: Object(r.a)(l.a.container, n)
				}), i ? s.a.createElement("div", {
					className: Object(r.a)(l.a.tooltip, o, a ? l.a.below : l.a.above)
				}, i) : null, t)
			}, "HoverTooltip", l.a)
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
				return Y
			})), n.d(t, "k", (function() {
				return X
			})), n.d(t, "o", (function() {
				return Z
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "m", (function() {
				return re
			})), n.d(t, "p", (function() {
				return ie
			})), n.d(t, "j", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return he
			})), n.d(t, "g", (function() {
				return xe
			})), n.d(t, "a", (function() {
				return be
			})), n.d(t, "d", (function() {
				return ve
			})), n.d(t, "i", (function() {
				return fe
			})), n.d(t, "c", (function() {
				return Ee
			})), n.d(t, "e", (function() {
				return ge
			})), n.d(t, "h", (function() {
				return _e
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				o = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				m = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				h = n("./src/reddit/controls/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/controls/FormFields/index.tsx"),
				C = n("./src/lib/lessComponent.tsx"),
				v = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				f = n("./src/reddit/controls/Select/index.m.less"),
				E = n.n(f);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = C.a.span("Wrapper", E.a),
				w = C.a.select("Inner", E.a),
				N = C.a.wrapped(v.b, "Caret", E.a);

			function y({
				className: e,
				innerClassName: t,
				...n
			}) {
				const a = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return s.a.createElement(_, {
					className: e
				}, s.a.createElement(w, g({
					className: t
				}, n)), s.a.createElement(N, g({
					isSubreddit: !0
				}, a)))
			}
			var k = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				O = n("./src/reddit/controls/Typography/index.tsx"),
				S = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				T = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				j = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				I = n("./node_modules/lodash/range.js"),
				M = n.n(I),
				R = n("./src/reddit/controls/Button/index.tsx"),
				D = n("./src/reddit/layout/row/Inline/index.tsx"),
				B = n("./src/reddit/models/Flair/index.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				A = n.n(P);

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
				H = C.a.wrapped(T.a, "Circle", A.a),
				V = C.a.h3("Label", A.a),
				Y = C.a.wrapped(O.c, "Subtext", A.a),
				J = C.a.wrapped(u.a, "HoverTooltip", A.a),
				K = C.a.div("ControlContainer", A.a),
				Q = C.a.div("TextContainer", A.a),
				z = C.a.div("ActionContainer", A.a),
				X = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: a,
					isNightModeOn: r,
					disabled: i,
					indent: o,
					last: c,
					...d
				}) => s.a.createElement("div", W({}, d, {
					className: Object(l.a)(A.a.Wrapper, e, {
						[A.a.mColumn]: "column" === t,
						[A.a.mDisabled]: !!i,
						[A.a.mIndent]: !!o,
						[A.a.mLast]: !!c,
						[A.a.isCreateCommunity]: !!n,
						[A.a.inModal]: !!a,
						[A.a.isNightModeOn]: !!r
					})
				})),
				q = C.a.a("Link", A.a),
				Z = C.a.wrapped(q, "SubtextLink", A.a),
				U = C.a.wrapped(j.a, "LinkIcon", A.a),
				$ = C.a.button("LinkButton", A.a),
				ee = C.a.wrapped(S.a, "ArrowRight", A.a),
				te = e => s.a.createElement(X, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, s.a.createElement(Q, {
					className: e.textContainerClassName
				}, s.a.createElement(V, null, e.label, e.isRequired && s.a.createElement(H, null)), s.a.createElement(Y, null, e.subtext)), s.a.createElement(z, null, e.children)),
				ne = C.a.div("StyledFlair", A.a),
				ae = C.a.wrapped(ne, "SpoilerFlair", A.a),
				se = C.a.wrapped(ne, "NSFWFlair", A.a),
				re = e => {
					switch (e.flair) {
						case B.f.Nsfw:
							return s.a.createElement(se, null, "NSFW");
						case B.f.Spoiler:
							return s.a.createElement(ae, null, "SPOILER");
						default:
							return null
					}
				},
				ie = e => {
					const t = Object(i.a)();
					return s.a.createElement(X, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, s.a.createElement(Q, null, s.a.createElement(D.a, null, s.a.createElement("label", {
						htmlFor: t
					}, s.a.createElement(V, null, e.label))), s.a.createElement(Y, null, e.subtext)), s.a.createElement(z, null, s.a.createElement(K, null, e.tooltip && s.a.createElement(J, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), s.a.createElement(k.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				oe = C.a.input("RangeSliderInput", A.a),
				le = C.a.div("RangeSlider", A.a),
				ce = C.a.div("Ticks", A.a),
				de = C.a.div("TickText", A.a),
				me = C.a.div("PreSubText", A.a),
				ue = Object(o.c)({
					isNightModeOn: F.X
				}),
				pe = Object(r.b)(ue)(e => s.a.createElement(X, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction,
					className: e.className
				}, s.a.createElement(Q, {
					style: {
						flex: 5
					}
				}, !e.inModal && s.a.createElement(D.a, null, s.a.createElement(V, null, e.label)), !e.hideSubtext && s.a.createElement(Y, null, " ", s.a.createElement(me, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), s.a.createElement(z, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, s.a.createElement(le, null, s.a.createElement(oe, {
					style: {
						background: "linear-gradient(to right, " + M()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
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
				}), s.a.createElement(ce, null, Object.keys(e.ticks).map((t, n) => s.a.createElement(de, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				he = e => s.a.createElement(X, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Q, null, s.a.createElement(D.a, null, s.a.createElement(V, null, e.label)), s.a.createElement(Y, null, e.subtext)), s.a.createElement(z, null, s.a.createElement(K, null, s.a.createElement(R.o, {
					onClick: e.onClick
				}, e.actionText)))),
				xe = e => s.a.createElement(X, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Q, null, s.a.createElement(q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, s.a.createElement(U, null)), s.a.createElement(Y, null, e.subtext)), s.a.createElement(z, null, s.a.createElement(q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, s.a.createElement(ee, null)))),
				be = e => s.a.createElement(X, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(Q, null, s.a.createElement($, {
					onClick: e.onClick,
					className: Object(l.a)({
						[A.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), s.a.createElement(Y, null, e.subtext)), s.a.createElement(z, null, !!e.hintText && s.a.createElement("div", {
					className: A.a.ActionHintText
				}, e.hintText), s.a.createElement($, {
					onClick: e.onClick,
					className: Object(l.a)({
						[A.a.NoColor]: e.color && "none" === e.color
					})
				}, s.a.createElement(ee, {
					className: Object(l.a)({
						[A.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				Ce = Object(o.c)({
					isOpen: (e, t) => Object(L.b)(t.id)(e)
				}),
				ve = Object(r.b)(Ce, (e, t) => ({
					openDropdown: () => {
						e(Object(c.h)({
							tooltipId: t.id
						}))
					}
				}))(e => s.a.createElement(X, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Q, null, s.a.createElement(V, null, e.label), s.a.createElement(Y, null, e.subtext)), s.a.createElement(z, null, (e => s.a.createElement("div", {
					className: A.a.DropdownWrapper,
					onClick: e.openDropdown
				}, s.a.createElement("span", {
					className: A.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), s.a.createElement(v.b, {
					className: A.a.DropdownTriangle
				}), s.a.createElement(G, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => s.a.createElement(x.b, {
					className: A.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && s.a.createElement("div", {
					className: A.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				fe = ({
					disabled: e,
					last: t,
					onClick: n,
					onChange: r,
					...i
				}) => {
					const o = Object(a.useCallback)(e => r(e.target.value), [r]),
						{
							items: l
						} = i;
					return s.a.createElement(X, {
						disabled: e
					}, s.a.createElement(Q, null, s.a.createElement("label", {
						htmlFor: i.id
					}, s.a.createElement(V, {
						className: i.labelClassname
					}, i.label)), s.a.createElement(Y, null, i.subtext)), s.a.createElement("div", {
						className: A.a.Wrapper__LineBreak
					}), s.a.createElement(X, {
						last: t,
						indent: !0,
						disabled: e
					}, s.a.createElement(y, {
						id: i.id,
						className: "redditStyle",
						disabled: e || i.inputDisabled,
						onChange: o,
						value: i.selected
					}, l.map(({
						value: e,
						displayName: t
					}) => s.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				Ee = e => s.a.createElement(X, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(Q, null, s.a.createElement(V, null, e.label), s.a.createElement(Y, null, e.subtext)), s.a.createElement(z, null, e.children)),
				ge = e => s.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && s.a.createElement("span", {
					className: A.a.tag
				}, "r/"), s.a.createElement(b.a, {
					className: e.isCreateCommunity ? A.a.input : void 0,
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && s.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				_e = e => s.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, s.a.createElement(p.i, {
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
				}), s.a.createElement("div", {
					className: A.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && s.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && s.a.createElement("div", {
					className: A.a.ActionLinkContainer
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
				return i
			})), n.d(t, "p", (function() {
				return o
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "j", (function() {
				return g
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = n.n(s);
			const i = a.a.section("FormPage", r.a),
				o = a.a.h1("HomePageTitle", r.a),
				l = a.a.button("HomePageBreadcrumb", r.a),
				c = a.a.div("HomePageGroup", r.a),
				d = a.a.h1("FormPageTitle", r.a),
				m = a.a.div("FormPageSection", r.a),
				u = a.a.div("FormGroup", r.a),
				p = a.a.h2("FormGroupTitle", r.a),
				h = a.a.div("FormElement", r.a),
				x = a.a.div("FormGroupDescription", r.a),
				b = a.a.div("FormItem", r.a),
				C = a.a.h3("FormElementTitle", r.a),
				v = a.a.div("FormElementDescription", r.a),
				f = a.a.div("FormElementError", r.a),
				E = a.a.div("FormElementSubGroup", r.a),
				g = a.a.li("FormListItem", r.a)
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
				return m
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "g", (function() {
				return f
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				r = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				o = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(c);
			const m = a.a.wrapped(s.a, "ModalInput", d.a),
				u = a.a.input("Input", d.a),
				p = a.a.wrapped(l.a, "RadioOn", d.a),
				h = a.a.wrapped(o.a, "RadioOff", d.a),
				x = a.a.wrapped(r.a, "Checkbox", d.a),
				b = a.a.wrapped(i.a, "CheckboxSelected", d.a),
				C = a.a.textarea("Textarea", d.a),
				v = a.a.label("StyledLabel", d.a),
				f = a.a.input("StyledFileInput", d.a)
		},
		"./src/reddit/components/SubredditCreationModal/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				Content: "gGAX8JwsFcDSDsT5KcKrL",
				content: "gGAX8JwsFcDSDsT5KcKrL",
				Container: "_1J0hJj-EXr49KppYTmtS9S",
				container: "_1J0hJj-EXr49KppYTmtS9S",
				ContainerExp: "_3Cb_x0VK1tr3QTaBDGU_-K",
				containerExp: "_3Cb_x0VK1tr3QTaBDGU_-K",
				OuterContainer: "_1wLNhgzYyv0-JBg0BfYf3Y",
				outerContainer: "_1wLNhgzYyv0-JBg0BfYf3Y"
			}
		},
		"./src/reddit/components/SubredditCreationModal/index.m.less": function(e, t, n) {
			e.exports = {
				sublabel: "_1l4AkEjhz6oh1lmsJv-6Oo",
				subtitle: "SJ8r-Lx8GZVAGXaT954wj",
				radioDescription: "_1FBE2BnOrrXe8bCr6ZLfGq",
				buttonContainer: "pllx1jz7x_s-pSUC5f15v",
				field: "_2m493sVo9iDo-3EBxQrAJc",
				isCreatePending: "_39K9U8eGRvjiN3lSUWfoXF",
				subredditCreation: "_3O95baBiXBhn2SNtTQXPun",
				container: "o5ISTIh6L_lvDC1gObc76",
				title: "_2d-OkUXQj6P8CRIrcoi1i9",
				nsfw: "_3bx-zSg4-Vgfi3x1IUw6QP",
				createButton: "_2shIfL3K7ivaojvZFjvI-Z",
				pendingText: "A8PHuGr_4pbV_7t_GaokO",
				metaFieldDescription: "HsJgPFCmZ8OKgFe3tYiOB",
				numCommunityTopicsSelected: "_3-RTBwxKbhnYzfNZydOubp",
				subtextContainer: "_1V3LfcGf8bnGW9vw7JkOOs",
				radioContainer: "_247NCf2PSxl4rhmx2dDhDC",
				radioContent: "_2QiRZZs4K5lTjMTuSaMgDC",
				textButton: "c6YtB-MsWwD2pwSxCRQWE",
				fullWidthTextContainer: "_39cm2YKltxh0YW0O1f54y3",
				Info: "_16_IgJ4BqtadthCKIpnW1g",
				info: "_16_IgJ4BqtadthCKIpnW1g",
				RadioOption: "_12umGu0WfWJw9rxGq4ykrZ",
				radioOption: "_12umGu0WfWJw9rxGq4ykrZ",
				StyledTooltip: "j2Jvuy8Yu-jexJED1Ap51",
				styledTooltip: "j2Jvuy8Yu-jexJED1Ap51",
				RadioIcon: "_1g89RGQdzecmnfVeXck6JL",
				radioIcon: "_1g89RGQdzecmnfVeXck6JL",
				Employee: "_2gDVAtwwxskByrxI2Zr9BL",
				employee: "_2gDVAtwwxskByrxI2Zr9BL",
				Private: "_1Ma7YYe0ShiEmNSS16r18H",
				private: "_1Ma7YYe0ShiEmNSS16r18H",
				Public: "_3WyydSidemq34inFmhA1SE",
				public: "_3WyydSidemq34inFmhA1SE",
				Restricted: "CodbGPlWjCpPE6jWVhkOn",
				restricted: "CodbGPlWjCpPE6jWVhkOn",
				CloseButton: "_1P7Eow5rs9Xxm1uqMMEr2h",
				closeButton: "_1P7Eow5rs9Xxm1uqMMEr2h",
				ErrorText: "_2dXAoHGf_uRg0D6ofrpJbr",
				errorText: "_2dXAoHGf_uRg0D6ofrpJbr"
			}
		},
		"./src/reddit/components/SubredditCreationModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "radioOptions", (function() {
				return oe
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditCreation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				h = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				x = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				b = n("./src/reddit/contexts/NavbarExp.ts"),
				C = n("./src/reddit/components/SubredditCreationModal/Layout/index.m.less"),
				v = n.n(C);
			var f = e => {
					const t = Object(s.useContext)(b.a);
					return r.a.createElement("div", {
						className: v.a.OuterContainer
					}, r.a.createElement("div", {
						className: Object(c.a)(e.className, v.a.Container)
					}, r.a.createElement("div", {
						className: Object(c.a)(v.a.Content, {
							[v.a.ContainerExp]: t
						})
					}, e.children)))
				},
				E = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/constants/modals.ts"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				N = n("./src/reddit/controls/ErrorText/index.tsx"),
				y = n("./src/reddit/controls/RadioInput/index.tsx"),
				k = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				O = n("./src/reddit/controls/TextButton/index.tsx"),
				S = n("./src/reddit/helpers/trackers/emailInvite.ts"),
				T = n("./src/reddit/helpers/trackers/screenview.ts"),
				j = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				I = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				M = n("./src/reddit/icons/svgs/Close/index.tsx"),
				R = n("./src/reddit/icons/svgs/Eye/index.tsx"),
				D = n("./src/reddit/icons/svgs/Info/index.tsx"),
				B = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				L = n("./src/reddit/icons/svgs/User/index.tsx"),
				F = n("./src/reddit/models/Subreddit/index.ts"),
				P = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				A = n("./src/reddit/selectors/experiments/emailInvite.ts"),
				W = n("./src/reddit/selectors/subreddit.ts"),
				G = n("./src/reddit/selectors/tags.ts"),
				H = n("./src/reddit/selectors/user.ts"),
				V = n("./src/lib/formatApiError/index.ts");
			const Y = (e, t) => {
				if (!e) return {};
				const n = e.fields && e.fields.length && e.fields[0] && e.fields[0].field,
					s = e.type;
				if ("name" === n) {
					if ("NO_TEXT" === s) return {
						name: a.fbt._("A community name is required", null, {
							hk: "QIlYS"
						})
					};
					if ("BAD_SR_NAME" === s) return {
						name: a.fbt._("Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.", null, {
							hk: "2rmVgd"
						})
					};
					if ("SUBREDDIT_EXISTS" === s) return {
						name: a.fbt._("Sorry, r/{subreddit name attempt} is taken. Try another.", [a.fbt._param("subreddit name attempt", t)], {
							hk: "CLwzs"
						})
					};
					if ("SUBREDDIT_UNAVAILABLE" === s) return {
						name: a.fbt._("This community name is unavailable", null, {
							hk: "15j6BB"
						})
					}
				}
				return {
					generic: Object(V.a)(e)
				}
			};
			var J = n("./src/reddit/components/SubredditCreationModal/index.m.less"),
				K = n.n(J),
				Q = n("./src/lib/lessComponent.tsx");
			const z = 21,
				X = "create-title-info",
				q = Q.a.wrapped(D.a, "Info", K.a),
				Z = Q.a.wrapped(k.a, "RadioOption", K.a),
				U = Q.a.wrapped(h.c, "Tooltip", K.a),
				$ = Q.a.wrapped(L.a, "Public", K.a),
				ee = Q.a.wrapped(R.a, "Restricted", K.a),
				te = Q.a.wrapped(B.a, "Private", K.a),
				ne = Q.a.wrapped(I.a, "Employee", K.a),
				ae = Q.a.wrapped(M.a, "CloseButton", K.a),
				se = Q.a.wrapped(N.b, "ErrorText", K.a),
				re = Object(o.c)({
					error: W.f,
					isCreatePending: W.j,
					isEmailInviteExperimentEnabled: A.a,
					isEmployee: H.H,
					crosspostId: W.i,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(H.ib)(e),
					userIsSuspended: H.R,
					allTags: G.e,
					existingTags: G.f,
					newTags: G.g,
					selectedPrimaryTagId: G.h
				}),
				ie = Object(i.b)(re, e => ({
					createCommunity: t => e(Object(m.h)(t)),
					clearErrors: () => e(Object(m.f)()),
					onCloseModal: () => e(Object(d.g)(g.a.SUBREDDIT_CREATION_MODAL_ID)),
					onShowTooltip: () => e(Object(u.f)({
						tooltipId: X
					})),
					onHideTooltip: () => e(Object(u.i)()),
					validateSubredditName: t => e(Object(m.i)(t))
				})),
				oe = (e, t) => [r.a.createElement(Z, {
					key: "public",
					showButton: !0,
					value: "public"
				}, r.a.createElement("div", {
					className: K.a.radioContent
				}, r.a.createElement("div", null, r.a.createElement($, null)), r.a.createElement("div", {
					className: K.a.radioContainer
				}, r.a.createElement("div", {
					className: K.a.sublabel
				}, a.fbt._("Public", null, {
					hk: "DK992"
				})), r.a.createElement("div", {
					className: Object(c.a)(K.a.metafieldDescription, K.a.radioDescription)
				}, a.fbt._("Anyone can view, post, and comment to this community", null, {
					hk: "1PfFUA"
				}))))), r.a.createElement(Z, {
					key: "restricted",
					showButton: !0,
					value: "restricted"
				}, r.a.createElement("div", {
					className: K.a.radioContent
				}, r.a.createElement("div", null, r.a.createElement(ee, null)), r.a.createElement("div", {
					className: K.a.radioContainer
				}, r.a.createElement("div", {
					className: K.a.sublabel
				}, a.fbt._("Restricted", null, {
					hk: "1iBTDq"
				})), r.a.createElement("div", {
					className: Object(c.a)(K.a.metafieldDescription, K.a.radioDescription)
				}, Object(P.g)(t))))), r.a.createElement(Z, {
					key: "private",
					showButton: !0,
					value: "private"
				}, r.a.createElement("div", {
					className: K.a.radioContent
				}, r.a.createElement("div", null, r.a.createElement(te, null)), r.a.createElement("div", {
					className: K.a.radioContainer
				}, r.a.createElement("div", {
					className: K.a.sublabel
				}, a.fbt._("Private", null, {
					hk: "3q5SYn"
				})), r.a.createElement("div", {
					className: Object(c.a)(K.a.metafieldDescription, K.a.radioDescription)
				}, a.fbt._("Only approved users can view and submit to this community", null, {
					hk: "3z8OI6"
				}))))), r.a.createElement(Z, {
					key: "employees_only",
					showButton: !0,
					value: "employees_only",
					hidden: !e
				}, r.a.createElement("div", {
					className: K.a.radioContent
				}, r.a.createElement("div", null, r.a.createElement(ne, null)), r.a.createElement("div", {
					className: K.a.radioContainer
				}, r.a.createElement("div", {
					className: K.a.sublabel
				}, a.fbt._("Employees only", null, {
					hk: "1arrQC"
				})), r.a.createElement("div", {
					className: Object(c.a)(K.a.metafieldDescription, K.a.radioDescription)
				}, a.fbt._("Only Reddit employees can view and submit to this community", null, {
					hk: "3ty23C"
				})))))];
			class le extends r.a.Component {
				constructor(e) {
					super(e), this.onNameChange = e => {
						this.setState({
							name: e.target.value
						}), this.props.clearErrors()
					}, this.update = (e, t) => this.setState({
						[t]: e
					}), this.onTypeChange = e => {
						this.setState({
							type: e
						})
					}, this.onInviteViaEmailClick = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(S.a)("community_creation")), this.setState({
							showEmailInviteModal: !0
						})
					}, this.onCloseInviteViaEmailModal = () => {
						this.setState({
							showEmailInviteModal: !1
						})
					}, this.onCreateCommunityClick = () => {
						this.props.isCreatePending || (clearTimeout(this.timeout), this.props.createCommunity({
							name: this.state.name,
							publicDescription: "",
							type: this.state.type,
							over18: this.state.over18,
							restrictCommenting: this.state.restrictCommenting,
							restrictPosting: this.state.restrictPosting,
							allTags: this.props.allTags,
							newTags: this.props.newTags,
							crosspostId: this.state.crosspostId,
							existingTags: this.props.existingTags,
							primaryTagId: this.props.selectedPrimaryTagId || void 0
						}), this.timeout = window.setTimeout(() => {
							this.props.isCreatePending && this.setState({
								waitingForSuccessfulCommunity: !0
							})
						}, 2e3))
					}, this.onValidateSubredditName = () => this.props.validateSubredditName(this.state.name), this.onCloseModal = () => {
						this.props.sendEvent(Object(j.b)()), this.props.onCloseModal()
					}, this.onCancelCreation = () => {
						this.props.onCloseModal(), this.props.sendEvent(Object(j.b)())
					}, this.onUpdateOver18 = () => this.update(!this.state.over18, "over18"), this.state = {
						name: "",
						type: F.f.Public,
						crosspostId: e.crosspostId,
						over18: !1,
						waitingForSuccessfulCommunity: !1,
						restrictCommenting: !1,
						restrictPosting: !0,
						showEmailInviteModal: !1
					}
				}
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(T.w)())
				}
				componentWillUnmount() {
					clearTimeout(this.timeout), this.props.clearErrors()
				}
				render() {
					const {
						error: e,
						isCreatePending: t,
						isEmailInviteExperimentEnabled: n,
						isEmployee: s,
						onHideTooltip: i,
						onShowTooltip: o,
						sendEvent: l,
						userDoesNotHaveEnoughExpToCreateCommunity: d,
						userIsSuspended: m
					} = this.props, u = Y(e, this.state.name), {
						over18: h,
						showEmailInviteModal: b,
						waitingForSuccessfulCommunity: C
					} = this.state;
					return r.a.createElement(f, {
						className: K.a.subredditCreation
					}, r.a.createElement("div", {
						className: K.a.container
					}, r.a.createElement("h1", {
						className: K.a.title
					}, a.fbt._("Create a community", null, {
						hk: "SlFa7"
					}), r.a.createElement(ae, {
						onClick: this.onCloseModal
					})), d ? r.a.createElement("h2", {
						className: K.a.sublabel
					}, a.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "44qhJp"
					})) : m ? r.a.createElement("h2", {
						className: K.a.sublabel
					}, a.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "3trJMZ"
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(x.e, {
						isCreateCommunity: !0,
						label: a.fbt._("Name", null, {
							hk: "3OIzgl"
						}),
						textContainerClassName: K.a.fullWidthTextContainer,
						onBlur: this.onValidateSubredditName,
						onChange: this.onNameChange,
						maxChars: z,
						value: this.state.name,
						subtext: r.a.createElement("span", {
							className: K.a.subtextContainer
						}, a.fbt._("Community names including capitalization cannot be changed.", null, {
							hk: "VjrZg"
						}), r.a.createElement("span", {
							id: X,
							onMouseEnter: o,
							onMouseLeave: i,
							className: K.a.info
						}, r.a.createElement(q, null), r.a.createElement(U, {
							className: K.a.StyledTooltip,
							caretOnTop: !0,
							tooltipId: X,
							text: a.fbt._('Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").', null, {
								hk: "3RsycS"
							})
						})))
					}), u.name && r.a.createElement(se, null, u.name), r.a.createElement(x.l, {
						label: a.fbt._("Community type", null, {
							hk: "152EhZ"
						}),
						direction: "column",
						isCreateCommunity: !0,
						textContainerClassName: K.a.fullWidthTextContainer
					}, r.a.createElement(y.a, {
						value: this.state.type,
						name: "type",
						onChange: this.onTypeChange
					}, oe(s, "post"))), r.a.createElement("div", {
						className: Object(c.a)(K.a.field, {
							[K.a.isCreatePending]: t
						})
					}, r.a.createElement("div", {
						className: K.a.subtitle
					}, a.fbt._("Adult content", null, {
						hk: "20arB"
					})), r.a.createElement(w.a, {
						name: "over18",
						value: h,
						onChange: this.onUpdateOver18,
						disabled: t
					}, r.a.createElement("div", {
						className: K.a.nsfw
					}, "NSFW"), r.a.createElement("div", {
						className: K.a.sublabel
					}, a.fbt._("18+ year old community", null, {
						hk: "1XxZMV"
					})))), n && r.a.createElement("div", {
						className: Object(c.a)(K.a.field, {
							[K.a.isCreatePending]: t
						})
					}, r.a.createElement(O.a, {
						className: K.a.textButton,
						onClick: this.onInviteViaEmailClick
					}, a.fbt._("Invite members via email", null, {
						hk: "2uViIf"
					}))), u.generic && r.a.createElement(se, null, u.generic), C && r.a.createElement("div", {
						className: K.a.pendingText
					}, a.fbt._("Your community is being created...", null, {
						hk: "3dSTrq"
					})), r.a.createElement("div", {
						className: K.a.buttonContainer
					}, r.a.createElement(_.t, {
						disabled: t,
						className: K.a.createButton,
						onClick: this.onCancelCreation,
						priority: _.c.Secondary
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(_.t, {
						disabled: t,
						className: K.a.createButton,
						onClick: this.onCreateCommunityClick
					}, a.fbt._("Create Community", null, {
						hk: "QE8Y3"
					}))))), b && r.a.createElement(p.a, {
						onClose: this.onCloseInviteViaEmailModal,
						sendEvent: l
					}))
				}
			}
			t.default = Object(l.a)(Object(E.c)(ie(le)))
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, n) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				d = n.n(c);
			t.a = e => s.a.createElement(l.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(r.a)(e.className, d.a.checkboxInput, e.disabled ? d.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, s.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? s.a.createElement(o.a, {
				className: d.a.checkboxSelected
			}) : s.a.createElement(i.a, null), e.children)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var a = n("./node_modules/lodash/throttle.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(u),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				x = n.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			class C extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = s()(() => {
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
					}, n = Object(o.a)(x.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(l.a, b({}, t, {
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
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(o.a)(x.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, b({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(o.a)(x.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(d.a, {
						className: x.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(o.a)(x.a.row, e, {
					[x.a.mIsInteractive]: !t.noHover,
					[x.a.mIsSelected]: t.isSelected,
					[x.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(C, b({
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
				return E
			})), n.d(t, "c", (function() {
				return g
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(s),
				i = n("./node_modules/raf/index.js"),
				o = n.n(i),
				l = n("./node_modules/react/index.js"),
				c = n.n(l),
				d = n("./src/lib/classNames/index.ts"),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = n.n(h);
			var b = Object(m.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return c.a.createElement("div", {
						className: x.a.wrapper
					}, c.a.createElement(p.a, {
						className: x.a.titleRow
					}, n), c.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), c.a.createElement(p.a, {
						className: x.a.buttonRow
					}, c.a.createElement(u.l, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, a.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				C = n("./src/reddit/controls/ErrorText/index.m.less"),
				v = n.n(C);
			class f extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`,
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
					o()(() => {
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
						errorModalTitle: s = a.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = a.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: i,
						isModalOpen: o
					} = this.state;
					return c.a.createElement("div", {
						className: Object(d.a)(v.a.wrapper, t)
					}, c.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), i && c.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, r), o && c.a.createElement(b, {
						onConfirmed: this.toggleModal,
						title: s
					}, n || e))
				}
			}
			const E = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: a,
						fallbackMessage: s,
						messages: r = []
					} = e, i = r.length ? r : s ? [s] : [];
					return i.length ? c.a.createElement("div", {
						className: t
					}, i.map((e, t) => c.a.createElement(f, {
						className: n,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				g = e => c.a.createElement(E, {
					fallbackMessage: a.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = f
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
				return x
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/ErrorText/index.tsx"),
				l = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				m = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const p = i.a.input("input", m.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				x = e => {
					const {
						label: t,
						children: n,
						inputRef: a,
						className: i,
						...o
					} = e, l = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(m.a.inputWrapper, i, {
							[m.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, s.a.createElement(p, u({
						"aria-invalid": e.isInvalid,
						innerRef: a
					}, o)), e.label && s.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: a,
						isInvalid: i,
						className: o,
						redditStyle: l,
						...c
					} = e, d = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(m.a.inputMovingLabelWrapper, o, {
							[m.a.mIsInvalid]: i,
							[m.a.mIsRedditStyle]: l
						}),
						onClick: h
					}, s.a.createElement(p, u({
						innerRef: a
					}, c)), e.label && s.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				C = e => s.a.createElement("div", {
					className: Object(r.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(l.a, {
					className: m.a.plus
				}));
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class f extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: v.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
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
						errors: r = []
					} = this.props;
					return e.map((e, i) => s.a.createElement(x, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!r[i],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, i),
						placeholder: a,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, s.a.createElement(c.b, {
						className: m.a.trash
					})), !!r[i] && s.a.createElement(o.b, {
						className: m.a.errorText
					}, r[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: a,
						addValueText: i,
						disabled: o
					} = this.props;
					this.focusedInput = null;
					const l = !(!!a && n.length >= a) && !o;
					return s.a.createElement("div", {
						className: Object(r.a)(m.a.multiInputWrapper, e)
					}, t && l && s.a.createElement(C, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && l && s.a.createElement(C, {
						onClick: this.addValue,
						text: i
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
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(r);
			t.a = a.a.wrapped(s.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/helpers/trackers/emailInvite.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					source: e,
					action: "click",
					noun: "invite_via_email",
					...s.o(t),
					subreddit: s.hb(t),
					actionInfo: s.d(t),
					correlationId: Object(a.e)(a.a.SubredditCreation, !1)
				}),
				i = () => e => ({
					source: "email_invite_painted_door",
					action: "view",
					noun: "modal",
					...s.o(e),
					subreddit: s.hb(e),
					actionInfo: s.d(e),
					correlationId: Object(a.c)(a.a.SubredditCreation)
				}),
				o = e => t => ({
					source: "email_invite_painted_door",
					action: "click",
					noun: e,
					...s.o(t),
					subreddit: s.hb(t),
					actionInfo: s.d(t),
					correlationId: Object(a.c)(a.a.SubredditCreation)
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				o = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(e.className, o.a.admin, {
					[o.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
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
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				o = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(o.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, s.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, s.a.createElement("circle", {
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
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				o = n.n(i);

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
			}) => s.a.createElement("svg", l({
				className: Object(r.a)(o.a.dropdown, {
					[o.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), s.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
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
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				o = n.n(i);
			const l = e => s.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/selectors/experiments/emailInvite.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: a.Rc
				});
				return !(!t || Object(a.hf)(t))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditCreation.6688ef63de29f58288ee.js.map