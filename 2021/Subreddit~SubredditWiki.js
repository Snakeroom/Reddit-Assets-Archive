// https://www.redditstatic.com/desktop2x/Subreddit~SubredditWiki.ecbb3af66ee333f01fea.js
// Retrieved at 4/8/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit~SubredditWiki"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/chat/controls/Svg/index.m.less"),
				d = n.n(a);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: o
					} = e;
				return r.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[d.a.disable]: n,
						[d.a.active]: s,
						[d.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", d.a)
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(r.a)(o.t),
				x = Object(r.a)(o.u),
				g = Object(r.a)(o.s),
				f = (e, t, n) => async (s, r, i) => {
					const o = Object(p.A)(r(), {
						subredditName: e
					});
					if (o) return E(o, t, n)(s, r, i)
				}, y = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), E = (e, t, n) => async (r, o, p) => {
					const f = await Object(l.e)(t);
					r(h());
					const E = o();
					try {
						await Object(i.g)("communityIcon", f, e.id)(r, o, p)
					} catch (C) {
						return Object(b.a)(Object(c.c)(E, "something went wrong with the uploading the image")), r(Object(a.f)({
							kind: u.b.Error,
							text: y()
						})), void r(g())
					}
					const _ = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!_) return Object(b.a)(Object(c.c)(E, "image is null")), r(Object(a.f)({
						kind: u.b.Error,
						text: y()
					})), void r(g());
					await Object(i.k)(e.id, {
						communityIcon: _
					}, d.b.idCard, n)(r, o, p), r(Object(a.f)({
						kind: u.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(x())
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/matchRoute/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				i = n("./node_modules/react-router-redux/es/index.js");
			const o = (e, t = !0) => async (n, o, {
				routes: a
			}) => {
				const d = o();
				Object(s.a)(e, a, d) ? n(Object(i.b)(e)) : t ? Object(r.d)(e, "_blank") : window.location.assign(e)
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
				DefaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				defaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/subredditWelcomeMessage.ts"),
				u = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				m = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				p = n("./src/reddit/components/SubredditNav/index.tsx"),
				b = n("./src/reddit/components/SubscribeButton/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				x = n("./src/reddit/constants/posts.ts"),
				g = n("./src/reddit/featureFlags/index.ts"),
				f = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				y = n("./src/reddit/constants/tracking.ts"),
				E = n("./src/reddit/selectors/telemetry.ts");
			var _ = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				C = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var O = e => r.a.createElement("svg", v({
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, e), r.a.createElement("path", {
					d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
				})),
				k = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				S = n("./src/reddit/selectors/widgets.ts"),
				w = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				T = n.n(w);
			const I = c.a.wrapped(C.a, "Planet", T.a),
				P = c.a.img("SubredditIcon", T.a),
				N = Object(o.c)({
					spPollsEnabled: g.d.spPolls,
					subredditInlineEditingEnabled: (e, {
						subredditId: t
					}) => Object(k.a)(e, {
						subredditId: t
					}),
					tournamentsEnabled: (e, {
						subredditId: t
					}) => !!t && Object(j.N)(e, {
						subredditId: t
					}),
					userIsSubscriber: (e, {
						subredditName: t
					}) => {
						const n = t;
						return Object(j.gb)(e, {
							identifier: {
								name: n,
								type: "subreddit"
							}
						})
					},
					widget: (e, {
						subredditId: t
					}) => t ? Object(S.f)(e, {
						subredditId: t
					}) : void 0
				});
			t.a = Object(i.b)(N, (e, t) => ({
				_onOpenWelcomeMessageModal: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (s) return e(Object(l.d)(s))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				onOpenWelcomeMessageModal: () => !e.userIsSubscriber && t._onOpenWelcomeMessageModal()
			}))(Object(d.a)(e => {
				const t = Object(_.a)(),
					n = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					i = e.subreddit ? e.subreddit.url : e.subredditUrl,
					o = e.subreddit ? e.subreddit.title : "",
					d = e.subreddit && Object(f.a)(e),
					c = !(!e.theme || !d),
					l = s.charAt(0).toUpperCase() + s.slice(1),
					g = !!e.subreddit && e.subredditInlineEditingEnabled,
					C = Object(a.a)(T.a.SubredditIcon, T.a.editableIcon, {
						[T.a.emptyEditableIcon]: !d
					}),
					v = r.a.createElement(m.a, {
						className: C,
						subreddit: e.subreddit,
						iconUrl: d || void 0,
						inTopBar: !0
					}),
					k = c ? r.a.createElement(P, {
						src: d || void 0
					}) : t ? r.a.createElement(O, {
						className: T.a.DefaultIcon
					}) : r.a.createElement(I, null),
					j = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					S = e.layout ? e.layout === h.g.Large ? "984px" : "100%" : "1086px";
				return r.a.createElement("div", {
					className: T.a.container,
					style: {
						maxWidth: S
					}
				}, r.a.createElement("div", {
					className: T.a.subredditMetaContainer
				}, g ? v : k, r.a.createElement("div", {
					className: Object(a.a)(T.a.textContainer, {
						[T.a.textContainerNoIcon]: !c
					})
				}, r.a.createElement("div", {
					className: T.a.text
				}, r.a.createElement("h1", {
					className: T.a.title
				}, o || l), !!o && r.a.createElement("h2", {
					className: T.a.description
				}, "r/", s)), r.a.createElement("div", {
					className: T.a.subscribeButtonContainer
				}, r.a.createElement(b.a, {
					className: T.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => ({
							...E.defaults(t),
							source: "id_banner",
							action: y.c.CLICK,
							noun: e,
							subreddit: E.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: s,
						type: x.a.SUBREDDIT
					},
					onClick: e.onOpenWelcomeMessageModal,
					small: !0
				})), e.subreddit && r.a.createElement(u.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), j && r.a.createElement(p.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: i,
					subredditId: n,
					subredditNavContainerClassName: T.a.subredditNavContainer
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
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
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
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = n("./src/reddit/components/Footer/index.m.less"),
				x = n.n(h);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = c.a.div("FooterContainer", x.a), y = c.a.div("UserAgreement", x.a), E = c.a.a("UserAgreementLink", x.a), _ = c.a.a("PrivacyLink", x.a);
			var C = () => i.a.createElement(f, null, i.a.createElement(y, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", i.a.createElement(E, {
					href: `${s.a.redditUrl}/help/useragreement`
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", i.a.createElement(_, {
					href: `${s.a.redditUrl}/help/privacypolicy`
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				v = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				O = n("./src/reddit/components/RichTextJson/index.tsx"),
				k = n("./node_modules/lodash/flatMap.js"),
				j = n.n(k),
				S = n("./src/lib/linkMatchers/index.ts"),
				w = n("./src/lib/linkMatchers/customLinks.ts"),
				T = n("./src/reddit/controls/OutboundLink/index.tsx");
			const I = /\[(.+?)\]\((.+?)\)/g,
				P = e => {
					const t = e.split(I);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, i] = t.slice(s, s + 3);
						n.push(e), n.push([i, r])
					}
					return n
				};
			var N = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = j()(t, P)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = S.f.add(w.g.subreddit.prefix, w.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return i.a.createElement(T.b, {
								className: e.linkClassName,
								href: s,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return i.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				B = n("./src/reddit/contexts/PageLayer/index.tsx"),
				L = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/chat/controls/Svg/index.tsx");

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var R = e => i.a.createElement(M.a, F({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				D = n("./src/reddit/models/ContentGate.ts"),
				A = n("./src/lib/constants/index.ts"),
				U = n("./src/reddit/selectors/platform.ts"),
				H = n("./src/reddit/selectors/user.ts");
			var W = n("./src/reddit/selectors/meta.ts"),
				V = n("./src/reddit/components/ContentGate/index.m.less"),
				q = n.n(V);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = c.a.wrapped(R, "PrivateKey", q.a), Y = c.a.div("ButtonsContainer", q.a), G = c.a.div("Container", q.a), z = c.a.div("Description", q.a), Q = c.a.div("PrivateSubredditDetails", q.a), X = c.a.div("PrivateSubredditDescription", q.a), Z = c.a.h3("PrivateSubredditName", q.a), $ = c.a.a("Link", q.a), ee = c.a.wrapped(L.k, "LinkRouterButton", q.a), te = c.a.wrapped(L.j, "LinkButton", q.a), ne = c.a.wrapped(L.n, "SecondaryLinkRouterButton", q.a), se = c.a.wrapped(L.m, "SecondaryLinkButton", q.a), re = c.a.wrapped(ee, "GoHomeLinkButton", q.a), ie = c.a.img("Image", q.a), oe = c.a.img("ImagePlaceholder", q.a), ae = c.a.wrapped(ee, "LeftLinkRouterButton", q.a), de = c.a.wrapped(te, "LeftLinkButton", q.a), ce = c.a.wrapped(se, "SecondaryLeftLinkButton", q.a), le = c.a.wrapped(ne, "SecondaryLeftLinkRouterButton", q.a), ue = c.a.h3("Title", q.a), me = c.a.div("PageBody", q.a), pe = c.a.div("QuarantineMessageWrapper", q.a), be = Object(d.c)({
				isLoggedIn: H.I,
				origin: W.i,
				user: H.i,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(H.J)(e)) return !1;
					const t = Object(U.d)(e);
					if (!t) return !1;
					const n = Object(H.e)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const r = 30 * A.x;
					return s > Date.now() - r
				})(e)
			}), he = Object(B.t)(), xe = Object(o.b)(be, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), ge = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: o,
					isContributorRequestsDisabled: a,
					isPrivateSubredditContributorRequestPending: d,
					location: c,
					origin: m,
					pageLayer: h,
					quarantineRequiresEmail: x,
					quarantineMessage: g,
					quarantineMessageHtml: f,
					quarantineMessageRTJson: y,
					setNSFWPreference: E,
					subredditDescription: _,
					subredditName: C,
					user: k
				} = e, j = async () => {
					o ? await E() : await Object(u.k)(), window.location.reload()
				};
				switch (n) {
					case D.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(ue, null, J._("r/{community name} is a Reddit Premium community", [J._param("community name", C)], {
							hk: "2lyDwB"
						})), i.a.createElement(z, null, J._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(Y, null, k ? i.a.createElement(ce, {
							href: `${s.a.redditUrl}/premium`
						}, J._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(de, {
							href: Object(l.a)(c, m)
						}, J._("Sign Up", null, {
							hk: "rvpjy"
						})), k ? i.a.createElement(ee, {
							to: "/"
						}, J._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(se, {
							href: Object(l.a)(c, m)
						}, J._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case D.a.Nsfw:
					case D.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(ue, null, n === D.a.Nsfw ? J._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : J._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(z, null, J._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(Y, null, i.a.createElement(ae, {
							to: "/"
						}, J._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(se, {
							onClick: j
						}, J._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case D.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(K, null), i.a.createElement(ue, null, "r/", C, " ", J._("is a private community", null, {
							hk: "7zZmq"
						})), _ && _.length && i.a.createElement(Q, null, i.a.createElement(Z, null, "r/", C), i.a.createElement(X, null, i.a.createElement("div", null, _))), i.a.createElement(z, null, J._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", C, " ", J._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), J._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(Y, null, k ? i.a.createElement(i.a.Fragment, null, !a && i.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: q.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), i.a.createElement(ce, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${C}`
						}, J._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(ce, {
							href: Object(l.a)(c, m)
						}, J._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(ee, {
							to: "/"
						}, J._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case D.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), i.a.createElement(ue, null, J._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(z, null, J._("This community is {=quarantined}", [J._param("=quarantined", i.a.createElement($, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, J._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), i.a.createElement(pe, null, y ? i.a.createElement(O.a, {
							content: y,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : f ? i.a.createElement(v.a, {
							html: f
						}) : g || J._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), J._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(Y, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? i.a.createElement(Y, null, i.a.createElement(le, {
								to: "/"
							}, J._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(te, {
								href: `${s.a.redditUrl}/prefs/update`
							}, J._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(Y, null, i.a.createElement(ae, {
								to: "/"
							}, J._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(se, {
								onClick: t
							}, J._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(k, r, x)));
					case D.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(ue, null, J._("r/{community name} has been banned from Reddit", [J._param("community name", C)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(z, null, e ? i.a.createElement(N, {
							linkClassName: q.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : J._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(Y, null, i.a.createElement(ee, {
							to: "/"
						}, J._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, J._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(Y, null, i.a.createElement(ee, {
							to: "/"
						}, J._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(oe, null), i.a.createElement(ue, null, J._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(z, null, J._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(Y, null, k && i.a.createElement(b.a, {
							eventSource: "content_gate"
						}), i.a.createElement(re, {
							to: "/"
						}, J._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.ProfileDoesNotExist:
					case D.a.ProfileDeleted:
					case D.a.ProfileSuspended:
					case D.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case D.a.ProfileBlockedForLegalReason:
									return J._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case D.a.ProfileDeleted:
									return J._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case D.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, J._("This account has been {=suspended} .", [J._param("=suspended", i.a.createElement($, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, J._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case D.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(ue, null, J._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(z, null, J._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(Y, null, i.a.createElement(re, {
							to: "/"
						}, J._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, J._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(Y, null, i.a.createElement(re, {
							to: "/"
						}, J._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ie, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ue, null, J._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(Y, null, i.a.createElement(ee, {
							to: "/"
						}, J._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = he(xe(Object(a.i)(e => i.a.createElement(G, null, i.a.createElement("div", null, i.a.createElement(me, null, ge(e))), i.a.createElement(C, null)))))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = n.n(h),
				g = n("./src/lib/lessComponent.tsx");
			const f = "create-community-button",
				y = g.a.wrapped(c.c, "StyledTooltip", x.a),
				E = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.gb)(e),
					userIsSuspended: b.O
				});
			t.a = Object(o.b)(E, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(p.b)(t)), e(Object(m.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: f
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: r,
				openCommunityCreation: o,
				sendEvent: a,
				userDoesNotHaveEnoughExpToCreateCommunity: d,
				userIsSuspended: c
			}) => i.a.createElement(u.l, {
				className: e,
				disabled: c || d,
				onClick: () => o(a),
				onMouseEnter: n,
				onMouseLeave: r,
				id: f,
				isFullWidth: !0
			}, s.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), d ? i.a.createElement(y, {
				caretOnTop: !0,
				tooltipId: f,
				text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : c ? i.a.createElement(y, {
				caretOnTop: !0,
				tooltipId: f,
				text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_23HWOAAvtr9XUARUICwS1l",
				button: "_1FQRn1pPshYj4hu7mq9APN",
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/downToChat.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				u = n("./src/reddit/selectors/downToChat.ts"),
				m = n("./src/reddit/selectors/experiments/downToChat.ts"),
				p = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				b = n.n(p);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = Object(o.c)({
				isDownToChatExperimentEnabled: m.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(u.c)(e, t.id)
			}), g = Object(i.b)(x, e => ({
				startChatting: t => e(Object(a.i)(t))
			}));
			t.a = g(Object(d.c)(e => {
				const {
					headerButton: t,
					isEnabled: n,
					isDownToChatExperimentEnabled: s
				} = e;
				if (!n || !s) return null;
				const i = h._("Start Chatting", null, {
					hk: "3KfdZ4"
				});
				return r.a.createElement(c.q, {
					className: b.a.button,
					text: i,
					Icon: t ? l.a : void 0,
					onClick: () => {
						const {
							startChatting: t,
							subreddit: n
						} = e;
						t(n.id)
					},
					redditStyle: !0
				})
			}))
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(n.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
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
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(r.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/IdCard/index.m.less"),
				o = n.n(i);
			const a = r.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return r.a.createElement("div", {
					className: o.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				i = n("./src/reddit/constants/listings.ts"),
				o = n("./src/reddit/constants/page.ts");
			const a = e => e && e.toLowerCase() === i.b.Popular,
				d = e => e && e.toLowerCase() === i.b.All,
				c = e => e && e === o.b,
				l = (e, t = 40, n = 68) => ({
					height: n,
					image: e,
					width: t
				}),
				u = ({
					listingName: e,
					subreddit: t,
					idCardWidget: n
				}) => {
					let o, u, m, p, b;
					const h = n && n.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						x = n && n.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let g, f;
					return c(e) ? (o = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = i.c[i.b.Home], u = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(e) ? (o = `${r.a.assetPath}/img/id-cards/banner@2x.png`, u = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = i.c[i.b.All]) : a(e) ? (o = `${r.a.assetPath}/img/id-cards/banner@2x.png`, u = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), m = l(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = i.c[i.b.Popular]) : e && (u = n && n.description, m = l(""), p = t.displayText, b = t.url, f = n && n.subscribersCount, g = n && n.currentlyViewingCount), {
						snooBackground: m,
						description: u,
						titleText: p,
						url: b,
						subscribersCount: f,
						subscribersText: h,
						currentlyViewingText: x,
						currentlyViewingCount: g,
						...o ? {
							bannerBackgroundImage: o
						} : {}
					}
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
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/IdCard/index.m.less"),
				a = n.n(o);
			const d = ({
				snooBackground: e
			}) => r.a.createElement("div", {
				className: a.a.AdorableSnoo,
				style: {
					background: e.image,
					backgroundSize: `${e.width}px ${e.height}px`,
					height: e.height,
					width: e.width
				}
			});
			t.a = ({
				titleText: e,
				snooBackground: t
			}) => r.a.createElement("div", {
				className: Object(i.a)(a.a.Title, a.a.TitleShifted)
			}, r.a.createElement(d, {
				snooBackground: t
			}), r.a.createElement("div", {
				className: a.a.TitleTextShiftedContainer
			}, r.a.createElement("span", {
				className: a.a.TitleText
			}, e)))
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "i", (function() {
				return w
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/lodash/isNil.js"),
				d = n.n(a),
				c = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...s
							}
						} = this;
						l.a.publish(c.a, s, e)
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
			var p = Object(i.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				x = n("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const n = Object(h.a)(e, t),
					s = Object(x.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var f = Object(i.b)(() => Object(o.a)(g, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(p, {
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
				const n = Object(h.a)(e, t),
					s = Object(x.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var E = Object(i.b)(() => Object(o.a)(y, e => e))(e => r.a.createElement(p, {
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
			var _ = Object(i.b)(() => Object(o.c)({
					subreddit: x.T
				}))(e => r.a.createElement(p, {
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
				C = n("./src/reddit/hooks/usePostContext.ts");
			var v = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(C.a)(), i = Object(s.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					created: t.created,
					numComments: t.numComments,
					distinguishType: t.distinguishType,
					domain: t.source && t.source.displayText,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					sourceUrl: t.source && t.source.url,
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: i
				})
			};
			var O = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: i
				} = Object(C.a)(), o = Object(s.useMemo)(() => ({
					author: t.author,
					isModerator: i,
					post: {
						id: t.id
					},
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {}
				}), [t, n, i]);
				return r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: o
				})
			};
			var k = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(C.a)(), i = Object(s.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					distinguishType: t.distinguishType,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					numComments: t.numComments,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: i
				})
			};
			var j = Object(i.b)(() => Object(o.c)({
				subreddit: x.T
			}))(e => r.a.createElement(p, {
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
			var S = Object(i.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(x.L)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
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
			var w = Object(i.b)(() => Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(x.T)(e, {
					subredditId: t
				}) : null
			}))(e => r.a.createElement(p, {
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
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(i.b)(() => Object(o.c)({
					isNightmodeOn: m.V
				}));
			t.a = x(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				unblurButtonContainer: "c1UAj_LbgdGBuJFlKbnrQ",
				unblurButton: "_2Ws3wFSVPzJhnW46FsoxLv"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/elementClassNames.ts"),
				h = n("./src/reddit/controls/OutboundLink/index.tsx"),
				x = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/constants/tracking.ts"),
				E = n("./src/reddit/components/Media/blurredContent.ts"),
				_ = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				C = n.n(_);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => e > 2 * x.e,
				k = e => {
					const t = Object(c.a)(C.a.image, b.g, e.className, {
							[C.a.mShowCentered]: e.showCentered,
							[C.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${x.j}px`), e.isListing || e.isTall && O(e.height) || (n.maxHeight = `${x.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), i.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				j = e => {
					const t = {};
					return (!e.showFull && Object(x.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${x.j}px`, e.shouldBlur && (t.maxWidth = Object(x.I)(e.height, e.width) ? `${x.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(C.a.container, e.className),
						style: t
					}, e.children)
				},
				S = Object(o.b)(() => Object(d.a)(g.C, f.bb, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(g.b)(e, n) : null, (e, t, n) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n
				})));
			t.a = S(e => e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
				href: e.outboundUrl,
				target: "_blank",
				rel: u.a,
				onMouseDown: t => {
					e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(h.c)(t.currentTarget, e.postId, e.basePixelMetadata)
				}
			}, T(e)) : e.isListing && e.postPermalink ? i.a.createElement(a.a, {
				target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
				to: Object(m.a)(e.postPermalink)
			}, T(e)) : T(e));
			const w = (e, t) => i.a.createElement(k, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[y.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				T = ({
					onClick: e,
					...t
				}) => {
					const n = Object(x.I)(t.height, t.width),
						r = O(t.height) && n;
					return i.a.createElement(j, v({}, t, {
						className: `${n?`${y.a} `:""}${t.className||""}`
					}), t.isListing ? i.a.createElement("div", {
						className: t.contentImageClassName
					}, w(n, t)) : i.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
					}, w(n, t)), t.isListing && !t.showFull && t.height > x.j && Object(x.I)(t.height, t.width) && i.a.createElement("div", {
						className: C.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && i.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && i.a.createElement("div", {
						className: C.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: C.a.unblurButton
					}, Object(E.a)(!!t.isNSFW, !!t.isSpoiler))))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				d = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = n.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					s = e.blurSrc ? r.a.createElement("img", {
						className: c.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), r.a.createElement("div", {
					className: Object(i.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const h = 100,
				x = h / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class y extends o.a.Component {
				constructor(e) {
					super(e), this.toggle = e => {
						if (e) {
							const e = this.play();
							e && e.catch && e.catch(() => {})
						} else this.pause()
					}, this.ref = null
				}
				play() {
					if (this.ref && this.ref.play) return this.ref.play()
				}
				pause() {
					if (this.ref && this.ref.pause) return this.ref.pause()
				}
				componentDidMount() {
					this.initEventHandlers(), this.toggle(!this.props.shouldPause && (this.props.autoplay || this.props.isNotCardView))
				}
				componentWillUnmount() {
					this.destroyEventHandlers()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.shouldPause !== e.shouldPause && this.toggle(!e.shouldPause && (e.autoplay || e.isNotCardView))
				}
				destroyEventHandlers() {
					this.ref && this.cancelBufferingDetector && this.cancelBufferingDetector()
				}
				initEventHandlers() {
					this.ref && this.props.onBufferingChange && (this.cancelBufferingDetector = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							i = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", i), e.addEventListener("playing", i);
						let o = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(a = d);
							if (e.paused || e.seeking || !n) return void(a = d);
							const r = o;
							4 === e.readyState ? o = !1 : !o && d >= a && d < a + x ? o = !0 : o && d >= a && d > a + x && (o = !1), a = d, r !== o && t(o)
						}, h);
						return () => {
							clearInterval(c), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", r)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const {
						autoplay: e,
						isListing: t,
						isNotCardView: n,
						onBufferingChange: s,
						shouldLoad: r,
						shouldPause: i,
						showCentered: a,
						showFull: d,
						source: c,
						...l
					} = this.props;
					return o.a.createElement("video", f({}, l, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), o.a.createElement("source", {
						src: Object(g.a)(this.props.source || "")
					}))
				}
			}
			var E = y,
				_ = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				C = n.n(_);
			const v = Object(d.c)({
					autoplayPref: p.b,
					consumed: b.a,
					loadTimes: b.f,
					metadata: b.h,
					started: b.k
				}),
				O = Object(a.b)(v, (e, {
					postId: t
				}) => ({
					onBufferingChanged: n => {
						e(n ? l.r(t) : l.E(t))
					},
					onLoadStarted: n => e(l.q(t, n)),
					onMetadataReceived: n => e(l.D({
						metadata: n,
						postId: t
					})),
					onPaused: () => e(l.z({
						postId: t
					})),
					onPlayable: n => e(l.A(t, n)),
					onPlaying: () => e(l.C(t)),
					onWatched: () => e(l.s(t)),
					onViewableImpression: () => e(l.x(t)),
					onFullyViewableImpression: () => e(l.u(t)),
					onPlayedWithSound: () => e(l.B(!1, t)),
					onWatchedPercent: n => e(l.N(n, t))
				}));
			class k extends o.a.Component {
				constructor() {
					super(...arguments), this.percentTriggered = 0, this._checkForConsumption = r()(e => {
						if (this.props.consumed) return;
						const {
							target: t
						} = e;
						t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && this.props.onWatched()
					}, 200), this.onTimeUpdate = e => {
						e.persist(), this._checkForConsumption(e)
					}, this.onVideoPlayable = e => {
						this.props.metadata || this.sendTransformedMetadata(e), this.props.started || this.props.onPlayable(e.timeStamp)
					}, this.loadStarted = e => {
						this.props.onLoadStarted(e.timeStamp)
					}, this.sendTransformedMetadata = e => {
						this.props.onMetadataReceived({
							id: this.props.postId,
							length: 1e3 * e.target.duration,
							originalHeight: e.target.videoHeight,
							originalWidth: e.target.videoWidth
						})
					}, this.onPaused = e => {
						this.props.onPaused()
					}, this.onPlaying = e => {
						this.props.loadTimes || this.onVideoPlayable(e), this.props.metadata || this.sendTransformedMetadata(e), this.props.onPlaying()
					}, this.renderVideoPlayer = () => {
						const {
							showCentered: e,
							isListing: t
						} = this.props, n = {};
						return e && (n.margin = "0 auto"), t || (n.maxHeight = `${m.e}px`), o.a.createElement(E, {
							autoplay: this.props.autoplayPref,
							className: Object(c.a)(u.a, C.a.styledVideo),
							height: this.props.height,
							isListing: this.props.isListing,
							isNotCardView: this.props.isNotCardView,
							key: this.props.postId,
							loop: !0,
							onBufferingChange: this.props.onBufferingChanged,
							onLoadStart: this.loadStarted,
							onLoadedData: this.onVideoPlayable,
							onLoadedMetadata: this.sendTransformedMetadata,
							onPause: this.props.onPaused,
							onPlaying: this.onPlaying,
							onTimeUpdate: this.onTimeUpdate,
							shouldLoad: this.props.shouldLoad,
							shouldPause: this.props.shouldPause,
							showCentered: this.props.showCentered,
							showFull: this.props.showFull,
							source: this.props.source,
							style: n,
							width: this.props.width
						})
					}
				}
				render() {
					return this.props.isListing ? this.renderVideoPlayer() : o.a.createElement("div", {
						className: Object(c.a)(C.a.container, this.props.className, {
							[C.a.centered]: this.props.showCentered
						})
					}, o.a.createElement("a", {
						href: this.props.originalSource,
						target: "_blank"
					}, this.renderVideoPlayer()))
				}
			}
			t.a = O(k)
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? s.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? s.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
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
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				b = d.a.wrapped(e => i.a.createElement("div", {
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
					style: {
						...e.style,
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(l.a)(e).line, .8)
					}
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(a.a)(b))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				x = m.a.span("InnerSpan", u.a),
				g = m.a.span("TooltipTarget", u.a),
				f = m.a.span("SpoilerWrapper", u.a),
				y = m.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => i.a.createElement(f, p({}, n, {
					className: Object(o.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				E = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class _ extends i.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return i.a.createElement(y, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(x, null, i.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(E, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = _
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "v", (function() {
				return f
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "p", (function() {
				return w
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "w", (function() {
				return L
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				o = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(o),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				m = d.a.hr("Hr", a.a),
				p = d.a.code("M", a.a),
				b = d.a.pre("Pre", a.a),
				h = d.a.blockquote("Blockquote", a.a),
				x = d.a.p("P", a.a),
				g = d.a.li("Li", a.a),
				f = d.a.ul("Ul", a.a),
				y = d.a.ol("Ol", a.a),
				E = d.a.strong("B", a.a),
				_ = d.a.em("I", a.a),
				C = d.a.span("U", a.a),
				v = e => r.a.createElement("del", e),
				O = d.a.sub("Sub", a.a),
				k = d.a.sup("Sup", a.a),
				j = d.a.table("Table", a.a),
				S = d.a.tr("Tr", a.a),
				w = d.a.td("Tdl", a.a),
				T = d.a.td("Tdc", a.a),
				I = d.a.td("Tdr", a.a),
				P = d.a.th("Thl", a.a),
				N = d.a.th("Thc", a.a),
				B = (d.a.th("Thr", a.a), d.a.wrapped(e => r.a.createElement(i.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "A", a.a)),
				L = d.a.wrapped(c.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/blurredContent.ts"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/media.tsx"),
				x = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.m.less"),
				f = n.n(g);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = n("./src/lib/lessComponent.tsx").a.div("Container", f.a),
				_ = Object(d.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => o.a.createElement(E, y({}, n, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				C = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				v = e => r()(e, C),
				O = e => e.findIndex(C),
				k = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: i,
						isSpoiler: d,
						onClickRevealBlurred: c,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: g,
						useExplicitTextColor: y,
						shouldBlur: C
					} = e, k = s.document, j = [], S = e.mediaMetadata || null, w = O(k), T = v(k);
					if (C && !r) return o.a.createElement(E, {
						className: Object(a.a)(u.j, n)
					}, o.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: c
					}, Object(l.a)(!!i, !!d))));
					if (-1 !== w)
						for (let o = w; o <= T; o++) {
							const e = k[o];
							switch (e.e) {
								case b.k:
									j.push(x.c(e, g, o));
									break;
								case b.l:
									j.push(x.d(o));
									break;
								case b.b:
									j.push(x.a(e, S, g, o));
									break;
								case b.c:
									j.push(x.b(e, o));
									break;
								case b.p:
									j.push(x.f(e, S, g, o));
									break;
								case b.z:
									j.push(x.h(e, S, g, o));
									break;
								case b.u:
									j.push(x.g(e, S, g, o));
									break;
								case b.h:
									j.push(Object(h.a)(e, o));
									break;
								case b.m:
								case b.a:
								case b.D:
									j.push(...Object(h.b)(e, o, S, p, m, t))
							}
						}
					return y ? o.a.createElement(E, {
						className: Object(a.a)(u.j, n)
					}, j) : o.a.createElement(_, {
						className: Object(a.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, j)
				};
			class j extends o.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					c.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), c.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return k(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return w
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/elements.tsx"),
				x = n("./src/reddit/components/RichTextJson/media.m.less"),
				g = n.n(x),
				f = n("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = /\/(\w+)\/asset\/(\w+)\//,
				_ = f.a.wrapped(h.a, "A", g.a),
				C = f.a.wrapped(l.a, "ImageBox", g.a),
				v = f.a.wrapped(e => i.a.createElement("p", e), "Caption", g.a),
				O = f.a.div("Placeholder", g.a),
				k = f.a.wrapped(({
					className: e,
					e: t,
					...n
				}) => {
					const r = t === b.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return i.a.createElement(O, y({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, n))
				}, "Placeholder", g.a),
				j = ({
					c: e,
					x: t,
					y: n
				}, s) => i.a.createElement("div", {
					className: g.a.MediaWrapper
				}, i.a.createElement(u.a, {
					height: n,
					isListing: !1,
					key: s,
					showCentered: !0,
					showFull: !0,
					width: t
				}, i.a.createElement(c.a, {
					isListing: !1,
					source: e,
					height: n,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				S = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === b.s ? r = n.s.u : n.e === b.r ? r = n.s.gif : n.e === b.t && (r = (e => {
						const t = E.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? i.a.createElement(_, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				w = (e, t, n, s, r, a) => {
					const c = b.E(n, e.id);
					if (s) return [S(e, t, c)];
					const l = [];
					return c ? c.e === b.s ? l.push((({
						id: e,
						s: t
					}, n, s, r) => i.a.createElement("div", {
						className: Object(o.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: s
						})
					}, i.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: n,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, i.a.createElement(C, {
						altText: r,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(c, t, !!e.c, a)) : c.e === b.r ? l.push((({
						id: e,
						ext: t,
						s: n
					}, s, r) => {
						if (Object(p.f)(e)) {
							const a = t || Object(p.e)(e);
							return i.a.createElement("div", {
								className: Object(o.a)(g.a.MediaWrapper, {
									[g.a.mHasCaption]: r
								})
							}, i.a.createElement(_, {
								href: a,
								key: s,
								target: "_blank"
							}, n.mp4 ? i.a.createElement("video", {
								className: g.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, i.a.createElement("source", {
								src: n.mp4
							})) : {
								originalSource: a
							}))
						}
						return i.a.createElement("div", {
							className: Object(o.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: r
							})
						}, i.a.createElement(u.a, {
							height: n.y,
							isListing: !1,
							key: s,
							showCentered: !0,
							showFull: !0,
							width: n.x
						}, i.a.createElement(m.a, {
							height: n.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: n.mp4,
							width: n.x,
							postId: e,
							source: n.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(c, t, !!e.c)) : c.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: n,
						y: s,
						isGif: r
					}, a, c, l) => i.a.createElement("div", {
						className: Object(o.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: c
						})
					}, i.a.createElement(u.a, {
						height: s,
						isListing: !1,
						isVideo: !0,
						key: a,
						showCentered: !0,
						showFull: !0,
						width: n
					}, i.a.createElement(d.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: r,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: r
					}))))(c, t, !!e.c, r)) : l.push(((e, t) => i.a.createElement(k, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => i.a.createElement(v, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return T
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "e", (function() {
				return D
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/v4.js"),
				l = n.n(c),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var x = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				f = n.n(g);
			const y = 1e3,
				E = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class C extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = _.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = _.Inside, setTimeout(() => {
							this.mouseLocation === _.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, y)
					}, this.onMouseOut = () => {
						this.mouseLocation = _.Outside, setTimeout(() => {
							this.mouseLocation !== _.Inside && this.setState({
								tooltipOpen: !1
							})
						}, E)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = b.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === p.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const i = this.state.tooltipOpen ? l()() : void 0;
					return r ? a.a.createElement("div", {
						className: f.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: i,
						src: r,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(x, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: i,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var v = Object(u.c)(C),
				O = n("./src/reddit/components/RichTextJson/media.tsx"),
				k = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				j = n("./src/reddit/components/SubredditMention/index.tsx"),
				S = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				w = n("./src/reddit/helpers/richTextJson/index.ts");
			const T = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						i = [],
						o = s.length;
					for (let a = 0; a < o; a++) {
						const e = s[a];
						i.push(e.e === p.w ? e.t : D(e, t, a))
					}
					const c = d.x[r - 1];
					return a.a.createElement(c, {
						key: n
					}, i)
				},
				I = e => a.a.createElement(d.e, {
					key: e
				}),
				P = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const i = r.length,
						o = [];
					for (let a = 0; a < i; a++) o.push(L(r[a], t, n, a));
					return a.a.createElement(d.c, {
						key: s
					}, o)
				},
				N = (e, t) => {
					const n = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				B = (e, t, {
					renderingObjectInfo: n
				}, s) => {
					const r = e.c,
						i = [],
						o = r.length;
					for (let l = 0; l < o; l++) {
						const e = r[l].c;
						e && e.length && i.push(a.a.createElement(d.g, {
							key: l
						}, e.map((e, s) => L(e, t, {
							renderingObjectInfo: n
						}, s))))
					}
					const c = e.o ? d.i : d.v;
					return a.a.createElement(c, {
						key: s
					}, i)
				},
				L = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return P(e, t, n, s);
						case p.c:
							return N(e, s);
						case p.k:
							return T(e, n, s);
						case p.l:
							return I(s);
						case p.p:
							return B(e, t, n, s);
						case p.u:
							return F(e, t, n, s);
						case p.z:
							return M(e, t, n, s)
					}
				},
				M = (e, t, n, s) => {
					const r = e.c,
						i = e.h,
						o = r.length,
						c = i.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = i[d],
							{
								H: s,
								D: r
							} = W(e.a),
							{
								c: o = []
							} = e;
						l.push(a.a.createElement(s, {
							key: d
						}, R(o, t, n))), m[d] = r
					}
					for (let p = 0; p < o; p++) {
						const e = r[p],
							s = e.length,
							i = [];
						for (let r = 0; r < s; r++) {
							const s = m[r],
								{
									c: o = []
								} = e[r];
							i.push(a.a.createElement(s, {
								key: r
							}, R(o, t, n)))
						}
						u.push(a.a.createElement(d.t, {
							key: p
						}, i))
					}
					return a.a.createElement(d.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, l)), a.a.createElement("tbody", null, u))
				},
				F = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(w.f)(r.id) ? a.a.createElement(d.j, {
						key: s
					}, R(e.c, t, n)) : Object(O.b)(r, s, t)
				},
				R = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let i = 0; i < r; i++) {
						const r = e[i];
						if (r.e === p.A) s.push(A(r, i));
						else if (r.e === p.x) s.push(a.a.createElement(k.a, {
							key: i
						}, R(r.c, t, n)));
						else if (r.e === p.n) s.push(a.a.createElement("br", {
							key: i
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && s.push(a.a.createElement(v, {
									key: i,
									node: r,
									media: e
								}))
							}
						} else s.push(D(r, n, i))
					}
					return s
				},
				D = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const s = A({
								t: e.t,
								f: e.f
							}, 0);
							return Object(S.b)(e.u) ? a.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s) : a.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a
							}, s);
						case p.y:
							return a.a.createElement(j.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(d.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				A = (e, t) => {
					const {
						f: n,
						t: r
					} = e, i = [];
					if (!n) return H(0, r, t);
					const o = Object(s.a)(r);
					let a = 0,
						d = 0;
					const c = n.length;
					for (; a < c; a++) {
						const [e, t, s] = n[a], c = t + s, l = o[t], u = o[c] - l;
						l > d && i.push(H(0, r.substr(d, l - d), `between${a}`)), i.push(H(e, r.substr(l, u), a)), d = l + u
					}
					return d < r.length && i.push(H(0, r.substr(d), `remaining${a}`)), i
				},
				U = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				H = (e, t, n) => {
					let s = t;
					return s = i()(U, (t, s, r) => e & parseInt(r, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				W = e => {
					switch (e) {
						case p.f:
							return {
								H: d.r, D: d.q
							};
						case p.d:
							return {
								H: d.r, D: d.o
							};
						case p.e:
						default:
							return {
								H: d.r, D: d.p
							}
					}
				}
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
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/contexts/Post/index.tsx"),
				g = n("./src/reddit/controls/InternalLink/index.tsx"),
				f = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				y = n("./src/reddit/helpers/name/index.ts"),
				E = n("./src/reddit/models/Flair/index.ts"),
				_ = n("./src/reddit/models/Theme/index.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = n("./src/reddit/components/MiniCardPost/index.m.less"),
				O = n.n(v),
				k = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				j = n.n(k);
			const S = e => e.type === E.f.Spoiler,
				w = Object(h.t)();
			t.a = w(Object(x.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: x,
					shouldOpenPost: E,
					showSubredditMeta: v = !0,
					showSubredditName: k,
					subredditOrProfile: w
				} = e, T = h && h.preview && h.preview.url || void 0, I = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", N = E && P || x && Object(a.a)("/search", {
					q: x.rawQuery,
					source: I
				}) || P, B = x ? x.subredditInfo && x.subredditInfo.icon : w && w.icon.url, L = x ? x.subredditInfo && x.subredditInfo.displayText : w && (w.displayText || w.name), M = h ? h.flair.filter(S) : [], F = h ? h.score : 0, R = h ? h.numComments : 0, D = h && h.isSponsored, A = Object(C.a)(e).body, U = `linear-gradient(\n      ${Object(r.g)(A,.2)},\n      ${Object(r.g)(A,.3)},\n      ${Object(r.g)(A,.4)},\n      ${Object(r.g)(A,.6)},\n      ${Object(r.g)(A,.8)},\n      ${A}\n    )`, H = o.a.createElement("div", {
					id: i,
					className: Object(d.a)(j.a.trendingPost, {
						[j.a["m-background"]]: !!T
					})
				}, o.a.createElement(g.a, {
					to: N
				}, o.a.createElement("div", {
					className: Object(d.a)(j.a.backgroundWrapper, O.a.backgroundWrapper, t),
					style: {
						background: Object(_.g)(Object(C.a)(e).body, T || Object(C.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, D && o.a.createElement("div", {
					className: j.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), o.a.createElement("div", {
					className: Object(d.a)(j.a.innerContainer, O.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, o.a.createElement("h2", {
					className: h ? j.a.title : j.a.titleNoDescription
				}, e.title), h ? o.a.createElement("div", {
					className: Object(d.a)(j.a.description, n)
				}, M.length > 0 && o.a.createElement(m.a, {
					className: j.a.flair,
					titleFlair: M,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : o.a.createElement("div", {
					className: j.a.spacer
				}), v && B && L && o.a.createElement(f.a, {
					className: j.a.relatedSubredditMetaData,
					iconClassName: j.a.subredditIcon,
					iconUrl: B || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", L)], {
						hk: "2YTyJf"
					})
				}), !v && h && o.a.createElement("div", {
					className: j.a.metaLine
				}, k && L && o.a.createElement("span", {
					className: j.a.meta
				}, Object(y.c)(L)), o.a.createElement("span", {
					className: j.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(F, "number", Object(u.b)(F))], {
					hk: "1Jm6il"
				})), o.a.createElement("span", {
					className: j.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(R, "number", Object(u.b)(R))], {
					hk: "311aXY"
				})))))));
				return D ? o.a.createElement(p.a, {
					post: h
				}, H) : H
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/selectors/brandSafety.ts"),
				d = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(o.t)();
			t.a = m(Object(i.b)((e, {
				listingName: t,
				pageLayer: n
			}) => {
				const s = Object(a.b)(e, {
						listingName: t,
						pageLayer: n
					}),
					r = Object(c.A)(e) || Object(d.a)(e),
					i = Object(a.e)(e);
				return {
					canShowAd: s && !r,
					forcePlaceholder: !Object(a.c)(e),
					isAdsDisabled: r,
					viewIsUnsafe: i
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: n,
				pageLayer: s,
				...i
			}) => !t && e && s ? r.a.createElement(l.a, u({
				forceHouseAd: n
			}, i)) : null))
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
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", r.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				f = n("./src/reddit/icons/svgs/Upload/index.tsx"),
				y = n("./src/reddit/models/ApiRequestState/index.ts"),
				E = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				_ = n("./src/reddit/components/SubredditIcon/index.m.less"),
				C = n.n(_);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: s,
						...r
					} = e, o = Object(h.a)(), a = [n, C.a.inTopBar, C.a.iconContainer];
					return s ? a.push(C.a.emptyEditableIconInTopBar) : a.push(C.a.editableIcon, C.a.emptyEditableIcon), i.a.createElement("span", v({}, r, {
						className: Object(d.a)(...a)
					}), s ? o ? i.a.createElement(x.a, {
						name: "upload",
						className: C.a.emptyUploadButton
					}) : i.a.createElement(f.a, {
						className: C.a.emptyUploadButton
					}) : o ? i.a.createElement(x.a, {
						name: "add",
						className: C.a.emptyPlusButton
					}) : i.a.createElement(g.a, {
						className: C.a.emptyPlusButton
					}), e.children)
				},
				k = e => {
					const {
						iconColor: t,
						className: n,
						alt: s,
						role: r,
						onClick: o,
						inTopBar: a,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: C.a.iconContainer
					}, i.a.createElement("img", {
						alt: s,
						onClick: o,
						role: r,
						src: c,
						className: Object(d.a)(n, {
							[C.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				j = Object(a.c)({
					isLoading: E.b
				});
			class S extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: C.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(y.b)();
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
					return this.props.inTopBar ? i.a.createElement("span", {
						className: C.a.clickableUploadText,
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
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(k, v({
						alt: s.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, i.a.createElement(O, v({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(O, v({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [C.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(C.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
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
					return n ? i.a.createElement("div", {
						className: C.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(o.b)(j, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(c.a)(t.subreddit, n, s))
				}
			}))(Object(l.c)(S))
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
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
			const u = i.a.wrapped(o.b, "SubredditIcon", c.a),
				m = i.a.wrapped(e => r.a.createElement(a.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => r.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, r.a.createElement(l.a, {
						href: `/r/${e}/`
					}, r.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, r.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				x = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = n("./src/reddit/selectors/subredditMention.ts");
			class f extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(x.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const y = Object(b.c)(f),
				E = Object(o.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				_ = Object(i.b)(E),
				C = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: n,
					userVariant: s,
					rtJsonElementProps: i
				}) => {
					if (!t || !e) return r.a.createElement(y, {
						subredditName: n,
						rtJsonElementProps: i
					});
					switch (s) {
						case h.fd.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: i
							});
						case h.fd.SmIconHc:
							return r.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return r.a.createElement(y, {
								subredditName: n,
								rtJsonElementProps: i
							})
					}
				};
			t.b = _(C)
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
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				x = n("./src/reddit/components/IdCard/async.tsx"),
				g = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/reddit/components/IdCard/helpers.ts"),
				y = e => !Object(g.a)(e) || Object(f.c)(e) || Object(f.d)(e) || Object(f.e)(e),
				E = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				_ = n("./src/reddit/components/PowerupsSidebar/index.tsx"),
				C = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				v = n("./src/reddit/components/SidebarContainer/index.tsx"),
				O = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				k = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				j = n("./src/lib/makeListingKey/index.ts"),
				S = n("./src/reddit/actions/subreddit.ts"),
				w = n("./src/lib/classNames/index.ts"),
				T = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/helpers/name/index.ts"),
				N = n("./src/reddit/helpers/overlay/index.ts"),
				B = n("./src/reddit/selectors/experiments/topPosts.ts"),
				L = n("./src/reddit/selectors/posts.ts"),
				M = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const F = .99;
			class R extends a.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= F && t(n)
					}
				}
				render() {
					return a.a.createElement(M.a, {
						threshold: F,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var D = R,
				A = n("./src/lib/isUrl/index.ts"),
				U = n("./src/lib/prettyPrintNumber/index.ts"),
				H = n("./src/reddit/components/FlairWrapper/index.tsx"),
				W = n("./src/reddit/components/Thumbnail/index.tsx"),
				V = n("./src/reddit/models/Flair/index.ts"),
				q = n("./src/reddit/models/Subreddit/index.ts"),
				J = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				K = n.n(J);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = e => e.type === V.f.Nsfw || e.type === V.f.Spoiler, z = Object(c.c)({
				post: L.D,
				subredditOrProfile: L.P
			});
			class Q extends a.a.PureComponent {
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
					} = this.props, i = {
						post: t
					}, o = Object(A.a)(Object(W.b)(i)), d = t.flair.filter(G);
					return a.a.createElement("div", {
						className: Object(w.a)(K.a.container, e, {
							[K.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: K.a.mainLine
					}, o && a.a.createElement("div", {
						className: K.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(W.a, i)), a.a.createElement("div", {
						className: Object(w.a)(K.a.title, !o && K.a.titleSingle),
						title: t.title
					}, d.length > 0 && a.a.createElement(H.a, {
						className: K.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), a.a.createElement("div", {
						className: K.a.metaLine
					}, s && !!r && a.a.createElement("span", {
						className: K.a.meta
					}, Object(q.g)(r) ? Object(P.d)(r.displayText || r.name) : Object(P.c)(r.displayText || r.name)), a.a.createElement("span", {
						className: K.a.meta
					}, Y._({
						"*": "{score} points",
						_1: "1 point"
					}, [Y._plural(t.score, "score", Object(U.b)(t.score))], {
						hk: "1JZ0qm"
					})), a.a.createElement("span", {
						className: K.a.meta
					}, Y._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [Y._plural(t.numComments, "numComments", Object(U.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var X = Object(d.b)(z, e => ({
					openLightbox: t => e(Object(N.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Q),
				Z = n("./src/reddit/components/SidebarPostList/index.m.less"),
				$ = n.n(Z);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = 10, ne = 2, se = Object(c.a)(L.J, e => e.filter(e => !e.isSponsored)), re = Object(c.c)({
				posts: (e, t) => se(e, {
					...t
				})
			});
			class ie extends a.a.Component {
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
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || te, this.showMorePosts = () => {
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
							smallPostClassName: i
						} = this.props;
						return a.a.createElement(D, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, a.a.createElement(X, {
							className: Object(w.a)($.a.smallPost, i),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(g.a)(Object(P.g)(t)),
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
						posts: i,
						redditStyle: o,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === i.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(B.a)(c),
						p = Object(B.b)(c),
						b = m || p,
						h = i.slice(l * u, (l + 1) * u),
						[x, ...f] = h,
						y = b ? h.slice(0, ne) : f.slice(0, ne),
						E = b ? h.slice(ne) : f.slice(ne);
					return a.a.createElement("div", {
						className: Object(w.a)($.a.container, t, {
							[$.a.redditStyle]: o
						})
					}, !b && a.a.createElement(D, {
						onPostVisible: r,
						postId: x.id
					}, a.a.createElement(T.a, {
						postId: x.id,
						backgroundWrapperClassName: $.a.largePostBackgroundWrapper,
						descriptionClassName: $.a.largePostDescription,
						innerContainerClassName: $.a.largePostInnerContainer,
						"data-redditstyle": o,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(P.g)(n)),
						trendingPost: x
					})), y.map(this.renderSmallPost), e, E.map(this.renderSmallPost), d && a.a.createElement(I.o, {
						className: $.a.SeeMore,
						onClick: this.showMorePosts
					}, s || ee._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var oe = Object(d.b)(re, e => ({
					openPost: t => e(Object(N.a)(t.permalink))
				}))(ie),
				ae = n("./src/reddit/components/TrackingHelper/index.tsx"),
				de = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ce = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				le = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = n("./src/reddit/selectors/discoveryUnit.ts"),
				me = n("./src/reddit/selectors/subreddit.ts"),
				pe = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				be = n.n(pe);
			const he = 10,
				xe = Object(c.a)((e, t) => t.subredditName, e => Object(j.a)(e, l.P.TOP, {
					t: l.Vb.WEEK
				})),
				ge = Object(c.c)({
					discoveryUnit: e => Object(ue.c)(e, {
						unitName: le.j
					}),
					listingKey: xe,
					posts: (e, t) => {
						const n = xe(e, t);
						return Object(L.J)(e, {
							listingKey: n
						})
					},
					subreddit: me.A
				});
			class fe extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(ce.h)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(ce.x)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(ce.C)(t, e, void 0, n))
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
						posts: i,
						subredditName: o,
						topPostsVariant: d
					} = this.props;
					if (0 === i.length) return null;
					const c = o,
						l = i.length > he;
					return a.a.createElement(de.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, a.a.createElement(oe, {
						listingKey: n,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: be.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, a.a.createElement("div", null, e)))
				}
			}
			var ye = Object(d.b)(ge, (e, {
					subredditName: t
				}) => ({
					loadMorePosts: () => e(Object(S.r)({
						sort: l.P.TOP,
						subredditName: t,
						t: l.Vb.WEEK
					}))
				}))(Object(ae.c)(fe)),
				Ee = n("./src/config.ts"),
				_e = n("./src/lib/localStorageAvailable/index.ts"),
				Ce = n("./src/reddit/actions/modal.ts"),
				ve = n("./src/higherOrderComponents/asModal/index.tsx"),
				Oe = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ke = n("./src/reddit/controls/TextButton/index.tsx"),
				je = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: Se
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class we extends a.a.Component {
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(Oe.d, null, a.a.createElement(Oe.h, null, a.a.createElement(je.a, null, a.a.createElement(Oe.p, null, Se._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), a.a.createElement(ke.a, {
						onClick: e.toggleModal
					}, a.a.createElement(Oe.b, null)))), a.a.createElement(Oe.k, null, a.a.createElement(Oe.o, null, Se._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), a.a.createElement(Oe.f, null, a.a.createElement(Oe.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, Se._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(Oe.q, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, Se._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var Te = Object(ve.a)(we),
				Ie = n("./src/reddit/components/IdCard/Banner.tsx"),
				Pe = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Ne = n("./src/reddit/constants/blade.ts"),
				Be = n("./src/reddit/controls/InternalLink/index.tsx"),
				Le = n("./src/reddit/helpers/localStorage/index.ts"),
				Me = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				Fe = n("./src/reddit/icons/fonts/index.tsx"),
				Re = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				De = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Ae = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Ue = n("./src/reddit/selectors/activeModalId.ts"),
				He = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				We = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Ve = n("./src/reddit/selectors/structuredStyles.ts"),
				qe = n("./src/reddit/components/IdCard/index.m.less"),
				Je = n.n(qe),
				Ke = n("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				Ye = n.n(Ke);
			const Ge = "mod_onboarding_modal",
				ze = "mod_onboarding_widget",
				Qe = Object(c.a)(Ue.a, (e, t) => Object(We.a)(Ae.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(Ve.k)(e, {
					subredditId: t.subredditId
				}), He.a, (e, t, n, s) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					isInIcons2020: s,
					modHasEditedBanner: !n || !!(n.bannerBackgroundImage || n.bannerHeight || n.bannerPositionedImage || n.bannerBackgroundColor),
					modHasEditedColors: !n || !!(n.primaryColor || n.highlightColor || n.backgroundColor || n.backgroundImage),
					modHasEditedIcon: !n || (!!n.communityIcon || !!n.bannerShowCommunityIcon)
				}));
			class Xe extends a.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(Le.lb)(ze, !0, this.props.subredditId), this.props.sendEvent(Object(Me.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(Me.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(Me.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(Me.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(Me.d)("styling_generic_link"))
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
					} = this.props, i = e && !(t && n && s) && (!Object(_e.a)() || !Object(Le.u)(ze, r));
					i !== this.state.visible && (this.setState({
						visible: i
					}), i && this.props.sendEvent(Object(Me.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						isInIcons2020: t,
						modHasEditedBanner: n,
						modHasEditedColors: r,
						modHasEditedIcon: i,
						subredditName: o,
						toggleCloseMenuModal: d
					} = this.props;
					return this.state.visible ? a.a.createElement(de.a, {
						className: Object(w.a)(Ye.a.container, this.props.className)
					}, a.a.createElement(Ie.a, {
						bannerBackgroundImage: `${Ee.a.assetPath}/img/id-cards/mod-onboarding@2x.png`
					}), t ? a.a.createElement(Fe.a, {
						name: "close",
						className: Ye.a.closeIcon,
						onClick: d
					}) : a.a.createElement(De.a, {
						className: Ye.a.closeIcon,
						onClick: d
					}), Object(Pe.a)({
						titleText: s.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(f.b)(`url('${Ee.a.assetPath}/img/id-cards/snoo-artist@2x.png')`)
					}), a.a.createElement("div", {
						className: Object(w.a)(Je.a.Description, Ye.a.description)
					}, s.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [s.fbt._param("=Customize Appearance Overview", a.a.createElement("a", {
						href: Ne.e.exportImport,
						className: Ye.a.modHelpLink,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), a.a.createElement(Be.a, {
						to: `/r/${o}?styling=true&route=${Ne.c.NameAndIcon}`,
						className: Ye.a.link,
						onClick: this.customizeIcon
					}, i ? a.a.createElement(Re.a, {
						className: Ye.a.checked
					}) : a.a.createElement(Re.a, {
						className: Ye.a.unchecked
					}), s.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), a.a.createElement(Be.a, {
						to: `/r/${o}?styling=true&route=${Ne.c.Banner}`,
						className: Ye.a.link,
						onClick: this.customizeBannerImage
					}, n ? a.a.createElement(Re.a, {
						className: Ye.a.checked
					}) : a.a.createElement(Re.a, {
						className: Ye.a.unchecked
					}), s.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), a.a.createElement(Be.a, {
						to: `/r/${o}?styling=true&route=${Ne.c.Global}`,
						className: Ye.a.link,
						onClick: this.customizeThemeColors
					}, r ? a.a.createElement(Re.a, {
						className: Ye.a.checked
					}) : a.a.createElement(Re.a, {
						className: Ye.a.unchecked
					}), s.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), a.a.createElement(I.n, {
						to: `/r/${o}?styling=true`,
						className: Ye.a.button,
						onClick: this.customizeAppearance
					}, s.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), a.a.createElement("div", {
						className: Ye.a.subtext
					}, s.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === Ge && a.a.createElement(Te, {
						withOverlay: !0,
						toggleModal: d,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Ze = Object(d.b)(Qe, (e, {
					subredditId: t,
					subredditName: n
				}) => ({
					toggleCloseMenuModal: () => e(Object(Ce.i)(Ge))
				}))(Object(ae.c)(Xe)),
				$e = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				et = n("./src/reddit/constants/tracking.ts"),
				tt = n("./src/reddit/selectors/seo/linksModule.ts"),
				nt = n("./src/reddit/selectors/telemetry.ts"),
				st = n("./src/telemetry/models/Subreddit.ts");
			const rt = e => t => ({
					...nt.defaults(t),
					action: et.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				it = e => t => n => ({
					...nt.defaults(n),
					action: et.c.CLICK,
					noun: Object(st.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				ot = Object(c.c)({
					communities: tt.c
				});
			var at = Object(d.b)(ot)(e => {
					const t = Object(ae.b)();
					return e.communities && e.communities.length ? a.a.createElement(O.a, null, a.a.createElement($e.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: rt,
						getSubscribeEventFactoryHandler: it,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				dt = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				ct = n("./src/reddit/featureFlags/index.ts"),
				lt = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				ut = n("./src/reddit/models/Widgets/index.ts"),
				mt = n("./src/reddit/selectors/communityFlairs.ts"),
				pt = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				bt = n("./src/reddit/selectors/listings.ts"),
				ht = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				xt = n.n(ht);
			const gt = 250,
				ft = 270,
				yt = u.a.wrapped(v.a, "SidebarContainer", xt.a),
				Et = Object(c.c)({
					apiError: bt.c,
					apiPending: bt.d,
					communityFlairModels: (e, {
						subredditId: t
					}) => Object(mt.b)(e, t),
					communityFlairSortedKeys: (e, {
						subredditId: t
					}) => Object(mt.c)(e, t),
					isPredictionsLeaderboardsEnabled: pt.f,
					showGovernance: ct.d.spPoints,
					showLeaderboard: ct.d.spLeaderboard,
					showPredictionsLeaderboard: (e, {
						subredditId: t
					}) => Object(me.M)(e, {
						subredditId: t
					}) && !Object(me.N)(e, {
						subredditId: t
					}),
					widgets: me.s
				}),
				_t = Object(d.b)(Et);
			class Ct extends o.Component {
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
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: ut.d.Cloud,
							shortName: s.fbt._("Filter by flair", null, {
								hk: "1DI34"
							}),
							templates: this.props.communityFlairModels
						}
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
					return this.props.subredditName !== e.subredditName || !i()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						isPredictionsLeaderboardsEnabled: t,
						listingName: n,
						showGovernance: s,
						showLeaderboard: r,
						showPredictionsLeaderboard: i,
						subredditId: o,
						subredditName: d,
						topPostsVariant: c
					} = this.props;
					let u = 0;
					const g = Object(B.a)(c),
						f = Object(B.b)(c),
						v = Object(B.c)(c),
						j = g || f;
					let S, w;
					!!this.getPostFlairWidget() ? S = this.props.widgets : (S = this.getCommunityWidgets(), w = this.makeFlairFilterWidget());
					const T = this.makeRelatedCommunitiesWidget(g, f),
						I = !g,
						P = f,
						N = a.a.createElement(C.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: n,
							placementIndex: u++,
							position: lt.a.FIRST,
							sizes: l.h
						});
					return a.a.createElement(yt, {
						className: e
					}, y(n) && a.a.createElement(x.a, {
						listingName: n
					}), a.a.createElement(p.a, {
						cardClassName: xt.a.card,
						subredditId: o
					}), a.a.createElement(_.a, {
						subredditId: o
					}), t && i && a.a.createElement(m.a, {
						subredditId: o
					}), j && a.a.createElement(O.a, null, a.a.createElement(ye, {
						subredditName: d,
						topPostsVariant: c
					}, a.a.createElement("div", {
						className: xt.a.inFeedAd
					}, N))), j && T && a.a.createElement(O.a, null, a.a.createElement(dt.a, {
						subredditName: d,
						truncateThreshold: ft,
						widget: T
					})), P && S.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(O.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(dt.a, {
							subredditName: d,
							truncateThreshold: gt,
							widget: e
						}))
					}), a.a.createElement(Ze, {
						subredditId: o,
						subredditName: d
					}), s && a.a.createElement(b.a, {
						className: xt.a.card,
						subredditId: o
					}), w && a.a.createElement(O.a, null, a.a.createElement(dt.a, {
						subredditName: d,
						widget: w
					})), r && a.a.createElement(h.a, {
						className: xt.a.card,
						subredditId: o,
						uniqueId: o
					}), a.a.createElement(E.g, {
						subredditId: o
					}), !j && N, a.a.createElement(at, {
						subredditId: o
					}), I && !P && S.map((e, t) => {
						const n = "community-list" === e.kind;
						return a.a.createElement(O.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(dt.a, {
							subredditName: d,
							truncateThreshold: v && n ? ft : v ? gt : void 0,
							widget: e
						}))
					}), a.a.createElement(k.a, {
						adComponent: a.a.createElement(C.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: n,
							placementIndex: u++,
							position: lt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = _t(Ct)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(a);
			const c = i.a.div("WidgetBackground", d.a),
				l = i.a.wrapped(({
					children: e,
					...t
				}) => r.a.createElement("div", t, r.a.createElement(o.b, {
					type: o.a.Widget
				}, e)), "WidgetHeader", d.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return w
			})), n.d(t, "a", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				_ = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				C = n("./src/reddit/models/Flair/index.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				k = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				j = n.n(k);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => i.a.createElement(b.a, {
					className: Object(c.a)(j.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: j.a.container
				}, e.isLoading ? i.a.createElement(g.a, {
					className: j.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: j.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(I, S({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(x.o, {
					className: j.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				T = Object(d.c)({
					hideNSFWPref: v.B,
					nightmode: v.V
				}),
				I = Object(o.b)(T)(e => {
					const t = Object(f.a)();
					return i.a.createElement("div", {
						className: j.a.communityItemContainer
					}, i.a.createElement(_.a, {
						widthRight: h.t
					}, i.a.createElement("div", {
						className: j.a.iconContainer
					}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
						className: j.a.subredditIcon,
						src: e.iconUrl || e.communityIcon
					}) : t ? i.a.createElement(y.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(c.a)(j.a.defaultCommunityIcon, {
							[j.a.mNightmode]: e.nightmode
						})
					}) : i.a.createElement(E.a, {
						className: j.a.planetIcon,
						"data-redditstyle": !0
					})), i.a.createElement("div", {
						className: j.a.communityDescriptionContainer
					}, i.a.createElement(a.a, {
						className: j.a.communityName,
						onClick: e.onCommunityNameClick,
						title: Object(O.b)(e.name, e.type),
						to: Object(O.a)(e.name, e.type)
					}, Object(O.b)(e.name, e.type)), i.a.createElement("div", {
						className: j.a.communityInfoContainer
					}, !!e.subscribers && i.a.createElement("p", {
						className: j.a.subscriberCount
					}, s.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [s.fbt._plural(e.subscribers, "number")], {
						hk: "6i1wh"
					})), e.isNSFW && i.a.createElement(l.b, {
						flair: {
							type: C.f.Nsfw,
							text: "nsfw"
						}
					}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(g.a, {
						className: Object(c.a)(j.a.communityCta, j.a.smallLoadingIcon),
						sizePx: 12
					}) : i.a.createElement(x.o, {
						className: Object(c.a)(j.a.communityCta, {
							[j.a.showOnHover]: e.showTertiaryButtonOnHover
						}),
						disabled: e.buttonDisabled,
						onClick: () => e.onTertiaryButtonClick(e)
					}, e.tertiaryButtonText) : e.widget ? i.a.createElement(p, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						sendEvent: e.sendEvent,
						small: !0,
						userIsSubscriber: !!e.isSubscribed,
						widget: e.widget
					}) : i.a.createElement(u.a, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						small: !0
					})), !!e.description && i.a.createElement("p", {
						title: e.description,
						className: j.a.communityDescription
					}, e.description))
				})
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === s.a.PROFILE ? Object(r.d)(e) : Object(r.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
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
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/post.ts"),
				o = n("./src/reddit/actions/postFlair.ts"),
				a = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
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
				flairStyleTemplate: c.S,
				hideNSFWPref: b.B,
				isActive: p.j,
				moderatorPermissions: u.j,
				modModeEnabled: c.Q,
				showEditFlair: m.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: n,
					selectedTemplateId: s
				}) => e(Object(o.h)({
					post: t,
					previewFlair: n,
					selectedTemplateId: s
				})),
				handleVote: n => {
					const s = n === d.a.upvoted ? Object(i.U)(t) : Object(i.r)(t);
					e(s)
				},
				onIgnoreReports: () => e(Object(i.S)(t)),
				onOpenReportsDropdown: t => e(Object(a.h)({
					tooltipId: t
				}))
			}), (e, t, n) => ({
				...n,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: s
				}) => t.dispatchFlairChanged({
					post: n.post,
					previewFlair: e,
					selectedTemplateId: s
				})
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(s)(e => {
					const {
						featureEnabled: s,
						...i
					} = e, o = i;
					return s ? r.a.createElement(t, o) : void 0 !== n ? r.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				i = "|downsized";

			function o(e, t) {
				return r + e + (t ? i : "")
			}

			function a(e) {
				return e && 0 === e.indexOf(r)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(a)
			}

			function c(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...l(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, s.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === s.o).map(e => e.u)
			}
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
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
				i = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				}),
				o = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				a = e => e => ({
					source: "mod_edu",
					action: "view",
					noun: "widget"
				})
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "b", (function() {
				return x
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => ({
					...r.defaults(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e),
					powerups: {
						...r.subredditPowerups(e),
						freeCount: t,
						paidCount: n
					}
				}),
				o = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...i(t),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				a = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				d = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				l = (e, t) => n => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...i(n, e, t)
				}),
				u = (e, t) => n => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...i(n, e, t)
				}),
				m = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				p = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				b = e => t => ({
					source: "powerups",
					action: "click",
					noun: "add_custom_emojis",
					...i(t),
					powerups: {
						...r.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				h = e => t => ({
					source: "powerups",
					action: "save",
					noun: "custom_emojis",
					...i(t),
					powerups: {
						...r.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				x = (e = 1) => t => ({
					source: "powerups",
					action: "delete",
					noun: "custom_emojis",
					...i(t),
					powerups: {
						...r.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return O
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/isComment.ts"),
				d = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const p = e => ({
					...u.defaults(e),
					source: r.LINK,
					action: i.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				b = e => ({
					...u.defaults(e),
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: c.f.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, {
					renderingObjectInfo: t,
					pageLayer: n
				}) => {
					if (t && (Object(a.b)(t) || Object(d.b)(t))) return Object(a.b)(t) ? m.SourceElement.Comment : Object(o.w)(n) ? m.SourceElement.PostDetail : Object(o.E)(n) ? m.SourceElement.ListingPostDetail : void 0
				},
				x = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(d.b)(n) && !Object(a.b)(n)) return {
						outbound: void 0
					};
					const r = Object(d.b)(n) ? "postId" : "commentId",
						i = {
							url: `/r/${s}/`,
							sourceElement: h(0, t),
							subredditName: s,
							[r]: n.id
						},
						o = Object(l.A)(e, {
							subredditName: s
						});
					return o ? {
						outbound: {
							...i,
							url: o.url,
							subredditId: o.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				g = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(d.b)(n) && !Object(a.b)(n)) return {};
					const s = Object(d.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.post(e, n.id),
						subreddit: u.subredditById(e, s),
						...x(e, t)
					}
				},
				f = e => t => ({
					...p(t),
					...g(t, e)
				}),
				y = e => t => ({
					...b(t),
					source: "global",
					action: i.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				E = (e, t) => n => ({
					...b(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				_ = (e, t) => n => ({
					...b(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				C = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				v = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				O = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
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
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Envelope/index.m.less"),
				d = n.n(a);
			t.a = e => {
				const t = Object(i.a)();
				return r.a.createElement("i", {
					className: `${Object(o.b)(t?"message":"envelope",e.isFilled)} ${d.a.Envelope} ${e.className}`
				})
			}
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
		"./src/reddit/icons/svgs/Upload/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 17",
				version: "1.1"
			}, r.a.createElement("path", {
				d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
				id: "a"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = n.n(a);
			t.a = Object(i.a)(e => r.a.createElement("div", {
				className: Object(o.a)(d.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = e => s.mb.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: i.J,
				experimentName: s.lb
			})
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.Yc
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.fd.SmIcon || t === s.fd.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const n = Object(o.X)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit~SubredditWiki.ecbb3af66ee333f01fea.js.map