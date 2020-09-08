// https://www.redditstatic.com/desktop2x/Multireddit.8e242508b4bf06f27f65.js
// Retrieved at 9/8/2020, 12:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit"], {
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				a = n("./node_modules/tlds/index.js"),
				i = n.n(a),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				l = n.n(c);
			const d = e => l()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				b = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				h = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				x = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				f = s()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				g = p.normalize;
			p.normalize = e => {
				g.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const y = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				E = e => {
					return [...x.match(e) || [], ...b.match(e) || []].map(e => !d(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				_ = (e, t) => {
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
				s = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const a = Object(s.e)(e),
					i = encodeURIComponent("".concat(t).concat(a));
				return "".concat(r.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(i)
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(d);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => a.a.createElement(o.d, null, a.a.createElement(o.h, null, a.a.createElement(l.a, null, a.a.createElement(o.p, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(o.b, null)))), a.a.createElement(o.k, null, a.a.createElement(o.o, {
				className: u.a.ModalText
			}, e.modalText)), a.a.createElement(o.f, null, !e.hideCancelButton && a.a.createElement(o.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), a.a.createElement(o.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
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
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/loginHref/index.ts"),
				d = n("./src/reddit/actions/contentGate.ts"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				h = n.n(b);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = p.a.div("FooterContainer", h.a), g = p.a.div("UserAgreement", h.a), y = p.a.a("UserAgreementLink", h.a), E = p.a.a("PrivacyLink", h.a);
			var _ = () => a.a.createElement(f, null, a.a.createElement(g, null, x._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [x._param("=User Agreement", a.a.createElement(y, {
					href: "".concat(r.a.redditUrl, "/help/useragreement")
				}, x._("User Agreement", null, {
					hk: "2srkM2"
				}))), x._param("=Privacy Policy", a.a.createElement(E, {
					href: "".concat(r.a.redditUrl, "/help/privacypolicy")
				}, x._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), x._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				k = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = n("./src/reddit/components/RichTextJson/index.tsx"),
				O = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				j = n.n(O),
				C = n("./src/lib/linkMatchers/index.ts"),
				w = n("./src/lib/linkMatchers/customLinks.ts"),
				T = n("./src/reddit/controls/OutboundLink/index.tsx");
			const L = /\[(.+?)\]\((.+?)\)/g,
				N = e => {
					const t = e.split(L);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, s, a] = t.slice(r, r + 3);
						n.push(e), n.push([a, s])
					}
					return n
				};
			var S = a.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = j()(t, N)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = C.e.add(w.g.subreddit.prefix, w.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const s of t) n.push(e.slice(r ? r.lastIndex : 0, s.index)), r = s, n.push([s.url, s.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, s] = t;
							return a.a.createElement(T.b, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, s)
						}
						return a.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				B = n("./src/reddit/contexts/PageLayer/index.tsx"),
				P = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/models/ContentGate.ts"),
				D = n("./src/reddit/selectors/meta.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/ContentGate/index.m.less"),
				R = n.n(F);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = p.a.div("ButtonsContainer", R.a), H = p.a.div("Container", R.a), z = p.a.div("Description", R.a), G = p.a.div("PrivateSubredditDetails", R.a), W = p.a.div("PrivateSubredditDescription", R.a), J = p.a.h3("PrivateSubredditName", R.a), V = p.a.a("Link", R.a), X = p.a.wrapped(P.h, "LinkRouterButton", R.a), K = p.a.wrapped(P.g, "LinkButton", R.a), Z = p.a.wrapped(P.k, "SecondaryLinkRouterButton", R.a), q = p.a.wrapped(P.j, "SecondaryLinkButton", R.a), Y = p.a.wrapped(X, "GoHomeLinkButton", R.a), Q = p.a.img("Image", R.a), $ = p.a.img("ImagePlaceholder", R.a), ee = p.a.wrapped(X, "LeftLinkRouterButton", R.a), te = p.a.wrapped(K, "LeftLinkButton", R.a), ne = p.a.wrapped(q, "SecondaryLeftLinkButton", R.a), re = p.a.wrapped(Z, "SecondaryLeftLinkRouterButton", R.a), se = p.a.h3("Title", R.a), ae = p.a.div("PageBody", R.a), ie = p.a.div("QuarantineMessageWrapper", R.a), oe = Object(c.c)({
				isLoggedIn: M.G,
				origin: D.l,
				user: M.i
			}), ce = Object(B.t)(), le = Object(i.b)(oe, (e, t) => {
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
					continueToQuarantinedSubreddit: s,
					isLoggedIn: i,
					location: o,
					origin: c,
					pageLayer: u,
					quarantineRequiresEmail: p,
					quarantineMessage: b,
					quarantineMessageHtml: h,
					quarantineMessageRTJson: x,
					setNSFWPreference: f,
					subredditDescription: g,
					subredditName: y,
					user: E
				} = e, _ = () => {
					i ? f() : Object(d.k)(), window.location.reload()
				};
				switch (n) {
					case I.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/gold/premium-crest.png")
						}), a.a.createElement(se, null, A._("r/{community name} is a Reddit Premium community", [A._param("community name", y)], {
							hk: "2lyDwB"
						})), a.a.createElement(z, null, A._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(U, null, E ? a.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/premium")
						}, A._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(te, {
							href: Object(l.a)(o, c)
						}, A._("Sign Up", null, {
							hk: "rvpjy"
						})), E ? a.a.createElement(X, {
							to: "/"
						}, A._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(q, {
							href: Object(l.a)(o, c)
						}, A._("Log in", null, {
							hk: "odEG4"
						}))));
					case I.a.Nsfw:
					case I.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), a.a.createElement(se, null, n === I.a.Nsfw ? A._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : A._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(z, null, A._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(U, null, a.a.createElement(ee, {
							to: "/"
						}, A._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(q, {
							onClick: _
						}, A._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case I.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/private.png")
						}), a.a.createElement(se, null, A._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), g && g.length && a.a.createElement(G, null, a.a.createElement(J, null, "r/", y), a.a.createElement(W, null, a.a.createElement("div", null, g))), a.a.createElement(z, null, A._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), a.a.createElement(U, null, E ? a.a.createElement(ne, {
							href: "".concat(r.a.redditUrl, "/message/compose?to=/r/").concat(y)
						}, A._("Message Mods", null, {
							hk: "vVe1i"
						})) : a.a.createElement(ne, {
							href: Object(l.a)(o, c)
						}, A._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(X, {
							to: "/"
						}, E ? A._("Go Home", null, {
							hk: "49p4or"
						}) : A._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case I.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), a.a.createElement(se, null, A._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(z, null, A._("This community is {=quarantined}", [A._param("=quarantined", a.a.createElement(V, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, A._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(ie, null, x ? a.a.createElement(v.a, {
							content: x,
							rtJsonElementProps: {
								pageLayer: u
							}
						}) : h ? a.a.createElement(k.a, {
							html: h
						}) : b || A._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), A._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(U, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? a.a.createElement(U, null, a.a.createElement(re, {
								to: "/"
							}, A._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(K, {
								href: "".concat(r.a.redditUrl, "/prefs/update")
							}, A._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(U, null, a.a.createElement(ee, {
								to: "/"
							}, A._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(q, {
								onClick: t
							}, A._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(E, s, p)));
					case I.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/content-gate-icons/banned.png")
						}), a.a.createElement(se, null, A._("r/{community name} has been banned from Reddit", [A._param("community name", y)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(z, null, e ? a.a.createElement(S, {
							linkClassName: R.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : A._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(U, null, a.a.createElement(X, {
							to: "/"
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case I.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(se, null, A._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(U, null, a.a.createElement(X, {
							to: "/"
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case I.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement($, null), a.a.createElement(se, null, A._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(z, null, A._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(U, null, E && a.a.createElement(m.a, {
							eventSource: "content_gate"
						}), a.a.createElement(Y, {
							to: "/"
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case I.a.ProfileDoesNotExist:
					case I.a.ProfileDeleted:
					case I.a.ProfileSuspended:
					case I.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(se, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case I.a.ProfileBlockedForLegalReason:
									return A._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case I.a.ProfileDeleted:
									return A._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case I.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, A._("This account has been {=suspended} .", [A._param("=suspended", a.a.createElement(V, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, A._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case I.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(se, null, A._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(z, null, A._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(U, null, a.a.createElement(Y, {
							to: "/"
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case I.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(se, null, A._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(U, null, a.a.createElement(Y, {
							to: "/"
						}, A._("Go Home", null, {
							hk: "49p4or"
						}))));
					case I.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Q, {
							src: "".concat(r.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), a.a.createElement(se, null, A._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(U, null, a.a.createElement(X, {
							to: "/"
						}, A._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = ce(le(Object(o.i)(e => a.a.createElement(H, null, a.a.createElement("div", null, a.a.createElement(ae, null, de(e))), a.a.createElement(_, null)))))
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
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = n.n(h),
				f = n("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				y = f.a.wrapped(u.i, "SecondaryButton", x.a),
				E = f.a.wrapped(l.c, "StyledTooltip", x.a),
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
						tooltipId: g
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(d.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: i,
					openCommunityCreation: o,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: l,
					userIsSuspended: d
				} = e;
				return a.a.createElement(y, {
					className: t,
					disabled: d || l,
					onClick: () => o(c),
					onMouseEnter: s,
					onMouseLeave: i,
					id: g
				}, r.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), l ? a.a.createElement(E, {
					caretOnTop: !0,
					tooltipId: g,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? a.a.createElement(E, {
					caretOnTop: !0,
					tooltipId: g,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
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
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/PostList/index.tsx"),
				s = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(s.a)(r.a)
		},
		"./src/reddit/components/MultiredditTopBar/Button/index.m.less": function(e, t, n) {
			e.exports = {
				textBase: "LcUEFMijsseUG0elP8bNx",
				button: "_14uJB4G3tqOEYET63pRdyA",
				hoverText: "_3GSO2RiUsPx69akefymMHH",
				text: "_2RcDSmyTF8XzvMXlNYdfB3",
				withHover: "_1eiwN-M8gLxB0Wrix2rZI9",
				icon: "nVpAL8k7NeDtiXcPNAmaX"
			}
		},
		"./src/reddit/components/MultiredditTopBar/FollowButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3d7Sfwey7uejnzrmv0eHPD",
				isFollowed: "mmRAVpxPd7_dKF--axI5t"
			}
		},
		"./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				warning: "bX6SqXfzfxpv4GQbuIYVZ",
				button: "_1qiH6rUwyms3uD12BWyHR5"
			}
		},
		"./src/reddit/components/MultiredditTopBar/ShareMenu/index.m.less": function(e, t, n) {
			e.exports = {
				shareMenu: "_3mn7XQLztyLrhr3ZAQyl5y",
				shareIcon: "_373yJBxVgon33agUR-lV0m"
			}
		},
		"./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1doK8qD1dkYaqBY5YEJaOD",
				pencilIcon: "_3PELp5Muvbc7hRTVQW0VEa",
				dropdownRow: "KXZPPPGdP_LlVeAK0oMa",
				icon: "_3T9KQ0BWvW9jR5SmmqJgVE",
				public: "_1mAvxBXazRTEPbQEYYMhFI",
				private: "_2slZfnU3hwgD9b8dT79p1F"
			}
		},
		"./src/reddit/components/MultiredditTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1f7kdhvpHh0S3ClTn3xFCa",
				layoutContainer: "_2CnZ_NKcI15TLBqdLMIYmu",
				layoutCard: "_1xUCmooih5FTp8z5c-oD6U",
				actions: "_1T_vh62Hnliedh8W_NT8-m",
				icon: "_2xtXouwF6uqK9UUpun6xXY",
				content: "_3zG_bpPw8e9TAPq07QCJya",
				header: "_1-u63wf24mXQJg7YnYaR_O",
				multiredditName: "_3I-SyNPeXukMGT4sLs6sFH",
				flair: "_3OqxkWiGGZGmXF0KTa12_h",
				descriptionContainer: "_2SmhQkTKjbD38r3jy00afr",
				meta: "_9uTR_Kf5w51DX_D_Zzj6b",
				usernameLink: "_3O7szJf96hs9FVHDx2qH9d"
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
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/page.ts"),
				d = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(l.G)(t))
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
						"--RawHTMLDisplay-tr-even": Object(r.g)(Object(d.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(r.g)(Object(d.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(o.a)(b))
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
				return C
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/reddit/constants/elementClassNames.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				m = n.n(u),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const f = b.a.button("IconButton", m.a),
				g = b.a.wrapped(l.a, "SubscribeIcon", m.a),
				y = b.a.wrapped(c.a, "UnsubscribeIcon", m.a),
				E = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, r = x(e, ["border", "small"]);
					return a.a.createElement(f, r, a.a.createElement(g, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", m.a),
				_ = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, r = x(e, ["border", "small"]);
					return t ? a.a.createElement(o.f, h({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: n
						})
					})) : a.a.createElement(o.n, h({}, r, {
						className: Object(p.a)(r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", m.a),
				k = e => {
					var {
						icon: t
					} = e, n = x(e, ["icon"]);
					return t ? a.a.createElement(E, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : a.a.createElement(_, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				},
				v = b.a.wrapped(e => {
					var {
						border: t,
						small: n,
						type: r
					} = e, s = x(e, ["border", "small", "type"]);
					return a.a.createElement(f, s, a.a.createElement(y, {
						className: Object(p.a)(i.n, s.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				O = b.a.wrapped(e => {
					var {
						border: t,
						small: n,
						buttonType: s
					} = e, i = x(e, ["border", "small", "buttonType"]);
					const c = a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === s ? r.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : r.fbt._("Following", null, {
							hk: "1wQlVR"
						})), a.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === s ? r.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : r.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						l = Object(p.a)(i.className, {
							[m.a.isSmall]: n
						});
					return t ? a.a.createElement(o.i, h({}, i, {
						className: l
					}), c) : a.a.createElement(o.n, h({}, i, {
						className: l
					}), c)
				}, "UnsubscribeButton", m.a),
				j = e => {
					var {
						icon: t
					} = e, n = x(e, ["icon"]);
					return t ? a.a.createElement(v, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : a.a.createElement(O, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				};
			class C extends a.a.Component {
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
						small: s = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: s
					};
					return this.props.userIsSubscriber ? a.a.createElement(j, h({}, i, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(k, h({}, i, {
						id: r
					}), this.props.children, Object(d.a)({
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				a = {
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
				i = e => {
					let {
						type: t,
						key: n
					} = e;
					return a[s({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(a.a))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return T
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
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
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				y = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				E = n("./src/reddit/models/Flair/index.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				v = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = n.n(v);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => a.a.createElement(b.a, {
					className: Object(l.a)(O.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, a.a.createElement("div", {
					className: O.a.container
				}, e.isLoading ? a.a.createElement(f.a, {
					className: O.a.loadingIcon,
					sizePx: 32
				}) : a.a.createElement(a.a.Fragment, null, e.isError ? a.a.createElement("p", {
					className: O.a.errorMsg
				}, e.errorMsg || r.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : a.a.createElement(a.a.Fragment, null, e.communities.map(t => a.a.createElement(T, j({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && a.a.createElement(x.n, {
					className: O.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				w = Object(c.c)({
					hideNSFWPref: _.z
				}),
				T = Object(i.b)(w)(e => a.a.createElement("div", {
					className: O.a.communityItemContainer
				}, a.a.createElement(y.a, {
					widthRight: h.t
				}, a.a.createElement("div", {
					className: O.a.iconContainer
				}, e.communityIcon || e.iconUrl ? a.a.createElement("img", {
					className: O.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : a.a.createElement(g.a, {
					className: O.a.planetIcon,
					"data-redditstyle": !0
				})), a.a.createElement("div", {
					className: O.a.communityDescriptionContainer
				}, a.a.createElement(o.a, {
					className: O.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(k.b)(e.name, e.type),
					to: Object(k.a)(e.name, e.type)
				}, Object(k.b)(e.name, e.type)), a.a.createElement("div", {
					className: O.a.communityInfoContainer
				}, !!e.subscribers && a.a.createElement("p", {
					className: O.a.subscriberCount
				}, r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && a.a.createElement(d.b, {
					flair: {
						type: E.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? a.a.createElement(f.a, {
					className: Object(l.a)(O.a.communityCta, O.a.smallLoadingIcon),
					sizePx: 12
				}) : a.a.createElement(x.n, {
					className: Object(l.a)(O.a.communityCta, {
						[O.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? a.a.createElement(p, {
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
				}) : a.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && a.a.createElement("p", {
					title: e.description,
					className: O.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === r.a.PROFILE ? Object(s.c)(e) : Object(s.b)(e)
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
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "b", (function() {
				return C
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/actions/ads/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				d = n("./src/reddit/actions/survey/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				h = n("./src/reddit/components/PostList/Placeholder.tsx"),
				x = n("./src/reddit/featureFlags/index.ts"),
				f = n("./src/reddit/selectors/experiments/survey.ts"),
				g = n("./src/reddit/selectors/listings.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/selectors/tracking.ts");

			function k() {
				return Object(m.t)({
					currentProfileName: m.h,
					isCommentPermalink: m.v,
					isCommentsPage: m.w,
					isFrontpage: m.y,
					isProfilePostListing: m.I,
					isTopicPage: m.M,
					pageLayer: e => e
				})
			}
			const v = k(),
				O = {
					apiError: g.c,
					apiPending: g.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.N)(e, t),
					loadMore: g.g,
					postsById: y.Y,
					postIds: Object(a.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: s
						} = t;
						return Object(y.K)(e, n, r, s)
					}),
					subredditsById: E.Z,
					viewportDataLoaded: _.a,
					pageReferrer: m.Q,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: f.b
				},
				j = Object(s.c)(O),
				C = (e, t) => {
					let {
						isFrontpage: n
					} = t;
					return {
						onBottomViewed: (t, n) => e(l.c(t, n)),
						adBrandSafetyStatusReceived: t => {
							e(i.d({
								isViewSafe: t
							}))
						},
						openPost: t => {
							n && e(Object(o.a)({
								lastLoadedEnv: "server"
							})), e(c.C(t))
						},
						fireAdPixelsOfType: (t, n) => {
							e(c.t(t, n))
						},
						trackOnPostEnteredViewport: (t, n, r) => {
							e(c.F(t, r))
						},
						trackOnPostExitedViewport: (t, n, r, s) => {
							e(c.G(t, r, s))
						},
						surveyTriggerScrollCounted: () => e(Object(d.b)())
					}
				},
				w = Object(r.b)(j, C, (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), n), {
					postClickEvent: (e, t, r) => Object(b.f)(e, t, r, n.listingKey, n.hostPostId, n.listingBelowVariant),
					postComponentForLayout: e => Object(p.b)(Object.assign({}, e))
				}));
			t.a = e => Object(u.c)(v(w(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: i.eb
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
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const n = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === r.b.NO_ADS);
				return !n && !s
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Pencil/index.m.less"),
				o = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(a.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(i.b)("plus"), e.className)
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(o);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(i.b)("share"), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("title", null, "Planet"), s.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(o);
			t.a = Object(a.a)(e => s.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/Multireddit/index.m.less": function(e, t, n) {
			e.exports = {
				sidebar: "_398UHHJSXVL0IJVGTkTa9B",
				planetIcon: "_1r6EMjMnKM7lL8H8H3Vs4t",
				emptyMessageText: "_1rJj6Qsj1uaYq4iwCBZX9_",
				emptyMessage: "_23HF_LA75CXQvFP4nnxWQD"
			}
		},
		"./src/reddit/pages/Multireddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/es6.regexp.search.js"), n("./node_modules/core-js/modules/es6.array.sort.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/fromPairs.js"),
				a = n.n(s),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				p = n("./src/reddit/actions/multireddit/index.ts"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/helpers/trackers/screenview.ts"),
				x = n("./src/reddit/components/ContentGate/index.tsx"),
				f = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = n("./src/reddit/components/JumpToContent/index.tsx"),
				y = n("./src/reddit/components/ListingPostList/index.tsx"),
				E = n("./src/reddit/components/MultiredditSidebar/index.tsx"),
				_ = n("./src/lib/classNames/index.ts"),
				k = n("./src/reddit/components/Flair/index.tsx"),
				v = n("./src/reddit/actions/modal.ts"),
				O = n("./src/reddit/constants/modals.ts"),
				j = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				C = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				w = n("./src/reddit/icons/svgs/User/index.tsx"),
				T = n("./src/reddit/models/Multireddit/index.ts"),
				L = n("./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less"),
				N = n.n(L);
			const S = Object(c.b)(null, e => ({
					onEditClicked: () => e(Object(v.h)(O.a.MULTIREDDIT_EDIT))
				})),
				B = {
					[T.e.Public]: {
						icon: o.a.createElement(w.a, {
							className: Object(_.a)(N.a.icon, N.a.public)
						}),
						text: r.fbt._("Public", null, {
							hk: "8ZeHp"
						})
					},
					[T.e.Hidden]: {
						icon: o.a.createElement(w.a, {
							className: Object(_.a)(N.a.icon, N.a.public)
						}),
						text: r.fbt._("Hidden", null, {
							hk: "1qlAJf"
						})
					},
					[T.e.Private]: {
						icon: o.a.createElement(C.a, {
							className: Object(_.a)(N.a.icon, N.a.private)
						}),
						text: r.fbt._("Private", null, {
							hk: "2HVerT"
						})
					}
				};
			var P = S(e => {
					const {
						multireddit: t,
						onEditClicked: n
					} = e;
					return o.a.createElement(o.a.Fragment, null, B[t.visibility].icon, B[t.visibility].text, o.a.createElement("button", {
						className: N.a.button,
						onClick: n
					}, o.a.createElement(j.a, {
						className: N.a.pencilIcon
					})))
				}),
				I = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				D = n("./src/reddit/components/RichTextJson/index.tsx"),
				M = n("./src/reddit/constants/postLayout.ts"),
				F = n("./src/reddit/contexts/PageLayer/index.tsx"),
				R = n("./src/reddit/controls/InternalLink/index.tsx"),
				A = n("./src/reddit/helpers/name/index.ts"),
				U = n("./src/reddit/models/Flair/index.ts"),
				H = n("./src/reddit/selectors/multireddit.ts"),
				z = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/actions/subscription/index.ts"),
				W = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/reddit/components/MultiredditTopBar/Button/index.m.less")),
				J = n.n(W);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var X = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			var K = o.a.memo(e => {
					var {
						className: t,
						onClick: n,
						children: r,
						hoverText: s,
						text: a,
						icon: i
					} = e, c = X(e, ["className", "onClick", "children", "hoverText", "text", "icon"]);
					return o.a.createElement("button", V({
						className: Object(_.a)(t, J.a.button, s ? J.a.withHover : null),
						onClick: n
					}, c), o.a.createElement("span", {
						className: J.a.icon
					}, i), a && o.a.createElement("span", {
						className: J.a.text
					}, a), s && o.a.createElement("span", {
						className: J.a.hoverText
					}, s), r)
				}),
				Z = n("./src/reddit/components/TrackingHelper/index.tsx"),
				q = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				Y = n("./src/reddit/icons/fonts/Plus/index.tsx"),
				Q = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				$ = n("./src/reddit/components/MultiredditTopBar/FollowButton/index.m.less"),
				ee = n.n($);
			const te = Object(c.b)(null, (e, t) => ({
				onFollowClick: () => {
					e(Object(G.b)(t.multireddit.url)), t.multireddit.isFollowed ? t.sendEvent(Object(q.g)(t.multireddit.url)) : t.sendEvent(Object(q.d)(t.multireddit.url))
				}
			}));
			var ne = Object(Z.c)(te(e => o.a.createElement(K, {
					className: Object(_.a)(ee.a.button, e.multireddit.isFollowed ? ee.a.isFollowed : null),
					hoverText: e.multireddit.isFollowed ? r.fbt._("Unfollow", null, {
						hk: "PezOE"
					}) : void 0,
					icon: e.multireddit.isFollowed ? o.a.createElement(Q.a, null) : o.a.createElement(Y.a, null),
					onClick: e.onFollowClick,
					text: e.multireddit.isFollowed ? r.fbt._("Following", null, {
						hk: "1wsu4d"
					}) : r.fbt._("Follow", null, {
						hk: "1DZLve"
					})
				}))),
				re = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				se = n("./src/reddit/components/OverflowMenu/index.tsx"),
				ae = n("./src/reddit/controls/Dropdown/Row.tsx"),
				ie = n("./src/reddit/selectors/activeModalId.ts"),
				oe = n("./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less"),
				ce = n.n(oe);
			const le = Object(l.c)({
				isConfirmDeleteOpen: e => "MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION" === Object(ie.a)(e),
				showOwnerButtons: (e, t) => Object(H.c)(e, t.multireddit.url)
			});
			var de = Object(c.b)(le, (e, t) => ({
					deleteConfirmed: () => e(Object(p.c)(t.multireddit.url)),
					onDuplicateClicked: () => e(Object(v.h)(O.a.MULTIREDDIT_DUPLICATE)),
					onEdit: () => e(Object(v.h)(O.a.MULTIREDDIT_EDIT)),
					toggleConfirmDelete: () => e(Object(v.i)("MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION"))
				}))(Object(Z.c)(e => {
					const {
						deleteConfirmed: t,
						isConfirmDeleteOpen: n,
						multireddit: s,
						onDuplicateClicked: a,
						onEdit: i,
						sendEvent: c,
						showOwnerButtons: l,
						toggleConfirmDelete: d
					} = e;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(se.b, {
						className: ce.a.button,
						dropdownId: "MULTIREDDIT_TOP_BAR_OVERFLOW",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, l && o.a.createElement(ae.b, {
						displayText: r.fbt._("Edit Details", null, {
							hk: "q4B9D"
						}),
						onClick: i
					}), o.a.createElement(ae.b, {
						displayText: r.fbt._("Duplicate", null, {
							hk: "4DZaW1"
						}),
						onClick: a
					}), l && o.a.createElement(ae.b, {
						className: Object(_.a)(ce.a.warning),
						displayText: r.fbt._("Delete Custom Feed", null, {
							hk: "3QSOzN"
						}),
						onClick: d
					})), n && o.a.createElement(re.a, {
						toggleModal: d,
						onConfirm: t,
						actionText: r.fbt._("Delete", null, {
							hk: "3PGKcp"
						}),
						cancelActionText: r.fbt._("Keep", null, {
							hk: "1nkPG8"
						}),
						headerText: r.fbt._("Delete Custom Feed?", null, {
							hk: "szoK6"
						}),
						modalText: r.fbt._("Are you sure you would like to delete this Custom Feed? This will not affect the communities you have added.", null, {
							hk: "2GGkLQ"
						}),
						trackClick: () => {
							c(Object(q.a)(s.url))
						},
						withOverlay: !0
					}))
				})),
				ue = n("./node_modules/lodash/noop.js"),
				me = n.n(ue),
				pe = n("./src/config.ts"),
				be = n("./src/lib/copyToClipboard/index.ts"),
				he = n("./src/reddit/actions/toaster.ts"),
				xe = n("./src/reddit/actions/tooltip.ts"),
				fe = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ge = n("./src/reddit/controls/Dropdown/index.tsx"),
				ye = n("./src/reddit/icons/fonts/Share/index.tsx"),
				Ee = n("./src/reddit/models/Toast/index.ts"),
				_e = n("./src/reddit/selectors/tooltip.ts"),
				ke = n("./src/reddit/components/MultiredditTopBar/ShareMenu/index.m.less"),
				ve = n.n(ke);
			const Oe = "MULTIREDDIT_TOP_BAR_SHARE",
				je = Object(fe.a)(ge.a),
				Ce = Object(l.c)({
					isConfirmPublicOpen: e => "MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION" === Object(ie.a)(e),
					isDropdownOpen: Object(_e.b)(Oe),
					isUpdatePending: e => e.multireddits.api.edit.pending
				}),
				we = Object(c.b)(Ce, (e, t) => ({
					copyLink: () => {
						if (Object(be.a)(pe.a.redditUrl + t.multireddit.url)) {
							const t = Object(he.d)(r.fbt._("Copied link!", null, {
								hk: "2IxdQz"
							}), Ee.b.SuccessCommunity);
							e(Object(he.e)(t))
						} else {
							const t = Object(he.d)(r.fbt._("Something went wrong", null, {
								hk: "GmeVt"
							}), Ee.b.Error);
							e(Object(he.e)(t))
						}
					},
					toggleConfirmPublic: () => e(Object(v.i)("MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION")),
					toggleDropdown: () => {
						e(Object(xe.h)({
							tooltipId: Oe
						})), t.sendEvent(Object(q.e)(t.multireddit.url))
					},
					updateVisibility: n => e(Object(p.e)({
						multipath: t.multireddit.url,
						visibility: n
					}))
				}));
			class Te extends o.a.Component {
				constructor() {
					super(...arguments), this.onShareButtonClick = async () => {
						this.props.multireddit.visibility === T.e.Private ? this.props.toggleConfirmPublic() : this.props.toggleDropdown()
					}, this.onMakePublicConfirm = () => {
						this.props.updateVisibility(T.e.Public)
					}
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(K, {
						className: ve.a.shareMenu,
						disabled: this.props.isUpdatePending,
						icon: o.a.createElement(ye.a, {
							className: ve.a.shareIcon
						}),
						id: Oe,
						onClick: this.onShareButtonClick,
						text: r.fbt._("Share", null, {
							hk: "2e7dE3"
						})
					}, o.a.createElement(je, {
						isOpen: this.props.isDropdownOpen,
						tooltipId: Oe,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(ae.b, {
						displayText: r.fbt._("Copy link", null, {
							hk: "1RMEDS"
						}),
						onClick: this.props.copyLink
					}))), this.props.isConfirmPublicOpen && o.a.createElement(re.a, {
						toggleModal: this.props.toggleConfirmPublic,
						onConfirm: this.onMakePublicConfirm,
						actionText: r.fbt._("Make public", null, {
							hk: "2jdbN"
						}),
						headerText: r.fbt._("Make Custom Feed Public?", null, {
							hk: "3UHhCD"
						}),
						modalText: o.a.createElement(o.a.Fragment, null, r.fbt._("This Custom Feed is currently private.", null, {
							hk: "15Ymz2"
						}), o.a.createElement("br", null), o.a.createElement("br", null), r.fbt._("Would you like to make it public so you can share it with other people?", null, {
							hk: "3IbJao"
						})),
						trackClick: me.a,
						withOverlay: !0
					}))
				}
			}
			var Le = Object(Z.c)(we(Te)),
				Ne = n("./src/reddit/components/MultiredditTopBar/index.m.less"),
				Se = n.n(Ne);
			const {
				fbt: Be
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pe = Object(l.c)({
				isLoggedIn: z.H,
				layout: (e, t) => M.e[Object(F.N)(e, t)],
				userIsOwner: (e, t) => Object(H.c)(e, t.multireddit.url)
			}), Ie = Object(c.b)(Pe), De = Object(F.t)(), Me = {};
			var Fe = De(Ie(e => o.a.createElement("div", {
					className: Se.a.container
				}, o.a.createElement("div", {
					className: Object(_.a)(Se.a.layoutContainer, e.layout === M.d.Card ? Se.a.layoutCard : null)
				}, o.a.createElement("img", {
					className: Se.a.icon,
					src: e.multireddit.icon
				}), o.a.createElement("div", {
					className: Se.a.content
				}, o.a.createElement("div", {
					className: Se.a.header
				}, o.a.createElement("h1", {
					className: Se.a.multiredditName
				}, e.multireddit.displayText), e.multireddit.isNSFW && o.a.createElement(k.b, {
					className: Se.a.flair,
					flair: {
						type: U.f.Nsfw,
						text: "nsfw"
					}
				})), o.a.createElement("div", {
					className: Se.a.meta
				}, Be._({
					"*": "{communitiesCount} communities in this custom feed",
					_1: "1 community in this custom feed"
				}, [Be._plural(e.multireddit.subredditCount, "communitiesCount")], {
					hk: "12Ej7M"
				}), o.a.createElement("span", null, " • "), e.userIsOwner ? o.a.createElement(P, {
					multireddit: e.multireddit
				}) : o.a.createElement(o.a.Fragment, null, Be._("Curated by {multiredditFeedAuthorLink}", [Be._param("multiredditFeedAuthorLink", o.a.createElement(R.a, {
					className: Se.a.usernameLink,
					to: "/".concat(Object(A.c)(Object(T.i)(e.multireddit.url)))
				}, Object(A.c)(Object(T.i)(e.multireddit.url))))], {
					hk: "3AKmgH"
				}))), o.a.createElement("div", {
					className: Se.a.descriptionContainer
				}, e.multireddit.descriptionRtJson ? o.a.createElement(D.a, {
					content: e.multireddit.descriptionRtJson,
					rtJsonElementProps: Me
				}) : o.a.createElement(I.a, {
					html: e.multireddit.descriptionHtml || e.multireddit.description
				}))), o.a.createElement("div", {
					className: Se.a.actions
				}, !e.userIsOwner && e.isLoggedIn && o.a.createElement(ne, {
					multireddit: e.multireddit
				}), o.a.createElement(Le, {
					multireddit: e.multireddit
				}), e.isLoggedIn && o.a.createElement(de, {
					multireddit: e.multireddit
				})))))),
				Re = n("./src/reddit/icons/svgs/Planet/index.tsx"),
				Ae = n("./src/reddit/layout/page/Listing/index.tsx"),
				Ue = n("./src/reddit/models/ContentGate.ts"),
				He = n("./src/reddit/pages/Multireddit/index.m.less"),
				ze = n.n(He);
			const Ge = e => o.a.createElement("div", {
					className: ze.a.emptyMessage
				}, o.a.createElement(Re.a, {
					className: ze.a.planetIcon
				}), o.a.createElement("div", {
					className: ze.a.emptyMessageText
				}, e.multireddit && 0 !== e.multireddit.subredditCount ? r.fbt._("There are no posts in this custom feed", null, {
					hk: "16ubpi"
				}) : r.fbt._("There are 0 communities in this custom feed", null, {
					hk: "tKC2v"
				}))),
				We = Object(F.t)({
					currentMultireddit: F.c,
					pageLayer: e => e
				}),
				Je = (e, t) => {
					let {
						match: n
					} = t;
					return n.params.sort || d.O.HOT
				},
				Ve = (e, t) => {
					let {
						location: n
					} = t;
					return a()([...Object(u.a)(n.search)])
				},
				Xe = (e, t) => {
					const n = Object(F.d)(e, {
						pageLayer: t.pageLayer
					});
					if (n) return n.url; {
						const {
							currentMultireddit: e
						} = t;
						if (!e) return "";
						const {
							multiredditName: n,
							username: r
						} = e;
						return Object(T.h)(r || "me", n)
					}
				},
				Ke = Object(l.a)(Je, Ve, Xe, (e, t, n) => Object(m.a)(n, e, t)),
				Ze = Object(l.a)(Ve, e => {
					const t = b.u in e && e[b.u].toUpperCase();
					return "string" == typeof t && t in d.Sb ? d.Sb[t] : d.Tb
				}),
				qe = Object(l.c)({
					listingKey: Ke,
					listingName: Xe,
					multireddit: F.d,
					over18Prefs: z.V,
					sort: Je,
					timeSort: Ze
				});
			class Ye extends o.a.Component {
				constructor() {
					super(...arguments), this.noPosts = () => o.a.createElement(Ge, {
						multireddit: this.props.multireddit
					})
				}
				render() {
					const {
						listingKey: e,
						listingName: t,
						match: {
							params: {
								username: n
							}
						},
						multireddit: r,
						over18Prefs: s,
						sort: a,
						timeSort: i
					} = this.props;
					return r ? r.isNSFW && !s ? o.a.createElement(x.default, {
						contentGateType: Ue.a.NsfwCustomFeed
					}) : o.a.createElement(Ae.a, {
						className: this.props.className,
						content: o.a.createElement(o.a.Fragment, null, r && o.a.createElement(f.a, {
							sort: a,
							baseUrl: n ? r.url.replace(/\/$/, "") : "/me/m/".concat(r.name),
							timeSort: i
						}), o.a.createElement(g.a, null), o.a.createElement(y.a, {
							listingKey: e,
							listingName: t,
							listingViewed: (t, n) => Object(h.e)(e, a, n, t, i),
							noPostsComponent: this.noPosts,
							onLoadMore: this.props.onLoadMorePosts,
							inSubredditOrProfile: !1
						})),
						contentNavBar: r ? o.a.createElement(o.a.Fragment, null, Object(T.f)(r) && o.a.createElement(Fe, {
							multireddit: r
						})) : null,
						fitPageToContent: !0,
						sidebar: r ? o.a.createElement(E.a, {
							className: ze.a.sidebar,
							listingKey: e,
							listingName: t,
							multireddit: r,
							multiUsername: n
						}) : null
					}) : o.a.createElement(x.default, {
						contentGateType: Ue.a.CustomFeedDoesNotExist
					})
				}
			}
			const Qe = We(Object(c.b)(qe, (e, t) => ({
				onLoadMorePosts: () => e(Object(p.f)({
					sort: t.match.params.sort,
					multiredditName: t.match.params.multiredditName,
					username: t.match.params.username
				}))
			}))(Ye));
			t.default = e => o.a.createElement(Qe, e)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Multireddit.8e242508b4bf06f27f65.js.map