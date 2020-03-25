// https://www.redditstatic.com/desktop2x/Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki.1c824998fb5ef3d86b5c.js
// Retrieved at 3/25/2020, 3:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki"], {
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = n("./node_modules/linkify-it/index.js"),
				a = n.n(r),
				s = n("./node_modules/tlds/index.js"),
				o = n.n(s),
				c = n("./src/lib/linkMatchers/customLinks.ts"),
				l = n("./node_modules/lodash/values.js"),
				i = n.n(l);
			const u = e => i()(c.b).includes(e.substring(1)),
				d = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, d);
			n.d(t, "e", (function() {
				return b
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "h", (function() {
				return k
			}));
			const b = a()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				p = a()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(c.g.mention.prefix, c.g.mention.config),
				h = m(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config),
				g = m(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config),
				f = a()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config).add(c.g.mention.prefix, c.g.mention.config),
				E = b.normalize;
			b.normalize = e => {
				E.call(b, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const y = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = u(e.text);
						return !n || n && t
					})
				},
				_ = e => {
					return [...g.match(e) || [], ...p.match(e) || []].map(e => !u(e.text) && e.text.replace(c.a, "")).filter(e => e)
				},
				x = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				k = e => {
					const t = b.match(e);
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
			var r = n("./src/config.ts"),
				a = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const s = Object(a.e)(e),
					o = encodeURIComponent("".concat(t).concat(s));
				return "".concat(r.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(o)
			}
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
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
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
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
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
			var r = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/app/strings/index.ts"),
				u = n("./src/lib/loginHref/index.ts"),
				d = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/Footer/index.m.less"),
				g = n.n(h);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = p.a.div("FooterContainer", g.a), y = p.a.div("UserAgreement", g.a), _ = p.a.a("UserAgreementLink", g.a), x = p.a.a("PrivacyLink", g.a);
			var k = () => s.a.createElement(E, null, s.a.createElement(y, null, f._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [f._param("=User Agreement", s.a.createElement(_, {
					href: "".concat(r.a.redditUrl, "/help/useragreement")
				}, f._("User Agreement", null, {
					hk: "2srkM2"
				}))), f._param("=Privacy Policy", s.a.createElement(x, {
					href: "".concat(r.a.redditUrl, "/help/privacypolicy")
				}, f._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), f._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				v = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				S = n("./src/reddit/components/RichTextJson/index.tsx"),
				j = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				L = n.n(j),
				B = n("./src/lib/linkMatchers/index.ts"),
				O = n("./src/lib/linkMatchers/customLinks.ts"),
				w = n("./src/reddit/controls/OutboundLink/index.tsx");
			const T = /\[(.+?)\]\((.+?)\)/g,
				N = e => {
					const t = e.split(T);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, a, s] = t.slice(r, r + 3);
						n.push(e), n.push([s, a])
					}
					return n
				};
			var P = s.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = L()(t, N)), e.parseRegularLinks && (t = L()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = B.e.add(O.g.subreddit.prefix, O.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const a of t) n.push(e.slice(r ? r.lastIndex : 0, a.index)), r = a, n.push([a.url, a.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), s.a.createElement(s.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, a] = t;
							return s.a.createElement(w.a, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, a)
						}
						return s.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				C = n("./src/reddit/contexts/PageLayer/index.tsx"),
				D = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/reddit/i18n/components.tsx"),
				I = n("./src/reddit/models/ContentGate.ts"),
				U = n("./src/reddit/selectors/meta.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				z = n("./src/reddit/components/ContentGate/index.m.less"),
				F = n.n(z);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = p.a.div("ButtonsContainer", F.a), G = p.a.div("Container", F.a), J = p.a.div("Description", F.a), Y = p.a.div("PrivateSubredditDetails", F.a), q = p.a.div("PrivateSubredditDescription", F.a), W = p.a.h3("PrivateSubredditName", F.a), Z = p.a.a("Link", F.a), K = p.a.wrapped(D.h, "LinkRouterButton", F.a), V = p.a.wrapped(D.g, "LinkButton", F.a), X = p.a.wrapped(D.k, "SecondaryLinkRouterButton", F.a), Q = p.a.wrapped(D.j, "SecondaryLinkButton", F.a), $ = p.a.wrapped(K, "GoHomeLinkButton", F.a), ee = p.a.img("Image", F.a), te = p.a.img("ImagePlaceholder", F.a), ne = p.a.wrapped(K, "LeftLinkRouterButton", F.a), re = p.a.wrapped(V, "LeftLinkButton", F.a), ae = p.a.wrapped(Q, "SecondaryLeftLinkButton", F.a), se = p.a.wrapped(X, "SecondaryLeftLinkRouterButton", F.a), oe = p.a.h3("Title", F.a), ce = p.a.div("PageBody", F.a), le = p.a.div("QuarantineMessageWrapper", F.a), ie = Object(l.c)({
				isLoggedIn: M.F,
				language: M.O,
				origin: U.h,
				user: M.i
			}), ue = Object(C.t)(), de = Object(o.b)(ie, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(m.A(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(d.l)())
					}
				}
			}), me = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: a,
					isLoggedIn: o,
					language: c,
					location: l,
					origin: m,
					pageLayer: p,
					quarantineRequiresEmail: h,
					quarantineMessage: g,
					quarantineMessageHtml: f,
					quarantineMessageRTJson: E,
					setNSFWPreference: y,
					subredditDescription: _,
					subredditName: x,
					user: k
				} = e, j = () => {
					o ? y() : Object(d.k)(), window.location.reload()
				};
				switch (n) {
					case I.a.GoldSubreddit:
						return s.a.createElement("div", null, s.a.createElement(ee, {
							src: "".concat(r.a.assetPath, "/img/gold/premium-crest.png")
						}), s.a.createElement(oe, null, Object(i.a)(c, "contentGate.goldSubreddit.titlePremium", {
							subredditName: x
						})), s.a.createElement(J, null, s.a.createElement(R.c, null, "The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.")), s.a.createElement(A, null, k ? s.a.createElement(ae, {
							href: "".concat(r.a.redditUrl, "/premium")
						}, s.a.createElement(R.c, null, "Get Premium")) : s.a.createElement(re, {
							href: Object(u.a)(l, m)
						}, s.a.createElement(R.c, null, "Sign Up")), k ? s.a.createElement(K, {
							to: "/"
						}, s.a.createElement(R.c, null, "Go Home")) : s.a.createElement(Q, {
							href: Object(u.a)(l, m)
						}, s.a.createElement(R.c, null, "Log In"))));
					case I.a.Nsfw:
					case I.a.NsfwCustomFeed:
						return s.a.createElement("div", null, s.a.createElement(ee, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), s.a.createElement(oe, null, n === I.a.Nsfw ? Object(i.a)(c, "contentGate.over18.title") : s.a.createElement(R.c, null, "You must be 18+ to view this Custom Feed")), s.a.createElement(J, null, s.a.createElement(R.c, null, "You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?")), s.a.createElement(A, null, s.a.createElement(ne, {
							to: "/"
						}, s.a.createElement(R.c, null, "No")), s.a.createElement(Q, {
							onClick: j
						}, s.a.createElement(R.c, null, "Yes"))));
					case I.a.PrivateSubreddit:
						return s.a.createElement("div", null, s.a.createElement(ee, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/private.png")
						}), s.a.createElement(oe, null, Object(i.a)(c, "contentGate.privateSubreddit.title", {
							subredditName: x
						})), _ && _.length && s.a.createElement(Y, null, s.a.createElement(W, null, "r/", x), s.a.createElement(q, null, s.a.createElement("div", null, _))), s.a.createElement(J, null, s.a.createElement(R.c, null, "The moderators in this community have set it to private. You must be a moderator or approved user to visit.")), s.a.createElement(A, null, k ? s.a.createElement(ae, {
							href: "".concat(r.a.redditUrl, "/message/compose?to=/r/").concat(x)
						}, s.a.createElement(R.c, null, "Message Mods")) : s.a.createElement(ae, {
							href: Object(u.a)(l, m)
						}, s.a.createElement(R.c, null, "Sign Up")), s.a.createElement(K, {
							to: "/"
						}, k ? Object(i.a)(c, "contentGate.privateSubreddit.goHome") : Object(i.a)(c, "contentGate.privateSubreddit.exploreReddit"))));
					case I.a.QuarantinedSubreddit:
						return s.a.createElement("div", null, s.a.createElement(ee, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), s.a.createElement(oe, null, s.a.createElement(R.c, null, "Are you sure you want to view this community?")), s.a.createElement(J, null, s.a.createElement(R.c, null, "This community is"), " ", s.a.createElement(Z, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, s.a.createElement(R.c, null, "quarantined")), s.a.createElement(le, null, E ? s.a.createElement(S.a, {
							content: E,
							rtJsonElementProps: {
								pageLayer: p
							}
						}) : f ? s.a.createElement(v.a, {
							html: f
						}) : g || H._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), s.a.createElement(R.c, null, "Are you certain you want to continue?")), s.a.createElement(A, null, ((e, t, n, a) => {
							return !(e && e.hasVerifiedEmail) && a ? s.a.createElement(A, null, s.a.createElement(se, {
								to: "/"
							}, s.a.createElement(R.c, null, "No Thank You")), s.a.createElement(V, {
								href: "".concat(r.a.redditUrl, "/prefs/update")
							}, s.a.createElement(R.c, null, "Verify Email"))) : s.a.createElement(A, null, s.a.createElement(ne, {
								to: "/"
							}, s.a.createElement(R.c, null, "No Thank You")), s.a.createElement(Q, {
								onClick: n
							}, s.a.createElement(R.c, null, "Continue")))
						})(k, 0, a, h)));
					case I.a.SubredditBanned:
						return s.a.createElement("div", null, s.a.createElement(ee, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/banned.png")
						}), s.a.createElement(oe, null, Object(i.a)(c, "contentGate.subredditBanned.title", {
							subredditName: x
						})), (e => s.a.createElement(J, null, e ? s.a.createElement(P, {
							linkClassName: F.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : s.a.createElement(R.c, null, "This community has been banned for violating the Reddit rules.")))(t), s.a.createElement(A, null, s.a.createElement(K, {
							to: "/"
						}, s.a.createElement(R.c, null, "Explore Reddit"))));
					case I.a.SubredditBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement(ee, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(oe, null, H._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), s.a.createElement(A, null, s.a.createElement(K, {
							to: "/"
						}, H._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case I.a.SubredditDoesNotExist:
						return s.a.createElement("div", null, s.a.createElement(te, null), s.a.createElement(oe, null, H._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), s.a.createElement(J, null, H._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), s.a.createElement(A, null, k && s.a.createElement(b.a, {
							eventSource: "content_gate"
						}), s.a.createElement($, {
							to: "/"
						}, s.a.createElement(R.c, null, "Go Home"))));
					case I.a.ProfileDoesNotExist:
					case I.a.ProfileDeleted:
					case I.a.ProfileSuspended:
					case I.a.ProfileBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement(ee, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(oe, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case I.a.ProfileBlockedForLegalReason:
									return H._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case I.a.ProfileDeleted:
									return s.a.createElement(R.c, null, "This user has deleted their account.");
								case I.a.ProfileSuspended:
									return s.a.createElement(s.a.Fragment, null, s.a.createElement(R.c, null, "This account has been"), " ", s.a.createElement(Z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, s.a.createElement(R.c, null, "suspended")), ".");
								case I.a.ProfileDoesNotExist:
									return s.a.createElement(s.a.Fragment, null, s.a.createElement(oe, null, H._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), s.a.createElement(J, null, H._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), s.a.createElement(A, null, s.a.createElement($, {
							to: "/"
						}, s.a.createElement(R.c, null, "Go Home"))));
					case I.a.CustomFeedDoesNotExist:
						return s.a.createElement("div", null, s.a.createElement(ee, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(oe, null, s.a.createElement(R.c, null, "Sorry, this custom feed is private or does not exist.")), s.a.createElement(A, null, s.a.createElement($, {
							to: "/"
						}, s.a.createElement(R.c, null, "Go Home"))));
					case I.a.PostBlockedForLegalReason:
						return s.a.createElement("div", null, s.a.createElement(ee, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), s.a.createElement(oe, null, H._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), s.a.createElement(A, null, s.a.createElement(K, {
							to: "/"
						}, H._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.a = ue(de(Object(c.i)(e => s.a.createElement(G, null, s.a.createElement("div", null, s.a.createElement(ce, null, me(e))), s.a.createElement(k, null)))))
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/helpers/overlay/index.ts"),
				m = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/i18n/components.tsx"),
				p = n("./src/reddit/i18n/utils.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(g),
				E = n("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				_ = E.a.wrapped(u.i, "SecondaryButton", f.a),
				x = E.a.wrapped(l.c, "StyledTooltip", f.a),
				k = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.Y)(e),
					userIsSuspended: h.K
				});
			t.a = Object(s.b)(k, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(m.b)(n)), e(Object(d.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: y
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(i.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: r,
					onHideTooltip: s,
					openCommunityCreation: o,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: l,
					userIsSuspended: i
				} = e;
				return a.a.createElement(_, {
					className: t,
					disabled: i || l,
					onClick: () => o(c),
					onMouseEnter: r,
					onMouseLeave: s,
					id: y
				}, a.a.createElement(b.c, null, "Create Community"), l ? a.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: y,
					text: Object(p.c)("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.")
				}) : i ? a.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: y,
					text: Object(p.c)("Accounts banned from the site can not create communities until the ban is lifted.")
				}) : null)
			}))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79"
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
			var r = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/actions/page.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(d);
			const b = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(i.G)(t))
				})),
				p = l.a.wrapped(e => s.a.createElement("div", {
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
						"--RawHTMLDisplay-tr-even": Object(r.j)(Object(u.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(r.j)(Object(u.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = b(Object(c.a)(p))
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
				return L
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/constants/elementClassNames.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				i = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				m = n.n(d),
				b = n("./src/lib/classNames/index.ts"),
				p = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
				}
				return n
			};
			const f = p.a.button("IconButton", m.a),
				E = p.a.wrapped(i.a, "SubscribeIcon", m.a),
				y = p.a.wrapped(l.a, "UnsubscribeIcon", m.a),
				_ = p.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, r = g(e, ["border", "small"]);
					return s.a.createElement(f, r, s.a.createElement(E, {
						className: Object(b.a)(r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", m.a),
				x = p.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, r = g(e, ["border", "small"]);
					return t ? s.a.createElement(c.f, h({}, r, {
						className: Object(b.a)(r.className, {
							[m.a.isSmall]: n
						})
					})) : s.a.createElement(c.n, h({}, r, {
						className: Object(b.a)(r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", m.a),
				k = e => {
					var {
						icon: t
					} = e, n = g(e, ["icon"]);
					return t ? s.a.createElement(_, h({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : s.a.createElement(x, h({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				},
				v = p.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: r,
						type: a
					} = e, c = g(e, ["border", "language", "small", "type"]);
					return s.a.createElement(f, c, s.a.createElement(y, {
						className: Object(b.a)(o.n, c.className, {
							[m.a.isSmall]: r
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				S = p.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: a,
						type: o
					} = e, l = g(e, ["border", "language", "small", "type"]);
					const i = s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === o ? r.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : r.fbt._("Following", null, {
							hk: "1wQlVR"
						})), s.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === o ? r.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : r.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						u = Object(b.a)(l.className, {
							[m.a.isSmall]: a
						});
					return t ? s.a.createElement(c.i, h({}, l, {
						className: u,
						children: i
					})) : s.a.createElement(c.n, h({}, l, {
						className: u,
						children: i
					}))
				}, "UnsubscribeButton", m.a),
				j = e => {
					var {
						icon: t
					} = e, n = g(e, ["icon"]);
					return t ? s.a.createElement(v, h({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : s.a.createElement(S, h({}, n, {
						className: Object(b.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				};
			class L extends s.a.Component {
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
						id: r,
						language: a,
						small: o = !1
					} = this.props, c = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: o
					};
					return this.props.userIsSubscriber ? s.a.createElement(j, h({}, c, {
						language: a,
						type: this.props.identifier.type
					})) : s.a.createElement(k, h({}, c, {
						id: r
					}), this.props.children, Object(u.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const a = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				s = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = e => {
					let {
						type: t,
						key: n
					} = e;
					return s[a({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				s = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(a.a)(Object(r.c)(s.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = Object(r.b)(() => Object(a.c)({
				language: c.O,
				userIsSubscriber: o.Z
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(s.d([n], !0)),
					onSubscriptionsRequested: () => e(s.e()),
					onUnsubscribe: () => e(s.d([n], !1))
				}
			})
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				c = n.n(o);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(s.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", c.a);
			t.a = l
		}
	}
]);
//# sourceMappingURL=Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki.1c824998fb5ef3d86b5c.js.map