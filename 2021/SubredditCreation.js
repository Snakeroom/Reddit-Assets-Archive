// https://www.redditstatic.com/desktop2x/SubredditCreation.d347a5859ca2719dfa1d.js
// Retrieved at 11/8/2021, 10:50:15 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditCreation"], {
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
		"./src/reddit/components/EmailInvitePaintedDoor/loader.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(a.a)({
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
			t.a = r
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
				return V
			})), n.d(t, "k", (function() {
				return X
			})), n.d(t, "o", (function() {
				return U
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
				return be
			})), n.d(t, "a", (function() {
				return xe
			})), n.d(t, "d", (function() {
				return fe
			})), n.d(t, "i", (function() {
				return Ee
			})), n.d(t, "c", (function() {
				return ve
			})), n.d(t, "e", (function() {
				return _e
			})), n.d(t, "h", (function() {
				return ge
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
				m = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				h = n("./src/reddit/controls/Dropdown/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/controls/FormFields/index.tsx"),
				C = n("./src/lib/lessComponent.tsx"),
				f = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = n("./src/reddit/controls/Select/index.m.less"),
				v = n.n(E);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const g = C.a.span("Wrapper", v.a),
				y = C.a.select("Inner", v.a),
				k = C.a.wrapped(f.b, "Caret", v.a);

			function N({
				className: e,
				innerClassName: t,
				...n
			}) {
				const a = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return r.a.createElement(g, {
					className: e
				}, r.a.createElement(y, _({
					className: t
				}, n)), r.a.createElement(k, _({
					isSubreddit: !0
				}, a)))
			}
			var w = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				S = n("./src/reddit/controls/Typography/index.tsx"),
				O = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				T = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				j = n("./node_modules/lodash/range.js"),
				D = n.n(j),
				R = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/layout/row/Inline/index.tsx"),
				B = n("./src/reddit/models/Flair/index.ts"),
				F = n("./src/reddit/selectors/tooltip.ts"),
				L = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				W = n.n(P);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const G = Object(d.a)(h.a),
				H = C.a.wrapped(I.a, "Circle", W.a),
				J = C.a.h3("Label", W.a),
				V = C.a.wrapped(S.c, "Subtext", W.a),
				Y = C.a.wrapped(u.a, "HoverTooltip", W.a),
				Q = C.a.div("ControlContainer", W.a),
				K = C.a.div("TextContainer", W.a),
				z = C.a.div("ActionContainer", W.a),
				X = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: a,
					isNightModeOn: s,
					disabled: o,
					indent: i,
					last: c,
					...d
				}) => r.a.createElement("div", A({}, d, {
					className: Object(l.a)(W.a.Wrapper, e, {
						[W.a.mColumn]: "column" === t,
						[W.a.mDisabled]: !!o,
						[W.a.mIndent]: !!i,
						[W.a.mLast]: !!c,
						[W.a.isCreateCommunity]: !!n,
						[W.a.inModal]: !!a,
						[W.a.isNightModeOn]: !!s
					})
				})),
				q = C.a.a("Link", W.a),
				U = C.a.wrapped(q, "SubtextLink", W.a),
				Z = C.a.wrapped(T.a, "LinkIcon", W.a),
				$ = C.a.button("LinkButton", W.a),
				ee = C.a.wrapped(O.a, "ArrowRight", W.a),
				te = e => r.a.createElement(X, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, r.a.createElement(K, {
					className: e.textContainerClassName
				}, r.a.createElement(J, null, e.label, e.isRequired && r.a.createElement(H, null)), r.a.createElement(V, null, e.subtext)), r.a.createElement(z, null, e.children)),
				ne = C.a.div("StyledFlair", W.a),
				ae = C.a.wrapped(ne, "SpoilerFlair", W.a),
				re = C.a.wrapped(ne, "NSFWFlair", W.a),
				se = e => {
					switch (e.flair) {
						case B.f.Nsfw:
							return r.a.createElement(re, null, "NSFW");
						case B.f.Spoiler:
							return r.a.createElement(ae, null, "SPOILER");
						default:
							return null
					}
				},
				oe = e => {
					const t = Object(o.a)();
					return r.a.createElement(X, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, r.a.createElement(K, null, r.a.createElement(M.a, null, r.a.createElement("label", {
						htmlFor: t
					}, r.a.createElement(J, null, e.label))), r.a.createElement(V, null, e.subtext)), r.a.createElement(z, null, r.a.createElement(Q, null, e.tooltip && r.a.createElement(Y, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), r.a.createElement(w.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				ie = C.a.input("RangeSliderInput", W.a),
				le = C.a.div("RangeSlider", W.a),
				ce = C.a.div("Ticks", W.a),
				de = C.a.div("TickText", W.a),
				me = C.a.div("PreSubText", W.a),
				ue = Object(i.c)({
					isNightModeOn: L.X
				}),
				pe = Object(s.b)(ue)(e => r.a.createElement(X, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction,
					className: e.className
				}, r.a.createElement(K, {
					style: {
						flex: 5
					}
				}, !e.inModal && r.a.createElement(M.a, null, r.a.createElement(J, null, e.label)), !e.hideSubtext && r.a.createElement(V, null, " ", r.a.createElement(me, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), r.a.createElement(z, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, r.a.createElement(le, null, r.a.createElement(ie, {
					style: {
						background: "linear-gradient(to right, " + D()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
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
				he = e => r.a.createElement(X, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(K, null, r.a.createElement(M.a, null, r.a.createElement(J, null, e.label)), r.a.createElement(V, null, e.subtext)), r.a.createElement(z, null, r.a.createElement(Q, null, r.a.createElement(R.o, {
					onClick: e.onClick
				}, e.actionText)))),
				be = e => r.a.createElement(X, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(K, null, r.a.createElement(q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, r.a.createElement(Z, null)), r.a.createElement(V, null, e.subtext)), r.a.createElement(z, null, r.a.createElement(q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, r.a.createElement(ee, null)))),
				xe = e => r.a.createElement(X, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(K, null, r.a.createElement($, {
					onClick: e.onClick,
					className: Object(l.a)({
						[W.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), r.a.createElement(V, null, e.subtext)), r.a.createElement(z, null, !!e.hintText && r.a.createElement("div", {
					className: W.a.ActionHintText
				}, e.hintText), r.a.createElement($, {
					onClick: e.onClick,
					className: Object(l.a)({
						[W.a.NoColor]: e.color && "none" === e.color
					})
				}, r.a.createElement(ee, {
					className: Object(l.a)({
						[W.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				Ce = Object(i.c)({
					isOpen: (e, t) => Object(F.b)(t.id)(e)
				}),
				fe = Object(s.b)(Ce, (e, t) => ({
					openDropdown: () => {
						e(Object(c.h)({
							tooltipId: t.id
						}))
					}
				}))(e => r.a.createElement(X, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(K, null, r.a.createElement(J, null, e.label), r.a.createElement(V, null, e.subtext)), r.a.createElement(z, null, (e => r.a.createElement("div", {
					className: W.a.DropdownWrapper,
					onClick: e.openDropdown
				}, r.a.createElement("span", {
					className: W.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), r.a.createElement(f.b, {
					className: W.a.DropdownTriangle
				}), r.a.createElement(G, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => r.a.createElement(b.b, {
					className: W.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && r.a.createElement("div", {
					className: W.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				Ee = ({
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
					return r.a.createElement(X, {
						disabled: e
					}, r.a.createElement(K, null, r.a.createElement("label", {
						htmlFor: o.id
					}, r.a.createElement(J, {
						className: o.labelClassname
					}, o.label)), r.a.createElement(V, null, o.subtext)), r.a.createElement("div", {
						className: W.a.Wrapper__LineBreak
					}), r.a.createElement(X, {
						last: t,
						indent: !0,
						disabled: e
					}, r.a.createElement(N, {
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
				ve = e => r.a.createElement(X, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(K, null, r.a.createElement(J, null, e.label), r.a.createElement(V, null, e.subtext)), r.a.createElement(z, null, e.children)),
				_e = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && r.a.createElement("span", {
					className: W.a.tag
				}, "r/"), r.a.createElement(x.a, {
					className: e.isCreateCommunity ? W.a.input : void 0,
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && r.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				ge = e => r.a.createElement(te, {
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
					className: W.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && r.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && r.a.createElement("div", {
					className: W.a.ActionLinkContainer
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
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return _
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(r);
			const o = a.a.section("FormPage", s.a),
				i = a.a.h1("HomePageTitle", s.a),
				l = a.a.button("HomePageBreadcrumb", s.a),
				c = a.a.div("HomePageGroup", s.a),
				d = a.a.h1("FormPageTitle", s.a),
				m = a.a.div("FormPageSection", s.a),
				u = a.a.div("FormGroup", s.a),
				p = a.a.h2("FormGroupTitle", s.a),
				h = a.a.div("FormElement", s.a),
				b = a.a.div("FormGroupDescription", s.a),
				x = a.a.div("FormItem", s.a),
				C = a.a.h3("FormElementTitle", s.a),
				f = a.a.div("FormElementDescription", s.a),
				E = a.a.div("FormElementError", s.a),
				v = a.a.div("FormElementSubGroup", s.a),
				_ = a.a.li("FormListItem", s.a)
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
				return b
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return E
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				s = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(c);
			const m = a.a.wrapped(r.a, "ModalInput", d.a),
				u = a.a.input("Input", d.a),
				p = a.a.wrapped(l.a, "RadioOn", d.a),
				h = a.a.wrapped(i.a, "RadioOff", d.a),
				b = a.a.wrapped(s.a, "Checkbox", d.a),
				x = a.a.wrapped(o.a, "CheckboxSelected", d.a),
				C = a.a.textarea("Textarea", d.a),
				f = a.a.label("StyledLabel", d.a),
				E = a.a.input("StyledFileInput", d.a)
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
				return ie
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditCreation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				h = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				x = n("./src/reddit/contexts/NavbarExp.ts"),
				C = n("./src/reddit/components/SubredditCreationModal/Layout/index.m.less"),
				f = n.n(C);
			var E = e => {
					const t = Object(r.useContext)(x.a);
					return s.a.createElement("div", {
						className: f.a.OuterContainer
					}, s.a.createElement("div", {
						className: Object(c.a)(e.className, f.a.Container)
					}, s.a.createElement("div", {
						className: Object(c.a)(f.a.Content, {
							[f.a.ContainerExp]: t
						})
					}, e.children)))
				},
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/constants/modals.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				k = n("./src/reddit/controls/ErrorText/index.tsx"),
				N = n("./src/reddit/controls/RadioInput/index.tsx"),
				w = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				S = n("./src/reddit/controls/TextButton/index.tsx"),
				O = n("./src/reddit/helpers/trackers/emailInvite.ts"),
				I = n("./src/reddit/helpers/trackers/screenview.ts"),
				T = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				j = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				D = n("./src/reddit/icons/svgs/Close/index.tsx"),
				R = n("./src/reddit/icons/svgs/Eye/index.tsx"),
				M = n("./src/reddit/icons/svgs/Info/index.tsx"),
				B = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				F = n("./src/reddit/icons/svgs/User/index.tsx"),
				L = n("./src/reddit/models/Subreddit/index.ts"),
				P = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				W = n("./src/reddit/selectors/experiments/emailInvite.ts"),
				A = n("./src/reddit/selectors/subreddit.ts"),
				G = n("./src/reddit/selectors/tags.ts"),
				H = n("./src/reddit/selectors/user.ts"),
				J = n("./src/lib/formatApiError/index.ts");
			const V = (e, t) => {
				if (!e) return {};
				const n = e.fields && e.fields.length && e.fields[0] && e.fields[0].field,
					r = e.type;
				if ("name" === n) {
					if ("NO_TEXT" === r) return {
						name: a.fbt._("A community name is required", null, {
							hk: "QIlYS"
						})
					};
					if ("BAD_SR_NAME" === r) return {
						name: a.fbt._("Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.", null, {
							hk: "2rmVgd"
						})
					};
					if ("SUBREDDIT_EXISTS" === r) return {
						name: a.fbt._("Sorry, r/{subreddit name attempt} is taken. Try another.", [a.fbt._param("subreddit name attempt", t)], {
							hk: "CLwzs"
						})
					};
					if ("SUBREDDIT_UNAVAILABLE" === r) return {
						name: a.fbt._("This community name is unavailable", null, {
							hk: "15j6BB"
						})
					}
				}
				return {
					generic: Object(J.a)(e)
				}
			};
			var Y = n("./src/reddit/components/SubredditCreationModal/index.m.less"),
				Q = n.n(Y),
				K = n("./src/lib/lessComponent.tsx");
			const z = 21,
				X = "create-title-info",
				q = K.a.wrapped(M.a, "Info", Q.a),
				U = K.a.wrapped(w.a, "RadioOption", Q.a),
				Z = K.a.wrapped(h.c, "Tooltip", Q.a),
				$ = K.a.wrapped(F.a, "Public", Q.a),
				ee = K.a.wrapped(R.a, "Restricted", Q.a),
				te = K.a.wrapped(B.a, "Private", Q.a),
				ne = K.a.wrapped(j.a, "Employee", Q.a),
				ae = K.a.wrapped(D.a, "CloseButton", Q.a),
				re = K.a.wrapped(k.b, "ErrorText", Q.a),
				se = Object(i.c)({
					error: A.g,
					isCreatePending: A.k,
					isEmailInviteExperimentEnabled: W.a,
					isEmployee: H.H,
					crosspostId: A.j,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(H.ib)(e),
					userIsSuspended: H.R,
					allTags: G.e,
					existingTags: G.f,
					newTags: G.g,
					selectedPrimaryTagId: G.h
				}),
				oe = Object(o.b)(se, e => ({
					createCommunity: t => e(Object(m.h)(t)),
					clearErrors: () => e(Object(m.f)()),
					onCloseModal: () => e(Object(d.g)(_.a.SUBREDDIT_CREATION_MODAL_ID)),
					onShowTooltip: () => e(Object(u.f)({
						tooltipId: X
					})),
					onHideTooltip: () => e(Object(u.i)()),
					validateSubredditName: t => e(Object(m.i)(t))
				})),
				ie = (e, t) => [s.a.createElement(U, {
					key: "public",
					showButton: !0,
					value: "public"
				}, s.a.createElement("div", {
					className: Q.a.radioContent
				}, s.a.createElement("div", null, s.a.createElement($, null)), s.a.createElement("div", {
					className: Q.a.radioContainer
				}, s.a.createElement("div", {
					className: Q.a.sublabel
				}, a.fbt._("Public", null, {
					hk: "DK992"
				})), s.a.createElement("div", {
					className: Object(c.a)(Q.a.metafieldDescription, Q.a.radioDescription)
				}, a.fbt._("Anyone can view, post, and comment to this community", null, {
					hk: "1PfFUA"
				}))))), s.a.createElement(U, {
					key: "restricted",
					showButton: !0,
					value: "restricted"
				}, s.a.createElement("div", {
					className: Q.a.radioContent
				}, s.a.createElement("div", null, s.a.createElement(ee, null)), s.a.createElement("div", {
					className: Q.a.radioContainer
				}, s.a.createElement("div", {
					className: Q.a.sublabel
				}, a.fbt._("Restricted", null, {
					hk: "1iBTDq"
				})), s.a.createElement("div", {
					className: Object(c.a)(Q.a.metafieldDescription, Q.a.radioDescription)
				}, Object(P.g)(t))))), s.a.createElement(U, {
					key: "private",
					showButton: !0,
					value: "private"
				}, s.a.createElement("div", {
					className: Q.a.radioContent
				}, s.a.createElement("div", null, s.a.createElement(te, null)), s.a.createElement("div", {
					className: Q.a.radioContainer
				}, s.a.createElement("div", {
					className: Q.a.sublabel
				}, a.fbt._("Private", null, {
					hk: "3q5SYn"
				})), s.a.createElement("div", {
					className: Object(c.a)(Q.a.metafieldDescription, Q.a.radioDescription)
				}, a.fbt._("Only approved users can view and submit to this community", null, {
					hk: "3z8OI6"
				}))))), s.a.createElement(U, {
					key: "employees_only",
					showButton: !0,
					value: "employees_only",
					hidden: !e
				}, s.a.createElement("div", {
					className: Q.a.radioContent
				}, s.a.createElement("div", null, s.a.createElement(ne, null)), s.a.createElement("div", {
					className: Q.a.radioContainer
				}, s.a.createElement("div", {
					className: Q.a.sublabel
				}, a.fbt._("Employees only", null, {
					hk: "1arrQC"
				})), s.a.createElement("div", {
					className: Object(c.a)(Q.a.metafieldDescription, Q.a.radioDescription)
				}, a.fbt._("Only Reddit employees can view and submit to this community", null, {
					hk: "3ty23C"
				})))))];
			class le extends s.a.Component {
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
						e(Object(O.a)("community_creation")), this.setState({
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
						this.props.sendEvent(Object(T.b)()), this.props.onCloseModal()
					}, this.onCancelCreation = () => {
						this.props.onCloseModal(), this.props.sendEvent(Object(T.b)())
					}, this.onUpdateOver18 = () => this.update(!this.state.over18, "over18"), this.state = {
						name: "",
						type: L.f.Public,
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
					e(Object(I.w)())
				}
				componentWillUnmount() {
					clearTimeout(this.timeout), this.props.clearErrors()
				}
				render() {
					const {
						error: e,
						isCreatePending: t,
						isEmailInviteExperimentEnabled: n,
						isEmployee: r,
						onHideTooltip: o,
						onShowTooltip: i,
						sendEvent: l,
						userDoesNotHaveEnoughExpToCreateCommunity: d,
						userIsSuspended: m
					} = this.props, u = V(e, this.state.name), {
						over18: h,
						showEmailInviteModal: x,
						waitingForSuccessfulCommunity: C
					} = this.state;
					return s.a.createElement(E, {
						className: Q.a.subredditCreation
					}, s.a.createElement("div", {
						className: Q.a.container
					}, s.a.createElement("h1", {
						className: Q.a.title
					}, a.fbt._("Create a community", null, {
						hk: "SlFa7"
					}), s.a.createElement(ae, {
						onClick: this.onCloseModal
					})), d ? s.a.createElement("h2", {
						className: Q.a.sublabel
					}, a.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "44qhJp"
					})) : m ? s.a.createElement("h2", {
						className: Q.a.sublabel
					}, a.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "3trJMZ"
					})) : s.a.createElement(s.a.Fragment, null, s.a.createElement(b.e, {
						isCreateCommunity: !0,
						label: a.fbt._("Name", null, {
							hk: "3OIzgl"
						}),
						textContainerClassName: Q.a.fullWidthTextContainer,
						onBlur: this.onValidateSubredditName,
						onChange: this.onNameChange,
						maxChars: z,
						value: this.state.name,
						subtext: s.a.createElement("span", {
							className: Q.a.subtextContainer
						}, a.fbt._("Community names including capitalization cannot be changed.", null, {
							hk: "VjrZg"
						}), s.a.createElement("span", {
							id: X,
							onMouseEnter: i,
							onMouseLeave: o,
							className: Q.a.info
						}, s.a.createElement(q, null), s.a.createElement(Z, {
							className: Q.a.StyledTooltip,
							caretOnTop: !0,
							tooltipId: X,
							text: a.fbt._('Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").', null, {
								hk: "3RsycS"
							})
						})))
					}), u.name && s.a.createElement(re, null, u.name), s.a.createElement(b.l, {
						label: a.fbt._("Community type", null, {
							hk: "152EhZ"
						}),
						direction: "column",
						isCreateCommunity: !0,
						textContainerClassName: Q.a.fullWidthTextContainer
					}, s.a.createElement(N.a, {
						value: this.state.type,
						name: "type",
						onChange: this.onTypeChange
					}, ie(r, "post"))), s.a.createElement("div", {
						className: Object(c.a)(Q.a.field, {
							[Q.a.isCreatePending]: t
						})
					}, s.a.createElement("div", {
						className: Q.a.subtitle
					}, a.fbt._("Adult content", null, {
						hk: "20arB"
					})), s.a.createElement(y.a, {
						name: "over18",
						value: h,
						onChange: this.onUpdateOver18,
						disabled: t
					}, s.a.createElement("div", {
						className: Q.a.nsfw
					}, "NSFW"), s.a.createElement("div", {
						className: Q.a.sublabel
					}, a.fbt._("18+ year old community", null, {
						hk: "1XxZMV"
					})))), n && s.a.createElement("div", {
						className: Object(c.a)(Q.a.field, {
							[Q.a.isCreatePending]: t
						})
					}, s.a.createElement(S.a, {
						className: Q.a.textButton,
						onClick: this.onInviteViaEmailClick
					}, a.fbt._("Invite members via email", null, {
						hk: "2uViIf"
					}))), u.generic && s.a.createElement(re, null, u.generic), C && s.a.createElement("div", {
						className: Q.a.pendingText
					}, a.fbt._("Your community is being created...", null, {
						hk: "3dSTrq"
					})), s.a.createElement("div", {
						className: Q.a.buttonContainer
					}, s.a.createElement(g.t, {
						disabled: t,
						className: Q.a.createButton,
						onClick: this.onCancelCreation,
						priority: g.c.Secondary
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(g.t, {
						disabled: t,
						className: Q.a.createButton,
						onClick: this.onCreateCommunityClick
					}, a.fbt._("Create Community", null, {
						hk: "QE8Y3"
					}))))), x && s.a.createElement(p.a, {
						onClose: this.onCloseInviteViaEmailModal,
						sendEvent: l
					}))
				}
			}
			t.default = Object(l.a)(Object(v.c)(oe(le)))
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
				r = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				d = n.n(c);
			t.a = e => r.a.createElement(l.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(s.a)(e.className, d.a.checkboxInput, e.disabled ? d.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, r.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? r.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : r.a.createElement(o.a, null), e.children)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var a = n("./node_modules/lodash/throttle.js"),
				r = n.n(a),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(u),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			class C extends o.a.Component {
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
					}, n = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(l.a, x({}, t, {
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
					}), e.children && o.a.createElement("span", {
						className: n
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(m.a, x({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(d.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(i.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return o.a.createElement(C, x({
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
				return v
			})), n.d(t, "c", (function() {
				return _
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				s = n.n(r),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				l = n("./node_modules/react/index.js"),
				c = n.n(l),
				d = n("./src/lib/classNames/index.ts"),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = n.n(h);
			var x = Object(m.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return c.a.createElement("div", {
						className: b.a.wrapper
					}, c.a.createElement(p.a, {
						className: b.a.titleRow
					}, n), c.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), c.a.createElement(p.a, {
						className: b.a.buttonRow
					}, c.a.createElement(u.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, a.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				C = n("./src/reddit/controls/ErrorText/index.m.less"),
				f = n.n(C);
			class E extends c.a.Component {
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
						className: Object(d.a)(f.a.wrapper, t)
					}, c.a.createElement("span", {
						className: f.a.description,
						ref: this.spanRef
					}, e), o && c.a.createElement("span", {
						className: f.a.moreText,
						onClick: this.toggleModal
					}, s), i && c.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: a,
						fallbackMessage: r,
						messages: s = []
					} = e, o = s.length ? s : r ? [r] : [];
					return o.length ? c.a.createElement("div", {
						className: t
					}, o.map((e, t) => c.a.createElement(E, {
						className: n,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				_ = e => c.a.createElement(v, {
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
				return b
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return E
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
			const p = o.a.input("input", m.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: a,
						className: o,
						...i
					} = e, l = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(s.a)(m.a.inputWrapper, o, {
							[m.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, r.a.createElement(p, u({
						"aria-invalid": e.isInvalid,
						innerRef: a
					}, i)), e.label && r.a.createElement("label", {
						className: Object(s.a)(m.a.label, {
							[m.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				x = e => {
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
						className: Object(s.a)(m.a.inputMovingLabelWrapper, i, {
							[m.a.mIsInvalid]: o,
							[m.a.mIsRedditStyle]: l
						}),
						onClick: h
					}, r.a.createElement(p, u({
						innerRef: a
					}, c)), e.label && r.a.createElement("label", {
						className: Object(s.a)(m.a.label, {
							[m.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				C = e => r.a.createElement("div", {
					className: Object(s.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(l.a, {
					className: m.a.plus
				}));
			var f;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(f || (f = {}));
			class E extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: f.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: f.REMOVE,
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
					return e.map((e, o) => r.a.createElement(b, {
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
						className: m.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, r.a.createElement(c.b, {
						className: m.a.trash
					})), !!s[o] && r.a.createElement(i.b, {
						className: m.a.errorText
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
						className: Object(s.a)(m.a.multiInputWrapper, e)
					}, t && l && r.a.createElement(C, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && l && r.a.createElement(C, {
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = n.n(s);
			t.a = a.a.wrapped(r.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/helpers/trackers/emailInvite.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					source: e,
					action: "click",
					noun: "invite_via_email",
					...r.defaults(t),
					subreddit: r.subreddit(t),
					actionInfo: r.actionInfo(t),
					correlationId: Object(a.d)(a.a.SubredditCreation, !1)
				}),
				o = () => e => ({
					source: "email_invite_painted_door",
					action: "view",
					noun: "modal",
					...r.defaults(e),
					subreddit: r.subreddit(e),
					actionInfo: r.actionInfo(e),
					correlationId: Object(a.c)(a.a.SubredditCreation)
				}),
				i = e => t => ({
					source: "email_invite_painted_door",
					action: "click",
					noun: e,
					...r.defaults(t),
					subreddit: r.subreddit(t),
					actionInfo: r.actionInfo(t),
					correlationId: Object(a.c)(a.a.SubredditCreation)
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/selectors/experiments/emailInvite.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: a.Jc
				});
				return !(!t || Object(a.df)(t))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditCreation.d347a5859ca2719dfa1d.js.map