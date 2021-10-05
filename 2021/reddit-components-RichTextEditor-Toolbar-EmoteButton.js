// https://www.redditstatic.com/desktop2x/reddit-components-RichTextEditor-Toolbar-EmoteButton.7bd67c60f2f0eaa2bac0.js
// Retrieved at 10/5/2021, 1:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-RichTextEditor-Toolbar-EmoteButton"], {
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, o) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return E
			})), o.d(t, "a", (function() {
				return O
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				d = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = o("./src/reddit/selectors/tooltip.ts"),
				l = o("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = o.n(l),
				u = o("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = u.a.div("Text", m.a),
				x = u.a.div("BottomText", m.a),
				E = e => n.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				O = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(x, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				j = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(a.b)(t)(e)
				}),
				T = Object(c.a)(O, [d.a.Click, d.a.Keydown]),
				f = Object(c.a)(E, [d.a.Click, d.a.Keydown]),
				_ = Object(r.b)(j);
			t.c = _(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(T, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(f, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/higherOrderComponents/asTooltip.tsx"),
				i = o("./src/reddit/constants/elementIds.ts"),
				d = o("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}

			function a(e, t) {
				const o = Object(r.a)(e, t);
				class s extends n.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return n.a.createElement(o, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(d.b)(s)
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less": function(e, t, o) {
			e.exports = {
				emote: "_3D93rMnM8022kmI5JTG4fb",
				emotes: "_2nE7oF1_HdWt-s31zYmYB6",
				emoteMask: "_26-n7Hn4ggLG2AJ7kmR8i6",
				smile: "kZEfwKUF_b6N-MPjQuYFA",
				addEmojiTooltip: "_2T2CdONtWI3ekF8Dpfq0Tj"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/actions/tooltip.ts"),
				l = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = o("./src/reddit/constants/localStorage.ts"),
				u = o("./src/reddit/helpers/localStorage/index.ts"),
				p = o("./src/reddit/icons/svgs/Smile/index.tsx"),
				b = o("./src/reddit/selectors/gold/enabledFeatures.ts"),
				x = o("./src/reddit/selectors/gold/powerups/index.ts"),
				E = o("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				O = o("./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less"),
				j = o.n(O);
			const T = 5,
				f = "ProwerupsEmoji--FirstUploadStimulus",
				_ = 100;
			const h = Object(d.c)({
				emotes: (e, {
					subredditId: t
				}) => Object(b.a)(e, {
					subredditId: t
				}),
				customEmotes: (e, {
					subredditId: t
				}) => Object(x.h)(e, {
					subredditId: t
				}),
				userCanEditCustomEmojis: (e, {
					subredditId: t
				}) => !!t && Object(x.t)(e, {
					subredditId: t
				}),
				subredditHasPowerups: (e, {
					subredditId: t
				}) => Object(x.g)(e, {
					subredditId: t
				})
			});
			t.default = Object(i.b)(h)((function(e) {
				const {
					controlsState: t,
					emotes: o,
					onEmoteButtonClick: d,
					userCanEditCustomEmojis: b,
					customEmotes: x,
					showEmoteMask: O = !0,
					subredditHasPowerups: h,
					subredditId: I,
					useIconName: v
				} = e, g = I ? Object(u.j)(m.b.EMOJI_PROMO_TOOLTIP_DISPLAY_COUNT_PER_SUBREDDIT, I) : 0, P = h && g < T && b && 0 === x.length, [w, y] = Object(n.useState)(P), N = Object(i.d)();
				Object(n.useEffect)(() => {
					w && I && setTimeout(() => {
						Object(u.S)(m.b.EMOJI_PROMO_TOOLTIP_DISPLAY_COUNT_PER_SUBREDDIT, I), N(Object(a.f)({
							tooltipId: f
						}))
					}, _)
				}, [N, w, I]);
				const C = h ? s.fbt._("Add Emoji", null, {
					hk: "3EV4aU"
				}) : s.fbt._("Add Emote", null, {
					hk: "3dXLr8"
				});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(l.c, {
					tooltipId: f,
					text: s.fbt._("NEW! Add custom emojis", null, {
						hk: "1C510K"
					}),
					className: j.a.addEmojiTooltip
				}), r.a.createElement("span", {
					id: f
				}, r.a.createElement(E.default, {
					Icon: v ? void 0 : () => r.a.createElement(p.a, {
						className: j.a.smile
					}),
					iconName: v ? "emoji" : void 0,
					tooltip: w ? void 0 : C,
					enabled: t.emote.isEnabled,
					onClick: e => {
						w && (N(Object(a.j)({
							tooltipId: f
						})), y(!1)), d(e)
					}
				}, O && r.a.createElement("div", {
					className: Object(c.a)(j.a.emotes, {
						[j.a.emoteMask]: o.length > 1
					})
				}, o.map(e => r.a.createElement("img", {
					className: j.a.emote,
					key: e.id,
					src: e.emoji.path
				}))))))
			}))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-RichTextEditor-Toolbar-EmoteButton.7bd67c60f2f0eaa2bac0.js.map