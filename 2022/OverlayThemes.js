// https://www.redditstatic.com/desktop2x/OverlayThemes.222c0f0ccf358dafbd1c.js
// Retrieved at 10/24/2022, 9:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayThemes"], {
		"./src/chat/components/OverlayThemes/index.m.less": function(e, t, a) {
			e.exports = {
				Content: "_1Kb0Zo1tYTjTahDDX27w-b",
				content: "_1Kb0Zo1tYTjTahDDX27w-b",
				ThemesPicker: "_2rYdQwXUbzjRwIosxoFQ4w",
				themesPicker: "_2rYdQwXUbzjRwIosxoFQ4w",
				ThemeItem: "_1ldYgcg8bTCPAYAFZgTG2q",
				themeItem: "_1ldYgcg8bTCPAYAFZgTG2q",
				ThemeName: "w7Y4S5TOpFy8w2Lme5nAZ",
				themeName: "w7Y4S5TOpFy8w2Lme5nAZ",
				active: "_3HBg3hDvevCjuTJLuGg-cw",
				ThemeIndicator: "Eoa2Elz8_uHJQ9Tqo2kh5",
				themeIndicator: "Eoa2Elz8_uHJQ9Tqo2kh5",
				vanity: "_2wdsiH94WOYyl9HGalXDmr",
				serious: "_1dObplwbS7ha730mDAXDbW",
				orangered: "_38hGGYugImaIx6d8prwSOK",
				berry: "_3p9dFGEliMzsMmX0HZbCko",
				unicorn: "_25F-YqsPQmdnwDKuEb_Lr6",
				ocean: "_2m4RPst0VBy4wIa-G5F8--",
				royal: "_3Sa-_cFhCvi_2EsMKx8e8E",
				Preview: "_2L9zUsL8OMkDUF49LUHmAs",
				preview: "_2L9zUsL8OMkDUF49LUHmAs",
				MessageBasic: "zH9SoF2P6OUFZ2RTxzeG1",
				messageBasic: "zH9SoF2P6OUFZ2RTxzeG1",
				MessageColored: "_3JoUc7ryavzFdAqIIpDDAW",
				messageColored: "_3JoUc7ryavzFdAqIIpDDAW",
				MessageIcon: "_9C2EXTlgRdXs16b1bhc2c",
				messageIcon: "_9C2EXTlgRdXs16b1bhc2c",
				MessageImage: "_3EEBzRi343Ksd9M8gbaTRV",
				messageImage: "_3EEBzRi343Ksd9M8gbaTRV",
				MessageText: "_1ZfPFdInUFMPWVifQcOxWl",
				messageText: "_1ZfPFdInUFMPWVifQcOxWl"
			}
		},
		"./src/chat/components/OverlayThemes/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				c = a("./node_modules/react/index.js"),
				n = a.n(c),
				r = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/config.ts"),
				o = a("./src/lib/classNames/index.ts"),
				m = a("./src/chat/actions/theme.ts"),
				i = a("./src/chat/actions/toast.ts"),
				h = a("./src/chat/actions/tracking.ts"),
				d = a("./src/chat/components/ChatIcon/index.tsx"),
				_ = a("./src/chat/components/OverlayNav/index.tsx"),
				b = a("./src/chat/constants/toast.ts"),
				T = a("./src/chat/controls/Overlay/index.tsx"),
				u = a("./src/chat/controls/OverlayControlBar/index.tsx"),
				g = a("./src/chat/controls/Settings/SectionTitle/index.tsx"),
				E = a("./src/chat/models/Theme/index.ts"),
				x = a("./src/chat/selectors/channels.ts"),
				v = a("./src/chat/selectors/theme.ts"),
				O = a("./src/chat/selectors/user.ts"),
				y = a("./src/chat/components/OverlayThemes/index.m.less"),
				I = a.n(y);
			const p = e => {
					let {
						name: t
					} = e;
					return n.a.createElement("div", {
						className: Object(o.a)(I.a.ThemeIndicator, I.a[t])
					}, s.fbt._("Aa", null, {
						hk: "1usCDh"
					}))
				},
				w = e => {
					let {
						themeKey: t,
						onClick: a
					} = e;
					const c = Object(r.e)(v.a) === t,
						l = t.toLowerCase();
					return n.a.createElement("button", {
						className: Object(o.a)(I.a.ThemeItem, {
							[I.a.active]: c
						}),
						onClick: () => a(t),
						tabIndex: 0
					}, n.a.createElement(p, {
						name: l
					}), n.a.createElement("div", {
						className: I.a.ThemeName
					}, s.fbt._("{ThemeIndicator}", [s.fbt._param("ThemeIndicator", l)], {
						hk: "beor6"
					})))
				};
			t.default = () => {
				const e = Object(r.d)(),
					t = Object(r.e)(v.c),
					a = Object(r.e)(v.a),
					o = Object(r.e)(O.a),
					y = Object(r.e)(x.o),
					p = Object(c.useCallback)(() => {
						e(Object(m.cancelChatTheme)())
					}, [e]),
					f = t => {
						e(Object(m.changeChatThemeAction)({
							themeKey: t
						})), e(Object(h.E)(t))
					};
				return Object(c.useEffect)(() => {
					if (t) return p
				}, [p, t]), n.a.createElement(T.a, {
					isSettings: !0,
					innerContent: !0
				}, n.a.createElement(_.a, {
					showMenu: !0,
					title: s.fbt._("Theme", null, {
						hk: "4wmcQS"
					}),
					channelId: y
				}), n.a.createElement("div", {
					className: I.a.Content
				}, n.a.createElement("div", {
					className: I.a.ThemesPicker
				}, (() => E.a.map(e => n.a.createElement(w, {
					themeKey: e,
					key: e,
					onClick: f
				})))()), n.a.createElement(g.a, {
					text: s.fbt._("Preview", null, {
						hk: "2Y7qLG"
					})
				}), n.a.createElement("div", {
					className: I.a.Preview
				}, n.a.createElement("div", {
					className: I.a.MessageColored
				}, n.a.createElement("div", {
					className: I.a.MessageIcon
				}, n.a.createElement("img", {
					className: I.a.MessageImage,
					src: `${l.a.assetPath}/img/chat/default_avatar_1.png`,
					alt: "default_avatar_1"
				})), n.a.createElement("div", {
					className: I.a.MessageText
				}, s.fbt._("Check out the {previewThemeKey}{=theme!}", [s.fbt._param("previewThemeKey", n.a.createElement("span", {
					className: I.a.ThemeName
				}, a)), s.fbt._param("=theme!", n.a.createElement("span", null, s.fbt._("theme!", null, {
					hk: "2xEyXf"
				})))], {
					hk: "2OqdhJ"
				}))), n.a.createElement("div", {
					className: I.a.MessageBasic
				}, n.a.createElement("div", {
					className: I.a.MessageText
				}, s.fbt._("Woah that's cool!", null, {
					hk: "2DenlV"
				})), n.a.createElement("div", {
					className: I.a.MessageIcon
				}, n.a.createElement(d.a, {
					userId: o,
					isFlipping: !0
				}))))), t ? n.a.createElement(u.a, {
					secondaryButtonText: s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					primaryButtonText: s.fbt._("Save", null, {
						hk: "4yMsMq"
					}),
					secondaryButtonAction: p,
					primaryButtonAction: () => {
						e(Object(m.applyChatTheme)()), e(Object(i.g)({
							toast: b.a.ChangesSaved
						})), e(Object(i.c)())
					}
				}) : null)
			}
		},
		"./src/chat/controls/Settings/SectionTitle/index.m.less": function(e, t, a) {
			e.exports = {
				SectionTitle: "syLXEcIqb2SJy9_YQ8rne",
				sectionTitle: "syLXEcIqb2SJy9_YQ8rne"
			}
		},
		"./src/chat/controls/Settings/SectionTitle/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				c = a.n(s),
				n = a("./src/chat/controls/Settings/SectionTitle/index.m.less"),
				r = a.n(n);
			t.a = e => {
				let {
					text: t
				} = e;
				return c.a.createElement("div", {
					className: r.a.SectionTitle
				}, t)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayThemes.222c0f0ccf358dafbd1c.js.map