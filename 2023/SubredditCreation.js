// https://www.redditstatic.com/desktop2x/SubredditCreation.cd9442b971988b1e99e8.js
// Retrieved at 5/23/2023, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditCreation"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var a = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, r, s) {
				for (var i = -1, o = n(a((t - e) / (r || 1)), 0), l = Array(o); o--;) l[s ? o : ++i] = e, e += r;
				return l
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_baseRange.js"),
				r = a("./node_modules/lodash/_isIterateeCall.js"),
				s = a("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, a, i) {
					return i && "number" != typeof i && r(t, a, i) && (a = i = void 0), t = s(t), void 0 === a ? (a = t, t = 0) : a = s(a), i = void 0 === i ? t < a ? 1 : -1 : s(i), n(t, a, i, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, a) {
			var n = a("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./node_modules/react-uid/dist/es2015/hooks.js": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return d
			}));
			var n = a("./node_modules/react/index.js"),
				r = function() {
					var e = 1,
						t = new WeakMap,
						a = function(n, r) {
							return "number" == typeof n || "string" == typeof n ? r ? "idx-" + r : "val-" + n : t.has(n) ? "uid" + t.get(n) : (t.set(n, e++), a(n))
						};
					return a
				},
				s = (r(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: r()
					}
				}),
				i = s(),
				o = n.createContext(s()),
				l = function() {
					return n.useState((e = n.useContext(o), {
						uid: a = function(e) {
							return e ? e.prefix : ""
						}(t = e || i) + function(e) {
							return e.value++
						}(t),
						gen: function(e) {
							return a + t.uid(e)
						}
					}));
					var e, t, a
				},
				c = function() {
					return l()[0].uid
				},
				d = function() {
					return l()[0].gen
				}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, a) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				o = a("./src/reddit/components/CharacterCountdown/index.m.less"),
				l = a.n(o);
			const {
				fbt: c
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(i.b, {
				className: Object(s.a)(e.className, l.a.container, e.text.length >= e.maxChars ? l.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, a) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/lessComponent.tsx"),
				o = a("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				l = a.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = i.a.wrapped(e => {
				const {
					children: t,
					className: a,
					renderBelow: n,
					text: i,
					tooltipContentClass: o,
					...d
				} = e;
				return r.a.createElement("div", c({}, d, {
					className: Object(s.a)(l.a.container, a)
				}), i ? r.a.createElement("div", {
					className: Object(s.a)(l.a.tooltip, o, n ? l.a.below : l.a.above)
				}, i) : null, t)
			}, "HoverTooltip", l.a)
		},
		"./src/reddit/components/Settings/shared/Widgets.m.less": function(e, t, a) {
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
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "o", (function() {
				return Y
			})), a.d(t, "l", (function() {
				return X
			})), a.d(t, "p", (function() {
				return Z
			})), a.d(t, "f", (function() {
				return $
			})), a.d(t, "m", (function() {
				return te
			})), a.d(t, "n", (function() {
				return se
			})), a.d(t, "q", (function() {
				return ie
			})), a.d(t, "k", (function() {
				return pe
			})), a.d(t, "b", (function() {
				return he
			})), a.d(t, "g", (function() {
				return xe
			})), a.d(t, "a", (function() {
				return be
			})), a.d(t, "d", (function() {
				return fe
			})), a.d(t, "i", (function() {
				return Ee
			})), a.d(t, "c", (function() {
				return ve
			})), a.d(t, "e", (function() {
				return ge
			})), a.d(t, "h", (function() {
				return _e
			})), a.d(t, "j", (function() {
				return Ne
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./node_modules/react-redux/es/index.js"),
				i = a("./node_modules/react-uid/dist/es2015/hooks.js"),
				o = a("./node_modules/reselect/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/actions/tooltip.ts"),
				d = a("./src/higherOrderComponents/asTooltip.tsx"),
				m = a("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = a("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = a("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				h = a("./src/reddit/controls/Dropdown/index.tsx"),
				x = a("./src/reddit/controls/Dropdown/Row.tsx"),
				b = a("./src/reddit/controls/FormFields/index.tsx"),
				C = a("./src/lib/lessComponent.tsx"),
				f = a("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = a("./src/reddit/controls/Select/index.m.less"),
				v = a.n(E);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = C.a.span("Wrapper", v.a),
				N = C.a.select("Inner", v.a),
				y = C.a.wrapped(f.b, "Caret", v.a);

			function w(e) {
				let {
					className: t,
					innerClassName: a,
					...n
				} = e;
				const s = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return r.a.createElement(_, {
					className: t
				}, r.a.createElement(N, g({
					className: a
				}, n)), r.a.createElement(y, g({
					isSubreddit: !0
				}, s)))
			}
			var k = a("./src/reddit/controls/ToggleSwitch/index.tsx"),
				S = a("./src/reddit/controls/Typography/index.tsx"),
				O = a("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				T = a("./src/reddit/icons/svgs/Circle/index.tsx"),
				j = a("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				I = a("./node_modules/lodash/range.js"),
				B = a.n(I),
				R = a("./src/reddit/controls/Button/index.tsx"),
				F = a("./src/reddit/layout/row/Inline/index.tsx"),
				L = a("./src/reddit/models/Flair/index.ts"),
				D = a("./src/reddit/selectors/tooltip.ts"),
				M = a("./src/reddit/selectors/user.ts"),
				P = a("./src/reddit/components/Settings/shared/Widgets.m.less"),
				A = a.n(P);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const G = Object(d.a)(h.a),
				H = C.a.wrapped(T.a, "Circle", A.a),
				V = C.a.h3("Label", A.a),
				Y = C.a.wrapped(S.c, "Subtext", A.a),
				J = C.a.wrapped(u.a, "HoverTooltip", A.a),
				Q = C.a.div("ControlContainer", A.a),
				K = C.a.div("TextContainer", A.a),
				z = C.a.div("ActionContainer", A.a),
				X = e => {
					let {
						className: t,
						direction: a,
						isCreateCommunity: n,
						inModal: s,
						isNightModeOn: i,
						disabled: o,
						indent: c,
						last: d,
						...m
					} = e;
					return r.a.createElement("div", W({}, m, {
						className: Object(l.a)(A.a.Wrapper, t, {
							[A.a.mColumn]: "column" === a,
							[A.a.mDisabled]: !!o,
							[A.a.mIndent]: !!c,
							[A.a.mLast]: !!d,
							[A.a.isCreateCommunity]: !!n,
							[A.a.inModal]: !!s,
							[A.a.isNightModeOn]: !!i
						})
					}))
				},
				q = C.a.a("Link", A.a),
				Z = C.a.wrapped(q, "SubtextLink", A.a),
				U = C.a.wrapped(j.a, "LinkIcon", A.a),
				$ = C.a.button("LinkButton", A.a),
				ee = C.a.wrapped(O.a, "ArrowRight", A.a),
				te = e => r.a.createElement(X, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, r.a.createElement(K, {
					className: e.textContainerClassName
				}, r.a.createElement(V, null, e.label, e.isRequired && r.a.createElement(H, null)), r.a.createElement(Y, null, e.subtext)), r.a.createElement(z, null, e.children)),
				ae = C.a.div("StyledFlair", A.a),
				ne = C.a.wrapped(ae, "SpoilerFlair", A.a),
				re = C.a.wrapped(ae, "NSFWFlair", A.a),
				se = e => {
					switch (e.flair) {
						case L.f.Nsfw:
							return r.a.createElement(re, null, "NSFW");
						case L.f.Spoiler:
							return r.a.createElement(ne, null, "SPOILER");
						default:
							return null
					}
				},
				ie = e => {
					const t = Object(i.a)();
					return r.a.createElement(X, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, r.a.createElement(K, null, r.a.createElement(F.a, null, r.a.createElement("label", {
						htmlFor: t,
						className: e.labelClassname
					}, r.a.createElement(V, null, e.label))), r.a.createElement(Y, null, e.subtext)), r.a.createElement(z, null, r.a.createElement(Q, null, e.tooltip && r.a.createElement(J, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), r.a.createElement(k.a, {
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
				me = C.a.span("PreSubText", A.a),
				ue = Object(o.c)({
					isNightModeOn: M.fb
				}),
				pe = Object(s.b)(ue)(e => {
					const t = Object(i.a)();
					return r.a.createElement(X, {
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
					}, !e.inModal && r.a.createElement(F.a, null, r.a.createElement("label", {
						htmlFor: t
					}, r.a.createElement(V, {
						className: e.labelClassname
					}, e.label))), !e.hideSubtext && r.a.createElement(Y, null, " ", r.a.createElement(me, {
						style: {
							color: e.ticks[e.value].color
						}
					}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), r.a.createElement(z, {
						style: {
							flex: 3,
							margin: "20px 20px 0 0"
						}
					}, r.a.createElement(le, null, r.a.createElement(oe, {
						id: t,
						style: {
							background: "linear-gradient(to right, " + B()(1, e.max + 1).map((t, a) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
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
					}), r.a.createElement(ce, null, Object.keys(e.ticks).map((t, a) => r.a.createElement(de, {
						key: t,
						style: {
							color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
						}
					}, e.ticks[t].text))))))
				}),
				he = e => r.a.createElement(X, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(K, null, r.a.createElement(F.a, null, r.a.createElement(V, null, e.label)), r.a.createElement(Y, null, e.subtext)), r.a.createElement(z, null, r.a.createElement(Q, null, r.a.createElement(R.o, {
					onClick: e.onClick
				}, e.actionText)))),
				xe = e => r.a.createElement(X, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(K, null, r.a.createElement(q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, r.a.createElement(U, null)), r.a.createElement(Y, null, e.subtext)), r.a.createElement(z, null, r.a.createElement(q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, r.a.createElement(ee, null)))),
				be = e => r.a.createElement(X, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(K, null, r.a.createElement($, {
					onClick: e.onClick,
					className: Object(l.a)({
						[A.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), r.a.createElement(Y, null, e.subtext)), r.a.createElement(z, null, !!e.hintText && r.a.createElement("div", {
					className: A.a.ActionHintText
				}, e.hintText), r.a.createElement($, {
					onClick: e.onClick,
					className: Object(l.a)({
						[A.a.NoColor]: e.color && "none" === e.color
					})
				}, r.a.createElement(ee, {
					className: Object(l.a)({
						[A.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				Ce = Object(o.c)({
					isOpen: (e, t) => Object(D.b)(t.id)(e)
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
				}, r.a.createElement(K, null, r.a.createElement(V, null, e.label), r.a.createElement(Y, null, e.subtext)), r.a.createElement(z, null, (e => r.a.createElement("div", {
					className: A.a.DropdownWrapper,
					onClick: e.openDropdown
				}, r.a.createElement("span", {
					className: A.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), r.a.createElement(f.b, {
					className: A.a.DropdownTriangle
				}), r.a.createElement(G, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, a) => r.a.createElement(x.b, {
					className: A.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[a] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + a,
					item: t
				}))), e.descriptions && r.a.createElement("div", {
					className: A.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				Ee = e => {
					let {
						disabled: t,
						last: a,
						onClick: s,
						onChange: i,
						...o
					} = e;
					const l = Object(n.useCallback)(e => i(e.target.value), [i]),
						{
							items: c
						} = o;
					return r.a.createElement(X, {
						disabled: t
					}, r.a.createElement(K, null, r.a.createElement("label", {
						htmlFor: o.id
					}, r.a.createElement(V, {
						className: o.labelClassname
					}, o.label)), r.a.createElement(Y, null, o.subtext)), r.a.createElement("div", {
						className: A.a.Wrapper__LineBreak
					}), r.a.createElement(X, {
						last: a,
						indent: !0,
						disabled: t
					}, r.a.createElement(w, {
						id: o.id,
						className: "redditStyle",
						disabled: t || o.inputDisabled,
						onChange: l,
						value: o.selected
					}, c.map(e => {
						let {
							value: t,
							displayName: a
						} = e;
						return r.a.createElement("option", {
							key: t,
							value: t
						}, a)
					}))))
				},
				ve = e => r.a.createElement(X, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(K, null, r.a.createElement(V, null, e.label), r.a.createElement(Y, null, e.subtext)), r.a.createElement(z, null, e.children)),
				ge = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && r.a.createElement("span", {
					className: A.a.tag
				}, "r/"), r.a.createElement(b.a, {
					className: e.isCreateCommunity ? A.a.input : void 0,
					disabled: !!e.disabled,
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
					className: A.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && r.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && r.a.createElement("div", {
					className: A.a.ActionLinkContainer
				}, e.actionLink))),
				Ne = e => r.a.createElement(X, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(K, null, r.a.createElement(V, null, e.label), r.a.createElement(Y, null, e.subtext)), r.a.createElement(z, null, r.a.createElement(q, {
					href: e.link,
					onClick: e.onClick,
					"aria-label": e.linkLabel
				}, r.a.createElement(ee, null))))
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, a) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, a) {
			"use strict";
			a.d(t, "k", (function() {
				return i
			})), a.d(t, "p", (function() {
				return o
			})), a.d(t, "n", (function() {
				return l
			})), a.d(t, "o", (function() {
				return c
			})), a.d(t, "m", (function() {
				return d
			})), a.d(t, "l", (function() {
				return m
			})), a.d(t, "f", (function() {
				return u
			})), a.d(t, "h", (function() {
				return p
			})), a.d(t, "a", (function() {
				return h
			})), a.d(t, "g", (function() {
				return x
			})), a.d(t, "i", (function() {
				return b
			})), a.d(t, "e", (function() {
				return C
			})), a.d(t, "b", (function() {
				return f
			})), a.d(t, "c", (function() {
				return E
			})), a.d(t, "d", (function() {
				return v
			})), a.d(t, "j", (function() {
				return g
			}));
			var n = a("./src/lib/lessComponent.tsx"),
				r = a("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = a.n(r);
			const i = n.a.section("FormPage", s.a),
				o = n.a.h1("HomePageTitle", s.a),
				l = n.a.button("HomePageBreadcrumb", s.a),
				c = n.a.div("HomePageGroup", s.a),
				d = n.a.h1("FormPageTitle", s.a),
				m = n.a.div("FormPageSection", s.a),
				u = n.a.div("FormGroup", s.a),
				p = n.a.h2("FormGroupTitle", s.a),
				h = n.a.div("FormElement", s.a),
				x = n.a.div("FormGroupDescription", s.a),
				b = n.a.div("FormItem", s.a),
				C = n.a.h3("FormElementTitle", s.a),
				f = n.a.div("FormElementDescription", s.a),
				E = n.a.div("FormElementError", s.a),
				v = n.a.div("FormElementSubGroup", s.a),
				g = n.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, a) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, a) {
			"use strict";
			a.d(t, "d", (function() {
				return m
			})), a.d(t, "c", (function() {
				return u
			})), a.d(t, "f", (function() {
				return p
			})), a.d(t, "e", (function() {
				return h
			})), a.d(t, "a", (function() {
				return x
			})), a.d(t, "b", (function() {
				return b
			})), a.d(t, "i", (function() {
				return C
			})), a.d(t, "h", (function() {
				return f
			})), a.d(t, "g", (function() {
				return E
			}));
			var n = a("./src/lib/lessComponent.tsx"),
				r = a("./src/reddit/controls/Input/ModalInput.tsx"),
				s = a("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = a("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				o = a("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = a("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = a("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = a.n(c);
			const m = n.a.wrapped(r.a, "ModalInput", d.a),
				u = n.a.input("Input", d.a),
				p = n.a.wrapped(l.a, "RadioOn", d.a),
				h = n.a.wrapped(o.a, "RadioOff", d.a),
				x = n.a.wrapped(s.a, "Checkbox", d.a),
				b = n.a.wrapped(i.a, "CheckboxSelected", d.a),
				C = n.a.textarea("Textarea", d.a),
				f = n.a.label("StyledLabel", d.a),
				E = n.a.input("StyledFileInput", d.a)
		},
		"./src/reddit/components/SubredditCreationModal/Layout/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/SubredditCreationModal/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/SubredditCreationModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "radioOptions", (function() {
				return ne
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				i = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				l = a("./src/higherOrderComponents/asModal/index.tsx"),
				c = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/actions/modal.ts"),
				m = a("./src/reddit/actions/subredditCreation.ts"),
				u = a("./src/reddit/actions/tooltip.ts"),
				p = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = a("./src/reddit/components/Settings/shared/Widgets.tsx"),
				x = a("./src/reddit/contexts/NavbarExp.ts"),
				b = a("./src/reddit/components/SubredditCreationModal/Layout/index.m.less"),
				C = a.n(b);
			var f = e => {
					const t = Object(r.useContext)(x.a);
					return s.a.createElement("div", {
						className: C.a.OuterContainer
					}, s.a.createElement("div", {
						className: Object(c.a)(e.className, C.a.Container)
					}, s.a.createElement("div", {
						className: Object(c.a)(C.a.Content, {
							[C.a.ContainerExp]: t
						})
					}, e.children)))
				},
				E = a("./src/reddit/components/TrackingHelper/index.tsx"),
				v = a("./src/reddit/constants/modals.ts"),
				g = a("./src/reddit/controls/Button/index.tsx"),
				_ = a("./src/reddit/controls/CheckboxInput/index.tsx"),
				N = a("./src/reddit/controls/ErrorText/index.tsx"),
				y = a("./src/reddit/controls/RadioInput/index.tsx"),
				w = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				k = a("./src/reddit/helpers/trackers/screenview.ts"),
				S = a("./src/reddit/helpers/trackers/subredditCreation.ts"),
				O = a("./src/reddit/icons/svgs/Admin/index.tsx"),
				T = a("./src/reddit/icons/svgs/Close/index.tsx"),
				j = a("./src/reddit/icons/svgs/Eye/index.tsx"),
				I = a("./src/reddit/icons/svgs/Info/index.tsx"),
				B = a("./src/reddit/icons/svgs/Lock/index.tsx"),
				R = a("./src/reddit/icons/svgs/User/index.tsx"),
				F = a("./src/reddit/models/Subreddit/index.ts"),
				L = a("./src/reddit/models/SubredditRestrictions/index.ts"),
				D = a("./src/reddit/selectors/subreddit.ts"),
				M = a("./src/reddit/selectors/tags.ts"),
				P = a("./src/reddit/selectors/user.ts"),
				A = a("./src/lib/formatApiError/index.ts");
			const W = (e, t) => {
				if (!e) return {};
				const a = e.fields && e.fields.length && e.fields[0] && e.fields[0].field,
					r = e.type;
				if ("name" === a) {
					if ("NO_TEXT" === r) return {
						name: n.fbt._("A community name is required", null, {
							hk: "QIlYS"
						})
					};
					if ("BAD_SR_NAME" === r) return {
						name: n.fbt._("Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.", null, {
							hk: "2rmVgd"
						})
					};
					if ("SUBREDDIT_EXISTS" === r) return {
						name: n.fbt._("Sorry, r/{subreddit name attempt} is taken. Try another.", [n.fbt._param("subreddit name attempt", t)], {
							hk: "CLwzs"
						})
					};
					if ("SUBREDDIT_UNAVAILABLE" === r) return {
						name: n.fbt._("This community name is unavailable", null, {
							hk: "15j6BB"
						})
					}
				}
				return {
					generic: Object(A.a)(e)
				}
			};
			var G = a("./src/reddit/components/SubredditCreationModal/index.m.less"),
				H = a.n(G),
				V = a("./src/lib/lessComponent.tsx");
			const Y = 21,
				J = "create-title-info",
				Q = V.a.wrapped(I.a, "Info", H.a),
				K = V.a.wrapped(w.a, "RadioOption", H.a),
				z = V.a.wrapped(p.c, "Tooltip", H.a),
				X = V.a.wrapped(R.a, "Public", H.a),
				q = V.a.wrapped(j.a, "Restricted", H.a),
				Z = V.a.wrapped(B.a, "Private", H.a),
				U = V.a.wrapped(O.a, "Employee", H.a),
				$ = V.a.wrapped(T.a, "CloseButton", H.a),
				ee = V.a.wrapped(N.b, "ErrorText", H.a),
				te = Object(o.c)({
					error: D.f,
					isCreatePending: D.l,
					isEmployee: P.P,
					crosspostId: D.k,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(P.sb)(e),
					userIsSuspended: P.Z,
					allTags: M.e,
					existingTags: M.f,
					newTags: M.g,
					selectedPrimaryTagId: M.h
				}),
				ae = Object(i.b)(te, e => ({
					createCommunity: t => e(Object(m.h)(t)),
					clearErrors: () => e(Object(m.f)()),
					onCloseModal: () => e(Object(d.g)(v.a.SUBREDDIT_CREATION_MODAL_ID)),
					onShowTooltip: () => e(Object(u.f)({
						tooltipId: J
					})),
					onHideTooltip: () => e(Object(u.i)()),
					validateSubredditName: t => e(Object(m.i)(t))
				})),
				ne = (e, t) => [s.a.createElement(K, {
					key: "public",
					showButton: !0,
					value: "public"
				}, s.a.createElement("div", {
					className: H.a.radioContent
				}, s.a.createElement("div", null, s.a.createElement(X, null)), s.a.createElement("div", {
					className: H.a.radioContainer
				}, s.a.createElement("div", {
					className: H.a.sublabel
				}, n.fbt._("Public", null, {
					hk: "DK992"
				})), s.a.createElement("div", {
					className: Object(c.a)(H.a.metafieldDescription, H.a.radioDescription)
				}, n.fbt._("Anyone can view, post, and comment to this community", null, {
					hk: "1PfFUA"
				}))))), s.a.createElement(K, {
					key: "restricted",
					showButton: !0,
					value: "restricted"
				}, s.a.createElement("div", {
					className: H.a.radioContent
				}, s.a.createElement("div", null, s.a.createElement(q, null)), s.a.createElement("div", {
					className: H.a.radioContainer
				}, s.a.createElement("div", {
					className: H.a.sublabel
				}, n.fbt._("Restricted", null, {
					hk: "1iBTDq"
				})), s.a.createElement("div", {
					className: Object(c.a)(H.a.metafieldDescription, H.a.radioDescription)
				}, Object(L.g)(t))))), s.a.createElement(K, {
					key: "private",
					showButton: !0,
					value: "private"
				}, s.a.createElement("div", {
					className: H.a.radioContent
				}, s.a.createElement("div", null, s.a.createElement(Z, null)), s.a.createElement("div", {
					className: H.a.radioContainer
				}, s.a.createElement("div", {
					className: H.a.sublabel
				}, n.fbt._("Private", null, {
					hk: "3q5SYn"
				})), s.a.createElement("div", {
					className: Object(c.a)(H.a.metafieldDescription, H.a.radioDescription)
				}, n.fbt._("Only approved users can view and submit to this community", null, {
					hk: "3z8OI6"
				}))))), s.a.createElement(K, {
					key: "employees_only",
					showButton: !0,
					value: "employees_only",
					hidden: !e
				}, s.a.createElement("div", {
					className: H.a.radioContent
				}, s.a.createElement("div", null, s.a.createElement(U, null)), s.a.createElement("div", {
					className: H.a.radioContainer
				}, s.a.createElement("div", {
					className: H.a.sublabel
				}, n.fbt._("Employees only", null, {
					hk: "1arrQC"
				})), s.a.createElement("div", {
					className: Object(c.a)(H.a.metafieldDescription, H.a.radioDescription)
				}, n.fbt._("Only Reddit employees can view and submit to this community", null, {
					hk: "3ty23C"
				})))))];
			class re extends s.a.Component {
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
						this.props.sendEvent(Object(S.b)()), this.props.onCloseModal()
					}, this.onCancelCreation = () => {
						this.props.onCloseModal(), this.props.sendEvent(Object(S.b)())
					}, this.onUpdateOver18 = () => this.update(!this.state.over18, "over18"), this.state = {
						name: "",
						type: F.g.Public,
						crosspostId: e.crosspostId,
						over18: !1,
						waitingForSuccessfulCommunity: !1,
						restrictCommenting: !1,
						restrictPosting: !0
					}
				}
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(k.v)())
				}
				componentWillUnmount() {
					clearTimeout(this.timeout), this.props.clearErrors()
				}
				render() {
					const {
						error: e,
						isCreatePending: t,
						isEmployee: a,
						onHideTooltip: r,
						onShowTooltip: i,
						userDoesNotHaveEnoughExpToCreateCommunity: o,
						userIsSuspended: l
					} = this.props, d = W(e, this.state.name), {
						over18: m,
						waitingForSuccessfulCommunity: u
					} = this.state;
					return s.a.createElement(f, {
						className: H.a.subredditCreation
					}, s.a.createElement("div", {
						className: H.a.container
					}, s.a.createElement("h1", {
						className: H.a.title
					}, n.fbt._("Create a community", null, {
						hk: "SlFa7"
					}), s.a.createElement($, {
						onClick: this.onCloseModal
					})), o ? s.a.createElement("h2", {
						className: H.a.sublabel
					}, n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "44qhJp"
					})) : l ? s.a.createElement("h2", {
						className: H.a.sublabel
					}, n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "3trJMZ"
					})) : s.a.createElement(s.a.Fragment, null, s.a.createElement(h.e, {
						isCreateCommunity: !0,
						label: n.fbt._("Name", null, {
							hk: "3OIzgl"
						}),
						textContainerClassName: H.a.fullWidthTextContainer,
						onBlur: this.onValidateSubredditName,
						onChange: this.onNameChange,
						maxChars: Y,
						value: this.state.name,
						subtext: s.a.createElement("span", {
							className: H.a.subtextContainer
						}, n.fbt._("Community names including capitalization cannot be changed.", null, {
							hk: "VjrZg"
						}), s.a.createElement("span", {
							id: J,
							onMouseEnter: i,
							onMouseLeave: r,
							className: H.a.info
						}, s.a.createElement(Q, null), s.a.createElement(z, {
							className: H.a.StyledTooltip,
							caretOnTop: !0,
							tooltipId: J,
							text: n.fbt._('Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").', null, {
								hk: "3RsycS"
							})
						})))
					}), d.name && s.a.createElement(ee, null, d.name), s.a.createElement(h.m, {
						label: n.fbt._("Community type", null, {
							hk: "152EhZ"
						}),
						direction: "column",
						isCreateCommunity: !0,
						textContainerClassName: H.a.fullWidthTextContainer
					}, s.a.createElement(y.a, {
						value: this.state.type,
						name: "type",
						onChange: this.onTypeChange
					}, ne(a, "post"))), s.a.createElement("div", {
						className: Object(c.a)(H.a.field, {
							[H.a.isCreatePending]: t
						})
					}, s.a.createElement("div", {
						className: H.a.subtitle
					}, n.fbt._("Adult content", null, {
						hk: "20arB"
					})), s.a.createElement(_.a, {
						name: "over18",
						value: m,
						onChange: this.onUpdateOver18,
						disabled: t
					}, s.a.createElement("div", {
						className: H.a.nsfw
					}, "NSFW"), s.a.createElement("div", {
						className: H.a.sublabel
					}, n.fbt._("18+ year old community", null, {
						hk: "1XxZMV"
					})))), d.generic && s.a.createElement(ee, null, d.generic), u && s.a.createElement("div", {
						className: H.a.pendingText
					}, n.fbt._("Your community is being created...", null, {
						hk: "3dSTrq"
					})), s.a.createElement("div", {
						className: H.a.buttonContainer
					}, s.a.createElement(g.t, {
						disabled: t,
						className: H.a.createButton,
						onClick: this.onCancelCreation,
						priority: g.c.Secondary
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(g.t, {
						disabled: t,
						className: H.a.createButton,
						onClick: this.onCreateCommunityClick
					}, n.fbt._("Create Community", null, {
						hk: "QE8Y3"
					}))))))
				}
			}
			t.default = Object(l.a)(Object(E.c)(ae(re)))
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, a) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/constants/keycodes.ts"),
				o = a("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				l = a("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = a("./src/reddit/layout/row/Inline/index.tsx"),
				d = a("./src/reddit/controls/CheckboxInput/index.m.less"),
				m = a.n(d);
			t.a = e => {
				const t = e.onChange && !e.disabled ? t => {
						t.key !== i.b.Enter && t.key !== i.b.Space || e.onChange(!e.value)
					} : void 0,
					a = e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0;
				return r.a.createElement(c.a, {
					"aria-checked": !!e.value,
					"aria-disabled": e.disabled,
					"aria-labelledby": e.name,
					className: Object(s.a)(e.className, m.a.checkboxInput, e.disabled ? m.a.disabled : null),
					onClick: a,
					onKeyPress: t,
					role: "checkbox",
					tabIndex: 0
				}, r.a.createElement("input", {
					value: e.value ? e.value.toString() : "",
					type: "hidden"
				}), e.value ? r.a.createElement(l.a, {
					className: m.a.checkboxSelected
				}) : r.a.createElement(o.a, null), e.children)
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return v
			})), a.d(t, "c", (function() {
				return g
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/lodash/uniqueId.js"),
				s = a.n(r),
				i = a("./node_modules/raf/index.js"),
				o = a.n(i),
				l = a("./node_modules/react/index.js"),
				c = a.n(l),
				d = a("./src/lib/classNames/index.ts"),
				m = a("./src/higherOrderComponents/asModal/index.tsx"),
				u = a("./src/reddit/controls/Button/index.tsx"),
				p = a("./src/reddit/layout/row/Inline/index.tsx"),
				h = a("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = a.n(h);
			var b = Object(m.a)(e => {
					const {
						children: t,
						title: a
					} = e;
					return c.a.createElement("div", {
						className: x.a.wrapper
					}, c.a.createElement(p.a, {
						className: x.a.titleRow
					}, a), c.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), c.a.createElement(p.a, {
						className: x.a.buttonRow
					}, c.a.createElement(u.l, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				C = a("./src/reddit/controls/ErrorText/index.m.less"),
				f = a.n(C);
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
						errorModalBody: a,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: s = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: i,
						isModalOpen: o
					} = this.state;
					return c.a.createElement("div", {
						className: Object(d.a)(f.a.wrapper, t)
					}, c.a.createElement("span", {
						className: f.a.description,
						ref: this.spanRef
					}, e), i && c.a.createElement("span", {
						className: f.a.moreText,
						onClick: this.toggleModal
					}, s), o && c.a.createElement(b, {
						onConfirmed: this.toggleModal,
						title: r
					}, a || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: a,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: s = []
					} = e, i = s.length ? s : r ? [r] : [];
					return i.length ? c.a.createElement("div", {
						className: t
					}, i.map((e, t) => c.a.createElement(E, {
						className: a,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				g = e => c.a.createElement(v, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = E
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, a) {
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
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return p
			})), a.d(t, "b", (function() {
				return x
			})), a.d(t, "c", (function() {
				return b
			})), a.d(t, "d", (function() {
				return E
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/lessComponent.tsx"),
				o = a("./src/reddit/controls/ErrorText/index.tsx"),
				l = a("./src/reddit/icons/svgs/Plus/index.tsx"),
				c = a("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = a("./src/reddit/controls/FormFields/index.m.less"),
				m = a.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = i.a.input("input", m.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				x = e => {
					let {
						label: t,
						children: a,
						inputRef: n,
						className: i,
						isInvalid: o,
						...l
					} = e;
					const c = void 0 !== l.value && "" !== l.value;
					return r.a.createElement("div", {
						className: Object(s.a)(m.a.inputWrapper, i, {
							[m.a.mIsInvalid]: o
						}),
						onClick: h
					}, r.a.createElement(p, u({
						"aria-invalid": o,
						innerRef: n
					}, l)), t && r.a.createElement("label", {
						className: Object(s.a)(m.a.label, {
							[m.a.mHasValue]: c
						})
					}, t), a)
				},
				b = e => {
					let {
						label: t,
						children: a,
						inputRef: n,
						isInvalid: i,
						className: o,
						redditStyle: l,
						...c
					} = e;
					const d = void 0 !== c.value && "" !== c.value;
					return r.a.createElement("div", {
						className: Object(s.a)(m.a.inputMovingLabelWrapper, o, {
							[m.a.mIsInvalid]: i,
							[m.a.mIsRedditStyle]: l
						}),
						onClick: h
					}, r.a.createElement(p, u({
						innerRef: n
					}, c)), t && r.a.createElement("label", {
						className: Object(s.a)(m.a.label, {
							[m.a.mHasValue]: d
						})
					}, t), a)
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
						const a = this.props.values.slice();
						a[t] = e.target.value, this.props.onChange(a)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							a = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: f.REMOVE,
							value: a,
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
						label: a,
						placeholder: n,
						errors: s = []
					} = this.props;
					return e.map((e, i) => r.a.createElement(x, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!s[i],
						disabled: t,
						type: "text",
						label: a,
						onChange: e => this.updateValue(e, i),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, r.a.createElement(c.b, {
						className: m.a.trash
					})), !!s[i] && r.a.createElement(o.b, {
						className: m.a.errorText
					}, s[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: a,
						maxLength: n,
						addValueText: i,
						disabled: o
					} = this.props;
					this.focusedInput = null;
					const l = !(!!n && a.length >= n) && !o;
					return r.a.createElement("div", {
						className: Object(s.a)(m.a.multiInputWrapper, e)
					}, t && l && r.a.createElement(C, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && l && r.a.createElement(C, {
						onClick: this.addValue,
						text: i
					}))
				}
			}
		},
		"./src/reddit/controls/Select/index.m.less": function(e, t, a) {
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
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, a) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/icons/svgs/Admin/index.m.less"),
				o = a.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(e.className, o.a.admin, {
					[o.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
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
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);

			function s(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), r.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
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
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				o = a.n(i);
			const l = e => r.a.createElement("svg", {
				className: Object(s.a)(o.a.icon, e.className),
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
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditCreation.cd9442b971988b1e99e8.js.map