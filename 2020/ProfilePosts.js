// https://www.redditstatic.com/desktop2x/ProfilePosts.05c1a9da66eda55efe04.js
// Retrieved at 5/20/2020, 8:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePosts", "reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				a = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return r(a(e, t), 1)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = n("./node_modules/linkify-it/index.js"),
				a = n.n(r),
				o = n("./node_modules/tlds/index.js"),
				s = n.n(o),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				l = n("./node_modules/lodash/values.js"),
				c = n.n(l);
			const d = e => c()(i.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = a()().tlds(s.a).set({
					fuzzyIP: !0
				}),
				h = a()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				f = m(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				g = m(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				b = a()().tlds(s.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				E = p.normalize;
			p.normalize = e => {
				E.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const _ = (e, t) => {
					return (b.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				x = e => {
					return [...g.match(e) || [], ...h.match(e) || []].map(e => !d(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				y = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				k = e => {
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
			var r = n("./src/config.ts"),
				a = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const o = Object(a.e)(e),
					s = encodeURIComponent("".concat(t).concat(o));
				return "".concat(r.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(s)
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
			var r = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/loginHref/index.ts"),
				d = n("./src/reddit/actions/contentGate.ts"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/Footer/index.m.less"),
				f = n.n(h);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = p.a.div("FooterContainer", f.a), E = p.a.div("UserAgreement", f.a), _ = p.a.a("UserAgreementLink", f.a), x = p.a.a("PrivacyLink", f.a);
			var y = () => o.a.createElement(b, null, o.a.createElement(E, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", o.a.createElement(_, {
					href: "".concat(r.a.redditUrl, "/help/useragreement")
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", o.a.createElement(x, {
					href: "".concat(r.a.redditUrl, "/help/privacypolicy")
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				k = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = n("./src/reddit/components/RichTextJson/index.tsx"),
				P = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				L = n.n(P),
				j = n("./src/lib/linkMatchers/index.ts"),
				N = n("./src/lib/linkMatchers/customLinks.ts"),
				S = n("./src/reddit/controls/OutboundLink/index.tsx");
			const w = /\[(.+?)\]\((.+?)\)/g,
				C = e => {
					const t = e.split(w);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, a, o] = t.slice(r, r + 3);
						n.push(e), n.push([o, a])
					}
					return n
				};
			var B = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = L()(t, C)), e.parseRegularLinks && (t = L()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = j.e.add(N.g.subreddit.prefix, N.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const a of t) n.push(e.slice(r ? r.lastIndex : 0, a.index)), r = a, n.push([a.url, a.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, a] = t;
							return o.a.createElement(S.a, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, a)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				O = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/reddit/models/ContentGate.ts"),
				I = n("./src/reddit/selectors/meta.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/components/ContentGate/index.m.less"),
				M = n.n(G);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = p.a.div("ButtonsContainer", M.a), z = p.a.div("Container", M.a), H = p.a.div("Description", M.a), A = p.a.div("PrivateSubredditDetails", M.a), q = p.a.div("PrivateSubredditDescription", M.a), W = p.a.h3("PrivateSubredditName", M.a), K = p.a.a("Link", M.a), Y = p.a.wrapped(T.h, "LinkRouterButton", M.a), V = p.a.wrapped(T.g, "LinkButton", M.a), Z = p.a.wrapped(T.k, "SecondaryLinkRouterButton", M.a), J = p.a.wrapped(T.j, "SecondaryLinkButton", M.a), X = p.a.wrapped(Y, "GoHomeLinkButton", M.a), Q = p.a.img("Image", M.a), $ = p.a.img("ImagePlaceholder", M.a), ee = p.a.wrapped(Y, "LeftLinkRouterButton", M.a), te = p.a.wrapped(V, "LeftLinkButton", M.a), ne = p.a.wrapped(J, "SecondaryLeftLinkButton", M.a), re = p.a.wrapped(Z, "SecondaryLeftLinkRouterButton", M.a), ae = p.a.h3("Title", M.a), oe = p.a.div("PageBody", M.a), se = p.a.div("QuarantineMessageWrapper", M.a), ie = Object(l.c)({
				isLoggedIn: D.G,
				language: D.Q,
				origin: I.k,
				user: D.i
			}), le = Object(O.t)(), ce = Object(s.b)(ie, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(u.C(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(d.l)())
					}
				}
			}), de = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: a,
					isLoggedIn: s,
					language: i,
					location: l,
					origin: u,
					pageLayer: p,
					quarantineRequiresEmail: h,
					quarantineMessage: f,
					quarantineMessageHtml: g,
					quarantineMessageRTJson: b,
					setNSFWPreference: E,
					subredditDescription: _,
					subredditName: x,
					user: y
				} = e, P = () => {
					s ? E() : Object(d.k)(), window.location.reload()
				};
				switch (n) {
					case R.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/gold/premium-crest.png")
						}), o.a.createElement(ae, null, F._("r/{community name} is a Reddit Premium community", [F._param("community name", x)], {
							hk: "2lyDwB"
						})), o.a.createElement(H, null, F._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(U, null, y ? o.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/premium")
						}, F._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(te, {
							href: Object(c.a)(l, u)
						}, F._("Sign Up", null, {
							hk: "rvpjy"
						})), y ? o.a.createElement(Y, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(J, {
							href: Object(c.a)(l, u)
						}, F._("Log in", null, {
							hk: "odEG4"
						}))));
					case R.a.Nsfw:
					case R.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), o.a.createElement(ae, null, n === R.a.Nsfw ? F._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : F._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(H, null, F._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(U, null, o.a.createElement(ee, {
							to: "/"
						}, F._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(J, {
							onClick: P
						}, F._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case R.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/private.png")
						}), o.a.createElement(ae, null, F._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), _ && _.length && o.a.createElement(A, null, o.a.createElement(W, null, "r/", x), o.a.createElement(q, null, o.a.createElement("div", null, _))), o.a.createElement(H, null, F._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), o.a.createElement(U, null, y ? o.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/message/compose?to=/r/").concat(x)
						}, F._("Message Mods", null, {
							hk: "vVe1i"
						})) : o.a.createElement(ne, {
							href: Object(c.a)(l, u)
						}, F._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(Y, {
							to: "/"
						}, y ? F._("Go Home", null, {
							hk: "49p4or"
						}) : F._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case R.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), o.a.createElement(ae, null, F._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(H, null, F._("This community is {=quarantined}", [F._param("=quarantined", o.a.createElement(K, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, F._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(se, null, b ? o.a.createElement(v.a, {
							content: b,
							rtJsonElementProps: {
								pageLayer: p
							}
						}) : g ? o.a.createElement(k.a, {
							html: g
						}) : f || F._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), F._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(U, null, ((e, t, n, a) => {
							return !(e && e.hasVerifiedEmail) && a ? o.a.createElement(U, null, o.a.createElement(re, {
								to: "/"
							}, F._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(V, {
								href: "".concat(r.a.redditUrl, "/prefs/update")
							}, F._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(U, null, o.a.createElement(ee, {
								to: "/"
							}, F._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(J, {
								onClick: n
							}, F._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(y, 0, a, h)));
					case R.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/banned.png")
						}), o.a.createElement(ae, null, F._("r/{community name} has been banned from Reddit", [F._param("community name", x)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(H, null, e ? o.a.createElement(B, {
							linkClassName: M.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : F._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(U, null, o.a.createElement(Y, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(ae, null, F._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(U, null, o.a.createElement(Y, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement($, null), o.a.createElement(ae, null, F._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(H, null, F._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(U, null, y && o.a.createElement(m.a, {
							eventSource: "content_gate"
						}), o.a.createElement(X, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.ProfileDoesNotExist:
					case R.a.ProfileDeleted:
					case R.a.ProfileSuspended:
					case R.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(ae, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case R.a.ProfileBlockedForLegalReason:
									return F._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case R.a.ProfileDeleted:
									return F._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case R.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, F._("This account has been {=suspended} .", [F._param("=suspended", o.a.createElement(K, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, F._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case R.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ae, null, F._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(H, null, F._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(U, null, o.a.createElement(X, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(ae, null, F._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(U, null, o.a.createElement(X, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(ae, null, F._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(U, null, o.a.createElement(Y, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = le(ce(Object(i.i)(e => o.a.createElement(z, null, o.a.createElement("div", null, o.a.createElement(oe, null, de(e))), o.a.createElement(y, null)))))
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(f),
				b = n("./src/lib/lessComponent.tsx");
			const E = "create-community-button",
				_ = b.a.wrapped(u.i, "SecondaryButton", g.a),
				x = b.a.wrapped(c.c, "StyledTooltip", g.a),
				y = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.ab)(e),
					userIsSuspended: h.M
				});
			t.a = Object(s.b)(y, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.b)(n)), e(Object(m.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: E
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(d.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: a,
					onHideTooltip: s,
					openCommunityCreation: i,
					sendEvent: l,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: d
				} = e;
				return o.a.createElement(_, {
					className: t,
					disabled: d || c,
					onClick: () => i(l),
					onMouseEnter: a,
					onMouseLeave: s,
					id: E
				}, r.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), c ? o.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: E,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: E,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "a", (function() {
				return v
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/PostList/Placeholder.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = n.n(d);
			const m = i.a.div("PrimaryText", u.a),
				p = i.a.wrapped(l.a, "BackgroundPlaceholder", u.a),
				h = i.a.div("Wrapper", u.a);
			var f = e => {
				let {
					children: t,
					className: n
				} = e;
				return o.a.createElement(h, {
					className: n
				}, o.a.createElement(p, {
					isLoading: !1,
					layout: c.g.Classic
				}), o.a.createElement(m, null, t))
			};
			var g = e => {
				let {
					className: t,
					profileName: n,
					timeSort: a = s.Pb.ALL
				} = e;
				return o.a.createElement(f, {
					className: t
				}, a === s.Pb.ALL ? r.fbt._("hmm... {profileName} hasn't commented on anything", [r.fbt._param("profileName", "u/".concat(n))], {
					hk: "1MHn3t"
				}) : r.fbt._("hmm... {profileName} hasn't commented recently", [r.fbt._param("profileName", "u/".concat(n))], {
					hk: "qN3uL"
				}))
			};
			var b = e => {
					let {
						className: t,
						profileName: n,
						timeSort: a = s.Pb.ALL
					} = e;
					return o.a.createElement(f, {
						className: t
					}, a === s.Pb.ALL ? r.fbt._("hmm... {profileName} hasn't posted anything", [r.fbt._param("profileName", "u/".concat(n))], {
						hk: "28vBEd"
					}) : r.fbt._("hmm... {profileName} hasn't posted recently", [r.fbt._param("profileName", "u/".concat(n))], {
						hk: "38GhqN"
					}))
				},
				E = n("./src/reddit/components/Translated/index.tsx");
			var _ = e => {
					let {
						className: t,
						verb: n
					} = e;
					return o.a.createElement(f, {
						className: t
					}, o.a.createElement(E.a, {
						msgId: "listings.privateEmpty",
						replacements: {
							verb: n
						}
					}))
				},
				x = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				y = n("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				k = n.n(y),
				v = () => o.a.createElement("div", {
					className: k.a.container
				}, o.a.createElement(x.a, {
					className: k.a.hideIcon
				}), o.a.createElement("h3", {
					className: k.a.title
				}, o.a.createElement(E.a, {
					msgId: "profile.forbidden.title"
				})), o.a.createElement("p", {
					className: k.a.subtitle
				}, o.a.createElement(E.a, {
					msgId: "profile.forbidden.savedSubtitle"
				})))
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
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				l = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
				}
				return n
			};
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: r,
					widthLeft: o,
					gutter: i
				} = e, u = d(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return a.a.createElement("div", c({
					className: Object(s.a)(l.a.expandRightContainer, t)
				}, u), a.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: o,
						height: r,
						marginRight: i
					}
				}, Array.isArray(n) && n[0]), a.a.createElement("div", {
					className: l.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(s.h, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				d = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(s.h, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfilePosts/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/es6.regexp.search.js");
			var r = n("./node_modules/lodash/fromPairs.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/pages/profilePosts.ts"),
				p = n("./src/reddit/actions/pages/profileShared.ts"),
				h = n("./src/reddit/components/ContentGate/index.tsx"),
				f = n("./src/reddit/components/EmptyProfile/index.ts"),
				g = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				b = n("./src/reddit/components/JumpToContent/index.tsx"),
				E = n("./src/reddit/components/ListingPostList/index.tsx"),
				_ = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				x = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				k = n("./src/reddit/helpers/trackers/screenview.ts"),
				v = n("./src/reddit/layout/page/Listing/index.tsx"),
				P = n("./src/reddit/models/ContentGate.ts"),
				L = n("./src/reddit/pages/ErrorPages/index.tsx"),
				j = n("./src/reddit/selectors/profile.ts"),
				N = n("./src/reddit/selectors/user.ts");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(y.t)(),
				C = Object(l.a)(y.B, N.V, (e, t) => {
					let {
						location: n
					} = t;
					return a()([...Object(d.a)(n.search)])
				}, y.N, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.profileName
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(j.j)(e, {
						profileName: n.params.profileName
					})
				}, N.H, (e, t) => {
					let {
						match: n
					} = t;
					return Object(N.e)(e, c.Rb + n.params.profileName)
				}, (e, t, n, r, a, o, s, i) => {
					const {
						sort: l,
						t: c
					} = Object(p.b)(n), d = Object(u.a)("u_".concat(a), l, n);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: s,
						isOwnProfile: e,
						isProfileNSFW: !!o && o.isNSFW,
						layout: r,
						listingKey: d,
						profileName: a,
						sort: l,
						timeSort: c
					}
				}),
				B = Object(i.b)(C, (e, t) => ({
					onLoadMore: () => e(m.g()),
					onLayoutChange: () => e(m.h(Object.assign({}, t.match, {
						queryParams: a()([...Object(d.a)(t.location.search)])
					})))
				}));
			class O extends s.a.Component {
				render() {
					const {
						contentGateInfo: e,
						over18Prefs: t,
						isOwnProfile: n,
						isProfileNSFW: r,
						listingKey: a,
						onLoadMore: o,
						onLayoutChange: i,
						pageLayer: l,
						profileName: d,
						sort: u,
						timeSort: m
					} = this.props;
					if (!l || !d) return null;
					if (e && (e.profileDeleted || e.profileSuspended)) return s.a.createElement(h.default, {
						contentGateType: e.profileDeleted ? P.a.ProfileDeleted : P.a.ProfileSuspended,
						profileName: d
					});
					if (403 === l.status) return s.a.createElement(L.a, null);
					if (404 === l.status) return s.a.createElement(h.default, {
						contentGateType: P.a.ProfileDoesNotExist,
						profileName: d
					});
					const p = d.toLowerCase(),
						y = "/user/".concat(d, "/posts/"),
						j = {
							listingKey: a,
							listingName: p
						};
					if (!t && r && !n) return s.a.createElement(h.default, {
						contentGateType: P.a.Nsfw,
						subredditName: d
					});
					const N = {
						sort: u,
						baseUrl: y,
						sortOptions: c.qb,
						subredditId: this.props.subredditId,
						timeSort: m
					};
					return s.a.createElement(v.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: s.a.createElement(s.a.Fragment, null, s.a.createElement(_.a, {
							profileName: d
						})),
						content: s.a.createElement(s.a.Fragment, null, s.a.createElement(g.a, N), s.a.createElement(b.a, null), s.a.createElement(E.a, {
							listingKey: a,
							listingName: p,
							listingViewed: (e, t) => Object(k.m)(a, u, t, e, m),
							noPostsComponent: () => s.a.createElement(f.c, {
								profileName: d,
								timeSort: m
							}),
							onLoadMore: o,
							onTryAgain: i,
							inSubredditOrProfile: !1
						})),
						sidebar: s.a.createElement(x.a, S({}, j, {
							profileName: d
						}))
					})
				}
			}
			t.default = w(B(O))
		}
	}
]);
//# sourceMappingURL=ProfilePosts.05c1a9da66eda55efe04.js.map