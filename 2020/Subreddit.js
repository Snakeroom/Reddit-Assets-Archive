// https://www.redditstatic.com/desktop2x/Subreddit.667ecee0feeb94a71127.js
// Retrieved at 5/12/2020, 1:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "IdCard~SubredditWiki", "reddit-components-ContentGate"], {
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
				d = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && r(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = a(e), void 0 === t ? (t = e, e = 0) : t = a(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (n || e % 1 || t % 1) {
					var l = d();
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
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > i) return [];
				var n = o,
					c = d(e, o);
				t = r(t), e -= o;
				for (var l = s(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/i18n/utils.ts");
			const r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				i = (e, t) => t ? e.getUTCDate() : e.getDate(),
				o = (e, t, n) => {
					const i = t ? e.getUTCMonth() : e.getMonth(),
						o = n ? a : r;
					return Object(s.b)(o[i])
				},
				d = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function c(e, t, n, s) {
				const r = new Date(1e3 * e),
					a = o(r, n, s),
					c = t ? i(r, n) + ", " : "";
				return "".concat(a, " ").concat(c).concat(d(r, n))
			}
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
				return y
			})), n.d(t, "c", (function() {
				return v
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
				d = n("./node_modules/lodash/values.js"),
				c = n.n(d);
			const l = e => c()(o.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				u = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				p = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				b = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				h = u(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				g = u(r()()).set({
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
			const y = (e, t) => {
					return (x.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				v = e => {
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
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				m = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(r.a)(i.p),
				g = Object(r.a)(i.q),
				x = Object(r.a)(i.o),
				f = (e, t, n) => async (s, r, a) => {
					const i = Object(p.y)(r(), {
						subredditName: e
					});
					if (i) return v(i, t, n)(s, r, a)
				}, y = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), v = (e, t, n) => async (r, i, p) => {
					const f = await Object(l.e)(t);
					r(h());
					const v = i();
					try {
						await Object(a.g)("communityIcon", f, e.id)(r, i, p)
					} catch (E) {
						return Object(b.a)(Object(c.c)(v, "something went wrong with the uploading the image")), r(Object(o.e)({
							kind: m.b.Error,
							text: y()
						})), void r(x())
					}
					const _ = Object(u.d)(i(), {
						name: "communityIcon"
					});
					if (!_) return Object(b.a)(Object(c.c)(v, "image is null")), r(Object(o.e)({
						kind: m.b.Error,
						text: y()
					})), void r(x());
					await Object(a.k)(e.id, {
						communityIcon: _
					}, d.b.idCard, n)(r, i, p), r(Object(o.e)({
						kind: m.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(g())
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
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				m = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				u = n("./src/reddit/components/SubredditNav/index.tsx"),
				p = n("./src/reddit/components/SubscribeButton/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/constants/posts.ts"),
				g = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				f = n("./src/reddit/constants/tracking.ts"),
				y = n("./src/reddit/selectors/telemetry.ts");
			var v = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				_ = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				E = n("./src/reddit/selectors/widgets.ts"),
				C = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				O = n.n(C);
			const j = c.a.wrapped(v.a, "Planet", O.a),
				k = c.a.img("SubredditIcon", O.a),
				P = Object(i.c)({
					spPollsEnabled: g.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(_.a)(e, {
							subredditId: n
						})
					},
					widget: E.f
				});
			t.a = Object(a.b)(P)(Object(d.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					n = e.subreddit ? e.subreddit.name : e.subredditName,
					s = e.subreddit ? e.subreddit.url : e.subredditUrl,
					a = e.subreddit ? e.subreddit.title : "",
					i = e.subreddit && Object(x.a)(e),
					d = !(!e.theme || !i),
					c = n.charAt(0).toUpperCase() + n.slice(1),
					g = !!e.subreddit && e.subredditInlineEditingEnabled,
					v = Object(o.a)(O.a.SubredditIcon, O.a.editableIcon, {
						[O.a.emptyEditableIcon]: !i
					}),
					_ = r.a.createElement(m.a, {
						className: v,
						subreddit: e.subreddit,
						iconUrl: i || void 0,
						inTopBar: !0
					}),
					E = d ? r.a.createElement(k, {
						src: i || void 0
					}) : r.a.createElement(j, null),
					C = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0);
				return r.a.createElement("div", {
					className: O.a.container,
					style: {
						maxWidth: e.layout === b.g.Large ? "".concat(984, "px") : "100%"
					}
				}, r.a.createElement("div", {
					className: O.a.subredditMetaContainer
				}, g ? _ : E, r.a.createElement("div", {
					className: Object(o.a)(O.a.textContainer, {
						[O.a.textContainerNoIcon]: !d
					})
				}, r.a.createElement("div", {
					className: O.a.text
				}, r.a.createElement("h1", {
					className: O.a.title
				}, a || c), !!a && r.a.createElement("h2", {
					className: O.a.description
				}, "r/", n)), r.a.createElement("div", {
					className: O.a.subscribeButtonContainer
				}, r.a.createElement(p.a, {
					className: O.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => Object.assign({}, y.defaults(t), {
							source: "id_banner",
							action: f.c.CLICK,
							noun: e,
							subreddit: y.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: n,
						type: h.a.SUBREDDIT
					},
					small: !0
				})), e.subreddit && r.a.createElement(l.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), C && r.a.createElement(u.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: s,
					subredditId: t,
					subredditNavContainerClassName: O.a.subredditNavContainer
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
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/loginHref/index.ts"),
				l = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				h = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = p.a.div("FooterContainer", h.a), f = p.a.div("UserAgreement", h.a), y = p.a.a("UserAgreementLink", h.a), v = p.a.a("PrivacyLink", h.a);
			var _ = () => a.a.createElement(x, null, a.a.createElement(f, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", a.a.createElement(y, {
					href: "".concat(s.a.redditUrl, "/help/useragreement")
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", a.a.createElement(v, {
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
				P = n("./src/lib/linkMatchers/customLinks.ts"),
				N = n("./src/reddit/controls/OutboundLink/index.tsx");
			const w = /\[(.+?)\]\((.+?)\)/g,
				S = e => {
					const t = e.split(w);
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
					return e.parseMdLinks && (t = j()(t, S)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.e.add(P.g.subreddit.prefix, P.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return a.a.createElement(N.a, {
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
				L = n("./src/reddit/controls/Button/index.tsx"),
				B = n("./src/reddit/models/ContentGate.ts"),
				F = n("./src/reddit/selectors/meta.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/components/ContentGate/index.m.less"),
				M = n.n(A);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js"), W = p.a.div("ButtonsContainer", M.a), U = p.a.div("Container", M.a), H = p.a.div("Description", M.a), V = p.a.div("PrivateSubredditDetails", M.a), G = p.a.div("PrivateSubredditDescription", M.a), K = p.a.h3("PrivateSubredditName", M.a), q = p.a.a("Link", M.a), J = p.a.wrapped(L.h, "LinkRouterButton", M.a), z = p.a.wrapped(L.g, "LinkButton", M.a), Y = p.a.wrapped(L.k, "SecondaryLinkRouterButton", M.a), Z = p.a.wrapped(L.j, "SecondaryLinkButton", M.a), Q = p.a.wrapped(J, "GoHomeLinkButton", M.a), X = p.a.img("Image", M.a), $ = p.a.img("ImagePlaceholder", M.a), ee = p.a.wrapped(J, "LeftLinkRouterButton", M.a), te = p.a.wrapped(z, "LeftLinkButton", M.a), ne = p.a.wrapped(Z, "SecondaryLeftLinkButton", M.a), se = p.a.wrapped(Y, "SecondaryLeftLinkRouterButton", M.a), re = p.a.h3("Title", M.a), ae = p.a.div("PageBody", M.a), ie = p.a.div("QuarantineMessageWrapper", M.a), oe = Object(d.c)({
				isLoggedIn: D.G,
				language: D.P,
				origin: F.j,
				user: D.i
			}), de = Object(I.t)(), ce = Object(i.b)(oe, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(m.A(n)), window.location.reload()
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
					language: o,
					location: d,
					origin: m,
					pageLayer: p,
					quarantineRequiresEmail: b,
					quarantineMessage: h,
					quarantineMessageHtml: g,
					quarantineMessageRTJson: x,
					setNSFWPreference: f,
					subredditDescription: y,
					subredditName: v,
					user: _
				} = e, O = () => {
					i ? f() : Object(l.k)(), window.location.reload()
				};
				switch (n) {
					case B.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/gold/premium-crest.png")
						}), a.a.createElement(re, null, R._("r/{community name} is a Reddit Premium community", [R._param("community name", v)], {
							hk: "2lyDwB"
						})), a.a.createElement(H, null, R._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(W, null, _ ? a.a.createElement(ne, {
							href: "".concat(s.a.redditUrl, "/premium")
						}, R._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(te, {
							href: Object(c.a)(d, m)
						}, R._("Sign Up", null, {
							hk: "rvpjy"
						})), _ ? a.a.createElement(J, {
							to: "/"
						}, R._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(Z, {
							href: Object(c.a)(d, m)
						}, R._("Log in", null, {
							hk: "odEG4"
						}))));
					case B.a.Nsfw:
					case B.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), a.a.createElement(re, null, n === B.a.Nsfw ? R._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : R._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(H, null, R._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(W, null, a.a.createElement(ee, {
							to: "/"
						}, R._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(Z, {
							onClick: O
						}, R._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case B.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/private.png")
						}), a.a.createElement(re, null, R._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), y && y.length && a.a.createElement(V, null, a.a.createElement(K, null, "r/", v), a.a.createElement(G, null, a.a.createElement("div", null, y))), a.a.createElement(H, null, R._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), a.a.createElement(W, null, _ ? a.a.createElement(ne, {
							href: "".concat(s.a.redditUrl, "/message/compose?to=/r/").concat(v)
						}, R._("Message Mods", null, {
							hk: "vVe1i"
						})) : a.a.createElement(ne, {
							href: Object(c.a)(d, m)
						}, R._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(J, {
							to: "/"
						}, _ ? R._("Go Home", null, {
							hk: "49p4or"
						}) : R._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case B.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), a.a.createElement(re, null, R._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(H, null, R._("This community is {=quarantined}", [R._param("=quarantined", a.a.createElement(q, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, R._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(ie, null, x ? a.a.createElement(C.a, {
							content: x,
							rtJsonElementProps: {
								pageLayer: p
							}
						}) : g ? a.a.createElement(E.a, {
							html: g
						}) : h || R._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), R._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(W, null, ((e, t, n, r) => {
							return !(e && e.hasVerifiedEmail) && r ? a.a.createElement(W, null, a.a.createElement(se, {
								to: "/"
							}, R._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(z, {
								href: "".concat(s.a.redditUrl, "/prefs/update")
							}, R._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(W, null, a.a.createElement(ee, {
								to: "/"
							}, R._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(Z, {
								onClick: n
							}, R._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(_, 0, r, b)));
					case B.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/banned.png")
						}), a.a.createElement(re, null, R._("r/{community name} has been banned from Reddit", [R._param("community name", v)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(H, null, e ? a.a.createElement(T, {
							linkClassName: M.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : R._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(W, null, a.a.createElement(J, {
							to: "/"
						}, R._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(re, null, R._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(W, null, a.a.createElement(J, {
							to: "/"
						}, R._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement($, null), a.a.createElement(re, null, R._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(H, null, R._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(W, null, _ && a.a.createElement(u.a, {
							eventSource: "content_gate"
						}), a.a.createElement(Q, {
							to: "/"
						}, R._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.ProfileDoesNotExist:
					case B.a.ProfileDeleted:
					case B.a.ProfileSuspended:
					case B.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(re, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case B.a.ProfileBlockedForLegalReason:
									return R._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case B.a.ProfileDeleted:
									return R._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case B.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, R._("This account has been {=suspended} .", [R._param("=suspended", a.a.createElement(q, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, R._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case B.a.ProfileDoesNotExist:
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
					case B.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(re, null, R._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(W, null, a.a.createElement(Q, {
							to: "/"
						}, R._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(X, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(re, null, R._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(W, null, a.a.createElement(J, {
							to: "/"
						}, R._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = de(ce(Object(o.i)(e => a.a.createElement(U, null, a.a.createElement("div", null, a.a.createElement(ae, null, le(e))), a.a.createElement(_, null)))))
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
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(h),
				x = n("./src/lib/lessComponent.tsx");
			const f = "create-community-button",
				y = x.a.wrapped(m.i, "SecondaryButton", g.a),
				v = x.a.wrapped(c.c, "StyledTooltip", g.a),
				_ = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.Z)(e),
					userIsSuspended: b.L
				});
			t.a = Object(i.b)(_, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.b)(n)), e(Object(u.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: f
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(l.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: r,
					onHideTooltip: i,
					openCommunityCreation: o,
					sendEvent: d,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: l
				} = e;
				return a.a.createElement(y, {
					className: t,
					disabled: l || c,
					onClick: () => o(d),
					onMouseEnter: r,
					onMouseLeave: i,
					id: f
				}, s.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), c ? a.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: f,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? a.a.createElement(v, {
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
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/localStorageAvailable/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx");
			! function(e) {
				e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner"
			}(s || (s = {}));
			var m = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/localStorage/index.ts"),
				p = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				b = e => i.a.createElement("svg", {
					viewBox: "0 0 56 56",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, i.a.createElement("g", {
					transform: "translate(1 1)",
					fill: "inherit",
					stroke: "inherit",
					fillRule: "evenodd"
				}, i.a.createElement("rect", {
					x: "16",
					y: "35",
					width: "22.4",
					height: "2.8",
					rx: "1.4",
					stroke: "none"
				}), i.a.createElement("path", {
					d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
				}), i.a.createElement("circle", {
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
			const y = Object(o.b)(null, e => ({
				showToast: () => {
					e(Object(c.e)({
						kind: g.b.SuccessCommunity,
						text: r.fbt._("Dismissed", null, {
							hk: "3YBtnR"
						})
					}))
				}
			}));
			class v extends i.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(u.D)(s.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
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
					} = this.props, t = Object(d.a)() && !Object(u.e)(s.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(Object(p.c)()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? i.a.createElement("div", {
						className: f.a.banner
					}, i.a.createElement("button", {
						className: f.a.closeContainer,
						onClick: this.closeBanner
					}, i.a.createElement(h.a, {
						className: f.a.close
					})), i.a.createElement(b, {
						className: f.a.postIcon
					}), i.a.createElement("div", {
						className: f.a.heading
					}, r.fbt._("Create the ideal {subredditDisplayText} post", [r.fbt._param("subredditDisplayText", " ".concat(e.displayText, " "))], {
						hk: "3ZioIj"
					})), i.a.createElement("div", {
						className: f.a.text
					}, r.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), i.a.createElement("br", null), r.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), i.a.createElement("div", {
						className: f.a.buttonWrapper
					}, i.a.createElement(m.g, {
						className: f.a.button,
						target: "_blank",
						href: "/".concat(e.displayText, "/submit"),
						onClick: this.createPost
					}, r.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = y(Object(l.c)(v))
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
			class d extends r.a.Component {
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
			t.a = d
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
				d = n("./src/reddit/actions/downToChat.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				u = n("./src/reddit/selectors/downToChat.ts"),
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
					return Object(u.c)(e, n.id)
				}
			}), f = Object(a.b)(x, e => ({
				startChatting: t => e(Object(d.i)(t))
			}));
			class y extends r.a.Component {
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
					}, e && r.a.createElement(m.a, {
						className: Object(o.a)(h.a.chatIcon)
					}), r.a.createElement("span", {
						className: Object(o.a)(h.a.buttonCaption)
					}, g._("Start chatting", null, {
						hk: "udQG0"
					}))) : null
				}
			}
			t.a = f(Object(c.c)(y))
		},
		"./src/reddit/components/DownToChatBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3HwENDlXUGoAOP6zptLsmD",
				container: "_3HwENDlXUGoAOP6zptLsmD",
				backgroundAnimation: "E0C3InHZ3RJwQ52gcvYvk",
				Footer: "_1EDQhZLmAaqq0TjAaBHfRc",
				footer: "_1EDQhZLmAaqq0TjAaBHfRc",
				Title: "_1XKqWvpbNVuWQvCDOzDnY9",
				title: "_1XKqWvpbNVuWQvCDOzDnY9",
				Description: "_2jyh4u7PkcB4yzPbeF0o5D",
				description: "_2jyh4u7PkcB4yzPbeF0o5D",
				icon: "_155pqj19WTKGTkEwNsX3i7",
				SubredditIconContainer: "_1I6fhNpt5lM-v_qFKWEQXP",
				subredditIconContainer: "_1I6fhNpt5lM-v_qFKWEQXP",
				SubredditIcon: "_3IWaLhLMeAY9xx8l1hPDUN",
				subredditIcon: "_3IWaLhLMeAY9xx8l1hPDUN",
				editableIcon: "_191Gjm6x9puYH4dNQ6ISjj",
				emptyEditableIcon: "iM8M6DgU7p5Ok8n_Ks0gt",
				Planet: "_2cQU6MZ00GalERwTQMFECg",
				planet: "_2cQU6MZ00GalERwTQMFECg",
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
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/actions/downToChat.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				p = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/selectors/downToChat.ts"),
				h = n("./src/reddit/selectors/experiments/downToChat.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				f = n("./src/reddit/components/DownToChatBanner/index.m.less"),
				y = n.n(f);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = o.a.wrapped(p.a, "Close", y.a), E = o.a.button("CloseButton", y.a), C = o.a.div("Counter", y.a), O = o.a.p("Description", y.a), j = o.a.div("Footer", y.a), k = o.a.wrapped(u.a, "Planet", y.a), P = o.a.img("SubredditIcon", y.a), N = o.a.div("SubredditIconContainer", y.a), w = o.a.h1("Title", y.a), S = o.a.div("Container", y.a), T = Object(i.c)({
				accountsActive: (e, t) => {
					const {
						subreddit: n
					} = t;
					if (n && n.name) {
						const t = Object(g.v)(e, {
							subredditName: n.name
						});
						return t && t.accountsActive
					}
				},
				isDownToChatExperimentEnabled: h.a,
				isEnabled: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(b.b)(e, n.id)
				}
			}), I = Object(a.b)(T, e => ({
				dismissBanner: t => e(Object(c.h)(t)),
				fetchDownToChatAvailability: t => e(Object(c.j)(t))
			}));
			class L extends r.a.Component {
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
					if (!t || !s || a) return null;
					const i = Object(m.a)({
						subreddit: n
					});
					return r.a.createElement(S, null, r.a.createElement(N, null, i ? r.a.createElement(P, {
						src: i
					}) : r.a.createElement(k, null)), r.a.createElement(w, null, v._("Find people who want to chat", null, {
						hk: "3Y6Pm1"
					})), r.a.createElement(O, null, v._("Bored at home? Want someone to talk to? Reddit will match you with members who want to chat too.", null, {
						hk: "3HaCWZ"
					})), r.a.createElement(j, null, r.a.createElement(x.a, {
						subreddit: n
					}), e ? r.a.createElement(C, null, v._("{viewingCount} Online", [v._param("viewingCount", Object(d.b)(e))], {
						hk: "LsWtb"
					})) : null), r.a.createElement(E, {
						onClick: this.onCloseButtonClick
					}, r.a.createElement(_, null)))
				}
			}
			t.a = I(Object(l.c)(L))
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.m.less": function(e, t, n) {
			e.exports = {
				loading: "_3gWqsGamiiRTC2h_yOIcgS"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/featureFlags/component.tsx"),
				d = n("./src/reddit/components/Economics/CommunityTipJar/async.m.less"),
				c = n.n(d);
			const l = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: Object(i.a)(t, c.a.loading)
					})
				},
				getComponent: () => Promise.all([n.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e3dfa4ce"), n.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~d7fcad44"), n.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad34f221"), n.e("EconomicsCommunityTipJar")]).then(n.bind(null, "./src/reddit/components/Economics/CommunityTipJar/index.tsx")).then(e => e.default)
			});
			t.a = Object(o.a)("spCommunityTipJar", l)
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
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/upperFirst.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				d = n("./src/config.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/isFakeSubreddit/index.ts"),
				m = n("./src/reddit/constants/postLayout.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/components/PostList/Placeholder.tsx"),
				b = n("./src/reddit/components/EmptySubreddit.m.less"),
				h = n.n(b),
				g = n("./src/lib/lessComponent.tsx");
			const x = g.a.div("PrimaryText", h.a),
				f = g.a.div("SecondaryText", h.a),
				y = g.a.div("MainContentWrapper", h.a),
				v = g.a.div("MainContent", h.a),
				_ = g.a.wrapped(p.a, "BackgroundPlaceholder", h.a),
				E = g.a.wrapped(u.h, "SubmitLink", h.a),
				C = g.a.img("SnooImg", h.a),
				O = g.a.div("EmptyHomepage", h.a),
				j = e => {
					switch (e) {
						case c.M.RISING:
							return s.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case c.M.TOP:
						case c.M.CONTROVERSIAL:
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
					return o.a.createElement(v, null, o.a.createElement(x, null, (e => {
						switch (e) {
							case c.M.RISING:
								return s.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case c.M.TOP:
							case c.M.CONTROVERSIAL:
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
				P = () => o.a.createElement(v, null, o.a.createElement(C, {
					src: "".concat(d.a.assetPath, "/img/snoo_discovery@1x.png")
				}), o.a.createElement(x, null, s.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), o.a.createElement(E, {
					to: "/r/popular"
				}, s.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = g.a.wrapped(e => o.a.createElement(O, null, o.a.createElement(_, {
				isLoading: !1,
				layout: m.g.Classic
			}), o.a.createElement(y, null, e.subreddit ? o.a.createElement(k, e) : o.a.createElement(P, null))), "Component", h.a)
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
				d = n("./src/reddit/featureFlags/index.ts");
			const c = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(i.c)({
				featureEnabled: d.d.spWalletRegistrationBanner
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(c, e)
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/reddit/featureFlags/index.ts");
			const c = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistrationStellarBanner").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.tsx")).then(e => e.default)
			});
			const l = Object(i.c)({
				featureEnabled: d.d.spStellarWalletRegistration
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(c, e)
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
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/constants/screenWidths.ts"),
				l = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				u = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/components/HeaderImage/index.m.less"),
				h = n.n(b);
			const g = d.a.wrapped(m.a, "Planet", h.a),
				x = d.a.div("SubredditIcon", h.a),
				f = d.a.div("PositionedImage", h.a),
				y = d.a.div("HeaderContent", h.a),
				v = d.a.div("HeaderContainer", h.a),
				_ = d.a.span("HeaderText", h.a),
				E = d.a.wrapped(a.a, "HeaderUrl", h.a),
				C = d.a.span("Container", h.a),
				O = Object(o.a)(e => {
					const t = Object(u.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						n = Object(l.a)(e),
						s = Object(p.a)(e).banner.positionedImageAlignment,
						a = Object(p.a)(e).banner.positionedImage,
						o = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (s) {
						case "right":
							d = {
								right: "-8px"
							};
							break;
						case "centered":
							d = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							d = {
								left: "-8px"
							}
					}
					const m = !!a && !!o && "left" === s,
						b = Object(u.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
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
					}, r.a.createElement(v, {
						className: Object(i.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || c.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(y, {
						className: Object(i.a)({
							[h.a.hoverHeaderContent]: m
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
						style: Object.assign({}, d, {
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
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const o = e => e && e.toLowerCase() === a.b.Popular,
				d = e => e && e.toLowerCase() === a.b.All,
				c = e => e && e === i.b,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, n, i, m, u, {
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
					let f, y;
					return c(p) ? (t = "".concat(r.a.assetPath, "/img/id-cards/home-banner@2x.png"), i = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = a.c[a.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), m = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(p) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), i = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = "r/all", u = a.c[a.b.All]) : o(p) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), i = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = "r/popular", u = a.c[a.b.Popular]) : p && (n = h && h.description, i = l(""), m = b.displayText, u = b.url, y = h && h.subscribersCount, f = h && h.currentlyViewingCount), Object.assign({
						snooBackground: i,
						description: n,
						titleText: m,
						url: u,
						subscribersCount: y,
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
			const d = e => {
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
				}, r.a.createElement(d, {
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
				d = n("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", o.a),
				l = d.a.div("TextWrapper", o.a);
			t.a = e => {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: i,
					title: d
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
				}), s ? r.a.createElement(c, null, s) : r.a.createElement(c, null), r.a.createElement(l, null, r.a.createElement("div", {
					className: o.a.title
				}, d), i && r.a.createElement("div", {
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
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				m = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				h = n.n(b);
			const g = a.a.createElement(m.a, {
					className: h.a.icon
				}),
				x = Object(o.c)({
					subreddit: u.y,
					subredditAboutInfo: u.v
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
					color: c.a.quarantine,
					icon: g,
					subtitle: a.a.createElement("span", null, s.fbt._("This community is {=quarantined}", [s.fbt._param("=quarantined", a.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, s.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", r ? a.a.createElement(d.a, {
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
				return v
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
				return P
			})), n.d(t, "i", (function() {
				return N
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/lodash/isNil.js")),
				d = n.n(o),
				c = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts"),
				m = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const u = Object(i.c)({
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
							r = m(t, ["className", "consumers"]);
						l.a.publish(c.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					d()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					d()(this.el) || this.fireEvent(this.el)
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
			var b = Object(a.b)(u, {})(p),
				h = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.G)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var f = Object(a.b)(() => Object(i.a)(x, h.j, (e, t) => Object.assign({}, e, {
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
			const y = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.G)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(a.b)(() => Object(i.a)(y, e => e))(e => r.a.createElement(b, {
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
					subreddit: g.P
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
				post: E.N,
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
				post: E.N,
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
				subreddit: g.P
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
			var P = Object(a.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(g.J)(e, {
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
			var N = Object(a.b)(() => Object(i.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(g.P)(e, {
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
				d = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
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
					post: d,
					redditStyle: u,
					theme: p
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(a.a)(c.a.backgroundWrapper, n),
					style: Object(o.c)(s, e),
					onClick: i
				}, b), t)
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
				d = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				c = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				m = n("./src/reddit/constants/postLayout.ts"),
				u = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = n.n(u),
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
				return n === m.g.Classic ? r.a.createElement(d.b, {
					className: Object(o.a)(t, h.a.classicPostPlaceholder),
					isLoading: !0
				}) : n === m.g.Compact ? r.a.createElement(c.a, {
					className: Object(o.a)(t, h.a.compactPostPlaceholder),
					isLoading: !0
				}) : r.a.createElement(x, {
					className: t
				})
			};
			const y = Object(i.a)({
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
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), n.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var v = e => r.a.createElement(y, e),
				_ = n("./src/reddit/helpers/trackers/rpan.ts");
			const E = e => e === m.g.Classic ? 88 : e === m.g.Compact ? 42 : 340,
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
								trackOnEnteredViewport: () => e.sendEvent(Object(_.t)()),
								render: t => {
									let {
										className: n
									} = t;
									return r.a.createElement(v, {
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
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/page.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				u = n.n(m);
			const p = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				b = d.a.wrapped(e => a.a.createElement("div", {
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
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", u.a);
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
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/InternalLink/index.tsx"),
				x = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				f = n("./src/reddit/helpers/name/index.ts"),
				y = n("./src/reddit/models/Flair/index.ts"),
				v = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = n("./src/reddit/components/MiniCardPost/index.m.less"),
				C = n.n(E),
				O = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				j = n.n(O);
			const k = e => e.type === y.f.Spoiler,
				P = Object(h.t)();
			t.a = P(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: y,
					shouldOpenPost: E,
					showSubredditMeta: O = !0,
					showSubredditName: P,
					subredditOrProfile: N,
					trackPostView: w
				} = e;
				Object(a.useEffect)(() => {
					w && w(y)
				}, [w, y]);
				const S = h && h.preview && h.preview.url || void 0,
					T = h && h.isSponsored ? "promoted_trend" : "trending",
					I = h && Object(l.a)(h.permalink) || "",
					L = E && I || y && Object(o.a)("/search", {
						q: y.rawQuery,
						source: T
					}) || I,
					B = y ? y.subredditInfo && y.subredditInfo.icon : N && N.icon.url,
					F = y ? y.subredditInfo && y.subredditInfo.displayText : N && (N.displayText || N.name),
					D = h ? h.flair.filter(k) : [],
					A = h ? h.score : 0,
					M = h ? h.numComments : 0,
					R = h && h.isSponsored,
					W = Object(_.a)(e).body,
					U = "linear-gradient(\n      ".concat(Object(r.g)(W, .2), ",\n      ").concat(Object(r.g)(W, .3), ",\n      ").concat(Object(r.g)(W, .4), ",\n      ").concat(Object(r.g)(W, .6), ",\n      ").concat(Object(r.g)(W, .8), ",\n      ").concat(W, "\n    )"),
					H = i.a.createElement("div", {
						className: Object(d.a)(j.a.trendingPost, {
							[j.a["m-background"]]: !!S
						})
					}, i.a.createElement(g.a, {
						to: L
					}, i.a.createElement("div", {
						className: Object(d.a)(j.a.backgroundWrapper, C.a.backgroundWrapper, t),
						style: {
							background: Object(v.g)(Object(_.a)(e).body, S || Object(_.a)(e).banner.backgroundImage, "cover"),
							"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
						}
					}, R && i.a.createElement("div", {
						className: j.a.promoted
					}, s.fbt._("promoted", null, {
						hk: "1mLJfa"
					})), i.a.createElement("div", {
						className: Object(d.a)(j.a.innerContainer, C.a.innerContainer, c),
						onClick: b,
						title: h ? h.title : ""
					}, i.a.createElement("h2", {
						className: h ? j.a.title : j.a.titleNoDescription
					}, e.title), h ? i.a.createElement("div", {
						className: Object(d.a)(j.a.description, n)
					}, D.length > 0 && i.a.createElement(u.a, {
						className: j.a.flair,
						titleFlair: D,
						nowrap: !0,
						post: h,
						showCategoryTag: !1
					}), h.title) : i.a.createElement("div", {
						className: j.a.spacer
					}), O && B && F && i.a.createElement(x.a, {
						className: j.a.relatedSubredditMetaData,
						iconClassName: j.a.subredditIcon,
						iconUrl: B || void 0,
						suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", F)], {
							hk: "2YTyJf"
						})
					}), !O && h && i.a.createElement("div", {
						className: j.a.metaLine
					}, P && F && i.a.createElement("span", {
						className: j.a.meta
					}, Object(f.b)(F)), i.a.createElement("span", {
						className: j.a.meta
					}, s.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [s.fbt._plural(A, "number", Object(m.b)(A))], {
						hk: "1Jm6il"
					})), i.a.createElement("span", {
						className: j.a.meta
					}, s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(M, "number", Object(m.b)(M))], {
						hk: "311aXY"
					})))))));
				return R ? i.a.createElement(p.a, {
					post: h
				}, H) : H
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
				d = n.n(o);
			t.a = e => {
				const {
					className: t,
					layoutBodyClassName: n,
					showCardView: s
				} = e, o = {
					[d.a["m-card"]]: s
				};
				return r.a.createElement("div", {
					className: Object(a.a)(d.a.container, o, t)
				}, r.a.createElement(i.a, {
					className: d.a.layout,
					bodyClassName: Object(a.a)(d.a.layoutBody, o, n),
					header: e.header,
					headerClassName: Object(a.a)(d.a.layoutHeader, o)
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
				d = n("./src/reddit/components/Translated/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				m = n.n(l);
			const u = r.a.createElement(i.a, {
					className: m.a.duHeader
				}, r.a.createElement(d.a, {
					msgId: "discoveryUnits.trendingToday"
				})),
				p = Object(c.a)({
					isLoading: !0
				});
			t.a = e => r.a.createElement(o.a, {
				className: e.className,
				header: u,
				layoutBodyClassName: m.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: m.a.post,
				key: "placeholder-post-".concat(t)
			}, r.a.createElement("div", {
				className: Object(a.a)(m.a.desc, m.a.one, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(m.a.desc, m.a.two, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(m.a.icon, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(m.a.name, p)
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
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loadWithRetries/index.ts"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/userPrefs.ts"),
				y = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				v = n.n(y),
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = m.a.div("BladeContainer", v.a), O = m.a.wrapped(h.a, "CloseIcon", v.a), j = m.a.div("LoadingTitleContainer", v.a), k = m.a.div("LoadingNavContainer", v.a), P = m.a.div("ShortLoadingNav", v.a), N = m.a.wrapped(b.a, "ThemedChevron", v.a), w = e => {
				var t = _(e, []);
				return i.a.createElement(C, null, i.a.createElement(O, null), i.a.createElement(p.k, null, i.a.createElement(p.p, null, E._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(p.o, null, i.a.createElement(j, null, i.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingTitle, t.isLoading && v.a.loading)
				})), i.a.createElement(k, null, i.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), i.a.createElement(N, null)), i.a.createElement(k, null, i.a.createElement(P, null), i.a.createElement(N, null)), i.a.createElement(k, null, i.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), i.a.createElement(N, null)), i.a.createElement(k, null, i.a.createElement(P, null), i.a.createElement(N, null)), i.a.createElement(k, null, i.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), i.a.createElement(N, null)))))
			}, S = Object(c.a)({
				getComponent: () => Object(u.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(w, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(w, {
					gradientType: "posts",
					isLoading: !0
				})
			}), T = Object(d.c)({
				isEditing: x.j,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: g.j
			});
			t.a = Object(o.b)(T)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(v.a.Container, e.isSubscriptionsPinned && v.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(S, {
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
				return d
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
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
				return y
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return _
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const i = s.a.section("FormPage", a.a),
				o = s.a.h1("HomePageTitle", a.a),
				d = s.a.button("HomePageBreadcrumb", a.a),
				c = s.a.div("HomePageGroup", a.a),
				l = s.a.h1("FormPageTitle", a.a),
				m = s.a.div("FormPageSection", a.a),
				u = s.a.div("FormGroup", a.a),
				p = s.a.h2("FormGroupTitle", a.a),
				b = s.a.div("FormElement", a.a),
				h = s.a.div("FormGroupDescription", a.a),
				g = s.a.div("FormItem", a.a),
				x = s.a.h3("FormElementTitle", a.a),
				f = s.a.div("FormElementDescription", a.a),
				y = s.a.div("FormElementError", a.a),
				v = s.a.div("FormElementSubGroup", a.a),
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
				return Q
			}));
			var s = n("./node_modules/lodash/orderBy.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/opener/index.ts"),
				m = n("./src/app/strings/index.ts"),
				u = n("./src/chat/helpers/urls/index.ts"),
				p = n("./src/reddit/actions/chat/subredditChannel.ts"),
				b = n("./src/reddit/actions/chat/toggle.ts"),
				h = n("./src/reddit/actions/modal.ts"),
				g = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/constants/modals.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/helpers/trackers/chat.ts"),
				E = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				C = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				O = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				j = n("./src/reddit/models/SubredditChannel/index.ts"),
				k = n("./src/reddit/selectors/chat.ts"),
				P = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/subredditChannel.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/components/SubredditChannelList/index.m.less"),
				T = n.n(S);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), L = c.a.wrapped(g.f, "ModalFormItem", T.a), B = c.a.wrapped(v.f, "PrimaryButton", T.a), F = c.a.wrapped(g.m, "ModalText", T.a), D = c.a.a("ItemLink", T.a), A = c.a.p("Detail", T.a), M = c.a.p("DescText", T.a), R = c.a.div("Title", T.a), W = c.a.div("Header", T.a), U = c.a.wrapped(C.a, "ChatIcon", T.a), H = c.a.wrapped(O.a, "PlanetIcon", T.a), V = c.a.wrapped(E.a, "Pencil", T.a), G = c.a.wrapped(e => {
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
			}, "Group", T.a), K = c.a.wrapped(e => {
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
			}, "Key", T.a), q = c.a.wrapped(x.b, "SubredditIcon", T.a), J = c.a.button("EditButton", T.a), z = c.a.button("ShowAllLink", T.a), Y = c.a.span("ChannelName", T.a), Z = c.a.div("HeaderText", T.a);
			var Q;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(Q || (Q = {}));
			const X = Object(d.c)({
					isCollectionReady: N.e,
					isModerator: k.e,
					language: w.P,
					selectedSubreddit: P.P,
					shouldRequestCollection: N.f,
					subredditChannels: N.a
				}),
				$ = Object(o.b)(X, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						toggleModal: () => e(Object(h.i)(y.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(h.i)(y.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(h.i)(y.a.EDIT_SUBREDDIT_CHAT)),
						fetchSubredditChannels: t => e(Object(p.l)(t)),
						onChatLinkClick: (t, n) => e(Object(b.b)({
							channelId: t,
							subredditName: n
						})),
						onSelectChannel: t => e(Object(p.m)({
							channelId: t
						}))
					}
				});
			class ee extends i.a.Component {
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
					} = j.a, {
						channelId: n,
						channelState: s
					} = e, {
						Widget: r,
						Modal: a
					} = Q, {
						parentContext: i,
						sendEvent: o
					} = this.props;
					return i === r && s === t ? o(Object(_.c)(n)) : i === r ? o(Object(_.e)(n)) : i === a && s === t ? o(Object(_.a)(n)) : i === a ? o(Object(_.b)(n)) : void 0
				}
				onShowAllClick() {
					const {
						sendEvent: e,
						toggleModal: t
					} = this.props;
					t && (t(), e(Object(_.d)()))
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
							language: s,
							onAddChannel: r,
							toggleEditModal: a,
							selectedSubreddit: o,
							onSelectChannel: d,
							toggleCreateModal: c
						}
					} = this;
					if (!t) return null;
					const u = this.displayChannelsList();
					return i.a.createElement("div", {
						className: e
					}, u.length ? i.a.createElement(L, null, u.map((e, t) => i.a.createElement(D, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: l.c.BLANK,
						rel: l.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, i.a.createElement(R, {
						key: "item-link-title-".concat(t)
					}, i.a.createElement(U, {
						key: "item-link-icon-".concat(t)
					}), o.icon.url ? i.a.createElement(q, {
						key: "subreddit-icon-".concat(t),
						iconUrl: o.icon.url
					}) : i.a.createElement(H, {
						key: "planet-".concat(t),
						isSmall: !0
					}), i.a.createElement(W, {
						key: "item-header-".concat(t)
					}, i.a.createElement(Z, {
						key: "item-header-text-".concat(t)
					}, i.a.createElement(A, {
						key: "item-detail-".concat(t)
					}, o.name, Object(m.b)(s, "listings.channelMembers", e.membersCount)), i.a.createElement(Y, {
						key: "channel-name-".concat(t)
					}, e.type === j.c.Public ? i.a.createElement(G, null) : i.a.createElement(K, null), e.name)), n && i.a.createElement(J, {
						key: "button-".concat(t),
						onClick: t => {
							d(e.channelId), a(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(_.l)())
						}
					}, i.a.createElement(V, null)))), e.description && i.a.createElement(M, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && i.a.createElement(z, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, I._("See more", null, {
						hk: "lhTm0"
					}))) : n ? i.a.createElement(L, null, i.a.createElement(F, null, I._("Create your first room and get your community chatting in real time.", null, {
						hk: "2zKL0L"
					})), i.a.createElement(B, {
						onClick: r || c
					}, I._("+ Add room", null, {
						hk: "2vBAvZ"
					}))) : i.a.createElement(L, null, i.a.createElement(F, null, I._("There are no joined chatrooms yet", null, {
						hk: "3n65KN"
					}))))
				}
			}
			t.b = $(Object(f.c)(ee))
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/ImageInput/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
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
				y = n("./src/reddit/components/SubredditIcon/index.m.less"),
				v = n.n(y);

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
						i = [n, v.a.inTopBar, v.a.iconContainer];
					return s ? i.push(v.a.emptyEditableIconInTopBar) : i.push(v.a.editableIcon, v.a.emptyEditableIcon), a.a.createElement("span", _({}, r, {
						className: Object(d.a)(...i)
					}), s ? a.a.createElement(g, {
						className: v.a.emptyUploadButton
					}) : a.a.createElement(h.a, {
						className: v.a.emptyPlusButton
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
						src: c
					} = e;
					return a.a.createElement("span", {
						className: v.a.iconContainer
					}, a.a.createElement("img", {
						alt: s,
						onClick: i,
						role: r,
						src: c,
						className: Object(d.a)(n, {
							[v.a.editableIcon]: !o
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
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => a.a.createElement(m.a, {
						className: v.a.imageUploader,
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
						className: v.a.clickableUploadText,
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
						const e = [v.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(v.a.loadingIconInTopBar), t = 32), a.a.createElement(u.a, {
							className: Object(d.a)(...e),
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
						className: v.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(i.b)(j, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(c.a)(t.subreddit, n, s))
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
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/featureFlags/component.tsx"),
				l = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/selectors/widgets.ts"),
				u = n("./src/reddit/actions/subreddit.ts"),
				p = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				b = n("./src/lib/classNames/index.ts"),
				h = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = n("./src/reddit/components/SubredditNav/index.m.less"),
				x = n.n(g);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const v = (e, t, n) => Object(b.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: n
				}),
				_ = e => {
					var {
						children: t,
						isActive: n,
						isTopBannerVariant: s
					} = e, a = y(e, ["children", "isActive", "isTopBannerVariant"]);
					return r.a.createElement("div", f({
						className: v(x.a.subNavTitle, n, s)
					}, a), r.a.createElement("span", null, t), r.a.createElement(h.b, {
						className: x.a.navDropdownIcon
					}))
				},
				E = e => {
					var {
						className: t,
						isActive: n,
						to: s,
						isTopBannerVariant: a
					} = e, i = y(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const o = v(x.a.navLink, n, a);
					return s ? r.a.createElement(p.a, f({
						className: o,
						to: s
					}, i)) : r.a.createElement("a", f({
						className: o
					}, i))
				},
				C = e => {
					var {
						className: t,
						isActive: n
					} = e, s = y(e, ["className", "isActive"]);
					return r.a.createElement(p.a, f({
						className: v(x.a.navLink, n)
					}, s))
				},
				O = e => {
					var {
						className: t,
						isActive: n
					} = e, s = y(e, ["className", "isActive"]);
					return r.a.createElement("a", f({
						className: v(x.a.subNavLink, n)
					}, s))
				},
				j = e => {
					var {
						className: t
					} = e, n = y(e, ["className"]);
					return r.a.createElement("div", f({
						className: Object(b.a)(x.a.subNavContainer, t)
					}, n))
				},
				k = e => {
					var {
						className: t,
						isOpen: n
					} = e, s = y(e, ["className", "isOpen"]);
					return r.a.createElement("div", f({
						className: Object(b.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: n
						})
					}, s))
				},
				{
					fbt: P
				} = n("./node_modules/fbt/lib/FbtPublic.js");
			const N = Object(i.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var w = Object(d.t)()(Object(a.b)(N, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: n
					} = e;
					return n ? r.a.createElement(C, {
						className: x.a.metaNavLink,
						to: n.url,
						isActive: e.isActive,
						onClick: n => {
							Object(d.E)(t) && n.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, P._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				S = n("./src/lib/linkMatchers/index.ts");
			class T extends r.a.Component {
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
					return r.a.createElement(j, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, r.a.createElement(_, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), r.a.createElement(k, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var I = T;
			const L = e => {
				const t = e.url && Object(S.g)(S.e, e.url);
				return t ? t.url : e.url
			};
			var B = e => e.menuItem.url ? r.a.createElement(E, {
					href: L(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(I, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(O, {
					key: "".concat(e.text, "-").concat(L(e)),
					role: "listitem",
					href: L(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				F = n("./src/lib/constants/index.ts");
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const A = Object(d.t)(),
				M = [F.yb.SUBREDDIT, F.yb.COMMENTS, F.yb.COLLECTION_COMMENTS],
				R = Object(i.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && M.indexOf(t.pageLayer.meta.name) > -1
				});
			var W = A(Object(a.b)(R, (e, t) => ({
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
					return r.a.createElement(E, {
						to: t,
						isActive: o,
						isTopBannerVariant: a,
						onClick: e => {
							n && (e.preventDefault(), i())
						}
					}, D._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				U = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				H = n("./src/higherOrderComponents/makeAsync.tsx");
			var V = Object(H.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("HarbergerTaxBannerPurchaseCTA").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				G = n("./src/reddit/constants/postLayout.ts"),
				K = n("./src/reddit/constants/screenWidths.ts"),
				q = n("./src/reddit/models/Theme/index.ts"),
				J = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				z = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const Y = Object(U.a)(e => {
				var {
					className: t,
					children: n,
					isTopBannerVariant: s
				} = e, a = z(e, ["className", "children", "isTopBannerVariant"]);
				const i = Object(J.a)(a);
				return r.a.createElement("div", {
					className: Object(b.a)(x.a.outerContainer, t),
					style: {
						position: i.navBar.useOverlay && !s ? "absolute" : "static",
						background: s ? "inherit" : Object(q.g)(i.navBar.backgroundColor, i.navBar.backgroundImage, "tiled")
					}
				}, n)
			});
			var Z = e => r.a.createElement(Y, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === G.g.Large ? "".concat(e.maxWidth || K.a, "px") : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement(V, null))),
				Q = n("./src/reddit/components/Translated/index.tsx"),
				X = n("./src/reddit/constants/wiki.ts"),
				$ = n("./src/reddit/helpers/trackers/subredditWiki.ts");
			var ee = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: n,
					pageLayer: s
				} = e, a = !!s && !!s.meta && s.meta.name === F.yb.SUBREDDIT_WIKI, i = "wiki/".concat(X.i), o = t.endsWith("/") ? t + i : "".concat(t, "/").concat(i);
				return r.a.createElement(E, {
					isActive: a,
					isTopBannerVariant: n,
					to: o,
					onClick: () => e.sendEvent(Object($.g)())
				}, r.a.createElement(Q.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const te = Object(c.a)("spPolls", w),
				ne = Object(d.t)(),
				se = Object(i.c)({
					language: l.P,
					layout: d.N,
					widget: m.f
				}),
				re = Object(a.b)(se);
			t.a = ne(re(Object(o.c)(e => r.a.createElement(Z, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(W, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(te, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement(ee, {
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
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/Economics/CommunityTipJar/async.tsx"),
				p = n("./src/higherOrderComponents/makeAsync.tsx"),
				b = n("./src/reddit/featureFlags/component.tsx");
			const h = Object(p.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), n.e("EconomicsSubredditPremiumSidebarCards")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			var g = Object(b.a)("spPremium", h),
				x = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				f = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				y = n("./src/reddit/components/IdCard/async.tsx"),
				v = n("./src/lib/isFakeSubreddit/index.ts"),
				_ = n("./src/reddit/components/IdCard/helpers.ts"),
				E = e => !Object(v.a)(e) || Object(_.c)(e) || Object(_.d)(e) || Object(_.e)(e),
				C = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				j = n("./src/reddit/components/SidebarContainer/index.tsx"),
				k = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				P = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				N = n("./src/lib/classNames/index.ts"),
				w = n("./src/higherOrderComponents/asTooltip.tsx"),
				S = n("./src/reddit/actions/tooltip.ts"),
				T = n("./src/reddit/i18n/utils.ts"),
				I = n("./src/reddit/actions/modal.ts"),
				L = n("./src/reddit/constants/modals.ts"),
				B = n("./src/reddit/controls/Dropdown/index.tsx"),
				F = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				D = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				A = n("./src/reddit/selectors/moderatorPermissions.ts"),
				M = n("./src/reddit/selectors/tooltip.ts"),
				R = n("./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less"),
				W = n.n(R);
			const U = m.a.wrapped(B.a, "_Dropdown", W.a),
				H = m.a.wrapped(D.a, "Pencil", W.a),
				V = m.a.a("DropdownRow", W.a),
				G = Object(w.a)(U),
				K = e => "SubredditChannels--Menu--".concat(e),
				q = Object(c.c)({
					isModerator: A.g,
					isDropdownOpen: (e, t) => Object(M.b)(K(t.subredditId))(e)
				}),
				J = m.a.wrapped(e => {
					const {
						className: t,
						isModerator: n,
						onOpenDropdown: r,
						isDropdownOpen: a,
						toggleModal: i
					} = e, d = K(e.subredditId);
					return o.a.createElement("button", {
						"aria-expanded": a,
						"aria-haspopup": !0,
						"aria-label": Object(T.b)("Chat menu"),
						className: Object(N.a)(W.a.top, t),
						id: d,
						onClick: () => r(d)
					}, o.a.createElement(F.a, null), o.a.createElement(G, {
						isOpen: a,
						tooltipId: d,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(V, {
						onClick: i
					}, n ? s.fbt._("Manage chatrooms", null, {
						hk: "2hIiuc"
					}) : s.fbt._("View rooms", null, {
						hk: "2XOg3o"
					}), o.a.createElement(H, null))))
				}, "OverflowMenu", W.a);
			var z = Object(d.b)(q, e => ({
					onOpenDropdown: t => e(Object(S.h)({
						tooltipId: t
					})),
					toggleModal: () => e(Object(I.i)(L.a.MANAGE_SUBREDDIT_CHAT))
				}))(J),
				Y = n("./src/reddit/components/SubredditChannelList/index.tsx"),
				Z = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				X = n("./src/reddit/helpers/trackers/chat.ts"),
				$ = n("./src/reddit/selectors/subreddit.ts"),
				ee = n("./src/reddit/selectors/subredditChannel.ts"),
				te = n("./src/reddit/components/SidebarSubredditChannels/index.m.less"),
				ne = n.n(te);
			const se = m.a.div("Wrapper", ne.a),
				re = Object(c.c)({
					isCollectionReady: ee.e,
					isModerator: A.g,
					isWhitelistedSubreddit: $.e,
					shouldRequestCollection: ee.f,
					subredditChannels: ee.a
				});
			let ae;
			class ie extends o.a.Component {
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
					this.props.subredditId !== ae && (ae = this.props.subredditId, this.props.sendEvent(Object(X.m)()))
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
					} = this.props, n = o.a.createElement(Y.b, {
						maxChannels: 3,
						parentContext: Y.a.Widget,
						subredditId: e
					});
					return t ? n : this.isEnabled() ? o.a.createElement(k.a, null, o.a.createElement(Q.a, {
						className: this.props.className,
						title: s.fbt._("Chat rooms", null, {
							hk: "4vn07S"
						}),
						headerButton: o.a.createElement(z, {
							subredditId: e
						})
					}, o.a.createElement(se, null, n))) : null
				}
			}
			var oe = Object(d.b)(re)(Object(Z.c)(ie)),
				de = n("./src/lib/makeListingKey/index.ts"),
				ce = n("./src/reddit/actions/subreddit.ts"),
				le = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				me = n("./src/reddit/controls/Button/index.tsx"),
				ue = n("./src/reddit/helpers/name/index.ts"),
				pe = n("./src/reddit/helpers/overlay/index.ts"),
				be = n("./src/reddit/selectors/experiments/topPosts.ts"),
				he = n("./src/reddit/selectors/posts.ts"),
				ge = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const xe = .99;
			class fe extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= xe && t(n)
					}
				}
				render() {
					return o.a.createElement(ge.a, {
						threshold: xe,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var ye = fe,
				ve = n("./src/lib/isUrl/index.ts"),
				_e = n("./src/lib/prettyPrintNumber/index.ts"),
				Ee = n("./src/reddit/components/FlairWrapper/index.tsx"),
				Ce = n("./src/reddit/components/Thumbnail/index.tsx"),
				Oe = n("./src/reddit/models/Flair/index.ts"),
				je = n("./src/reddit/models/Subreddit/index.ts"),
				ke = n("./src/reddit/selectors/user.ts"),
				Pe = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				Ne = n.n(Pe);
			const {
				fbt: we
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Se = e => e.type === Oe.f.Nsfw || e.type === Oe.f.Spoiler, Te = Object(c.c)({
				language: ke.P,
				post: he.N,
				subredditOrProfile: he.Z
			});
			class Ie extends o.a.PureComponent {
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
					}, i = Object(ve.a)(Object(Ce.b)(a)), d = t.flair.filter(Se);
					return o.a.createElement("div", {
						className: Object(N.a)(Ne.a.container, e, {
							[Ne.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: Ne.a.mainLine
					}, i && o.a.createElement("div", {
						className: Ne.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(Ce.a, a)), o.a.createElement("div", {
						className: Object(N.a)(Ne.a.title, !i && Ne.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(Ee.a, {
						className: Ne.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: Ne.a.metaLine
					}, s && !!r && o.a.createElement("span", {
						className: Ne.a.meta
					}, Object(je.e)(r) ? Object(ue.c)(r.displayText || r.name) : Object(ue.b)(r.displayText || r.name)), o.a.createElement("span", {
						className: Ne.a.meta
					}, we._({
						"*": "{score} points",
						_1: "1 point"
					}, [we._plural(t.score, "score", Object(_e.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: Ne.a.meta
					}, we._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [we._plural(t.numComments, "numComments", Object(_e.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Le = Object(d.b)(Te, e => ({
					openLightbox: t => e(Object(pe.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Ie),
				Be = n("./src/reddit/components/SidebarPostList/index.m.less"),
				Fe = n.n(Be);
			const {
				fbt: De
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ae = 10, Me = 2, Re = Object(c.a)(he.T, e => e.filter(e => !e.isSponsored)), We = Object(c.c)({
				posts: Re
			});
			class Ue extends o.a.Component {
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
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || Ae, this.showMorePosts = () => {
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
						return o.a.createElement(ye, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, o.a.createElement(Le, {
							className: Object(N.a)(Fe.a.smallPost, a),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(v.a)(Object(ue.f)(t)),
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
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === a.length) return null;
					const m = this.getVisiblePostsCounts(),
						u = Object(be.a)(c),
						p = Object(be.b)(c),
						b = u || p,
						h = a.slice(l * m, (l + 1) * m),
						[g, ...x] = h,
						f = b ? h.slice(0, Me) : x.slice(0, Me),
						y = b ? h.slice(Me) : x.slice(Me);
					return o.a.createElement("div", {
						className: Object(N.a)(Fe.a.container, t, {
							[Fe.a.redditStyle]: i
						})
					}, !b && o.a.createElement(ye, {
						onPostVisible: r,
						postId: g.id
					}, o.a.createElement(le.a, {
						backgroundWrapperClassName: Fe.a.largePostBackgroundWrapper,
						descriptionClassName: Fe.a.largePostDescription,
						innerContainerClassName: Fe.a.largePostInnerContainer,
						"data-redditstyle": i,
						onPostClick: this.openLargePost,
						postId: g.id,
						showSubredditMeta: !1,
						showSubredditName: Object(v.a)(Object(ue.f)(n)),
						trendingPost: g
					})), f.map(this.renderSmallPost), e, y.map(this.renderSmallPost), d && o.a.createElement(me.n, {
						className: Fe.a.SeeMore,
						onClick: this.showMorePosts
					}, s || De._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var He = Object(d.b)(We, e => ({
					openPost: t => e(Object(pe.a)(t.permalink))
				}))(Ue),
				Ve = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Ge = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				Ke = n("./src/reddit/selectors/discoveryUnit.ts"),
				qe = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				Je = n.n(qe);
			const ze = 10,
				Ye = Object(c.a)((e, t) => t.subredditName, e => Object(de.a)(e, l.M.TOP, {
					t: l.Pb.WEEK
				})),
				Ze = Object(c.c)({
					discoveryUnit: e => Object(Ke.c)(e, {
						unitName: Ge.j
					}),
					listingKey: Ye,
					posts: (e, t) => {
						const n = Ye(e, t);
						return Object(he.T)(e, {
							listingKey: n
						})
					},
					subreddit: $.y
				});
			class Qe extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(Ve.g)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(Ve.m)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(Ve.r)(t, e, void 0, n))
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
						topPostsVariant: d
					} = this.props;
					if (0 === a.length) return null;
					const c = i,
						l = a.length > ze;
					return o.a.createElement(Q.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(He, {
						listingKey: n,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: Je.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var Xe = Object(d.b)(Ze, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						loadMorePosts: () => e(Object(ce.r)({
							sort: l.M.TOP,
							subredditName: n,
							t: l.Pb.WEEK
						}))
					}
				})(Object(Z.c)(Qe)),
				$e = n("./src/config.ts"),
				et = n("./src/lib/localStorageAvailable/index.ts"),
				tt = n("./src/higherOrderComponents/asModal/index.tsx"),
				nt = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				st = n("./src/reddit/components/Translated/index.tsx"),
				rt = n("./src/reddit/controls/TextButton/index.tsx"),
				at = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			class it extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(nt.c, null, o.a.createElement(nt.g, null, o.a.createElement(at.a, null, o.a.createElement(nt.n, null, o.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.modal.title"
					})), o.a.createElement(rt.a, {
						onClick: e.toggleModal
					}, o.a.createElement(nt.b, null)))), o.a.createElement(nt.j, null, o.a.createElement(nt.m, null, o.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.modal.text"
					}))), o.a.createElement(nt.e, null, o.a.createElement(nt.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, o.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.modal.cancel"
					})), o.a.createElement(nt.o, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, o.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.modal.confirm"
					}))))
				}
			}
			var ot = Object(tt.a)(it),
				dt = n("./src/reddit/components/IdCard/Banner.tsx"),
				ct = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				lt = n("./src/reddit/constants/blade.ts"),
				mt = n("./src/reddit/controls/InternalLink/index.tsx"),
				ut = n("./src/reddit/helpers/localStorage/index.ts"),
				pt = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				bt = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				ht = n("./src/reddit/icons/svgs/Close/index.tsx"),
				gt = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				xt = n("./src/reddit/selectors/activeModalId.ts"),
				ft = n("./src/reddit/selectors/structuredStyles.ts"),
				yt = n("./src/reddit/components/IdCard/index.m.less"),
				vt = n.n(yt),
				_t = n("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				Et = n.n(_t);
			const {
				fbt: Ct
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ot = "mod_onboarding_modal", jt = "mod_onboarding_widget", kt = Object(c.a)(xt.a, (e, t) => Object(A.a)(gt.c.config)(e, {
				subredditId: t.subredditId
			}), (e, t) => Object(ft.l)(e, {
				subredditId: t.subredditId
			}), (e, t, n) => ({
				activeModalId: e,
				hasModeratorPermissions: t,
				modHasEditedBanner: !n || !!(n.bannerBackgroundImage || n.bannerHeight || n.bannerPositionedImage || n.bannerBackgroundColor),
				modHasEditedColors: !n || !!(n.primaryColor || n.highlightColor || n.backgroundColor || n.backgroundImage),
				modHasEditedIcon: !n || (!!n.communityIcon || !!n.bannerShowCommunityIcon)
			}));
			class Pt extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(ut.O)(jt, !0, this.props.subredditId), this.props.sendEvent(Object(pt.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(pt.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(pt.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(pt.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(pt.d)("styling_generic_link"))
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
					} = this.props, a = e && !(t && n && s) && (!Object(et.a)() || !Object(ut.p)(jt, r));
					a !== this.state.visible && (this.setState({
						visible: a
					}), a && this.props.sendEvent(Object(pt.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						modHasEditedBanner: t,
						modHasEditedColors: n,
						modHasEditedIcon: s,
						subredditName: r,
						toggleCloseMenuModal: a
					} = this.props;
					return this.state.visible ? o.a.createElement(Q.a, {
						className: Object(N.a)(Et.a.container, this.props.className)
					}, o.a.createElement(dt.a, {
						bannerBackgroundImage: "".concat($e.a.assetPath, "/img/id-cards/mod-onboarding@2x.png")
					}), o.a.createElement(ht.a, {
						className: Et.a.closeIcon,
						onClick: a
					}), Object(ct.a)({
						titleText: o.a.createElement(st.a, {
							msgId: "sidebar.moderatorOnboarding.title"
						}),
						snooBackground: Object(_.b)("url('".concat($e.a.assetPath, "/img/id-cards/snoo-artist@2x.png')"))
					}), o.a.createElement("div", {
						className: Object(N.a)(vt.a.Description, Et.a.description)
					}, Ct._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [Ct._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: lt.e.exportImport,
						className: Et.a.modHelpLink,
						target: "_blank"
					}, Ct._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), o.a.createElement(mt.a, {
						to: "/r/".concat(r, "?styling=true&route=").concat(lt.c.NameAndIcon),
						className: Et.a.link,
						onClick: this.customizeIcon
					}, s ? o.a.createElement(bt.a, {
						className: Et.a.checked
					}) : o.a.createElement(bt.a, {
						className: Et.a.unchecked
					}), o.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.addCommunityIcon"
					})), o.a.createElement(mt.a, {
						to: "/r/".concat(r, "?styling=true&route=").concat(lt.c.Banner),
						className: Et.a.link,
						onClick: this.customizeBannerImage
					}, t ? o.a.createElement(bt.a, {
						className: Et.a.checked
					}) : o.a.createElement(bt.a, {
						className: Et.a.unchecked
					}), o.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.customizeHeader"
					})), o.a.createElement(mt.a, {
						to: "/r/".concat(r, "?styling=true&route=").concat(lt.c.Global),
						className: Et.a.link,
						onClick: this.customizeThemeColors
					}, n ? o.a.createElement(bt.a, {
						className: Et.a.checked
					}) : o.a.createElement(bt.a, {
						className: Et.a.unchecked
					}), o.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.customizeColors"
					})), o.a.createElement(me.k, {
						to: "/r/".concat(r, "?styling=true"),
						className: Et.a.button,
						onClick: this.customizeAppearance
					}, o.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.customizeAppearance"
					})), o.a.createElement("div", {
						className: Et.a.subtext
					}, o.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.onlyModerators"
					})), e === Ot && o.a.createElement(ot, {
						withOverlay: !0,
						toggleModal: a,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Nt = Object(d.b)(kt, (e, t) => {
					let {
						subredditId: n,
						subredditName: s
					} = t;
					return {
						toggleCloseMenuModal: () => e(Object(I.i)(Ot))
					}
				})(Object(Z.c)(Pt)),
				wt = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				St = n("./src/reddit/featureFlags/index.ts"),
				Tt = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				It = n("./src/reddit/models/Widgets/index.ts"),
				Lt = n("./src/reddit/selectors/communityFlairs.ts"),
				Bt = n("./src/reddit/selectors/listings.ts"),
				Ft = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				Dt = n.n(Ft);
			const At = 250,
				Mt = 270,
				Rt = m.a.wrapped(j.a, "SidebarContainer", Dt.a),
				Wt = Object(c.c)({
					apiError: Bt.c,
					apiPending: Bt.d,
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
					language: ke.P,
					showGovernance: St.d.spPoints,
					showLeaderboard: St.d.spLeaderboard,
					widgets: $.r
				}),
				Ut = Object(d.b)(Wt);
			class Ht extends i.Component {
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
						if (this.props.communityFlairSortedKeys) return Object.assign({}, this.getPostFlairWidget(), {
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: It.d.Cloud,
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
						language: t,
						listingName: n,
						showGovernance: s,
						showLeaderboard: r,
						subredditId: a,
						subredditName: i,
						topPostsVariant: d
					} = this.props;
					let c = 0;
					const m = Object(be.a)(d),
						p = Object(be.b)(d),
						b = Object(be.c)(d),
						h = m || p;
					let v, _;
					!!this.getPostFlairWidget() ? v = this.props.widgets : (v = this.getCommunityWidgets(), _ = this.makeFlairFilterWidget());
					const j = this.makeRelatedCommunitiesWidget(m, p),
						N = !m,
						w = p,
						S = o.a.createElement(O.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: n,
							placementIndex: c++,
							position: Tt.a.FIRST,
							sizes: l.h
						});
					return o.a.createElement(Rt, {
						className: e
					}, E(n) && o.a.createElement(y.a, {
						listingName: n
					}), o.a.createElement(g, {
						cardClassName: Dt.a.card,
						subredditId: a
					}), h && o.a.createElement(k.a, null, o.a.createElement(Xe, {
						subredditName: i,
						topPostsVariant: d
					}, o.a.createElement("div", {
						className: Dt.a.inFeedAd
					}, S))), h && j && o.a.createElement(k.a, null, o.a.createElement(wt.a, {
						subredditName: i,
						truncateThreshold: Mt,
						widget: j
					})), w && v.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(k.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(wt.a, {
							subredditName: i,
							truncateThreshold: At,
							widget: e
						}))
					}), o.a.createElement(u.a, {
						className: Dt.a.card,
						subredditId: a
					}), o.a.createElement(Nt, {
						language: t,
						subredditId: a,
						subredditName: i
					}), s && o.a.createElement(x.a, {
						className: Dt.a.card,
						subredditId: a
					}), _ && o.a.createElement(k.a, null, o.a.createElement(wt.a, {
						subredditName: i,
						widget: _
					})), r && o.a.createElement(f.a, {
						className: Dt.a.card,
						subredditId: a,
						uniqueId: a
					}), o.a.createElement(C.g, {
						subredditId: a
					}), !h && S, N && !w && v.map((e, t) => {
						const n = "community-list" === e.kind;
						return o.a.createElement(k.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(wt.a, {
							subredditName: i,
							truncateThreshold: b && n ? Mt : b ? At : void 0,
							widget: e
						}))
					}), o.a.createElement(oe, {
						subredditId: a
					}), o.a.createElement(P.a, {
						adComponent: o.a.createElement(O.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: n,
							placementIndex: c++,
							position: Tt.a.BOTTOM,
							sizes: l.m
						})
					}))
				}
			}
			t.a = Ut(Ht)
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
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const m = Object(i.c)({
					postCount: l.S,
					previousPageIsOverlay: c.o,
					tabBadged: e => e.tabBadged
				}),
				u = Object(a.b)(m);
			t.a = u(Object(d.c)(e => 0 === e.postCount ? null : r.a.createElement(o.a, {
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
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/fastdom/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/flair.ts"),
				y = n("./src/reddit/helpers/trackers/postFlair.ts"),
				v = n("./src/reddit/models/Widgets/index.ts"),
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
				P = Object(h.t)({
					filterName: e => Object(h.S)(e)[b.f],
					url: e => Object(h.X)(e)
				}),
				N = Object(o.c)({
					subredditId: (e, t) => Object(_.D)(e, t.subredditName)
				}),
				w = Object(i.b)(N),
				S = l.a.div("WidgetContent", C.a),
				T = e => {
					var {
						display: t,
						isFlairFilter: n,
						onMouseDown: s
					} = e, r = j(e, ["display", "isFlairFilter", "onMouseDown"]);
					return a.a.createElement("li", {
						className: Object(d.a)(C.a.StyledFlair, t === v.d.Cloud && C.a.cloudDisplay, {
							[C.a.flairFilter]: n,
							[C.a["m-selected"]]: r.isSelected
						}),
						onMouseDown: s
					}, a.a.createElement(m.b, O({}, r, {
						className: C.a.Flair,
						isFlairFilter: n,
						forceSmallEmojis: !0
					})))
				};
			class I extends a.a.Component {
				constructor(e) {
					super(e), this.flairListRef = a.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(y.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(y.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(y.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(y.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(f.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(f.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
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
					}, a.a.createElement(S, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(r), o && this.renderButton()))
				}
			}
			t.a = P(w(Object(u.c)(I)))
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
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				m = n("./src/reddit/helpers/dom/index.ts"),
				u = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				p = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				h = n("./src/reddit/models/Widgets/index.ts"),
				g = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				x = n.n(g);
			const f = d.a.div("RuleShortName", x.a),
				y = d.a.div("RuleIndex", x.a),
				v = d.a.div("RuleTitle", x.a),
				_ = d.a.div("RuleDescription", x.a),
				E = d.a.wrapped(c.a, "RawHTMLDisplay", x.a),
				C = {};
			class O extends a.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(m.f)() || this.setState({
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
					}, a.a.createElement(b.a, null, a.a.createElement(y, null, "".concat(e.humanIndex, ".")), a.a.createElement(v, null, "".concat(e.rule.shortName)), a.a.createElement("div", null, !s(e) && r && (t.isVisible ? a.a.createElement(p.a, {
						className: x.a.Chevron
					}) : a.a.createElement(u.a, {
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
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/OutboundLink/index.tsx"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/linkMatchers/index.ts"),
				b = n("./src/reddit/models/Image/index.tsx"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/Widgets/Button/index.m.less"),
				v = n.n(y);
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
					return Object.assign({}, s, r)
				},
				E = e => e.kind === g.f.Image ? v.a.imageButton : v.a.textButton,
				C = e => {
					const t = Object(g.n)(e),
						n = Object(p.g)(p.e, t);
					return n ? n.url : e.url
				},
				O = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: n
					} = e, s = Object(h.a)(e).button;
					return r.a.createElement(c.i, {
						className: E(t),
						style: _(t, n, s)
					}, t.kind === g.f.Text && r.a.createElement("span", {
						className: t.hoverState ? v.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && r.a.createElement("span", {
						className: v.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				j = e => r.a.createElement(l.a, {
					href: C(e.button),
					isSponsored: !1,
					source: null
				}, r.a.createElement(O, e)),
				k = u.a.wrapped(o.a, "RawHTMLDisplay", v.a);
			var P = Object(a.b)(() => Object(i.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: f.R
				}))(e => r.a.createElement(d.a, {
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
				N = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./src/lib/humanizeDate/index.ts"),
				S = n("./src/reddit/controls/TextButton/index.tsx"),
				T = n("./src/reddit/components/Widgets/Calendar/index.m.less"),
				I = n.n(T);
			const L = 100,
				B = {
					isExpanded: !1
				},
				F = u.a.wrapped(o.a, "RawHTMLDisplay", I.a),
				D = u.a.div("EventContainer", I.a),
				A = u.a.div("EventTitle", I.a),
				M = u.a.div("EventDate", I.a),
				R = u.a.div("EventLocation", I.a),
				W = u.a.div("EventDescription", I.a),
				U = u.a.wrapped(S.a, "ToggleDescription", I.a);
			class H extends r.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = B
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > L ? r.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, L), r.a.createElement(U, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? N.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : N.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : r.a.createElement(W, null, e.text)
				}
			}
			const V = Object(i.c)({
				language: f.P
			});
			var G = Object(a.b)(V)(e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, n) => r.a.createElement(D, {
					key: "".concat(n, "-").concat(t.title)
				}, r.a.createElement(A, null, t.titleHtml ? r.a.createElement(F, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(M, null, Object(w.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						n = t.getHours(),
						s = t.getMinutes();
					return s < 10 ? "".concat(n, ":0").concat(s) : "".concat(n, ":").concat(s)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(R, null, t.locationHtml ? r.a.createElement(F, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(H, {
					language: e.language,
					text: t.description
				}))))),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				q = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var J = Object(K.c)(e => r.a.createElement(q.b, {
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
				Y = Object(a.b)(z),
				Z = (e, t, n) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(n, "</body>");
			class Q extends r.a.Component {
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
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Z(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(d.a, {
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
			var X = Y(Q),
				$ = n("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = n.n($);
			var te = u.a.div("ImageFrame", ee.a),
				ne = n("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				se = n.n(ne);
			var re = u.a.img("StyledImage", se.a);
			class ae extends r.a.Component {
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
						s = r.a.createElement(te, null, r.a.createElement(re, {
							alt: N.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: n.url
						}));
					return n.linkUrl ? r.a.createElement(l.a, {
						href: n.linkUrl,
						isSponsored: !1,
						source: null
					}, s) : s
				}
			}
			var ie = ae,
				oe = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				de = n("./src/reddit/components/Flair/index.tsx"),
				ce = n("./src/reddit/controls/InternalLink/index.tsx"),
				le = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				me = n("./src/reddit/models/Flair/index.ts"),
				ue = n("./src/reddit/components/Widgets/Moderator/index.m.less"),
				pe = n.n(ue);
			const be = u.a.div("ModeratorListItem", pe.a),
				he = u.a.div("Username", pe.a),
				ge = u.a.a("MessageModsLink", pe.a),
				xe = u.a.wrapped(de.b, "FlairComponent", pe.a),
				fe = e => e.authorFlairType === me.f.Richtext ? {
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
				ye = e => r.a.createElement(he, null, "u/".concat(e)),
				ve = u.a.wrapped(ce.a, "InternalLink", pe.a),
				_e = u.a.div("LinkContainer", pe.a);
			var Ee = e => {
					const {
						subredditName: t,
						widget: n
					} = e;
					return r.a.createElement(d.a, {
						styles: n.styles,
						title: N.fbt._("Moderators", null, {
							hk: "3AMICc"
						}),
						headerButton: r.a.createElement(ge, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, r.a.createElement(le.a, null))
					}, n.mods.map(e => r.a.createElement(be, {
						key: e.name
					}, (e => r.a.createElement(oe.a, {
						to: "/user/".concat(e.name, "/")
					}, ye(e.name)))(e), r.a.createElement(xe, {
						flair: fe(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(_e, null, r.a.createElement(ve, {
						to: "/r/".concat(t, "/about/moderators/")
					}, N.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					}))))
				},
				Ce = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Oe = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				je = n("./src/reddit/components/Widgets/TextArea/index.m.less"),
				ke = n.n(je);
			const Pe = u.a.div("WidgetContent", ke.a),
				Ne = u.a.wrapped(o.a, "RawHTMLDisplay", ke.a);
			var we = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(Pe, null, r.a.createElement(Ne, {
					html: e.widget.textHtml || ""
				}))),
				Se = n("./src/reddit/components/Widgets/Base/index.tsx"),
				Te = e => r.a.createElement(Se.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Ee;
						case "textarea":
							return we;
						case "button":
							return P;
						case "subreddit-rules":
							return Oe.b;
						case "community-list":
							return J;
						case "calendar":
							return G;
						case "image":
							return ie;
						case "custom":
							return X;
						case "post-flair":
							return Ce.a;
						default:
							return Te
					}
				}(e.widget);
				return r.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlair.ts"),
				o = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				m = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				currentUser: b.i,
				flairStyleTemplate: c.R,
				hideNSFWPref: b.z,
				isActive: p.i,
				language: b.P,
				moderatorPermissions: m.i,
				modModeEnabled: c.P,
				post: p.N,
				showEditFlair: u.a,
				subredditOrProfile: p.Z,
				userIsOp: b.gb
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
						const s = t === d.a.upvoted ? Object(a.ab)(n) : Object(a.w)(n);
						e(s)
					},
					onIgnoreReports: () => e(Object(a.Y)(n)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, n) => Object.assign({}, n, e, t, {
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
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || ""
					}))
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
				return c
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/featureFlags/index.ts"),
				d = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};

			function c(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(a.b)(s)(e => {
					const {
						featureEnabled: s
					} = e, a = d(e, ["featureEnabled"]);
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
				return u
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
				d = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(c);
			const m = {},
				u = e => Object(o.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(o.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(o.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				b = e => Object(s.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
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
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, n) {
			"use strict";
			n.d(t, "t", (function() {
				return o
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "q", (function() {
				return l
			})), n.d(t, "r", (function() {
				return m
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "d", (function() {
				return k
			}));
			var s = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t) => {
					if (t) {
						const n = r.media(e, t.post.id);
						if (n) {
							n.streamPublicId = t.stream.stream_id;
							const r = Object(s.h)(e, {
								streamIdFromPath: t.post.id
							});
							r === s.a.LIVE ? n.type = "stream_live" : r === s.a.VOD ? n.type = "stream_vod" : r === s.a.UNAVAILABLE && (n.type = "stream_unavailable")
						}
						return {
							post: r.post(e, t.post.id),
							media: n,
							subreddit: r.subreddit(e)
						}
					}
					return {
						subreddit: r.subreddit(e)
					}
				},
				i = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				o = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, a(e)),
				d = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, a(e)),
				c = (e, t) => n => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "rpan",
					actionInfo: {
						position: t || 0
					}
				}, a(n, e)),
				l = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, i(t), e && Object.assign({}, a(t, e))),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, i(t), a(t, e)),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, i(t), a(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share_video"
				}, i(t), a(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, i(t), a(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, i(t), a(t, e)),
				g = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, i(t), a(t, e)),
				x = e => t => {
					const n = Object(s.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, a(t, n))
				},
				f = e => t => {
					const n = Object(s.k)(t, e);
					return Object.assign({
						source: "stream_chat",
						action: "click",
						noun: "send_chat"
					}, a(t, n))
				},
				y = (e, t) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				}, a(n, t)),
				v = (e, t, n) => s => Object.assign({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: {
						scrubbing_start_ms: e,
						scrubbing_end_ms: t
					}
				}, i(s), a(s, n)),
				_ = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "close"
				}, a(t, e)),
				E = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "pause"
				}, a(t, e)),
				C = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "play"
				}, a(t, e)),
				O = e => t => Object.assign({
					source: "stream_player",
					action: "mute",
					noun: "volume"
				}, a(t, e)),
				j = e => t => Object.assign({
					source: "stream_player",
					action: "unmute",
					noun: "volume"
				}, a(t, e)),
				k = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "replay_video"
				}, a(t, e))
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "q", (function() {
				return u
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
				return y
			})), n.d(t, "a", (function() {
				return v
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
			const a = e => Object.assign({}, r.defaults(e), {
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
				d = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, a(t)),
				c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return d(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = d("compare_wiki_pages"),
				m = d("revert_wiki_page"),
				u = d("view_wiki_page"),
				p = d("view_source"),
				b = d("add_wiki_page_contributor"),
				h = d("remove_wiki_page_contributor"),
				g = d("save_wiki_page_settings"),
				x = d("copy_url"),
				f = d("add_wiki_subreddit_contributor"),
				y = d("remove_wiki_subreddit_contributor"),
				v = d("ban_wiki_contributor"),
				_ = d("unban_wiki_contributor"),
				E = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				C = {
					[s.a.Inherit]: "subreddit_wiki_perms",
					[s.a.Contributors]: "only_wiki_contributors",
					[s.a.Mods]: "only_mods"
				},
				O = e => t => Object.assign({}, a(t), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: r.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				j = e => t => Object.assign({}, a(t), {
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
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("envelope"), " ").concat(e.className)
			}), "Envelope", o.a);
			t.a = d
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
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", o.a);
			t.a = d
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
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx"
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
				d = n.n(o),
				c = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = n("./node_modules/lodash/fromPairs.js"),
				m = n.n(l),
				u = n("./node_modules/react/index.js"),
				p = n.n(u),
				b = n("./node_modules/react-redux/es/index.js"),
				h = n("./node_modules/reselect/es/index.js"),
				g = n("./src/lib/classNames/index.ts"),
				x = n("./src/lib/extractQueryParams/index.ts"),
				f = n("./src/lib/isAdHocMultireddit/index.ts"),
				y = n("./src/lib/isFakeSubreddit/index.ts"),
				v = n("./src/lib/listingSort/index.ts"),
				_ = n("./src/lib/makeListingKey/index.ts"),
				E = n("./src/lib/objectSelector/index.ts"),
				C = n("./src/lib/constants/index.ts"),
				O = n("./src/lib/fastdom/index.ts"),
				j = n("./src/lib/performanceTimings/index.tsx"),
				k = n("./src/reddit/actions/pages/subreddit.ts"),
				P = n("./src/reddit/actions/preferences.ts"),
				N = n("./src/reddit/actions/search.ts"),
				w = n("./src/reddit/actions/subreddit.ts"),
				S = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				T = n("./src/reddit/components/ContentGate/index.tsx"),
				I = n("./src/reddit/components/CreatePostBanner/index.tsx"),
				L = n("./src/reddit/components/DownToChatBanner/index.tsx"),
				B = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				F = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				D = n("./src/reddit/components/EmptySubreddit.tsx"),
				A = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				M = n("./src/reddit/components/Governance/ClaimPointsBanner/async.ts"),
				R = n("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				W = n("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				U = n("./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx"),
				H = n("./src/reddit/components/HeaderImage/index.tsx"),
				V = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				G = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				K = n("./src/reddit/components/JumpToContent/index.tsx"),
				q = n("./src/reddit/components/ListingPostList/index.tsx"),
				J = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				z = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				Y = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				Z = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				Q = n("./src/reddit/components/SubredditSidebar/index.tsx"),
				X = n("./src/reddit/components/TabBadger/index.tsx"),
				$ = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ee = n("./src/reddit/constants/page.ts"),
				te = n("./src/reddit/constants/parameters.ts"),
				ne = n("./src/reddit/constants/postLayout.ts"),
				se = n("./src/reddit/contexts/PageLayer/index.tsx"),
				re = n("./src/reddit/featureFlags/index.ts"),
				ae = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				ie = n("./src/reddit/helpers/trackers/screenview.ts"),
				oe = n("./src/reddit/layout/page/Listing/index.tsx"),
				de = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ce = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				le = n("./src/reddit/selectors/discoveryUnit.ts"),
				me = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				ue = n("./src/reddit/selectors/experiments/topPosts.ts"),
				pe = n("./src/reddit/selectors/experiments/trending.ts"),
				be = n("./src/reddit/selectors/listings.ts"),
				he = n("./src/reddit/selectors/meta.ts"),
				ge = n("./src/reddit/selectors/moderatorPermissions.ts"),
				xe = n("./src/reddit/selectors/posts.ts"),
				fe = n("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				ye = n("./src/reddit/selectors/subreddit.ts"),
				ve = n("./src/reddit/selectors/user.ts"),
				_e = n("./src/reddit/pages/Subreddit/index.m.less"),
				Ee = n.n(_e);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), je = Object(c.a)({
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
			}), ke = 5, Pe = 3, Ne = Object(se.t)(), we = Object(c.a)({
				resolved: {},
				chunkName: () => "SubredditTopContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), n.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), n.e("SubredditTopContent")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx")),
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
			}), Se = Object(E.a)(Object(h.a)((e, t) => {
				let {
					location: n
				} = t;
				return n.search
			}, e => m()([...Object(x.a)(e)]))), Te = Object(h.a)((e, t) => {
				let {
					match: n
				} = t;
				return n.params.subredditName
			}, (e, t) => {
				let {
					match: n
				} = t;
				return n.params.sort
			}, Se, ve.U, me.a, (e, t, n, s, r) => {
				let a = t;
				a || (e === ee.f && r ? a = C.M.BEST : Object(y.a)(e) && (a = C.M.HOT));
				const i = Object(k.g)(n, s);
				return Object(k.h)(e, a, n, i)
			}), Ie = Object(h.c)({
				isTopContentDismissed: ve.M
			}), Le = Object(h.c)({
				subreddit: (e, t) => Object(ye.y)(e, {
					subredditName: t.match.params.subredditName
				})
			}), Be = Object(h.c)({
				countryMeta: he.b,
				geopopular: ve.m
			}), Fe = Object(h.c)({
				isLoggedIn: ve.H
			}), De = Object(E.a)((e, t) => {
				const {
					subreddit: n
				} = Le(e, t), {
					subredditName: s
				} = t.match.params;
				if (n) {
					const r = Te(e, t),
						a = Object(ge.a)(ce.c.config)(e, {
							subredditId: n.id
						}),
						i = Object(xe.J)(e, r, s, !0),
						o = !Object(be.d)(e, {
							listingKey: r
						});
					if (a && o && i.length <= 1) return !0
				}
				return !1
			}), Ae = Object(h.c)({
				isPopular: se.C,
				isInTrendingEntrypointExperiment: pe.a
			}), Me = e => {
				const t = te.t in e && e[te.t].toUpperCase();
				if ("string" == typeof t && t in C.Pb) return C.Pb[t]
			}, Re = Object(E.a)((e, t) => {
				const {
					sort: n,
					subredditName: s
				} = t.match.params, r = Se(e, t);
				if (n) return Object(v.b)({
					sort: n,
					timeSort: Me(r)
				});
				if (Object(y.a)(s)) return s === ee.f && Object(me.a)(e) ? Object(v.b)({
					sort: C.M.BEST
				}) : Object(v.b)({
					sort: C.M.HOT
				});
				const a = Te(e, t),
					i = e.listings.postOrder.listingSort[a];
				if (i && !i.hasChanged) return Object(v.d)(i.sort);
				const {
					subreddit: o
				} = Le(e, t);
				if (o) {
					const t = Object(ye.B)(e, {
						subredditId: o.id
					});
					return Object(v.d)(t)
				}
				return Object(v.d)(e.user.prefs.sort)
			}), We = Object(E.a)((e, t) => {
				const {
					subredditName: n
				} = t.match.params;
				return Object(ye.T)(e, {
					subredditName: n
				})
			}), Ue = Object(h.c)({
				claimablePointsEnabled: re.d.spClaimablePoints,
				isBlacklistedTopContentPage: le.f,
				listingKey: Te,
				sortParams: Re,
				subredditPremiumEnabled: re.d.spPremiumUpsells,
				stellarRegistrationBannerEnabled: re.d.spStellarWalletRegistration,
				topContent: We,
				topContentDiscoveryUnit: e => Object(le.c)(e, {
					unitName: de.a
				}),
				topPostsVariant: ue.d,
				walletRegistrationBannerEnabled: re.d.spWalletRegistrationBanner
			}), He = Object(h.c)({
				showCreatePostBanner: De,
				contentGateInfo: (e, t) => Object(ve.f)(e, t.match.params.subredditName),
				layout: se.N,
				isRpanDuVisible: (e, t) => {
					let {
						match: n
					} = t;
					return Object(fe.a)(e, {
						listingName: "r/".concat(n.params.subredditName)
					})
				},
				rpanInjectionIndex: (e, t) => {
					let {
						match: n
					} = t;
					return Object(fe.b)(e, {
						listingName: "r/".concat(n.params.subredditName)
					})
				}
			}), Ve = () => Object(h.a)(ve.U, Be, Se, Ie, Le, (e, t) => {
				let {
					match: n
				} = t;
				return Object(ye.v)(e, {
					subredditName: n.params.subredditName
				})
			}, Fe, (e, t) => {
				let {
					match: n
				} = t;
				return n.params.subredditName
			}, Ae, Ue, He, (e, t, n, s, r, a, i, o, d, c, l) => {
				let {
					countryMeta: m,
					geopopular: u
				} = t, {
					isTopContentDismissed: p
				} = s, {
					subreddit: b
				} = r, {
					isLoggedIn: h
				} = i, {
					isInTrendingEntrypointExperiment: g,
					isPopular: x
				} = d, {
					claimablePointsEnabled: f,
					subredditPremiumEnabled: y,
					listingKey: v,
					sortParams: {
						sort: _,
						timeSort: E
					},
					stellarRegistrationBannerEnabled: O,
					topContent: j,
					topContentDiscoveryUnit: k,
					topPostsVariant: P,
					isBlacklistedTopContentPage: N,
					walletRegistrationBannerEnabled: w
				} = c;
				const S = m || C.u.Everywhere,
					T = u || S,
					I = n && te.g in n ? n[te.g].toUpperCase() : T,
					L = !!n.hasOwnProperty("f");
				return Object.assign({
					countrySort: I,
					claimablePointsEnabled: f,
					subredditPremiumEnabled: y,
					isLoggedIn: h,
					isInTrendingEntrypointExperiment: g,
					isPopular: x,
					listingKey: v,
					renderNSFWContentGate: b && b.isNSFW && !e,
					isTopContentDismissed: p,
					sort: _,
					stellarRegistrationBannerEnabled: O,
					subreddit: b,
					subredditAboutInfo: a,
					subredditName: o,
					timeSort: E,
					topContent: j,
					topContentDiscoveryUnit: k,
					topPostsVariant: P,
					isBlacklistedTopContentPage: N,
					isFlairFilter: L,
					walletRegistrationBannerEnabled: w
				}, l)
			}), Ge = (e, t) => ({
				onLoadMorePosts: () => e(w.r({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				onLoadMoreSearchResults: () => e(Object(N.g)([C.Kb.Posts])),
				refreshFeed: () => e(w.s({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				setTopContentDismissalPref: () => e(Object(P.D)())
			}), Ke = Object(b.b)(Ve, Ge), qe = Object(c.a)({
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
			}), Je = e => p.a.createElement(qe, Ce({}, e, {
				fallback: p.a.createElement(Y.a, {
					className: e.className,
					showCardView: !!e.showCardView
				})
			})), ze = Object(c.a)({
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
			}), Ye = Object(c.a)({
				resolved: {},
				chunkName: () => "TopWeekPostsDiscoveryUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), n.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), n.e("TopWeekPostsDiscoveryUnit")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx")),
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
			class Ze extends p.a.Component {
				constructor() {
					super(...arguments), this.onTopContentDismissed = () => {
						this.props.setTopContentDismissalPref()
					}
				}
				componentDidMount() {
					O.a.read(() => {
						Object(j.d)(j.c.Subreddit, this.props.isLoggedIn)
					})
				}
				render() {
					const {
						claimablePointsEnabled: e,
						contentGateInfo: t,
						countrySort: n,
						isInTrendingEntrypointExperiment: s,
						isPopular: r,
						isLoggedIn: a,
						layout: i,
						listingKey: o,
						match: d,
						renderNSFWContentGate: c,
						showCreatePostBanner: l,
						sort: m,
						subredditPremiumEnabled: u,
						isTopContentDismissed: b,
						stellarRegistrationBannerEnabled: h,
						sendEvent: x,
						subreddit: v,
						subredditAboutInfo: E,
						subredditName: O,
						timeSort: j,
						topContent: k,
						topContentDiscoveryUnit: P,
						topPostsVariant: N,
						isBlacklistedTopContentPage: w,
						isRpanDuVisible: Y,
						rpanInjectionIndex: $,
						isFlairFilter: ee,
						walletRegistrationBannerEnabled: te
					} = this.props, se = Object(y.a)(O), re = O.toLowerCase(), de = "/r/".concat(O, "/"), ce = {
						listingKey: o,
						listingName: re
					}, le = Object(ue.a)(N), me = Object(ue.b)(N), pe = Object(ue.c)(N);
					let be;
					se ? be = Object(f.a)(O) ? p.a.createElement(je, ce) : p.a.createElement(ze, ce) : v && (be = p.a.createElement(Q.a, Ce({}, ce, {
						className: Ee.a.sidebar,
						subredditId: v.id,
						subredditName: O,
						topPostsVariant: N
					})));
					const he = Object(ae.a)(t, c, O);
					if (he) return p.a.createElement(T.default, he);
					const ge = i === ne.g.Large,
						xe = r && s,
						fe = v ? v.id : void 0,
						ye = !d.params.sort && k && !k.isSubscribed && k.postIds && k.postIds.length >= ke && !b && !w && !le && !me,
						ve = {},
						_e = i === ne.g.Classic ? Ee.a.classicChild : i === ne.g.Compact ? Ee.a.compactChild : Ee.a.cardChild;
					if (u && v && i === ne.g.Large && (ve[0] = {
							estHeight: 487,
							id: "newbie-banner-".concat(i, "-").concat(o),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(F.a, {
									className: Object(g.a)(t, Ee.a.newbieBanner)
								})
							}
						}, ve[3] = {
							estHeight: 256,
							id: "lfg-banner-".concat(i, "-").concat(o),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(B.a, {
									className: Object(g.a)(t, Ee.a.childLayoutClass),
									subredditId: v.id
								})
							}
						}), te && v && (ve[1] = {
							estHeight: 384,
							id: "wallet-registration-".concat(i, "-").concat(o),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(W.a, {
									className: Object(g.a)(t, _e),
									subredditId: v.id
								})
							}
						}), h && v && (ve[2] = {
							estHeight: 200,
							id: "stellar-registration-".concat(i, "-").concat(o),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(U.a, {
									className: Object(g.a)(t, _e),
									subredditId: v.id
								})
							}
						}), e && v && (ve[2] = {
							estHeight: 268,
							id: "claim-points-".concat(i, "-").concat(o),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(M.a, {
									className: Object(g.a)(t, _e),
									subredditId: v.id
								})
							}
						}), !r && pe && j !== C.Pb.WEEK && i === ne.g.Large) {
						const e = Object(_.a)(O, C.M.TOP, {
							t: C.Pb.WEEK
						});
						ve[Pe] = {
							estHeight: 0,
							id: "top-week-posts-".concat(i, "-").concat(o),
							render: t => {
								let {
									className: n
								} = t;
								return p.a.createElement(Ye, {
									className: n,
									listingKey: e,
									subredditName: O
								})
							}
						}
					}
					if (Y) {
						const {
							child: e,
							idx: t
						} = Object(J.a)({
							children: ve,
							desiredIndex: $,
							layout: i,
							listingKey: o,
							listingName: "r/".concat(O),
							sendEvent: x
						});
						ve[t] = e
					}
					const Ne = {
							baseUrl: de,
							countrySort: n,
							sort: m,
							subredditId: fe,
							timeSort: j
						},
						Se = ee ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Te = v && v.subscribers;
					return p.a.createElement(Z.a, {
						subredditId: fe
					}, p.a.createElement(oe.a, {
						subredditId: fe,
						className: Object(g.a)(Ee.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !se && p.a.Children.toArray([p.a.createElement(H.a, {
							headerText: v ? v.name : O,
							disableFullscreen: ge,
							isTopBannerVariant: !0,
							key: "headerimage",
							subredditOrProfile: v,
							url: de
						}), p.a.createElement(S.a, {
							layout: i,
							key: "idtopbar",
							subreddit: v || void 0,
							subredditId: fe,
							subredditName: O,
							subredditUrl: de
						})]),
						trendingUnit: xe && p.a.createElement(Je, {
							showCardView: this.props.layout === ne.g.Large
						}),
						content: p.a.createElement(p.a.Fragment, null, v && v.isQuarantined && p.a.createElement(G.a, {
							subredditName: O
						}), v && l && p.a.createElement(I.a, {
							subreddit: v,
							listingKey: o,
							listingName: re
						}), xe && p.a.createElement(z.a, {
							className: Ee.a.duHeader
						}, Oe._("Popular posts", null, {
							hk: "Gfyj2"
						})), ye && p.a.createElement(we, {
							discoveryUnit: P,
							subredditName: v ? v.name : O,
							topContent: k,
							onCloseClick: this.onTopContentDismissed
						}), !se && a && !(E && E.userIsBanned) && p.a.createElement(V.a, {
							subredditName: O
						}), p.a.createElement(A.a, Ne), v && p.a.createElement(L.a, {
							subreddit: v
						}), p.a.createElement(K.a, null), p.a.createElement(X.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: o,
							subredditName: O,
							subscriberCount: Te
						}), p.a.createElement(q.a, {
							injectChildren: ve,
							listingKey: o,
							listingName: re,
							listingViewed: (e, t) => Object(ie.d)(o, m, t, e, j),
							noPostsComponent: () => p.a.createElement(D.a, {
								listingName: re,
								sort: m,
								subreddit: v || void 0
							}),
							onLoadMore: Se,
							inSubredditOrProfile: !se
						}), p.a.createElement(R.a, null)),
						sidebar: be
					}))
				}
			}
			t.default = Ne(Ke(Object($.c)(Ze)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				o = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				c = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(s.a)(d.a, d.b, (e, t) => {
					let {
						listingName: n
					} = t;
					const s = Object(o.jb)(e);
					if (!s) return !1;
					let d;
					if (-1 === [a.P, "r/popular"].indexOf(n)) {
						const t = n.replace(/^r\//, ""),
							r = Object(i.D)(e, t),
							a = s.subreddit[r];
						if (!a) return !1;
						d = a
					} else d = s;
					if (!d.rpanDuDismissalTime) return !1;
					return new Date(d.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.v
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return n
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(c.n)(e, {
						subreddit: n
					})
				}, c.l, (e, t, n, s, r, i) => {
					if (!e) return !1;
					if (i.isPermanentlyCanceled) return !1;
					if (n) return !1;
					if (t) return !!r && r.show_discovery_unit;
					if (!i.global.viewer_enabled) return !1;
					return [a.P, "r/popular"].indexOf(s) > -1
				}),
				m = Object(s.a)(d.b, (e, t) => {
					let {
						listingName: n
					} = t;
					return n
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(c.n)(e, {
						subreddit: n
					})
				}, c.m, (e, t, n, s) => {
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
				return P
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "f", (function() {
				return F
			})), n.d(t, "j", (function() {
				return D
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "e", (function() {
				return M
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
				d = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = n("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				p = n.n(m)()(e => Object(r.a)(Object(s.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var b = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				x = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				y = e => e.publicAccessNetwork.hlsStreams,
				v = Object(s.a)(y, e => e.ended),
				_ = Object(s.a)(y, e => e.removed),
				E = Object(s.a)(e => e.publicAccessNetwork.models, v, _, (e, t, n) => {
					const s = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = R(s, o.b.ENDED) ? o.b.ENDED : s,
							a = n.stream.vod_accessible;
						return r === s && !0 === a ? e : Object.assign({}, e, {
							[t]: Object.assign({}, n, {
								stream: Object.assign({}, n.stream, {
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
							r = R(s, o.b.ENDED) ? o.b.ENDED : s,
							a = n.stream.vod_accessible;
						return r === s && !1 === a ? e : Object.assign({}, e, {
							[t]: Object.assign({}, n, {
								stream: Object.assign({}, n.stream, {
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
				}, (e, t) => p(t.listingName)(e, t), E, h, d.h, c.b, (e, t, n, s, r, d) => {
					if (d) {
						const a = [];
						if (e) {
							const t = Object(i.g)(e);
							n[t] && a.push(t)
						}
						const d = a.concat(t),
							c = [...new Set(d)],
							l = new Set([...s, ...r]);
						return c.filter(e => {
							const t = n[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== o.b.KILLED && t.stream.state !== o.b.PURGED
						})
					}
					const c = new Set([...s, ...r]);
					return Object.keys(n).filter(e => !c.has(e)).map(e => n[e]).filter(e => e.rank !== a.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== o.b.KILLED && e.stream.state !== o.b.PURGED).map(e => e.post.id)
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
					const n = t.find(t => {
						const n = e[t];
						return !!n && n.stream.state === o.b.IS_LIVE
					});
					if (n) return e[n]
				}),
				P = Object(s.a)(E, j, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === o.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				N = Object(s.a)(f, (e, t) => {
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
				w = Object(s.a)((e, t) => {
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
						a = r.find(e => e.stream.state === o.b.IS_LIVE);
					if (a) return a.post.id;
					const i = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				S = Object(r.a)(Object(s.a)(w, E, (e, t) => e ? t[e] : void 0)),
				T = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? Object(i.g)(n) : void 0
				}, w, h, d.h, (e, t) => {
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
				I = Object(s.a)(x, f, N, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				L = Object(s.a)(x, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				B = Object(r.a)(Object(s.a)(T, E, (e, t) => e ? t[e] : void 0)),
				F = Object(r.a)(Object(s.a)(I, E, (e, t) => e ? t[e] : void 0)),
				D = Object(r.a)(Object(s.a)(L, E, (e, t) => e ? t[e] : void 0)),
				A = (Object(r.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, E, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => Object.assign({}, t[n], {
					preloadedPreviewUrl: e[n]
				})))), Object(s.a)((e, t) => {
					let {
						streamId: n
					} = t;
					return n
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				M = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? C(e, n) : void 0
				}, e => !e || e.chat_disabled);

			function R(e, t) {
				const n = {
					[o.b.NOT_STARTED]: 0,
					[o.b.PUBLISHED]: 1,
					[o.b.IS_LIVE]: 2,
					[o.b.DISCONNECTED]: 2,
					[o.b.ENDED]: 3,
					[o.b.KILLED]: 4,
					[o.b.PURGED]: 4
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
					return r === o.b.IS_LIVE || r === o.b.DISCONNECTED ? U.LIVE : r === o.b.ENDED && s.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				V = Object(s.a)(B, H, b.b, l.c, l.p, (e, t, n, s, r) => n ? s : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : r : void 0),
				G = Object(s.a)(B, H, W, (e, t, n) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && n < e.broadcast_time ? n : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				o = Object(s.a)(i, a.o, (e, t) => t && !e.isIntroFinished),
				d = Object(s.a)(i, e => e.lastChatActivityUtcTs),
				c = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => s.U.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.S
			})
		}
	}
]);
//# sourceMappingURL=Subreddit.667ecee0feeb94a71127.js.map