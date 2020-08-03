// https://www.redditstatic.com/desktop2x/Subreddit.1c5aa3c7988cda93dbe8.js
// Retrieved at 8/3/2020, 6:30:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "IdCard~SubredditWiki", "reddit-components-ContentGate"], {
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				s = Math.random;
			e.exports = function(e, t) {
				return e + n(s() * (t - e + 1))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return s(r(e, t), 1)
			}
		},
		"./node_modules/lodash/orderBy.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseOrderBy.js"),
				r = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n, a) {
				return null == e ? [] : (r(t) || (t = null == t ? [] : [t]), r(n = a ? void 0 : n) || (n = null == n ? [] : [n]), s(e, t, n))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				o = Math.min,
				c = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && r(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = a(e), void 0 === t ? (t = e, e = 0) : t = a(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = c();
					return o(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return s(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				a = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				o = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > i) return [];
				var n = o,
					d = c(e, o);
				t = r(t), e -= o;
				for (var l = s(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";

			function s(e, t, n, s) {
				const r = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(r)
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var s = n("./node_modules/linkify-it/index.js"),
				r = n.n(s),
				a = n("./node_modules/tlds/index.js"),
				i = n.n(a),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				d = n.n(c);
			const l = e => d()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				b = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				h = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				g = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				x = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				f = p.normalize;
			p.normalize = e => {
				f.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const v = (e, t) => {
					return (x.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				y = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				E = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const a = Object(r.e)(e),
					i = encodeURIComponent("".concat(t).concat(a));
				return "".concat(s.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(i)
			}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/blade.ts"),
				d = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(r.a)(i.r),
				g = Object(r.a)(i.s),
				x = Object(r.a)(i.q),
				f = (e, t, n) => async (s, r, a) => {
					const i = Object(p.A)(r(), {
						subredditName: e
					});
					if (i) return y(i, t, n)(s, r, a)
				}, v = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), y = (e, t, n) => async (r, i, p) => {
					const f = await Object(l.e)(t);
					r(h());
					const y = i();
					try {
						await Object(a.g)("communityIcon", f, e.id)(r, i, p)
					} catch (E) {
						return Object(b.a)(Object(d.c)(y, "something went wrong with the uploading the image")), r(Object(o.e)({
							kind: u.b.Error,
							text: v()
						})), void r(x())
					}
					const _ = Object(m.d)(i(), {
						name: "communityIcon"
					});
					if (!_) return Object(b.a)(Object(d.c)(y, "image is null")), r(Object(o.e)({
						kind: u.b.Error,
						text: v()
					})), void r(x());
					await Object(a.k)(e.id, {
						communityIcon: _
					}, c.b.idCard, n)(r, i, p), r(Object(o.e)({
						kind: u.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(g())
				}
		},
		"./src/reddit/components/CommunityIdTopBar/LevelBadge/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3wU37K5r41vOkCGVpEDcRK",
				icon: "_3nyGWtYJVWP4_98uoGJ_71",
				text: "_3sYDh6pENyPn_M3y6_TWkw"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				Planet: "ixfotyd9YXZz0LNAtJ25N",
				planet: "ixfotyd9YXZz0LNAtJ25N",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX",
				levelBadge: "_135_8DPabrU8OFXuqt2i7x"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/hooks/useTracking.ts"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/helpers/trackers/powerups.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				h = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				g = n("./src/reddit/components/SubredditNav/index.tsx"),
				x = n("./src/reddit/components/SubscribeButton/index.tsx"),
				f = n("./src/reddit/constants/postLayout.ts"),
				v = n("./src/reddit/constants/posts.ts"),
				y = n("./src/reddit/featureFlags/index.ts"),
				_ = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				E = n("./src/reddit/constants/tracking.ts"),
				C = n("./src/reddit/selectors/telemetry.ts");
			var O = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				j = n("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				k = n("./src/reddit/selectors/gold/powerups.ts"),
				N = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				w = n("./src/reddit/selectors/widgets.ts"),
				S = n("./src/reddit/icons/svgs/Powerup/index.tsx"),
				P = n("./src/reddit/components/CommunityIdTopBar/LevelBadge/index.m.less"),
				T = n.n(P);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var B = e => r.a.createElement("button", {
					className: Object(c.a)(e.className, T.a.container),
					onClick: e.onClick
				}, r.a.createElement(S.a, {
					className: T.a.icon
				}), r.a.createElement("div", {
					className: T.a.text
				}, I._("Level {level}", [I._param("level", e.level)], {
					hk: "4BNMWs"
				}))),
				A = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				L = n.n(A);
			const M = l.a.wrapped(O.a, "Planet", L.a),
				F = l.a.img("SubredditIcon", L.a),
				D = Object(o.c)({
					arePowerupsEnabled: j.a,
					powerups: k.g,
					spPollsEnabled: y.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(N.a)(e, {
							subredditId: n
						})
					},
					widget: w.f
				});
			t.a = Object(a.b)(D)(Object(d.a)(e => {
				const t = Object(a.c)(),
					n = Object(i.a)(),
					s = e.subreddit ? e.subreddit.id : e.subredditId,
					o = e.subreddit ? e.subreddit.name : e.subredditName,
					d = e.subreddit ? e.subreddit.url : e.subredditUrl,
					l = e.subreddit ? e.subreddit.title : "",
					y = e.subreddit && Object(_.a)(e),
					O = !(!e.theme || !y),
					j = o.charAt(0).toUpperCase() + o.slice(1),
					k = !!e.subreddit && e.subredditInlineEditingEnabled,
					N = Object(c.a)(L.a.SubredditIcon, L.a.editableIcon, {
						[L.a.emptyEditableIcon]: !y
					}),
					w = e.arePowerupsEnabled && e.powerups && e.powerups.tiersInfo.length > 1,
					S = r.a.createElement(h.a, {
						className: N,
						subreddit: e.subreddit,
						iconUrl: y || void 0,
						inTopBar: !0
					}),
					P = O ? r.a.createElement(F, {
						src: y || void 0
					}) : r.a.createElement(M, null),
					T = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					I = e.layout ? e.layout === f.g.Large ? "".concat(984, "px") : "100%" : "".concat(1086, "px");
				return r.a.createElement("div", {
					className: L.a.container,
					style: {
						maxWidth: I
					}
				}, r.a.createElement("div", {
					className: L.a.subredditMetaContainer
				}, k ? S : P, r.a.createElement("div", {
					className: Object(c.a)(L.a.textContainer, {
						[L.a.textContainerNoIcon]: !O
					})
				}, r.a.createElement("div", {
					className: L.a.text
				}, r.a.createElement("h1", {
					className: L.a.title
				}, l || j), !!l && r.a.createElement("h2", {
					className: L.a.description
				}, "r/", o), w && r.a.createElement(B, {
					level: e.powerups.tier,
					className: L.a.levelBadge,
					onClick: () => {
						n(Object(m.e)()), t(Object(p.i)(u.a.ECON_POWERUPS_PURCHASE))
					}
				})), r.a.createElement("div", {
					className: L.a.subscribeButtonContainer
				}, r.a.createElement(x.a, {
					className: L.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => Object.assign(Object.assign({}, C.defaults(t)), {
							source: "id_banner",
							action: E.c.CLICK,
							noun: e,
							subreddit: C.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: o,
						type: v.a.SUBREDDIT
					},
					small: !0
				})), e.subreddit && r.a.createElement(b.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), T && r.a.createElement(g.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: d,
					subredditId: s,
					subredditNavContainerClassName: L.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/loginHref/index.ts"),
				l = n("./src/reddit/actions/contentGate.ts"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				h = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = p.a.div("FooterContainer", h.a), f = p.a.div("UserAgreement", h.a), v = p.a.a("UserAgreementLink", h.a), y = p.a.a("PrivacyLink", h.a);
			var _ = () => a.a.createElement(x, null, a.a.createElement(f, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", a.a.createElement(v, {
					href: "".concat(s.a.redditUrl, "/help/useragreement")
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", a.a.createElement(y, {
					href: "".concat(s.a.redditUrl, "/help/privacypolicy")
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				E = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				C = n("./src/reddit/components/RichTextJson/index.tsx"),
				O = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				j = n.n(O),
				k = n("./src/lib/linkMatchers/index.ts"),
				N = n("./src/lib/linkMatchers/customLinks.ts"),
				w = n("./src/reddit/controls/OutboundLink/index.tsx");
			const S = /\[(.+?)\]\((.+?)\)/g,
				P = e => {
					const t = e.split(S);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, a] = t.slice(s, s + 3);
						n.push(e), n.push([a, r])
					}
					return n
				};
			var T = a.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = j()(t, P)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.e.add(N.g.subreddit.prefix, N.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return a.a.createElement(w.b, {
								className: e.linkClassName,
								href: s,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return a.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				I = n("./src/reddit/contexts/PageLayer/index.tsx"),
				B = n("./src/reddit/controls/Button/index.tsx"),
				A = n("./src/reddit/models/ContentGate.ts"),
				L = n("./src/reddit/selectors/meta.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/ContentGate/index.m.less"),
				D = n.n(F);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js"), W = p.a.div("ButtonsContainer", D.a), U = p.a.div("Container", D.a), H = p.a.div("Description", D.a), V = p.a.div("PrivateSubredditDetails", D.a), G = p.a.div("PrivateSubredditDescription", D.a), Z = p.a.h3("PrivateSubredditName", D.a), K = p.a.a("Link", D.a), z = p.a.wrapped(B.h, "LinkRouterButton", D.a), q = p.a.wrapped(B.g, "LinkButton", D.a), J = p.a.wrapped(B.k, "SecondaryLinkRouterButton", D.a), Y = p.a.wrapped(B.j, "SecondaryLinkButton", D.a), Q = p.a.wrapped(z, "GoHomeLinkButton", D.a), X = p.a.img("Image", D.a), $ = p.a.img("ImagePlaceholder", D.a), ee = p.a.wrapped(z, "LeftLinkRouterButton", D.a), te = p.a.wrapped(q, "LeftLinkButton", D.a), ne = p.a.wrapped(Y, "SecondaryLeftLinkButton", D.a), se = p.a.wrapped(J, "SecondaryLeftLinkRouterButton", D.a), re = p.a.h3("Title", D.a), ae = p.a.div("PageBody", D.a), ie = p.a.div("QuarantineMessageWrapper", D.a), oe = Object(c.c)({
				isLoggedIn: M.G,
				origin: L.l,
				user: M.i
			}), ce = Object(I.t)(), de = Object(i.b)(oe, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(u.C(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(l.l)())
					}
				}
			}), le = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: i,
					location: o,
					origin: c,
					pageLayer: u,
					quarantineRequiresEmail: p,
					quarantineMessage: b,
					quarantineMessageHtml: h,
					quarantineMessageRTJson: g,
					setNSFWPreference: x,
					subredditDescription: f,
					subredditName: v,
					user: y
				} = e, _ = () => {
					i ? x() : Object(l.k)(), window.location.reload()
				};
				switch (n) {
					case A.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/gold/premium-crest.png")
						}), a.a.createElement(re, null, R._("r/{community name} is a Reddit Premium community", [R._param("community name", v)], {
							hk: "2lyDwB"
						})), a.a.createElement(H, null, R._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(W, null, y ? a.a.createElement(ne, {
							href: "".concat(s.a.redditUrl, "/premium")
						}, R._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(te, {
							href: Object(d.a)(o, c)
						}, R._("Sign Up", null, {
							hk: "rvpjy"
						})), y ? a.a.createElement(z, {
							to: "/"
						}, R._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(Y, {
							href: Object(d.a)(o, c)
						}, R._("Log in", null, {
							hk: "odEG4"
						}))));
					case A.a.Nsfw:
					case A.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), a.a.createElement(re, null, n === A.a.Nsfw ? R._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : R._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(H, null, R._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(W, null, a.a.createElement(ee, {
							to: "/"
						}, R._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(Y, {
							onClick: _
						}, R._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case A.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/private.png")
						}), a.a.createElement(re, null, R._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), f && f.length && a.a.createElement(V, null, a.a.createElement(Z, null, "r/", v), a.a.createElement(G, null, a.a.createElement("div", null, f))), a.a.createElement(H, null, R._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), a.a.createElement(W, null, y ? a.a.createElement(ne, {
							href: "".concat(s.a.redditUrl, "/message/compose?to=/r/").concat(v)
						}, R._("Message Mods", null, {
							hk: "vVe1i"
						})) : a.a.createElement(ne, {
							href: Object(d.a)(o, c)
						}, R._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(z, {
							to: "/"
						}, y ? R._("Go Home", null, {
							hk: "49p4or"
						}) : R._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case A.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), a.a.createElement(re, null, R._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(H, null, R._("This community is {=quarantined}", [R._param("=quarantined", a.a.createElement(K, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, R._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(ie, null, g ? a.a.createElement(C.a, {
							content: g,
							rtJsonElementProps: {
								pageLayer: u
							}
						}) : h ? a.a.createElement(E.a, {
							html: h
						}) : b || R._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), R._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(W, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? a.a.createElement(W, null, a.a.createElement(se, {
								to: "/"
							}, R._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(q, {
								href: "".concat(s.a.redditUrl, "/prefs/update")
							}, R._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(W, null, a.a.createElement(ee, {
								to: "/"
							}, R._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(Y, {
								onClick: t
							}, R._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(y, r, p)));
					case A.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/banned.png")
						}), a.a.createElement(re, null, R._("r/{community name} has been banned from Reddit", [R._param("community name", v)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(H, null, e ? a.a.createElement(T, {
							linkClassName: D.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : R._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(W, null, a.a.createElement(z, {
							to: "/"
						}, R._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case A.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(re, null, R._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(W, null, a.a.createElement(z, {
							to: "/"
						}, R._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case A.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement($, null), a.a.createElement(re, null, R._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(H, null, R._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(W, null, y && a.a.createElement(m.a, {
							eventSource: "content_gate"
						}), a.a.createElement(Q, {
							to: "/"
						}, R._("Go Home", null, {
							hk: "49p4or"
						}))));
					case A.a.ProfileDoesNotExist:
					case A.a.ProfileDeleted:
					case A.a.ProfileSuspended:
					case A.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(re, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case A.a.ProfileBlockedForLegalReason:
									return R._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case A.a.ProfileDeleted:
									return R._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case A.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, R._("This account has been {=suspended} .", [R._param("=suspended", a.a.createElement(K, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, R._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case A.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(re, null, R._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(H, null, R._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(W, null, a.a.createElement(Q, {
							to: "/"
						}, R._("Go Home", null, {
							hk: "49p4or"
						}))));
					case A.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(re, null, R._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(W, null, a.a.createElement(Q, {
							to: "/"
						}, R._("Go Home", null, {
							hk: "49p4or"
						}))));
					case A.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(re, null, R._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(W, null, a.a.createElement(z, {
							to: "/"
						}, R._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = ce(de(Object(o.i)(e => a.a.createElement(U, null, a.a.createElement("div", null, a.a.createElement(ae, null, le(e))), a.a.createElement(_, null)))))
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				SecondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				secondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(h),
				x = n("./src/lib/lessComponent.tsx");
			const f = "create-community-button",
				v = x.a.wrapped(u.i, "SecondaryButton", g.a),
				y = x.a.wrapped(d.c, "StyledTooltip", g.a),
				_ = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.ab)(e),
					userIsSuspended: b.M
				});
			t.a = Object(i.b)(_, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.b)(n)), e(Object(m.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: f
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(l.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: r,
					onHideTooltip: i,
					openCommunityCreation: o,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l
				} = e;
				return a.a.createElement(v, {
					className: t,
					disabled: l || d,
					onClick: () => o(c),
					onMouseEnter: r,
					onMouseLeave: i,
					id: f
				}, s.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), d ? a.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: f,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? a.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: f,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreatePostBanner/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "_1BIJI1DdDH_4emkRdSgYtS",
				titleFontH2: "_23v2sEqtCPdekfIaLfBZp0",
				titleFontH3: "_3IPxgawQfrpK8awcnvf2tu",
				titleFontH4: "ZuN5dJ8fJ4v1pojDMILP0",
				titleFontH5: "_2ztaAHYqZbZbLYMI-lEtHX",
				titleFontH6: "FJTuq_jN8uqei2Q4GA66j",
				metadataFont: "_1cBJStdY8xmiR_5jS9gSeH",
				flairFont: "_1fMm1d_nUYPU1bZGhGW2bC",
				labelsFont: "_2_UCOjEBwHnvHk6zBrjPsR",
				actionFont: "_2yyPZbzMoNrAUtQO_SktBd",
				smallButtonFont: "_2_b2a8o6wkToROG8VNRtMR",
				largeButtonFont: "_3Ls4y5dDOPfsU8368YWswn",
				tabFont: "_2TXH3iCv_qoKnRDI_q5ehB",
				strongTextFont: "_1VYMlogcTatyZdJyEPfw1t",
				bodyFontH1: "_2ZqUm_Cp2QP_j0eqf4TOLu",
				bodyFontH2: "_3CcMb_6AI06xq5ar12VdGR",
				bodyFontH3: "_2rQURI6yWXPMKy8zTsJVhS",
				bodyFontH4: "_20eyEQiTe3oMfPFHKZsVTk",
				bodyFontH5: "_1LGkFCI_sPLVchg392lGmP",
				bodyFontH6: "NneW2LW2rvek7WBZYLULA",
				bodyFont: "_1WbHqicmob5scrxcNoRM6z",
				bodyFontSmall: "_1JhbrLSCwywCqsws4jUAzS",
				bodyFontMono: "_1DXzqFfRPHDAA7hSJMbTxi",
				banner: "_2bVJFy1zdpBBF6tNX6MsZt",
				button: "_3dn2kMjL3eThyGPEb1oAf-",
				buttonWrapper: "_2MsQ2gmnKXnwElZFA1jCbV",
				close: "_1MiKBKJCDaPRJ7r-vSQ8xU",
				closeContainer: "_3Amqa4WXRxq65XAjmjQw8E",
				heading: "aVXYLWktPH4YxXbOJbfEg",
				postIcon: "_2cBHGzAvbCcbR3bvPSt_Y1",
				text: "_3VcroXmJS3StZ2nIi8JODq"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/localStorageAvailable/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/banners.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/localStorage/index.ts"),
				p = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				b = e => a.a.createElement("svg", {
					viewBox: "0 0 56 56",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, a.a.createElement("g", {
					transform: "translate(1 1)",
					fill: "inherit",
					stroke: "inherit",
					fillRule: "evenodd"
				}, a.a.createElement("rect", {
					x: "16",
					y: "35",
					width: "22.4",
					height: "2.8",
					rx: "1.4",
					stroke: "none"
				}), a.a.createElement("path", {
					d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
				}), a.a.createElement("circle", {
					strokeWidth: "2",
					fill: "none",
					cx: "27",
					cy: "27",
					r: "27"
				}))),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/components/CreatePostBanner/index.m.less"),
				f = n.n(x);
			const v = Object(i.b)(null, e => ({
				showToast: () => {
					e(Object(c.e)({
						kind: g.b.SuccessCommunity,
						text: s.fbt._("Dismissed", null, {
							hk: "3YBtnR"
						})
					}))
				}
			}));
			class y extends a.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(m.K)(l.a.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
							visible: !1
						}), this.props.showToast(), this.props.sendEvent(Object(p.b)())
					}, this.createPost = () => {
						this.props.sendEvent(Object(p.a)())
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						subreddit: e
					} = this.props, t = Object(o.a)() && !Object(m.f)(l.a.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(Object(p.c)()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? a.a.createElement("div", {
						className: f.a.banner
					}, a.a.createElement("button", {
						className: f.a.closeContainer,
						onClick: this.closeBanner
					}, a.a.createElement(h.a, {
						className: f.a.close
					})), a.a.createElement(b, {
						className: f.a.postIcon
					}), a.a.createElement("div", {
						className: f.a.heading
					}, s.fbt._("Create the ideal {subredditDisplayText} post", [s.fbt._param("subredditDisplayText", " ".concat(e.displayText, " "))], {
						hk: "3ZioIj"
					})), a.a.createElement("div", {
						className: f.a.text
					}, s.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), a.a.createElement("br", null), s.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), a.a.createElement("div", {
						className: f.a.buttonWrapper
					}, a.a.createElement(u.g, {
						className: f.a.button,
						target: "_blank",
						href: "/".concat(e.displayText, "/submit"),
						onClick: this.createPost
					}, s.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = v(Object(d.c)(y))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				o = n.n(i);
			class c extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(a.a)(o.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(a.a)(o.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(a.a)(this.props.hidePadding ? o.a.bodyHidePadding : o.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_23HWOAAvtr9XUARUICwS1l",
				button: "_23HWOAAvtr9XUARUICwS1l",
				ChatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				chatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				headerButton: "VjmtSca9g92ay_XMP6rCV",
				buttonCaption: "_3iAPYhncpDFRVQFe9wprJs"
			}
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/downToChat.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				m = n("./src/reddit/selectors/downToChat.ts"),
				p = n("./src/reddit/selectors/experiments/downToChat.ts"),
				b = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				h = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = Object(i.c)({
				isDownToChatExperimentEnabled: p.a,
				isEnabled: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(m.c)(e, n.id)
				}
			}), f = Object(a.b)(x, e => ({
				startChatting: t => e(Object(c.i)(t))
			}));
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.onButtonClick = () => {
						const {
							startChatting: e,
							subreddit: t
						} = this.props;
						e(t.id)
					}
				}
				render() {
					const {
						headerButton: e,
						isEnabled: t,
						isDownToChatExperimentEnabled: n
					} = this.props;
					return t && n ? r.a.createElement(l.f, {
						className: Object(o.a)(h.a.button, e ? h.a.headerButton : ""),
						redditStyle: !0,
						onClick: this.onButtonClick
					}, e && r.a.createElement(u.a, {
						className: Object(o.a)(h.a.chatIcon)
					}), r.a.createElement("span", {
						className: Object(o.a)(h.a.buttonCaption)
					}, g._("Start chatting", null, {
						hk: "udQG0"
					}))) : null
				}
			}
			t.a = f(Object(d.c)(v))
		},
		"./src/reddit/components/DownToChatBanner/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundAnimationStyles: "nu9ZkGwD7hyrRLI6Isf0L",
				Container: "_3HwENDlXUGoAOP6zptLsmD",
				container: "_3HwENDlXUGoAOP6zptLsmD",
				backgroundAnimation: "E0C3InHZ3RJwQ52gcvYvk",
				Footer: "_1EDQhZLmAaqq0TjAaBHfRc",
				footer: "_1EDQhZLmAaqq0TjAaBHfRc",
				Title: "_1XKqWvpbNVuWQvCDOzDnY9",
				title: "_1XKqWvpbNVuWQvCDOzDnY9",
				Description: "_2jyh4u7PkcB4yzPbeF0o5D",
				description: "_2jyh4u7PkcB4yzPbeF0o5D",
				AvatarContainer: "_3MkBSjcFze3xCUGrbKb4cv",
				avatarContainer: "_3MkBSjcFze3xCUGrbKb4cv",
				Avatar: "_368cN6FwbMRDo7PzTz7IsF",
				avatar: "_368cN6FwbMRDo7PzTz7IsF",
				editableIcon: "_191Gjm6x9puYH4dNQ6ISjj",
				emptyEditableIcon: "iM8M6DgU7p5Ok8n_Ks0gt",
				CloseButton: "_32Qext59XJHMV7WLlayaa",
				closeButton: "_32Qext59XJHMV7WLlayaa",
				Close: "_1KqEjgaeL1FeIc48mzjBo4",
				close: "_1KqEjgaeL1FeIc48mzjBo4",
				Counter: "_1I9s8rY01sj6dSMpZ120Pu",
				counter: "_1I9s8rY01sj6dSMpZ120Pu"
			}
		},
		"./src/reddit/components/DownToChatBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/actions/downToChat.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/icons/svgs/Close/index.tsx"),
				m = n("./src/reddit/icons/svgs/DownToChatAvatar/index.m.less"),
				p = n.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var h = n("./src/reddit/selectors/downToChat.ts"),
				g = n("./src/reddit/selectors/experiments/downToChat.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				v = n("./src/reddit/components/DownToChatBanner/index.m.less"),
				y = n.n(v);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = o.a.wrapped(e => r.a.createElement("svg", b({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 60 60"
			}, e), r.a.createElement("g", null, r.a.createElement("g", {
				className: p.a.cls2
			}, r.a.createElement("path", {
				className: p.a.cls3,
				d: "M54.44-5.35A67.31,67.31,0,0,0,4,.77C-.47,3.27-4.7,6.36-7.69,10.5a20.47,20.47,0,0,0-3.52,7.88c-.5,2.47.23,5.13-.42,7.5-1.35,4.89-4.93,7.56-2.79,13.24,1.48,3.91,4.7,6.91,8.14,9.3,8.24,5.74,16.53,2.11,25.37-.67,2.62-.83,5.23-1.64,7.79-2.6C29.14,44.3,31,42.79,33.27,42a62.83,62.83,0,0,0,8.3-3.39c2.54-1.31,5-2.73,7.69-3.79,2.38-1,5.11-1.82,6.28-4.1a7.74,7.74,0,0,0,.55-4.13c-.39-4.63-2.17-9-4-13.32a40.17,40.17,0,0,0-2-4.36c-.7-1.23-1.82-2.26-2.42-3.52-1.1-2.3-1.37-5.4-2-7.87"
			}), r.a.createElement("path", {
				className: p.a.cls4,
				d: "M48.81.61C39.94,7.54,37.18,9.26,25.05,16.13,29.21,19,45.38,26.28,53.92,29.28,42.46,33.81,12.15,41-1.85,44.74c3,1.76,8.22,7.79,10.8,10.14,4,3.65,8.39,9.47,14.32,9.42a60.26,60.26,0,0,0,18-2.54c8.83-2.84,17.6-7.09,23.31-14.39a29.94,29.94,0,0,0,1.2-35.32C64.61,10.32,63,7.79,61.09,6.94,59,6,55.46,6.22,53.16,6.16"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M20,30.71A9.26,9.26,0,0,0,24.77,36a4,4,0,0,1,1.48.85,2,2,0,0,1-.12,2.48,3.39,3.39,0,0,1-2.4,1.05C20.55,40.62,18,37.7,17,35"
			}), r.a.createElement("path", {
				d: "M17,35c.11.06.44.91,1,1.78A8.17,8.17,0,0,0,20,38.84a5.9,5.9,0,0,0,3.24,1.21A3,3,0,0,0,26,38.73a1.63,1.63,0,0,0,.09-1.2,1.46,1.46,0,0,0-.87-.79,12.78,12.78,0,0,1-1.4-.68,7.84,7.84,0,0,1-1.26-.92,9.52,9.52,0,0,1-2.69-4.38c.4.52.94,1.26,1.49,1.9s1.1,1.18,1.37,1.48a6.64,6.64,0,0,0,1.86,1.5c.64.37,1.57.59,2,1.41a2.25,2.25,0,0,1-.23,2.3,3.27,3.27,0,0,1-1.83,1.14,5.52,5.52,0,0,1-2,.08A6.16,6.16,0,0,1,20.74,40a7.49,7.49,0,0,1-2.5-2.24A8.31,8.31,0,0,1,17,35Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M5.87,46.65c3.07,2.59,7.08,2.88,9,.65s.91-6.13-2.16-8.72-7.08-2.88-9-.65"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M5.41,46.45a3.56,3.56,0,0,1-2-2.69,10.5,10.5,0,0,1,.08-3.49A49.24,49.24,0,0,1,4.83,34,17.67,17.67,0,0,1,7.46,28.7a7.51,7.51,0,0,1,1.11-1.4c2.33-2.22,6.24-2.2,9.1-1.16,1.81.66,1.81,2.12,1.85,4a22.8,22.8,0,0,1-3.69,13.5"
			}), r.a.createElement("path", {
				d: "M15.82,43.62c0-.23,1.08-1.83,1.86-3.9a21.21,21.21,0,0,0,1.37-5.9,31.42,31.42,0,0,0,.05-3.77C19,28.76,19,27.39,18,26.87a6.76,6.76,0,0,0-1.73-.59A11.13,11.13,0,0,0,14.41,26a8.46,8.46,0,0,0-3.61.55,5.48,5.48,0,0,0-2.38,1.8,30.74,30.74,0,0,0-1.72,2.7,13.79,13.79,0,0,0-1.23,2.83c-.29,1-.57,2-.82,3a34.3,34.3,0,0,0-1,5.53A5,5,0,0,0,4,44.75a3,3,0,0,0,1.44,1.54A2.91,2.91,0,0,1,3.61,45a5.42,5.42,0,0,1-.78-2.73,17.89,17.89,0,0,1,.47-4.49c.23-.89.48-1.75.74-2.6a25.31,25.31,0,0,1,.84-2.5A23.26,23.26,0,0,1,7.4,28.29a6.69,6.69,0,0,1,3.86-2.73,10.58,10.58,0,0,1,4.43-.19,12.31,12.31,0,0,1,2,.52,2.7,2.7,0,0,1,1.66,1.39,5.41,5.41,0,0,1,.4,2c0,.64,0,1.27,0,1.89a22.8,22.8,0,0,1-1,6.9,17.41,17.41,0,0,1-1.51,3.35A20.12,20.12,0,0,1,15.82,43.62Z"
			}), r.a.createElement("path", {
				className: p.a.cls6,
				d: "M10.91,28.22a24.4,24.4,0,0,1,.94,2.63l-.25,0,0-3.11.35,0a10.52,10.52,0,0,0,1.83,4.62l-.44.21-.06-.16a15.52,15.52,0,0,1-.74-4.24l.7-.07A12.81,12.81,0,0,0,15.88,33l-.75.44a14,14,0,0,1-1.36-4.9l.89-.28.94,1.55,1.61,2.67L16.3,33a36.05,36.05,0,0,1-1.14-4.52l1-.28a21,21,0,0,0,2,4l-.82.42a18.77,18.77,0,0,1-.9-3.54l.77-.26a10.37,10.37,0,0,0,2,2.81l-.5.4a11.41,11.41,0,0,1-1.05-2.72L18,29a21,21,0,0,0,1.7,2.24,13.32,13.32,0,0,1-2-1.95l.29-.17a13.85,13.85,0,0,0,1.26,2.49l-.59.46a9.8,9.8,0,0,1-2.29-2.9l1-.32.14.81a16.84,16.84,0,0,0,.66,2.59l-.71.36a22.75,22.75,0,0,1-2-4.15l.53-.16A35.93,35.93,0,0,0,17,32.74l-.38.18-2.54-4.28.37-.12a13.27,13.27,0,0,0,1.27,4.68l-.36.22a13,13,0,0,1-2.67-5.2l.52,0a15.76,15.76,0,0,0,.69,4.26l-.51.24a10.5,10.5,0,0,1-1.68-4.08c0-.25-.1-.53-.13-.78l.49,0c-.06,1.18-.15,2.57-.23,3.11l-.21,0C11.18,29.33,11,28.52,10.91,28.22Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M3.23,34.05a4.89,4.89,0,0,1-.36-3.11,3.82,3.82,0,0,1,1.51-2.23A9.28,9.28,0,0,1,7,27.61c1.08-.33,4.74.59,5.06,1.91"
			}), r.a.createElement("path", {
				d: "M12,29.52a2.66,2.66,0,0,0-.88-.81,5.79,5.79,0,0,0-1.62-.61,8.19,8.19,0,0,0-2.14-.18,7.18,7.18,0,0,0-1,.31c-.35.13-.69.27-1,.42a3.82,3.82,0,0,0-2.12,2.47A5.56,5.56,0,0,0,3.33,34a2.38,2.38,0,0,1-.84-1.29,2.92,2.92,0,0,1-.13-1.37,4.44,4.44,0,0,1,1.71-2.64,8.54,8.54,0,0,1,2.44-1.12,2.85,2.85,0,0,1,1.22-.23,6.87,6.87,0,0,1,1.14.12,6.47,6.47,0,0,1,2,.66,3,3,0,0,1,.86.68A1.2,1.2,0,0,1,12,29.52Z"
			}), r.a.createElement("path", {
				d: "M33.11,8.69a1.12,1.12,0,0,1-.62.29,2.35,2.35,0,0,1-1.41-.18,10.13,10.13,0,0,1-2.31-1.75,15.24,15.24,0,0,0-1.32-1,3,3,0,0,0-.67-.33A3.76,3.76,0,0,0,26,5.53a2.73,2.73,0,0,0-2.45,1.25,7.65,7.65,0,0,0-1.28,5A4.77,4.77,0,0,0,23,14a3.39,3.39,0,0,0,1.54,1.23,2.65,2.65,0,0,1-2.41-.6,3.4,3.4,0,0,1-1.18-2,9.6,9.6,0,0,1,.81-4.89,5.25,5.25,0,0,1,3-3,3.88,3.88,0,0,1,3.69.94c.88.78,1.53,1.6,2.22,2.19A4,4,0,0,0,32,8.6,2.65,2.65,0,0,0,33.11,8.69Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M31,23.45c2.42-1.82,3.32-5.73,1.55-8.22-1.05-1.42-2.65-3-4.56-1.87"
			}), r.a.createElement("path", {
				d: "M28,13.36a1.62,1.62,0,0,1,1.2-.55,3.21,3.21,0,0,1,1.86.48,6.08,6.08,0,0,1,1.83,1.57,5.44,5.44,0,0,1,1.07,2.33,6.28,6.28,0,0,1-.59,4,5.42,5.42,0,0,1-2.26,2.37c.38-.87.87-2.13,1.13-2.53a5.16,5.16,0,0,0,1-2.64,4.64,4.64,0,0,0-.5-2.46,6.89,6.89,0,0,0-1.42-1.71,4.24,4.24,0,0,0-1.59-.93,3.43,3.43,0,0,0-1-.11A4.12,4.12,0,0,0,28,13.36Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M10.38,7.68c7.31-2.53,18.18,1.32,20.67,9,1.08,4.27.9,10.19-2.53,12.84C19.77,36.32-1.84,26.59,5,13.93"
			}), r.a.createElement("path", {
				d: "M5,13.94a4.44,4.44,0,0,1-.23.64l-.25.58-.24.77A9.27,9.27,0,0,0,4,20.23a9.85,9.85,0,0,0,2.09,4.48,15.11,15.11,0,0,0,3,2.79,21.66,21.66,0,0,0,10.81,3.74,14.5,14.5,0,0,0,5.76-.73,10.08,10.08,0,0,0,2.48-1.35,6.26,6.26,0,0,0,1.7-2.06A11.24,11.24,0,0,0,31,22.48a19.33,19.33,0,0,0-.34-4.81,9.91,9.91,0,0,0-2-4.11,13.61,13.61,0,0,0-3.28-3.06,16.91,16.91,0,0,0-3.84-2,19.08,19.08,0,0,0-4-1.06,16.86,16.86,0,0,0-7.2.39A14.78,14.78,0,0,1,18,6.69a17.43,17.43,0,0,1,6.54,2,15.24,15.24,0,0,1,5.83,5.65l.47.87.36.93a4.33,4.33,0,0,1,.28.93c.08.32.13.63.18.95a20.43,20.43,0,0,1,.26,3.72,11.81,11.81,0,0,1-2,6.79,7.54,7.54,0,0,1-2.67,2.14,11.17,11.17,0,0,1-3.11,1.08,19.94,19.94,0,0,1-11.83-1.65,15.78,15.78,0,0,1-7.82-6.94,9.27,9.27,0,0,1-.85-2.56,8.88,8.88,0,0,1,0-2.91A10.92,10.92,0,0,1,5,13.94Z"
			}), r.a.createElement("path", {
				className: p.a.cls6,
				d: "M5.47,18.27a2.52,2.52,0,0,1-.57.46v-.18a2.68,2.68,0,0,1,.69.6l.09.11s-.07.07-.11.11l-.21.2-.22.2c-.09.09,0,.2.11.22l.28.11.7.27.79.31-.84.14a.69.69,0,0,0-.18,0,.72.72,0,0,0-.25.17l-.07.09.17,0,.13,0h.07l.09,0,.77.26,1,.33-1,.44c-.33.14-.27.19-.31.21l.06,0h0l.11,0,.93.36.86.33-.8.51-.14.09s0,0,0,0l1.19.35.71.2L9.15,25c-.1.15-.06.1-.08.11l0,0s0,0,0,0h0l.24.06c.35.08.68.14,1,.19l.52.08-.19.45c0,.07-.1.19-.12.21a.07.07,0,0,1,0,0l-.09.08a.43.43,0,0,0-.09.1l0,.06h.63a6,6,0,0,1,1,.08c-.31.07-.62.19-1,.3a15.8,15.8,0,0,1-1.72.39c0-.06,0-.07,0-.16l0-.22a2.22,2.22,0,0,1,.1-.41,2.38,2.38,0,0,1,.34-.51,1.42,1.42,0,0,0,.14-.22l0-.08.41.67a2.73,2.73,0,0,1-.49-.07l-1-.25L8,25.79c-.22-.05-.51-.08-.56-.15.24-.2.53-.46.73-.66a4,4,0,0,1,.32-.46l.18.45-.89-.29-1.06-.33-.51-.19c-.08,0,0,0,0-.08L6.38,24l.2-.19a5.93,5.93,0,0,1,.87-.62l0,.34-1-.38a10,10,0,0,1-1.17-.5c.59-.35.94-.87,1.36-1v.42l-.86-.3a6.78,6.78,0,0,1-1.11-.46l-.22-.12c0-.06.12-.13.17-.19a3.19,3.19,0,0,1,.4-.33,2.44,2.44,0,0,1,.51-.26,2.16,2.16,0,0,1,.53-.12l-.06.54-.72-.32c-.11-.06-.33-.14-.47-.23A.6.6,0,0,1,4.59,20c-.13-.38.79-.81.61-.78A1.28,1.28,0,0,0,5,18.94l-.22-.25-.06-.07.06,0A6.68,6.68,0,0,1,5.47,18.27Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M14.41,9.83C15,6.68,10.85,5.27,7.89,6.28c-4.72,1.16-5.22,10.26.6,9.54"
			}), r.a.createElement("path", {
				d: "M8.49,15.83a3.38,3.38,0,0,1-2,0,7.27,7.27,0,0,1-.75-.35c-.21-.17-.43-.34-.63-.52l-.46-.58c-.12-.19-.2-.38-.29-.53A6.29,6.29,0,0,1,5.87,6.7a4.64,4.64,0,0,1,1.49-.86,6.7,6.7,0,0,1,1.57-.4A6.78,6.78,0,0,1,12,5.76,4.29,4.29,0,0,1,14.3,7.48a2.85,2.85,0,0,1,.27,2.38,3.2,3.2,0,0,0-1-2A6.68,6.68,0,0,0,12.12,7a5.48,5.48,0,0,0-4.26-.4A4.32,4.32,0,0,0,5.06,9.1c-1,2.27-.52,4.79.89,5.88a4.64,4.64,0,0,0,.61.38,4.6,4.6,0,0,0,.76.29C7.84,15.78,8.33,15.79,8.49,15.83Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M33.24,5.42c-4-.29-4.62,6.08-.28,6.25C36.81,11.83,37,5.5,33.24,5.42Z"
			}), r.a.createElement("path", {
				d: "M33.24,5.42a2.17,2.17,0,0,1,1.67.41A3.4,3.4,0,0,1,36.18,8a3.79,3.79,0,0,1-.79,3.15,3,3,0,0,1-1.55.91,4.4,4.4,0,0,1-.88.1L32.11,12a3.24,3.24,0,0,1-2.3-1.81,3.81,3.81,0,0,1-.12-2.75,3.34,3.34,0,0,1,1.55-1.9,3.21,3.21,0,0,1,2-.3,4.63,4.63,0,0,0-1.7.89,5.56,5.56,0,0,0-.85,1.21,2.77,2.77,0,0,0,.35,3.33,2.51,2.51,0,0,0,1.5.71l.42.06.4,0a2.65,2.65,0,0,0,.75-.17A2.79,2.79,0,0,0,35.65,9a3.62,3.62,0,0,0-.5-2.38,2.81,2.81,0,0,0-1-.87l-.3-.16-.28-.08Z"
			}), r.a.createElement("path", {
				className: p.a.cls4,
				d: "M16.13,19.35A2.7,2.7,0,0,1,14,16a3.25,3.25,0,0,1,3.21-2.54C21.33,13.66,19.73,20.06,16.13,19.35Z"
			}), r.a.createElement("path", {
				d: "M16.13,19.34a4.16,4.16,0,0,0,1.53-.27,3,3,0,0,0,1.43-1.56,3.28,3.28,0,0,0,0-2.59A2.19,2.19,0,0,0,17,13.76a3.09,3.09,0,0,0-2.77,2.78,2.49,2.49,0,0,0,.51,1.78,2.73,2.73,0,0,0,1.39.92,2.28,2.28,0,0,1-1.8-.64A2.35,2.35,0,0,1,13.57,17a3.82,3.82,0,0,1,2-3.33,3.11,3.11,0,0,1,3.32.23,2.45,2.45,0,0,1,.56.6,3.55,3.55,0,0,1,.29.74,3.37,3.37,0,0,1,0,1.48A3.57,3.57,0,0,1,18.43,19a2.37,2.37,0,0,1-1.31.49l-.34,0-.29,0Z"
			}), r.a.createElement("path", {
				className: p.a.cls4,
				d: "M27,21.4c-.36-1,.07-4.84,2-3.82,1.28.7.19,4-.82,4.55C27.59,22.45,27.22,22,27,21.4Z"
			}), r.a.createElement("path", {
				d: "M27,21.4c.08,0,.22.54.64.7s.83-.5,1-.76a6.26,6.26,0,0,0,.54-1.7A2.21,2.21,0,0,0,29,18.07c0-.08-.13-.11-.19-.16l-.28-.11a.59.59,0,0,0-.45.09A2.21,2.21,0,0,0,27.41,19a6.12,6.12,0,0,0-.31,2.4,2.86,2.86,0,0,1-.43-2.3,4.87,4.87,0,0,1,.61-1.23,1.28,1.28,0,0,1,1.2-.58,1.31,1.31,0,0,1,1,.69,2.24,2.24,0,0,1,.2,1.09A5.3,5.3,0,0,1,29.25,21a2.62,2.62,0,0,1-1.1,1.37.72.72,0,0,1-.53,0,.7.7,0,0,1-.4-.35A1.49,1.49,0,0,1,27,21.4Z"
			}), r.a.createElement("path", {
				d: "M26.34,24.19a12.22,12.22,0,0,1-5.91-.48,7.19,7.19,0,0,1-2.56-1.88s-.17,2-.17,2.13c0,2.74,2.73,4.42,5,2.55.55-.46,1.67-1.5,2.19-2"
			}), r.a.createElement("path", {
				d: "M24.85,24.51a9,9,0,0,1-1.28,1.37,13.06,13.06,0,0,1-1.09,1,3.48,3.48,0,0,1-1.12.57A3,3,0,0,1,18,26.31a4,4,0,0,1-.74-1.77l0-.48c0-.17,0-.33,0-.47l.06-.91a5.79,5.79,0,0,1,.07-.76l.05-.15c0-.05.06,0,.09-.05l.16,0,.07,0h0l-.09-.25h0c0-.06,0-.17.07-.18a.44.44,0,0,1,.2.07l.26.25a7,7,0,0,0,2.2,1.69,8.15,8.15,0,0,0,2.08.62,21.63,21.63,0,0,0,3.79.22,7.62,7.62,0,0,1-2.15.62,5.55,5.55,0,0,1-2,0,8.76,8.76,0,0,1-2.31-.87,9.56,9.56,0,0,1-1-.66l-.43-.36c-.14-.13-.15-.16-.24-.25l-.16-.17a.27.27,0,0,0-.07-.08s0,.06,0,.1l0,.43a8.66,8.66,0,0,0-.07,1.35,3.18,3.18,0,0,0,1,2.21,2.58,2.58,0,0,0,2,.65,3.46,3.46,0,0,0,1.77-.88C23.35,25.56,24.6,24.68,24.85,24.51Z"
			}), r.a.createElement("path", {
				className: p.a.cls4,
				d: "M19,39.36C12.27,41.12,3.41,42.68-3.4,44.22a48.19,48.19,0,0,0,10.83,9,5.38,5.38,0,0,0,1.68.65,5.09,5.09,0,0,0,3.5-1.07A27.16,27.16,0,0,0,18,47.76Q20.38,45,22.6,42.1"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M26.84,53.17a5.89,5.89,0,0,1-1.51-.63A2.4,2.4,0,0,1,24,50.1a2.1,2.1,0,0,1,1.21-1.28,6.69,6.69,0,0,1,1.77-.4,42.66,42.66,0,0,0,6.51-1.5c1-.3,1.48.1,1.87,1.06a3,3,0,0,1-.08,2.38c-1,2.21-3.9,2.87-6.12,3A7.19,7.19,0,0,1,26.84,53.17Z"
			}), r.a.createElement("path", {
				d: "M26.85,53.16a12.24,12.24,0,0,0,2.52.05,9.91,9.91,0,0,0,3.42-.88A5.13,5.13,0,0,0,34.45,51a3,3,0,0,0,.71-1.92,2.41,2.41,0,0,0-.21-1,1.67,1.67,0,0,0-.52-.76.92.92,0,0,0-.76,0l-1.09.34a37.62,37.62,0,0,1-3.84.93c-.63.12-1.27.21-1.89.29a5.35,5.35,0,0,0-1.62.39,1.39,1.39,0,0,0-.57,2.26A4.51,4.51,0,0,0,26.88,53a3.79,3.79,0,0,1-2.79-1.19,2.13,2.13,0,0,1-.58-1.68A1.88,1.88,0,0,1,24.16,49a3.44,3.44,0,0,1,1.63-.72c.55-.1,1.05-.12,1.55-.18,1-.12,1.94-.28,2.86-.47s1.8-.42,2.64-.67a4,4,0,0,1,1.34-.27,1.42,1.42,0,0,1,1.13.8,3.33,3.33,0,0,1,.36,2.48,4.14,4.14,0,0,1-1.28,2,7.48,7.48,0,0,1-3.85,1.55,9.11,9.11,0,0,1-2.17,0A5.72,5.72,0,0,1,26.85,53.16Z"
			}), r.a.createElement("path", {
				className: p.a.cls7,
				d: "M29.83,58c-.66,2.08.89,5,5.59,6.51,4.37,1.41,7.12-1.27,7.78-3.36s-1.64-3-5.4-4.18S30.48,55.9,29.83,58Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M42.73,62.91c.38-.17.38-.7.35-1.12-.16-2.17.54-4.3,1.05-6.42a35.6,35.6,0,0,0,.75-4.1A5.9,5.9,0,0,0,38,44.81a8.09,8.09,0,0,0-4.88,2.93A13.74,13.74,0,0,0,30.56,53c-.5,1.84-1.62,6-1,8"
			}), r.a.createElement("path", {
				d: "M29.56,61a2.86,2.86,0,0,1-.29-1.19,12.94,12.94,0,0,1,.13-2.54,51.74,51.74,0,0,1,1.12-5.18A11.88,11.88,0,0,1,34,46.19a8.46,8.46,0,0,1,3.19-1.76,6.94,6.94,0,0,1,3.62,0,6.25,6.25,0,0,1,4.62,7.1l-.52,2.65c-.29,1.74-.9,3.29-1.22,4.76a13.73,13.73,0,0,0-.33,2.11c0,.35,0,.66,0,1a1.78,1.78,0,0,1-.1.55.74.74,0,0,1-.41.44.91.91,0,0,0,.27-1c-.06-.33-.15-.69-.19-1.07a11.15,11.15,0,0,1,0-2.38,32.73,32.73,0,0,1,.72-3.75l.52-2.2a13.22,13.22,0,0,0,.4-2.13,5.22,5.22,0,0,0-1.31-3.69A5.58,5.58,0,0,0,40,45.07a6.12,6.12,0,0,0-3.53.45,9.37,9.37,0,0,0-4.48,4.66,30.36,30.36,0,0,0-1.75,5.56c-.2.85-.48,2-.62,3A6.91,6.91,0,0,0,29.56,61Z"
			}), r.a.createElement("path", {
				className: p.a.cls6,
				d: "M37.27,49a1.25,1.25,0,0,1-.07.34l-.06-.06.64-.33.49-.25.07,0s0,0,0,.06l0,.15.07.31.07.4s0,.12,0,.13l.12-.1a.94.94,0,0,0,.25-.3,5.09,5.09,0,0,0,.29-.7s.09.15.14.25l.5,1.35-.34-.05.1-.18,0-.09a1.54,1.54,0,0,0,.08-.19A9.75,9.75,0,0,0,40,48.48c.14.26.34.85.54,1.21l.08.15,0,.08.1.15.21.29-.45.11,0-.17,0-.26a6.58,6.58,0,0,0,0-.78,1.2,1.2,0,0,0,.25-.14l.28,0,.61,1.1.28.51-.55.11a3.38,3.38,0,0,0-.32-1.7l.53-.28a12.64,12.64,0,0,0,1.25,1.89l-.46.25a8.24,8.24,0,0,0-.31-.92c0-.09-.15-.39-.26-.62l-.33-.66,1.31.51.66.28-.18.2a1.76,1.76,0,0,0-.69-.75,1.58,1.58,0,0,1,.91.63l.16.23-.29-.07-.79-.19c-.13,0-.12,0-.12,0l.06.05s0,.08.07.15l.07.2a7.91,7.91,0,0,1,.22.78l-.42.23a13.67,13.67,0,0,1-1.26-2l.28-.14a3.85,3.85,0,0,1,.32,1.94l0,.39-.18-.34-.53-1c-.06-.09-.12-.22-.16-.28V50a3.51,3.51,0,0,1-.05.55l0,.29-.18-.23c-.15-.19-.32-.46-.41-.6l-.09-.17,0-.09,0,0v0a1.3,1.3,0,0,1-.29.63l-.18.25-.1-.3-.23-.68-.06-.15s0-.16,0-.06l-.07.14-.06.07a1.35,1.35,0,0,1-.17.17,2.07,2.07,0,0,1-.4.28l-.1.06,0-.11,0-.22c0-.28-.09-.56-.1-.67a1.38,1.38,0,0,0,0-.2L38,49c-.35.13-.72.27-.86.31h0v0Z"
			}), r.a.createElement("path", {
				d: "M44,28.63c0-.21,1.82-1.47,2.41-2.09s1.17-1.11,1.64-1.63c.25-.33.15-.3.14-.34a.06.06,0,0,0-.06,0l-.59,0-.54,0a2,2,0,0,1-.93-.08.89.89,0,0,1-.48-.6,1.08,1.08,0,0,1,.16-.8,8.24,8.24,0,0,1,.81-1c.22-.24.45-.47.68-.69a12.6,12.6,0,0,1,2.67-2A7.94,7.94,0,0,1,48.24,22,12.13,12.13,0,0,0,47,23l-.41.4c-.08.08-.17.27,0,.35a1.26,1.26,0,0,0,.4,0l.7,0H48a1.7,1.7,0,0,1,.45,0,.64.64,0,0,1,.49.64,1.28,1.28,0,0,1-.26.78,2.75,2.75,0,0,1-.45.5l-.87.79a17.69,17.69,0,0,1-1.69,1.29A9.78,9.78,0,0,1,44,28.63Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M39,27.34a5,5,0,0,0-2-2.39,3.14,3.14,0,0,0-1.32-.26,4.73,4.73,0,0,0-3.19,1.2A4.45,4.45,0,0,0,31,29.06c0,.18.05,1.71.15.5"
			}), r.a.createElement("path", {
				d: "M31.12,29.56c.05,0,.08.17.08.39a.87.87,0,0,0,0,.1v0s0,0-.09.07a.14.14,0,0,1-.15,0l0,0s0-.06,0-.08a1.62,1.62,0,0,1,0-.19c0-.14,0-.28,0-.43a5.21,5.21,0,0,1,.11-1.69,4.16,4.16,0,0,1,1-2,5,5,0,0,1,3.85-1.63,3.32,3.32,0,0,1,1.87.62,4.8,4.8,0,0,1,1.51,2.58,6.84,6.84,0,0,1-1.2-.81,5,5,0,0,1-.78-.65A2.31,2.31,0,0,0,35,25a3.78,3.78,0,0,0-2.07.78,4.64,4.64,0,0,0-1.67,3.09l-.12.92,0,.11v0h0a.13.13,0,0,0-.08,0c-.05,0,0,0-.09,0s0-.11,0-.16Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M43.74,49.05a2.43,2.43,0,0,1,2.42.74,5,5,0,0,1,1.39,2,3.31,3.31,0,0,1-.06,2.44,4,4,0,0,1-1.33,1.44,3.07,3.07,0,0,1-1.77.73A2.59,2.59,0,0,1,43.11,56a4,4,0,0,1-1.69-2.2c-.28-.93-1.57-1.62-1-2.38"
			}), r.a.createElement("path", {
				d: "M40.39,51.4c0,.06-.08.24,0,.47a2.55,2.55,0,0,0,.59.82,3.34,3.34,0,0,1,.71,1.12,2.9,2.9,0,0,0,.48.82,3.47,3.47,0,0,0,2.12,1.25A3.48,3.48,0,0,0,46.4,54.7a2.86,2.86,0,0,0,.15-3.64c-.71-1.13-1.78-2.06-2.74-1.84a1.18,1.18,0,0,1,.8-.44,2.49,2.49,0,0,1,1.14.15A3.2,3.2,0,0,1,47.22,50a4.59,4.59,0,0,1,.65,4,3.53,3.53,0,0,1-1.11,1.49,6.88,6.88,0,0,1-1.41.93,2.26,2.26,0,0,1-1.67.12,3.92,3.92,0,0,1-1.34-.77,4.18,4.18,0,0,1-.91-1.11A10.05,10.05,0,0,1,41,53.55c-.15-.29-.46-.71-.67-1.16a1.07,1.07,0,0,1-.11-.66A.74.74,0,0,1,40.39,51.4Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M56.48,39.84c.38-4-2.18-6.9-5.12-9.28a18.11,18.11,0,0,0-9.42-4.16,12.74,12.74,0,0,0-5.16.5,14.25,14.25,0,0,0-4.75,3,12.39,12.39,0,0,0-1.86,1.76,8,8,0,0,0-1.43,6.52c1.18,6,7.6,9.65,13,10.63,3.43.62,7.43.64,10.55-1.44C54.39,46,56.09,43.85,56.48,39.84Z"
			}), r.a.createElement("path", {
				d: "M56.49,39.84a8.51,8.51,0,0,1-.28,2.25A9,9,0,0,1,54,46.23a10.28,10.28,0,0,1-4.71,2.71,16,16,0,0,1-4.44.49,20.28,20.28,0,0,1-11.86-4,13,13,0,0,1-4.15-5.13,9.89,9.89,0,0,1-.53-1.59A7.59,7.59,0,0,1,28,37.07a9.05,9.05,0,0,1,.35-3.28,8,8,0,0,1,1.33-2.57,13.92,13.92,0,0,1,2-1.92,15.09,15.09,0,0,1,4.61-2.9A14.24,14.24,0,0,1,46.57,27a21.82,21.82,0,0,1,7.49,5.49,11.09,11.09,0,0,1,2.19,3.58,8.23,8.23,0,0,1,.41,3.76,9,9,0,0,0-.86-3.6,11.66,11.66,0,0,0-2.53-3.34,29.35,29.35,0,0,0-5.55-4.05A14.75,14.75,0,0,0,40,26.74a11.51,11.51,0,0,0-3.8.74,12.83,12.83,0,0,0-3.22,2A14.5,14.5,0,0,0,30.23,32a7.09,7.09,0,0,0-1.32,3.24,8.15,8.15,0,0,0,.2,3.41,9.67,9.67,0,0,0,1.36,3A11.91,11.91,0,0,0,32.6,44.1,15.11,15.11,0,0,0,35.14,46a19.85,19.85,0,0,0,5.54,2.24c3.75.85,7.56.89,10.55-.6a9.05,9.05,0,0,0,4-3.8A12.41,12.41,0,0,0,56.49,39.84Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M51.92,33a4.71,4.71,0,0,1,5-1.22c1.86.62,3,2.87,2.75,4.89a5.69,5.69,0,0,1-1.46,3.19c-.69.75-2.1,1.93-3.1,1.56"
			}), r.a.createElement("path", {
				d: "M55.1,41.44c.06,0,.24,0,.51,0a2.81,2.81,0,0,0,.94-.4,5.57,5.57,0,0,0,1.59-1.53,6,6,0,0,0,1-2.51,4.81,4.81,0,0,0-.41-2.58,4,4,0,0,0-1.33-1.63,3.75,3.75,0,0,0-1.9-.61,4.51,4.51,0,0,0-3.4,1,2.56,2.56,0,0,1,1.19-1.63A3.14,3.14,0,0,1,55,31a6.16,6.16,0,0,1,2.12.5,4.39,4.39,0,0,1,1.58,1.25A5.89,5.89,0,0,1,59.93,36a5.71,5.71,0,0,1-2.49,5,3.25,3.25,0,0,1-1.32.57A1.4,1.4,0,0,1,55.1,41.44Z"
			}), r.a.createElement("path", {
				className: p.a.cls6,
				d: "M43.86,47.39a.36.36,0,0,0,.35.23c.08,0,.18,0,.21-.33,0,0,0-.07.07-.06l.17.13.18.12.13-.21c.09-.13.21-.4.26-.3.16.56.38.59.61.63l-.12.09a2.27,2.27,0,0,0,0-.64.81.81,0,0,0,.06-.44c.06,0,.2.14.28.17l.24.34.26.38a.26.26,0,0,0,.12.12s0,0,.06-.12.08-.28-.1-1.12c.17.1.2.08.22.07a.09.09,0,0,0,0-.05l.14.12.18.21a.74.74,0,0,1,.14.2c.06.1.1.26.16.35s.18,0,.3-.05a.3.3,0,0,0,.08-.19.64.64,0,0,0,0-.25,2.59,2.59,0,0,0-.1-.4.65.65,0,0,0,.2-.21.71.71,0,0,0,.27-.09,3.23,3.23,0,0,0,.45.4l.15.11.08,0,0,0v0l-.15-.79-.18-1,1.3,1,.27.21h0v-.1l0-.18a3.26,3.26,0,0,0-.06-.38l-.21-.81,1.18.58c.15.08.07,0,.1.06l0,0v0h0V45a3.49,3.49,0,0,0,0-.57v-.18l.13-.07a.42.42,0,0,1,.48,0c.12.09.05,0,.08.07l.05.08c0,.07.15.07.12,0v-.07s0-.06.06.14L52,44.08c-.16-.48-.25-.64-.2-.74.25.17.49.33.64.41a1.26,1.26,0,0,0,.33.09.75.75,0,0,0,.26,0,1.63,1.63,0,0,0-.27-.67,1.58,1.58,0,0,1,.5.82,1.32,1.32,0,0,1-.56.13h-.28l0,.06,0,.06c.06.14-.1-.29,0-.12l.07.14,0,.07.13.33a.72.72,0,0,1,0,.36.41.41,0,0,1-.28.31.58.58,0,0,1-.38,0,.84.84,0,0,1-.35-.33,1.06,1.06,0,0,0-.18-.22s0,0,0-.06,0-.15,0-.11l.21-.16a5.44,5.44,0,0,1,0,.7,7.94,7.94,0,0,0,.06,1.07l-.56-.36L51,45.62l-.15-.09c-.06,0-.17-.11-.21-.12a4,4,0,0,1,0,.55c0,.19,0,.41,0,.6l0,.29a1,1,0,0,1-.23-.15l-1.16-.9.22,1.26,0,.23s0,0,0,.05l0,0-.11,0a3.89,3.89,0,0,1-.42-.19l-.35-.21-.16-.12a1.23,1.23,0,0,1-.2-.19c0,.1.06.2.08.29a.59.59,0,0,1,0,.26.74.74,0,0,1-.18.39.77.77,0,0,1-.38.22.52.52,0,0,1-.43-.12c-.08-.08-.09-.2-.15-.29s0-.05,0-.05l0,.08a.43.43,0,0,1,0,.16.46.46,0,0,1-.06.23.44.44,0,0,1-.24.22.37.37,0,0,1-.35-.09,1.22,1.22,0,0,1-.16-.18l-.05-.09-.1-.16c0-.06-.12-.19-.14-.19a1.24,1.24,0,0,1,0,.27c0,.07,0,.12,0,.22l0,.15-.14,0h0a.87.87,0,0,1-.46-.2.53.53,0,0,1-.16-.23l0-.07h0v0l-.07.09a1.93,1.93,0,0,1-.19.26l-.22-.19-.12-.11s0,.1,0,.07a.35.35,0,0,1-.2.18c-.07,0-.11,0-.09,0a.33.33,0,0,1-.31-.17A.21.21,0,0,1,43.86,47.39Z"
			}), r.a.createElement("path", {
				className: p.a.cls6,
				d: "M54.8,39.38a5,5,0,0,0,.16.71L54.83,40a.44.44,0,0,0,.18-.51l.25,0a1.05,1.05,0,0,0,.09.34,1.37,1.37,0,0,0,.26.4l-.32,0a1.27,1.27,0,0,0,.13-.19,1.18,1.18,0,0,0,.15-.55c.2-.07.25-.12.27-.15a1.57,1.57,0,0,0,.29,0,4.36,4.36,0,0,0,.28.64c.07.11.12.17.18.25l0,.05-.53.08a2.37,2.37,0,0,0,.09-.36,1.93,1.93,0,0,0,0-.32,2.2,2.2,0,0,0,0-.45l.3-.07.31,0a1,1,0,0,0,.39.49l-.42.29c0-.32-.06-.6-.07-.85l.4-.16a.25.25,0,0,0,.24.15c.08,0,.06-.13.1-.31a2.17,2.17,0,0,1,.12.26,1.29,1.29,0,0,1,0,.19.18.18,0,0,1,0,.1l-.08,0a.57.57,0,0,1-.42.08.7.7,0,0,1-.42-.24l.5-.2a2.09,2.09,0,0,1,.12.53v.31l0,.57-.41-.3c-.17-.12-.11-.1-.15-.15a1.38,1.38,0,0,1-.11-.24s0,.1,0,.15a3.14,3.14,0,0,1-.18.65l-.08.22-.13-.18a3,3,0,0,1-.21-.33L56,40c0-.08-.1-.26-.11-.22a.94.94,0,0,1,0,.3.4.4,0,0,1-.07.15,1.08,1.08,0,0,1-.18.24l-.13.14-.12-.15a1.7,1.7,0,0,1-.36-1l.34-.06a.66.66,0,0,1,0,.48.59.59,0,0,1-.34.32l-.14,0,0-.11A1.48,1.48,0,0,1,54.8,39.38Z"
			}), r.a.createElement("path", {
				className: p.a.cls4,
				d: "M45.58,36.55a1.63,1.63,0,0,1-.08-.37,2.88,2.88,0,0,1,.12-.92A3.38,3.38,0,0,1,46.89,33a2.43,2.43,0,0,1,3.2.53c1.39,1.59-.16,4.18-2.07,4.29a2.88,2.88,0,0,1-1.61-.33A1.85,1.85,0,0,1,45.58,36.55Z"
			}), r.a.createElement("path", {
				d: "M45.58,36.54a2.4,2.4,0,0,0,1,.94,2.8,2.8,0,0,0,1.88.14,3,3,0,0,0,1.69-1.57A2.08,2.08,0,0,0,50,33.88a2.41,2.41,0,0,0-1.61-.94,2.16,2.16,0,0,0-1.66.57A3.48,3.48,0,0,0,45.88,35a2.64,2.64,0,0,0-.22,1.49,2.27,2.27,0,0,1-.16-1.64A3,3,0,0,1,46,33.44a2.63,2.63,0,0,1,3.27-.66,2.8,2.8,0,0,1,1.13,1.08,2.31,2.31,0,0,1,.28,1.44,3.22,3.22,0,0,1-1.38,2.23,2.76,2.76,0,0,1-2.27.39A2.16,2.16,0,0,1,46,37.31,1.84,1.84,0,0,1,45.58,36.54Z"
			}), r.a.createElement("path", {
				className: p.a.cls4,
				d: "M35.34,29.49a1.81,1.81,0,0,1,1.9-.24,1.52,1.52,0,0,1,.65,1.33,2.77,2.77,0,0,1-1.82,2.71,1.51,1.51,0,0,1-2-1.76A2.63,2.63,0,0,1,35.34,29.49Z"
			}), r.a.createElement("path", {
				d: "M35.34,29.5a6.72,6.72,0,0,0-.73.81,2.6,2.6,0,0,0-.4,1.43,1.36,1.36,0,0,0,.93,1.33,1.78,1.78,0,0,0,1.62-.49,2.65,2.65,0,0,0,.71-2.71,1,1,0,0,0-1-.61,2.5,2.5,0,0,0-1.13.3,1.88,1.88,0,0,1,1.16-.7,1.29,1.29,0,0,1,1.23.47,2.16,2.16,0,0,1,.3,1.47,3.57,3.57,0,0,1-.4,1.27,2.62,2.62,0,0,1-1.88,1.4,1.58,1.58,0,0,1-1.77-1,2.45,2.45,0,0,1,.14-1.84,2.18,2.18,0,0,1,.6-.77A2.66,2.66,0,0,1,35.34,29.5Z"
			}), r.a.createElement("path", {
				d: "M36,34.9a19,19,0,0,0,8.08,2.8,20.79,20.79,0,0,1-.92,2.17A8.13,8.13,0,0,1,41.6,42a4,4,0,0,1-4.33.91c-1.18-.59-1.06-2.08-1.06-3.2a29.23,29.23,0,0,1,.4-4.38"
			}), r.a.createElement("path", {
				d: "M36.61,35.37c0,.12-.12,1.12-.2,2.29a25.35,25.35,0,0,0,0,3.23,2.29,2.29,0,0,0,.7,1.67A2.65,2.65,0,0,0,38.9,43a4.66,4.66,0,0,0,3.26-2,9.77,9.77,0,0,0,1-1.75l.4-.91.1-.22,0-.11h0l-.43-.06-.6-.11q-.6-.12-1.17-.27a18.06,18.06,0,0,1-2.15-.71A15.64,15.64,0,0,1,36,35c.66.27,1.59.66,2.49,1s1.76.56,2.2.71a15.88,15.88,0,0,0,1.67.51l.82.18.39.08.5.07.15.08h0s.06,0,0,0v0l0,.07c0,.1,0,.24-.08.37l-.24.53-.46,1a10,10,0,0,1-1.12,1.79,5.09,5.09,0,0,1-3.3,2,3.27,3.27,0,0,1-1.81-.27,2,2,0,0,1-1.07-1.37A6.46,6.46,0,0,1,36,40.14c0-.5,0-1,.06-1.48A20.63,20.63,0,0,1,36.61,35.37Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M54.28,16.26a2.92,2.92,0,0,1,.28,2.67,3.34,3.34,0,0,1-2.1,1.88,2.72,2.72,0,0,1-.86.14A3.19,3.19,0,0,1,50,20.49a2.71,2.71,0,0,1-1.62-3.15A3.16,3.16,0,0,1,52.33,15a3.38,3.38,0,0,1,2.54,2.22"
			}), r.a.createElement("path", {
				d: "M54.86,17.18a4.77,4.77,0,0,0-1.11-1.33,3.42,3.42,0,0,0-2.26-.69,2.77,2.77,0,0,0-2.27,1.48A3,3,0,0,0,48.83,18a1.87,1.87,0,0,0,.43,1.16,3.77,3.77,0,0,0,2,1.19,2.69,2.69,0,0,0,2-.53,2.62,2.62,0,0,0,1.11-1.64,2.91,2.91,0,0,0-.23-1.81,2.39,2.39,0,0,1,1,2,2.66,2.66,0,0,1-.81,2,4.28,4.28,0,0,1-2.26,1,3.51,3.51,0,0,1-2.18-.55,4,4,0,0,1-1.49-1.41,2.61,2.61,0,0,1-.3-1.92,3.65,3.65,0,0,1,2.17-2.67,3.73,3.73,0,0,1,3,.26,3.07,3.07,0,0,1,1.16,1.11A2.56,2.56,0,0,1,54.86,17.18Z"
			}), r.a.createElement("path", {
				className: p.a.cls8,
				d: "M28.91,55c0,1.3-1.84.76-2.86.65l-1.77-.19a4.85,4.85,0,0,1-1.42-.23c-.74-.34-2.58-7.68-2.95-9.25a2.41,2.41,0,0,1,.32-1.41c.27-.44.76-.34,1.2-.27l1.44.26,1.72.35c.55.13,1.08.2,1.27.8.13.37.25.74.37,1.11l.94,2.93.36,1.1c.39,1.22,1,2.39,1.3,3.62A1.89,1.89,0,0,1,28.91,55Z"
			}), r.a.createElement("path", {
				d: "M28.91,55c-.06-.07-.08-.41-.28-.91S28.2,53,27.91,52.3c-.59-1.4-1.07-3-1.41-3.93l-.88-2.44c-.11-.39-.33-.49-.76-.59l-1.33-.25c-.86-.16-1.82-.34-2.61-.44a.4.4,0,0,0-.32.1,1.67,1.67,0,0,0-.21.46,1.82,1.82,0,0,0-.1.54.78.78,0,0,0,0,.22l.08.32c.37,1.46.75,2.92,1.15,4.33a32.94,32.94,0,0,0,1.3,4c.19.32.12.35.48.43s.61.08.95.12l1.87.26a14.7,14.7,0,0,0,1.69.27,1.4,1.4,0,0,0,.69-.12.64.64,0,0,0,.27-.54.7.7,0,0,1-.16.66,1.33,1.33,0,0,1-.8.31A11.5,11.5,0,0,1,26,56l-1.74-.08a4.86,4.86,0,0,1-1.33-.18.89.89,0,0,1-.29-.15,1.06,1.06,0,0,1-.26-.29,3.15,3.15,0,0,1-.22-.46c-.13-.3-.22-.59-.32-.88-.18-.57-.35-1.14-.5-1.7C21,51.12,20.73,50,20.46,49s-.52-2-.73-3.1a2.41,2.41,0,0,1,.13-.81,1.77,1.77,0,0,1,.37-.72,1,1,0,0,1,.81-.23c.27,0,.49.07.73.11.95.16,1.85.34,2.73.51a2.29,2.29,0,0,1,1.32.52,1.57,1.57,0,0,1,.32.65l.2.6c.53,1.58,1,3.06,1.44,4.45A18.72,18.72,0,0,1,28.91,55Z"
			}), r.a.createElement("path", {
				className: p.a.cls9,
				d: "M26.58,49.75c.23.7.46,1.41.71,2.11.12.35.26.71.39,1.06,0,.12.28.67.19.75h0a5.32,5.32,0,0,1-1.18-.16l-1.26-.22-1.05-.2a1.37,1.37,0,0,1-.49-.13c-.17-.12-1.87-5.31-2.38-7a.29.29,0,0,1,.35-.36c.64.17,2.83.49,3.12.58a1.63,1.63,0,0,1,.48.13c.14.09.14.22.18.36s.16.53.24.79C26.08,48.21,26.33,49,26.58,49.75Z"
			}), r.a.createElement("path", {
				d: "M26.58,49.75c0-.09-.34-1-.67-2L25.66,47l-.12-.39c0-.13-.05-.25-.15-.3a8.59,8.59,0,0,0-1.26-.26l-1.79-.3-.46-.08c-.16-.05-.23,0-.29.07a.23.23,0,0,0,0,.14l.07.23.15.45L23,50.17l.51,1.49.27.74.14.35c0,.08,0,.09,0,.11l.14,0,2.94.56a4.14,4.14,0,0,0,.68.1c.08,0,.06,0,.07,0a1.86,1.86,0,0,0-.1-.31L27.23,52l-.69-2.22c.26.57.59,1.42.9,2.22l.46,1.12a1.34,1.34,0,0,1,.09.26.47.47,0,0,1,0,.14.37.37,0,0,1,0,.21c-.05.12-.25.12-.31.12h-.19l-2.47-.49c-.41-.1-.77-.14-1.18-.26a.26.26,0,0,1-.13-.14l-.06-.14-.11-.27L23.38,52,22,47.91l-.58-1.85a.4.4,0,0,1,.1-.5c.17-.13.37,0,.5,0l.88.16,1.67.31a8,8,0,0,1,.79.17.42.42,0,0,1,.27.35c0,.12.07.25.1.37Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M43.91,52.83c-1.93.15-3-2-4.47-2.85A3.66,3.66,0,0,0,38,49.45c-1.76-.14-2.19,1.76-2,3.17a5.54,5.54,0,0,0,2.93,4,7.69,7.69,0,0,0,5.59.51,3.27,3.27,0,0,0,2.54-3"
			}), r.a.createElement("path", {
				d: "M47,54.12a1.4,1.4,0,0,1,0,.78,2.85,2.85,0,0,1-.78,1.42,5.56,5.56,0,0,1-3.07,1.4,7.62,7.62,0,0,1-4.3-.51A6.19,6.19,0,0,1,35.72,54,4.65,4.65,0,0,1,35.78,50a2.29,2.29,0,0,1,.78-.83,2.32,2.32,0,0,1,1.09-.32,3.53,3.53,0,0,1,1.85.53,11.2,11.2,0,0,1,2.33,2.15,3.09,3.09,0,0,0,2.07,1.1,2,2,0,0,1-1.27.1,4.18,4.18,0,0,1-1.4-.66c-.83-.59-1.48-1.17-1.8-1.43a2.53,2.53,0,0,0-2.15-.76c-.69.19-1,1.06-1.1,1.84a4.84,4.84,0,0,0,1.83,4,6.46,6.46,0,0,0,3.74,1.36,6.79,6.79,0,0,0,3.41-.6,3.87,3.87,0,0,0,1.39-1.14A2.79,2.79,0,0,0,47,54.12Z"
			}), r.a.createElement("path", {
				d: "M24.54,49.69c-.13,0-.35-.76-.5-1-.07-.12-.13-.25-.19-.38a1.26,1.26,0,0,1-.16-.5.53.53,0,0,1,.23-.48.51.51,0,0,1,.62.06,1.11,1.11,0,0,1,.28.58,7.21,7.21,0,0,1,.24,2v.23l-.13,0a.5.5,0,0,1-.67-.29c.23.08.48-.07.44-.17l-.15.3a.85.85,0,0,1-.2-.47,6,6,0,0,0,0-1.12c0-.31-.11-.79-.17-.73s0,0,0,0,0,0,0,0a.69.69,0,0,0,0,.13l.14.38a4.64,4.64,0,0,1,.2.72A2.3,2.3,0,0,1,24.54,49.69Z"
			}), r.a.createElement("path", {
				d: "M25.26,50.93c-.09.07-.13.11-.1.19s.09.05.07.05,0,0,0,0,0,.09,0,0-.18-.09-.14-.08a.25.25,0,0,0,.17-.18c.32-.21.68.1.58.22a.76.76,0,0,1-.51.4.46.46,0,0,1-.41-.21.42.42,0,0,1,.13-.66.19.19,0,0,1,.21,0A.16.16,0,0,1,25.26,50.93Z"
			}), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M16.21,48.3c0-.11.63-.32,1.11-.79a1.62,1.62,0,0,0,.46-.86.93.93,0,0,0-.15-.7,1.25,1.25,0,0,0-.23-.23,2.49,2.49,0,0,0-.55-.33l-1.77-.74c.49-.06,1.25-.14,1.84-.24l.4-.1a1.68,1.68,0,0,0,.31-.11L18,44a2.56,2.56,0,0,0,1.08-.92l.05-.12s0-.11,0-.24a3.24,3.24,0,0,0-.13-.41,2.67,2.67,0,0,0-.37-.65l.72-.67a13.4,13.4,0,0,0,.86,1.18,1.37,1.37,0,0,0,.35.32,3.48,3.48,0,0,0,.61.08,5.5,5.5,0,0,0,1.21,0l1.12-.14a4.45,4.45,0,0,1-1.52.84,3.3,3.3,0,0,1-1.55.1,1.27,1.27,0,0,1-.44-.21,2.28,2.28,0,0,1-.27-.27,5.77,5.77,0,0,1-.39-.51c-.23-.33-.42-.66-.61-1l.39-.37a2.74,2.74,0,0,1,.58,1,1.86,1.86,0,0,1,.12,1.11,3,3,0,0,1-1.47,1.37l-.42.2-.26.09a2.59,2.59,0,0,1-.4.1,3.34,3.34,0,0,1,.38.17,1.36,1.36,0,0,1,.17.12,1.85,1.85,0,0,1,.29.33,1.52,1.52,0,0,1,0,1.64,2,2,0,0,1-1,.81A3.79,3.79,0,0,1,16.21,48.3Z"
			}), r.a.createElement("path", {
				className: p.a.cls8,
				d: "M8.62,33.78l.76-1,1.72-2.21A4.92,4.92,0,0,1,12,29.51a1.37,1.37,0,0,1,.5-.28,2.43,2.43,0,0,1,1.58.39c.51.21,2.57,1.48,3.06,1.76s1.08.56,1.06,1.25a1.86,1.86,0,0,1-.33.87c-.61,1-1.31,2-2,3s-3.14,4.35-3.8,5a1.1,1.1,0,0,1-.38.3c-.63.26-1.24-.24-1.77-.53L8.59,40.6l-1.52-.86c-.37-.21-1.12-.49-1.21-.94s.57-1.15.84-1.51L7.63,36"
			}), r.a.createElement("path", {
				d: "M7.63,36a4.56,4.56,0,0,1-.5.85c-.15.22-.32.49-.54.77A3.55,3.55,0,0,0,6,38.5c-.13.32.13.55.47.75l1,.53,1.69.9,1.17.6a1.77,1.77,0,0,0,1.06.35.59.59,0,0,0,.38-.25c.14-.15.28-.32.42-.5l.83-1.1c1.08-1.5,2.19-3,3.11-4.49l1.24-1.94a1.51,1.51,0,0,0,.32-.79c0-.2-.12-.35-.41-.53-1.28-.73-2.52-1.61-3.73-2.18a2.09,2.09,0,0,0-.8-.27.6.6,0,0,0-.32.07,1.36,1.36,0,0,0-.34.23,17.67,17.67,0,0,0-1.21,1.41c-.79.94-1.53,1.81-2.21,2.57a33.53,33.53,0,0,1,1.77-3.05l.5-.76a3.72,3.72,0,0,1,.57-.75,2.12,2.12,0,0,1,.76-.51,1.56,1.56,0,0,1,.79,0,16.69,16.69,0,0,1,3.32,1.85c.5.35,1,.59,1.49,1a1.3,1.3,0,0,1,.51.87,1.59,1.59,0,0,1-.23.93C17,35.24,15.86,37,14.69,38.57c-.57.8-1.13,1.56-1.69,2.29a9.73,9.73,0,0,1-.9,1.06,1.32,1.32,0,0,1-1.48.1c-1.53-.82-2.9-1.62-4.19-2.35a2.25,2.25,0,0,1-.51-.37.78.78,0,0,1-.25-.77,2.94,2.94,0,0,1,.79-1.14Z"
			}), r.a.createElement("g", {
				className: "cls10"
			}, r.a.createElement("path", {
				d: "M11.3,40.88a24.23,24.23,0,0,1-2.84-1.27l-.6-.29-.31-.17-.16-.09a.6.6,0,0,1-.21-.21.76.76,0,0,1,.09-.58l.19-.36.41-.73.84-1.41a47.55,47.55,0,0,1,4-5.69,11.25,11.25,0,0,1-1.28,2.51,37.38,37.38,0,0,0-2.37,3.3c-.34.52-.64,1-.93,1.51l-.41.72c-.12.23-.3.5-.25.58a.11.11,0,0,0,.07.06l.14.09L8,39l.59.32,1.09.59C10.23,40.21,11.11,40.78,11.3,40.88Z"
			})), r.a.createElement("path", {
				className: p.a.cls5,
				d: "M5.43,28.78a3.44,3.44,0,0,0-2.11,5.71c1.24,1.58,4.57,3.39,6.28,2.21a2.11,2.11,0,0,0,.94-1.29c.17-.94-.69-2-1.35-2.55a5.75,5.75,0,0,0-3.54-1.34c-.09,0-.22.06-.18.13"
			}), r.a.createElement("path", {
				d: "M5.47,31.66c-.06,0,0-.17.12-.19a2.36,2.36,0,0,1,.47,0,5.2,5.2,0,0,1,1.37.24,6.14,6.14,0,0,1,2.49,1.57A3.23,3.23,0,0,1,10.86,35,2.12,2.12,0,0,1,10,36.87a2.82,2.82,0,0,1-2,.6A5.89,5.89,0,0,1,6.05,37a8.39,8.39,0,0,1-2.72-1.82,4.34,4.34,0,0,1-1.26-2.93,3.4,3.4,0,0,1,1.15-2.64,4.22,4.22,0,0,1,2.18-.95,5.58,5.58,0,0,0-1.8,1.43,3.61,3.61,0,0,0-.68,1.66,3.29,3.29,0,0,0,.35,2.17,5.24,5.24,0,0,0,1.49,1.62,5.86,5.86,0,0,0,3.78,1.34c1.21-.12,2.18-1.37,1.66-2.32A4.93,4.93,0,0,0,8.1,32.4a7.54,7.54,0,0,0-1.51-.66,7.49,7.49,0,0,0-.74-.17C5.65,31.53,5.43,31.53,5.47,31.66Z"
			}), r.a.createElement("path", {
				d: "M14.69,31.63c0,.09-.34.56-.37.79s.14.17.12.12l0,0,.13-.22.26-.41s0-.09.05-.15,0-.07.09-.07l0,0c0-.05-.1-.08-.22,0a.33.33,0,0,1,.45-.34.4.4,0,0,1,.2.17.79.79,0,0,1,.07.2.42.42,0,0,1,0,.2.79.79,0,0,1-.1.21c-.21.24-.37.46-.53.67a.86.86,0,0,1-.73.46.29.29,0,0,1-.2-.29.73.73,0,0,1,0-.38,1.77,1.77,0,0,1,.3-.59A1.31,1.31,0,0,1,14.69,31.63Z"
			}), r.a.createElement("path", {
				d: "M13.77,33.64s.09,0,.14,0h0v.11a.59.59,0,0,1,0,.14c0,.2-.35.34-.56.15a.38.38,0,0,1,0-.63.25.25,0,0,1,.39.19.24.24,0,0,0-.14.1s0,0,0,0v0c.05,0,0,0,0,0s0-.07,0-.05h0l.07.17A.41.41,0,0,1,13.77,33.64Z"
			})))), "Avatar", y.a), C = o.a.div("AvatarContainer", y.a), O = o.a.wrapped(u.a, "Close", y.a), j = o.a.button("CloseButton", y.a), k = o.a.div("Counter", y.a), N = o.a.p("Description", y.a), w = o.a.div("Footer", y.a), S = o.a.h1("Title", y.a), P = o.a.div("Container", y.a), T = Object(i.c)({
				accountsActive: (e, t) => {
					const {
						subreddit: n
					} = t;
					if (n && n.name) {
						const t = Object(x.x)(e, {
							subredditName: n.name
						});
						return t && t.accountsActive
					}
				},
				isDownToChatExperimentEnabled: g.a,
				isEnabled: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(h.b)(e, n.id)
				}
			}), I = Object(a.b)(T, e => ({
				dismissBanner: t => e(Object(d.h)(t)),
				fetchDownToChatAvailability: t => e(Object(d.j)(t))
			}));
			class B extends r.a.Component {
				constructor(e) {
					super(e), this.onCloseButtonClick = () => {
						const {
							subreddit: e,
							dismissBanner: t
						} = this.props, {
							isDismissed: n
						} = this.state;
						n || (this.setState({
							isDismissed: !0
						}), t(e.id))
					}, this.state = {
						isDismissed: !1
					}
				}
				componentDidMount() {
					const {
						isDownToChatExperimentEnabled: e,
						subreddit: t,
						fetchDownToChatAvailability: n
					} = this.props;
					e && n(t.id)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						fetchDownToChatAvailability: t,
						subreddit: n,
						isDownToChatExperimentEnabled: s
					} = this.props;
					e.subreddit.id !== n.id && s && t(e.subreddit.id)
				}
				render() {
					const {
						accountsActive: e,
						isDownToChatExperimentEnabled: t,
						subreddit: n,
						isEnabled: s
					} = this.props, {
						isDismissed: a
					} = this.state;
					return t && s && !a ? r.a.createElement(P, null, r.a.createElement(C, null, r.a.createElement(E, null)), r.a.createElement(S, null, _._("Find people who want to chat", null, {
						hk: "3Y6Pm1"
					})), r.a.createElement(N, null, _._("Bored at home? Want someone to talk to? Reddit will match you with members who want to chat too.", null, {
						hk: "3HaCWZ"
					})), r.a.createElement(w, null, r.a.createElement(f.a, {
						subreddit: n
					}), e ? r.a.createElement(k, null, _._("{viewingCount} Online", [_._param("viewingCount", Object(c.b)(e))], {
						hk: "LsWtb"
					})) : null), r.a.createElement(j, {
						onClick: this.onCloseButtonClick
					}, r.a.createElement(O, null))) : null
				}
			}
			t.a = I(Object(l.c)(B))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Economics-SubredditPremium-LFGBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Economics-SubredditPremium-LFGBanner").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumNewUserWelcome").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spPremium", a)
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), n.e("EconomicsSubredditPremiumSidebarCards")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spPremium", a)
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/upperFirst.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				c = n("./src/config.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/isFakeSubreddit/index.ts"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/components/PostList/Placeholder.tsx"),
				b = n("./src/reddit/components/EmptySubreddit.m.less"),
				h = n.n(b),
				g = n("./src/lib/lessComponent.tsx");
			const x = g.a.div("PrimaryText", h.a),
				f = g.a.div("SecondaryText", h.a),
				v = g.a.div("MainContentWrapper", h.a),
				y = g.a.div("MainContent", h.a),
				_ = g.a.wrapped(p.a, "BackgroundPlaceholder", h.a),
				E = g.a.wrapped(m.h, "SubmitLink", h.a),
				C = g.a.img("SnooImg", h.a),
				O = g.a.div("EmptyHomepage", h.a),
				j = e => {
					switch (e) {
						case d.O.RISING:
							return s.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.O.TOP:
						case d.O.CONTROVERSIAL:
							return null;
						default:
							return s.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				k = e => {
					let {
						listingName: t,
						sort: n
					} = e;
					const r = j(n);
					return o.a.createElement(y, null, o.a.createElement(x, null, (e => {
						switch (e) {
							case d.O.RISING:
								return s.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.O.TOP:
							case d.O.CONTROVERSIAL:
								return s.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [s.fbt._param("listing sort option", a()(e))], {
									hk: "48BeCW"
								});
							default:
								return s.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(n)), t && !Object(l.a)(t) && !!r && o.a.createElement(o.a.Fragment, null, o.a.createElement(f, null, j(n)), o.a.createElement(E, {
						to: "/r/".concat(t, "/submit")
					}, s.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				N = () => o.a.createElement(y, null, o.a.createElement(C, {
					src: "".concat(c.a.assetPath, "/img/snoo_discovery@1x.png")
				}), o.a.createElement(x, null, s.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), o.a.createElement(E, {
					to: "/r/popular"
				}, s.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = g.a.wrapped(e => o.a.createElement(O, null, o.a.createElement(_, {
				isLoading: !1,
				layout: u.g.Classic
			}), o.a.createElement(v, null, e.subreddit ? o.a.createElement(k, e) : o.a.createElement(N, null))), "Component", h.a)
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/Governance/ClaimPointsBanner/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-ClaimPointsBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~reddit-components-Governance-ClaimPointsBanner"), n.e("reddit-components-Governance-ClaimPointsBanner")]).then(n.bind(null, "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = Object(r.a)("spClaimablePoints", a)
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-CommunityCard").then(n.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-Leaderboard").then(n.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/Governance/VotingBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx");
			const r = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceVotingBanner").then(n.bind(null, "./src/reddit/components/Governance/VotingBanner/index.tsx")).then(e => e.default)
			});
			t.a = r
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(i.c)({
				featureEnabled: c.d.spWalletRegistrationBanner
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistrationStellarBanner").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.tsx")).then(e => e.default)
			});
			const l = Object(i.c)({
				featureEnabled: c.d.spStellarWalletRegistration
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, n) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				l = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/components/HeaderImage/index.m.less"),
				h = n.n(b);
			const g = c.a.wrapped(u.a, "Planet", h.a),
				x = c.a.div("SubredditIcon", h.a),
				f = c.a.div("PositionedImage", h.a),
				v = c.a.div("HeaderContent", h.a),
				y = c.a.div("HeaderContainer", h.a),
				_ = c.a.span("HeaderText", h.a),
				E = c.a.wrapped(a.a, "HeaderUrl", h.a),
				C = c.a.span("Container", h.a),
				O = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						n = Object(l.a)(e),
						s = Object(p.a)(e).banner.positionedImageAlignment,
						a = Object(p.a)(e).banner.positionedImage,
						o = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let c;
					switch (s) {
						case "right":
							c = {
								right: "-8px"
							};
							break;
						case "centered":
							c = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							c = {
								left: "-8px"
							}
					}
					const u = !!a && !!o && "left" === s,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						O = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						j = "".concat(4 + O, "px");
					return r.a.createElement(C, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: "".concat(Object(p.a)(e).banner.height, "px")
						}
					}, r.a.createElement(E, {
						className: e.className,
						to: e.url
					}, r.a.createElement(y, {
						className: Object(i.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || d.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(v, {
						className: Object(i.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (n ? r.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(n, ")"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					}) : r.a.createElement(g, {
						style: {
							padding: "".concat(Object(p.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					})), r.a.createElement(_, {
						style: {
							paddingTop: 32 === O ? "4px" : "14px"
						}
					}, t)), r.a.createElement(f, {
						className: Object(i.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!a,
							[h.a.hoverPositionedImage]: !!a && !!o
						}),
						style: Object.assign(Object.assign({}, c), {
							height: "".concat(Object(p.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = O
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/IdCard/index.m.less"),
				i = n.n(a);
			const o = r.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return r.a.createElement("div", {
					className: i.a.Banner,
					style: t && t.length ? {
						backgroundImage: "url(".concat(t, ")")
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const o = e => e && e.toLowerCase() === a.b.Popular,
				c = e => e && e.toLowerCase() === a.b.All,
				d = e => e && e === i.b,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				u = e => {
					let t, n, i, u, m, {
						listingName: p,
						subreddit: b,
						idCardWidget: h
					} = e;
					const g = h && h.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						x = h && h.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let f, v;
					return d(p) ? (t = "".concat(r.a.assetPath, "/img/id-cards/home-banner@2x.png"), i = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = a.c[a.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), u = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : c(p) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), i = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = "r/all", m = a.c[a.b.All]) : o(p) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), i = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = "r/popular", m = a.c[a.b.Popular]) : p && (n = h && h.description, i = l(""), u = b.displayText, m = b.url, v = h && h.subscribersCount, f = h && h.currentlyViewingCount), Object.assign({
						snooBackground: i,
						description: n,
						titleText: u,
						url: m,
						subscribersCount: v,
						subscribersText: g,
						currentlyViewingText: x,
						currentlyViewingCount: f
					}, t ? {
						bannerBackgroundImage: t
					} : {})
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/IdCard/index.m.less"),
				o = n.n(i);
			const c = e => {
				let {
					snooBackground: t
				} = e;
				return r.a.createElement("div", {
					className: o.a.AdorableSnoo,
					style: {
						background: t.image,
						backgroundSize: "".concat(t.width, "px ").concat(t.height, "px"),
						height: t.height,
						width: t.width
					}
				})
			};
			t.a = e => {
				let {
					titleText: t,
					snooBackground: n
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(o.a.Title, o.a.TitleShifted)
				}, r.a.createElement(c, {
					snooBackground: n
				}), r.a.createElement("div", {
					className: o.a.TitleTextShiftedContainer
				}, r.a.createElement("span", {
					className: o.a.TitleText
				}, t)))
			}
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-InFeedPostCreation").then(n.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				o = n.n(i),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", o.a),
				l = c.a.div("TextWrapper", o.a);
			t.a = e => {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: i,
					title: c
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(t, o.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, r.a.createElement("div", {
					className: o.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), s ? r.a.createElement(d, null, s) : r.a.createElement(d, null), r.a.createElement(l, null, r.a.createElement("div", {
					className: o.a.title
				}, c), i && r.a.createElement("div", {
					className: o.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				h = n.n(b);
			const g = a.a.createElement(u.a, {
					className: h.a.icon
				}),
				x = Object(o.c)({
					subreddit: m.A,
					subredditAboutInfo: m.x
				}),
				f = Object(i.b)(x);
			t.a = f(e => {
				const {
					subreddit: t,
					subredditAboutInfo: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = n && n.quarantineMessageHtml,
					i = n && n.quarantineMessage || s.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return a.a.createElement(p.a, {
					className: h.a.container,
					color: d.a.quarantine,
					icon: g,
					subtitle: a.a.createElement("span", null, s.fbt._("This community is {=quarantined}", [s.fbt._param("=quarantined", a.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, s.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", r ? a.a.createElement(c.a, {
						className: h.a.rawHtmlDisplay,
						html: r
					}) : i, " ", a.a.createElement(l.a, {
						className: h.a.link,
						to: "/"
					}, s.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: s.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "h", (function() {
				return N
			})), n.d(t, "i", (function() {
				return w
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/lodash/isNil.js")),
				c = n.n(o),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts"),
				u = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const m = Object(i.c)({
				consumers: e => e.jsApi
			});
			class p extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: n,
								consumers: s
							} = t,
							r = u(t, ["className", "consumers"]);
						l.a.publish(d.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(a.b)(m, {})(p),
				h = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var f = Object(a.b)(() => Object(i.a)(x, h.j, (e, t) => Object.assign(Object.assign({}, e), {
				depth: t
			})))(e => r.a.createElement(b, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const v = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var y = Object(a.b)(() => Object(i.a)(v, e => e))(e => r.a.createElement(b, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var _ = Object(a.b)(() => Object(i.c)({
					subreddit: g.R
				}))(e => r.a.createElement(b, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				E = n("./src/reddit/selectors/posts.ts");
			var C = Object(a.b)(() => Object(i.c)({
				post: E.M,
				subredditOrProfile: E.Z,
				isModerator: (e, t) => {
					const n = Object(E.Z)(e, t);
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var O = Object(a.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(E.Z)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const n = Object(E.Z)(e, {
						postId: t.post.id
					});
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var j = Object(a.b)(() => Object(i.c)({
				post: E.M,
				subredditOrProfile: E.Z,
				isModerator: (e, t) => {
					const n = Object(E.Z)(e, t);
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var k = Object(a.b)(() => Object(i.c)({
				subreddit: g.R
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var N = Object(a.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(g.L)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var w = Object(a.b)(() => Object(i.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(g.R)(e, {
						subredditId: n
					}) : null
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, n) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: i,
					post: c,
					redditStyle: m,
					theme: p
				} = e, b = u(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(a.a)(d.a.backgroundWrapper, n),
					style: Object(o.c)(s, e),
					onClick: i
				}, b), t)
			})
		},
		"./src/reddit/components/PowerupsBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-PowerupsBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-PowerupsBanner").then(n.bind(null, "./src/reddit/components/PowerupsBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PowerupsBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/LRUCache/index.ts"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
				}, r.a.createElement(l.a, {
					className: h.a.backgroundWrapper
				}, r.a.createElement("div", {
					className: h.a.titleAndDescriptionContainer
				}, r.a.createElement("h3", {
					className: h.a.title
				}, g._("Top broadcast right now", null, {
					hk: "2hS1kb"
				}))), r.a.createElement("div", {
					className: h.a.body
				}, r.a.createElement("div", {
					className: h.a.previewContainer
				}, r.a.createElement("div", {
					className: Object(o.a)(h.a.thumbnail, h.a.noise)
				})))))
			};
			var f = e => {
				let {
					className: t,
					layout: n
				} = e;
				return n === u.g.Classic ? r.a.createElement(c.b, {
					className: Object(o.a)(t, h.a.classicPostPlaceholder),
					isLoading: !0
				}) : n === u.g.Compact ? r.a.createElement(d.a, {
					className: Object(o.a)(t, h.a.compactPostPlaceholder),
					isLoading: !0
				}) : r.a.createElement(x, {
					className: t
				})
			};
			const v = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: n
					} = e;
					return r.a.createElement(f, {
						className: t,
						layout: n
					})
				},
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), n.e("ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~StandalonePostPage~reddit-components-Cl~726564d9"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var y = e => r.a.createElement(v, e),
				_ = n("./src/reddit/helpers/trackers/rpan.ts");
			const E = e => e === u.g.Classic ? 88 : e === u.g.Compact ? 42 : 340,
				C = new a.a(20),
				O = e => {
					const t = "rpan-".concat(e.layout, "-").concat(e.listingKey),
						n = C.get(t);
					if (n) return n;
					const s = j(e.desiredIndex, e.children),
						a = {
							child: {
								id: t,
								estHeight: E(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(_.x)()),
								render: t => {
									let {
										className: n
									} = t;
									return r.a.createElement(y, {
										className: n,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: s
						};
					return C.set(t, a), a
				},
				j = (e, t) => {
					const n = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; n.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				noise: "_4AhQxTHsKbDr8Z4UeVFvR",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/page.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.G)(t))
				})),
				b = c.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign(Object.assign({}, e.style), {
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(o.a)(b))
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				a = n.n(r);
			t.a = s.a.div("header", a.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, n) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/InternalLink/index.tsx"),
				x = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				f = n("./src/reddit/helpers/name/index.ts"),
				v = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = n("./src/reddit/components/MiniCardPost/index.m.less"),
				C = n.n(E),
				O = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				j = n.n(O);
			const k = e => e.type === v.f.Spoiler,
				N = Object(h.t)();
			t.a = N(Object(b.a)(Object(d.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: a,
					innerContainerClassName: d,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: v,
					shouldOpenPost: E,
					showSubredditMeta: O = !0,
					showSubredditName: N,
					subredditOrProfile: w
				} = e, S = h && h.preview && h.preview.url || void 0, P = h && h.isSponsored ? "promoted_trend" : "trending", T = h && Object(l.a)(h.permalink) || "", I = E && T || v && Object(o.a)("/search", {
					q: v.rawQuery,
					source: P
				}) || T, B = v ? v.subredditInfo && v.subredditInfo.icon : w && w.icon.url, A = v ? v.subredditInfo && v.subredditInfo.displayText : w && (w.displayText || w.name), L = h ? h.flair.filter(k) : [], M = h ? h.score : 0, F = h ? h.numComments : 0, D = h && h.isSponsored, R = Object(_.a)(e).body, W = "linear-gradient(\n      ".concat(Object(r.g)(R, .2), ",\n      ").concat(Object(r.g)(R, .3), ",\n      ").concat(Object(r.g)(R, .4), ",\n      ").concat(Object(r.g)(R, .6), ",\n      ").concat(Object(r.g)(R, .8), ",\n      ").concat(R, "\n    )"), U = i.a.createElement("div", {
					id: a,
					className: Object(c.a)(j.a.trendingPost, {
						[j.a["m-background"]]: !!S
					})
				}, i.a.createElement(g.a, {
					to: I
				}, i.a.createElement("div", {
					className: Object(c.a)(j.a.backgroundWrapper, C.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(_.a)(e).body, S || Object(_.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, D && i.a.createElement("div", {
					className: j.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), i.a.createElement("div", {
					className: Object(c.a)(j.a.innerContainer, C.a.innerContainer, d),
					onClick: b,
					title: h ? h.title : ""
				}, i.a.createElement("h2", {
					className: h ? j.a.title : j.a.titleNoDescription
				}, e.title), h ? i.a.createElement("div", {
					className: Object(c.a)(j.a.description, n)
				}, L.length > 0 && i.a.createElement(m.a, {
					className: j.a.flair,
					titleFlair: L,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : i.a.createElement("div", {
					className: j.a.spacer
				}), O && B && A && i.a.createElement(x.a, {
					className: j.a.relatedSubredditMetaData,
					iconClassName: j.a.subredditIcon,
					iconUrl: B || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", A)], {
						hk: "2YTyJf"
					})
				}), !O && h && i.a.createElement("div", {
					className: j.a.metaLine
				}, N && A && i.a.createElement("span", {
					className: j.a.meta
				}, Object(f.b)(A)), i.a.createElement("span", {
					className: j.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(M, "number", Object(u.b)(M))], {
					hk: "1Jm6il"
				})), i.a.createElement("span", {
					className: j.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(F, "number", Object(u.b)(F))], {
					hk: "311aXY"
				})))))));
				return D ? i.a.createElement(p.a, {
					post: h
				}, U) : U
			})))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				o = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(o);
			t.a = e => {
				const {
					className: t,
					id: n,
					layoutBodyClassName: s,
					showCardView: o
				} = e, d = {
					[c.a["m-card"]]: o
				};
				return r.a.createElement("div", {
					id: n,
					className: Object(a.a)(c.a.container, d, t)
				}, r.a.createElement(i.a, {
					className: c.a.layout,
					bodyClassName: Object(a.a)(c.a.layoutBody, d, s),
					header: e.header,
					headerClassName: Object(a.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				o = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.createElement(i.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => r.a.createElement(o.a, {
				className: e.className,
				header: m,
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: l.a.post,
				key: "placeholder-post-".concat(t)
			}, r.a.createElement("div", {
				className: Object(a.a)(l.a.desc, l.a.one, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.desc, l.a.two, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.icon, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(l.a.name, p)
			}))))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				Pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				DropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				dropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				OverflowMenu: "KZF0GvnWopJYsNtVGODBn",
				overflowMenu: "KZF0GvnWopJYsNtVGODBn"
			}
		},
		"./src/reddit/components/SidebarSubredditChannels/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2sEbIFP3ssTnt1Fo23m26r",
				wrapper: "_2sEbIFP3ssTnt1Fo23m26r"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/userPrefs.ts"),
				v = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				y = n.n(v),
				_ = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = u.a.div("BladeContainer", y.a), O = u.a.wrapped(h.a, "CloseIcon", y.a), j = u.a.div("LoadingTitleContainer", y.a), k = u.a.div("LoadingNavContainer", y.a), N = u.a.div("ShortLoadingNav", y.a), w = u.a.wrapped(b.a, "ThemedChevron", y.a), S = e => {
				var t = _(e, []);
				return i.a.createElement(C, null, i.a.createElement(O, null), i.a.createElement(p.k, null, i.a.createElement(p.p, null, E._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(p.o, null, i.a.createElement(j, null, i.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingTitle, t.isLoading && y.a.loading)
				})), i.a.createElement(k, null, i.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingNav, t.isLoading && y.a.loading)
				}), i.a.createElement(w, null)), i.a.createElement(k, null, i.a.createElement(N, null), i.a.createElement(w, null)), i.a.createElement(k, null, i.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingNav, t.isLoading && y.a.loading)
				}), i.a.createElement(w, null)), i.a.createElement(k, null, i.a.createElement(N, null), i.a.createElement(w, null)), i.a.createElement(k, null, i.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingNav, t.isLoading && y.a.loading)
				}), i.a.createElement(w, null)))))
			}, P = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(S, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(S, {
					gradientType: "posts",
					isLoading: !0
				})
			}), T = Object(c.c)({
				isEditing: x.j,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: g.j
			});
			t.a = Object(o.b)(T)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(y.a.Container, e.isSubscriptionsPinned && y.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(P, {
					subredditId: e.subredditId
				})) : i.a.createElement(a.Fragment, null, e.children)
			})
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
				return i
			})), n.d(t, "p", (function() {
				return o
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "j", (function() {
				return _
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const i = s.a.section("FormPage", a.a),
				o = s.a.h1("HomePageTitle", a.a),
				c = s.a.button("HomePageBreadcrumb", a.a),
				d = s.a.div("HomePageGroup", a.a),
				l = s.a.h1("FormPageTitle", a.a),
				u = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				p = s.a.h2("FormGroupTitle", a.a),
				b = s.a.div("FormElement", a.a),
				h = s.a.div("FormGroupDescription", a.a),
				g = s.a.div("FormItem", a.a),
				x = s.a.h3("FormElementTitle", a.a),
				f = s.a.div("FormElementDescription", a.a),
				v = s.a.div("FormElementError", a.a),
				y = s.a.div("FormElementSubGroup", a.a),
				_ = s.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/SubredditChannelList/index.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				primaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				ModalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				modalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				ModalText: "_3HL4gEFxPNzkrPu94hblvT",
				modalText: "_3HL4gEFxPNzkrPu94hblvT",
				ItemLink: "vByM_anguY6xuCJEcusmJ",
				itemLink: "vByM_anguY6xuCJEcusmJ",
				Detail: "_1hkd6aDOGqeroDz5-yntAS",
				detail: "_1hkd6aDOGqeroDz5-yntAS",
				DescText: "_2Kwn1xR6xMSka95C9d72vF",
				descText: "_2Kwn1xR6xMSka95C9d72vF",
				Title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				Header: "tLKlMoU4-CQkARSxZg_yj",
				header: "tLKlMoU4-CQkARSxZg_yj",
				ChatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				chatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				PlanetIcon: "hsKCEb94KysCjbHbmbhzx",
				planetIcon: "hsKCEb94KysCjbHbmbhzx",
				Pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				Group: "dfN8kolCvNCsNzzf9W39l",
				group: "dfN8kolCvNCsNzzf9W39l",
				Key: "_2fgNZYjyiPjn_UlFwxeaVr",
				key: "_2fgNZYjyiPjn_UlFwxeaVr",
				SubredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				subredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				EditButton: "_21mAHvYUh9NgVPMyp45QZJ",
				editButton: "_21mAHvYUh9NgVPMyp45QZJ",
				ShowAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				showAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				ChannelName: "KIQLM-ci4WJOXrwjTsEzx",
				channelName: "KIQLM-ci4WJOXrwjTsEzx",
				HeaderText: "_3n6CTc1D2t_MfB0tNSgiAj",
				headerText: "_3n6CTc1D2t_MfB0tNSgiAj"
			}
		},
		"./src/reddit/components/SubredditChannelList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return J
			}));
			var s = n("./node_modules/lodash/orderBy.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/opener/index.ts"),
				u = n("./src/chat/helpers/urls/index.ts"),
				m = n("./src/reddit/actions/chat/subredditChannel.ts"),
				p = n("./src/reddit/actions/chat/toggle.ts"),
				b = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				g = n("./src/reddit/components/SubredditIcon/index.tsx"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/modals.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/helpers/trackers/chat.ts"),
				_ = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				E = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				C = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				O = n("./src/reddit/models/SubredditChannel/index.ts"),
				j = n("./src/reddit/selectors/chat.ts"),
				k = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/subredditChannel.ts"),
				w = n("./src/reddit/components/SubredditChannelList/index.m.less"),
				S = n.n(w);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js"), T = d.a.wrapped(h.g, "ModalFormItem", S.a), I = d.a.wrapped(v.f, "PrimaryButton", S.a), B = d.a.wrapped(h.o, "ModalText", S.a), A = d.a.a("ItemLink", S.a), L = d.a.p("Detail", S.a), M = d.a.p("DescText", S.a), F = d.a.div("Title", S.a), D = d.a.div("Header", S.a), R = d.a.wrapped(E.a, "ChatIcon", S.a), W = d.a.wrapped(C.a, "PlanetIcon", S.a), U = d.a.wrapped(_.a, "Pencil", S.a), H = d.a.wrapped(e => {
				let {
					className: t
				} = e;
				return i.a.createElement("svg", {
					className: t,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("g", {
					transform: "translate(-26.000000, -37.000000)"
				}, i.a.createElement("path", {
					d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
				})))
			}, "Group", S.a), V = d.a.wrapped(e => {
				let {
					className: t
				} = e;
				return i.a.createElement("svg", {
					className: t,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				}))
			}, "Key", S.a), G = d.a.wrapped(g.b, "SubredditIcon", S.a), Z = d.a.button("EditButton", S.a), K = d.a.button("ShowAllLink", S.a), z = d.a.span("ChannelName", S.a), q = d.a.div("HeaderText", S.a);
			var J;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(J || (J = {}));
			const Y = Object(c.c)({
					isCollectionReady: N.e,
					isModerator: j.e,
					selectedSubreddit: k.R,
					shouldRequestCollection: N.f,
					subredditChannels: N.a
				}),
				Q = Object(o.b)(Y, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						toggleModal: () => e(Object(b.i)(f.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(b.i)(f.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(b.i)(f.a.EDIT_SUBREDDIT_CHAT)),
						fetchSubredditChannels: t => e(Object(m.l)(t)),
						onChatLinkClick: (t, n) => e(Object(p.c)({
							channelId: t,
							subredditName: n
						})),
						onSelectChannel: t => e(Object(m.m)({
							channelId: t
						}))
					}
				});
			class X extends i.a.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					this.fetchChannelList()
				}
				fetchChannelList() {
					this.props.shouldRequestCollection && this.props.fetchSubredditChannels(this.props.selectedSubreddit.id)
				}
				getDisplayChannelList() {
					return this.props.subredditChannels && this.props.maxChannels ? this.props.subredditChannels.slice(0, this.props.maxChannels) : this.props.subredditChannels || []
				}
				displayShowAllLink() {
					return !!(this.props.maxChannels && this.props.subredditChannels && this.props.maxChannels < this.props.subredditChannels.length)
				}
				displayChannelsList() {
					const {
						props: {
							maxChannels: e,
							subredditChannels: t
						}
					} = this;
					if (t) {
						const n = r()(t, ["name"]);
						return e ? n.slice(0, e) : n
					}
					return []
				}
				onItemClick(e) {
					const {
						channelId: t
					} = e, {
						selectedSubreddit: n,
						onChatLinkClick: s
					} = this.props;
					s(t, n.name), this.trackItemClick(e)
				}
				trackItemClick(e) {
					const {
						Joined: t
					} = O.a, {
						channelId: n,
						channelState: s
					} = e, {
						Widget: r,
						Modal: a
					} = J, {
						parentContext: i,
						sendEvent: o
					} = this.props;
					return i === r && s === t ? o(Object(y.c)(n)) : i === r ? o(Object(y.e)(n)) : i === a && s === t ? o(Object(y.a)(n)) : i === a ? o(Object(y.b)(n)) : void 0
				}
				onShowAllClick() {
					const {
						sendEvent: e,
						toggleModal: t
					} = this.props;
					t && (t(), e(Object(y.d)()))
				}
				getLinkURL(e) {
					const {
						selectedSubreddit: t
					} = this.props;
					return Object(u.channelUrl)(e.channelId, t.name)
				}
				render() {
					const {
						props: {
							className: e,
							isCollectionReady: t,
							isModerator: n,
							onAddChannel: s,
							toggleEditModal: r,
							selectedSubreddit: a,
							onSelectChannel: o,
							toggleCreateModal: c
						}
					} = this;
					if (!t) return null;
					const d = this.displayChannelsList();
					return i.a.createElement("div", {
						className: e
					}, d.length ? i.a.createElement(T, null, d.map((e, t) => i.a.createElement(A, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: l.c.BLANK,
						rel: l.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, i.a.createElement(F, {
						key: "item-link-title-".concat(t)
					}, i.a.createElement(R, {
						key: "item-link-icon-".concat(t)
					}), a.icon.url ? i.a.createElement(G, {
						key: "subreddit-icon-".concat(t),
						iconUrl: a.icon.url
					}) : i.a.createElement(W, {
						key: "planet-".concat(t),
						isSmall: !0
					}), i.a.createElement(D, {
						key: "item-header-".concat(t)
					}, i.a.createElement(q, {
						key: "item-header-text-".concat(t)
					}, i.a.createElement(L, {
						key: "item-detail-".concat(t)
					}, a.name, P._({
						"*": "• {number} Members",
						_1: "• 1 Member"
					}, [P._plural(e.membersCount, "number")], {
						hk: "4bUTpG"
					})), i.a.createElement(z, {
						key: "channel-name-".concat(t)
					}, e.type === O.c.Public ? i.a.createElement(H, null) : i.a.createElement(V, null), e.name)), n && i.a.createElement(Z, {
						key: "button-".concat(t),
						onClick: t => {
							o(e.channelId), r(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(y.l)())
						}
					}, i.a.createElement(U, null)))), e.description && i.a.createElement(M, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && i.a.createElement(K, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, P._("See more", null, {
						hk: "lhTm0"
					}))) : n ? i.a.createElement(T, null, i.a.createElement(B, null, P._("Create your first room and get your community chatting in real time.", null, {
						hk: "2zKL0L"
					})), i.a.createElement(I, {
						onClick: s || c
					}, P._("+ Add room", null, {
						hk: "2vBAvZ"
					}))) : i.a.createElement(T, null, i.a.createElement(B, null, P._("There are no joined chatrooms yet", null, {
						hk: "3n65KN"
					}))))
				}
			}
			t.b = Q(Object(x.c)(X))
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				g = e => a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, a.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				x = n("./src/reddit/models/ApiRequestState/index.ts"),
				f = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				v = n("./src/reddit/components/SubredditIcon/index.m.less"),
				y = n.n(v);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			class C extends a.a.Component {
				constructor(e) {
					super(e)
				}
				render() {
					const e = this.props,
						{
							subredditId: t,
							className: n,
							inTopBar: s
						} = e,
						r = E(e, ["subredditId", "className", "inTopBar"]),
						i = [n, y.a.inTopBar, y.a.iconContainer];
					return s ? i.push(y.a.emptyEditableIconInTopBar) : i.push(y.a.editableIcon, y.a.emptyEditableIcon), a.a.createElement("span", _({}, r, {
						className: Object(c.a)(...i)
					}), s ? a.a.createElement(g, {
						className: y.a.emptyUploadButton
					}) : a.a.createElement(h.a, {
						className: y.a.emptyPlusButton
					}), this.props.children)
				}
			}
			const O = e => {
					const {
						iconColor: t,
						className: n,
						alt: s,
						role: r,
						onClick: i,
						inTopBar: o,
						src: d
					} = e;
					return a.a.createElement("span", {
						className: y.a.iconContainer
					}, a.a.createElement("img", {
						alt: s,
						onClick: i,
						role: r,
						src: d,
						className: Object(c.a)(n, {
							[y.a.editableIcon]: !o
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				j = Object(o.c)({
					isLoading: f.b
				});
			class k extends a.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => a.a.createElement(u.a, {
						className: y.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(x.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? a.a.createElement("span", {
						className: y.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? s.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : s.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), n = a.a.createElement(a.a.Fragment, null, a.a.createElement(O, _({
						alt: s.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? a.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? a.a.createElement("a", {
						href: this.props.linkTo
					}, a.a.createElement(C, _({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : a.a.createElement(a.a.Fragment, null, a.a.createElement(C, _({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [y.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(y.a.loadingIconInTopBar), t = 32), a.a.createElement(m.a, {
							className: Object(c.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? a.a.createElement("div", {
						className: y.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(i.b)(j, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(d.a)(t.subreddit, n, s))
				}
			}))(Object(l.c)(k))
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, n) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/featureFlags/component.tsx"),
				l = n("./src/reddit/selectors/widgets.ts"),
				u = n("./src/reddit/actions/subreddit.ts"),
				m = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				h = n("./src/reddit/components/SubredditNav/index.m.less"),
				g = n.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const v = (e, t, n) => Object(p.a)(e, {
					[g.a.mActive]: t
				}, {
					[g.a.topBannerVariant]: n
				}),
				y = e => {
					var {
						children: t,
						isActive: n,
						isTopBannerVariant: s
					} = e, a = f(e, ["children", "isActive", "isTopBannerVariant"]);
					return r.a.createElement("div", x({
						className: v(g.a.subNavTitle, n, s)
					}, a), r.a.createElement("span", null, t), r.a.createElement(b.b, {
						className: g.a.navDropdownIcon
					}))
				},
				_ = e => {
					var {
						className: t,
						isActive: n,
						to: s,
						isTopBannerVariant: a
					} = e, i = f(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const o = v(g.a.navLink, n, a);
					return s ? r.a.createElement(m.a, x({
						className: o,
						to: s
					}, i)) : r.a.createElement("a", x({
						className: o
					}, i))
				},
				E = e => {
					var {
						className: t,
						isActive: n
					} = e, s = f(e, ["className", "isActive"]);
					return r.a.createElement(m.a, x({
						className: v(g.a.navLink, n)
					}, s))
				},
				C = e => {
					var {
						className: t,
						isActive: n
					} = e, s = f(e, ["className", "isActive"]);
					return r.a.createElement("a", x({
						className: v(g.a.subNavLink, n)
					}, s))
				},
				O = e => {
					var {
						className: t
					} = e, n = f(e, ["className"]);
					return r.a.createElement("div", x({
						className: Object(p.a)(g.a.subNavContainer, t)
					}, n))
				},
				j = e => {
					var {
						className: t,
						isOpen: n
					} = e, s = f(e, ["className", "isOpen"]);
					return r.a.createElement("div", x({
						className: Object(p.a)(g.a.subNavList, t, {
							[g.a.mIsOpen]: n
						})
					}, s))
				},
				{
					fbt: k
				} = n("./node_modules/fbt/lib/FbtPublic.js");
			const N = Object(i.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var w = Object(c.t)()(Object(a.b)(N, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: n
					} = e;
					return n ? r.a.createElement(E, {
						className: g.a.metaNavLink,
						to: n.url,
						isActive: e.isActive,
						onClick: n => {
							Object(c.E)(t) && n.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, k._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				S = n("./src/lib/linkMatchers/index.ts");
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(O, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, r.a.createElement(y, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), r.a.createElement(j, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var T = P;
			const I = e => {
				const t = e.url && Object(S.g)(S.e, e.url);
				return t ? t.url : e.url
			};
			var B = e => e.menuItem.url ? r.a.createElement(_, {
					href: I(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(T, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(C, {
					key: "".concat(e.text, "-").concat(I(e)),
					role: "listitem",
					href: I(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				A = n("./src/lib/constants/index.ts");
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const M = Object(c.t)(),
				F = [A.Bb.SUBREDDIT, A.Bb.COMMENTS, A.Bb.COLLECTION_COMMENTS],
				D = Object(i.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && F.indexOf(t.pageLayer.meta.name) > -1
				});
			var R = M(Object(a.b)(D, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: n,
						isPostsRoute: s,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: i
					} = e, o = s && !n;
					return r.a.createElement(_, {
						to: t,
						isActive: o,
						isTopBannerVariant: a,
						onClick: e => {
							n && (e.preventDefault(), i())
						}
					}, L._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				W = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				U = n("./src/higherOrderComponents/makeAsync.tsx");
			var H = Object(U.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("HarbergerTaxBannerPurchaseCTA").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				V = n("./src/reddit/constants/postLayout.ts"),
				G = n("./src/reddit/constants/screenWidths.ts"),
				Z = n("./src/reddit/models/Theme/index.ts"),
				K = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				z = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const q = Object(W.a)(e => {
				var {
					className: t,
					children: n,
					isTopBannerVariant: s
				} = e, a = z(e, ["className", "children", "isTopBannerVariant"]);
				const i = Object(K.a)(a);
				return r.a.createElement("div", {
					className: Object(p.a)(g.a.outerContainer, t),
					style: {
						position: i.navBar.useOverlay && !s ? "absolute" : "static",
						background: s ? "inherit" : Object(Z.g)(i.navBar.backgroundColor, i.navBar.backgroundImage, "tiled")
					}
				}, n)
			});
			var J = e => r.a.createElement(q, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: g.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === V.g.Large ? "".concat(e.maxWidth || G.a, "px") : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement(H, null))),
				Y = n("./src/reddit/constants/wiki.ts"),
				Q = n("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: n,
					pageLayer: s
				} = e, a = !!s && !!s.meta && s.meta.name === A.Bb.SUBREDDIT_WIKI, i = "wiki/".concat(Y.i), o = t.endsWith("/") ? t + i : "".concat(t, "/").concat(i);
				return r.a.createElement(_, {
					isActive: a,
					isTopBannerVariant: n,
					to: o,
					onClick: () => e.sendEvent(Object(Q.g)())
				}, X._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const ee = Object(d.a)("spPolls", w),
				te = Object(c.t)(),
				ne = Object(i.c)({
					layout: c.N,
					widget: l.f
				}),
				se = Object(a.b)(ne);
			t.a = te(se(Object(o.c)(e => r.a.createElement(J, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(R, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(ee, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement($, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, n) => r.a.createElement(B, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: n,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				p = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				b = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				h = n("./src/reddit/components/IdCard/async.tsx"),
				g = n("./src/lib/isFakeSubreddit/index.ts"),
				x = n("./src/reddit/components/IdCard/helpers.ts"),
				f = e => !Object(g.a)(e) || Object(x.c)(e) || Object(x.d)(e) || Object(x.e)(e),
				v = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				_ = n("./src/reddit/components/SidebarContainer/index.tsx"),
				E = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				C = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				O = n("./src/lib/classNames/index.ts"),
				j = n("./src/higherOrderComponents/asTooltip.tsx"),
				k = n("./src/reddit/actions/tooltip.ts"),
				N = n("./src/reddit/actions/modal.ts"),
				w = n("./src/reddit/constants/modals.ts"),
				S = n("./src/reddit/controls/Dropdown/index.tsx"),
				P = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				T = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				I = n("./src/reddit/selectors/moderatorPermissions.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				A = n("./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less"),
				L = n.n(A);
			const M = u.a.wrapped(S.a, "_Dropdown", L.a),
				F = u.a.wrapped(T.a, "Pencil", L.a),
				D = u.a.a("DropdownRow", L.a),
				R = Object(j.a)(M),
				W = e => "SubredditChannels--Menu--".concat(e),
				U = Object(d.c)({
					isModerator: I.g,
					isDropdownOpen: (e, t) => Object(B.b)(W(t.subredditId))(e)
				}),
				H = u.a.wrapped(e => {
					const {
						className: t,
						isModerator: n,
						onOpenDropdown: r,
						isDropdownOpen: a,
						toggleModal: i
					} = e, c = W(e.subredditId);
					return o.a.createElement("button", {
						"aria-expanded": a,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Chat menu", null, {
							hk: "4DfuTV"
						}),
						className: Object(O.a)(L.a.top, t),
						id: c,
						onClick: () => r(c)
					}, o.a.createElement(P.a, null), o.a.createElement(R, {
						isOpen: a,
						tooltipId: c,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(D, {
						onClick: i
					}, n ? s.fbt._("Manage chatrooms", null, {
						hk: "2hIiuc"
					}) : s.fbt._("View rooms", null, {
						hk: "2XOg3o"
					}), o.a.createElement(F, null))))
				}, "OverflowMenu", L.a);
			var V = Object(c.b)(U, e => ({
					onOpenDropdown: t => e(Object(k.h)({
						tooltipId: t
					})),
					toggleModal: () => e(Object(N.i)(w.a.MANAGE_SUBREDDIT_CHAT))
				}))(H),
				G = n("./src/reddit/components/SubredditChannelList/index.tsx"),
				Z = n("./src/reddit/components/TrackingHelper/index.tsx"),
				K = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				z = n("./src/reddit/helpers/trackers/chat.ts"),
				q = n("./src/reddit/selectors/subreddit.ts"),
				J = n("./src/reddit/selectors/subredditChannel.ts"),
				Y = n("./src/reddit/components/SidebarSubredditChannels/index.m.less"),
				Q = n.n(Y);
			const X = u.a.div("Wrapper", Q.a),
				$ = Object(d.c)({
					isCollectionReady: J.e,
					isModerator: I.g,
					isWhitelistedSubreddit: q.e,
					shouldRequestCollection: J.f,
					subredditChannels: J.a
				});
			let ee;
			class te extends o.a.Component {
				constructor(e) {
					super(e)
				}
				shouldComponentUpdate(e, t) {
					return this.props.isCollectionReady !== e.isCollectionReady || this.props.isModerator !== e.isModerator || this.props.isWhitelistedSubreddit !== e.isWhitelistedSubreddit || this.props.shouldRequestCollection !== e.shouldRequestCollection || this.props.subredditChannels !== e.subredditChannels
				}
				componentDidMount() {
					this.trackViewEvent()
				}
				trackViewEvent() {
					this.props.subredditId !== ee && (ee = this.props.subredditId, this.props.sendEvent(Object(z.m)()))
				}
				isEnabled() {
					const {
						isModerator: e,
						isCollectionReady: t,
						isWhitelistedSubreddit: n,
						subredditChannels: s
					} = this.props, r = s && s.length;
					return !(!t || !n || !r && !e)
				}
				render() {
					const {
						subredditId: e,
						shouldRequestCollection: t
					} = this.props, n = o.a.createElement(G.b, {
						maxChannels: 3,
						parentContext: G.a.Widget,
						subredditId: e
					});
					return t ? n : this.isEnabled() ? o.a.createElement(E.a, null, o.a.createElement(K.a, {
						className: this.props.className,
						title: s.fbt._("Chat rooms", null, {
							hk: "4vn07S"
						}),
						headerButton: o.a.createElement(V, {
							subredditId: e
						})
					}, o.a.createElement(X, null, n))) : null
				}
			}
			var ne = Object(c.b)($)(Object(Z.c)(te)),
				se = n("./src/lib/makeListingKey/index.ts"),
				re = n("./src/reddit/actions/subreddit.ts"),
				ae = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				ie = n("./src/reddit/controls/Button/index.tsx"),
				oe = n("./src/reddit/helpers/name/index.ts"),
				ce = n("./src/reddit/helpers/overlay/index.ts"),
				de = n("./src/reddit/selectors/experiments/topPosts.ts"),
				le = n("./src/reddit/selectors/posts.ts"),
				ue = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const me = .99;
			class pe extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= me && t(n)
					}
				}
				render() {
					return o.a.createElement(ue.a, {
						threshold: me,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var be = pe,
				he = n("./src/lib/isUrl/index.ts"),
				ge = n("./src/lib/prettyPrintNumber/index.ts"),
				xe = n("./src/reddit/components/FlairWrapper/index.tsx"),
				fe = n("./src/reddit/components/Thumbnail/index.tsx"),
				ve = n("./src/reddit/models/Flair/index.ts"),
				ye = n("./src/reddit/models/Subreddit/index.ts"),
				_e = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				Ee = n.n(_e);
			const {
				fbt: Ce
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Oe = e => e.type === ve.f.Nsfw || e.type === ve.f.Spoiler, je = Object(d.c)({
				post: le.M,
				subredditOrProfile: le.Z
			});
			class ke extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: n
						} = this.props;
						e(t), n && n(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: n
						} = this.props;
						e.stopPropagation(), n && n(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: n,
						showSubredditName: s,
						subredditOrProfile: r
					} = this.props, a = {
						post: t
					}, i = Object(he.a)(Object(fe.b)(a)), c = t.flair.filter(Oe);
					return o.a.createElement("div", {
						className: Object(O.a)(Ee.a.container, e, {
							[Ee.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: Ee.a.mainLine
					}, i && o.a.createElement("div", {
						className: Ee.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(fe.a, a)), o.a.createElement("div", {
						className: Object(O.a)(Ee.a.title, !i && Ee.a.titleSingle),
						title: t.title
					}, c.length > 0 && o.a.createElement(xe.a, {
						className: Ee.a.flair,
						titleFlair: c,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: Ee.a.metaLine
					}, s && !!r && o.a.createElement("span", {
						className: Ee.a.meta
					}, Object(ye.f)(r) ? Object(oe.c)(r.displayText || r.name) : Object(oe.b)(r.displayText || r.name)), o.a.createElement("span", {
						className: Ee.a.meta
					}, Ce._({
						"*": "{score} points",
						_1: "1 point"
					}, [Ce._plural(t.score, "score", Object(ge.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: Ee.a.meta
					}, Ce._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [Ce._plural(t.numComments, "numComments", Object(ge.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Ne = Object(c.b)(je, e => ({
					openLightbox: t => e(Object(ce.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(ke),
				we = n("./src/reddit/components/SidebarPostList/index.m.less"),
				Se = n.n(we);
			const {
				fbt: Pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Te = 10, Ie = 2, Be = Object(d.a)(le.S, e => e.filter(e => !e.isSponsored)), Ae = Object(d.c)({
				posts: Be
			});
			class Le extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: n
						} = this.props, [s] = n;
						s && (t(s), e && e(s.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || Te, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((n, s) => (e = Math.ceil(s.posts.length / t), {
							chunkIdx: n.chunkIdx < e - 1 ? n.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: n,
							onPostVisible: s,
							redditStyle: r,
							smallPostClassName: a
						} = this.props;
						return o.a.createElement(be, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, o.a.createElement(Ne, {
							className: Object(O.a)(Se.a.smallPost, a),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(g.a)(Object(oe.f)(t)),
							thumbnailOnClick: n
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: n,
						moreButtonText: s,
						onPostVisible: r,
						posts: a,
						redditStyle: i,
						showMoreButton: c,
						topPostsVariant: d
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === a.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(de.a)(d),
						p = Object(de.b)(d),
						b = m || p,
						h = a.slice(l * u, (l + 1) * u),
						[x, ...f] = h,
						v = b ? h.slice(0, Ie) : f.slice(0, Ie),
						y = b ? h.slice(Ie) : f.slice(Ie);
					return o.a.createElement("div", {
						className: Object(O.a)(Se.a.container, t, {
							[Se.a.redditStyle]: i
						})
					}, !b && o.a.createElement(be, {
						onPostVisible: r,
						postId: x.id
					}, o.a.createElement(ae.a, {
						backgroundWrapperClassName: Se.a.largePostBackgroundWrapper,
						descriptionClassName: Se.a.largePostDescription,
						innerContainerClassName: Se.a.largePostInnerContainer,
						"data-redditstyle": i,
						onPostClick: this.openLargePost,
						postId: x.id,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(oe.f)(n)),
						trendingPost: x
					})), v.map(this.renderSmallPost), e, y.map(this.renderSmallPost), c && o.a.createElement(ie.n, {
						className: Se.a.SeeMore,
						onClick: this.showMorePosts
					}, s || Pe._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var Me = Object(c.b)(Ae, e => ({
					openPost: t => e(Object(ce.a)(t.permalink))
				}))(Le),
				Fe = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				De = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				Re = n("./src/reddit/selectors/discoveryUnit.ts"),
				We = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				Ue = n.n(We);
			const He = 10,
				Ve = Object(d.a)((e, t) => t.subredditName, e => Object(se.a)(e, l.O.TOP, {
					t: l.Sb.WEEK
				})),
				Ge = Object(d.c)({
					discoveryUnit: e => Object(Re.c)(e, {
						unitName: De.j
					}),
					listingKey: Ve,
					posts: (e, t) => {
						const n = Ve(e, t);
						return Object(le.S)(e, {
							listingKey: n
						})
					},
					subreddit: q.A
				});
			class Ze extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(Fe.h)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(Fe.x)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(Fe.C)(t, e, void 0, n))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: n,
						loadMorePosts: r,
						posts: a,
						subredditName: i,
						topPostsVariant: c
					} = this.props;
					if (0 === a.length) return null;
					const d = i,
						l = a.length > He;
					return o.a.createElement(K.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(Me, {
						listingKey: n,
						listingName: d,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: Ue.a.smallPost,
						showMoreButton: l,
						topPostsVariant: c
					}, o.a.createElement("div", null, e)))
				}
			}
			var Ke = Object(c.b)(Ge, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						loadMorePosts: () => e(Object(re.r)({
							sort: l.O.TOP,
							subredditName: n,
							t: l.Sb.WEEK
						}))
					}
				})(Object(Z.c)(Ze)),
				ze = n("./src/config.ts"),
				qe = n("./src/lib/localStorageAvailable/index.ts"),
				Je = n("./src/higherOrderComponents/asModal/index.tsx"),
				Ye = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Qe = n("./src/reddit/controls/TextButton/index.tsx"),
				Xe = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: $e
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class et extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(Ye.d, null, o.a.createElement(Ye.h, null, o.a.createElement(Xe.a, null, o.a.createElement(Ye.p, null, $e._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), o.a.createElement(Qe.a, {
						onClick: e.toggleModal
					}, o.a.createElement(Ye.b, null)))), o.a.createElement(Ye.k, null, o.a.createElement(Ye.o, null, $e._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), o.a.createElement(Ye.f, null, o.a.createElement(Ye.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, $e._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(Ye.q, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, $e._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var tt = Object(Je.a)(et),
				nt = n("./src/reddit/components/IdCard/Banner.tsx"),
				st = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				rt = n("./src/reddit/constants/blade.ts"),
				at = n("./src/reddit/controls/InternalLink/index.tsx"),
				it = n("./src/reddit/helpers/localStorage/index.ts"),
				ot = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				ct = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				dt = n("./src/reddit/icons/svgs/Close/index.tsx"),
				lt = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				ut = n("./src/reddit/selectors/activeModalId.ts"),
				mt = n("./src/reddit/selectors/structuredStyles.ts"),
				pt = n("./src/reddit/components/IdCard/index.m.less"),
				bt = n.n(pt),
				ht = n("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				gt = n.n(ht);
			const xt = "mod_onboarding_modal",
				ft = "mod_onboarding_widget",
				vt = Object(d.a)(ut.a, (e, t) => Object(I.a)(lt.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(mt.l)(e, {
					subredditId: t.subredditId
				}), (e, t, n) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					modHasEditedBanner: !n || !!(n.bannerBackgroundImage || n.bannerHeight || n.bannerPositionedImage || n.bannerBackgroundColor),
					modHasEditedColors: !n || !!(n.primaryColor || n.highlightColor || n.backgroundColor || n.backgroundImage),
					modHasEditedIcon: !n || (!!n.communityIcon || !!n.bannerShowCommunityIcon)
				}));
			class yt extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(it.W)(ft, !0, this.props.subredditId), this.props.sendEvent(Object(ot.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(ot.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(ot.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(ot.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(ot.d)("styling_generic_link"))
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						hasModeratorPermissions: e,
						modHasEditedBanner: t,
						modHasEditedColors: n,
						modHasEditedIcon: s,
						subredditId: r
					} = this.props, a = e && !(t && n && s) && (!Object(qe.a)() || !Object(it.q)(ft, r));
					a !== this.state.visible && (this.setState({
						visible: a
					}), a && this.props.sendEvent(Object(ot.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						modHasEditedBanner: t,
						modHasEditedColors: n,
						modHasEditedIcon: r,
						subredditName: a,
						toggleCloseMenuModal: i
					} = this.props;
					return this.state.visible ? o.a.createElement(K.a, {
						className: Object(O.a)(gt.a.container, this.props.className)
					}, o.a.createElement(nt.a, {
						bannerBackgroundImage: "".concat(ze.a.assetPath, "/img/id-cards/mod-onboarding@2x.png")
					}), o.a.createElement(dt.a, {
						className: gt.a.closeIcon,
						onClick: i
					}), Object(st.a)({
						titleText: s.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(x.b)("url('".concat(ze.a.assetPath, "/img/id-cards/snoo-artist@2x.png')"))
					}), o.a.createElement("div", {
						className: Object(O.a)(bt.a.Description, gt.a.description)
					}, s.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [s.fbt._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: rt.e.exportImport,
						className: gt.a.modHelpLink,
						target: "_blank"
					}, s.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), o.a.createElement(at.a, {
						to: "/r/".concat(a, "?styling=true&route=").concat(rt.c.NameAndIcon),
						className: gt.a.link,
						onClick: this.customizeIcon
					}, r ? o.a.createElement(ct.a, {
						className: gt.a.checked
					}) : o.a.createElement(ct.a, {
						className: gt.a.unchecked
					}), s.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), o.a.createElement(at.a, {
						to: "/r/".concat(a, "?styling=true&route=").concat(rt.c.Banner),
						className: gt.a.link,
						onClick: this.customizeBannerImage
					}, t ? o.a.createElement(ct.a, {
						className: gt.a.checked
					}) : o.a.createElement(ct.a, {
						className: gt.a.unchecked
					}), s.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), o.a.createElement(at.a, {
						to: "/r/".concat(a, "?styling=true&route=").concat(rt.c.Global),
						className: gt.a.link,
						onClick: this.customizeThemeColors
					}, n ? o.a.createElement(ct.a, {
						className: gt.a.checked
					}) : o.a.createElement(ct.a, {
						className: gt.a.unchecked
					}), s.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), o.a.createElement(ie.k, {
						to: "/r/".concat(a, "?styling=true"),
						className: gt.a.button,
						onClick: this.customizeAppearance
					}, s.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), o.a.createElement("div", {
						className: gt.a.subtext
					}, s.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === xt && o.a.createElement(tt, {
						withOverlay: !0,
						toggleModal: i,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var _t = Object(c.b)(vt, (e, t) => {
					let {
						subredditId: n,
						subredditName: s
					} = t;
					return {
						toggleCloseMenuModal: () => e(Object(N.i)(xt))
					}
				})(Object(Z.c)(yt)),
				Et = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				Ct = n("./src/reddit/constants/tracking.ts"),
				Ot = n("./src/reddit/selectors/seo/linksModule.ts"),
				jt = n("./src/reddit/selectors/telemetry.ts"),
				kt = n("./src/telemetry/models/Subreddit.ts");
			const Nt = e => t => Object.assign(Object.assign({}, jt.defaults(t)), {
					action: Ct.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				wt = e => t => n => Object.assign(Object.assign({}, jt.defaults(n)), {
					action: Ct.c.CLICK,
					noun: Object(kt.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				St = Object(d.c)({
					communities: Ot.c
				});
			var Pt = Object(c.b)(St)(e => {
					const t = Object(Z.b)();
					return e.communities && e.communities.length ? o.a.createElement(E.a, null, o.a.createElement(Et.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: Nt,
						getSubscribeEventFactoryHandler: wt,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Tt = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				It = n("./src/reddit/featureFlags/index.ts"),
				Bt = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				At = n("./src/reddit/models/Widgets/index.ts"),
				Lt = n("./src/reddit/selectors/communityFlairs.ts"),
				Mt = n("./src/reddit/selectors/listings.ts"),
				Ft = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				Dt = n.n(Ft);
			const Rt = 250,
				Wt = 270,
				Ut = u.a.wrapped(_.a, "SidebarContainer", Dt.a),
				Ht = Object(d.c)({
					apiError: Mt.c,
					apiPending: Mt.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(Lt.b)(e, n)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(Lt.c)(e, n)
					},
					showGovernance: It.d.spPoints,
					showLeaderboard: It.d.spLeaderboard,
					widgets: q.s
				}),
				Vt = Object(c.b)(Ht);
			class Gt extends i.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const n = this.getRelatedCommunitiesWidgetData();
						return n ? {
							id: "related-communities-widget",
							kind: "community-list",
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys) return Object.assign(Object.assign({}, this.getPostFlairWidget()), {
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: At.d.Cloud,
							shortName: s.fbt._("Filter by flair", null, {
								hk: "1DI34"
							}),
							templates: this.props.communityFlairModels
						})
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, n = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !a()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						listingName: t,
						showGovernance: n,
						showLeaderboard: s,
						subredditId: r,
						subredditName: a,
						topPostsVariant: i
					} = this.props;
					let c = 0;
					const d = Object(de.a)(i),
						u = Object(de.b)(i),
						g = Object(de.c)(i),
						x = d || u;
					let _, O;
					!!this.getPostFlairWidget() ? _ = this.props.widgets : (_ = this.getCommunityWidgets(), O = this.makeFlairFilterWidget());
					const j = this.makeRelatedCommunitiesWidget(d, u),
						k = !d,
						N = u,
						w = o.a.createElement(y.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: c++,
							position: Bt.a.FIRST,
							sizes: l.h
						});
					return o.a.createElement(Ut, {
						className: e
					}, f(t) && o.a.createElement(h.a, {
						listingName: t
					}), o.a.createElement(m.a, {
						cardClassName: Dt.a.card,
						subredditId: r
					}), x && o.a.createElement(E.a, null, o.a.createElement(Ke, {
						subredditName: a,
						topPostsVariant: i
					}, o.a.createElement("div", {
						className: Dt.a.inFeedAd
					}, w))), x && j && o.a.createElement(E.a, null, o.a.createElement(Tt.a, {
						subredditName: a,
						truncateThreshold: Wt,
						widget: j
					})), N && _.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(E.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Tt.a, {
							subredditName: a,
							truncateThreshold: Rt,
							widget: e
						}))
					}), o.a.createElement(_t, {
						subredditId: r,
						subredditName: a
					}), n && o.a.createElement(p.a, {
						className: Dt.a.card,
						subredditId: r
					}), O && o.a.createElement(E.a, null, o.a.createElement(Tt.a, {
						subredditName: a,
						widget: O
					})), s && o.a.createElement(b.a, {
						className: Dt.a.card,
						subredditId: r,
						uniqueId: r
					}), o.a.createElement(v.g, {
						subredditId: r
					}), !x && w, k && !N && _.map((e, t) => {
						const n = "community-list" === e.kind;
						return o.a.createElement(E.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Tt.a, {
							subredditName: a,
							truncateThreshold: g && n ? Wt : g ? Rt : void 0,
							widget: e
						}))
					}), o.a.createElement(ne, {
						subredditId: r
					}), o.a.createElement(Pt, {
						subredditId: r
					}), o.a.createElement(C.a, {
						adComponent: o.a.createElement(y.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: c++,
							position: Bt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = Vt(Gt)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/constants/elementClassNames.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				m = n.n(u),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const x = b.a.button("IconButton", m.a),
				f = b.a.wrapped(d.a, "SubscribeIcon", m.a),
				v = b.a.wrapped(c.a, "UnsubscribeIcon", m.a),
				y = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = g(e, ["border", "small"]);
					return a.a.createElement(x, s, a.a.createElement(f, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", m.a),
				_ = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = g(e, ["border", "small"]);
					return t ? a.a.createElement(o.f, h({}, s, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: n
						})
					})) : a.a.createElement(o.n, h({}, s, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", m.a),
				E = e => {
					var {
						icon: t
					} = e, n = g(e, ["icon"]);
					return t ? a.a.createElement(y, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : a.a.createElement(_, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				},
				C = b.a.wrapped(e => {
					var {
						border: t,
						small: n,
						type: s
					} = e, r = g(e, ["border", "small", "type"]);
					return a.a.createElement(x, r, a.a.createElement(v, {
						className: Object(p.a)(i.n, r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				O = b.a.wrapped(e => {
					var {
						border: t,
						small: n,
						buttonType: r
					} = e, i = g(e, ["border", "small", "buttonType"]);
					const c = a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === r ? s.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : s.fbt._("Following", null, {
							hk: "1wQlVR"
						})), a.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === r ? s.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : s.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						d = Object(p.a)(i.className, {
							[m.a.isSmall]: n
						});
					return t ? a.a.createElement(o.i, h({}, i, {
						className: d
					}), c) : a.a.createElement(o.n, h({}, i, {
						className: d
					}), c)
				}, "UnsubscribeButton", m.a),
				j = e => {
					var {
						icon: t
					} = e, n = g(e, ["icon"]);
					return t ? a.a.createElement(C, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : a.a.createElement(O, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				};
			class k extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: n = !1,
						id: s,
						small: r = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: r
					};
					return this.props.userIsSubscriber ? a.a.createElement(j, h({}, i, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(E, h({}, i, {
						id: s
					}), this.props.children, Object(l.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				a = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: n
					} = e;
					return a[r({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(a.a))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-TabBadger-Component").then(n.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(i.c)({
					postCount: l.R,
					previousPageIsOverlay: d.p,
					tabBadged: e => e.tabBadged
				}),
				m = Object(a.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : r.a.createElement(o.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, n) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, n) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, n) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				MessageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				messageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG"
			}
		},
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, n) {
			e.exports = {
				link: "_2e42jHFUxTCKhK9ZV7rkYM",
				unchecked: "KghweVAiFiX0RI_syl89Q",
				checked: "g4y6sLtk5FcL7BGU4ySVF",
				checkedFadeIn: "_3iW8CR-_Svhfa-LJLVcw2F",
				subtext: "_1STduBQ65V-3ECZ3WRoEKV",
				section: "_23svPjrTufAABoINCKRN_7",
				container: "_2YGvHlE11080fRAzC4onab",
				button: "_2F46jVXxeuK0SKM9TO-8pY",
				closeIcon: "_3mATOvmc_Q9pFcfcBXjFol",
				description: "_3js_prVH0h73q85Oa9P7lN"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/fastdom/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/flair.ts"),
				v = n("./src/reddit/helpers/trackers/postFlair.ts"),
				y = n("./src/reddit/models/Widgets/index.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				C = n.n(E);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const k = 129,
				N = Object(h.t)({
					filterName: e => Object(h.S)(e)[b.g],
					url: e => Object(h.X)(e)
				}),
				w = Object(o.c)({
					subredditId: (e, t) => Object(_.F)(e, t.subredditName)
				}),
				S = Object(i.b)(w),
				P = l.a.div("WidgetContent", C.a),
				T = e => {
					var {
						display: t,
						isFlairFilter: n,
						onMouseDown: s
					} = e, r = j(e, ["display", "isFlairFilter", "onMouseDown"]);
					return a.a.createElement("li", {
						className: Object(c.a)(C.a.StyledFlair, t === y.d.Cloud && C.a.cloudDisplay, {
							[C.a.flairFilter]: n,
							[C.a["m-selected"]]: r.isSelected
						}),
						onMouseDown: s
					}, a.a.createElement(u.b, O({}, r, {
						className: C.a.Flair,
						isFlairFilter: n,
						forceSmallEmojis: !0
					})))
				};
			class I extends a.a.Component {
				constructor(e) {
					super(e), this.flairListRef = a.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(v.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(v.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(v.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(f.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(f.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > k && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return a.a.createElement(g.n, {
						className: C.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? s.fbt._("See more", null, {
						hk: "2fWFes"
					}) : s.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return a.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => a.a.createElement(T, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, n = t ? k : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return a.a.createElement("div", {
						className: C.a.flairFilterContainer,
						style: {
							maxHeight: n
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return a.a.createElement("ul", null, a.a.createElement(T, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: n
					} = this.state, s = t.order, r = this.getFlairsFromIds(s), i = e && this.getSelectedFlair(r) || void 0, o = t.order.length > s.length || n && !i;
					return a.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, a.a.createElement(P, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(r), o && this.renderButton()))
				}
			}
			t.a = N(S(Object(m.c)(I)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				p = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				h = n("./src/reddit/models/Widgets/index.ts"),
				g = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				x = n.n(g);
			const f = c.a.div("RuleShortName", x.a),
				v = c.a.div("RuleIndex", x.a),
				y = c.a.div("RuleTitle", x.a),
				_ = c.a.div("RuleDescription", x.a),
				E = c.a.wrapped(d.a, "RawHTMLDisplay", x.a),
				C = {};
			class O extends a.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === h.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: s
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !s(e) && !!r;
					return a.a.createElement(f, {
						className: Object(o.a)({
							[x.a.pointerCursor]: i
						}),
						onClick: s(e) || !r ? void 0 : n
					}, a.a.createElement(b.a, null, a.a.createElement(v, null, "".concat(e.humanIndex, ".")), a.a.createElement(y, null, "".concat(e.rule.shortName)), a.a.createElement("div", null, !s(e) && r && (t.isVisible ? a.a.createElement(p.a, {
						className: x.a.Chevron
					}) : a.a.createElement(m.a, {
						className: x.a.Chevron
					})))), t.isVisible && a.a.createElement(_, null, e.rule.descriptionRichText ? a.a.createElement(l.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: C
					}) : e.rule.descriptionHtml ? a.a.createElement(E, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const j = e => e.rules.length > 0 ? a.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: s.fbt._("{subredditName} Rules", [s.fbt._param("subredditName", "r/".concat(e.subredditName))], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return a.a.createElement(O, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => a.a.createElement(j, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/linkMatchers/index.ts"),
				b = n("./src/reddit/models/Image/index.tsx"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/Widgets/Button/index.m.less"),
				y = n.n(v);
			const _ = (e, t, n) => {
					let s = {},
						r = {};
					s = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, n) => {
						let {
							color: s,
							fillColor: r,
							textColor: a
						} = e;
						return t && (s = a = n, r = "transparent"), {
							"--widget-button-background-color": "".concat(r || "transparent"),
							"--widget-button-border": "1px solid ".concat(s),
							"--widget-button-color": "".concat(a || s)
						}
					})(e, t, n);
					const a = e.hoverState || e;
					if (a.kind === g.f.Image) r = {
						"--widget-button-hover-background-image": "url('".concat(a.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: s,
							textColor: i
						} = a;
						t && (e = i = n, s = "transparent"), r = {
							"--widget-button-hover-background-color": "".concat(s || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(i || e)
						}
					}
					return Object.assign(Object.assign({}, s), r)
				},
				E = e => e.kind === g.f.Image ? y.a.imageButton : y.a.textButton,
				C = e => {
					const t = Object(g.n)(e),
						n = Object(p.g)(p.e, t);
					return n ? n.url : e.url
				},
				O = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: n
					} = e, s = Object(h.a)(e).button;
					return r.a.createElement(d.i, {
						className: E(t),
						style: _(t, n, s)
					}, t.kind === g.f.Text && r.a.createElement("span", {
						className: t.hoverState ? y.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && r.a.createElement("span", {
						className: y.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				j = e => r.a.createElement(l.b, {
					href: C(e.button),
					isSponsored: !1,
					source: null
				}, r.a.createElement(O, e)),
				k = m.a.wrapped(o.a, "RawHTMLDisplay", y.a);
			var N = Object(a.b)(() => Object(i.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: f.S
				}))(e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(k, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== b.c)).map(t => r.a.createElement(j, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				S = n("./src/lib/humanizeDate/index.ts"),
				P = n("./src/reddit/controls/TextButton/index.tsx"),
				T = n("./src/reddit/components/Widgets/Calendar/index.m.less"),
				I = n.n(T);
			const B = 100,
				A = {
					isExpanded: !1
				},
				L = m.a.wrapped(o.a, "RawHTMLDisplay", I.a),
				M = m.a.div("EventContainer", I.a),
				F = m.a.div("EventTitle", I.a),
				D = m.a.div("EventDate", I.a),
				R = m.a.div("EventLocation", I.a),
				W = m.a.div("EventDescription", I.a),
				U = m.a.wrapped(P.a, "ToggleDescription", I.a);
			class H extends r.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = A
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > B ? r.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, B), r.a.createElement(U, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? w.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : w.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : r.a.createElement(W, null, e.text)
				}
			}
			var V = e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, n) => r.a.createElement(M, {
					key: "".concat(n, "-").concat(t.title)
				}, r.a.createElement(F, null, t.titleHtml ? r.a.createElement(L, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(D, null, Object(S.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						n = t.getHours(),
						s = t.getMinutes();
					return s < 10 ? "".concat(n, ":0").concat(s) : "".concat(n, ":").concat(s)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(R, null, t.locationHtml ? r.a.createElement(L, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(H, {
					text: t.description
				})))),
				G = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Z = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var K = Object(G.c)(e => r.a.createElement(Z.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const z = Object(i.c)({
					stylesheet: e => e.stylesheets
				}),
				q = Object(a.b)(z),
				J = (e, t, n) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(n, "</body>");
			class Y extends r.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = J(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(c.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, r.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var Q = q(Y),
				X = n("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				$ = n.n(X);
			var ee = m.a.div("ImageFrame", $.a),
				te = n("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = n.n(te);
			var se = m.a.img("StyledImage", ne.a);
			class re extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === b.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== b.c) return t
					}
					return t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						props: t,
						state: n
					} = this;
					e.subredditName === t.subredditName && e.widget.data[n.imageIndex] && e.widget.data[n.imageIndex] === t.widget.data[n.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const n = e.widget.data[t.imageIndex],
						s = r.a.createElement(ee, null, r.a.createElement(se, {
							alt: w.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: n.url
						}));
					return n.linkUrl ? r.a.createElement(l.b, {
						href: n.linkUrl,
						isSponsored: !1,
						source: null
					}, s) : s
				}
			}
			var ae = re,
				ie = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				oe = n("./src/reddit/components/Flair/index.tsx"),
				ce = n("./src/reddit/controls/InternalLink/index.tsx"),
				de = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				le = n("./src/reddit/models/Flair/index.ts"),
				ue = n("./src/reddit/components/Widgets/Moderator/index.m.less"),
				me = n.n(ue);
			const pe = m.a.div("ModeratorListItem", me.a),
				be = m.a.div("Username", me.a),
				he = m.a.a("MessageModsLink", me.a),
				ge = m.a.wrapped(oe.b, "FlairComponent", me.a),
				xe = e => e.authorFlairType === le.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				fe = e => r.a.createElement(be, null, "u/".concat(e)),
				ve = m.a.wrapped(ce.a, "InternalLink", me.a),
				ye = m.a.div("LinkContainer", me.a);
			var _e = e => {
					const {
						subredditName: t,
						widget: n
					} = e;
					return r.a.createElement(c.a, {
						styles: n.styles,
						title: w.fbt._("Moderators", null, {
							hk: "3AMICc"
						}),
						headerButton: r.a.createElement(he, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, r.a.createElement(de.a, null))
					}, n.mods.map(e => r.a.createElement(pe, {
						key: e.name
					}, (e => r.a.createElement(ie.a, {
						to: "/user/".concat(e.name, "/")
					}, fe(e.name)))(e), r.a.createElement(ge, {
						flair: xe(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(ye, null, r.a.createElement(ve, {
						to: "/r/".concat(t, "/about/moderators/")
					}, w.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					}))))
				},
				Ee = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ce = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Oe = n("./src/reddit/components/Widgets/TextArea/index.m.less"),
				je = n.n(Oe);
			const ke = m.a.div("WidgetContent", je.a),
				Ne = m.a.wrapped(o.a, "RawHTMLDisplay", je.a);
			var we = e => r.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(ke, null, r.a.createElement(Ne, {
					html: e.widget.textHtml || ""
				}))),
				Se = n("./src/reddit/components/Widgets/Base/index.tsx"),
				Pe = e => r.a.createElement(Se.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return _e;
						case "textarea":
							return we;
						case "button":
							return N;
						case "subreddit-rules":
							return Ce.b;
						case "community-list":
							return K;
						case "calendar":
							return V;
						case "image":
							return ae;
						case "custom":
							return Q;
						case "post-flair":
							return Ee.a;
						default:
							return Pe
					}
				}(e.widget);
				return r.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: i.cb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(a.d([n], !0)),
					onSubscriptionsRequested: () => e(a.e()),
					onUnsubscribe: () => e(a.d([n], !1))
				}
			})
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlair.ts"),
				o = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				currentUser: b.i,
				flairStyleTemplate: d.R,
				hideNSFWPref: b.z,
				isActive: p.i,
				moderatorPermissions: u.i,
				modModeEnabled: d.P,
				post: p.M,
				showEditFlair: m.a,
				subredditOrProfile: p.Z,
				userIsOp: b.hb
			}), (e, t) => {
				let {
					postId: n
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						} = t;
						return e(Object(i.h)({
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const s = t === c.a.upvoted ? Object(a.Y)(n) : Object(a.w)(n);
						e(s)
					},
					onIgnoreReports: () => e(Object(a.W)(n)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, n), e), t), {
				onFlairChanged: n => {
					let {
						previewFlair: s,
						selectedTemplateId: r
					} = n;
					return t.dispatchFlairChanged({
						post: e.post,
						previewFlair: s,
						selectedTemplateId: r
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/constants/banners.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner", e.POWERUPS_BANNER = "powerups_banner"
				}(s || (s = {}))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			class a extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, a = n || s;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), !a && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};

			function d(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(a.b)(s)(e => {
					const {
						featureEnabled: s
					} = e, a = c(e, ["featureEnabled"]);
					return s ? r.a.createElement(t, a) : void 0 !== n ? r.a.createElement(n, a) : null
				})
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(s.a)(e).banner.iconImage ? String(Object(s.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "d", (function() {
				return x
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				o = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(o.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(o.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(o.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(s.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(a.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			}));
			const s = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				r = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				a = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				}),
				i = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				o = e => e => ({
					source: "mod_edu",
					action: "view",
					noun: "widget"
				})
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => Object.assign(Object.assign({}, r.defaults(e)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e),
					powerups: Object.assign(Object.assign({}, r.subredditPowerups(e)), {
						freeCount: t,
						paidCount: n
					})
				}),
				i = () => e => Object.assign(Object.assign({
					source: "postlist",
					action: "click",
					noun: "powerups_tier_cta"
				}, a(e)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				o = () => e => Object.assign(Object.assign({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta"
				}, a(e)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				c = (e, t) => n => Object.assign({
					source: "powerups_modal",
					action: "view",
					noun: "marketing_step"
				}, a(n, e, t)),
				d = (e, t) => n => Object.assign({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step"
				}, a(n, e, t)),
				l = (e, t) => n => Object.assign({
					source: "powerups_modal",
					action: "view",
					noun: "receipt_step"
				}, a(n, e, t))
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "x", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "t", (function() {
				return b
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "s", (function() {
				return x
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "w", (function() {
				return k
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "e", (function() {
				return B
			}));
			var s, r = n("./src/reddit/constants/chat.ts"),
				a = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				i = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(s || (s = {}));
			const c = (e, t) => {
					if (t) {
						const n = o.media(e, t.post.id),
							s = o.post(e, t.post.id),
							r = o.subreddit(e);
						if (t.post.authorInfo && s && (s.authorId = t.post.authorInfo.id), n) {
							n.streamPublicId = t.stream.stream_id, n.id = t.stream.stream_id;
							const s = Object(i.h)(e, {
								streamIdFromPath: t.post.id
							});
							s === i.a.LIVE ? n.type = "stream_live" : s === i.a.VOD ? n.type = "stream_vod" : s === i.a.UNAVAILABLE && (n.type = "stream_unavailable")
						}
						return {
							post: s,
							media: n,
							subreddit: r
						}
					}
					return {
						subreddit: o.subreddit(e)
					}
				},
				d = (e, t, n) => {
					if (!t || !n) return;
					const s = Object(i.h)(e, {
							streamIdFromPath: t.post.id
						}),
						a = t.chat_disabled || n.chatState === r.f.None;
					return {
						id: n.id,
						sessionDurationMs: n.sessionDurationMs,
						watchDurationMs: n.watchDurationMs,
						heartbeatDurationMs: n.heartbeatDurationMs,
						isLive: s === i.a.LIVE,
						playheadOffsetMs: n.playheadOffsetMs,
						timestampMs: n.timestampMs,
						startTimeMs: n.startTimeMs,
						volume: n.volume,
						chatState: a ? r.f.None : r.f.Compact,
						scrubbingStartMs: n.scrubbingStartMs,
						scrubbingEndMs: n.scrubbingEndMs,
						playerType: n.playerType
					}
				},
				l = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				u = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, c(e)),
				m = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, c(e)),
				p = (e, t) => n => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "rpan",
					actionInfo: {
						position: t || 0
					}
				}, c(n, e)),
				b = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: d(n, e, t)
				}, l(n)), e && Object.assign({}, c(n, e))),
				h = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: d(n, e, t)
				}, l(n)), c(n, e)),
				g = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: d(n, e, t)
				}, l(n)), c(n, e)),
				x = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: d(n, e, t)
				}, l(n)), c(n, e)),
				f = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share_video",
					playback: d(n, e, t)
				}, l(n)), c(n, e)),
				v = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: d(n, e, t)
				}, l(n)), c(n, e)),
				y = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: d(n, e, t)
				}, l(n)), c(n, e)),
				_ = (e, t) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: d(n, e, t)
				}, l(n)), c(n, e)),
				E = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: d(n, e, t)
				}, c(n, e)),
				C = e => t => {
					const n = Object(i.k)(t, e);
					return Object.assign({
						source: "stream_chat",
						action: "click",
						noun: "send_chat"
					}, c(t, n))
				},
				O = (e, t, n) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: d(s, t, n)
				}, c(s, t)),
				j = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: d(n, e, t)
				}, l(n)),
				k = e => t => Object.assign({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.profile(t),
					screen: o.screen(t)
				}, c(t, e)),
				N = e => e => {
					const t = c(e);
					return !Object(a.f)(e) && t.subreddit && (t.subreddit.id = void 0), Object.assign({
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.profile(e),
						screen: o.screen(e)
					}, t)
				},
				w = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: d(n, e, t)
				}, c(n, e)),
				S = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: d(n, e, t)
				}, c(n, e)),
				P = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: d(n, e, t)
				}, c(n, e)),
				T = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: d(n, e, t)
				}, c(n, e)),
				I = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: d(n, e, t)
				}, c(n, e)),
				B = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: d(n, e, t)
				}, c(n, e))
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "r", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "o", (function() {
				return j
			}));
			var s = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => Object.assign(Object.assign({}, r.defaults(e)), {
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				i = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, a(e)),
				o = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, a(e)),
				c = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, a(t)),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return c(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = c("compare_wiki_pages"),
				u = c("revert_wiki_page"),
				m = c("view_wiki_page"),
				p = c("view_source"),
				b = c("add_wiki_page_contributor"),
				h = c("remove_wiki_page_contributor"),
				g = c("save_wiki_page_settings"),
				x = c("copy_url"),
				f = c("add_wiki_subreddit_contributor"),
				v = c("remove_wiki_subreddit_contributor"),
				y = c("ban_wiki_contributor"),
				_ = c("unban_wiki_contributor"),
				E = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				C = {
					[s.a.Inherit]: "subreddit_wiki_perms",
					[s.a.Contributors]: "only_wiki_contributors",
					[s.a.Mods]: "only_mods"
				},
				O = e => t => Object.assign(Object.assign({}, a(t)), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: r.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				j = e => t => Object.assign(Object.assign({}, a(t)), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: r.actionInfo(t, {
						settingValue: C[e]
					})
				})
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, n) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Envelope/index.m.less"),
				o = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("envelope"), " ").concat(e.className)
			}), "Envelope", o.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Pencil/index.m.less"),
				o = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(o.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/DownToChatAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				cls1: "_27ZvSsL0zi1nAja8nD5wM8",
				cls3: "qXtY7I_GoiY3yZuQSiIxk",
				cls4: "_2CRPf4Bo0p7KCRDFYv6WzO",
				cls5: "_2dYeHLcTCSuVCgU8GN_pWV",
				cls7: "_3vSXIQsi-G_3bo41eaYRjh",
				cls6: "_1mQOm7u0X9LlZoCnM5HHkJ",
				cls8: "_3fxIhlHWNlaXwlNMXtCZ-x",
				cls9: "_1L0T9MQ7u60GxCoL3DFJ4Z",
				cls10: "_1xlX8IJ47jyoodC4L9co14"
			}
		},
		"./src/reddit/icons/svgs/Powerup/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M12.249 32c-.4 0-.8-.1-1.2-.25l-.05-.05-5.05-2.6c-1.25-.7-1.75-2.2-1.25-3.5l.05-.1 2.45-5.45-3.15-1.5a2.985 2.985 0 01-1.4-3.55l3.5-12.05C6.649 1.2 8.299 0 10.099 0h7.8c.45 0 .9.1 1.3.3l.15.1 4.85 2.45c1.5.8 2.05 2.55 1.35 4.05l-2.2 4.3 4.45 2.25c.8.45 1.35 1.25 1.45 2.2.1.9-.2 1.8-.9 2.45l-14.15 13.15c-.55.5-1.25.75-1.95.75z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M10.648 17l-.85 2.1-4.65-2.2c.1.05.25.1.4.1h5.1zM23.749 13.6l3.1 1.6c.5.3.65 1 .15 1.45L12.849 29.8c-.3.25-.65.3-.95.15l-4.85-2.5c.3.1.65.1.9-.15l14.15-13.15c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M23.75 13.6l3.1 1.6c.5.3.65 1 .15 1.45l-4.9-2.5c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF8717"
			}), r.a.createElement("path", {
				d: "M18.898 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-3.35 6.55h-6.05l4.5-9.05z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M18.9 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-4.9-2.5z",
				fill: "#FF8717"
			}), r.a.createElement("path", {
				d: "M21.95 12.65c.5.3.65 1 .15 1.45L7.95 27.3c-.3.25-.65.3-.9.15l-.1-.05a.86.86 0 01-.4-1.05l4.1-9.35h-5.1c-.15 0-.3-.05-.45-.1l-.1-.05c-.4-.25-.65-.75-.5-1.25L8.05 3.55A2.19 2.19 0 0110.15 2h7.8c.15 0 .3.05.45.1l.05.05c.45.25.7.85.45 1.4l-4.5 9.05h7.1c.15 0 .3.05.4.1l.05-.05z",
				fill: "#FFD635"
			}), r.a.createElement("path", {
				d: "M15.599 3.45c.55-.15 1.15-.25 1.7-.45-.6-.1-1.15-.15-1.75-.2-.6-.05-1.15-.05-1.75-.1-1.15-.05-2.25 0-3.4.05-.55 0-1.05.3-1.35.8-.15.3-.15.35-.2.5l-.15.4-.5 1.55c-.35 1.05-.7 2.1-1 3.15-.3 1.05-.65 2.1-.9 3.2-.3 1.05-.6 2.15-.8 3.25.55-1 1-2 1.5-3 .45-1 .9-2 1.35-3.05.4-1 .85-2.05 1.2-3.1l.6-1.55.25-.65h.05c1.15-.1 2.3-.25 3.4-.45.6-.1 1.15-.2 1.75-.35zM20.25 13.35c-1.1-.05-2.2-.05-3.3 0-.55 0-1.1.05-1.65.1-.55.05-1.1.1-1.65.2.55.15 1.1.25 1.6.35.55.1 1.1.2 1.65.25.6.1 1.25.15 1.85.2-.45.45-.9.85-1.3 1.3-.75.75-1.5 1.5-2.25 2.3-.75.8-1.5 1.55-2.2 2.35-.7.8-1.45 1.6-2.1 2.45.9-.65 1.7-1.3 2.55-2 .85-.7 1.65-1.4 2.45-2.1.8-.7 1.6-1.45 2.4-2.15l2.35-2.2c.1-.1.15-.25.2-.4 0-.4-.3-.65-.6-.65z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					fillRule: "evenodd"
				}, r.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), r.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(s || (s = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(r || (r = {}))
		},
		"./src/reddit/pages/Subreddit/index.m.less": function(e, t, n) {
			e.exports = {
				duHeader: "otZ2uDhYTr1YmgF32ArRm",
				cardChild: "_3HLyjC36ED_cOkMhS77Ts1",
				classicChild: "_2YjutkjJwMliy9kOCltIuA",
				compactChild: "m6QmcOHa4tObaem8JhVz8",
				newbieBanner: "_2yjtWm1t0hFL9JDdG1EXR5",
				sidebar: "_3ZmEUUvrdj4LXpXC9XZdN7",
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx",
				af: "GWC1a5vux4ivxu9auf82p"
			}
		},
		"./src/reddit/pages/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/core-js/modules/es6.regexp.match.js"),
				r = n.n(s),
				a = n("./node_modules/core-js/modules/es6.array.sort.js"),
				i = n.n(a),
				o = n("./node_modules/core-js/modules/es6.regexp.search.js"),
				c = n.n(o),
				d = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = n("./node_modules/lodash/fromPairs.js"),
				u = n.n(l),
				m = n("./node_modules/react/index.js"),
				p = n.n(m),
				b = n("./node_modules/react-redux/es/index.js"),
				h = n("./node_modules/reselect/es/index.js"),
				g = n("./src/config.ts"),
				x = n("./src/lib/classNames/index.ts"),
				f = n("./src/lib/extractQueryParams/index.ts"),
				v = n("./src/lib/isAdHocMultireddit/index.ts"),
				y = n("./src/lib/isFakeSubreddit/index.ts"),
				_ = n("./src/lib/listingSort/index.ts"),
				E = n("./src/lib/makeListingKey/index.ts"),
				C = n("./src/lib/objectSelector/index.ts"),
				O = n("./src/lib/constants/index.ts"),
				j = n("./src/lib/fastdom/index.ts"),
				k = n("./src/lib/performanceTimings/index.tsx"),
				N = n("./src/reddit/actions/pages/subreddit.ts"),
				w = n("./src/reddit/actions/preferences.ts"),
				S = n("./src/reddit/actions/search.ts"),
				P = n("./src/reddit/actions/subreddit.ts"),
				T = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				I = n("./src/reddit/components/ContentGate/index.tsx"),
				B = n("./src/reddit/components/CreatePostBanner/index.tsx"),
				A = n("./src/reddit/components/DownToChatBanner/index.tsx"),
				L = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				M = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				F = n("./src/reddit/components/EmptySubreddit.tsx"),
				D = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				R = n("./src/reddit/components/Governance/ClaimPointsBanner/async.ts"),
				W = n("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				U = n("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				H = n("./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx"),
				V = n("./src/reddit/components/HeaderImage/index.tsx"),
				G = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				Z = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				K = n("./src/reddit/components/JumpToContent/index.tsx"),
				z = n("./src/reddit/components/ListingPostList/index.tsx"),
				q = n("./src/reddit/components/PowerupsBanner/async.tsx"),
				J = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				Y = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				Q = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				X = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				$ = n("./src/reddit/components/SubredditSidebar/index.tsx"),
				ee = n("./src/reddit/components/TabBadger/index.tsx"),
				te = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ne = n("./src/reddit/constants/page.ts"),
				se = n("./src/reddit/constants/parameters.ts"),
				re = n("./src/reddit/constants/postLayout.ts"),
				ae = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = n("./src/reddit/featureFlags/index.ts"),
				oe = n("./src/reddit/helpers/correlationIdTracker.ts"),
				ce = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				de = n("./src/reddit/helpers/trackers/screenview.ts"),
				le = n("./src/reddit/layout/page/Listing/index.tsx"),
				ue = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				me = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				pe = n("./src/reddit/selectors/discoveryUnit.ts"),
				be = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				he = n("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				ge = n("./src/reddit/selectors/experiments/snoovatar.ts"),
				xe = n("./src/reddit/selectors/experiments/topPosts.ts"),
				fe = n("./src/reddit/selectors/experiments/trending.ts"),
				ve = n("./src/reddit/selectors/listings.ts"),
				ye = n("./src/reddit/selectors/meta.ts"),
				_e = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Ee = n("./src/reddit/selectors/posts.ts"),
				Ce = n("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				Oe = n("./src/reddit/selectors/subreddit.ts"),
				je = n("./src/reddit/selectors/user.ts"),
				ke = n("./src/reddit/pages/Subreddit/index.m.less"),
				Ne = n.n(ke);

			function we() {
				return (we = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pe = Object(d.a)({
				resolved: {},
				chunkName: () => "reddit-components-AdHocMultiredditSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("reddit-components-AdHocMultiredditSidebar")]).then(n.bind(null, "./src/reddit/components/AdHocMultiredditSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdHocMultiredditSidebar/index.tsx"
				}
			}), Te = 5, Ie = 3, Be = Object(ae.t)(), Ae = Object(d.a)({
				resolved: {},
				chunkName: () => "SubredditTopContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), n.e("SubredditTopContent")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx"
				}
			}), Le = Object(C.a)(Object(h.a)((e, t) => {
				let {
					location: n
				} = t;
				return n.search
			}, e => u()([...Object(f.a)(e)]))), Me = Object(h.a)((e, t) => {
				let {
					match: n
				} = t;
				return n.params.subredditName
			}, (e, t) => {
				let {
					match: n
				} = t;
				return n.params.sort
			}, Le, je.V, be.a, (e, t, n, s, r) => {
				let a = t;
				a || (e === ne.f && r ? a = O.O.BEST : Object(y.a)(e) && (a = O.O.HOT));
				const i = Object(N.g)(n, s);
				return Object(N.h)(e, a, n, i)
			}), Fe = Object(h.c)({
				isTopContentDismissed: je.N
			}), De = Object(h.c)({
				subreddit: (e, t) => Object(Oe.A)(e, {
					subredditName: t.match.params.subredditName
				})
			}), Re = Object(h.c)({
				countryMeta: ye.b,
				geopopular: je.m
			}), We = Object(h.c)({
				isLoggedIn: je.H
			}), Ue = Object(C.a)((e, t) => {
				const {
					subreddit: n
				} = De(e, t), {
					subredditName: s
				} = t.match.params;
				if (n) {
					const r = Me(e, t),
						a = Object(_e.a)(me.c.config)(e, {
							subredditId: n.id
						}),
						i = Object(Ee.J)(e, r, s, !0),
						o = !Object(ve.d)(e, {
							listingKey: r
						});
					if (a && o && i.length <= 1) return !0
				}
				return !1
			}), He = Object(h.c)({
				inGoldPowerupsExperiment: he.a,
				isPopular: ae.C,
				isInTrendingEntrypointExperiment: fe.a
			}), Ve = e => {
				const t = se.u in e && e[se.u].toUpperCase();
				if ("string" == typeof t && t in O.Sb) return O.Sb[t]
			}, Ge = Object(C.a)((e, t) => {
				const {
					sort: n,
					subredditName: s
				} = t.match.params, r = Le(e, t);
				if (n) return Object(_.b)({
					sort: n,
					timeSort: Ve(r)
				});
				if (Object(y.a)(s)) return s === ne.f && Object(be.a)(e) ? Object(_.b)({
					sort: O.O.BEST
				}) : Object(_.b)({
					sort: O.O.HOT
				});
				const a = Me(e, t),
					i = e.listings.postOrder.listingSort[a];
				if (i && !i.hasChanged) return Object(_.d)(i.sort);
				const {
					subreddit: o
				} = De(e, t);
				if (o) {
					const t = Object(Oe.D)(e, {
						subredditId: o.id
					});
					return Object(_.d)(t)
				}
				return Object(_.d)(e.user.prefs.sort)
			}), Ze = Object(C.a)((e, t) => {
				const {
					subredditName: n
				} = t.match.params;
				return Object(Oe.V)(e, {
					subredditName: n
				})
			}), Ke = Object(h.c)({
				claimablePointsEnabled: ie.d.spClaimablePoints,
				isBlacklistedTopContentPage: pe.f,
				listingKey: Me,
				sortParams: Ge,
				subredditPremiumEnabled: ie.d.spPremiumUpsells,
				stellarRegistrationBannerEnabled: ie.d.spStellarWalletRegistration,
				topContent: Ze,
				topContentDiscoveryUnit: e => Object(pe.c)(e, {
					unitName: ue.a
				}),
				topPostsVariant: xe.d,
				walletRegistrationBannerEnabled: ie.d.spWalletRegistrationBanner
			}), ze = Object(h.c)({
				showCreatePostBanner: Ue,
				contentGateInfo: (e, t) => Object(je.e)(e, t.match.params.subredditName),
				layout: ae.N,
				isRpanDuVisible: (e, t) => {
					let {
						match: n
					} = t;
					return Object(Ce.a)(e, {
						listingName: "r/".concat(n.params.subredditName)
					})
				},
				rpanInjectionIndex: (e, t) => {
					let {
						match: n
					} = t;
					return Object(Ce.b)(e, {
						listingName: "r/".concat(n.params.subredditName)
					})
				},
				isSnoovatarEmbedEnabled: ge.a
			}), qe = () => Object(h.a)(je.V, Re, Le, Fe, De, (e, t) => {
				let {
					match: n
				} = t;
				return Object(Oe.x)(e, {
					subredditName: n.params.subredditName
				})
			}, We, (e, t) => {
				let {
					match: n
				} = t;
				return n.params.subredditName
			}, He, Ke, ze, (e, t, n, s, r, a, i, o, c, d, l) => {
				let {
					countryMeta: u,
					geopopular: m
				} = t, {
					isTopContentDismissed: p
				} = s, {
					subreddit: b
				} = r, {
					isLoggedIn: h
				} = i, {
					inGoldPowerupsExperiment: g,
					isInTrendingEntrypointExperiment: x,
					isPopular: f
				} = c, {
					claimablePointsEnabled: v,
					subredditPremiumEnabled: y,
					listingKey: _,
					sortParams: {
						sort: E,
						timeSort: C
					},
					stellarRegistrationBannerEnabled: j,
					topContent: k,
					topContentDiscoveryUnit: N,
					topPostsVariant: w,
					isBlacklistedTopContentPage: S,
					walletRegistrationBannerEnabled: P
				} = d;
				const T = u || O.w.Everywhere,
					I = m || T,
					B = n && se.h in n ? n[se.h].toUpperCase() : I,
					A = !!n.hasOwnProperty("f");
				return Object.assign({
					countrySort: B,
					claimablePointsEnabled: v,
					subredditPremiumEnabled: y,
					inGoldPowerupsExperiment: g,
					isLoggedIn: h,
					isInTrendingEntrypointExperiment: x,
					isPopular: f,
					listingKey: _,
					renderNSFWContentGate: b && b.isNSFW && !e,
					isTopContentDismissed: p,
					sort: E,
					stellarRegistrationBannerEnabled: j,
					subreddit: b,
					subredditAboutInfo: a,
					subredditName: o,
					timeSort: C,
					topContent: k,
					topContentDiscoveryUnit: N,
					topPostsVariant: w,
					isBlacklistedTopContentPage: S,
					isFlairFilter: A,
					walletRegistrationBannerEnabled: P
				}, l)
			}), Je = (e, t) => ({
				onLoadMorePosts: () => e(P.r({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				onLoadMoreSearchResults: () => e(Object(S.g)([O.Nb.Posts])),
				refreshFeed: () => e(P.s({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				setTopContentDismissalPref: () => e(Object(w.F)())
			}), Ye = Object(b.b)(qe, Je), Qe = Object(d.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("Trending").then(n.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), Xe = e => p.a.createElement(Qe, we({}, e, {
				fallback: p.a.createElement(Q.a, {
					className: e.className,
					showCardView: !!e.showCardView
				})
			})), $e = Object(d.a)({
				resolved: {},
				chunkName: () => "FrontpageSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("FrontpageSidebar").then(n.bind(null, "./src/reddit/components/FrontpageSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/FrontpageSidebar/index.tsx"
				}
			}), et = Object(d.a)({
				resolved: {},
				chunkName: () => "TopWeekPostsDiscoveryUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), n.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), n.e("TopWeekPostsDiscoveryUnit")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx"
				}
			});

			function tt(e) {
				const {
					isSnoovatarEmbedEnabled: t,
					subreddit: n
				} = e;
				return !!n && t && !!n.name && "snoovatar" === n.name.toLowerCase()
			}
			class nt extends p.a.Component {
				constructor() {
					super(...arguments), this.onTopContentDismissed = () => {
						this.props.setTopContentDismissalPref()
					}
				}
				componentDidMount() {
					j.a.read(() => {
						Object(k.d)(k.c.Subreddit, this.props.isLoggedIn)
					})
				}
				componentDidUpdate(e) {
					e.isFlairFilter && !this.props.isFlairFilter && Object(oe.c)(oe.a.SearchResults) && Object(oe.b)(oe.a.SearchResults)
				}
				componentWillUnmount() {
					this.props.isFlairFilter && Object(oe.c)(oe.a.SearchResults) && Object(oe.b)(oe.a.SearchResults)
				}
				render() {
					const {
						claimablePointsEnabled: e,
						contentGateInfo: t,
						countrySort: n,
						inGoldPowerupsExperiment: s,
						isInTrendingEntrypointExperiment: r,
						isPopular: a,
						isLoggedIn: i,
						layout: o,
						listingKey: c,
						match: d,
						renderNSFWContentGate: l,
						showCreatePostBanner: u,
						sort: m,
						subredditPremiumEnabled: b,
						isTopContentDismissed: h,
						stellarRegistrationBannerEnabled: f,
						sendEvent: _,
						subreddit: C,
						subredditAboutInfo: j,
						subredditName: k,
						timeSort: N,
						topContent: w,
						topContentDiscoveryUnit: S,
						topPostsVariant: P,
						isBlacklistedTopContentPage: Q,
						isRpanDuVisible: te,
						rpanInjectionIndex: ne,
						isFlairFilter: se,
						walletRegistrationBannerEnabled: ae
					} = this.props, ie = Object(y.a)(k), oe = k.toLowerCase(), ue = "/r/".concat(k, "/"), me = {
						listingKey: c,
						listingName: oe
					}, pe = Object(xe.a)(P), be = Object(xe.b)(P), he = Object(xe.c)(P);
					let ge;
					ie ? ge = Object(v.a)(k) ? p.a.createElement(Pe, me) : p.a.createElement($e, me) : C && (ge = p.a.createElement($.a, we({}, me, {
						className: Ne.a.sidebar,
						subredditId: C.id,
						subredditName: k,
						topPostsVariant: P
					})));
					const fe = Object(ce.a)(t, l, k);
					if (fe) return p.a.createElement(I.default, fe);
					const ve = o === re.g.Large,
						ye = a && r,
						_e = C ? C.id : void 0,
						Ee = !d.params.sort && w && !w.isSubscribed && w.postIds && w.postIds.length >= Te && !h && !Q && !pe && !be,
						Ce = {},
						Oe = o === re.g.Classic ? Ne.a.classicChild : o === re.g.Compact ? Ne.a.compactChild : Ne.a.cardChild;
					if (b && C && o === re.g.Large && (Ce[0] = {
							estHeight: 487,
							id: "newbie-banner-".concat(o, "-").concat(c),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(M.a, {
									className: Object(x.a)(t, Ne.a.newbieBanner)
								})
							}
						}, Ce[3] = {
							estHeight: 256,
							id: "lfg-banner-".concat(o, "-").concat(c),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(L.a, {
									className: Object(x.a)(t, Ne.a.childLayoutClass),
									subredditId: C.id
								})
							}
						}), s && C && (Ce[4] = {
							estHeight: 336,
							id: "powerups-banner-".concat(o, "-").concat(c),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(q.a, {
									className: Object(x.a)(t, Ne.a.childLayoutClass),
									subredditId: C.id
								})
							}
						}), ae && C && (Ce[1] = {
							estHeight: 384,
							id: "wallet-registration-".concat(o, "-").concat(c),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(U.a, {
									className: Object(x.a)(t, Oe),
									subredditId: C.id
								})
							}
						}), f && C && (Ce[2] = {
							estHeight: 200,
							id: "stellar-registration-".concat(o, "-").concat(c),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(H.a, {
									className: Object(x.a)(t, Oe),
									subredditId: C.id
								})
							}
						}), e && C && (Ce[2] = {
							estHeight: 268,
							id: "claim-points-".concat(o, "-").concat(c),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(R.a, {
									className: Object(x.a)(t, Oe),
									subredditId: C.id
								})
							}
						}), !a && he && N !== O.Sb.WEEK && o === re.g.Large) {
						const e = Object(E.a)(k, O.O.TOP, {
							t: O.Sb.WEEK
						});
						Ce[Ie] = {
							estHeight: 0,
							id: "top-week-posts-".concat(o, "-").concat(c),
							render: t => {
								let {
									className: n
								} = t;
								return p.a.createElement(et, {
									className: n,
									listingKey: e,
									subredditName: k
								})
							}
						}
					}
					if (te) {
						const {
							child: e,
							idx: t
						} = Object(J.a)({
							children: Ce,
							desiredIndex: ne,
							layout: o,
							listingKey: c,
							listingName: "r/".concat(k),
							sendEvent: _
						});
						Ce[t] = e
					}
					const je = {
							baseUrl: ue,
							countrySort: n,
							sort: m,
							subredditId: _e,
							timeSort: N
						},
						ke = se ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Be = C && C.subscribers;
					let Le;
					if (tt(this.props)) {
						const e = new(0, window.URL)(g.a.snoovatarUrl + "/static/client/");
						e.searchParams.set("platform", "desktop"), Le = p.a.createElement("iframe", {
							className: Object(x.a)(Ne.a.af),
							src: e.href
						})
					} else ye && (Le = p.a.createElement(Xe, {
						showCardView: this.props.layout === re.g.Large
					}));
					return p.a.createElement(X.a, {
						subredditId: _e
					}, p.a.createElement(le.a, {
						subredditId: _e,
						className: Object(x.a)(Ne.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !ie && p.a.Children.toArray([p.a.createElement(V.a, {
							headerText: C ? C.name : k,
							disableFullscreen: ve,
							isTopBannerVariant: !0,
							key: "headerimage",
							subredditOrProfile: C,
							url: ue
						}), p.a.createElement(T.a, {
							layout: o,
							key: "idtopbar",
							subreddit: C || void 0,
							subredditId: _e,
							subredditName: k,
							subredditUrl: ue
						})]),
						trendingUnit: Le,
						content: p.a.createElement(p.a.Fragment, null, C && C.isQuarantined && p.a.createElement(Z.a, {
							subredditName: k
						}), C && u && p.a.createElement(B.a, {
							subreddit: C,
							listingKey: c,
							listingName: oe
						}), ye && p.a.createElement(Y.a, {
							className: Ne.a.duHeader
						}, Se._("Popular posts", null, {
							hk: "Gfyj2"
						})), Ee && p.a.createElement(Ae, {
							discoveryUnit: S,
							subredditName: C ? C.name : k,
							topContent: w,
							onCloseClick: this.onTopContentDismissed
						}), !ie && i && !(j && j.userIsBanned) && p.a.createElement(G.a, {
							subredditName: k
						}), p.a.createElement(D.a, je), C && p.a.createElement(A.a, {
							subreddit: C
						}), p.a.createElement(K.a, null), p.a.createElement(ee.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: c,
							subredditName: k,
							subscriberCount: Be
						}), p.a.createElement(z.a, {
							injectChildren: Ce,
							listingKey: c,
							listingName: oe,
							listingViewed: (e, t) => Object(de.e)(c, m, t, e, N),
							noPostsComponent: () => p.a.createElement(F.a, {
								listingName: oe,
								sort: m,
								subreddit: C || void 0
							}),
							onLoadMore: ke,
							inSubredditOrProfile: !ie
						}), p.a.createElement(W.a, null)),
						sidebar: ge
					}))
				}
			}
			t.default = Be(Ye(Object(te.c)(nt)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				o = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(s.a)(c.a, c.c, (e, t) => {
					let {
						listingName: n
					} = t;
					const s = Object(o.lb)(e);
					if (!s) return !1;
					let c;
					if (-1 === [a.P, "r/popular"].indexOf(n)) {
						const t = n.replace(/^r\//, ""),
							r = Object(i.F)(e, t),
							a = s.subreddit[r];
						if (!a) return !1;
						c = a
					} else c = s;
					if (!c.rpanDuDismissalTime) return !1;
					return new Date(c.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.x
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return n
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(d.m)(e, {
						subreddit: n
					})
				}, d.k, (e, t, n, s, r, i) => {
					if (!e) return !1;
					if (i.isPermanentlyCanceled) return !1;
					if (n) return !1;
					if (t) return !!r && r.show_discovery_unit;
					if (!i.global.viewer_enabled) return !1;
					return [a.P, "r/popular"].indexOf(s) > -1
				}),
				u = Object(s.a)(c.c, (e, t) => {
					let {
						listingName: n
					} = t;
					return n
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(d.m)(e, {
						subreddit: n
					})
				}, d.l, (e, t, n, s) => {
					if (!e) {
						const e = "home" === t ? s.home_feed_discovery_unit_index : "r/popular" === t ? s.popular_feed_discovery_unit_index : a.i;
						return "number" == typeof e ? e : a.i
					}
					return n ? n.discovery_unit_index : a.i
				})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return C
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "g", (function() {
				return P
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "j", (function() {
				return M
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "h", (function() {
				return H
			})), n.d(t, "b", (function() {
				return V
			})), n.d(t, "d", (function() {
				return G
			}));
			n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
				d = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				u = n("./node_modules/lodash/memoize.js");
			const m = e => e.publicAccessNetwork.listings,
				p = n.n(u)()(e => Object(r.a)(Object(s.a)(m, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var b = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				x = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				v = e => e.publicAccessNetwork.hlsStreams,
				y = Object(s.a)(v, e => e.ended),
				_ = Object(s.a)(v, e => e.removed),
				E = Object(s.a)(e => e.publicAccessNetwork.models, y, _, (e, t, n) => {
					const s = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = R(s, o.a.ENDED) ? o.a.ENDED : s,
							a = n.stream.vod_accessible;
						return r === s && !0 === a ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, n), {
								stream: Object.assign(Object.assign({}, n.stream), {
									state: r,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return n.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = R(s, o.a.ENDED) ? o.a.ENDED : s,
							a = n.stream.vod_accessible;
						return r === s && !1 === a ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, n), {
								stream: Object.assign(Object.assign({}, n.stream), {
									state: r,
									vod_accessible: !1
								})
							})
						})
					}, s)
				}),
				C = (e, t) => {
					return E(e)[Object(i.g)(t)]
				},
				O = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n
				}, (e, t) => p(t.listingName)(e, t), E, h, c.h, d.c, (e, t, n, s, r, c) => {
					if (c) {
						const a = [];
						if (e) {
							const t = Object(i.g)(e);
							n[t] && a.push(t)
						}
						const c = a.concat(t),
							d = [...new Set(c)],
							l = new Set([...s, ...r]);
						return d.filter(e => {
							const t = n[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
						})
					}
					const d = new Set([...s, ...r]);
					return Object.keys(n).filter(e => !d.has(e)).map(e => n[e]).filter(e => e.rank !== a.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== o.a.KILLED && e.stream.state !== o.a.PURGED).map(e => e.post.id)
				}),
				j = Object(s.a)((e, t) => {
					let {
						count: n
					} = t;
					return n
				}, E, (e, t) => {
					let {
						listingName: n,
						streamIdFromPath: s
					} = t;
					return O(e, {
						listingName: n,
						streamIdFromPath: s
					})
				}, (e, t, n) => {
					const s = n.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? s.slice(0, e) : s
				}),
				k = Object(s.a)(E, j, (e, t) => {
					const n = t[0];
					if (n) return e[n]
				}),
				N = Object(s.a)(E, j, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === o.a.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				w = Object(s.a)(f, (e, t) => {
					let {
						related: n,
						streamIdFromPath: s,
						subreddit: r
					} = t;
					return j(e, {
						listingName: n || r,
						streamIdFromPath: s
					})
				}, (e, t) => {
					const n = new Set(e),
						s = t.filter(e => !n.has(e));
					if (s.length) return s[0]
				}),
				S = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n
				}, E, (e, t) => {
					let {
						related: n,
						streamIdFromPath: s,
						subreddit: r
					} = t;
					return j(e, {
						listingName: n || r,
						streamIdFromPath: s
					})
				}, g, (e, t, n, s) => {
					if (!n.length) return;
					const r = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = r.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const i = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				P = Object(r.a)(Object(s.a)(S, E, (e, t) => e ? t[e] : void 0)),
				T = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? Object(i.g)(n) : void 0
				}, S, h, c.h, (e, t) => {
					let {
						related: n,
						streamIdFromPath: s,
						subreddit: r
					} = t;
					return j(e, {
						listingName: n || r,
						streamIdFromPath: s
					})
				}, (e, t, n, s, r) => !e || n.includes(e) || s.includes(e) ? t || r[0] : e),
				I = Object(s.a)(x, f, w, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				B = Object(s.a)(x, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				A = Object(r.a)(Object(s.a)(T, E, (e, t) => e ? t[e] : void 0)),
				L = Object(r.a)(Object(s.a)(I, E, (e, t) => e ? t[e] : void 0)),
				M = Object(r.a)(Object(s.a)(B, E, (e, t) => e ? t[e] : void 0)),
				F = (Object(r.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, E, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => Object.assign(Object.assign({}, t[n]), {
					preloadedPreviewUrl: e[n]
				})))), Object(s.a)((e, t) => {
					let {
						streamId: n
					} = t;
					return n
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				D = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? C(e, n) : void 0
				}, e => !e || e.chat_disabled);

			function R(e, t) {
				const n = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return n[t] >= n[e]
			}
			const W = Object(s.a)(T, g, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const H = Object(s.a)(T, E, b.b, (e, t, n) => {
					if (n) return U.INTRO;
					const s = e && t[e];
					if (!s) return U.UNAVAILABLE;
					const r = s.stream.state;
					return r === o.a.IS_LIVE || r === o.a.DISCONNECTED ? U.LIVE : r === o.a.ENDED && s.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				V = Object(s.a)(A, H, b.b, l.b, l.o, (e, t, n, s, r) => n ? s : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : r : void 0),
				G = Object(s.a)(A, H, W, (e, t, n) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && n < e.broadcast_time ? n : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				o = Object(s.a)(i, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(s.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => s.W.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: a.H,
				experimentName: s.V
			})
		},
		"./src/reddit/selectors/experiments/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => s.lc.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.gc
			})
		}
	}
]);
//# sourceMappingURL=Subreddit.1c5aa3c7988cda93dbe8.js.map